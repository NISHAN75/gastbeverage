(function ($) {
    $(document).ready(function () {

	
      


 


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

       // nice select
       $('select').niceSelect();

       gsap.registerPlugin(ScrollTrigger);
       
       gsap.to(".line-animation-wrapper .line-wrapper", {
        width: "calc(100% - 36px)",
        duration: 1.2,
        ease: "power2.out",
        scrollTrigger: {
            trigger: ".line-animation-wrapper",
            start: "top 60%", // Adjust as needed
            toggleActions: "play none none reverse"
        }
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


        

        
    });
})(jQuery);