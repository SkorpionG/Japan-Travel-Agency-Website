class SiteMetadata extends HTMLElement {
    #hasInjected = false;

    connectedCallback() {
        if (this.#hasInjected) return;
        this.#hasInjected = true;

        const title = this.getAttribute('title') || '日本旅遊推薦';
        const description = this.getAttribute('description') || '';
        const keywords = this.getAttribute('keywords') || '';
        const root = this.getAttribute('root') || './';

        const resolveUrl = (path) => {
            try {
                return new URL(path, window.location.href).href;
            } catch {
                return path;
            }
        };

        const currentCanonicalUrl =
            typeof window !== 'undefined' &&
            window.location.origin &&
            window.location.origin !== 'null'
                ? `${window.location.origin}${window.location.pathname}`
                : typeof window !== 'undefined'
                  ? window.location.href.split(/[?#]/)[0]
                  : '';

        const rawUrl = this.getAttribute('url');
        const url = rawUrl ? resolveUrl(rawUrl) : currentCanonicalUrl;

        const rawOgImage = this.getAttribute('og-image');
        const ogImage = rawOgImage
            ? resolveUrl(rawOgImage)
            : resolveUrl(`${root}public/assets/og-image.png`);

        const rawTwitterImage = this.getAttribute('twitter-image');
        const twitterImage = rawTwitterImage
            ? resolveUrl(rawTwitterImage)
            : resolveUrl(`${root}public/assets/twitter-image.png`);

        const favicon = `${root}public/favicon.svg`;

        const html = `
        <title>${title}</title>

        <!-- Primary SEO Meta Tags -->
        <meta name="description" content="${description}">
        <meta name="keywords" content="${keywords}">
        <meta name="author" content="日本旅遊推薦">
        <link rel="canonical" href="${url}">
        <!-- <meta name="robots" content="index, follow"> -->

        <!-- Open Graph / Facebook -->
        <meta property="og:type" content="website">
        <meta property="og:url" content="${url}">
        <meta property="og:title" content="${title}">
        <meta property="og:description" content="${description}">
        <meta property="og:image" content="${ogImage}">
        <meta property="og:site_name" content="日本旅遊推薦">

        <!-- Twitter -->
        <meta property="twitter:card" content="summary_large_image">
        <meta property="twitter:url" content="${url}">
        <meta property="twitter:title" content="${title}">
        <meta property="twitter:description" content="${description}">
        <meta property="twitter:image" content="${twitterImage}">

        <!-- Favicon -->
        <link rel="icon" href="${favicon}" type="image/svg+xml">
        <link rel="apple-touch-icon" href="${favicon}">
        `;

        document.head.insertAdjacentHTML('beforeend', html);
    }
}

customElements.define('site-metadata', SiteMetadata);
