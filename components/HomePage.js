import Head from 'next/head'
import Image from 'next/image'
import style from '../styles/Home.module.css'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
// import styles from '../styles/landing.css'
import styles from './HomePage.module.css'



export default function HomePage() {
  return (
    <div className={styles.container}>
        
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <title>Edica :: Home</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" />
        <link rel="stylesheet" href="assets/vendors/flag-icon-css/css/flag-icon.min.css" />
        <link rel="stylesheet" href="assets/vendors/font-awesome/css/all.min.css" />
        {/* <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.css" /> */}
        {/* <link href="assets/vendors/aos/aos.css" rel="stylesheet" /> */}
        <link rel="stylesheet" href="assets/css/style.css" />

        <body>
        <header className="edica-header edica-landing-header">
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light">
            <a className="navbar-brand" href="index.html"><img src="assets/images/logo.svg" alt="Edica" /></a>
            <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#edicaMainNav" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="edicaMainNav">
              <ul className="navbar-nav mx-auto mt-2 mt-lg-0">
                <li className="nav-item">
                  <a className="nav-link" href="about.html">About</a>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" id="blogDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Blog</a>
                  <div className="dropdown-menu" aria-labelledby="blogDropdown">
                    <a className="dropdown-item" href="blog.html">Blog Archive</a>
                    <a className="dropdown-item" href="blog-single.html">Blog Post</a>
                  </div>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" id="pagesDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Pages</a>
                  <div className="dropdown-menu" aria-labelledby="pagesDropdown">
                    <a className="dropdown-item" href="404.html">404</a>
                    <a className="dropdown-item" href="coming-soon.html">Coming Soon</a>
                  </div>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="contact.html">Contact</a>
                </li>
              </ul>
              <ul className="navbar-nav mt-2 mt-lg-0">
                <li className="nav-item">
                  <a className="nav-link" href="#">Log In</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Sign Up</a>
                </li>
              </ul>
            </div>
          </nav>
          <div className="edica-landing-header-content">
            <div className="row">
              <div className="col-md-6 carousel-content-wrapper">
                {/* <h1>Get Started Power social proof for your brands.</h1>
                        <p>He has led a remarkable campaign, defying the traditional mainstream parties courtesy of his En Marche! movement.</p> */}
                <h1 className="leadh1">
                  <div className="nth-line-1">
                    HOME OF
                  </div>
                  <div className="nth-line-2">
                    web3
                  </div>
                </h1>
                <p className="lead">
                  A short talk with contemporary sculptural artist from Ireland
                </p>
                <div className="carousel-content-btns">
                  <a href="#!" className="btn btn-success"> <i className="fab fa-apple mr-2" /> App Store</a>
                  <a href="#!" className="btn btn-secondary"> <i className="fab fa-android mr-2" /> Google Play</a>
                </div>
              </div>
              <div className="col-md-6">
                <div id="edicaLandingHeaderCarousel" className="carousel slide" data-ride="carousel">
                  <ol className="carousel-indicators">
                    <li data-target="#edicaLandingHeaderCarousel" data-slide-to={0} className="active">.01</li>
                    <li data-target="#edicaLandingHeaderCarousel" data-slide-to={1}>.02</li>
                    <li data-target="#edicaLandingHeaderCarousel" data-slide-to={2}>.03</li>
                  </ol>
                  <div className="carousel-inner" role="listbox">
                    <div className="carousel-item active">
                      <div className="carousel-img-wrapper">
                        <Image src="/images/Slider_1.png" alt="me" className="img-fluid" width="350px" height="500px"  />
                        {/* <img src="assets/images/Slider_1.png" alt="carousel-img" className="img-fluid" width="350px" /> */}
                      </div>
                    </div>
                    <div className="carousel-item">
                      <div className="carousel-img-wrapper">
                      <Image src="/images/Slider_2.png" alt="me" className="img-fluid" width="350px" height="500px"  />
                      </div>
                    </div>
                    <div className="carousel-item">
                      <div className="carousel-img-wrapper">
                      <Image src="/images/Slider_1.png" alt="me" className="img-fluid" width="350px" height="500px"  />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>



     <main>

     <section className="edica-landing-section edica-landing-about">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h4 className="edica-landing-section-subtitle-alt">ABOUT US</h4>
              <h2 className="edica-landing-section-title">1000+ customer using Our application.</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipng elit, sed do eiusmod tempor incididunt ut labore aliqua. Ut enim que minim veniam, quis nostrud exercitation.</p>
              <ul className="landing-about-list">
                <li>Powerful and flexible theme</li>
                <li>Simple, transparent pricing</li>
                <li>Build tools and full documention</li>
              </ul>
            </div>
            <div className="col-md-6">
              {/* <img src="assets/images/phone-copy.png" width="468px" alt="about" className="img-fluid" data-aos="fade-up" /> */}
              <Image src="/images/Slider_2.png" alt="me" className="img-fluid" width="468px" height="500px"  data-aos="fade-up" />
            </div>
          </div>
        </div>
      </section>


      <section className="edica-landing-section edica-landing-about">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h4 className="edica-landing-section-subtitle-alt">Wallets &amp; Chains Supported</h4>
              <h2 className="edica-landing-section-title">5+ Wallets &amp; Chains Supported.</h2>
              <p>Hold NFTs on multiple wallets? No worries. You can add NFTs to your gallery from multiple wallets and chains.
                We support Eth, Solana, Binance, Polygon and Avalanche.</p>
              <ul className="landing-about-list">
                <li>Ethereum</li>
                <li>Solana</li>
                <li>Binance</li>
                <li>Polygon</li>
                <li>Avalanche</li>
              </ul>
            </div>
            <div className="col-md-6">
              <img src="https://www.gallerium.xyz/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FfeatureWallet.af77142e.webp&w=640&q=75" width="468px" alt="about" className="img-fluid" data-aos="fade-up" />
            </div>
          </div>
        </div>
      </section>


      <section className="edica-landing-section edica-landing-clients">
          <div className="container">
            <h4 className="edica-landing-section-subtitle-alt">PARTNER WITH US</h4>
            <div className="partners-wrapper">
            <Image src="/images/Partner_1.png" alt="me" width="150px" height="22px" data-aos="flip-right" data-aos-delay={250} />
            <Image src="/images/Partner_2.png" alt="me" width="150px" height="22px" data-aos="flip-right" data-aos-delay={250} />
            <Image src="/images/Partner_3.png" alt="me" width="150px" height="22px" data-aos="flip-right" data-aos-delay={250} />
            <Image src="/images/Partner_4.png" alt="me" width="150px" height="22px" data-aos="flip-right" data-aos-delay={250} />
            <Image src="/images/Partner_5.png" alt="me" width="150px" height="22px" data-aos="flip-right" data-aos-delay={250} />
            <Image src="/images/Partner_6.png" alt="me" width="150px" height="22px" data-aos="flip-right" data-aos-delay={250} />

              {/* <img src="assets/images/Partner_1.png" alt="client logo" data-aos="flip-right" data-aos-delay={250} />
              <img src="assets/images/Partner_2.png" alt="client logo" data-aos="flip-right" data-aos-delay={500} />
              <img src="assets/images/Partner_3.png" alt="client logo" data-aos="flip-right" data-aos-delay={750} />
              <img src="assets/images/Partner_4.png" alt="client logo" data-aos="flip-right" data-aos-delay={1000} />
              <img src="assets/images/Partner_5.png" alt="client logo" data-aos="flip-right" data-aos-delay={1250} />
              <img src="assets/images/Partner_6.png" alt="client logo" data-aos="flip-right" data-aos-delay={1500} /> */}

            </div>
          </div>
        </section>


        {/* <section className="edica-landing-section edica-landing-services">
          <div className="container">
            <h4 className="edica-landing-section-subtitle">Service We Offer</h4>
            <h2 className="edica-landing-section-title">What features you will <br /> Get from App.</h2>
            <div className="row">
              <div className="col-md-6 landing-service-card">
                <img src="assets/images/picture.svg" alt="card img" className="img-fluid service-card-img" data-aos="fade-up" />
                <h4 className="service-card-title">Live Video</h4>
                <p className="service-card-description">He has led a remarkable campaign, defying the traditional mainstream parties courtesy of his En Marche! movement. For many, however, the.</p>
              </div>
              <div className="col-md-6 landing-service-card">
                <img src="assets/images/internet.svg" alt="card img" className="img-fluid service-card-img" data-aos="fade-up" />
                <h4 className="service-card-title">Secure and Reliable</h4>
                <p className="service-card-description">He has led a remarkable campaign, defying the traditional mainstream parties courtesy of his En Marche! movement. For many, however, the.</p>
              </div>
              <div className="col-md-6 landing-service-card">
                <img src="assets/images/goal.svg" alt="card img" className="img-fluid service-card-img" data-aos="fade-up" />
                <h4 className="service-card-title">Fast. Instantly.</h4>
                <p className="service-card-description">He has led a remarkable campaign, defying the traditional mainstream parties courtesy of his En Marche! movement. For many, however, the.</p>
              </div>
              <div className="col-md-6 landing-service-card">
                <img src="assets/images/chat-bubble.svg" alt="card img" className="img-fluid service-card-img" data-aos="fade-up" />
                <h4 className="service-card-title">Built-in Messenger</h4>
                <p className="service-card-description">He has led a remarkable campaign, defying the traditional mainstream parties courtesy of his En Marche! movement. For many, however, the.</p>
              </div>
            </div>
          </div>
        </section> */}


        <section className="edica-landing-section edica-landing-testimonials area"  data-aos="fade-up">
          <ul className={style.circles}>
            <li />
            <li />
            <li />
            <li />
            <li />
            <li />
            <li />
            <li />
            <li />
            <li />
          </ul>
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <h4 className="edica-landing-section-subtitle-alt">ABOUT US</h4>
                <h2 className="edica-landing-section-title">1000+ customer using Our application.</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipng elit, sed do eiusmod tempor incididunt ut labore aliqua. Ut enim que minim veniam, quis nostrud exercitation.</p>
                <ul className="landing-about-list">
                  <li>Powerful and flexible theme</li>
                  <li>Simple, transparent pricing</li>
                  <li>Build tools and full documention</li>
                </ul>
              </div>
              <div className="col-md-6">
              <Image src="/images/Slider_2.png" alt="me" className="img-fluid" width="468px" height="500px"  data-aos="fade-up" />
              </div>
            </div>
          </div>
        </section><br />



     </main>



     <section className="edica-footer-banner-section">
        <div className="container">
          <div className="footer-banner">
            <h1 className="banner-title">Download it now.</h1>
            <div className="banner-btns-wrapper">
              <button className="btn btn-success"> <img src="assets/images/apple@1x.svg" alt="ios" className="mr-2" />Log In</button>
              <button className="btn btn-success"> <img src="assets/images/android@1x.svg" alt="android" className="mr-2" /> Sign Up</button>
            </div>
            <p className="banner-text">Add some helper text here to explain the finer details of your <br /> product or service.</p>
          </div>
        </div>
      </section>





      <footer className="edica-footer">
        <div className="container">
          <div className="row footer-widget-area">
            <div className="col-md-3">
              <a href="index.html" className="footer-brand-wrapper">
                <img src="assets/images/logo.svg" alt="edica logo" />
              </a>
              <p className="contact-details">hello@edica.com</p>
              <p className="contact-details">+23 3000 000 00</p>
              <nav className="footer-social-links">
                <a href="#!"><i className="fab fa-facebook-f" /></a>
                <a href="#!"><i className="fab fa-twitter" /></a>
                <a href="#!"><i className="fab fa-behance" /></a>
                <a href="#!"><i className="fab fa-dribbble" /></a>
              </nav>
            </div>
            <div className="col-md-3">
              <nav className="footer-nav">
                <a href="#!" className="nav-link">Company</a>
                <a href="#!" className="nav-link">Android App</a>
                <a href="#!" className="nav-link">ios App</a>
                <a href="#!" className="nav-link">Blog</a>
                <a href="#!" className="nav-link">Partners</a>
                <a href="#!" className="nav-link">Careers</a>
              </nav>
            </div>
            <div className="col-md-3">
              <nav className="footer-nav">
                <a href="#!" className="nav-link">FAQ</a>
                <a href="#!" className="nav-link">Reporting</a>
                <a href="#!" className="nav-link">Block Storage</a>
                <a href="#!" className="nav-link">Tools &amp; Integrations</a>
                <a href="#!" className="nav-link">API</a>
                <a href="#!" className="nav-link">Pricing</a>
              </nav>
            </div>
            <div className="col-md-3">
              <div className="dropdown footer-country-dropdown">
                <button className="btn btn-secondary dropdown-toggle" type="button" id="footerCountryDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <span className="flag-icon flag-icon-gb flag-icon-squared" /> United Kingdom <i className="fas fa-chevron-down ml-2" />
                </button>
                <div className="dropdown-menu" aria-labelledby="footerCountryDropdown">
                  <button className="dropdown-item" href="#">
                    <span className="flag-icon flag-icon-us flag-icon-squared" /> United States
                  </button>
                  <button className="dropdown-item" href="#">
                    <span className="flag-icon flag-icon-au flag-icon-squared" /> Australia
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-bottom-content">
            <nav className="nav footer-bottom-nav">
              <a href="#!">Privacy &amp; Policy</a>
              <a href="#!">Terms</a>
              <a href="#!">Site Map</a>
            </nav>
            <p className="mb-0">© Edica. 2020 <a href="https://www.bootstrapdash.com" target="_blank" rel="noopener noreferrer" className="text-reset">bootstrapdash</a> . All rights reserved.</p>
          </div>
        </div>
      </footer>



      <script src="assets/vendors/jquery/jquery.min.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js" referrerpolicy="no-referrer"></script>
    <script src="assets/vendors/popper.js/popper.min.js"></script>
    <script src="assets/vendors/bootstrap/dist/js/bootstrap.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW" crossorigin="anonymous"></script>
    {/* <script src="https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.js"></script> */}
    <script src="assets/vendors/aos/aos.js"></script>
    <script src="assets/js/main.js"></script>
    <script>
    AOS.init();
      </script>


      <style dangerouslySetInnerHTML={{__html: "\n\n.area{\n    background: #4e54c8;  \n    background: -webkit-linear-gradient(to left, #8f94fb, #4e54c8);  \n\n    width: 100%;\n    height:100vh;\n    \n   \n}\n\n.circles{\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    overflow: hidden;\n}\n\n.circles li{\n    position: absolute;\n    display: block;\n    list-style: none;\n    width: 20px;\n    height: 20px;\n/*     background: rgba(255, 255, 255, 0.2); */\n           background: lightblue url(\"https://suplar.com/wp-content/uploads/2021/08/cropped-supl-logo.png\") no-repeat center/90% ;\n    animation: animate 25s linear infinite;\n    bottom: -150px;\n    \n}\n\n.circles li:nth-child(1){\n    left: 25%;\n    width: 80px;\n    height: 80px;\n    animation-delay: 0s;\n}\n\n\n.circles li:nth-child(2){\n    left: 10%;\n    width: 20px;\n    height: 20px;\n    animation-delay: 2s;\n    animation-duration: 12s;\n}\n\n.circles li:nth-child(3){\n    left: 70%;\n    width: 20px;\n    height: 20px;\n    animation-delay: 4s;\n}\n\n.circles li:nth-child(4){\n    left: 40%;\n    width: 60px;\n    height: 60px;\n    animation-delay: 0s;\n    animation-duration: 18s;\n}\n\n.circles li:nth-child(5){\n    left: 65%;\n    width: 20px;\n    height: 20px;\n    animation-delay: 0s;\n}\n\n.circles li:nth-child(6){\n    left: 75%;\n    width: 110px;\n    height: 110px;\n    animation-delay: 3s;\n}\n\n.circles li:nth-child(7){\n    left: 35%;\n    width: 150px;\n    height: 150px;\n    animation-delay: 7s;\n}\n\n.circles li:nth-child(8){\n    left: 50%;\n    width: 25px;\n    height: 25px;\n    animation-delay: 15s;\n    animation-duration: 45s;\n}\n\n.circles li:nth-child(9){\n    left: 20%;\n    width: 15px;\n    height: 15px;\n    animation-delay: 2s;\n    animation-duration: 35s;\n}\n\n.circles li:nth-child(10){\n    left: 85%;\n    width: 150px;\n    height: 150px;\n    animation-delay: 0s;\n    animation-duration: 11s;\n}\n\n\n\n@keyframes animate {\n\n    0%{\n        transform: translateY(0) rotate(0deg);\n        opacity: 1;\n        border-radius: 0;\n    }\n\n    100%{\n        transform: translateY(-1000px) rotate(720deg);\n        opacity: 0;\n        border-radius: 50%;\n    }\n\n}\n\n.leadh1 {\n  font-family: \"Old Standard TT\", serif;\n  color: #2c2c25;\n  text-transform: uppercase;\n  font-weight: 400;\n}\n\n.nth-line-1,\n.nth-line-2 {\n  line-height: 1;\n}\n\n.nth-line-1 {\n  font-size: 19vw;\n}\n\n@media (min-width: 55em) {\n  .nth-line-1 {\n    font-size: 10.5vw;\n  }\n}\n\n.nth-line-2 {\n  font-size: 14.5vw;\n}\n@media (min-width: 55em) {\n  .nth-line-2 {\n    font-size: 8vw;\n  }\n}\n\n.lead {\n  color: rgb(59, 58, 58);\n  font-size: 1.5625em;\n  max-width: 20em;\n  margin: 0 auto;\n  text-align: center;\n}\n      " }} />




        </body>
    </div>
  )
}
