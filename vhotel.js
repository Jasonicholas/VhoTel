let errorname = document.getElementById('error-name');
let errormail = document.getElementById('error-email');
let errorphone =  document.getElementById('error-phone');
let errorpayment = document.getElementById('error-payment');
let errordate = document.getElementById('error-date');

function validate(){
    let name= document.getElementById('nama').value;
    let email=document.getElementById('email').value;
    let phone = document.getElementById('telepon').value;
    let cidate = document.getElementById ('check-in').value;
    let codate = document.getElementById ('check-out').value;
    let pay = document.getElementById ('payment').value;
    
    if(validatename(name)==false){
        return;
    }else if(validateemail(email)==false){
        return;
    }else if(validatePhoneNumber(phone)==false){
        return;
    }else if(ValidateDate(cidate,codate)==false){
        return;
    }else if(validatepayment(pay)==false){
        return;
    }
    window.location.href = "Thankyou.html";



}

function validatename(name){
    if(name.length==0){
        errorname.innerHTML = "Name Cannot be empty";
        return false;
    }else if(name.length<3){
        errorname.innerHTML = "Name min 3 characters";
        return false;
    }else{
        errorname.innerHTML = "";
        return true;
    }
}




function validateemail(email) {
   
    var emailpattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    
    if (emailpattern.test(email)) {
        errormail.innerHTML =""
        return true;
    } else {
      errormail.innerHTML=  "Email not found";
        return false;
    }
}

function validatePhoneNumber(num) {
    var patern = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
    
    if (patern.test(num)) {
        errorphone.innerHTML = ""
        return true;
    } else {
        errorphone.innerHTML = "Phone number not found"
        return false;
    }
}

function validatepayment(payment){

    if(payment == ""){
        errorpayment.innerHTML = "Please select payment method";
        return false;
    }

    return true;


}


function ValidateDate(cidate, codate){
    if(cidate == ""){
        errordate.innerHTML = "Please input Check-in date";
        return false;
    }else if(codate == ""){
        errordate.innerHTML = "Please input Check-out date";
        return false;
    }
    errordate.innerHTML = ""; 
    return true;
}

