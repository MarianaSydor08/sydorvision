
// Отримання елементів форми
const registerForm = document.querySelector('.register-form');
const firstNameInput = document.getElementById('first-name');
const lastNameInput = document.getElementById('last-name');
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

// Функція збереження користувача у localStorage
function savePatientToLocalStorage(patient) {
    const patients = JSON.parse(localStorage.getItem('patients')) || []; // Отримуємо існуючих користувачів
    patients.push(patient); // Додаємо нового користувача
    localStorage.setItem('patients', JSON.stringify(patients)); // Зберігаємо назад у localStorage
}

// Обробник події відправлення форми
registerForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Заборонити перезавантаження сторінки

    // Зчитування введених даних
    const firstName = firstNameInput.value.trim();
    const lastName = lastNameInput.value.trim();
    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

    // Перевірка на заповнення полів
    if (!firstName || !lastName || !email || !password) {
        alert('Будь ласка, заповніть усі поля.');
        return;
    }

    // Створення нового пацієнта
    const newPatient = new Patient(firstName, lastName, email, password);
    
    // Збереження користувача у локальне сховище
    savePatientToLocalStorage(newPatient);

    // Логування в консоль для перевірки
    console.log('Зареєстровано нового пацієнта:', newPatient);

    // Очистити форму після успішної реєстрації
    registerForm.reset();

    // Показати повідомлення про успіх
    alert('Реєстрація успішна! Ласкаво просимо, ' + newPatient.firstName + '!');

    // Перенаправлення на головну сторінку
    window.location.href = 'index.html';
});



























/*// Отримання елементів форми
const registerForm = document.querySelector('.register-form');
const firstNameInput = document.getElementById('first-name');
const lastNameInput = document.getElementById('last-name');
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

// Обробник події відправлення форми
registerForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Заборонити перезавантаження сторінки

    // Зчитування введених даних
    const firstName = firstNameInput.value.trim();
    const lastName = lastNameInput.value.trim();
    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

    // Перевірка на заповнення полів
    if (!firstName || !lastName || !email || !password) {
        alert('Будь ласка, заповніть усі поля.');
        return;
    }

    // Створення нового пацієнта
    const newPatient = new Patient(firstName, lastName, email, password);
    
    // Логування в консоль для перевірки (можна замінити на API-запит)
    console.log('Зареєстровано нового пацієнта:', newPatient);

    // Очистити форму після успішної реєстрації
    registerForm.reset();

    // Показати повідомлення про успіх
    alert('Реєстрація успішна! Ласкаво просимо, ' + newPatient.firstName + '!');

    // Перенаправлення на головну сторінку
    window.location.href = 'index.html';
});
*/

/*




document.querySelector('.register-form').addEventListener('submit', async function (event) {
    event.preventDefault(); // Зупиняємо стандартну поведінку форми

    // Зчитування даних з полів форми
    const firstName = document.getElementById('first-name').value;
    const lastName = document.getElementById('last-name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Дані, які відправляються на сервер
    const userData = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
    };

    try {
        // Відправка API-запиту
        const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData),
        });

        // Перевірка статусу відповіді
        if (response.ok) {
            const result = await response.json();
            console.log('Дані успішно відправлено на сервер:', result);
            alert('Реєстрація успішна! Дані відправлено на сервер.');
        } else {
            console.error('Помилка при відправці:', response.statusText);
            alert('Сталася помилка. Спробуйте ще раз.');
        }
    } catch (error) {
        console.error('Помилка:', error);
        alert('Не вдалося підключитися до сервера.');
    }
});


*/



/*
// Додайте у script.js
function displayUsers() {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    console.log("Registered Users:", users);
}
displayUsers();*/