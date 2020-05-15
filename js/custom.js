$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "" && (this.hash == "#intro" || this.hash == "#skills" || this.hash == "#portfolio" || this.hash == "#contact"  )) {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 200, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});

//Active menu on scroll
$(document).ready(function () {
   $(document).on("scroll", onScroll);
});

function onScroll(event){
  var scrollPosition = $(document).scrollTop();
  $('nav li').each(function(){
    var currentLink = $($(this)[0]['firstElementChild']);
    var refElement = $(currentLink.attr("href"));

    if (refElement.position().top - 1 <= scrollPosition
        && refElement.position().top + refElement.height()  > scrollPosition) {
          //console.log("Scroll:"+scrollPosition);

      $('nav ul li').removeClass("active");
      $(this).addClass("active");
    } else {
      $(this).removeClass("active");
    }
  });



}
