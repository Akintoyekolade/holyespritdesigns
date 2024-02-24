class MainHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <header class="header-area header-sticky">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <nav class="main-nav">
                        <!-- ***** Logo Start ***** -->
                        <a href="index.html" class="logo">
                            <img src="assets/images/HED - Black.png">
                        </a>
                        <!-- ***** Logo End ***** -->

                        <!-- ***** Menu Start ***** -->
                        <ul class="nav">
                            <li class="scroll-to-section"><a href="index.html" class="">HOME</a></li>
                            <li class="nav-item"><a href="products.html">SHOP ALL</a></li>
                            <li class="scroll-to-section"><a href="#Hoodie">HOODIES</a></li>
                            <li class="scroll-to-section"><a href="#sweatshirt">SWEATSHIRTS</a></li>
                            <li class="scroll-to-section"><a href="#tshirt">T-SHIRTS</a></li>
                            <li class="scroll-to-section"><a href="#accessories">ACCESSORIES</a></li>                        
                            <li class="submenu">
                                <a href="javascript:;">ABOUT US</a>
                                <ul>
                                    <li><a href="about.html">OUR MISSION</a></li>                                    
                                    <li><a href="contact.html">CONTACT US</a></li>                                
                                    <li class="scroll-to-section"><a href="#mission">MISSION</a></li>
                                </ul>
                            </li>
                        </ul>        
                        <a class='menu-trigger'>
                            <span>Menu</span>
                        </a>
                        <!-- ***** Menu End ***** -->
                    </nav>
                </div>
            </div>
        </div>
    </header>
    `

        // Script for setting active nav item
        const navLinks = this.querySelectorAll('.nav a');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navLinks.forEach(link => link.classList.remove('active'));
                this.classList.add('active');
            });
        });
    }
}

customElements.define('my-header', MainHeader)

// navigation.js

document.addEventListener("DOMContentLoaded", function() {
    const currentLocation = location.href;
    const navLinks = document.querySelectorAll(".nav a");

    navLinks.forEach(link => {
        if (link.href === currentLocation) {
            link.classList.add("active");
        }
    });
});