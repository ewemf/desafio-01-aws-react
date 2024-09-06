/*busca os dados guardados no localStorage da outra página para utilizar e mostrar na tela*/

document.addEventListener('DOMContentLoaded', function() {
    const userData = JSON.parse(localStorage.getItem('infoUsuario'));
    const censoredPassword = '•'.repeat((userData.password).length); /*coloquei para a senha ficar censurada*/

    if (userData) {
        document.getElementById('info-usuario').innerHTML = `
            <p>Name: ${userData.name}</p>
            <p>Email: ${userData.email}</p>
            <p>Password: ${censoredPassword}</p>
        `;
    } else {
        document.getElementById('info-usuario').innerHTML = '<p>No user data found.</p>'; /*caso não tenha registro de nenhum usuário*/
    }
});