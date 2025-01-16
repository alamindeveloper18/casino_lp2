
(function($){
	$(function(){


        // Start
        $(window).scroll(function () {
            var scrollDistance = $(window).scrollTop();

            $('.section').each(function (i) {
                if ($(this).position().top <= scrollDistance) {
                    $('.nav-wrap ul li.active').removeClass('active');
                    $('.nav-wrap ul li').eq(i).addClass('active');
                }
            });
        }).scroll();

        $('.nav-wrap ul li a[href*="#"]:not([href="#"])').click(function () {

            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(0) + ']');
                if (target.length) {
                    $('html, body').animate({
                        scrollTop: target.offset().top - 0
                    }, 600);
                    return false;
                }
            }
        });
        

        // popup
        $('.popup_here').click(function(e) {
            e.preventDefault();
            $("body").addClass("modal_shown");
        });

        $('.popup-close, .popup-section').click(function() {
            $("body").removeClass("modal_shown");
        });

        $('.main-popup').click(function(e) {
            e.stopPropagation();
        });



        $(document).ready(function() {
            // Scroll event listener
            $(window).on('scroll', function() {
                // Get the top position of the .hero-wrap section
                var heroWrapTop = $('.hero-wrap').offset().top;
                // Get the height of the .hero-wrap section
                var heroWrapHeight = $('.hero-wrap').outerHeight();
                
                // Calculate 80% of the height of the .hero-wrap section
                var scrollTriggerPoint = heroWrapTop + (heroWrapHeight * 0.5);
                
                // Check if the scroll position has passed 80% of the .hero-wrap section
                if ($(window).scrollTop() > scrollTriggerPoint) {
                    // Add 'active' class to .fixed-btn when 80% of the hero section is scrolled past
                    $('.fixed-btn').addClass('active');
                } else {
                    // Remove 'active' class when less than 80% of the hero section is scrolled past
                    $('.fixed-btn').removeClass('active');
                }
            });
        });
        
        
        
        
        if ($('.marquee-text-wrap').length) {
            $('.marquee-text-wrap').marquee({
                direction: 'right',
                duration: 15000,
                gap: 0,
                delayBeforeStart: 0,
                duplicated: true,
                startVisible: true,
            });
        }

        $('.p-poker-icon').each(function (index) {
            $(this).css('animation-delay', (index * 0.5) + 's');
        })


        $(".faq-accordion-item").each(function () {
            var $this = $(this);
            $this.find("> h3").on("click touch", function () {
                $(".faq-accordion-item").removeClass("active")
                $(".faq-accordion-item-content").slideUp();
                if ($this.find(".faq-accordion-item-content:visible").length) {
                    $(".faq-accordion-item").removeClass("active")
                    $(".faq-accordion-item-content").slideUp();
                } else {
                    $this.addClass("active")
                    $(".faq-accordion-item-content").slideUp();
                    $this.find(".faq-accordion-item-content").slideDown();
                }
            })
        });


        if ($('.about-thumb-marque-1').length) {
            $('.about-thumb-marque-1').marquee({
                direction: 'left',
                duration: 10000,
                gap: 0,
                delayBeforeStart: 0,
                duplicated: true,
                startVisible: true,
            });
        }
        if ($('.about-thumb-marque-2').length) {
            $('.about-thumb-marque-2').marquee({
                direction: 'right',
                duration: 10000,
                gap: 0,
                delayBeforeStart: 0,
                duplicated: true,
                startVisible: true,
            });
        }
        if ($('.about-thumb-marque-3').length) {
            $('.about-thumb-marque-3').marquee({
                direction: 'left',
                duration: 10000,
                gap: 0,
                delayBeforeStart: 0,
                duplicated: true,
                startVisible: true,
            });
        }
        

        $(document).ready(function () {
            $(".contact-form .btn").on("click", function (e) {
              e.preventDefault(); // Prevent the form from submitting automatically
        
              // Get input values
              var whatsappNumber = $("#contact-number").val();
              var telegramUsername = $("#contact-telegram").val();
        
              // Check if both fields are filled
              if (whatsappNumber && telegramUsername) {
                // Redirect to the desired URL
                window.location.href = "https://phpstack-1150771-5162712.cloudwaysapps.com/thank-you/";
              } else {
                // Show an alert if any field is empty
                alert("אנא מלאו את כל השדות לפני ההמשך.");
              }
            });
            $(".popup-form .btn").on("click", function (e) {
              e.preventDefault(); // Prevent the form from submitting automatically
        
              // Get input values
              var whatsappNumber = $("#popup-number").val();
              var telegramUsername = $("#popup-telegram").val();
        
              // Check if both fields are filled
              if (whatsappNumber && telegramUsername) {
                // Redirect to the desired URL
                window.location.href = "https://phpstack-1150771-5162712.cloudwaysapps.com/thank-you/";
              } else {
                // Show an alert if any field is empty
                alert("אנא מלאו את כל השדות לפני ההמשך.");
              }
            });
          });




          $(document).ready(function() {
            // Check if we already have a countdown start time saved
            if (localStorage.getItem('countdownStartTime') === null) {
                // If not, set the countdown time to start from the current time
                var targetTime = new Date().getTime() + (45 * 60 * 1000) + (25 * 1000); // 45 minutes and 25 seconds
                localStorage.setItem('countdownStartTime', targetTime);
            } else {
                // If countdown start time exists, get the target time from localStorage
                var targetTime = localStorage.getItem('countdownStartTime');
            }
        
            // Function to update the countdown every second
            var countdownInterval = setInterval(function() {
                var now = new Date().getTime();
                var distance = targetTime - now;
        
                // If countdown reaches zero, stop the timer and clear interval
                if (distance <= 0) {
                    clearInterval(countdownInterval);
                    $('#days').text("0");
                    $('#hours').text("0");
                    $('#minutes').text("0");
                    $('#seconds').text("0");
                    localStorage.removeItem('countdownStartTime'); // Remove the saved countdown time when it's over
                } else {
                    // Calculate the remaining time
                    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
                    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
                    // Display the result on the page
                    $('#days').text(days);
                    $('#hours').text(hours);
                    $('#minutes').text(minutes);
                    $('#seconds').text(seconds);
                }
            }, 1000); // Update every second
        });
        
        
        
        
        


		
	})// End ready function.
   
	

})(jQuery)

