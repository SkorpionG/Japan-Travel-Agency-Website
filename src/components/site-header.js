class SiteHeader extends HTMLElement {
    connectedCallback() {
        const root = this.getAttribute('root') || './';
        const active = this.getAttribute('active') || '';
        const year = new Date().getFullYear();
        
        this.innerHTML = `
        <header>
            <a href="${root}index.html" class="logo">
                <img src="${root}public/assets/網站Logo.svg" alt="日本旅遊網Logo" />
                <h1><span class="year">${year}</span>日本旅遊推薦</h1>
            </a>
            <nav>
                <ul>
                    <li><a href="${root}index.html" class="${active === 'index' ? 'active' : ''}"><i class="fa-solid fa-plane"></i> 日本旅遊</a></li>
                    <li><a href="${root}src/pages/member-login.html" class="${active === 'member-login' ? 'active' : ''}"><i class="fa-solid fa-right-to-bracket"></i> 會員登入</a></li>
                    <li><a href="${root}src/pages/reservation.html" class="${active === 'reservation' ? 'active' : ''}"><i class="fa-solid fa-book"></i> 預約行程</a></li>
                    <li><a href="${root}src/pages/contact.html" class="${active === 'contact' ? 'active' : ''}"><i class="fa-regular fa-address-book"></i> 聯絡我們</a></li>
                    <li><a href="${root}src/pages/about.html" class="${active === 'about' ? 'active' : ''}"><i class="fa-solid fa-circle-info"></i> 關於我們</a></li>
                </ul>
            </nav>
        </header>
        `;
        
        // Add fade-in transition
        this.style.opacity = '0';
        this.style.transition = 'opacity 0.2s ease-in-out';
        setTimeout(() => {
            this.style.opacity = '1';
        }, 10);
    }
}
customElements.define('site-header', SiteHeader);
