const Home = () => {
  return (
    <>
      <div className="preloader">
        <img
          className="preloader__image"
          width="60"
          src="assets/images/loader.png"
          alt=""
        />
      </div>

      {/* preloader */}
      <div className="page-wrapper">
        <header className="main-header clearfix">
          <nav className="main-menu clearfix">
            <div className="main-menu-wrapper">
              <div className="main-menu-wrapper__left">
                <div className="main-menu-wrapper__logo">
                  <a href="index.html">
                    <img src="assets/images/logo-1.png" alt="" />
                  </a>
                </div>
                <div className="main-menu-wrapper__main-menu">
                  <a href="#" className="mobile-nav__toggler">
                    <span className="mobile-nav__toggler-bar"></span>
                    <span className="mobile-nav__toggler-bar"></span>
                    <span className="mobile-nav__toggler-bar"></span>
                  </a>
                  <ul className="main-menu__list">
                    <li className="dropdown  ">
                      <a href="index.html">Home</a>
                      <ul>
                        <li>
                          <a href="index.html">Home One</a>
                        </li>
                        <li>
                          <a href="index2.html">Home Two</a>
                        </li>
                        <li>
                          <a href="index3.html">Home Three</a>
                        </li>
                        <li className="dropdown">
                          <a href="#">Header Styles</a>
                          <ul>
                            <li>
                              <a href="index.html">Header One</a>
                            </li>
                            <li>
                              <a href="index.html">Header Two</a>
                            </li>
                            <li>
                              <a href="index.html">Header Three</a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li className="dropdown">
                      <a href="services.html">Services</a>
                      <ul>
                        <li>
                          <a href="services.html">Services</a>
                        </li>
                        <li>
                          <a href="audit-marketing.html">Audit Marketing</a>
                        </li>
                        <li>
                          <a href="banking-advising.html">Banking Advising</a>
                        </li>
                        <li>
                          <a href="business-growth.html">Business Growth</a>
                        </li>
                        <li>
                          <a href="consumer-product.html">Consumer Product</a>
                        </li>
                        <li>
                          <a href="financial-advice.html">Financial Advice</a>
                        </li>
                        <li>
                          <a href="marketing-rule.html">Marketing Rule</a>
                        </li>
                      </ul>
                    </li>
                    <li className="dropdown">
                      <a href="#">Pages</a>
                      <ul>
                        <li>
                          <a href="about.html">About</a>
                        </li>
                        <li>
                          <a href="team.html">Team</a>
                        </li>
                        <li>
                          <a href="faq.html">FAQS</a>
                        </li>
                        <li>
                          <a href="404.html">404</a>
                        </li>
                      </ul>
                    </li>
                    <li className="dropdown">
                      <a href="cases.html">Cases</a>
                      <ul>
                        <li>
                          <a href="cases.html">Cases</a>
                        </li>
                        <li>
                          <a href="cases-details.html">Cases Details</a>
                        </li>
                      </ul>
                    </li>
                    <li className="dropdown">
                      <a href="blog-sidebar.html">Blog</a>
                      <ul>
                        <li>
                          <a href="blog.html">Blog</a>
                        </li>
                        <li>
                          <a href="blog-sidebar.html">Blog Sidebar</a>
                        </li>
                        <li>
                          <a href="blog-details.html">Blog Details</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="contact.html">Contact</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="main-menu-wrapper__right">
                <div className="main-menu-wrapper__social-box">
                  <div className="main-menu-wrapper__social">
                    <a href="#">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a href="#" className="clr-fb">
                      <i className="fab fa-facebook"></i>
                    </a>
                    <a href="#" className="clr-dri">
                      <i className="fab fa-dribbble"></i>
                    </a>
                    <a href="#" className="clr-ins">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </div>
                </div>
                <div className="main-menu-wrapper__search-box">
                  <a
                    href="#"
                    className="main-menu-wrapper__search search-toggler icon-magnifying-glass1"
                  ></a>
                </div>
                <div className="main-menu-wrapper__phone-contact">
                  <p>Need help? Talk to an expert</p>
                  <a href="tel:+92-666-888-0000">+92 666 888 0000</a>
                </div>
              </div>
            </div>
          </nav>
        </header>

        <div className="stricky-header stricked-menu main-menu">
          <div className="sticky-header__content"></div>
          {/* /.sticky-header__content  */}
        </div>
        {/* .stricky-header */}

        <section className="main-slider">
          <div
            className="swiper-container thm-swiper__slider"
            data-swiper-options='{"slidesPerView": 1, "loop": true,
            "effect": "fade",
            "pagination": {
                "el": "#main-slider-pagination",
                "type": "bullets",
                "clickable": true
            },
            "navigation": {
                "nextEl": "#main-slider__swiper-button-next",
                "prevEl": "#main-slider__swiper-button-prev"
            },
            "autoplay": {
                "delay": 5000
            }}'
          >
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <div
                  className="image-layer"
                  style={{
                    backgroundImage:
                      "url(assets/images/backgrounds/main-slider-1-1.jpg)",
                  }}
                ></div>
                {/* <div className="image-layer-overlay"></div> */}
                <div className="main-slider-shape-1"></div>
                <div className="main-slider-shape-2"></div>
                <div className="main-slider-shape-3"></div>
                <div className="main-slider-shape-4"></div>
                <div className="main-slider-shape-5"></div>
                {/* /.image-layer */}
                <div className="container">
                  <div className="row">
                    <div className="col-lg-8">
                      <div className="main-slider__content">
                        <p>welcome to aivons consultancy</p>
                        <h2>
                          consulting <br /> for every <br /> business
                        </h2>
                        <a href="about.html" className="thm-btn">
                          Discover More
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div
                  className="image-layer"
                  style={{
                    backgroundImage:
                      "url(assets/images/backgrounds/main-slider-1-2.jpg)",
                  }}
                ></div>
                {/* <div className="image-layer-overlay"></div> */}
                <div className="main-slider-shape-1"></div>
                <div className="main-slider-shape-2"></div>
                <div className="main-slider-shape-3"></div>
                <div className="main-slider-shape-4"></div>
                <div className="main-slider-shape-5"></div>
                {/* /.image-layer */}
                <div className="container">
                  <div className="row">
                    <div className="col-lg-8">
                      <div className="main-slider__content">
                        <p>welcome to aivons consultancy</p>
                        <h2>
                          consulting <br /> for every <br /> business
                        </h2>
                        <a href="about.html" className="thm-btn">
                          Discover More
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* If we need navigation buttons */}
            <div className="main-slider__nav">
              <div
                className="swiper-button-prev"
                id="main-slider__swiper-button-next"
              >
                <span className="main-slider__next-text">Next</span>
                <i className="icon-right-arrow icon-left-arrow"></i>
              </div>
              <div
                className="swiper-button-next"
                id="main-slider__swiper-button-prev"
              >
                <span className="main-slider__prev-text">Prev</span>
                <i className="icon-right-arrow"></i>
              </div>
            </div>
          </div>
        </section>

        {/* Real World Start */}
        <section className="real-world">
          <div
            className="real-world-shape wow slideInLeft"
            data-wow-delay="100ms"
            data-wow-duration="2500ms"
            style={{
              backgroundImage: "url(assets/images/shapes/real-world-shape.png)",
            }}
          ></div>
          <div className="container">
            <div className="section-title text-center">
              <h2 className="section-title__title">real-world experience</h2>
              <span className="section-title__tagline">
                The best business consulting firm you can count on!
              </span>
            </div>
            <div className="row">
              <div
                className="col-xl-4 col-lg-4 wow fadeInUp"
                data-wow-delay="0ms"
                data-wow-duration="1500ms"
              >
                {/* Real World Single */}
                <div className="real-world__single">
                  <h2 className="real-world__title">
                    <a href="business-growth.html">
                      wealth <br /> Management
                    </a>
                  </h2>
                  <a href="business-growth.html" className="real-world__btn">
                    Read More
                  </a>
                  <div className="real-world__icon-box">
                    <span className="icon-wealth"></span>
                  </div>
                </div>
              </div>
              <div
                className="col-xl-4 col-lg-4 wow fadeInUp"
                data-wow-delay="300ms"
                data-wow-duration="1500ms"
              >
                {/* Real World Single */}
                <div className="real-world__single">
                  <h2 className="real-world__title">
                    <a href="audit-marketing.html">
                      audit <br /> marketing
                    </a>
                  </h2>
                  <a href="audit-marketing.html" className="real-world__btn">
                    Read More
                  </a>
                  <div className="real-world__icon-box">
                    <span className="icon-data-analytics"></span>
                  </div>
                </div>
              </div>
              <div
                className="col-xl-4 col-lg-4 wow fadeInUp"
                data-wow-delay="600ms"
                data-wow-duration="1500ms"
              >
                {/* Real World Single */}
                <div className="real-world__single">
                  <h2 className="real-world__title">
                    <a href="financial-advice.html">
                      Finance <br /> consulting
                    </a>
                  </h2>
                  <a href="financial-advice.html" className="real-world__btn">
                    Read More
                  </a>
                  <div className="real-world__icon-box">
                    <span className="icon-report"></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Real World Start */}

        {/* Brand One Start */}
        <section className="brand-one">
          <div className="container">
            <h4 className="brand-one__title">Meet the partners</h4>
            <div
              className="thm-swiper__slider swiper-container"
              data-swiper-options='{"spaceBetween": 100, "slidesPerView": 5, "autoplay": { "delay": 5000 }, "breakpoints": {
                    "0": {
                        "spaceBetween": 30,
                        "slidesPerView": 2
                    },
                    "375": {
                        "spaceBetween": 30,
                        "slidesPerView": 2
                    },
                    "575": {
                        "spaceBetween": 30,
                        "slidesPerView": 3
                    },
                    "767": {
                        "spaceBetween": 50,
                        "slidesPerView": 4
                    },
                    "991": {
                        "spaceBetween": 50,
                        "slidesPerView": 5
                    },
                    "1199": {
                        "spaceBetween": 100,
                        "slidesPerView": 5
                    }
                }}'
            >
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <img src="assets/images/brand/brand--1-1.png" alt="" />
                </div>
                {/* /.swiper-slide */}
                <div className="swiper-slide">
                  <img src="assets/images/brand/brand--1-2.png" alt="" />
                </div>
                {/* /.swiper-slide */}
                <div className="swiper-slide">
                  <img src="assets/images/brand/brand--1-3.png" alt="" />
                </div>
                {/* .swiper-slide */}
                <div className="swiper-slide">
                  <img src="assets/images/brand/brand--1-4.png" alt="" />
                </div>
                {/* .swiper-slide */}
                <div className="swiper-slide">
                  <img src="assets/images/brand/brand--1-5.png" alt="" />
                </div>
                {/* .swiper-slide */}
                <div className="swiper-slide">
                  <img src="assets/images/brand/brand--1-1.png" alt="" />
                </div>
                {/* .swiper-slide */}
                <div className="swiper-slide">
                  <img src="assets/images/brand/brand--1-2.png" alt="" />
                </div>
                {/* .swiper-slide */}
                <div className="swiper-slide">
                  <img src="assets/images/brand/brand--1-3.png" alt="" />
                </div>
                {/* .swiper-slide */}
                <div className="swiper-slide">
                  <img src="assets/images/brand/brand--1-4.png" alt="" />
                </div>
                {/* .swiper-slide */}
                <div className="swiper-slide">
                  <img src="assets/images/brand/brand--1-5.png" alt="" />
                </div>
                {/* .swiper-slide */}
              </div>
            </div>
          </div>
        </section>
        {/* Brand One End */}

        {/* Welcome One Start */}
        <section className="welcome-one">
          <div className="container">
            <div className="row">
              <div className="col-xl-6 col-lg-6">
                <div className="welcome-one__left">
                  <div className="welcome-one__img-box">
                    <div className="welcome-one__img-1">
                      <img
                        src="assets/images/resources/welcome-1-img-1.jpg"
                        alt=""
                      />
                    </div>
                    <div className="welcome-one__img-2">
                      <img
                        src="assets/images/resources/welcome-1-img-2.jpg"
                        alt=""
                      />
                    </div>
                    <a
                      href="https://www.youtube.com/watch?v=i9E_Blai8vk"
                      className="welcome-one__video-btn video-popup"
                    >
                      <div className="welcome-one__video-btn-icon">
                        <i className="fa fa-play"></i>
                        <span className="ripple"></span>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6">
                <div className="welcome-one__right">
                  <h2 className="welcome-one__title">
                    We’re leading in the market
                  </h2>
                  <p className="welcome-one__text">
                    Lorem ipsum is simply free text dolor sit amet, consectetur
                    notted adipisicing elit sed do eiusmod tempor incididunt ut
                    labore et dolore magna aliqua lonm andhn.
                  </p>
                  <p className="welcome-one__text-two">
                    We have 35+ years of experience. We offer marketing and
                    consulting services
                  </p>
                  <div className="welcome-one__progress">
                    <div className="welcome-one__progress-single">
                      <div className="bar">
                        <div className="bar-inner count-bar" data-percent="88%">
                          <div className="count-text">88%</div>
                        </div>
                      </div>
                      <h4 className="welcome-one__progress-title">
                        Consulting
                      </h4>
                    </div>
                    <div className="welcome-one__progress-single">
                      <div className="bar">
                        <div className="bar-inner count-bar" data-percent="68%">
                          <div className="count-text">68%</div>
                        </div>
                      </div>
                      <h4 className="welcome-one__progress-title">Advices</h4>
                    </div>
                  </div>
                  <div className="welcome-one__call">
                    <div className="welcome-one__call-icon">
                      <span className="icon-phone-ringing"></span>
                    </div>
                    <div className="welcome-one__call-text">
                      <p>Have any question? Give us a call</p>
                      <a href="tel:+92-666-888-0000">+92 666 888 0000</a>
                    </div>
                  </div>
                  <div className="welcome-one__big-text">aivons</div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Welcome One End */}

        {/* Two Boxes Start */}
        <section className="two-boxes">
          <div className="container">
            <div className="row">
              <div className="col-xl-6 col-lg-6">
                <div className="two-boxes__single">
                  <div className="two-boxes__single-content">
                    <div className="two-boxes__count">
                      <span></span>
                    </div>
                    <div className="two-boxes__content">
                      <h3 className="two-boxes__title">
                        Get professional advice
                      </h3>
                      <p className="two-boxes__text">
                        There are many variations of available but the majority
                        have suffered alteration.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6">
                <div className="two-boxes__single">
                  <div className="two-boxes__single-content">
                    <div className="two-boxes__count">
                      <span></span>
                    </div>
                    <div className="two-boxes__content">
                      <h3 className="two-boxes__title">
                        trusted & professional
                      </h3>
                      <p className="two-boxes__text">
                        There are many variations of available but the majority
                        have suffered alteration.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Two Boxes End */}

        {/* Cases One Start */}
        <section className="cases-one">
          <div className="container">
            <div className="section-title text-center">
              <h2 className="section-title__title">new case studies</h2>
              <span className="section-title__tagline">
                We help our clients renew their business
              </span>
            </div>
            <div className="row">
              <div
                className="col-xl-4 col-lg-4 wow fadeInUp"
                data-wow-delay="0ms"
                data-wow-duration="1500ms"
              >
                {/* Cases One Single */}
                <div className="cases-one__single">
                  <div className="cases-one__img-box">
                    <div className="cases-one__img">
                      <img
                        src="assets/images/resources/cases-1-img-1.jpg"
                        alt=""
                      />
                    </div>
                    <div className="cases-one__content">
                      <div className="cases-one__icon">
                        <span className="icon-mobile-analytics"></span>
                      </div>
                      <p className="cases-one__tagline">Thought leadership</p>
                      <h2 className="cases-one__tilte">
                        <a href="cases-details.html">businesses growth</a>
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-xl-4 col-lg-4 wow fadeInUp"
                data-wow-delay="300ms"
                data-wow-duration="1500ms"
              >
                {/* Cases One Single */}
                <div className="cases-one__single">
                  <div className="cases-one__img-box">
                    <div className="cases-one__img">
                      <img
                        src="assets/images/resources/cases-1-img-2.jpg"
                        alt=""
                      />
                    </div>
                    <div className="cases-one__content">
                      <div className="cases-one__icon">
                        <span className="icon-research"></span>
                      </div>
                      <p className="cases-one__tagline">Risk management</p>
                      <h2 className="cases-one__tilte">
                        <a href="cases-details.html">Marketing advice</a>
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-xl-4 col-lg-4 wow fadeInUp"
                data-wow-delay="600ms"
                data-wow-duration="1500ms"
              >
                {/* Cases One Single */}
                <div className="cases-one__single">
                  <div className="cases-one__img-box">
                    <div className="cases-one__img">
                      <img
                        src="assets/images/resources/cases-1-img-3.jpg"
                        alt=""
                      />
                    </div>
                    <div className="cases-one__content">
                      <div className="cases-one__icon">
                        <span className="icon-creative"></span>
                      </div>
                      <p className="cases-one__tagline">Business strategy</p>
                      <h2 className="cases-one__tilte">
                        <a href="cases-details.html">finance consulting</a>
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Cases One End */}

        {/* Our Mission Start */}
        <section className="our-mission">
          <div
            className="our-mission-bg jarallax"
            data-jarallax
            data-speed="0.2"
            data-imgPosition="50% 0%"
            style={{
              backgroundImage:
                "url(assets/images/backgrounds/our-mission-bg.jpg)",
            }}
          ></div>
          <div className="container">
            <div className="row">
              <div className="col-xl-12">
                <div className="our-mission__inner">
                  <h2 className="our-mission__title">
                    Mission is to Protect <br /> your Businesses & <br /> Much
                    More
                  </h2>
                  <a href="services.html" className="thm-btn our-mission__btn">
                    Discover More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Our Mission End */}

        {/* Faq One Start */}
        <section className="faq-one">
          <div className="container">
            <div className="section-title text-center">
              <h2 className="section-title__title">Question Answers</h2>
              <span className="section-title__tagline">
                If you have any more questions, Contact us
              </span>
            </div>
            <div className="row">
              <div className="col-xl-6">
                <div className="faq-one__left">
                  <div
                    className="accrodion-grp"
                    data-grp-name="faq-one-accrodion"
                  >
                    <div className="accrodion active">
                      <div className="accrodion-title">
                        <h4>
                          <span>.</span> think ahead and boost your business?
                        </h4>
                      </div>
                      <div className="accrodion-content">
                        <div className="inner">
                          <p>
                            There are many variations of passages the majority
                            have suffered alteration in some fo injected humour,
                            or randomised words believable.
                          </p>
                        </div>
                        {/* /.inner */}
                      </div>
                    </div>
                    <div className="accrodion">
                      <div className="accrodion-title">
                        <h4>
                          <span>.</span> How consultancy experts work?
                        </h4>
                      </div>
                      <div className="accrodion-content">
                        <div className="inner">
                          <p>
                            There are many variations of passages the majority
                            have suffered alteration in some fo injected humour,
                            or randomised words believable.
                          </p>
                        </div>
                        {/* /.inner */}
                      </div>
                    </div>
                    <div className="accrodion">
                      <div className="accrodion-title">
                        <h4>
                          <span>.</span> what is the best advice for growth?
                        </h4>
                      </div>
                      <div className="accrodion-content">
                        <div className="inner">
                          <p>
                            There are many variations of passages the majority
                            have suffered alteration in some fo injected humour,
                            or randomised words believable.
                          </p>
                        </div>
                        {/* /.inner */}
                      </div>
                    </div>
                    <div className="accrodion">
                      <div className="accrodion-title">
                        <h4>
                          <span>.</span> How to improve your business?
                        </h4>
                      </div>
                      <div className="accrodion-content">
                        <div className="inner">
                          <p>
                            There are many variations of passages the majority
                            have suffered alteration in some fo injected humour,
                            or randomised words believable.
                          </p>
                        </div>
                        {/* /.inner */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-6">
                <div className="faq-one__right">
                  <div className="faq-one__img">
                    <img
                      src="assets/images/resources/faq-one-img-1.jpg"
                      alt=""
                    />
                  </div>
                  <div className="faq-one__bottom">
                    <div className="faq-one__list-box">
                      <ul className="list-unstyled faq-one__list">
                        <li>
                          <div className="icon">
                            <span className="icon-tick"></span>
                          </div>
                          <div className="text">
                            <p>Nsectetur cing elit.</p>
                          </div>
                        </li>
                        <li>
                          <div className="icon">
                            <span className="icon-tick"></span>
                          </div>
                          <div className="text">
                            <p>Suspe ndisse suscipit sagittis leo.</p>
                          </div>
                        </li>
                        <li>
                          <div className="icon">
                            <span className="icon-tick"></span>
                          </div>
                          <div className="text">
                            <p>Entum estibulum dignissim posuere.</p>
                          </div>
                        </li>
                        <li>
                          <div className="icon">
                            <span className="icon-tick"></span>
                          </div>
                          <div className="text">
                            <p>If you are going to use a passage.</p>
                          </div>
                        </li>
                        <li>
                          <div className="icon">
                            <span className="icon-tick"></span>
                          </div>
                          <div className="text">
                            <p>Lorem Ipsum on the tend to repeat.</p>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div className="faq-one__experience-box">
                      <h2>30</h2>
                      <p>
                        Years of <br /> Expeirence
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Faq One End */}

        {/* Testimonials One Start */}
        <section className="testimonials-one">
          <div className="container">
            <div className="row">
              <div className="col-xl-4">
                <div className="testimonials-one__left">
                  <div className="section-title text-left">
                    <h2 className="section-title__title">
                      What they are talking About
                    </h2>
                    <span className="section-title__tagline">
                      Trusted by more than 4,200 customers
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-xl-8">
                <div className="testimonials-one__right">
                  <div className="testimonials-one__carousel owl-theme owl-carousel">
                    {/* Testimonials One Single */}
                    <div className="testimonials-one__single">
                      <p className="testimonials-one__text">
                        Lorem ipsum is simply free text dolor sit amet,
                        consectetur notted adipisicing elit sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua.
                      </p>
                      <div className="testimonials-one__client-info">
                        <h5 className="testimonials-one__client-name">
                          Todd Higgins
                        </h5>
                        <p className="testimonials-one__client-title">
                          Customer
                        </p>
                      </div>
                      <div className="testimonials-one__client-img">
                        <img
                          src="assets/images/testimonial/testimonials-1-1.png"
                          alt=""
                        />
                      </div>
                      <div className="testimonials-one__quote">
                        <img
                          src="assets/images/testimonial/testimonials-1-iocn.png"
                          alt=""
                        />
                      </div>
                    </div>
                    {/* Testimonials One Single */}
                    <div className="testimonials-one__single">
                      <p className="testimonials-one__text">
                        Lorem ipsum is simply free text dolor sit amet,
                        consectetur notted adipisicing elit sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua.
                      </p>
                      <div className="testimonials-one__client-info">
                        <h5 className="testimonials-one__client-name">
                          Gordon King
                        </h5>
                        <p className="testimonials-one__client-title">
                          Customer
                        </p>
                      </div>
                      <div className="testimonials-one__client-img">
                        <img
                          src="assets/images/testimonial/testimonials-1-2.png"
                          alt=""
                        />
                      </div>
                      <div className="testimonials-one__quote">
                        <img
                          src="assets/images/testimonial/testimonials-1-iocn.png"
                          alt=""
                        />
                      </div>
                    </div>
                    {/* Testimonials One Single */}
                    <div className="testimonials-one__single">
                      <p className="testimonials-one__text">
                        Lorem ipsum is simply free text dolor sit amet,
                        consectetur notted adipisicing elit sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua.
                      </p>
                      <div className="testimonials-one__client-info">
                        <h5 className="testimonials-one__client-name">
                          Paul Alvarez
                        </h5>
                        <p className="testimonials-one__client-title">
                          Customer
                        </p>
                      </div>
                      <div className="testimonials-one__client-img">
                        <img
                          src="assets/images/testimonial/testimonials-1-1.png"
                          alt=""
                        />
                      </div>
                      <div className="testimonials-one__quote">
                        <img
                          src="assets/images/testimonial/testimonials-1-iocn.png"
                          alt=""
                        />
                      </div>
                    </div>
                    {/* Testimonials One Single */}
                    <div className="testimonials-one__single">
                      <p className="testimonials-one__text">
                        Lorem ipsum is simply free text dolor sit amet,
                        consectetur notted adipisicing elit sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua.
                      </p>
                      <div className="testimonials-one__client-info">
                        <h5 className="testimonials-one__client-name">
                          Hester Ortiz
                        </h5>
                        <p className="testimonials-one__client-title">
                          Customer
                        </p>
                      </div>
                      <div className="testimonials-one__client-img">
                        <img
                          src="assets/images/testimonial/testimonials-1-2.png"
                          alt=""
                        />
                      </div>
                      <div className="testimonials-one__quote">
                        <img
                          src="assets/images/testimonial/testimonials-1-iocn.png"
                          alt=""
                        />
                      </div>
                    </div>
                    {/* Testimonials One Single */}
                    <div className="testimonials-one__single">
                      <p className="testimonials-one__text">
                        Lorem ipsum is simply free text dolor sit amet,
                        consectetur notted adipisicing elit sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua.
                      </p>
                      <div className="testimonials-one__client-info">
                        <h5 className="testimonials-one__client-name">
                          Randall Fleming
                        </h5>
                        <p className="testimonials-one__client-title">
                          Customer
                        </p>
                      </div>
                      <div className="testimonials-one__client-img">
                        <img
                          src="assets/images/testimonial/testimonials-1-1.png"
                          alt=""
                        />
                      </div>
                      <div className="testimonials-one__quote">
                        <img
                          src="assets/images/testimonial/testimonials-1-iocn.png"
                          alt=""
                        />
                      </div>
                    </div>
                    {/* Testimonials One Single */}
                    <div className="testimonials-one__single">
                      <p className="testimonials-one__text">
                        Lorem ipsum is simply free text dolor sit amet,
                        consectetur notted adipisicing elit sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua.
                      </p>
                      <div className="testimonials-one__client-info">
                        <h5 className="testimonials-one__client-name">
                          Benjamin Hansen
                        </h5>
                        <p className="testimonials-one__client-title">
                          Customer
                        </p>
                      </div>
                      <div className="testimonials-one__client-img">
                        <img
                          src="assets/images/testimonial/testimonials-1-2.png"
                          alt=""
                        />
                      </div>
                      <div className="testimonials-one__quote">
                        <img
                          src="assets/images/testimonial/testimonials-1-iocn.png"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Testimonials One End */}

        {/* Counters One Start */}
        <section className="counters-one">
          <div
            className="counters-one-bg"
            style={{
              backgroundImage:
                "url(assets/images/backgrounds/counter-one-bg.jpg)",
            }}
          ></div>
          <div className="container">
            <ul className="counters-one__box list-unstyled">
              <li className="counter-one__single">
                <div className="counter-one__icon">
                  <span className="icon-video"></span>
                </div>
                <h3 className="odometer" data-count="420">
                  00
                </h3>
                <p className="counter-one__text">Consulting solutions</p>
              </li>
              <li className="counter-one__single">
                <div className="counter-one__icon">
                  <span className="icon-help"></span>
                </div>
                <h3 className="odometer" data-count="880">
                  00
                </h3>
                <p className="counter-one__text">Completed Casses</p>
              </li>
              <li className="counter-one__single">
                <div className="counter-one__icon">
                  <span className="icon-customer-review"></span>
                </div>
                <h3 className="odometer" data-count="990">
                  00
                </h3>
                <p className="counter-one__text">Satisfied Customers</p>
              </li>
              <li className="counter-one__single">
                <div className="counter-one__icon">
                  <span className="icon-consultant"></span>
                </div>
                <h3 className="odometer" data-count="160">
                  00
                </h3>
                <p className="counter-one__text">Expert Consultant</p>
              </li>
            </ul>
          </div>
        </section>
        {/* Counters One Start */}

        {/* Financial Advice Start */}
        <section className="financial-advice">
          <div className="container">
            <div className="row">
              <div className="col-xl-12">
                <div className="financial-advice__box tabs-box">
                  <ul className="tab-btns tab-buttons clearfix list-unstyled">
                    <li data-tab="#business" className="tab-btn">
                      <span>Business Growth</span>
                    </li>
                    <li data-tab="#financial" className="tab-btn active-btn">
                      <span>Financial Advice</span>
                    </li>
                    <li data-tab="#gobal" className="tab-btn">
                      <span>Gobal Solutions</span>
                    </li>
                  </ul>
                  <div className="tabs-content">
                    <div className="tab " id="business">
                      <div className="financial-advice__content">
                        <div className="row">
                          <div className="col-xl-4 col-lg-4">
                            <div className="financial-advice__single-1">
                              <ul className="list-unstyled financial-advice__list-box">
                                <li>
                                  <div className="financial-advice__icon">
                                    <span className="icon-checkmark"></span>
                                  </div>
                                  <div className="financial-advice__list-box-content">
                                    <h3 className="finalcial-advice__list-box-title">
                                      Highest Success Rates
                                    </h3>
                                    <p className="finalcial-advice__list-box-text">
                                      Lorem Ipsum nibh vel velit auctor aliqu.
                                      Aenean sollic tudin, lorem is simply free
                                      text quis bibendum.
                                    </p>
                                  </div>
                                </li>
                                <li>
                                  <div className="financial-advice__icon">
                                    <span className="icon-checkmark"></span>
                                  </div>
                                  <div className="financial-advice__list-box-content">
                                    <h3 className="finalcial-advice__list-box-title">
                                      We build experience
                                    </h3>
                                    <p className="finalcial-advice__list-box-text">
                                      Lorem Ipsum nibh vel velit auctor aliqu.
                                      Aenean sollic tudin, lorem is simply free
                                      text quis bibendum.
                                    </p>
                                  </div>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="col-xl-4 col-lg-4">
                            <div className="financial-advice__single-1 financial-advice__single-2">
                              <p className="financial-advice_-desc">
                                There are many variations of passages of lorem
                                ipsum available, but the majority have suffered
                                alteration in some form injected humour or
                                randomised words which don't look believable.
                              </p>
                              <ul className="list-unstyled financial-advice__list-box-2">
                                <li>If you are going to use a passage</li>
                                <li>Lorem Ipsum you need to be sure</li>
                                <li>There isn't anything embarrassing</li>
                                <li> Hidden in the middle of text</li>
                              </ul>
                            </div>
                          </div>
                          <div className="col-xl-4 col-lg-4">
                            <div className="financial-advice__single-1 financial-advice__single-3">
                              <div className="financial-advice__img">
                                <img
                                  src="assets/images/resources/financial-advice-img-1.jpg"
                                  alt=""
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="tab active-tab" id="financial">
                      <div className="financial-advice__content">
                        <div className="row">
                          <div className="col-xl-4 col-lg-4">
                            <div className="financial-advice__single-1">
                              <ul className="list-unstyled financial-advice__list-box">
                                <li>
                                  <div className="financial-advice__icon">
                                    <span className="icon-checkmark"></span>
                                  </div>
                                  <div className="financial-advice__list-box-content">
                                    <h3 className="finalcial-advice__list-box-title">
                                      Highest Success Rates
                                    </h3>
                                    <p className="finalcial-advice__list-box-text">
                                      Lorem Ipsum nibh vel velit auctor aliqu.
                                      Aenean sollic tudin, lorem is simply free
                                      text quis bibendum.
                                    </p>
                                  </div>
                                </li>
                                <li>
                                  <div className="financial-advice__icon">
                                    <span className="icon-checkmark"></span>
                                  </div>
                                  <div className="financial-advice__list-box-content">
                                    <h3 className="finalcial-advice__list-box-title">
                                      We build experience
                                    </h3>
                                    <p className="finalcial-advice__list-box-text">
                                      Lorem Ipsum nibh vel velit auctor aliqu.
                                      Aenean sollic tudin, lorem is simply free
                                      text quis bibendum.
                                    </p>
                                  </div>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="col-xl-4 col-lg-4">
                            <div className="financial-advice__single-1 financial-advice__single-2">
                              <p className="financial-advice_-desc">
                                There are many variations of passages of lorem
                                ipsum available, but the majority have suffered
                                alteration in some form injected humour or
                                randomised words which don't look believable.
                              </p>
                              <ul className="list-unstyled financial-advice__list-box-2">
                                <li>If you are going to use a passage</li>
                                <li>Lorem Ipsum you need to be sure</li>
                                <li>There isn't anything embarrassing</li>
                                <li> Hidden in the middle of text</li>
                              </ul>
                            </div>
                          </div>
                          <div className="col-xl-4 col-lg-4">
                            <div className="financial-advice__single-1 financial-advice__single-3">
                              <div className="financial-advice__img">
                                <img
                                  src="assets/images/resources/financial-advice-img-1.jpg"
                                  alt=""
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="tab" id="gobal">
                      <div className="financial-advice__content">
                        <div className="row">
                          <div className="col-xl-4 col-lg-4">
                            <div className="financial-advice__single-1">
                              <ul className="list-unstyled financial-advice__list-box">
                                <li>
                                  <div className="financial-advice__icon">
                                    <span className="icon-checkmark"></span>
                                  </div>
                                  <div className="financial-advice__list-box-content">
                                    <h3 className="finalcial-advice__list-box-title">
                                      Highest Success Rates
                                    </h3>
                                    <p className="finalcial-advice__list-box-text">
                                      Lorem Ipsum nibh vel velit auctor aliqu.
                                      Aenean sollic tudin, lorem is simply free
                                      text quis bibendum.
                                    </p>
                                  </div>
                                </li>
                                <li>
                                  <div className="financial-advice__icon">
                                    <span className="icon-checkmark"></span>
                                  </div>
                                  <div className="financial-advice__list-box-content">
                                    <h3 className="finalcial-advice__list-box-title">
                                      We build experience
                                    </h3>
                                    <p className="finalcial-advice__list-box-text">
                                      Lorem Ipsum nibh vel velit auctor aliqu.
                                      Aenean sollic tudin, lorem is simply free
                                      text quis bibendum.
                                    </p>
                                  </div>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="col-xl-4 col-lg-4">
                            <div className="financial-advice__single-1 financial-advice__single-2">
                              <p className="financial-advice_-desc">
                                There are many variations of passages of lorem
                                ipsum available, but the majority have suffered
                                alteration in some form injected humour or
                                randomised words which don't look believable.
                              </p>
                              <ul className="list-unstyled financial-advice__list-box-2">
                                <li>If you are going to use a passage</li>
                                <li>Lorem Ipsum you need to be sure</li>
                                <li>There isn't anything embarrassing</li>
                                <li> Hidden in the middle of text</li>
                              </ul>
                            </div>
                          </div>
                          <div className="col-xl-4 col-lg-4">
                            <div className="financial-advice__single-1 financial-advice__single-3">
                              <div className="financial-advice__img">
                                <img
                                  src="assets/images/resources/financial-advice-img-1.jpg"
                                  alt=""
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Financial Advice End */}

        {/* Google Map Start */}
        <section className="google-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4562.753041141002!2d-118.80123790098536!3d34.152323469614075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80e82469c2162619%3A0xba03efb7998eef6d!2sCostco+Wholesale!5e0!3m2!1sbn!2sbd!4v1562518641290!5m2!1sbn!2sbd"
            className="google-map__one"
            allowFullScreen
          ></iframe>
        </section>
        {/* Google Map End */}

        {/* News One Start */}
        <section className="news-one">
          <div className="container">
            <div className="section-title text-center">
              <h2 className="section-title__title">What’s Happening</h2>
              <span className="section-title__tagline">
                Checkout what we have been doing
              </span>
            </div>
            <div className="row">
              <div
                className="col-xl-4 col-lg-4 wow fadeInUp"
                data-wow-delay="0ms"
                data-wow-duration="1500ms"
              >
                {/* News One Single */}
                <div className="news-one__single">
                  <div className="news-one__img">
                    <img src="assets/images/blog/news-1-1.jpg" alt="" />
                    <a href="blog-details.html">
                      <span className="news-one__plus"></span>
                    </a>
                  </div>
                  <div className="news-one__content">
                    <ul className="list-unstyled news-one__meta">
                      <li>
                        <a href="#">
                          <i className="far fa-user-circle"></i> by Admin
                        </a>
                      </li>
                      <li>
                        <span>/</span>
                      </li>
                      <li>
                        <a href="#">
                          <i className="far fa-comments"></i> 2 Comments
                        </a>
                      </li>
                    </ul>
                    <h3 className="news-one__title">
                      <a href="blog-details.html">Metrics mission skills.</a>
                    </h3>
                    <p className="news-one__text">
                      Aellentesque porttitor lacus quis enim varius sed
                      efficitur turpis gilla sed sit amet.
                    </p>
                    <a href="blog-details.html" className="news-one__btn">
                      Read More
                    </a>
                    <div className="news-one__date-box">
                      <p>26 mar</p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-xl-4 col-lg-4 wow fadeInUp"
                data-wow-delay="300ms"
                data-wow-duration="1500ms"
              >
                {/* News One Single */}
                <div className="news-one__single">
                  <div className="news-one__img">
                    <img src="assets/images/blog/news-1-2.jpg" alt="" />
                    <a href="blog-details.html">
                      <span className="news-one__plus"></span>
                    </a>
                  </div>
                  <div className="news-one__content">
                    <ul className="list-unstyled news-one__meta">
                      <li>
                        <a href="#">
                          <i className="far fa-user-circle"></i> by Admin
                        </a>
                      </li>
                      <li>
                        <span>/</span>
                      </li>
                      <li>
                        <a href="#">
                          <i className="far fa-comments"></i> 2 Comments
                        </a>
                      </li>
                    </ul>
                    <h3 className="news-one__title">
                      <a href="blog-details.html">
                        solutions total link parallel
                      </a>
                    </h3>
                    <p className="news-one__text">
                      Aellentesque porttitor lacus quis enim varius sed
                      efficitur turpis gilla sed sit amet.
                    </p>
                    <a href="blog-details.html" className="news-one__btn">
                      Read More
                    </a>
                    <div className="news-one__date-box">
                      <p>26 mar</p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-xl-4 col-lg-4 wow fadeInUp"
                data-wow-delay="600ms"
                data-wow-duration="1500ms"
              >
                {/* News One Single */}
                <div className="news-one__single">
                  <div className="news-one__img">
                    <img src="assets/images/blog/news-1-3.jpg" alt="" />
                    <a href="blog-details.html">
                      <span className="news-one__plus"></span>
                    </a>
                  </div>
                  <div className="news-one__content">
                    <ul className="list-unstyled news-one__meta">
                      <li>
                        <a href="#">
                          <i className="far fa-user-circle"></i> by Admin
                        </a>
                      </li>
                      <li>
                        <span>/</span>
                      </li>
                      <li>
                        <a href="#">
                          <i className="far fa-comments"></i> 2 Comments
                        </a>
                      </li>
                    </ul>
                    <h3 className="news-one__title">
                      <a href="blog-details.html">business advice for growth</a>
                    </h3>
                    <p className="news-one__text">
                      Aellentesque porttitor lacus quis enim varius sed
                      efficitur turpis gilla sed sit amet.
                    </p>
                    <a href="blog-details.html" className="news-one__btn">
                      Read More
                    </a>
                    <div className="news-one__date-box">
                      <p>26 mar</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* News One End */}

        {/* CTA One Start */}
        <section className="cta-one">
          <div
            className="cta-one-bg"
            style={{
              backgroundImage: "url(assets/images/backgrounds/cta-one-bg.png)",
            }}
          ></div>
          <div className="container">
            <div className="row">
              <div className="col-xl-12">
                <div className="cta-one__inner">
                  <div className="cta-one__left">
                    <h2 className="cta-one__title">
                      we’re delivering the best <br /> customer experience
                    </h2>
                  </div>
                  <div className="cta-one__right">
                    <a href="contact.html" className="thm-btn cta-one__btn">
                      let’s get started
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* CTA One End */}

        {/* Site Footer One Start */}
        <footer className="site-footer">
          <div
            className="site-footer-shape wow slideInRight"
            data-wow-delay="100ms"
            data-wow-duration="3500ms"
            style={{
              backgroundImage: "url(assets/images/shapes/footer-shape.png)",
            }}
          ></div>
          <div className="container">
            <div className="site-footer__top">
              <div className="row">
                <div
                  className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
                  data-wow-delay="100ms"
                >
                  <div className="footer-widget__column footer-widget__about">
                    <div className="footer-widget__about-logo">
                      <a href="index.html">
                        <img src="assets/images/footer-logo.png" alt="" />
                      </a>
                    </div>
                    <p className="footer-widget__text">
                      Welcome to our consultancy agency. Lore ipsum simply text
                      amet cing elit.
                    </p>
                    <ul className="list-unstyled footer-widget__contact-list">
                      <li>
                        <div className="icon">
                          <i className="fas fa-phone-square-alt"></i>
                        </div>
                        <div className="text">
                          <p>
                            <a href="tel:+92-666-888-0000">+92 666 888 0000</a>
                          </p>
                        </div>
                      </li>
                      <li>
                        <div className="icon">
                          <i className="fas fa-envelope"></i>
                        </div>
                        <div className="text">
                          <p>
                            <a href="mailto:needhelp@company.com">
                              needhelp@company.com
                            </a>
                          </p>
                        </div>
                      </li>
                      <li>
                        <div className="icon">
                          <i className="fas fa-map-marker-alt"></i>
                        </div>
                        <div className="text">
                          <p>66 Broklyn Street New York, USA</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div
                  className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
                  data-wow-delay="200ms"
                >
                  <div className="footer-widget__column footer-widget__explore clearfix">
                    <h3 className="footer-widget__title">Explore</h3>
                    <ul className="footer-widget__explore-list list-unstyled">
                      <li>
                        <a href="about.html">About</a>
                      </li>
                      <li>
                        <a href="team.html">Meet our team</a>
                      </li>
                      <li>
                        <a href="cases.html">Case stories</a>
                      </li>
                      <li>
                        <a href="blog.html">Latest news</a>
                      </li>
                      <li>
                        <a href="contact.html">Contact</a>
                      </li>
                    </ul>
                    <ul className="footer-widget__explore-list footer-widget__explore-list-two list-unstyled">
                      <li>
                        <a href="contact.html">Support</a>
                      </li>
                      <li>
                        <a href="faq.html">Terms of use</a>
                      </li>
                      <li>
                        <a href="about.html">Privacy policy</a>
                      </li>
                      <li>
                        <a href="faq.html">Help</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div
                  className="col-xl-5 col-lg-6 col-md-8 wow fadeInUp"
                  data-wow-delay="400ms"
                >
                  <div className="footer-widget__column footer-widget__newsletter">
                    <h3 className="footer-widget__title footer-widget__title-news">
                      Newsletter
                    </h3>
                    <form className="footer-widget__newsletter-form">
                      <p className="footer-widget__newsletter-text">
                        Subsrcibe for latest articles and resources
                      </p>
                      <div className="footer-widget__newsletter-input-box">
                        <input
                          type="email"
                          placeholder="Email address"
                          name="email"
                        />
                        <button
                          type="submit"
                          className="footer-widget__newsletter-btn"
                        >
                          Register
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div className="site-footer-bottom">
              <div className="row">
                <div className="col-xl-12">
                  <div className="site-footer-bottom__inner">
                    <div className="site-footer-bottom__left">
                      <p>
                        © Copyright 2021 by <a href="#">Layerdrops.com</a>
                      </p>
                    </div>
                    <div className="site-footer__social">
                      <a href="#">
                        <i className="fab fa-twitter"></i>
                      </a>
                      <a href="#" className="clr-fb">
                        <i className="fab fa-facebook"></i>
                      </a>
                      <a href="#" className="clr-dri">
                        <i className="fab fa-dribbble"></i>
                      </a>
                      <a href="#" className="clr-ins">
                        <i className="fab fa-instagram"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
        {/* Site Footer One End */}
      </div>
      {/* /.page-wrapper */}

      <div className="mobile-nav__wrapper">
        <div className="mobile-nav__overlay mobile-nav__toggler"></div>
        {/* /.mobile-nav__overlay */}
        <div className="mobile-nav__content">
          <span className="mobile-nav__close mobile-nav__toggler">
            <i className="fa fa-times"></i>
          </span>

          <div className="logo-box">
            <a href="index.html" aria-label="logo image">
              <img src="assets/images/logo-1.png" width="155" alt="" />
            </a>
          </div>
          {/* /.logo-box */}
          <div className="mobile-nav__container"></div>
          {/* /.mobile-nav__container */}

          <ul className="mobile-nav__contact list-unstyled">
            <li>
              <i className="fa fa-envelope"></i>
              <a href="mailto:needhelp@packageName__.com">
                needhelp@aivons.com
              </a>
            </li>
            <li>
              <i className="fa fa-phone-alt"></i>
              <a href="tel:666-888-0000">666 888 0000</a>
            </li>
          </ul>
          {/* /.mobile-nav__contact */}
          <div className="mobile-nav__top">
            <div className="mobile-nav__social">
              <a href="#" className="fab fa-twitter"></a>
              <a href="#" className="fab fa-facebook-square"></a>
              <a href="#" className="fab fa-pinterest-p"></a>
              <a href="#" className="fab fa-instagram"></a>
            </div>
            {/* /.mobile-nav__social */}
          </div>
          {/* /.mobile-nav__top */}
        </div>
        {/* /.mobile-nav__content */}
      </div>
      {/* /.mobile-nav__wrapper */}

      <div className="search-popup">
        <div className="search-popup__overlay search-toggler"></div>
        {/* /.search-popup__overlay */}
        <div className="search-popup__content">
          <form action="#">
            {/* <label for="search" className="sr-only">search here</label>/.sr-only */}
            <input type="text" id="search" placeholder="Search Here..." />
            <button
              type="submit"
              aria-label="search submit"
              className="thm-btn"
            >
              <i className="icon-magnifying-glass"></i>
            </button>
          </form>
        </div>
        {/* /.search-popup__content */}
      </div>
      {/* /.search-popup */}

      <a href="#" data-target="html" className="scroll-to-target scroll-to-top">
        <i className="fa fa-angle-up"></i>
      </a>
    </>
  );
};
export default Home;
