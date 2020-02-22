var status = true;

function Space()
{
   if(document.getElementById("Cardnumber").value == "")
   {
   
      card.innerHTML = "*Please enter cardNumber";
       
       
   }
   else{
      card.innerHTML = "";
   }
   
   if(document.getElementById('Please Select').value == "")
   {
      
       time.innerHTML = "*Please enter expire date";
       
   }
   
   
   
   if(document.getElementById('Security').value == "")
   {
       
       security.innerHTML = "*Please enter security code";

      
   }
   if(document.getElementById('CardHolder').value == "")
   {
      
       holderName.innerHTML = "*Please enter cardholderName";
       
   }
   if(document.getElementById('Address').value == "")
   {
       
       location1.innerHTML = "*Please enter Address1";
      
   }
   
   if(document.getElementById('City').value == "")
   {
     
       townId.innerHTML = "*Please enter Town/City";
       
   }
  
  
   if(document.getElementById('zipCode').value == "")
   {
       
       postCode.innerHTML = "*Please enter PostalCode";
      
   }
   if(document.getElementById('email').value == "")
   {
       
       postCode.innerHTML = "*Please enter EmailAddress";
      
   }
   
   
}

function CheckCardNumber()
        {
   

         var num = document.getElementById("Cnumber").value;
         if(num.length !=16) {
             card.innerHTML = "*Please Enter 16 digit number";
         
         } 
         else {
            card.innerHTML = "";   
         
         }
    
        }

        function CheckDate()
        {

             if(document.getElementById('Please Select').value == "")
             {
                
                 time.innerHTML = "*Please enter correct date";
                
             }
             else
             {
                time.innerHTML = "";
             }
       }
             
             function CheckSecurityCode()
             {
             var num = document.getElementById("pin").value;
             if(num.length!=4)
             {
                
                 security.innerHTML = "*Please 4 digits security code";

             
             }
             else {
               security.innerHTML = "";   
            }
       
             
            }
            function CheckName()
            { var pattern = /^[a-zA-Z ]+$/;
               var name =document.getElementById('CHolder').value
             if(!name.match(pattern))
             {
                 holderName.innerHTML = "*Please enter valid cardholderName";
                 
             }
             else{
                holderName.innerHTML = "";
             }
             
            }
           
            function CheckTown()
            {
               var name = document.getElementById('city').value

               if(name !=  /^[a-zA-Z ]{2,30}$/)
               { 
                 townId.innerHTML = "*Please enter  Town/City";
                 
             }
             else{
                townId.innerHTML = "";
             }
             
            }
            
            function CheckTelephone()
            {
               var number = document.getElementById("Telephone").value;
             if(number !=10)
             {
                 
                 telephone.innerHTML = "*Please enter Telephone number with 10 digits";


                
             }
             else{
                telephone.innerHTML = "";
             }
             
            }
            function CheckZipCode()
            {
               var number = document.getElementById("zipCode").value

             if(number !=6)
             {
                 
                 postCode.innerHTML = "*Please enter valid zipCode";
                 
             }
             else{
                postCode.innerHTML = "";
             }
             
            }
        
            function CheckFax()
            {
               var number = document.getElementById("Fax").value;

             if(number !=10)
             {
                 
                 fax.innerHTML = "*Please enter  valid Fax";
                
             }
             else{
                fax.innerHTML = "";
             }
             
            }
            function CheckEmailId()
            {
               var EmailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

             if (EmailPattern.test("email"))
  {
   emailId.innerHTML = "*Please enter valid EmailId";
  }
  else{
     
   emailId.innerHTML = "";
  }
    
}