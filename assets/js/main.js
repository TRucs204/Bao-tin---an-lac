var App = {
  dayTime: function () {
    if (jQuery(".datetimepicker3").length) {
      jQuery(".datetimepicker3").datetimepicker({
        format: "d.m.Y H:i",
        inline: true,
        lang: "vi",
      });
    }
  },
  slider: function () {
    jQuery(".one-time").slick({
      dots: true,
      infinite: true,
      arrows: false,
      speed: 1500,
      slidesToShow: 1,
      adaptiveHeight: true,
      autoplay: true,
      pauseOnHover: false,
      pauseOnFocus: false,
      autoplaySpeed: 3500,
    });
    jQuery(".slider-unit").slick({
      dots: true,
      infinite: true,
      arrows: false,
      speed: 300,
      slidesToShow: 2,
      variableWidth: true,
      adaptiveHeight: true,
    });
    jQuery(".slider_stories").slick({
      dots: true,
      infinite: true,
      arrows: false,
      slidesToShow: 2,
      variableWidth: true,
      adaptiveHeight: true,
      appendDots: jQuery(".story_dots"),
    });
    jQuery(".slider_partner").slick({
      dots: true,
      infinite: true,
      arrows: false,
      slidesToShow: 1,
      variableWidth: true,
    });
  },
  GsapSplit: function () {
    let split = SplitText.create(".loadText", { type: "chars" });
    // now animate the characters in a staggered fashion
    gsap.from(split.chars, {
      y: 20,
      opacity: 0,
      stagger: 0.1,
      duration: 0.3,
      ease: "back.out(2)",
    });

    jQuery(".aniText").each(function (index, item) {
      let desc = SplitText.create(item, { type: "words" });
      gsap.from(desc.words, {
        y: 20,
        opacity: 0,
        stagger: 0.1,
        duration: 0.3,
        ease: "back.out(2)",
        scrollTrigger: {
          trigger: item,
          start: "top 85%",
          end: "bottom 70%",
          scrub: true,
          markers: false,
        },
      });
    });
  },
  GsapScrolltrigger: function () {
    gsap.fromTo(
      ".load-left",
      { x: -200, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 2, // thời gian chạy
        ease: "power2.out",
      }
    );

    jQuery(".center").each(function (index, item) {
      gsap.fromTo(
        item,
        { clipPath: "inset(0 50% 0 50%)" },
        {
          clipPath: "inset(0 0% 0 0%)",
          duration: 1,
          scrollTrigger: {
            trigger: item,
            start: "top 80%",
            end: "top 30%",
            scrub: false,
            markers: false,
          },
        }
      );
    });

    gsap.fromTo(
      ".flower",
      { clipPath: "inset(0% 0% 0% 0%)" },
      {
        clipPath: "inset(0% 0% 100% 0%)",
        duration: 1,
        scrollTrigger: {
          trigger: ".flower",
          start: "30% 50%",
          end: "50% 40%",
          scrub: true,
          markers: false,
        },
      }
    );

    jQuery(".box-on-left").each(function (index, item) {
      gsap.fromTo(
        item,
        { x: -200, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          scrollTrigger: {
            trigger: item,
            start: "top 80%",
            end: "top 30%",
            scrub: false,
            markers: false,
          },
        }
      );
    });
    jQuery(".box-on-right").each(function (index, item) {
      gsap.fromTo(
        item,
        { x: 200, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          scrollTrigger: {
            trigger: item,
            start: "top 80%",
            end: "top 30%",
            scrub: false,
            markers: false,
          },
        }
      );
    });

    jQuery(".box-on-bottom").each(function (index, item) {
      gsap.fromTo(
        item,
        { y: 200, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,

          scrollTrigger: {
            trigger: item,
            start: "top 80%",
            end: "top 30%",
            scrub: true,
            markers: false,
          },
        }
      );
    });

    // create
    let mm = gsap.matchMedia();

    // add a media query. When it matches, the associated function will run
    mm.add("(min-width: 991px)", () => {
      // this setup code only runs when viewport is at least 800px wide
      gsap.from(".card_service", {
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 1,
        scrollTrigger: {
          trigger: ".services", // cha chứa các item
          start: "0% 50%",
          end: "50% 50%",
          markers: false,
          scrub: true,
        },
      });
      gsap.from(".item_booking, .arrow_booking", {
        x: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.5,
        scrollTrigger: {
          trigger: ".instructions_booking", // cha chứa các item
          start: "0% 50%",
          end: "50% 50%",
          markers: false,
          scrub: false,
        },
      });

      gsap.from(".item_box, .arrow_box", {
        x: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.5,
        scrollTrigger: {
          trigger: ".instructions_box", // cha chứa các item
          start: "0% 50%",
          end: "50% 50%",
          markers: false,
          scrub: false,
        },
      });
      return () => {
        // optional
        // custom cleanup code here (runs when it STOPS matching)
      };
    });

    mm.add("(max-width: 991px)", () => {
      gsap.from(".card_service", {
        y: 100,
        opacity: 0,
        duration: 0.7,
        stagger: 1,
      });

      gsap.from(".item_booking, .arrow_booking", {
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.5,
        scrollTrigger: {
          trigger: ".instructions_booking", // cha chứa các item
          start: "top 50%",
          end: "bottom 80%",
          markers: false,
          scrub: true,
        },
      });

      gsap.from(".item_box, .arrow_box", {
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.5,
        scrollTrigger: {
          trigger: ".instructions_box", // cha chứa các item
          start: "top 50%",
          end: "bottom 50%",
          markers: false,
          scrub: true,
        },
      });
      return () => {
        // optional
        // custom cleanup code here (runs when it STOPS matching)
      };
    });

    // later, if we need to revert all the animations/ScrollTriggers...
    // mm.revert();

    //SplitText
  },
  scrollWindow: function () {
    jQuery(window).scroll(function () {
      if (jQuery(this).scrollTop() > 10) {
        jQuery("#header").addClass("active");
      } else {
        jQuery("#header").removeClass("active");
      }
    });
  },
  handleClickMenu: function () {
    jQuery(".hambuger-container").click(function () {
      jQuery(".menu-mobile").toggleClass("active");
      jQuery(".hambuger-container span").toggleClass("active");
    });
  },
  showDefine: function () {
    jQuery("#show_define").click(function (e) {
      e.preventDefault();
      jQuery(".define .container").toggleClass("show");
    });
  },
};

jQuery(document).ready(function () {
  App.dayTime();
  App.slider();
  App.GsapSplit();
  App.GsapScrolltrigger();
  App.scrollWindow();
  App.scrollWindow();
  App.handleClickMenu();
  App.showDefine();
});
