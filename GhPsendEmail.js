function sendMail() {
    var link = "mailto:ghpopovici@gmail.com"
    			 /*+ "?cc=myCCaddress@example.com"*/
             + "?subject=" + escape("Contact form")
             + "&body=" + escape(document.getElementById('comments').value)
             ;

    window.location.href = link;
}
