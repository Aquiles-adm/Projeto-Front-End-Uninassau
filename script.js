document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("form"); // Formulário de cadastro
    const formComentario = document.getElementById("form-comentario"); // Formulário de comentário

    // Função para mostrar a mensagem de erro
    function showError(input, message) {
        const formContent = input.closest(".form-content");
        const errorMessage = formContent.querySelector(".error-message");
        errorMessage.textContent = message;
        formContent.classList.add("error");
    }

    // Função para limpar as mensagens de erro
    function clearError(input) {
        const formContent = input.closest(".form-content");
        const errorMessage = formContent.querySelector(".error-message");
        errorMessage.textContent = "";
        formContent.classList.remove("error");
    }

    // Função para validar o nome de usuário
    function validateUsername(username) {
        if (username.value.trim() === "") {
            showError(username, "O nome de usuário é obrigatório.");
            return false;
        }
        clearError(username);
        return true;
    }

    // Função para validar o email
    function validateEmail(email) {
        const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if (email.value.trim() === "") {
            showError(email, "O email é obrigatório.");
            return false;
        } else if (!regex.test(email.value)) {
            showError(email, "Por favor, insira um email válido.");
            return false;
        }
        clearError(email);
        return true;
    }

    // Função para validar a senha
    function validatePassword(password) {
        if (password.value.trim() === "") {
            showError(password, "A senha é obrigatória.");
            return false;
        } else if (password.value.length < 6) {
            showError(password, "A senha deve ter no mínimo 6 caracteres.");
            return false;
        }
        clearError(password);
        return true;
    }

    // Função para validar a confirmação de senha
    function validatePasswordConfirmation(passwordConfirmation, password) {
        if (passwordConfirmation.value.trim() === "") {
            showError(passwordConfirmation, "A confirmação de senha é obrigatória.");
            return false;
        } else if (passwordConfirmation.value !== password.value) {
            showError(passwordConfirmation, "As senhas não coincidem.");
            return false;
        }
        clearError(passwordConfirmation);
        return true;
    }

    // Validação do formulário de cadastro
    form.addEventListener("submit", function(event) {
        event.preventDefault();

        const username = document.getElementById("username");
        const email = document.getElementById("email");
        const password = document.getElementById("password");
        const passwordConfirmation = document.getElementById("password-confirmation");

        let isValid = true;

        isValid &= validateUsername(username);
        isValid &= validateEmail(email);
        isValid &= validatePassword(password);
        isValid &= validatePasswordConfirmation(passwordConfirmation, password);

        if (isValid) {
            form.submit(); // Envia o formulário se todas as validações passarem
        }
    });

    // Validação do formulário de comentário
    formComentario.addEventListener("submit", function(event) {
        event.preventDefault();

        const usernameComment = document.getElementById("username-comment");
        const comment = document.getElementById("comment");

        let isValid = true;

        if (usernameComment.value.trim() === "") {
            showError(usernameComment, "O nome de usuário é obrigatório.");
            isValid = false;
        } else {
            clearError(usernameComment);
        }

        if (comment.value.trim() === "") {
            showError(comment, "O comentário não pode ser vazio.");
            isValid = false;
        } else {
            clearError(comment);
        }

        if (isValid) {
            formComentario.submit(); // Envia o formulário de comentário se as validações passarem
        }
    });
});


class MobileNavbar {
    constructor(mobileMenuSelector, navListSelector, navLinkSelector) {
      this.mobileMenu = document.querySelector(mobileMenuSelector);
      this.navList = document.querySelector(navListSelector);
      this.navLinks = document.querySelectorAll(navLinkSelector);
      this.activeClass = "active";
  
      this.handleClick = this.handleClick.bind(this);
    }
  
    animateLinks() {
      this.navLinks.forEach((link, index) => {
        const delay = (index / 7) + 0.3; // Calculate delay based on index
  
        // Use a CSS class for animations (cleaner and reusable)
        link.classList.add('navLinkFade');
        link.style.animationDelay = `${delay}s`;
  
        // Optional: Remove animation after a duration (use CSS transitions instead)
        setTimeout(() => {
          link.classList.remove('navLinkFade');
        }, 500); // Adjust duration as needed
      });
    }
  
    handleClick() {
      this.navList.classList.toggle(this.activeClass);
      this.mobileMenu.classList.toggle(this.activeClass);
      this.animateLinks();
    }
  
    addClickEvent() {
      this.mobileMenu.addEventListener('click', this.handleClick);
    }
  
    init() {
      if (this.mobileMenu) {
        this.addClickEvent();
      }
      return this;
    }
  }
  
  // Usage
  const mobileNavbar = new MobileNavbar('.mobile-menu', '.nav-list', '.nav-list li');
  mobileNavbar.init();
