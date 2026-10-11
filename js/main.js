document.addEventListener('DOMContentLoaded', () => {
    'use strict';

    
    const forms = document.querySelectorAll('.needs-validation');

    Array.from(forms).forEach(form => {
        form.addEventListener('submit', event => {
            
            
            const password = form.querySelector('#password');
            const confirmPassword = form.querySelector('#confirmPassword');

            if (password && confirmPassword) {
                if (password.value !== confirmPassword.value) {
                    confirmPassword.setCustomValidity("Пароли не совпадают");
                } else {
                    confirmPassword.setCustomValidity(""); 
                }
            }

            
            if (!form.checkValidity()) {
                event.preventDefault();
                event.stopPropagation();
            }

            
            form.classList.add('was-validated');
        }, false);
    });
});