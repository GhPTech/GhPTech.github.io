function sendMail() {
    var link = "mailto:contact@ghp.tech"
    			 /*+ "?cc=myCCaddress@example.com"*/
             + "?subject=" + escape("Contact form")
             + "&body=" + escape(document.getElementById('comments').value)
             ;

    window.location.href = link;
}