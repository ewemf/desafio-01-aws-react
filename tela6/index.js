/*usei o localStorage para salvar os dados de registro do usuário*/

document.getElementById('formulario').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    if (password !== confirmPassword) { /*feito para caso escreva a senha diferente uma da outra continuar na mesma página até acertar*/
        alert('Passwords do not match!');
        return;
    }

    const infoUsuario = {
        name: name,
        email: email,
        password: password
    };

    localStorage.setItem('infoUsuario', JSON.stringify(infoUsuario)); /*guardando no infoUsuario*/

    window.location.href = 'tela7-usuario.html'; /*depois ir para a tela 7*/
});