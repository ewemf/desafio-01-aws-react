document.addEventListener('DOMContentLoaded', function() {
    const userData = JSON.parse(localStorage.getItem('userData'));

    if (userData) {
        document.getElementById('info-usuario').innerHTML = `
            <p>Name: ${userData.name}</p>
            <p>Email: ${userData.email}</p>
            <p>Password: ••••••••••••••</p>
        `;
    } else {
        document.getElementById('info-usuario').innerHTML = '<p>No user data found.</p>';
    }
});