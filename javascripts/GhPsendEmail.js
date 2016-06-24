function sendMail() {
    
    var mailContent = 
    	   "mailto:"+ escape(emailAddress)+
           "?subject=" + escape("Contact form")+
           "&body=" + escape(document.getElementById('comments').value);
           
    window.location.href = mailContent;
}