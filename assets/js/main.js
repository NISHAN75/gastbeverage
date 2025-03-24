(function ($) {
    $(document).ready(function () {

	


     	// offcanvas humbarger
         let offcanvasElement = $('.header-offcanvas');
         offcanvasElement.on('show.bs.offcanvas', function () {
             $('.humbarger-btn').addClass('open');
             $('.btn-close span:nth-child(1)').css({
                 transform: 'rotate(45deg)',
                 marginBottom: '0'
             });
             $('.btn-close span:nth-child(2)').css({
                 transform: 'rotate(-45deg)',
                 marginTop: '-4px'
             });
         });
         offcanvasElement.on('hide.bs.offcanvas', function () {
             $('.humbarger-btn').removeClass('open');
             $('.btn-close span:nth-child(1)').css({
                 transform: '',
                 marginBottom: ''
             });
             $('.btn-close span:nth-child(2)').css({
                 transform: '',
                 marginTop: ''
             });
         });
        // offcanvas menu 
         $(".mobile-nav > ul > li > a").click(function (e) {
         e.preventDefault();
         let subMenu = $(this).next(".sub-menu");
         $(".mobile-nav .sub-menu").not(subMenu).slideUp();
         $(".mobile-nav > ul > li > a").not(this).removeClass('rotate active');
         $(this).toggleClass('rotate active');
         subMenu.stop(true, true).slideToggle();
       });

        //   line animation
        const $footerShape = $('.footer-bottom-shape-info');
        const imageWidth = 100; // Set this to the actual width of your background image in pixels
        let position = 0;
    
        function animateFooter() {
            position -= 1; 
            $footerShape.css('background-position', `${position}px 0`);
            if (Math.abs(position) >= imageWidth) {
                position = 0;
            }
            requestAnimationFrame(animateFooter);
        }
        animateFooter();
        var videoCompressor = new Swiper(".video-compressor-slider", {
            pagination: {
              el: ".swiper-pagination",
              clickable: true,
            },
            effect: "fade",
            fadeEffect: {
                crossFade: true,
            },
          });

          var gastAdvantage = new Swiper(".gast-advantage-slider", {
            pagination: {
              el: ".swiper-pagination",
            },
          });

       // nice select
       $('select').niceSelect();

       gsap.registerPlugin(ScrollTrigger);
       
       const lineWrappers = document.querySelectorAll(".line-animation-wrapper .line-wrapper");
       // Loop through each element and apply the GSAP animation
       lineWrappers.forEach((lineWrapper) => {
           gsap.to(lineWrapper, {
               width: "calc(100% - 36px)", 
               duration: 1.2, 
               ease: "power2.out",
               scrollTrigger: {
                   trigger: ".line-animation-wrapper",
                   start: "top 60%", 
                   toggleActions: "play none none reverse" 
               }
           });
       });

        // OverlayScrollbars
        const {
            OverlayScrollbars,
            ClickScrollPlugin
        } = OverlayScrollbarsGlobal;
        // Initialize the ClickScrollPlugin
        OverlayScrollbars.plugin(ClickScrollPlugin);
        $("body").each(function () {
            OverlayScrollbars(this, {
                scrollbars: {
                    clickScroll: true,
                    autoHide: "leave",
                    dragScrolling: true,
                    clickScrolling: true,
                },
                scrollBehavior: 'smooth',
            });
        });

        // lenis
        // Initialize a new Lenis instance for smooth scrolling
        const lenis = new Lenis();

        // Listen for the 'scroll' event and log the event data to the console
        // lenis.on('scroll', (e) => {
        //     console.log(e);
        // });

        // Synchronize Lenis scrolling with GSAP's ScrollTrigger plugin
        lenis.on('scroll', ScrollTrigger.update);

        // Add Lenis's requestAnimationFrame (raf) method to GSAP's ticker
        // This ensures Lenis's smooth scroll animation updates on each GSAP tick
        gsap.ticker.add((time) => {
            lenis.raf(time * 1000); // Convert time from seconds to milliseconds
        });

        // Disable lag smoothing in GSAP to prevent any delay in scroll animations
        gsap.ticker.lagSmoothing(0);
        // lenis


        $(".back-btn").on("click", function (e) {
			e.preventDefault();
			lenis.scrollTo(0)
		});

        
    });
})(jQuery);