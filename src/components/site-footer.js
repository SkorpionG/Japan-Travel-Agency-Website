class SiteFooter extends HTMLElement {
    connectedCallback() {
        const root = this.getAttribute('root') || './';
        const year = new Date().getFullYear();

        this.innerHTML = `
        <footer>
            <section class="logo">
                <img src="${root}public/assets/網站Logo.svg" alt="日本旅遊網Logo" />
                <h3><span class="year">${year}</span>日本旅遊推薦</h3>
            </section>
            <section class="links" id="contact">
                <a href="https://www.facebook.com/"><img title="Facebook 粉絲頁" src="${root}public/icons/facebook.svg"
                        alt="facebook logo" /></a>
                <a href="https://www.instagram.com/"><img title="Instagram 頁面" src="${root}public/icons/instagram.svg"
                        alt="instagram logo" /></a>
                <a href="https://x.com/"><img title="Twitter (X) 頁面" src="${root}public/icons/twitter.svg"
                        alt="twitter logo" /></a>
                <a href="https://www.youtube.com/"><img title="YouTube 頻道" src="${root}public/icons/youtube.svg"
                        alt="youtube logo" /></a>
            </section>
        </footer>
        `;

        // Add fade-in transition
        this.style.opacity = '0';
        this.style.transition = 'opacity 0.2s ease-in-out';
        setTimeout(() => {
            this.style.opacity = '1';
        }, 10);
    }
}
customElements.define('site-footer', SiteFooter);
