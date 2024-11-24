
const form = document.getElementById("form");
const username= document.getElementById("username");
const email = document.getElementById("email");
const password= document.getElementById("password");
const passwordconfirmation = document.getElementById("passwordconfirmation");

form.addEventListener ("submit", (event ) => {
    event.preventDefault();

    checkForm();
})

email.addEventListener ("blur", (event)=> {
    event.checkInputemail();
})

username.addEventListener ("blur", (event)=> {
    event.checkInputUsername();
})



function checkInputUsername (){
    const usernameValue = username.Value;

    if(usernameValue === "") {
    errorInput (username,"preencha um username")
    }else{
    const formItem = username.parentElement;
        formItem.className = "form-content"
    }

//mostrar o aviso e mostrar a mensagem de erro//
}

function checkInputemail(){
    const emailValue = email.Value;
    if(emailValue === "") {
    errorInput(email,"o email é obrigatório")
    }else{ 
    const formItem = email.parentElement;
    formItem.className = "form-content"
    }
}

function checkInputPasswordconfirmation(){
    const passwordValue = password.Value
    const confirmationPasswordValue = passwordconfirmation.Value
    
    if(confirmationPasswordValue === "") {
    errorInput(passwordconfirmation,"A confirmção de senha é obrigatória.")
    }else if(confirmationPasswordValue !== passwordValue) {
    errorInput(passwordconfirmation, " as senhas não são iguais")
    }else{
    const formItem = passwordconfirmation.parentElement;
    formItem.className = "form-content"
    }

}

function checkForm() {

    checkInputUsername();
    checkInputemail();
    checkInputPassword();
    checkInputPasswordconfirmation();

    const FormItems = form.querySelectorAll ("form-content")

    const isValid = [... FormItems] .every( (item) => {
    return item.className === "form-content"
});

    if(isValid){
    alert("cadastrado com sucesso")
}

}

function errorInput (input, message) {
    const formItem = input.parentElement;
    const  textMessage = formItem.querySelector("a")

    textMessage.ineerText = message

    formItem.className = "form-content error"

}







