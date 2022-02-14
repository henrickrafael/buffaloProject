
    function checkField(email, senha) {

        if(email == null || email.trim() === ''){
            return false;
        }
      
        else if(senha == null || senha.trim() === ''){
            return false;
        }
        
    }

    function blockBtn() {
        
        let inputEmail = document.getElementById("inputEmail").value;
        let inputSenha = document.getElementById("inputSenha").value;
        let inputBtn = document.getElementById("inputBtn");

        
        if(checkField(inputEmail, inputSenha) == false) {
            return inputBtn.setAttribute("disabled", true);
        } else {
            return inputBtn.removeAttribute("disabled");
        }

    }