document.getElementById('formulario').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    if (password !== confirmPassword) {
        alert('Passwords do not match!');
        return;
    } else{
        window.location.href = 'tela7-usuario.html';
    }

    const userData = {
        name: name,
        email: email,
        password: password
    };

    localStorage.setItem('userData', JSON.stringify(userData));
});
