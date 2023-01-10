
document.addEventListener("DOMContentLoaded", function(){
    document.querySelector("form").addEventListener("submit", function(event){
        event.preventDefault();
        const form = event.target;
        console.log(form.username.value);
        console.log(form.email.value);
        console.log(form.password.value);
        const mobiNuma = Number.parseInt(form.mobile.value)
        // if(mobiNuma.toString() == NaN.toString()){
        //     alert("Please enter valid mobile number")
        // }
        // console.log(mobiNuma)
    });
    document.getElementById("email").addEventListener("input", function(event){
        const emailElement = event.target
        if(emailElement.validity.typeMismatch){
            emailElement.setCoustomValidity("please enter a valid email");
            emailElement.reportValidity();
        }
    })
    document.addEventListener("click", function(){

        console.log(document.getElementById("outside").value);
    });
});
































