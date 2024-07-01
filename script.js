// Додаємо анімацію для кнопки пошуку
document.addEventListener('DOMContentLoaded', function() {
    var searchInput = document.getElementById('searchInput');

    if (searchInput) {
        searchInput.addEventListener('focus', function() {
            searchInput.style.transition = 'all 0.5s ease';
            searchInput.style.width = '300px'; // Збільшуємо ширину при фокусі
        });

        searchInput.addEventListener('blur', function() {
            searchInput.style.transition = 'all 0.5s ease';
            searchInput.style.width = '200px'; // Повертаємося до початкової ширини при втраті фокусу
        });
    }

    var loginButton = document.getElementById('loginButton');

    if (loginButton) {
        loginButton.addEventListener('click', function() {
            var email = document.getElementById('emailInput').value;
            var password = document.getElementById('passwordInput').value;

            // Перевірка, чи введені значення (тут можна додати більше умов для перевірки)
            if (email && password) {
                // Перенаправлення на сторінку панелі управління
                window.location.href = 'dashboard.html';
            } else {
                alert('Please enter both email and password');
            }
        });
    }
});
