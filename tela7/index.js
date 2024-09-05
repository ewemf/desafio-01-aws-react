document.addEventListener('DOMContentLoaded', function() {
    const userData = JSON.parse(localStorage.getItem('infoUsuario'));
    const censoredPassword = '•'.repeat((userData.password).length);

    if (userData) {
        document.getElementById('info-usuario').innerHTML = `
            <p>Name: ${userData.name}</p>
            <p>Email: ${userData.email}</p>
            <p>Password: ${censoredPassword}</p>
        `;
    } else {
        document.getElementById('info-usuario').innerHTML = '<p>No user data found.</p>';
    }
});