var emailAddress = "contact@ghp.tech";
var telephoneNumber = "+33 (0)3 29 26 70 44";
var emailSubject = "GhP contact";
var emailBody = "Please specify your name, affiliation, request, comments or suggestions.";

//<a id="GhPemailAddress" href="mailto:someone@example.com?cc=someoneelse@example.com&bcc=andsomeoneelse@example.com
//&subject=Summer%20Party&body=You%20are%20invited%20to%20a%20big%20summer%20party!"></a>

document.getElementById("GhPemailAddress").innerHTML = 
	"<span class='glyphicon glyphicon-envelope'></span>" +
	"<a href="+ 
    "'"+
    "mailto:contact@ghp.tech"+
    //"?cc=ghpopovici@gmail.com"+
    //"&bcc=andsomeoneelse@example.com"+ 
    "?subject="+
    emailSubject+
    //"&body=You%20are%20invited%20to%20a%20big%20summer%20party!"+
    "&body="+
    emailBody+
    "'"+
    ">" +  
    " " + 
    emailAddress + 
    "</a>";  

document.getElementById("GhPtelephoneNumber").innerHTML = "<span class='glyphicon glyphicon-phone'></span>" + " " + telephoneNumber;

$(document).ready(function(){
  // Add smooth scrolling to all links in navbar + footer link
  $(".navbar a, footer a[href='#myPage']").on('click', function(event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 900, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
  
  $(window).scroll(function() {
    $(".slideanim").each(function(){
      var pos = $(this).offset().top;

      var winTop = $(window).scrollTop();
        if (pos < winTop + 600) {
          $(this).addClass("slide");
        }
    });
  });
  
  $(function(){
        $("#typed").typed({
            stringsElement: $('#GhPmotto'),
            typeSpeed: 60,
        });
    });
    
})

/*
function sendMail() {
    var link = "mailto:contact@ghp.tech"
    			 //+ "?cc=myCCaddress@example.com"
             + "?subject=" + escape("Contact form")
             + "&body=" + escape(document.getElementById('comments').value)
             ;

    window.location.href = link;
}
*/



