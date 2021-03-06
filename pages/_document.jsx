import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";

export default class AppDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* favicons Icons */}
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="assets/images/favicons/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="assets/images/favicons/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="assets/images/favicons/favicon-16x16.png"
          />
          <link rel="manifest" href="assets/images/favicons/site.webmanifest" />

          {/* fonts */}
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Jost:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&amp;display=swap"
            rel="stylesheet"
          />

          <link
            rel="stylesheet"
            href="assets/vendors/bootstrap/css/bootstrap.min.css"
          />
          <link
            rel="stylesheet"
            href="assets/vendors/animate/animate.min.css"
          />
          <link
            rel="stylesheet"
            href="assets/vendors/fontawesome/css/all.min.css"
          />
          <link rel="stylesheet" href="assets/vendors/jarallax/jarallax.css" />
          <link
            rel="stylesheet"
            href="assets/vendors/jquery-magnific-popup/jquery.magnific-popup.css"
          />
          <link
            rel="stylesheet"
            href="assets/vendors/nouislider/nouislider.min.css"
          />
          <link
            rel="stylesheet"
            href="assets/vendors/nouislider/nouislider.pips.css"
          />
          <link
            rel="stylesheet"
            href="assets/vendors/odometer/odometer.min.css"
          />
          <link rel="stylesheet" href="assets/vendors/swiper/swiper.min.css" />
          <link rel="stylesheet" href="assets/vendors/aivons-icons/style.css" />
          <link
            rel="stylesheet"
            href="assets/vendors/tiny-slider/tiny-slider.min.css"
          />
          <link
            rel="stylesheet"
            href="assets/vendors/reey-font/stylesheet.css"
          />
          <link
            rel="stylesheet"
            href="assets/vendors/owl-carousel/owl.carousel.min.css"
          />
          <link
            rel="stylesheet"
            href="assets/vendors/owl-carousel/owl.theme.default.min.css"
          />
          <link
            rel="stylesheet"
            href="assets/vendors/twentytwenty/twentytwenty.css"
          />
          <link
            rel="stylesheet"
            href="assets/vendors/bxslider/css/jquery.bxslider.css"
          />

          <link rel="stylesheet" href="assets/css/main.css" />
          <link rel="stylesheet" href="assets/css/main-responsive.css" />
          <link rel="stylesheet" href="assets/css/app.css" />
        </Head>
        <body>
          <Main />
          <NextScript />

          <script src="assets/vendors/jquery/jquery-3.5.1.min.js"></script>
          <script src="assets/vendors/bootstrap/js/bootstrap.bundle.min.js"></script>
          <script src="assets/vendors/jarallax/jarallax.min.js"></script>
          <script src="assets/vendors/jquery-ajaxchimp/jquery.ajaxchimp.min.js"></script>
          <script src="assets/vendors/jquery-appear/jquery.appear.min.js"></script>
          <script src="assets/vendors/jquery-circle-progress/jquery.circle-progress.min.js"></script>
          <script src="assets/vendors/jquery-magnific-popup/jquery.magnific-popup.min.js"></script>
          <script src="assets/vendors/jquery-validate/jquery.validate.min.js"></script>
          <script src="assets/vendors/nouislider/nouislider.min.js"></script>
          <script src="assets/vendors/odometer/odometer.min.js"></script>
          <script src="assets/vendors/swiper/swiper.min.js"></script>
          <script src="assets/vendors/tiny-slider/tiny-slider.min.js"></script>
          <script src="assets/vendors/wnumb/wNumb.min.js"></script>
          <script src="assets/vendors/wow/wow.js"></script>
          <script src="assets/vendors/isotope/isotope.js"></script>
          <script src="assets/vendors/countdown/countdown.min.js"></script>
          <script src="assets/vendors/owl-carousel/owl.carousel.min.js"></script>
          <script src="assets/vendors/twentytwenty/twentytwenty.js"></script>
          <script src="assets/vendors/twentytwenty/jquery.event.move.js"></script>
          <script src="assets/vendors/bxslider/js/jquery.bxslider.min.js"></script>

          <script src="http://maps.google.com/maps/api/js?key=AIzaSyATY4Rxc8jNvDpsK8ZetC7JyN4PFVYGCGM"></script>

          <script src="assets/js/aivons.js"></script>
        </body>
      </Html>
    );
  }
}
