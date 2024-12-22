// Отримання елементів форми
const loginForm = document.querySelector('.register-form');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');

// Клас для збереження інформації про пацієнта
class Patient {
    constructor(firstName, lastName, email, password) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
    }
}

// Обробник події для форми авторизації
loginForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Заборонити перезавантаження сторінки

    // Зчитування введених даних
    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

    // Перевірка на заповнення полів
    if (!email || !password) {
        alert('Будь ласка, заповніть усі поля.');
        return;
    }

    // Отримання списку зареєстрованих користувачів із localStorage
    const storedPatients = JSON.parse(localStorage.getItem('patients')) || [];

    // Перевірка відповідності облікових даних
    const matchedPatient = storedPatients.find(
        (patient) => patient.email === email && patient.password === password
    );

    if (matchedPatient) {
        alert(`Ласкаво просимо, ${matchedPatient.firstName}!`);
        // Перенаправлення на головну сторінку
        window.location.href = 'index.html';
    } else {
        alert('Неправильний email або пароль. Спробуйте ще раз.');
    }
});
