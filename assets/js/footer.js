class mainFooter extends HTMLElement {
    connectedCallback() { 
        //footer here
        this.innerHTML = ` 
        <footer>
        <div class="container">
            <div class="row">
                <div class="col-lg-3">
                    <div class="first-item">
                        <div class="logo">
                            <img src="assets/images/HED.png" alt="Holy-Esprit Designs logo">
                        </div>
                        <div class="social-connect">
                            <h5>Connect with us online</h5>
                            <ul>                                
                                <li title="facebook"><a href="#"><i class="fa fa-facebook"></i></a></li>
                                <li title="Follow us on Instagram"><a href="https://www.instagram.com/holy_esprit.designs?igsh=OGQ5ZDc2ODk2ZA%3D%3D&utm_source=qr" target="_blank"><i class="fa fa-instagram"></i></a></li>
                                <li class="tiktok-icon" title="Tiktok">
                                    <a href="http://www.tiktok.com/@holyesprit.design" target="_blank">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-tiktok" viewBox="0 0 16 16">
                                            <path d="M9 0h1.98c.144.715.54 1.617 1.235 2.512C12.895 3.389 13.797 4 15 4v2c-1.753 0-3.07-.814-4-1.829V11a5 5 0 1 1-5-5v2a3 3 0 1 0 3 3z"/>
                                        </svg>
                                    </a>
                                </li>
                                <li class="social wechat-icon" title="WeChat"><a href="#" target="_blank"><i class="fa fa-wechat"></i><img src="assets/images/WeChat-QR-code.png" alt="QR Code" class="social-code wechat-qr-code-image"></a></li>
                                <li class="social whatsapp-icon"><a href="https://wa.me/qr/CVG7HDEAQGHEB1" target="_blank"><i class="fa fa-whatsapp"></i><img src="assets/images/Whatsapp.png" alt="QR Code" class="social-code whatsapp-qr-code-image"></a></li>
                            </ul>  
                        </div>
                                              
                    </div>
                </div>
                <div class="col-lg-3">
                    <h4>All Categories</h4>
                    <ul>
                        <li><a href="#Hoodie">Hoodies</a></li>
                        <li><a href="#tshirt">T-Shirts</a></li>
                        <li><a href="#sweatshirt">Sweatshirts</a></li>
                    </ul>
                </div>
                <div class="col-lg-3">
                    <h4>Useful Links</h4>
                    <ul>
                        <li><a href="#">Homepage</a></li>
                        <li><a href="about.html">About Us</a></li>
                        <li><a href="products.html">Our Products</a></li>
                        <li><a href="products.html">Privacy Policy</a></li>
                    </ul>
                </div>
                <div class="col-lg-3">
                    <h4>Have Questions &amp; Suggestions?</h4>
                    <ul>
                        <li><a href="contact.html">Contact Us</a></li> 
                    </ul>
                    
                    <div class="footer-contact">
                        <div class="footer-contact-mail">
                            <h5>Send us a mail</h5>                                                
                            <p><a href="mailto:christocentricuniverse@gmail.com" target="_blank">christocentricuniverse@gmail.com</a>
                        </div>

                        <div class="footer-contact-ig">
                            <h5>Send us a DM on Instagram</h5>                                               
                            <p><a href="https://www.instagram.com/holy_esprit.designs?igsh=OGQ5ZDc2ODk2ZA%3D%3D&utm_source=qr">@holy_esprit.designs</a></p>
                        </div>
                        
                    </div>
                </div>
                
                <div class="col-lg-12">
                    <div class="under-footer">
                        <p>© 2024 Holy-Esprit Designs All Rights Reserved.</p>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    `
    } //Footer Ends
}

customElements.define('main-footer', mainFooter)