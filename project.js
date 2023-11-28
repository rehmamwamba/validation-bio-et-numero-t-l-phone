function validateBio(){
    var bio = document.getElementById('bio').value;
    var errorMessage = document.getElementById('error-message');
        
    if(bio.length<3|| bio.length>250){
        errorMessage.innerHTML = "La bio doit contenir entre 3 et 250 caractères.";

        errorMessage.classList.add('error');
    }else{
        errorMessage.innerHTML = "";
        
        errorMessage.classList.remove('error');
        //faire autre chose si la bio est valide
    }
}
//num verification
function checkPhoneNumber(){


    var phone = document.getElementById("phone").value;

    if(/^(\|099|085|080|097|081|083|082|)\d{7}$/.test(phone)){
        document.getElementById("message").innerHTML = "";

    }else{
        document.getElementById("message").innerHTML = "Numéro de téléphone invalide";
    }

}
