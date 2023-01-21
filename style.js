var tablinks =document.getElementsByClassName("tab-links");
var tabcontents =document.getElementsByClassName("tab-contents");

function opentab(tabname){
      for(tablink of  tablinks){
          tablink.classList.remove("active-link");
       }
       for(tabcontent of tabcontents){
        tabcontent.classList.remove("active");
         }
         event.currentTarget.classList.add("active-link");
         document.getElementById(tabname).classList.add("active");
}
//side menu

var sidemenu =document.getElementById("sidemenu");
function openmenu(){
    sidemenu.style.right = "0";
}
function closemenu(){
    sidemenu.style.right = "-200px";
}

//connect form 
     const scriptURL = 'https://script.google.com/macros/s/AKfycbx18zWb_uDVnKuTqtOASDEc3jjt54Ni1jEz4-Pw9PpUnBpYHn-ARB7LsqQeNcnQdwUyXA/exec'
     const form = document.forms['submit-to-google-sheet']
     const msg =document.getElementById("msg")
    form.addEventListener('submit', e => {
      e.preventDefault()
      fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        msg.innerHTML = "Message sent successfully"
        setTimeout(function(){
            msg.innerHTML =""
        },5000)
    form.reset()
        
    })
      .catch(error => console.error('Error!', error.message))
    })

//CURCER
new kursor({
  type: 1,
  color:"#476582"
})
    