class SiteMetadata extends HTMLElement {
    connectedCallback() {
        const title = this.getAttribute('title') || '日本旅遊推薦';
        const description = this.getAttribute('description') || '';
        const keywords = this.getAttribute('keywords') || '';
        const url =
            this.getAttribute('url') || 'https://skorpiong.github.io/Japan-Travel-Agency-Website/';
        const root = this.getAttribute('root') || './';
        const ogImage =
            'https://skorpiong.github.io/Japan-Travel-Agency-Website/public/assets/og-image.png';
        const twitterImage =
            'https://skorpiong.github.io/Japan-Travel-Agency-Website/public/assets/twitter-image.png';
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
