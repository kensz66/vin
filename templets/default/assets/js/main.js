"use strict";
function _defineProperty(e, i, s) {
    return i in e ? Object.defineProperty(e, i, {
        value: s,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[i] = s,
    e
}
!function(h) {
    var e = h(".search-btn-mobile")
      , i = h(".search-body");
    e.on("click", function(e) {
        e.preventDefault(),
        i.slideToggle()
    });
    var s = h("#active-sticky");
    h(window).on("scroll", function() {
        var e = h(window).scrollTop()
          , i = s;
        h("#active-sticky2").removeClass("is-sticky-mobile"),
        e < 1 ? i.removeClass("is-sticky") : (i.addClass("is-sticky"),
        h("#active-sticky2").addClass("is-sticky-mobile"))
    }),
    h("#offcanvasNav a").on("click", function() {
        var e = h(this)
          , i = e.closest("ul")
          , s = i.find(".active")
          , t = e.closest("li")
          , e = t.hasClass("active")
          , r = 0;
        i.find("ul").slideUp(function() {
            ++r == i.find("ul").length && s.removeClass("active")
        }),
        e || (t.children("ul").slideDown(),
        t.addClass("active"))
    }),
    h("#offcanvas-menu2 li a").on("click", function(e) {
        h(this).closest("li").toggleClass("active"),
        h(this).closest("li").siblings().removeClass("active"),
        h(this).closest("li").siblings().children(".category-sub-menu").slideUp(),
        h(this).closest("li").siblings().children(".category-sub-menu").children("li").toggleClass("active"),
        h(this).closest("li").siblings().children(".category-sub-menu").children("li").removeClass("active"),
        h(this).parent().children(".category-sub-menu").slideToggle()
    }),
    h("#offcanvas-menu3 li a").on("click", function(e) {
        h(this).closest("li").toggleClass("active"),
        h(this).closest("li").siblings().removeClass("active"),
        h(this).closest("li").siblings().children(".category-sub-menu").slideUp(),
        h(this).closest("li").siblings().children(".category-sub-menu").children("li").toggleClass("active"),
        h(this).closest("li").siblings().children(".category-sub-menu").children("li").removeClass("active"),
        h(this).parent().children(".category-sub-menu").slideToggle()
    }),
    h(".category-menu li.hidden").hide(),
    h("#more-btn").on("click", function(e) {
        e.preventDefault(),
        h(".category-menu li.hidden").toggle(500);
        e = '<i class="ion-ios-minus-empty" aria-hidden="true"></i> Less Categories';
        h(this).html() == e ? h(this).html('<i class="ion-ios-plus-empty" aria-hidden="true"></i> More Categories') : h(this).html(e)
    });
    var t = h(".menu-btn")
      , r = h(".vmenu-content");
    t.on("click", function(e) {
        r.slideToggle(500)
    }),
    r.each(function() {
        var s = h(this)
          , t = s.find(".menu-item:gt(10)")
          , e = s.hasClass("expanded");
        t[e ? "show" : "hide"](),
        0 < t.length && s.append(h('<li class="expand">' + (e ? '<a href="javascript:void(0);"><span><i class="ion-android-remove"></i>Close Categories</span></a>' : '<a href="javascript:void(0);"><span><i class="ion-android-add"></i>More Categories</span></a>') + "</li>").on("click", function(e) {
            var i = s.hasClass("expanded");
            e.preventDefault(),
            h(this).html(i ? '<a href="javascript:void(0);"><span><i class="ion-android-add"></i>More Categories</span></a>' : '<a href="javascript:void(0);"><span><i class="ion-android-remove"></i>Close Categories</span></a>'),
            s.toggleClass("expanded"),
            t.toggle(300)
        }))
    }),
    h(".more-btn").on("click", function(e) {
        h(".category-menu").slideToggle(300)
    }),
    h(".menu-item-has-children-1").on("click", function(e) {
        h(".category-mega-menu-1").slideToggle("slow")
    }),
    h(".menu-item-has-children-2").on("click", function(e) {
        h(".category-mega-menu-2").slideToggle("slow")
    }),
    h(".menu-item-has-children-3").on("click", function(e) {
        h(".category-mega-menu-3").slideToggle("slow")
    }),
    h(".menu-item-has-children-4").on("click", function(e) {
        h(".category-mega-menu-4").slideToggle("slow")
    }),
    h(".menu-item-has-children-5").on("click", function(e) {
        h(".category-mega-menu-5").slideToggle("slow")
    }),
    h(".menu-item-has-children-6").on("click", function() {
        h(".category-mega-menu-6").slideToggle("slow")
    });
    [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]')).map(function(e) {
        return new bootstrap.Tooltip(e)
    }),
    new Swiper(".hero-slider .swiper-container",{
        loop: !0,
        speed: 600,
        autoplay: !0,
        lazy: !0,
        fadeEffect: {
            crossFade: !0
        },
        pagination: {
            el: ".hero-slider .swiper-pagination",
            clickable: !0
        },
        navigation: {
            nextEl: ".hero-slider .swiper-button-next",
            prevEl: ".hero-slider .swiper-button-prev"
        }
    }),
    new Swiper(".brand-carousel .swiper-container",{
        loop: !1,
        speed: 800,
        slidesPerView: 5,
        spaceBetween: 10,
        pagination: !1,
        navigation: {
            nextEl: ".brand-carousel .swiper-button-next",
            prevEl: ".brand-carousel .swiper-button-prev"
        },
        breakpoints: {
            0: {
                slidesPerView: 1
            },
            480: {
                slidesPerView: 2
            },
            768: {
                slidesPerView: 3
            },
            992: {
                slidesPerView: 4
            },
            1200: {
                slidesPerView: 5
            }
        }
    }),
    new Swiper(".food-category-carousel .swiper-container",{
        loop: !1,
        speed: 800,
        slidesPerView: 6,
        spaceBetween: 10,
        navigation: {
            nextEl: ".food-category-carousel .swiper-button-next",
            prevEl: ".food-category-carousel .swiper-button-prev"
        },
        breakpoints: {
            0: {
                slidesPerView: 1
            },
            480: {
                slidesPerView: 2
            },
            768: {
                slidesPerView: 3
            },
            992: {
                slidesPerView: 4
            },
            1200: {
                slidesPerView: 6
            }
        }
    }),
    new Swiper(".food-carousel-four-items .swiper-container",{
        loop: !1,
        speed: 800,
        slidesPerView: 4,
        spaceBetween: 20,
        navigation: {
            nextEl: ".food-carousel-four-items .swiper-button-next",
            prevEl: ".food-carousel-four-items .swiper-button-prev"
        },
        breakpoints: {
            0: {
                slidesPerView: 1
            },
            480: {
                slidesPerView: 2
            },
            992: {
                slidesPerView: 3
            },
            1200: {
                slidesPerView: 4
            }
        }
    }),
    new Swiper(".food-carousel-five-items .swiper-container",{
        loop: !1,
        speed: 800,
        slidesPerView: 5,
        spaceBetween: 20,
        navigation: {
            nextEl: ".food-carousel-five-items .swiper-button-next",
            prevEl: ".food-carousel-five-items .swiper-button-prev"
        },
        breakpoints: {
            0: {
                slidesPerView: 1
            },
            480: {
                slidesPerView: 2
            },
            992: {
                slidesPerView: 3
            },
            1200: {
                slidesPerView: 4
            },
            1500: {
                slidesPerView: 5
            }
        }
    }),
    new Swiper(".food-carousel-six-items .swiper-container",{
        loop: !1,
        speed: 800,
        slidesPerView: 6,
        spaceBetween: 20,
        navigation: {
            nextEl: ".food-carousel-six-items .swiper-button-next",
            prevEl: ".food-carousel-six-items .swiper-button-prev"
        },
        breakpoints: {
            0: {
                slidesPerView: 1
            },
            480: {
                slidesPerView: 2
            },
            768: {
                slidesPerView: 3
            },
            992: {
                slidesPerView: 4
            },
            1200: {
                slidesPerView: 5
            },
            1500: {
                slidesPerView: 6
            }
        }
    }),
    new Swiper(".tab-carousel .swiper-container",{
        loop: !1,
        speed: 800,
        slidesPerView: 3,
        spaceBetween: 10,
        pagination: !1,
        navigation: {
            nextEl: ".tab-carousel .swiper-button-next",
            prevEl: ".tab-carousel .swiper-button-prev"
        },
        observer: !0,
        observeParents: !0,
        breakpoints: {
            0: {
                slidesPerView: 1
            },
            768: {
                slidesPerView: 2
            },
            1200: {
                slidesPerView: 3
            }
        }
    }),
    new Swiper(".deal-carousel-one .swiper-container",{
        loop: !1,
        speed: 800,
        slidesPerView: 2,
        spaceBetween: 20,
        pagination: !1,
        navigation: {
            nextEl: ".deal-carousel-one .swiper-button-next",
            prevEl: ".deal-carousel-one .swiper-button-prev"
        },
        observer: !0,
        observeParents: !0,
        breakpoints: {
            0: {
                slidesPerView: 1
            },
            992: {
                slidesPerView: 1
            },
            1200: {
                slidesPerView: 2
            }
        }
    }),
    new Swiper(".deal-carousel-two .swiper-container",{
        loop: !1,
        speed: 800,
        slidesPerView: 1,
        spaceBetween: 20,
        pagination: !1,
        navigation: {
            nextEl: ".deal-carousel-two .swiper-button-next",
            prevEl: ".deal-carousel-two .swiper-button-prev"
        },
        observer: !0,
        observeParents: !0,
        breakpoints: {
            0: {
                slidesPerView: 1
            },
            992: {
                slidesPerView: 1
            },
            1200: {
                slidesPerView: 1
            }
        }
    }),
    new Swiper(".featured-carousel .swiper-container",{
        loop: !1,
        speed: 800,
        slidesPerView: 6,
        spaceBetween: 10,
        pagination: !1,
        navigation: {
            nextEl: ".featured-carousel .swiper-button-next",
            prevEl: ".featured-carousel .swiper-button-prev"
        },
        observer: !0,
        observeParents: !0,
        breakpoints: {
            0: {
                slidesPerView: 1,
                loop: !0,
                autoplay: {
                    delay: 2e3
                },
                speed: 1e3
            },
            480: {
                slidesPerView: 2,
                loop: !0,
                speed: 1e3
            },
            657: {
                slidesPerView: 3
            },
            992: {
                slidesPerView: 4
            },
            1200: {
                slidesPerView: 6
            }
        }
    }),
    new Swiper(".new-arrival-carousel .swiper-container",{
        loop: !1,
        speed: 800,
        slidesPerView: 5,
        spaceBetween: 10,
        pagination: !1,
        navigation: {
            nextEl: ".new-arrival-carousel .swiper-button-next",
            prevEl: ".new-arrival-carousel .swiper-button-prev"
        },
        observer: !0,
        observeParents: !0,
        breakpoints: {
            0: {
                slidesPerView: 1,
                loop: !0,
                autoplay: {
                    delay: 2e3
                },
                speed: 1e3
            },
            480: {
                slidesPerView: 2,
                loop: !0,
                speed: 1e3
            },
            657: {
                slidesPerView: 3
            },
            992: {
                slidesPerView: 4
            },
            1200: {
                slidesPerView: 5
            }
        }
    }),
    new Swiper(".categories-carousel .swiper-container",{
        loop: !0,
        speed: 800,
        slidesPerView: 1,
        spaceBetween: 0,
        pagination: !1,
        navigation: {
            nextEl: ".categories-carousel .swiper-button-next",
            prevEl: ".categories-carousel .swiper-button-prev"
        },
        breakpoints: {
            0: {
                slidesPerView: 1
            },
            576: {
                slidesPerView: 2
            },
            992: {
                slidesPerView: 1
            }
        }
    }),
    new Swiper(".categories-carousel2 .swiper-container",{
        loop: !0,
        speed: 800,
        slidesPerView: 1,
        spaceBetween: 0,
        pagination: !1,
        navigation: {
            nextEl: ".categories-carousel2 .swiper-button-next",
            prevEl: ".categories-carousel2 .swiper-button-prev"
        },
        breakpoints: {
            0: {
                slidesPerView: 1
            },
            576: {
                slidesPerView: 2
            },
            992: {
                slidesPerView: 1
            }
        }
    }),
    new Swiper(".categories-carousel3 .swiper-container",{
        loop: !0,
        speed: 800,
        slidesPerView: 1,
        spaceBetween: 0,
        pagination: !1,
        navigation: {
            nextEl: ".categories-carousel3 .swiper-button-next",
            prevEl: ".categories-carousel3 .swiper-button-prev"
        },
        breakpoints: {
            0: {
                slidesPerView: 1
            },
            576: {
                slidesPerView: 2
            },
            992: {
                slidesPerView: 1
            }
        }
    }),
    new Swiper(".categories-carousel4 .swiper-container",{
        loop: !0,
        speed: 800,
        slidesPerView: 1,
        spaceBetween: 0,
        pagination: !1,
        navigation: {
            nextEl: ".categories-carousel4 .swiper-button-next",
            prevEl: ".categories-carousel4 .swiper-button-prev"
        },
        breakpoints: {
            0: {
                slidesPerView: 1
            },
            576: {
                slidesPerView: 2
            },
            992: {
                slidesPerView: 1
            }
        }
    });
    e = new Swiper(".product-modal-gallery-thumbs .swiper-container",{
        spaceBetween: 0,
        slidesPerView: 4,
        loop: !1,
        watchSlidesVisibility: !0,
        watchSlidesProgress: !0
    }),
    new Swiper(".product-modal-gallery .swiper-container",(_defineProperty(t = {
        spaceBetween: 1
    }, "spaceBetween", 0),
    _defineProperty(t, "loop", !1),
    _defineProperty(t, "navigation", {
        nextEl: ".product-modal-gallery .swiper-button-next",
        prevEl: ".product-modal-gallery .swiper-button-prev"
    }),
    _defineProperty(t, "thumbs", {
        swiper: e
    }),
    t)),
    e = new Swiper(".gallery-thumbs .swiper-container",{
        spaceBetween: 0,
        slidesPerView: 4,
        loop: !1,
        watchSlidesVisibility: !0,
        watchSlidesProgress: !0
    }),
    new Swiper(".gallery .swiper-container",(_defineProperty(t = {
        spaceBetween: 1
    }, "spaceBetween", 0),
    _defineProperty(t, "loop", !1),
    _defineProperty(t, "navigation", {
        nextEl: ".gallery .swiper-button-next",
        prevEl: ".gallery .swiper-button-prev"
    }),
    _defineProperty(t, "thumbs", {
        swiper: e
    }),
    t)),
    new Swiper(".categories-carousel5 .swiper-container",{
        loop: !1,
        speed: 800,
        slidesPerView: 1,
        spaceBetween: 0,
        pagination: !1,
        navigation: {
            nextEl: ".categories-carousel5 .swiper-button-next",
            prevEl: ".categories-carousel5 .swiper-button-prev"
        },
        breakpoints: {
            0: {
                slidesPerView: 1
            },
            576: {
                slidesPerView: 1
            },
            992: {
                slidesPerView: 1
            }
        }
    });
    h(".countdown").each(function() {
        var e = h(this)
          , i = h(this).data("countdown")
          , s = h(this).data("format");
        setInterval(function() {
            !function(e, i, s) {
                var t = new Date
                  , r = (new Date(e).getTime() - t.getTime()) / 864e5
                  , n = Math.floor(r)
                  , o = 24 * (r - n)
                  , a = Math.floor(o)
                  , l = 60 * (o - a)
                  , c = Math.floor(60 * (o - a))
                  , d = Math.floor(60 * (l - c))
                  , p = 0
                  , u = 0
                  , w = 0;
                "short" != s && (365 < n && (p = Math.floor(n / 365),
                n %= 365),
                30 < n && (u = Math.floor(n / 30),
                n %= 30),
                7 < n && (w = Math.floor(n / 7),
                n %= 7));
                var g = 1 < (p = p < 10 ? "0" + p : p) ? "years" : "year"
                  , m = 1 < (u = u < 10 ? "0" + u : u) ? "months" : "month"
                  , v = 1 < (w = w < 10 ? "0" + w : w) ? "weeks" : "week"
                  , e = 1 < (n = n < 10 ? "0" + n : n) ? "days" : "day"
                  , t = 1 < (a = a < 10 ? "0" + a : a) ? "hrs" : "hr"
                  , r = 1 < (c = c < 10 ? "0" + c : c) ? "mins" : "min"
                  , o = 1 < (d = d < 10 ? "0" + d : d) ? "secs" : "sec"
                  , s = (l = {
                    wrapper: i.find(".countdown__item"),
                    year: i.find(".yearsLeft"),
                    month: i.find(".monthsLeft"),
                    week: i.find(".weeksLeft"),
                    day: i.find(".daysLeft"),
                    hour: i.find(".hoursLeft"),
                    minute: i.find(".minsLeft"),
                    second: i.find(".secsLeft"),
                    yearTxt: i.find(".yearsText"),
                    monthTxt: i.find(".monthsText"),
                    weekTxt: i.find(".weeksText"),
                    dayTxt: i.find(".daysText"),
                    hourTxt: i.find(".hoursText"),
                    minTxt: i.find(".minsText"),
                    secTxt: i.find(".secsText")
                }).wrapper.length;
                i.addClass("item-" + s),
                h(l.year).html(p),
                h(l.yearTxt).html(g),
                h(l.month).html(u),
                h(l.monthTxt).html(m),
                h(l.week).html(w),
                h(l.weekTxt).html(v),
                h(l.day).html(n),
                h(l.dayTxt).html(e),
                h(l.hour).html(a),
                h(l.hourTxt).html(t),
                h(l.minute).html(c),
                h(l.minTxt).html(r),
                h(l.second).html(d),
                h(l.secTxt).html(o)
            }(i, e, s)
        }, 0)
    }),
    h("#slider-range").slider({
        range: !0,
        min: 0,
        max: 100,
        values: [0, 100],
        slide: function(e, i) {
            h("#amount").val("???" + i.values[0] + " - ???" + i.values[1])
        }
    }),
    h("#amount").val("???" + h("#slider-range").slider("values", 0) + " - ???" + h("#slider-range").slider("values", 1)),
    h(".count").each(function() {
        var i = h(this)
          , s = i.find('input[type="number"]')
          , e = i.find(".increment")
          , t = i.find(".decrement")
          , r = s.attr("min")
          , n = s.attr("max");
        e.on("click", function() {
            var e = parseFloat(s.val());
            e = n <= e ? e : e + 1,
            i.find("input").val(e),
            i.find("input").trigger("change")
        }),
        t.on("click", function() {
            var e = parseFloat(s.val());
            e = e <= r ? e : e - 1,
            i.find("input").val(e),
            i.find("input").trigger("change")
        })
    }),
    h(".checkout-toggle2").on("click", function() {
        h(".open-toggle2").slideToggle(1e3)
    }),
    h(".checkout-toggle").on("click", function() {
        h(".open-toggle").slideToggle(1e3)
    }),
    h("#mc-form").ajaxChimp({
        callback: function(e) {
            ("success" === e.result || "error" === e.result) && alert(e.msg);
            return !1
        },
        url: "http://devitems.us11.list-manage.com/subscribe/post"
    });
    var n, t = h("#contactForm");
    h("#contactForm").length && t.validate({
        onfocusout: !1,
        onkeyup: !1,
        rules: {
            name: "required",
            number: "required",
            email: {
                required: !0,
                email: !0
            }
        },
        errorPlacement: function(e, i) {
            e.insertBefore(i)
        },
        messages: {
            name: "Enter your name?",
            email: {
                required: "Enter your email?",
                email: "Please, enter a valid email"
            }
        },
        highlight: function(e) {
            h(e).text("").addClass("error")
        },
        success: function(e) {
            e.text("").addClass("valid")
        }
    }),
    h("#formSubmit").length && (n = h("#formSubmit"),
    CTForm.submit(function() {
        var e;
        return h(this).valid() ? (n.button("loading"),
        e = h(this).attr("action"),
        h.ajax({
            url: e,
            type: "POST",
            data: {
                contactname: h("#name").val(),
                contactemail: h("#email").val(),
                contactmessage: h("#massage").val()
            },
            success: function() {
                n.button("reset"),
                n.button("complete")
            },
            error: function() {
                n.button("reset"),
                n.button("error")
            }
        })) : n.button("reset"),
        !1
    })),
    h("#currentYear").text((new Date).getFullYear()),
    h.scrollUp({
        scrollName: "scrollUp",
        scrollDistance: 400,
        scrollFrom: "top",
        scrollSpeed: 400,
        easingType: "linear",
        animation: "fade",
        animationSpeed: 200,
        scrollTrigger: !1,
        scrollTarget: !1,
        scrollText: '<i class="las la-arrow-up"></i>',
        scrollTitle: !1,
        scrollImg: !1,
        activeOverlay: !1,
        zIndex: 214
    })
}(jQuery);

function toggle2(selector) {
  document.getElementById( selector ).style.display =( document.getElementById( selector ).style.display == 'none' ) ? 'block' : 'none'; return false;
}
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsiJCIsIiRzVG9nZ2xlIiwiJHNlYXJjaEJvZHkiLCJvbiIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInNsaWRlVG9nZ2xlIiwiYWN0aXZlU3RpY2t5Iiwid2luRG93Iiwid2luZG93Iiwic2Nyb2xsIiwic2Nyb2xsVG9wIiwiaXNTdGlja3kiLCJyZW1vdmVDbGFzcyIsImFkZENsYXNzIiwiJG9mZmNhbnZhc05hdiIsImxpbmsiLCJjbG9zZXN0IiwiY2xvc2VzdFVsIiwiZmluZCIsImFjdGl2ZUxpbmtzIiwiY2xvc2VzdExpIiwibGlua1N0YXR1cyIsInNsaWRlVXAiLCJjb3VudCIsImxlbmd0aCIsInNsaWRlRG93biIsInRvZ2dsZUNsYXNzIiwidGhpcyIsInNpYmxpbmdzIiwiY2hpbGRyZW4iLCIkb2ZmY2FudmFzTWVudTMiLCJwYXJlbnQiLCJ0b2dnbGUiLCJodG1sQWZ0ZXIiLCJodG1sIiwiJGJ0bk1lbnUiLCJoaWRlIiwiJHVsIiwiJGxpcyIsImlzRXhwYW5kZWQiLCIkdm1lbnVDb250ZW50IiwiZXZlbnQiLCJlYWNoIiwiaGFzQ2xhc3MiLCJhcHBlbmQiLCJ0b29sdGlwVHJpZ2dlckxpc3QiLCJ0b29sdGlwTGlzdCIsImNyb3NzRmFkZSIsImVsIiwiY2xpY2thYmxlIiwibmF2aWdhdGlvbiIsIm5leHRFbCIsImxvb3AiLCJzbGlkZXNQZXJWaWV3Iiwic3BhY2VCZXR3ZWVuIiwic2xpY2UiLCJjYWxsIiwiYnJlYWtwb2ludHMiLCJtYXAiLCJ0b29sdGlwVHJpZ2dlckVsIiwiVG9vbHRpcCIsIlN3aXBlciIsInNwZWVkIiwiYXV0b3BsYXkiLCJsYXp5IiwicHJldkVsIiwicGFnaW5hdGlvbiIsIjQ4MCIsIjc2OCIsIjk5MiIsImZvb2RDYXJvdXNlbEZvdXJJdGVtcyIsIjAiLCJmb29kQ2Fyb3VzZWxGaXZlSXRlbXMiLCIxMjAwIiwiZm9vZENhcm91c2VsU2l4SXRlbXMiLCJ0YWJDYXJvdXNlbCIsIm9ic2VydmVyIiwiMTUwMCIsImRlYWxDYXJvdXNlbE9uZSIsIm9ic2VydmVQYXJlbnRzIiwiZGVhbENhcm91c2VsdHdvIiwiZGVsYXkiLCJjYXRlZ29yaWVzQ2Fyb3VzZWwiLCI2NTciLCJjYXRlZ29yaWVzQ2Fyb3VzZWwyIiwiY2F0ZWdvcmllc0Nhcm91c2VsMyIsIjU3NiIsImdhbGxlcnlUaHVtYnMiLCJzd2lwZXIiLCJUaHVtYnMiLCJnYWxsZXJ5VG9wMiIsIiRlbmREYXRlIiwiZmxvb3IiLCJlX2hyc0xlZnQiLCJ5ZWFyc0xlZnQiLCJtb250aHNMZWZ0IiwiZGF5c0xlZnQiLCJ3ZWVrc0xlZnQiLCJocnNMZWZ0IiwibWluc1RleHQiLCJ3YXRjaFNsaWRlc1Zpc2liaWxpdHkiLCJ3YXRjaFNsaWRlc1Byb2dyZXNzIiwiZGF5IiwibWludXRlIiwiJHRoaXMiLCJ5ZWFyVHh0IiwibW9udGhUeHQiLCJob3VyVHh0IiwiJG1hcmt1cCIsImRheXNUZXh0IiwiX2RlZmluZVByb3BlcnR5IiwiX1N3aXBlcjIiLCJtaW5UeHQiLCJzZWNvbmQiLCJzZWNUeHQiLCJtaW4iLCJtYXgiLCJ2YWx1ZXMiLCJzbGlkZSIsInZhbCIsImluY3JlYW1lbnQiLCJkZWNyZWFtZW50IiwibWF4VmFsdWUiLCJvbGRWYWx1ZSIsImZvcm1TdWJtaXQiLCJkYXRhIiwiQ1RGb3JtIiwic2V0SW50ZXJ2YWwiLCIkZm9ybWF0IiwiRGF0ZSIsImVfZGF5c0xlZnQiLCJwYXJzZUZsb2F0IiwibWluVmFsdWUiLCJ0b2RheSIsImdldFRpbWUiLCJNYXRoIiwiZV9taW5zTGVmdCIsInNlY3NMZWZ0IiwibWluc0xlZnQiLCJtQ0Zvcm0iLCJjYWxsYmFjayIsIm1haWxjaGltcENhbGxiYWNrIiwieWVhcnNUZXh0IiwibW9udGhzVGV4dCIsInJlc3AiLCJ3ZWVrc1RleHQiLCJyZXN1bHQiLCJhbGVydCIsIm1zZyIsImhvdXJUZXh0Iiwic2VjVGV4dCIsIm5hbWUiLCJjb250YWN0Rm9ybSIsIndyYXBwZXIiLCJ2YWxpZGF0ZSIsIm9uZm9jdXNvdXQiLCJvbmtleXVwIiwicnVsZXMiLCJudW1iZXIiLCJlbWFpbCIsInJlcXVpcmVkIiwiZGF5VHh0IiwiZXJyb3JQbGFjZW1lbnQiLCJlcnJvciIsImluc2VydEJlZm9yZSIsImVsTnVtYmVyIiwibW9udGgiLCJoaWdobGlnaHQiLCJlbGVtZW50Iiwic3VjY2VzcyIsIm1ha2VUaW1lciIsInVybCIsInNsaWRlciIsInR5cGUiLCJjb250YWN0bmFtZSIsImNvbnRhY3RlbWFpbCIsImNvbnRhY3RtZXNzYWdlIiwidWkiLCJidXR0b24iLCJpbnB1dCIsImF0dHIiLCJ0ZXh0IiwiZ2V0RnVsbFllYXIiLCJuZXdWYWwiLCJzY3JvbGxEaXN0YW5jZSIsInRyaWdnZXIiLCJzY3JvbGxTcGVlZCIsImVhc2luZ1R5cGUiLCJzY3JvbGxUcmlnZ2VyIiwiYWN0aXZlT3ZlcmxheSIsInpJbmRleCIsImFqYXhDaGltcCIsIm1lc3NhZ2VzIiwic3VibWl0IiwiYWN0aW9uIiwidmFsaWQiLCJhamF4Iiwic2Nyb2xsVXAiLCJzY3JvbGxOYW1lIiwic2Nyb2xsRnJvbSIsImFuaW1hdGlvbiIsImFuaW1hdGlvblNwZWVkIiwic2Nyb2xsVGFyZ2V0Iiwic2Nyb2xsVGV4dCIsInNjcm9sbFRpdGxlIiwic2Nyb2xsSW1nIiwialF1ZXJ5Il0sIm1hcHBpbmdzIjoib0pBQUEsU0FBV0EsR0FBRyxJQUdSQyxFQUFXRCxFQUFFLHNCQUhsQkUsRUFBYUYsRUFBQSxnQkFDWkMsRUFBQUUsR0FBQSxRQUFBLFNBQUFDLEdBS0VBLEVBQUVDLGlCQU5RSCxFQUFBSSxnQkEwQlosSUFBSUMsRUFBZVAsRUFBRSxrQkFBakJPLEVBQUFBLFFBQ0ZDLEdBQU0sU0FBS0MsV0FDYkQsSUFBTUUsRUFBSVYsRUFBQVMsUUFBVUUsWUFDbEJDLEVBQWFaLEVBQWJBLEVBQUEsbUJBQ2FPLFlBRGIsb0JBRUVHLEVBQUEsRUFFQUUsRUFBU0MsWUFBWSxjQUFyQkQsRUFBU0MsU0FBQUEsYUFEWGIsRUFBQSxtQkFFT2MsU0FBQSx1QkFVV2QsRUFBRSxtQkFBbEJlLEdBQWEsUUFBSyxXQUN0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QUFNd0ssU0FDVnZFLEVBQVdzRCxPQUFPLFdBQ2RnQixFQUFTbk0sRUFBRTRCLE1BQU15SixLQUFLLFVBQzFCckwsRUFBRXFNLEtBQUssQ0FDTHpCLElBQUt1QixFQUNMckIsS0FBTSxPQUNOaEQsS0FBTSxDQUNKaUQsWUFBYS9LLEVBQUUsU0FBU3dILE1BQ3hCd0QsYUFBY2hMLEVBQUUsVUFBVXdILE1BQzFCeUQsZUFBZ0JqTCxFQUFFLFlBQVl3SCxPQUVoQ2tELFFBQVMsV0FDUDdDLEVBQVdzRCxPQUFPLFNBQ2xCdEQsRUFBV3NELE9BQU8sYUFFcEJmLE1BQU8sV0FDTHZDLEVBQVdzRCxPQUFPLFNBQ2xCdEQsRUFBV3NELE9BQU8sYUFLdEJ0RCxFQUFXc0QsT0FBTyxVQUViLEtBUVhuTCxFQUFFLGdCQUFnQnNMLE1BQUssSUFBSXBELE1BQU9xRCxlQUlsQ3ZMLEVBQUVzTSxTQUFTLENBQ1RDLFdBQVksV0FFWmQsZUFBZ0IsSUFFaEJlLFdBQVksTUFFWmIsWUFBYSxJQUViQyxXQUFZLFNBRVphLFVBQVcsT0FFWEMsZUFBZ0IsSUFFaEJiLGVBQWUsRUFFZmMsY0FBYyxFQUVkQyxXQUFZLGtDQUVaQyxhQUFhLEVBRWJDLFdBQVcsRUFFWGhCLGVBQWUsRUFFZkMsT0FBUSxNQTVsQ1osQ0E4bENHZ0IiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiAoJCkge1xuICBcInVzZSBzdHJpY3RcIjtcblxuICB2YXIgJHNUb2dnbGUgPSAkKFwiLnNlYXJjaC1idG4tbW9iaWxlXCIpO1xuICB2YXIgJHNlYXJjaEJvZHkgPSAkKFwiLnNlYXJjaC1ib2R5XCIpO1xuICAkc1RvZ2dsZS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uIChlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICRzZWFyY2hCb2R5LnNsaWRlVG9nZ2xlKCk7XG4gIH0pO1xuXG4gIC8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAjIOWIpOaWreaYr+WQpuS4umllXG4gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cblxuICBmdW5jdGlvbiBpc0lFKCkgeyBcbiAgaWYgKCEhd2luZG93LkFjdGl2ZVhPYmplY3QgfHwgXCJBY3RpdmVYT2JqZWN0XCIgaW4gd2luZG93KVxuICAgIHJldHVybiB0cnVlO1xuICAgIGVsc2VcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgXG5cbiAgLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICMgaGVhZGVyIHN0aWNreSBcbiAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuXG4gIHZhciBhY3RpdmVTdGlja3kgPSAkKFwiI2FjdGl2ZS1zdGlja3lcIiksXG4gICAgd2luRG93ID0gJCh3aW5kb3cpO1xuICB3aW5Eb3cub24oXCJzY3JvbGxcIiwgZnVuY3Rpb24gKCkge1xuICAgIHZhciBzY3JvbGwgPSAkKHdpbmRvdykuc2Nyb2xsVG9wKCksXG4gICAgICBpc1N0aWNreSA9IGFjdGl2ZVN0aWNreTtcbiAgICAkKFwiI2FjdGl2ZS1zdGlja3kyXCIpLnJlbW92ZUNsYXNzKFwiaXMtc3RpY2t5LW1vYmlsZVwiKTtcbiAgICBpZiAoc2Nyb2xsIDwgMSkge1xuICAgICAgaXNTdGlja3kucmVtb3ZlQ2xhc3MoXCJpcy1zdGlja3lcIik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlzU3RpY2t5LmFkZENsYXNzKFwiaXMtc3RpY2t5XCIpO1xuICAgICAgJChcIiNhY3RpdmUtc3RpY2t5MlwiKS5hZGRDbGFzcyhcImlzLXN0aWNreS1tb2JpbGVcIik7XG4gICAgfVxuICB9KTtcblxuICAvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgIyBPZmYgQ2FudmFzIE1lbnVcbiAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuXG4gIHZhciAkb2ZmY2FudmFzTmF2ID0gJChcIiNvZmZjYW52YXNOYXYgYVwiKTtcbiAgJG9mZmNhbnZhc05hdi5vbihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgbGluayA9ICQodGhpcyk7XG4gICAgdmFyIGNsb3Nlc3RVbCA9IGxpbmsuY2xvc2VzdChcInVsXCIpO1xuICAgIHZhciBhY3RpdmVMaW5rcyA9IGNsb3Nlc3RVbC5maW5kKFwiLmFjdGl2ZVwiKTtcbiAgICB2YXIgY2xvc2VzdExpID0gbGluay5jbG9zZXN0KFwibGlcIik7XG4gICAgdmFyIGxpbmtTdGF0dXMgPSBjbG9zZXN0TGkuaGFzQ2xhc3MoXCJhY3RpdmVcIik7XG4gICAgdmFyIGNvdW50ID0gMDtcblxuICAgIGNsb3Nlc3RVbC5maW5kKFwidWxcIikuc2xpZGVVcChmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoKytjb3VudCA9PSBjbG9zZXN0VWwuZmluZChcInVsXCIpLmxlbmd0aClcbiAgICAgICAgYWN0aXZlTGlua3MucmVtb3ZlQ2xhc3MoXCJhY3RpdmVcIik7XG4gICAgfSk7XG5cbiAgICBpZiAoIWxpbmtTdGF0dXMpIHtcbiAgICAgIGNsb3Nlc3RMaS5jaGlsZHJlbihcInVsXCIpLnNsaWRlRG93bigpO1xuICAgICAgY2xvc2VzdExpLmFkZENsYXNzKFwiYWN0aXZlXCIpO1xuICAgIH1cbiAgfSk7XG5cbiAgdmFyICRvZmZjYW52YXNNZW51MiA9ICQoXCIjb2ZmY2FudmFzLW1lbnUyIGxpIGFcIik7XG4gICRvZmZjYW52YXNNZW51Mi5vbihcImNsaWNrXCIsIGZ1bmN0aW9uIChlKSB7XG4gICAgLy8gZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICQodGhpcykuY2xvc2VzdChcImxpXCIpLnRvZ2dsZUNsYXNzKFwiYWN0aXZlXCIpO1xuICAgICQodGhpcykuY2xvc2VzdChcImxpXCIpLnNpYmxpbmdzKCkucmVtb3ZlQ2xhc3MoXCJhY3RpdmVcIik7XG4gICAgJCh0aGlzKS5jbG9zZXN0KFwibGlcIikuc2libGluZ3MoKS5jaGlsZHJlbihcIi5jYXRlZ29yeS1zdWItbWVudVwiKS5zbGlkZVVwKCk7XG4gICAgJCh0aGlzKVxuICAgICAgLmNsb3Nlc3QoXCJsaVwiKVxuICAgICAgLnNpYmxpbmdzKClcbiAgICAgIC5jaGlsZHJlbihcIi5jYXRlZ29yeS1zdWItbWVudVwiKVxuICAgICAgLmNoaWxkcmVuKFwibGlcIilcbiAgICAgIC50b2dnbGVDbGFzcyhcImFjdGl2ZVwiKTtcbiAgICAkKHRoaXMpXG4gICAgICAuY2xvc2VzdChcImxpXCIpXG4gICAgICAuc2libGluZ3MoKVxuICAgICAgLmNoaWxkcmVuKFwiLmNhdGVnb3J5LXN1Yi1tZW51XCIpXG4gICAgICAuY2hpbGRyZW4oXCJsaVwiKVxuICAgICAgLnJlbW92ZUNsYXNzKFwiYWN0aXZlXCIpO1xuICAgICQodGhpcykucGFyZW50KCkuY2hpbGRyZW4oXCIuY2F0ZWdvcnktc3ViLW1lbnVcIikuc2xpZGVUb2dnbGUoKTtcbiAgfSk7XG5cbiAgdmFyICRvZmZjYW52YXNNZW51MyA9ICQoXCIjb2ZmY2FudmFzLW1lbnUzIGxpIGFcIik7XG4gICRvZmZjYW52YXNNZW51My5vbihcImNsaWNrXCIsIGZ1bmN0aW9uIChlKSB7XG4gICAgLy8gZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICQodGhpcykuY2xvc2VzdChcImxpXCIpLnRvZ2dsZUNsYXNzKFwiYWN0aXZlXCIpO1xuICAgICQodGhpcykuY2xvc2VzdChcImxpXCIpLnNpYmxpbmdzKCkucmVtb3ZlQ2xhc3MoXCJhY3RpdmVcIik7XG4gICAgJCh0aGlzKS5jbG9zZXN0KFwibGlcIikuc2libGluZ3MoKS5jaGlsZHJlbihcIi5jYXRlZ29yeS1zdWItbWVudVwiKS5zbGlkZVVwKCk7XG4gICAgJCh0aGlzKVxuICAgICAgLmNsb3Nlc3QoXCJsaVwiKVxuICAgICAgLnNpYmxpbmdzKClcbiAgICAgIC5jaGlsZHJlbihcIi5jYXRlZ29yeS1zdWItbWVudVwiKVxuICAgICAgLmNoaWxkcmVuKFwibGlcIilcbiAgICAgIC50b2dnbGVDbGFzcyhcImFjdGl2ZVwiKTtcbiAgICAkKHRoaXMpXG4gICAgICAuY2xvc2VzdChcImxpXCIpXG4gICAgICAuc2libGluZ3MoKVxuICAgICAgLmNoaWxkcmVuKFwiLmNhdGVnb3J5LXN1Yi1tZW51XCIpXG4gICAgICAuY2hpbGRyZW4oXCJsaVwiKVxuICAgICAgLnJlbW92ZUNsYXNzKFwiYWN0aXZlXCIpO1xuICAgICQodGhpcykucGFyZW50KCkuY2hpbGRyZW4oXCIuY2F0ZWdvcnktc3ViLW1lbnVcIikuc2xpZGVUb2dnbGUoKTtcbiAgfSk7XG4gIC8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gIFxuIyBDYXRlZ29yeSBtb3JlIHRvZ2dsZSAgXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cblxuICAkKFwiLmNhdGVnb3J5LW1lbnUgbGkuaGlkZGVuXCIpLmhpZGUoKTtcbiAgJChcIiNtb3JlLWJ0blwiKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uIChlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICQoXCIuY2F0ZWdvcnktbWVudSBsaS5oaWRkZW5cIikudG9nZ2xlKDUwMCk7XG4gICAgdmFyIGh0bWxBZnRlciA9XG4gICAgICAnPGkgY2xhc3M9XCJpb24taW9zLW1pbnVzLWVtcHR5XCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPiBMZXNzIENhdGVnb3JpZXMnO1xuICAgIHZhciBodG1sQmVmb3JlID1cbiAgICAgICc8aSBjbGFzcz1cImlvbi1pb3MtcGx1cy1lbXB0eVwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT4gTW9yZSBDYXRlZ29yaWVzJztcblxuICAgIGlmICgkKHRoaXMpLmh0bWwoKSA9PSBodG1sQWZ0ZXIpIHtcbiAgICAgICQodGhpcykuaHRtbChodG1sQmVmb3JlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgJCh0aGlzKS5odG1sKGh0bWxBZnRlcik7XG4gICAgfVxuICB9KTtcblxuICAvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuIyBtZW51LWNvbnRlbnRcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuICBjb25zdCAkYnRuTWVudSA9ICQoXCIubWVudS1idG5cIik7XG4gIGNvbnN0ICR2bWVudUNvbnRlbnQgPSAkKFwiLnZtZW51LWNvbnRlbnRcIik7XG4gICRidG5NZW51Lm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgJHZtZW51Q29udGVudC5zbGlkZVRvZ2dsZSg1MDApO1xuICB9KTtcblxuICAkdm1lbnVDb250ZW50LmVhY2goZnVuY3Rpb24gKCkge1xuICAgIHZhciAkdWwgPSAkKHRoaXMpLFxuICAgICAgJGxpcyA9ICR1bC5maW5kKFwiLm1lbnUtaXRlbTpndCgxMClcIiksXG4gICAgICBpc0V4cGFuZGVkID0gJHVsLmhhc0NsYXNzKFwiZXhwYW5kZWRcIik7XG4gICAgJGxpc1tpc0V4cGFuZGVkID8gXCJzaG93XCIgOiBcImhpZGVcIl0oKTtcblxuICAgIGlmICgkbGlzLmxlbmd0aCA+IDApIHtcbiAgICAgICR1bC5hcHBlbmQoXG4gICAgICAgICQoXG4gICAgICAgICAgJzxsaSBjbGFzcz1cImV4cGFuZFwiPicgK1xuICAgICAgICAgICAgKGlzRXhwYW5kZWRcbiAgICAgICAgICAgICAgPyAnPGEgaHJlZj1cImphdmFzY3JpcHQ6dm9pZCgwKTtcIj48c3Bhbj48aSBjbGFzcz1cImlvbi1hbmRyb2lkLXJlbW92ZVwiPjwvaT5DbG9zZSBDYXRlZ29yaWVzPC9zcGFuPjwvYT4nXG4gICAgICAgICAgICAgIDogJzxhIGhyZWY9XCJqYXZhc2NyaXB0OnZvaWQoMCk7XCI+PHNwYW4+PGkgY2xhc3M9XCJpb24tYW5kcm9pZC1hZGRcIj48L2k+TW9yZSBDYXRlZ29yaWVzPC9zcGFuPjwvYT4nKSArXG4gICAgICAgICAgICBcIjwvbGk+XCJcbiAgICAgICAgKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgIHZhciBpc0V4cGFuZGVkID0gJHVsLmhhc0NsYXNzKFwiZXhwYW5kZWRcIik7XG4gICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAkKHRoaXMpLmh0bWwoXG4gICAgICAgICAgICBpc0V4cGFuZGVkXG4gICAgICAgICAgICAgID8gJzxhIGhyZWY9XCJqYXZhc2NyaXB0OnZvaWQoMCk7XCI+PHNwYW4+PGkgY2xhc3M9XCJpb24tYW5kcm9pZC1hZGRcIj48L2k+TW9yZSBDYXRlZ29yaWVzPC9zcGFuPjwvYT4nXG4gICAgICAgICAgICAgIDogJzxhIGhyZWY9XCJqYXZhc2NyaXB0OnZvaWQoMCk7XCI+PHNwYW4+PGkgY2xhc3M9XCJpb24tYW5kcm9pZC1yZW1vdmVcIj48L2k+Q2xvc2UgQ2F0ZWdvcmllczwvc3Bhbj48L2E+J1xuICAgICAgICAgICk7XG4gICAgICAgICAgJHVsLnRvZ2dsZUNsYXNzKFwiZXhwYW5kZWRcIik7XG4gICAgICAgICAgJGxpcy50b2dnbGUoMzAwKTtcbiAgICAgICAgfSlcbiAgICAgICk7XG4gICAgfVxuICB9KTtcblxuICAvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gIFxuICAgICAgICBBbGwgQ2F0ZWdvcnkgdG9nZ2xlICBcbiAgICAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cblxuICAkKFwiLm1vcmUtYnRuXCIpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGUpIHtcbiAgICAkKFwiLmNhdGVnb3J5LW1lbnVcIikuc2xpZGVUb2dnbGUoMzAwKTtcbiAgfSk7XG4gICQoXCIubWVudS1pdGVtLWhhcy1jaGlsZHJlbi0xXCIpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGUpIHtcbiAgICAkKFwiLmNhdGVnb3J5LW1lZ2EtbWVudS0xXCIpLnNsaWRlVG9nZ2xlKFwic2xvd1wiKTtcbiAgfSk7XG4gICQoXCIubWVudS1pdGVtLWhhcy1jaGlsZHJlbi0yXCIpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGUpIHtcbiAgICAkKFwiLmNhdGVnb3J5LW1lZ2EtbWVudS0yXCIpLnNsaWRlVG9nZ2xlKFwic2xvd1wiKTtcbiAgfSk7XG4gICQoXCIubWVudS1pdGVtLWhhcy1jaGlsZHJlbi0zXCIpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGUpIHtcbiAgICAkKFwiLmNhdGVnb3J5LW1lZ2EtbWVudS0zXCIpLnNsaWRlVG9nZ2xlKFwic2xvd1wiKTtcbiAgfSk7XG4gICQoXCIubWVudS1pdGVtLWhhcy1jaGlsZHJlbi00XCIpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGUpIHtcbiAgICAkKFwiLmNhdGVnb3J5LW1lZ2EtbWVudS00XCIpLnNsaWRlVG9nZ2xlKFwic2xvd1wiKTtcbiAgfSk7XG4gICQoXCIubWVudS1pdGVtLWhhcy1jaGlsZHJlbi01XCIpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGUpIHtcbiAgICAkKFwiLmNhdGVnb3J5LW1lZ2EtbWVudS01XCIpLnNsaWRlVG9nZ2xlKFwic2xvd1wiKTtcbiAgfSk7XG4gICQoXCIubWVudS1pdGVtLWhhcy1jaGlsZHJlbi02XCIpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgICQoXCIuY2F0ZWdvcnktbWVnYS1tZW51LTZcIikuc2xpZGVUb2dnbGUoXCJzbG93XCIpO1xuICB9KTtcbiAgLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAgXG4gICAgICAgICAgICAgICAgQ2F0ZWdvcnkgbW9yZSB0b2dnbGUgIFxuICAgICAgICAgIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuXG4gIHZhciB0b29sdGlwVHJpZ2dlckxpc3QgPSBbXS5zbGljZS5jYWxsKFxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLWJzLXRvZ2dsZT1cInRvb2x0aXBcIl0nKVxuICApO1xuICB2YXIgdG9vbHRpcExpc3QgPSB0b29sdGlwVHJpZ2dlckxpc3QubWFwKGZ1bmN0aW9uICh0b29sdGlwVHJpZ2dlckVsKSB7XG4gICAgcmV0dXJuIG5ldyBib290c3RyYXAuVG9vbHRpcCh0b29sdGlwVHJpZ2dlckVsKTtcbiAgfSk7XG5cbiAgLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAjIGhlcm8tc2xpZGVyXG4gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuICB2YXIgaGVyb1NsaWRlciA9IG5ldyBTd2lwZXIoXCIuaGVyby1zbGlkZXIgLnN3aXBlci1jb250YWluZXJcIiwge1xuICAgIGxvb3A6IHRydWUsXG4gICAgc3BlZWQ6IDYwMCxcbiAgICBhdXRvcGxheTogdHJ1ZSxcbiAgICBsYXp5OiB0cnVlLFxuICAgIGZhZGVFZmZlY3Q6IHtcbiAgICAgIGNyb3NzRmFkZTogdHJ1ZSxcbiAgICB9LFxuICAgIHBhZ2luYXRpb246IHtcbiAgICAgIGVsOiBcIi5oZXJvLXNsaWRlciAuc3dpcGVyLXBhZ2luYXRpb25cIixcbiAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICB9LFxuXG4gICAgbmF2aWdhdGlvbjoge1xuICAgICAgbmV4dEVsOiBcIi5oZXJvLXNsaWRlciAuc3dpcGVyLWJ1dHRvbi1uZXh0XCIsXG4gICAgICBwcmV2RWw6IFwiLmhlcm8tc2xpZGVyIC5zd2lwZXItYnV0dG9uLXByZXZcIixcbiAgICB9LFxuICB9KTtcblxuICAvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICMgYnJhbmQtY2Fyb3VzZWxcbiAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cbiAgdmFyIGJyYW5kQ2Fyb3VzZWwgPSBuZXcgU3dpcGVyKFwiLmJyYW5kLWNhcm91c2VsIC5zd2lwZXItY29udGFpbmVyXCIsIHtcbiAgICBsb29wOiBmYWxzZSxcbiAgICBzcGVlZDogODAwLFxuICAgIHNsaWRlc1BlclZpZXc6IDUsXG4gICAgc3BhY2VCZXR3ZWVuOiAxMCxcbiAgICBwYWdpbmF0aW9uOiBmYWxzZSxcbiAgICBuYXZpZ2F0aW9uOiB7XG4gICAgICBuZXh0RWw6IFwiLmJyYW5kLWNhcm91c2VsIC5zd2lwZXItYnV0dG9uLW5leHRcIixcbiAgICAgIHByZXZFbDogXCIuYnJhbmQtY2Fyb3VzZWwgLnN3aXBlci1idXR0b24tcHJldlwiLFxuICAgIH0sXG4gICAgLy8gUmVzcG9uc2l2ZSBicmVha3BvaW50c1xuICAgIGJyZWFrcG9pbnRzOiB7XG4gICAgICAvLyB3aGVuIHdpbmRvdyB3aWR0aCBpcyA+PSAzMjBweFxuICAgICAgMDoge1xuICAgICAgICBzbGlkZXNQZXJWaWV3OiAxLFxuICAgICAgfSxcblxuICAgICAgLy8gd2hlbiB3aW5kb3cgd2lkdGggaXMgPj0gNDgwcHhcbiAgICAgIDQ4MDoge1xuICAgICAgICBzbGlkZXNQZXJWaWV3OiAyLFxuICAgICAgfSxcblxuICAgICAgNzY4OiB7XG4gICAgICAgIHNsaWRlc1BlclZpZXc6IDMsXG4gICAgICB9LFxuXG4gICAgICAvLyB3aGVuIHdpbmRvdyB3aWR0aCBpcyA+PSA2NDBweFxuICAgICAgOTkyOiB7XG4gICAgICAgIHNsaWRlc1BlclZpZXc6IDQsXG4gICAgICB9LFxuICAgICAgMTIwMDoge1xuICAgICAgICBzbGlkZXNQZXJWaWV3OiA1LFxuICAgICAgfSxcbiAgICB9LFxuICB9KTtcblxuICAvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICMgZm9vZC1jYXRlZ29yeS1jYXJvdXNlbFxuICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cblxuICB2YXIgZm9vZENhdGVnb3J5Q2Fyb3VzZWwgPSBuZXcgU3dpcGVyKFxuICAgIFwiLmZvb2QtY2F0ZWdvcnktY2Fyb3VzZWwgLnN3aXBlci1jb250YWluZXJcIixcbiAgICB7XG4gICAgICBsb29wOiBmYWxzZSxcbiAgICAgIHNwZWVkOiA4MDAsXG4gICAgICBzbGlkZXNQZXJWaWV3OiA2LFxuICAgICAgc3BhY2VCZXR3ZWVuOiAxMCxcbiAgICAgIG5hdmlnYXRpb246IHtcbiAgICAgICAgbmV4dEVsOiBcIi5mb29kLWNhdGVnb3J5LWNhcm91c2VsIC5zd2lwZXItYnV0dG9uLW5leHRcIixcbiAgICAgICAgcHJldkVsOiBcIi5mb29kLWNhdGVnb3J5LWNhcm91c2VsIC5zd2lwZXItYnV0dG9uLXByZXZcIixcbiAgICAgIH0sXG4gICAgICAvLyBSZXNwb25zaXZlIGJyZWFrcG9pbnRzXG4gICAgICBicmVha3BvaW50czoge1xuICAgICAgICAvLyB3aGVuIHdpbmRvdyB3aWR0aCBpcyA+PSAzMjBweFxuICAgICAgICAwOiB7XG4gICAgICAgICAgc2xpZGVzUGVyVmlldzogMSxcbiAgICAgICAgfSxcblxuICAgICAgICA0ODA6IHtcbiAgICAgICAgICBzbGlkZXNQZXJWaWV3OiAyLFxuICAgICAgICB9LFxuICAgICAgICAvLyB3aGVuIHdpbmRvdyB3aWR0aCBpcyA+PSA2NDBweFxuICAgICAgICA3Njg6IHtcbiAgICAgICAgICBzbGlkZXNQZXJWaWV3OiAzLFxuICAgICAgICB9LFxuICAgICAgICA5OTI6IHtcbiAgICAgICAgICBzbGlkZXNQZXJWaWV3OiA0LFxuICAgICAgICB9LFxuXG4gICAgICAgIC8vIHdoZW4gd2luZG93IHdpZHRoIGlzID49IDY0MHB4XG4gICAgICAgIDEyMDA6IHtcbiAgICAgICAgICBzbGlkZXNQZXJWaWV3OiA2LFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9XG4gICk7XG5cbiAgLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAjIGZvb2QgY2Fyb3VzZWwgZm91ciBpdGVtc1xuICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cblxuICB2YXIgZm9vZENhcm91c2VsRm91ckl0ZW1zID0gbmV3IFN3aXBlcihcbiAgICBcIi5mb29kLWNhcm91c2VsLWZvdXItaXRlbXMgLnN3aXBlci1jb250YWluZXJcIixcbiAgICB7XG4gICAgICBsb29wOiBmYWxzZSxcbiAgICAgIHNwZWVkOiA4MDAsXG4gICAgICBzbGlkZXNQZXJWaWV3OiA0LFxuICAgICAgc3BhY2VCZXR3ZWVuOiAyMCxcbiAgICAgIG5hdmlnYXRpb246IHtcbiAgICAgICAgbmV4dEVsOiBcIi5mb29kLWNhcm91c2VsLWZvdXItaXRlbXMgLnN3aXBlci1idXR0b24tbmV4dFwiLFxuICAgICAgICBwcmV2RWw6IFwiLmZvb2QtY2Fyb3VzZWwtZm91ci1pdGVtcyAuc3dpcGVyLWJ1dHRvbi1wcmV2XCIsXG4gICAgICB9LFxuICAgICAgLy8gUmVzcG9uc2l2ZSBicmVha3BvaW50c1xuICAgICAgYnJlYWtwb2ludHM6IHtcbiAgICAgICAgLy8gd2hlbiB3aW5kb3cgd2lkdGggaXMgPj0gMzIwcHhcbiAgICAgICAgMDoge1xuICAgICAgICAgIHNsaWRlc1BlclZpZXc6IDEsXG4gICAgICAgIH0sXG5cbiAgICAgICAgNDgwOiB7XG4gICAgICAgICAgc2xpZGVzUGVyVmlldzogMixcbiAgICAgICAgfSxcbiAgICAgICAgOTkyOiB7XG4gICAgICAgICAgc2xpZGVzUGVyVmlldzogMyxcbiAgICAgICAgfSxcblxuICAgICAgICAvLyB3aGVuIHdpbmRvdyB3aWR0aCBpcyA+PSA2NDBweFxuICAgICAgICAxMjAwOiB7XG4gICAgICAgICAgc2xpZGVzUGVyVmlldzogNCxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfVxuICApO1xuXG4gIC8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgIyBmb29kIGNhcm91c2VsIGZpdmUgaXRlbXNcbiAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cbiAgdmFyIGZvb2RDYXJvdXNlbEZpdmVJdGVtcyA9IG5ldyBTd2lwZXIoXG4gICAgXCIuZm9vZC1jYXJvdXNlbC1maXZlLWl0ZW1zIC5zd2lwZXItY29udGFpbmVyXCIsXG4gICAge1xuICAgICAgbG9vcDogZmFsc2UsXG4gICAgICBzcGVlZDogODAwLFxuICAgICAgc2xpZGVzUGVyVmlldzogNSxcbiAgICAgIHNwYWNlQmV0d2VlbjogMjAsXG4gICAgICBuYXZpZ2F0aW9uOiB7XG4gICAgICAgIG5leHRFbDogXCIuZm9vZC1jYXJvdXNlbC1maXZlLWl0ZW1zIC5zd2lwZXItYnV0dG9uLW5leHRcIixcbiAgICAgICAgcHJldkVsOiBcIi5mb29kLWNhcm91c2VsLWZpdmUtaXRlbXMgLnN3aXBlci1idXR0b24tcHJldlwiLFxuICAgICAgfSxcbiAgICAgIC8vIFJlc3BvbnNpdmUgYnJlYWtwb2ludHNcbiAgICAgIGJyZWFrcG9pbnRzOiB7XG4gICAgICAgIC8vIHdoZW4gd2luZG93IHdpZHRoIGlzID49IDMyMHB4XG4gICAgICAgIDA6IHtcbiAgICAgICAgICBzbGlkZXNQZXJWaWV3OiAxLFxuICAgICAgICB9LFxuXG4gICAgICAgIDQ4MDoge1xuICAgICAgICAgIHNsaWRlc1BlclZpZXc6IDIsXG4gICAgICAgIH0sXG4gICAgICAgIDk5Mjoge1xuICAgICAgICAgIHNsaWRlc1BlclZpZXc6IDMsXG4gICAgICAgIH0sXG5cbiAgICAgICAgLy8gd2hlbiB3aW5kb3cgd2lkdGggaXMgPj0gNjQwcHhcbiAgICAgICAgMTIwMDoge1xuICAgICAgICAgIHNsaWRlc1BlclZpZXc6IDQsXG4gICAgICAgIH0sXG4gICAgICAgIDE1MDA6IHtcbiAgICAgICAgICBzbGlkZXNQZXJWaWV3OiA1LFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9XG4gICk7XG5cbiAgLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAjIGZvb2QgY2Fyb3VzZWwgc2l4IGl0ZW1zXG4gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXG4gIHZhciBmb29kQ2Fyb3VzZWxTaXhJdGVtcyA9IG5ldyBTd2lwZXIoXG4gICAgXCIuZm9vZC1jYXJvdXNlbC1zaXgtaXRlbXMgLnN3aXBlci1jb250YWluZXJcIixcbiAgICB7XG4gICAgICBsb29wOiBmYWxzZSxcbiAgICAgIHNwZWVkOiA4MDAsXG4gICAgICBzbGlkZXNQZXJWaWV3OiA2LFxuICAgICAgc3BhY2VCZXR3ZWVuOiAyMCxcbiAgICAgIG5hdmlnYXRpb246IHtcbiAgICAgICAgbmV4dEVsOiBcIi5mb29kLWNhcm91c2VsLXNpeC1pdGVtcyAuc3dpcGVyLWJ1dHRvbi1uZXh0XCIsXG4gICAgICAgIHByZXZFbDogXCIuZm9vZC1jYXJvdXNlbC1zaXgtaXRlbXMgLnN3aXBlci1idXR0b24tcHJldlwiLFxuICAgICAgfSxcbiAgICAgIC8vIFJlc3BvbnNpdmUgYnJlYWtwb2ludHNcbiAgICAgIGJyZWFrcG9pbnRzOiB7XG4gICAgICAgIC8vIHdoZW4gd2luZG93IHdpZHRoIGlzID49IDMyMHB4XG4gICAgICAgIDA6IHtcbiAgICAgICAgICBzbGlkZXNQZXJWaWV3OiAxLFxuICAgICAgICB9LFxuXG4gICAgICAgIDQ4MDoge1xuICAgICAgICAgIHNsaWRlc1BlclZpZXc6IDIsXG4gICAgICAgIH0sXG4gICAgICAgIDc2ODoge1xuICAgICAgICAgIHNsaWRlc1BlclZpZXc6IDMsXG4gICAgICAgIH0sXG4gICAgICAgIDk5Mjoge1xuICAgICAgICAgIHNsaWRlc1BlclZpZXc6IDQsXG4gICAgICAgIH0sXG5cbiAgICAgICAgLy8gd2hlbiB3aW5kb3cgd2lkdGggaXMgPj0gNjQwcHhcbiAgICAgICAgMTIwMDoge1xuICAgICAgICAgIHNsaWRlc1BlclZpZXc6IDUsXG4gICAgICAgIH0sXG4gICAgICAgIDE1MDA6IHtcbiAgICAgICAgICBzbGlkZXNQZXJWaWV3OiA2LFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9XG4gICk7XG5cbiAgLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAjIHRhYiBjYXJvdXNlbFxuICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cblxuICB2YXIgdGFiQ2Fyb3VzZWwgPSBuZXcgU3dpcGVyKFwiLnRhYi1jYXJvdXNlbCAuc3dpcGVyLWNvbnRhaW5lclwiLCB7XG4gICAgbG9vcDogZmFsc2UsXG4gICAgc3BlZWQ6IDgwMCxcbiAgICBzbGlkZXNQZXJWaWV3OiAzLFxuICAgIHNwYWNlQmV0d2VlbjogMTAsXG4gICAgcGFnaW5hdGlvbjogZmFsc2UsXG4gICAgbmF2aWdhdGlvbjoge1xuICAgICAgbmV4dEVsOiBcIi50YWItY2Fyb3VzZWwgLnN3aXBlci1idXR0b24tbmV4dFwiLFxuICAgICAgcHJldkVsOiBcIi50YWItY2Fyb3VzZWwgLnN3aXBlci1idXR0b24tcHJldlwiLFxuICAgIH0sXG4gICAgb2JzZXJ2ZXI6IHRydWUsXG4gICAgb2JzZXJ2ZVBhcmVudHM6IHRydWUsXG4gICAgLy8gUmVzcG9uc2l2ZSBicmVha3BvaW50c1xuICAgIGJyZWFrcG9pbnRzOiB7XG4gICAgICAvLyB3aGVuIHdpbmRvdyB3aWR0aCBpcyA+PSAzMjBweFxuICAgICAgMDoge1xuICAgICAgICBzbGlkZXNQZXJWaWV3OiAxLFxuICAgICAgfSxcbiAgICAgIC8vIHdoZW4gd2luZG93IHdpZHRoIGlzID49IDY0MHB4XG4gICAgICA3Njg6IHtcbiAgICAgICAgc2xpZGVzUGVyVmlldzogMixcbiAgICAgIH0sXG5cbiAgICAgIC8vIHdoZW4gd2luZG93IHdpZHRoIGlzID49IDY0MHB4XG4gICAgICAxMjAwOiB7XG4gICAgICAgIHNsaWRlc1BlclZpZXc6IDMsXG4gICAgICB9LFxuICAgIH0sXG4gIH0pO1xuXG4gIC8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgIyBkZWFsQ2Fyb3VzZWxPbmVcbiAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cbiAgdmFyIGRlYWxDYXJvdXNlbE9uZSA9IG5ldyBTd2lwZXIoXCIuZGVhbC1jYXJvdXNlbC1vbmUgLnN3aXBlci1jb250YWluZXJcIiwge1xuICAgIGxvb3A6IGZhbHNlLFxuICAgIHNwZWVkOiA4MDAsXG4gICAgc2xpZGVzUGVyVmlldzogMixcbiAgICBzcGFjZUJldHdlZW46IDIwLFxuICAgIHBhZ2luYXRpb246IGZhbHNlLFxuICAgIG5hdmlnYXRpb246IHtcbiAgICAgIG5leHRFbDogXCIuZGVhbC1jYXJvdXNlbC1vbmUgLnN3aXBlci1idXR0b24tbmV4dFwiLFxuICAgICAgcHJldkVsOiBcIi5kZWFsLWNhcm91c2VsLW9uZSAuc3dpcGVyLWJ1dHRvbi1wcmV2XCIsXG4gICAgfSxcbiAgICBvYnNlcnZlcjogdHJ1ZSxcbiAgICBvYnNlcnZlUGFyZW50czogdHJ1ZSxcblxuICAgIGJyZWFrcG9pbnRzOiB7XG4gICAgICAwOiB7XG4gICAgICAgIHNsaWRlc1BlclZpZXc6IDEsXG4gICAgICB9LFxuXG4gICAgICA5OTI6IHtcbiAgICAgICAgc2xpZGVzUGVyVmlldzogMSxcbiAgICAgIH0sXG5cbiAgICAgIDEyMDA6IHtcbiAgICAgICAgc2xpZGVzUGVyVmlldzogMixcbiAgICAgIH0sXG4gICAgfSxcbiAgfSk7XG5cbiAgLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAjIGRlYWxDYXJvdXNlbHR3b1xuICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cblxuICB2YXIgZGVhbENhcm91c2VsdHdvID0gbmV3IFN3aXBlcihcIi5kZWFsLWNhcm91c2VsLXR3byAuc3dpcGVyLWNvbnRhaW5lclwiLCB7XG4gICAgbG9vcDogZmFsc2UsXG4gICAgc3BlZWQ6IDgwMCxcbiAgICBzbGlkZXNQZXJWaWV3OiAxLFxuICAgIHNwYWNlQmV0d2VlbjogMjAsXG4gICAgcGFnaW5hdGlvbjogZmFsc2UsXG4gICAgbmF2aWdhdGlvbjoge1xuICAgICAgbmV4dEVsOiBcIi5kZWFsLWNhcm91c2VsLXR3byAuc3dpcGVyLWJ1dHRvbi1uZXh0XCIsXG4gICAgICBwcmV2RWw6IFwiLmRlYWwtY2Fyb3VzZWwtdHdvIC5zd2lwZXItYnV0dG9uLXByZXZcIixcbiAgICB9LFxuICAgIG9ic2VydmVyOiB0cnVlLFxuICAgIG9ic2VydmVQYXJlbnRzOiB0cnVlLFxuXG4gICAgYnJlYWtwb2ludHM6IHtcbiAgICAgIDA6IHtcbiAgICAgICAgc2xpZGVzUGVyVmlldzogMSxcbiAgICAgIH0sXG5cbiAgICAgIDk5Mjoge1xuICAgICAgICBzbGlkZXNQZXJWaWV3OiAxLFxuICAgICAgfSxcblxuICAgICAgMTIwMDoge1xuICAgICAgICBzbGlkZXNQZXJWaWV3OiAxLFxuICAgICAgfSxcbiAgICB9LFxuICB9KTtcblxuICAvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICMgZmVhdHVyZWQgQ2Fyb3VzZWxcbiAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cbiAgdmFyIGZlYXR1cmVkQ2Fyb3VzZWwgPSBuZXcgU3dpcGVyKFwiLmZlYXR1cmVkLWNhcm91c2VsIC5zd2lwZXItY29udGFpbmVyXCIsIHtcbiAgICBsb29wOiBmYWxzZSxcbiAgICBzcGVlZDogODAwLFxuICAgIHNsaWRlc1BlclZpZXc6IDYsXG4gICAgc3BhY2VCZXR3ZWVuOiAxMCxcbiAgICBwYWdpbmF0aW9uOiBmYWxzZSxcbiAgICBuYXZpZ2F0aW9uOiB7XG4gICAgICBuZXh0RWw6IFwiLmZlYXR1cmVkLWNhcm91c2VsIC5zd2lwZXItYnV0dG9uLW5leHRcIixcbiAgICAgIHByZXZFbDogXCIuZmVhdHVyZWQtY2Fyb3VzZWwgLnN3aXBlci1idXR0b24tcHJldlwiLFxuICAgIH0sXG4gICAgb2JzZXJ2ZXI6IHRydWUsXG4gICAgb2JzZXJ2ZVBhcmVudHM6IHRydWUsXG4gICAgLy8gUmVzcG9uc2l2ZSBicmVha3BvaW50c1xuICAgIGJyZWFrcG9pbnRzOiB7XG4gICAgICAvLyB3aGVuIHdpbmRvdyB3aWR0aCBpcyA+PSAzMjBweFxuICAgICAgMDoge1xuICAgICAgICBzbGlkZXNQZXJWaWV3OiAxLFxuICAgICAgICBsb29wOiB0cnVlLFxuICAgICAgICBhdXRvcGxheToge1xuICAgICAgICAgIGRlbGF5OiAyMDAwLFxuICAgICAgICB9LFxuICAgICAgICBzcGVlZDogMTAwMCxcbiAgICAgIH0sXG4gICAgICAvLyB3aGVuIHdpbmRvdyB3aWR0aCBpcyA+PSA0ODBweFxuICAgICAgNDgwOiB7XG4gICAgICAgIHNsaWRlc1BlclZpZXc6IDIsXG4gICAgICAgIGxvb3A6IHRydWUsXG4gICAgICAgIHNwZWVkOiAxMDAwLFxuICAgICAgfSxcbiAgICAgIC8vIHdoZW4gd2luZG93IHdpZHRoIGlzID49IDY0MHB4XG4gICAgICA2NTc6IHtcbiAgICAgICAgc2xpZGVzUGVyVmlldzogMyxcbiAgICAgIH0sXG4gICAgICA5OTI6IHtcbiAgICAgICAgc2xpZGVzUGVyVmlldzogNCxcbiAgICAgIH0sXG5cbiAgICAgIC8vIHdoZW4gd2luZG93IHdpZHRoIGlzID49IDY0MHB4XG4gICAgICAxMjAwOiB7XG4gICAgICAgIHNsaWRlc1BlclZpZXc6IDYsXG4gICAgICB9LFxuICAgIH0sXG4gIH0pO1xuICAvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICMgZmVhdHVyZWQgQ2Fyb3VzZWxcbiAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cbiAgdmFyIG5ld0Fycml2YWxDYXJvdXNlbCA9IG5ldyBTd2lwZXIoXG4gICAgXCIubmV3LWFycml2YWwtY2Fyb3VzZWwgLnN3aXBlci1jb250YWluZXJcIixcbiAgICB7XG4gICAgICBsb29wOiBmYWxzZSxcbiAgICAgIHNwZWVkOiA4MDAsXG4gICAgICBzbGlkZXNQZXJWaWV3OiA1LFxuICAgICAgc3BhY2VCZXR3ZWVuOiAxMCxcbiAgICAgIHBhZ2luYXRpb246IGZhbHNlLFxuICAgICAgbmF2aWdhdGlvbjoge1xuICAgICAgICBuZXh0RWw6IFwiLm5ldy1hcnJpdmFsLWNhcm91c2VsIC5zd2lwZXItYnV0dG9uLW5leHRcIixcbiAgICAgICAgcHJldkVsOiBcIi5uZXctYXJyaXZhbC1jYXJvdXNlbCAuc3dpcGVyLWJ1dHRvbi1wcmV2XCIsXG4gICAgICB9LFxuICAgICAgb2JzZXJ2ZXI6IHRydWUsXG4gICAgICBvYnNlcnZlUGFyZW50czogdHJ1ZSxcbiAgICAgIC8vIFJlc3BvbnNpdmUgYnJlYWtwb2ludHNcbiAgICAgIGJyZWFrcG9pbnRzOiB7XG4gICAgICAgIC8vIHdoZW4gd2luZG93IHdpZHRoIGlzID49IDMyMHB4XG4gICAgICAgIDA6IHtcbiAgICAgICAgICBzbGlkZXNQZXJWaWV3OiAxLFxuICAgICAgICAgIGxvb3A6IHRydWUsXG4gICAgICAgICAgYXV0b3BsYXk6IHtcbiAgICAgICAgICAgIGRlbGF5OiAyMDAwLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgc3BlZWQ6IDEwMDAsXG4gICAgICAgIH0sXG4gICAgICAgIC8vIHdoZW4gd2luZG93IHdpZHRoIGlzID49IDQ4MHB4XG4gICAgICAgIDQ4MDoge1xuICAgICAgICAgIHNsaWRlc1BlclZpZXc6IDIsXG4gICAgICAgICAgbG9vcDogdHJ1ZSxcbiAgICAgICAgICBzcGVlZDogMTAwMCxcbiAgICAgICAgfSxcbiAgICAgICAgLy8gd2hlbiB3aW5kb3cgd2lkdGggaXMgPj0gNjQwcHhcbiAgICAgICAgNjU3OiB7XG4gICAgICAgICAgc2xpZGVzUGVyVmlldzogMyxcbiAgICAgICAgfSxcbiAgICAgICAgOTkyOiB7XG4gICAgICAgICAgc2xpZGVzUGVyVmlldzogNCxcbiAgICAgICAgfSxcblxuICAgICAgICAvLyB3aGVuIHdpbmRvdyB3aWR0aCBpcyA+PSA2NDBweFxuICAgICAgICAxMjAwOiB7XG4gICAgICAgICAgc2xpZGVzUGVyVmlldzogNSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfVxuICApO1xuXG4gIC8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgIyBjYXRlZ29yaWVzIGNhcm91c2VsXG4gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXG4gIHZhciBjYXRlZ29yaWVzQ2Fyb3VzZWwgPSBuZXcgU3dpcGVyKFxuICAgIFwiLmNhdGVnb3JpZXMtY2Fyb3VzZWwgLnN3aXBlci1jb250YWluZXJcIixcbiAgICB7XG4gICAgICBsb29wOiB0cnVlLFxuICAgICAgc3BlZWQ6IDgwMCxcbiAgICAgIHNsaWRlc1BlclZpZXc6IDEsXG4gICAgICBzcGFjZUJldHdlZW46IDAsXG4gICAgICBwYWdpbmF0aW9uOiBmYWxzZSxcbiAgICAgIG5hdmlnYXRpb246IHtcbiAgICAgICAgbmV4dEVsOiBcIi5jYXRlZ29yaWVzLWNhcm91c2VsIC5zd2lwZXItYnV0dG9uLW5leHRcIixcbiAgICAgICAgcHJldkVsOiBcIi5jYXRlZ29yaWVzLWNhcm91c2VsIC5zd2lwZXItYnV0dG9uLXByZXZcIixcbiAgICAgIH0sXG4gICAgICAvLyBSZXNwb25zaXZlIGJyZWFrcG9pbnRzXG4gICAgICBicmVha3BvaW50czoge1xuICAgICAgICAvLyB3aGVuIHdpbmRvdyB3aWR0aCBpcyA+PSAzMjBweFxuICAgICAgICAwOiB7XG4gICAgICAgICAgc2xpZGVzUGVyVmlldzogMSxcbiAgICAgICAgfSxcbiAgICAgICAgNTc2OiB7XG4gICAgICAgICAgc2xpZGVzUGVyVmlldzogMixcbiAgICAgICAgfSxcbiAgICAgICAgOTkyOiB7XG4gICAgICAgICAgc2xpZGVzUGVyVmlldzogMSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfVxuICApO1xuICAvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICMgY2F0ZWdvcmllcyBjYXJvdXNlbDJcbiAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cbiAgdmFyIGNhdGVnb3JpZXNDYXJvdXNlbDIgPSBuZXcgU3dpcGVyKFxuICAgIFwiLmNhdGVnb3JpZXMtY2Fyb3VzZWwyIC5zd2lwZXItY29udGFpbmVyXCIsXG4gICAge1xuICAgICAgbG9vcDogdHJ1ZSxcbiAgICAgIHNwZWVkOiA4MDAsXG4gICAgICBzbGlkZXNQZXJWaWV3OiAxLFxuICAgICAgc3BhY2VCZXR3ZWVuOiAwLFxuICAgICAgcGFnaW5hdGlvbjogZmFsc2UsXG4gICAgICBuYXZpZ2F0aW9uOiB7XG4gICAgICAgIG5leHRFbDogXCIuY2F0ZWdvcmllcy1jYXJvdXNlbDIgLnN3aXBlci1idXR0b24tbmV4dFwiLFxuICAgICAgICBwcmV2RWw6IFwiLmNhdGVnb3JpZXMtY2Fyb3VzZWwyIC5zd2lwZXItYnV0dG9uLXByZXZcIixcbiAgICAgIH0sXG5cbiAgICAgIC8vIFJlc3BvbnNpdmUgYnJlYWtwb2ludHNcbiAgICAgIGJyZWFrcG9pbnRzOiB7XG4gICAgICAgIC8vIHdoZW4gd2luZG93IHdpZHRoIGlzID49IDMyMHB4XG4gICAgICAgIDA6IHtcbiAgICAgICAgICBzbGlkZXNQZXJWaWV3OiAxLFxuICAgICAgICB9LFxuICAgICAgICA1NzY6IHtcbiAgICAgICAgICBzbGlkZXNQZXJWaWV3OiAyLFxuICAgICAgICB9LFxuICAgICAgICA5OTI6IHtcbiAgICAgICAgICBzbGlkZXNQZXJWaWV3OiAxLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9XG4gICk7XG4gIC8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgIyBjYXRlZ29yaWVzIGNhcm91c2VsM1xuICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cblxuICB2YXIgY2F0ZWdvcmllc0Nhcm91c2VsMyA9IG5ldyBTd2lwZXIoXG4gICAgXCIuY2F0ZWdvcmllcy1jYXJvdXNlbDMgLnN3aXBlci1jb250YWluZXJcIixcbiAgICB7XG4gICAgICBsb29wOiB0cnVlLFxuICAgICAgc3BlZWQ6IDgwMCxcbiAgICAgIHNsaWRlc1BlclZpZXc6IDEsXG4gICAgICBzcGFjZUJldHdlZW46IDAsXG4gICAgICBwYWdpbmF0aW9uOiBmYWxzZSxcbiAgICAgIG5hdmlnYXRpb246IHtcbiAgICAgICAgbmV4dEVsOiBcIi5jYXRlZ29yaWVzLWNhcm91c2VsMyAuc3dpcGVyLWJ1dHRvbi1uZXh0XCIsXG4gICAgICAgIHByZXZFbDogXCIuY2F0ZWdvcmllcy1jYXJvdXNlbDMgLnN3aXBlci1idXR0b24tcHJldlwiLFxuICAgICAgfSxcblxuICAgICAgLy8gUmVzcG9uc2l2ZSBicmVha3BvaW50c1xuICAgICAgYnJlYWtwb2ludHM6IHtcbiAgICAgICAgLy8gd2hlbiB3aW5kb3cgd2lkdGggaXMgPj0gMzIwcHhcbiAgICAgICAgMDoge1xuICAgICAgICAgIHNsaWRlc1BlclZpZXc6IDEsXG4gICAgICAgIH0sXG4gICAgICAgIDU3Njoge1xuICAgICAgICAgIHNsaWRlc1BlclZpZXc6IDIsXG4gICAgICAgIH0sXG4gICAgICAgIDk5Mjoge1xuICAgICAgICAgIHNsaWRlc1BlclZpZXc6IDEsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH1cbiAgKTtcblxuICAvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICMgY2F0ZWdvcmllcyBjYXJvdXNlbDRcbiAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cbiAgdmFyIGNhdGVnb3JpZXNDYXJvdXNlbDMgPSBuZXcgU3dpcGVyKFxuICAgIFwiLmNhdGVnb3JpZXMtY2Fyb3VzZWw0IC5zd2lwZXItY29udGFpbmVyXCIsXG4gICAge1xuICAgICAgbG9vcDogdHJ1ZSxcbiAgICAgIHNwZWVkOiA4MDAsXG4gICAgICBzbGlkZXNQZXJWaWV3OiAxLFxuICAgICAgc3BhY2VCZXR3ZWVuOiAwLFxuICAgICAgcGFnaW5hdGlvbjogZmFsc2UsXG4gICAgICBuYXZpZ2F0aW9uOiB7XG4gICAgICAgIG5leHRFbDogXCIuY2F0ZWdvcmllcy1jYXJvdXNlbDQgLnN3aXBlci1idXR0b24tbmV4dFwiLFxuICAgICAgICBwcmV2RWw6IFwiLmNhdGVnb3JpZXMtY2Fyb3VzZWw0IC5zd2lwZXItYnV0dG9uLXByZXZcIixcbiAgICAgIH0sXG5cbiAgICAgIC8vIFJlc3BvbnNpdmUgYnJlYWtwb2ludHNcbiAgICAgIGJyZWFrcG9pbnRzOiB7XG4gICAgICAgIC8vIHdoZW4gd2luZG93IHdpZHRoIGlzID49IDMyMHB4XG4gICAgICAgIDA6IHtcbiAgICAgICAgICBzbGlkZXNQZXJWaWV3OiAxLFxuICAgICAgICB9LFxuICAgICAgICA1NzY6IHtcbiAgICAgICAgICBzbGlkZXNQZXJWaWV3OiAyLFxuICAgICAgICB9LFxuICAgICAgICA5OTI6IHtcbiAgICAgICAgICBzbGlkZXNQZXJWaWV3OiAxLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9XG4gICk7XG5cbiAgLy8gc3dpcGVyIHRodW1iIGdhbGxlcnlcblxuICB2YXIgZ2FsbGVyeVRodW1icyA9IG5ldyBTd2lwZXIoXG4gICAgXCIucHJvZHVjdC1tb2RhbC1nYWxsZXJ5LXRodW1icyAuc3dpcGVyLWNvbnRhaW5lclwiLFxuICAgIHtcbiAgICAgIHNwYWNlQmV0d2VlbjogMCxcbiAgICAgIHNsaWRlc1BlclZpZXc6IDQsXG4gICAgICBsb29wOiBmYWxzZSxcbiAgICAgIHdhdGNoU2xpZGVzVmlzaWJpbGl0eTogdHJ1ZSxcbiAgICAgIHdhdGNoU2xpZGVzUHJvZ3Jlc3M6IHRydWUsXG4gICAgfVxuICApO1xuXG4gIHZhciBnYWxsZXJ5VG9wID0gbmV3IFN3aXBlcihcIi5wcm9kdWN0LW1vZGFsLWdhbGxlcnkgLnN3aXBlci1jb250YWluZXJcIiwge1xuICAgIHNwYWNlQmV0d2VlbjogMSxcbiAgICBzcGFjZUJldHdlZW46IDAsXG4gICAgbG9vcDogZmFsc2UsXG4gICAgbmF2aWdhdGlvbjoge1xuICAgICAgbmV4dEVsOiBcIi5wcm9kdWN0LW1vZGFsLWdhbGxlcnkgLnN3aXBlci1idXR0b24tbmV4dFwiLFxuICAgICAgcHJldkVsOiBcIi5wcm9kdWN0LW1vZGFsLWdhbGxlcnkgLnN3aXBlci1idXR0b24tcHJldlwiLFxuICAgIH0sXG4gICAgdGh1bWJzOiB7XG4gICAgICBzd2lwZXI6IGdhbGxlcnlUaHVtYnMsXG4gICAgfSxcbiAgfSk7XG4gIC8vIHN3aXBlciB0aHVtYiBnYWxsZXJ5XG5cbiAgdmFyIFRodW1icyA9IG5ldyBTd2lwZXIoXCIuZ2FsbGVyeS10aHVtYnMgLnN3aXBlci1jb250YWluZXJcIiwge1xuICAgIHNwYWNlQmV0d2VlbjogMCxcbiAgICBzbGlkZXNQZXJWaWV3OiA0LFxuICAgIGxvb3A6IGZhbHNlLFxuICAgIHdhdGNoU2xpZGVzVmlzaWJpbGl0eTogdHJ1ZSxcbiAgICB3YXRjaFNsaWRlc1Byb2dyZXNzOiB0cnVlLFxuICB9KTtcblxuICB2YXIgZ2FsbGVyeVRvcDIgPSBuZXcgU3dpcGVyKFwiLmdhbGxlcnkgLnN3aXBlci1jb250YWluZXJcIiwge1xuICAgIHNwYWNlQmV0d2VlbjogMSxcbiAgICBzcGFjZUJldHdlZW46IDAsXG4gICAgbG9vcDogZmFsc2UsXG4gICAgbmF2aWdhdGlvbjoge1xuICAgICAgbmV4dEVsOiBcIi5nYWxsZXJ5IC5zd2lwZXItYnV0dG9uLW5leHRcIixcbiAgICAgIHByZXZFbDogXCIuZ2FsbGVyeSAuc3dpcGVyLWJ1dHRvbi1wcmV2XCIsXG4gICAgfSxcbiAgICB0aHVtYnM6IHtcbiAgICAgIHN3aXBlcjogVGh1bWJzLFxuICAgIH0sXG4gIH0pO1xuXG5cbiAvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICMgY2F0ZWdvcmllcyBjYXJvdXNlbDVcbiAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cbiAgdmFyIGNhdGVnb3JpZXNDYXJvdXNlbDMgPSBuZXcgU3dpcGVyKFxuICAgIFwiLmNhdGVnb3JpZXMtY2Fyb3VzZWw1IC5zd2lwZXItY29udGFpbmVyXCIsXG4gICAge1xuICAgICAgbG9vcDogZmFsc2UsXG4gICAgICBzcGVlZDogODAwLFxuICAgICAgc2xpZGVzUGVyVmlldzogMSxcbiAgICAgIHNwYWNlQmV0d2VlbjogMCxcbiAgICAgIHBhZ2luYXRpb246IGZhbHNlLFxuICAgICAgbmF2aWdhdGlvbjoge1xuICAgICAgICBuZXh0RWw6IFwiLmNhdGVnb3JpZXMtY2Fyb3VzZWw1IC5zd2lwZXItYnV0dG9uLW5leHRcIixcbiAgICAgICAgcHJldkVsOiBcIi5jYXRlZ29yaWVzLWNhcm91c2VsNSAuc3dpcGVyLWJ1dHRvbi1wcmV2XCIsXG4gICAgICB9LFxuXG4gICAgICAvLyBSZXNwb25zaXZlIGJyZWFrcG9pbnRzXG4gICAgICBicmVha3BvaW50czoge1xuICAgICAgICAvLyB3aGVuIHdpbmRvdyB3aWR0aCBpcyA+PSAzMjBweFxuICAgICAgICAwOiB7XG4gICAgICAgICAgc2xpZGVzUGVyVmlldzogMSxcbiAgICAgICAgfSxcbiAgICAgICAgNTc2OiB7XG4gICAgICAgICAgc2xpZGVzUGVyVmlldzogMSxcbiAgICAgICAgfSxcbiAgICAgICAgOTkyOiB7XG4gICAgICAgICAgc2xpZGVzUGVyVmlldzogMSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfVxuICApO1xuICAvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuICAvKiAgQ291bnRkb3duXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuICBmdW5jdGlvbiBtYWtlVGltZXIoJGVuZERhdGUsICR0aGlzLCAkZm9ybWF0KSB7XG4gICAgdmFyIHRvZGF5ID0gbmV3IERhdGUoKTtcbiAgICB2YXIgQmlnRGF5ID0gbmV3IERhdGUoJGVuZERhdGUpLFxuICAgICAgbXNQZXJEYXkgPSAyNCAqIDYwICogNjAgKiAxMDAwLFxuICAgICAgdGltZUxlZnQgPSBCaWdEYXkuZ2V0VGltZSgpIC0gdG9kYXkuZ2V0VGltZSgpLFxuICAgICAgZV9kYXlzTGVmdCA9IHRpbWVMZWZ0IC8gbXNQZXJEYXksXG4gICAgICBkYXlzTGVmdCA9IE1hdGguZmxvb3IoZV9kYXlzTGVmdCksXG4gICAgICBlX2hyc0xlZnQgPSAoZV9kYXlzTGVmdCAtIGRheXNMZWZ0KSAqIDI0LFxuICAgICAgaHJzTGVmdCA9IE1hdGguZmxvb3IoZV9ocnNMZWZ0KSxcbiAgICAgIGVfbWluc0xlZnQgPSAoZV9ocnNMZWZ0IC0gaHJzTGVmdCkgKiA2MCxcbiAgICAgIG1pbnNMZWZ0ID0gTWF0aC5mbG9vcigoZV9ocnNMZWZ0IC0gaHJzTGVmdCkgKiA2MCksXG4gICAgICBlX3NlY3NMZWZ0ID0gKGVfbWluc0xlZnQgLSBtaW5zTGVmdCkgKiA2MCxcbiAgICAgIHNlY3NMZWZ0ID0gTWF0aC5mbG9vcigoZV9taW5zTGVmdCAtIG1pbnNMZWZ0KSAqIDYwKTtcblxuICAgIHZhciB5ZWFyc0xlZnQgPSAwO1xuICAgIHZhciBtb250aHNMZWZ0ID0gMDtcbiAgICB2YXIgd2Vla3NMZWZ0ID0gMDtcblxuICAgIGlmICgkZm9ybWF0ICE9IFwic2hvcnRcIikge1xuICAgICAgaWYgKGRheXNMZWZ0ID4gMzY1KSB7XG4gICAgICAgIHllYXJzTGVmdCA9IE1hdGguZmxvb3IoZGF5c0xlZnQgLyAzNjUpO1xuICAgICAgICBkYXlzTGVmdCA9IGRheXNMZWZ0ICUgMzY1O1xuICAgICAgfVxuXG4gICAgICBpZiAoZGF5c0xlZnQgPiAzMCkge1xuICAgICAgICBtb250aHNMZWZ0ID0gTWF0aC5mbG9vcihkYXlzTGVmdCAvIDMwKTtcbiAgICAgICAgZGF5c0xlZnQgPSBkYXlzTGVmdCAlIDMwO1xuICAgICAgfVxuICAgICAgaWYgKGRheXNMZWZ0ID4gNykge1xuICAgICAgICB3ZWVrc0xlZnQgPSBNYXRoLmZsb29yKGRheXNMZWZ0IC8gNyk7XG4gICAgICAgIGRheXNMZWZ0ID0gZGF5c0xlZnQgJSA3O1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciB5ZWFyc0xlZnQgPSB5ZWFyc0xlZnQgPCAxMCA/IFwiMFwiICsgeWVhcnNMZWZ0IDogeWVhcnNMZWZ0LFxuICAgICAgbW9udGhzTGVmdCA9IG1vbnRoc0xlZnQgPCAxMCA/IFwiMFwiICsgbW9udGhzTGVmdCA6IG1vbnRoc0xlZnQsXG4gICAgICB3ZWVrc0xlZnQgPSB3ZWVrc0xlZnQgPCAxMCA/IFwiMFwiICsgd2Vla3NMZWZ0IDogd2Vla3NMZWZ0LFxuICAgICAgZGF5c0xlZnQgPSBkYXlzTGVmdCA8IDEwID8gXCIwXCIgKyBkYXlzTGVmdCA6IGRheXNMZWZ0LFxuICAgICAgaHJzTGVmdCA9IGhyc0xlZnQgPCAxMCA/IFwiMFwiICsgaHJzTGVmdCA6IGhyc0xlZnQsXG4gICAgICBtaW5zTGVmdCA9IG1pbnNMZWZ0IDwgMTAgPyBcIjBcIiArIG1pbnNMZWZ0IDogbWluc0xlZnQsXG4gICAgICBzZWNzTGVmdCA9IHNlY3NMZWZ0IDwgMTAgPyBcIjBcIiArIHNlY3NMZWZ0IDogc2Vjc0xlZnQsXG4gICAgICB5ZWFyc1RleHQgPSB5ZWFyc0xlZnQgPiAxID8gXCJ5ZWFyc1wiIDogXCJ5ZWFyXCIsXG4gICAgICBtb250aHNUZXh0ID0gbW9udGhzTGVmdCA+IDEgPyBcIm1vbnRoc1wiIDogXCJtb250aFwiLFxuICAgICAgd2Vla3NUZXh0ID0gd2Vla3NMZWZ0ID4gMSA/IFwid2Vla3NcIiA6IFwid2Vla1wiLFxuICAgICAgZGF5c1RleHQgPSBkYXlzTGVmdCA+IDEgPyBcImRheXNcIiA6IFwiZGF5XCIsXG4gICAgICBob3VyVGV4dCA9IGhyc0xlZnQgPiAxID8gXCJocnNcIiA6IFwiaHJcIixcbiAgICAgIG1pbnNUZXh0ID0gbWluc0xlZnQgPiAxID8gXCJtaW5zXCIgOiBcIm1pblwiLFxuICAgICAgc2VjVGV4dCA9IHNlY3NMZWZ0ID4gMSA/IFwic2Vjc1wiIDogXCJzZWNcIjtcblxuICAgIHZhciAkbWFya3VwID0ge1xuICAgICAgd3JhcHBlcjogJHRoaXMuZmluZChcIi5jb3VudGRvd25fX2l0ZW1cIiksXG4gICAgICB5ZWFyOiAkdGhpcy5maW5kKFwiLnllYXJzTGVmdFwiKSxcbiAgICAgIG1vbnRoOiAkdGhpcy5maW5kKFwiLm1vbnRoc0xlZnRcIiksXG4gICAgICB3ZWVrOiAkdGhpcy5maW5kKFwiLndlZWtzTGVmdFwiKSxcbiAgICAgIGRheTogJHRoaXMuZmluZChcIi5kYXlzTGVmdFwiKSxcbiAgICAgIGhvdXI6ICR0aGlzLmZpbmQoXCIuaG91cnNMZWZ0XCIpLFxuICAgICAgbWludXRlOiAkdGhpcy5maW5kKFwiLm1pbnNMZWZ0XCIpLFxuICAgICAgc2Vjb25kOiAkdGhpcy5maW5kKFwiLnNlY3NMZWZ0XCIpLFxuICAgICAgeWVhclR4dDogJHRoaXMuZmluZChcIi55ZWFyc1RleHRcIiksXG4gICAgICBtb250aFR4dDogJHRoaXMuZmluZChcIi5tb250aHNUZXh0XCIpLFxuICAgICAgd2Vla1R4dDogJHRoaXMuZmluZChcIi53ZWVrc1RleHRcIiksXG4gICAgICBkYXlUeHQ6ICR0aGlzLmZpbmQoXCIuZGF5c1RleHRcIiksXG4gICAgICBob3VyVHh0OiAkdGhpcy5maW5kKFwiLmhvdXJzVGV4dFwiKSxcbiAgICAgIG1pblR4dDogJHRoaXMuZmluZChcIi5taW5zVGV4dFwiKSxcbiAgICAgIHNlY1R4dDogJHRoaXMuZmluZChcIi5zZWNzVGV4dFwiKSxcbiAgICB9O1xuXG4gICAgdmFyIGVsTnVtYmVyID0gJG1hcmt1cC53cmFwcGVyLmxlbmd0aDtcbiAgICAkdGhpcy5hZGRDbGFzcyhcIml0ZW0tXCIgKyBlbE51bWJlcik7XG4gICAgJCgkbWFya3VwLnllYXIpLmh0bWwoeWVhcnNMZWZ0KTtcbiAgICAkKCRtYXJrdXAueWVhclR4dCkuaHRtbCh5ZWFyc1RleHQpO1xuICAgICQoJG1hcmt1cC5tb250aCkuaHRtbChtb250aHNMZWZ0KTtcbiAgICAkKCRtYXJrdXAubW9udGhUeHQpLmh0bWwobW9udGhzVGV4dCk7XG4gICAgJCgkbWFya3VwLndlZWspLmh0bWwod2Vla3NMZWZ0KTtcbiAgICAkKCRtYXJrdXAud2Vla1R4dCkuaHRtbCh3ZWVrc1RleHQpO1xuICAgICQoJG1hcmt1cC5kYXkpLmh0bWwoZGF5c0xlZnQpO1xuICAgICQoJG1hcmt1cC5kYXlUeHQpLmh0bWwoZGF5c1RleHQpO1xuICAgICQoJG1hcmt1cC5ob3VyKS5odG1sKGhyc0xlZnQpO1xuICAgICQoJG1hcmt1cC5ob3VyVHh0KS5odG1sKGhvdXJUZXh0KTtcbiAgICAkKCRtYXJrdXAubWludXRlKS5odG1sKG1pbnNMZWZ0KTtcbiAgICAkKCRtYXJrdXAubWluVHh0KS5odG1sKG1pbnNUZXh0KTtcbiAgICAkKCRtYXJrdXAuc2Vjb25kKS5odG1sKHNlY3NMZWZ0KTtcbiAgICAkKCRtYXJrdXAuc2VjVHh0KS5odG1sKHNlY1RleHQpO1xuICB9XG5cbiAgJChcIi5jb3VudGRvd25cIikuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgdmFyICR0aGlzID0gJCh0aGlzKTtcbiAgICB2YXIgJGVuZERhdGUgPSAkKHRoaXMpLmRhdGEoXCJjb3VudGRvd25cIik7XG4gICAgdmFyICRmb3JtYXQgPSAkKHRoaXMpLmRhdGEoXCJmb3JtYXRcIik7XG4gICAgc2V0SW50ZXJ2YWwoZnVuY3Rpb24gKCkge1xuICAgICAgbWFrZVRpbWVyKCRlbmREYXRlLCAkdGhpcywgJGZvcm1hdCk7XG4gICAgfSwgMCk7XG4gIH0pO1xuXG4gICQoXCIjc2xpZGVyLXJhbmdlXCIpLnNsaWRlcih7XG4gICAgcmFuZ2U6IHRydWUsXG4gICAgbWluOiAwLFxuICAgIG1heDogMTAwLFxuICAgIHZhbHVlczogWzAsIDEwMF0sXG4gICAgc2xpZGU6IGZ1bmN0aW9uIHNsaWRlKGV2ZW50LCB1aSkge1xuICAgICAgJChcIiNhbW91bnRcIikudmFsKFwi4oKsXCIgKyB1aS52YWx1ZXNbMF0gKyBcIiAtIOKCrFwiICsgdWkudmFsdWVzWzFdKTtcbiAgICB9LFxuICB9KTtcbiAgJChcIiNhbW91bnRcIikudmFsKFxuICAgIFwi4oKsXCIgK1xuICAgICAgJChcIiNzbGlkZXItcmFuZ2VcIikuc2xpZGVyKFwidmFsdWVzXCIsIDApICtcbiAgICAgIFwiIC0g4oKsXCIgK1xuICAgICAgJChcIiNzbGlkZXItcmFuZ2VcIikuc2xpZGVyKFwidmFsdWVzXCIsIDEpXG4gICk7XG5cbiAgLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAgICAgXG4jIGNvdW50ZXIgXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXG4gICQoXCIuY291bnRcIikuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGNvdW50ID0gJCh0aGlzKSxcbiAgICAgIGlucHV0ID0gY291bnQuZmluZCgnaW5wdXRbdHlwZT1cIm51bWJlclwiXScpLFxuICAgICAgaW5jcmVhbWVudCA9IGNvdW50LmZpbmQoXCIuaW5jcmVtZW50XCIpLFxuICAgICAgZGVjcmVhbWVudCA9IGNvdW50LmZpbmQoXCIuZGVjcmVtZW50XCIpLFxuICAgICAgbWluVmFsdWUgPSBpbnB1dC5hdHRyKFwibWluXCIpLFxuICAgICAgbWF4VmFsdWUgPSBpbnB1dC5hdHRyKFwibWF4XCIpO1xuICAgIGluY3JlYW1lbnQub24oXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgb2xkVmFsdWUgPSBwYXJzZUZsb2F0KGlucHV0LnZhbCgpKTtcblxuICAgICAgaWYgKG9sZFZhbHVlID49IG1heFZhbHVlKSB7XG4gICAgICAgIHZhciBuZXdWYWwgPSBvbGRWYWx1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciBuZXdWYWwgPSBvbGRWYWx1ZSArIDE7XG4gICAgICB9XG5cbiAgICAgIGNvdW50LmZpbmQoXCJpbnB1dFwiKS52YWwobmV3VmFsKTtcbiAgICAgIGNvdW50LmZpbmQoXCJpbnB1dFwiKS50cmlnZ2VyKFwiY2hhbmdlXCIpO1xuICAgIH0pO1xuICAgIGRlY3JlYW1lbnQub24oXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgb2xkVmFsdWUgPSBwYXJzZUZsb2F0KGlucHV0LnZhbCgpKTtcblxuICAgICAgaWYgKG9sZFZhbHVlIDw9IG1pblZhbHVlKSB7XG4gICAgICAgIHZhciBuZXdWYWwgPSBvbGRWYWx1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciBuZXdWYWwgPSBvbGRWYWx1ZSAtIDE7XG4gICAgICB9XG5cbiAgICAgIGNvdW50LmZpbmQoXCJpbnB1dFwiKS52YWwobmV3VmFsKTtcbiAgICAgIGNvdW50LmZpbmQoXCJpbnB1dFwiKS50cmlnZ2VyKFwiY2hhbmdlXCIpO1xuICAgIH0pO1xuICB9KTtcblxuICAvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICBDcmVhdGUgYW4gYWNjb3VudCB0b2dnbGVcbiAgICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5cbiAgJChcIi5jaGVja291dC10b2dnbGUyXCIpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgICQoXCIub3Blbi10b2dnbGUyXCIpLnNsaWRlVG9nZ2xlKDEwMDApO1xuICB9KTtcbiAgJChcIi5jaGVja291dC10b2dnbGVcIikub24oXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgJChcIi5vcGVuLXRvZ2dsZVwiKS5zbGlkZVRvZ2dsZSgxMDAwKTtcbiAgfSk7XG5cbiAgLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICMgTWFpbCBDaGlwIEFqYXggYWN0aXZlXG4gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG4gIHZhciBtQ0Zvcm0gPSAkKFwiI21jLWZvcm1cIik7XG4gIG1DRm9ybS5hamF4Q2hpbXAoe1xuICAgIGNhbGxiYWNrOiBtYWlsY2hpbXBDYWxsYmFjayxcbiAgICAvL1JlcGxhY2UgdGhpcyB3aXRoIHlvdXIgb3duIG1haWxjaGltcCBwb3N0IFVSTC4gRG9uJ3QgcmVtb3ZlIHRoZSBcIlwiLiBKdXN0IHBhc3RlIHRoZSB1cmwgaW5zaWRlIFwiXCIuXG4gICAgdXJsOlxuICAgICAgXCJodHRwOi8vZGV2aXRlbXMudXMxMS5saXN0LW1hbmFnZS5jb20vc3Vic2NyaWJlL3Bvc3RcIixcbiAgfSk7XG4gIGZ1bmN0aW9uIG1haWxjaGltcENhbGxiYWNrKHJlc3ApIHtcbiAgICBpZiAocmVzcC5yZXN1bHQgPT09IFwic3VjY2Vzc1wiKSB7XG4gICAgICBhbGVydChyZXNwLm1zZyk7XG4gICAgfSBlbHNlIGlmIChyZXNwLnJlc3VsdCA9PT0gXCJlcnJvclwiKSB7XG4gICAgICBhbGVydChyZXNwLm1zZyk7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIC8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICMgQ29udGFjdCBGb3JtIFZhbGlkYXRpb24gU2V0dGluZ3NcbiAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuICB2YXIgY29udGFjdEZvcm0gPSAkKFwiI2NvbnRhY3RGb3JtXCIpO1xuICBpZiAoJChcIiNjb250YWN0Rm9ybVwiKS5sZW5ndGgpIHtcbiAgICBjb250YWN0Rm9ybS52YWxpZGF0ZSh7XG4gICAgICBvbmZvY3Vzb3V0OiBmYWxzZSxcbiAgICAgIG9ua2V5dXA6IGZhbHNlLFxuICAgICAgcnVsZXM6IHtcbiAgICAgICAgbmFtZTogXCJyZXF1aXJlZFwiLFxuICAgICAgICBudW1iZXI6IFwicmVxdWlyZWRcIixcbiAgICAgICAgZW1haWw6IHtcbiAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgICAgICBlbWFpbDogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICBlcnJvclBsYWNlbWVudDogZnVuY3Rpb24gKGVycm9yLCBlbGVtZW50KSB7XG4gICAgICAgIGVycm9yLmluc2VydEJlZm9yZShlbGVtZW50KTtcbiAgICAgIH0sXG4gICAgICBtZXNzYWdlczoge1xuICAgICAgICBuYW1lOiBcIkVudGVyIHlvdXIgbmFtZT9cIixcbiAgICAgICAgZW1haWw6IHtcbiAgICAgICAgICByZXF1aXJlZDogXCJFbnRlciB5b3VyIGVtYWlsP1wiLFxuICAgICAgICAgIGVtYWlsOiBcIlBsZWFzZSwgZW50ZXIgYSB2YWxpZCBlbWFpbFwiLFxuICAgICAgICB9LFxuICAgICAgfSxcblxuICAgICAgaGlnaGxpZ2h0OiBmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgICAgICAkKGVsZW1lbnQpLnRleHQoXCJcIikuYWRkQ2xhc3MoXCJlcnJvclwiKTtcbiAgICAgIH0sXG5cbiAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgICAgIGVsZW1lbnQudGV4dChcIlwiKS5hZGRDbGFzcyhcInZhbGlkXCIpO1xuICAgICAgfSxcbiAgICB9KTtcbiAgfVxuXG4gIC8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAjIENvbnRhY3QgRm9ybSBTY3JpcHRcbiAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5cbiAgaWYgKCQoXCIjZm9ybVN1Ym1pdFwiKS5sZW5ndGgpIHtcbiAgICB2YXIgZm9ybVN1Ym1pdCA9ICQoXCIjZm9ybVN1Ym1pdFwiKTtcbiAgICBDVEZvcm0uc3VibWl0KGZ1bmN0aW9uICgpIHtcbiAgICAgIC8vIHN1Ym1pdCB0aGUgZm9ybVxuICAgICAgaWYgKCQodGhpcykudmFsaWQoKSkge1xuICAgICAgICBmb3JtU3VibWl0LmJ1dHRvbihcImxvYWRpbmdcIik7XG4gICAgICAgIHZhciBhY3Rpb24gPSAkKHRoaXMpLmF0dHIoXCJhY3Rpb25cIik7XG4gICAgICAgICQuYWpheCh7XG4gICAgICAgICAgdXJsOiBhY3Rpb24sXG4gICAgICAgICAgdHlwZTogXCJQT1NUXCIsXG4gICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgY29udGFjdG5hbWU6ICQoXCIjbmFtZVwiKS52YWwoKSxcbiAgICAgICAgICAgIGNvbnRhY3RlbWFpbDogJChcIiNlbWFpbFwiKS52YWwoKSxcbiAgICAgICAgICAgIGNvbnRhY3RtZXNzYWdlOiAkKFwiI21hc3NhZ2VcIikudmFsKCksXG4gICAgICAgICAgfSxcbiAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBmb3JtU3VibWl0LmJ1dHRvbihcInJlc2V0XCIpO1xuICAgICAgICAgICAgZm9ybVN1Ym1pdC5idXR0b24oXCJjb21wbGV0ZVwiKTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIGVycm9yOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBmb3JtU3VibWl0LmJ1dHRvbihcInJlc2V0XCIpO1xuICAgICAgICAgICAgZm9ybVN1Ym1pdC5idXR0b24oXCJlcnJvclwiKTtcbiAgICAgICAgICB9LFxuICAgICAgICB9KTtcbiAgICAgICAgLy8gcmV0dXJuIGZhbHNlIHRvIHByZXZlbnQgbm9ybWFsIGJyb3dzZXIgc3VibWl0IGFuZCBwYWdlIG5hdmlnYXRpb25cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGZvcm1TdWJtaXQuYnV0dG9uKFwicmVzZXRcIik7XG4gICAgICB9XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSk7XG4gIH1cblxuICAvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgIyAgQ29weSBSaWdodCBZZWFyIFVwZGF0ZVxuICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cblxuICAkKFwiI2N1cnJlbnRZZWFyXCIpLnRleHQobmV3IERhdGUoKS5nZXRGdWxsWWVhcigpKTtcbiAgLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICMgIHNjcm9sbFVwXG4gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuICAkLnNjcm9sbFVwKHtcbiAgICBzY3JvbGxOYW1lOiBcInNjcm9sbFVwXCIsXG4gICAgLy8gRWxlbWVudCBJRFxuICAgIHNjcm9sbERpc3RhbmNlOiA0MDAsXG4gICAgLy8gRGlzdGFuY2UgZnJvbSB0b3AvYm90dG9tIGJlZm9yZSBzaG93aW5nIGVsZW1lbnQgKHB4KVxuICAgIHNjcm9sbEZyb206IFwidG9wXCIsXG4gICAgLy8gJ3RvcCcgb3IgJ2JvdHRvbSdcbiAgICBzY3JvbGxTcGVlZDogNDAwLFxuICAgIC8vIFNwZWVkIGJhY2sgdG8gdG9wIChtcylcbiAgICBlYXNpbmdUeXBlOiBcImxpbmVhclwiLFxuICAgIC8vIFNjcm9sbCB0byB0b3AgZWFzaW5nIChzZWUgaHR0cDovL2Vhc2luZ3MubmV0LylcbiAgICBhbmltYXRpb246IFwiZmFkZVwiLFxuICAgIC8vIEZhZGUsIHNsaWRlLCBub25lXG4gICAgYW5pbWF0aW9uU3BlZWQ6IDIwMCxcbiAgICAvLyBBbmltYXRpb24gc3BlZWQgKG1zKVxuICAgIHNjcm9sbFRyaWdnZXI6IGZhbHNlLFxuICAgIC8vIFNldCBhIGN1c3RvbSB0cmlnZ2VyaW5nIGVsZW1lbnQuIENhbiBiZSBhbiBIVE1MIHN0cmluZyBvciBqUXVlcnkgb2JqZWN0XG4gICAgc2Nyb2xsVGFyZ2V0OiBmYWxzZSxcbiAgICAvLyBTZXQgYSBjdXN0b20gdGFyZ2V0IGVsZW1lbnQgZm9yIHNjcm9sbGluZyB0by4gQ2FuIGJlIGVsZW1lbnQgb3IgbnVtYmVyXG4gICAgc2Nyb2xsVGV4dDogJzxpIGNsYXNzPVwibGFzIGxhLWFycm93LXVwXCI+PC9pPicsXG4gICAgLy8gVGV4dCBmb3IgZWxlbWVudCwgY2FuIGNvbnRhaW4gSFRNTFxuICAgIHNjcm9sbFRpdGxlOiBmYWxzZSxcbiAgICAvLyBTZXQgYSBjdXN0b20gPGE+IHRpdGxlIGlmIHJlcXVpcmVkLlxuICAgIHNjcm9sbEltZzogZmFsc2UsXG4gICAgLy8gU2V0IHRydWUgdG8gdXNlIGltYWdlXG4gICAgYWN0aXZlT3ZlcmxheTogZmFsc2UsXG4gICAgLy8gU2V0IENTUyBjb2xvciB0byBkaXNwbGF5IHNjcm9sbFVwIGFjdGl2ZSBwb2ludCwgZS5nICcjMDBGRkZGJ1xuICAgIHpJbmRleDogMjE0LCAvLyBaLUluZGV4IGZvciB0aGUgb3ZlcmxheVxuICB9KTtcbn0pKGpRdWVyeSk7XG4iXX0=
