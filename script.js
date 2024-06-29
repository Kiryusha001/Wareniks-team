// Додаємо анімацію для кнопки пошуку
document.addEventListener('DOMContentLoaded', function() {
    var searchInput = document.getElementById('searchInput');

    searchInput.addEventListener('focus', function() {
        searchInput.style.transition = 'all 0.5s ease';
        searchInput.style.width = '300px'; // Збільшуємо ширину при фокусі
    });

    searchInput.addEventListener('blur', function() {
        searchInput.style.transition = 'all 0.5s ease';
        searchInput.style.width = '200px'; // Повертаємося до початкової ширини при втраті фокусу
    });
});
