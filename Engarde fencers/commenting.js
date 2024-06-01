  //form validation
          
  const form =document.getElementById('form');
  const name=document.getElementById('full-name');
  const email=document.getElementById('email-field');
  const text=document.getElementById('text-area');

  form.addEventListener('submit',e=>{
      e.preventDefault();

      validateInputs();
  });
  const setError=(element,message)=>{
      const inputControl=element.parentElement;
      const errorDisplay=inputControl.querySelector('.error');
      errorDisplay.innerText=message;
      inputControl.classList.add('error');
      inputControl.classList.remove('succes')
  };
  const setSuccess=element=>{
      const inputControl=element.parentElement;
      const errorDisplay= inputControl.querySelector('.error');

      errorDisplay.innerText='';
      inputControl.classList.add('success');
      inputControl.classList.remove('error');

  };
  
   const isValidEmail = email => {
         const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
         return re.test(String(email).toLowerCase());
   };
   //submit validation
   function submitValidation(){
       const form =document.getElementById('form');
       const name=document.getElementById('full-name');
       const email=document.getElementById('email-field');
       const text=document.getElementById('text-area');

       form.addEventListener('submit',e=>{
          e.preventDefault();

           validateInputs();
      });
       const setError=(element,message)=>{
           const inputControl=element.parentElement;
           const errorDisplay=inputControl.querySelector('.error');
           errorDisplay.innerText=message;
           inputControl.classList.add('error');
           inputControl.classList.remove('succes')
       };
       const setSuccess=element=>{
           const inputControl=element.parentElement;
           const errorDisplay= inputControl.querySelector('.error');

           errorDisplay.innerText='';
           inputControl.classList.add('success');
           inputControl.classList.remove('error');

       };
       
           const isValidEmail = email => {
               const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
               return re.test(String(email).toLowerCase());
           };

       
       const nameValue =name.value.trim();
       const emailValue =email.value.trim();
       const textValue =text.value.trim();

       if((nameValue == '')||(emailValue == '')||(!isValidEmail(emailValue))||(textValue=='')){

         
       }else{
           popupOpen();
           
       }
       

   }

  
   

  const validateInputs=()=>{
      const nameValue =name.value.trim();
      const emailValue =email.value.trim();
      const textValue =text.value.trim();
      if(nameValue === ''){
          setError(name,'name is required');
      }else{
          setSuccess(name);
          


      }
      if(emailValue === ''){
          setError(email,'email is required');

      }
      else if(!isValidEmail(emailValue)){
          setError(email,'provide a email address');
      }else{
          setSuccess(email);
         
      }
      if(textValue===''){
          setError(text,'please give us your comment');
      }else{
          setSuccess(text);
          
      }
      
  };
   
   
   
   

  //nav bar  
  const navbar=document.querySelector('.nav')
  const togBtn = document.querySelector('.tog')
  const togBtnIcon = document.querySelector('.tog i')
  const dropDownMenu = document.querySelector('.dropDown')

  window.addEventListener('scroll',()=>{
      if(this.scrollY>=100){
          navbar.classList.add('scrolled')
      }else{
          navbar.classList.remove('scrolled')
      }
  })


     //https://formspree.io/f/xvonwlry


  togBtn.onclick=function(){
      dropDownMenu.classList.toggle('open')
      
      const isOpen=dropDownMenu.classList.contains('open')

      togBtnIcon.classList= isOpen
      ? 'fa-solid fa-xmark'
      :'fa-solid fa-bars'
      
   }

  let mybutton = document.getElementById("myBtn");

   // When the user scrolls down 20px from the top of the document, show the button
   window.onscroll = function() {scrollFunction()};

   function scrollFunction() {
   if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
       mybutton.style.display = "block";
   } else {
       mybutton.style.display = "none";
   }
   }

   // When the user clicks on the button, scroll to the top of the document
   function topFunction() {
   document.body.scrollTop = 0; // For Safari
   document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
   };

   //funtion to send email
   function sendEmail(){
       var Name=document.getElementById('full-name').value;
       var Mail=document.getElementById('email-field').value;
       var Comment=document.getElementById('text-area').value;
       window.location.href="mailto:engardefen@gmail.com?subject=comment&body= name="+Name+"  mail="+Mail+"  comment="+Comment;
      
       

   }
   
   var nameField = document.getElementById("full-name");
   var commentArea = document.getElementById("text-area");
   var emailField = document.getElementById("email-field");

   function fieldDope() {
   if(nameField.value == "" || commentArea.value=="" || emailField.value=="") {
       alert("Please fill out the mandotary fields")
   }
   else{
       document.getElementById("myForm").style.display = "block";
   }
 }
   