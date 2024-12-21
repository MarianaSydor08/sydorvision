/*document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("test-form");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        

        // Збираємо відповіді з усіх 20 питань
        const answers = {};
        for (let i = 1; i <= 20; i++) {
            const answer = document.querySelector(`input[name="q${i}"]:checked`);
            if (answer) {
                answers[`q${i}`] = answer.value;
            }
        }

        // Перевірка: чи всі питання заповнені
        for (let i = 1; i <= 20; i++) {
            if (!answers[`q${i}`]) {
                alert(`Будь ласка, дайте відповідь на запитання ${i}.`);
                return;
            }
        }

*/
        
 /*     

        // Логіка для обчислення ризику
        // Задаємо ваги для кожного питання:
        if (answers.q1 === "19-45") riskScore += 0.2;
        if (answers.q1 === "18") riskScore += 0.1;
        if (answers.q1 === "46+") riskScore += 0.4;

        if (answers.q2 === "yes") riskScore += 0.3;
        if (answers.q2 === "sometimes") riskScore += 0.2;

        if (answers.q3 === "yes") riskScore += 0.4;
        if (answers.q3 === "sometimes") riskScore += 0.2;


        if (answers.q4 === "yes") riskScore += 0.5;
        if (answers.q4 === "sometimes") riskScore += 0.25;

        if (answers.q5 === "yes") riskScore += 0.5;
        if (answers.q5 === "sometimes") riskScore += 0.3;

        if (answers.q6 === "yes") riskScore += 0.4;
        if (answers.q6 === "sometimes") riskScore += 0.2;

        if (answers.q7 === "yes") riskScore += 0.5;
        if (answers.q7 === "sometimes") riskScore += 0.3;

        if (answers.q8 === "yes") riskScore += 0.4;
        if (answers.q8 === "sometimes") riskScore += 0.2;

        if (answers.q9 === "yes") riskScore += 0.6;
        if (answers.q9 === "sometimes") riskScore += 0.3;

        if (answers.q10 === "yes") riskScore += 0.5;
        if (answers.q10 === "sometimes") riskScore += 0.3;

        if (answers.q11 === "yes") riskScore += 0.4;
        if (answers.q11 === "sometimes") riskScore += 0.2;

        if (answers.q12 === "yes") riskScore += 0.6;
        if (answers.q12 === "sometimes") riskScore += 0.3;

        if (answers.q13 === "yes") riskScore += 0.5;
        if (answers.q13 === "sometimes") riskScore += 0.25;

        if (answers.q14 === "yes") riskScore += 0.5;
        if (answers.q14 === "sometimes") riskScore += 0.2;

        if (answers.q15 === "yes") riskScore += 0.5;
        if (answers.q15 === "sometimes") riskScore += 0.25;

        if (answers.q16 === "yes") riskScore += 0.4;
        if (answers.q16 === "sometimes") riskScore += 0.2;

        if (answers.q17 === "yes") riskScore += 0.5;
        if (answers.q17 === "sometimes") riskScore += 0.3;

        if (answers.q18 === "yes") riskScore += 0.5;
        if (answers.q18 === "sometimes") riskScore += 0.3;

        if (answers.q19 === "yes") riskScore += 0.1;
        if (answers.q19 === "nop") riskScore += 0.4;
        if (answers.q19 === "sometimes") riskScore += 0.2;

        if (answers.q20 === "yes") riskScore += 0.5;
        if (answers.q20 === "sometimes") riskScore += 0.2;


        for (let i = 1; i <= 20; i++) {
            if (answers[`q${i}`] === "no") riskScore += 0; // "Ні" не додає балів
        }

        let riskScore = 0;



        // Обмежуємо ризик до 1
        riskScore = Math.min(riskScore, 1);

*/

//то перший варіант - теж працює



/*

        // Логіка для обчислення ризику
        let riskScore = 0;

        // Задаємо ваги для кожного питання та відповідей
        const weights = {
            q1: { "19-45": 0.2, "18": 0.1, "46+": 0.4 },
            q2: { yes: 0.3, sometimes: 0.2 },
            q3: { yes: 0.4, sometimes: 0.2 },
            q4: { yes: 0.5, sometimes: 0.25 },
            q5: { yes: 0.5, sometimes: 0.3 },
            q6: { yes: 0.4, sometimes: 0.2 },
            q7: { yes: 0.5, sometimes: 0.3 },
            q8: { yes: 0.4, sometimes: 0.2 },
            q9: { yes: 0.6, sometimes: 0.3 },
            q10: { yes: 0.5, sometimes: 0.3 },
            q11: { yes: 0.4, sometimes: 0.2 },
            q12: { yes: 0.6, sometimes: 0.3 },
            q13: { yes: 0.5, sometimes: 0.25 },
            q14: { yes: 0.5, sometimes: 0.2 },
            q15: { yes: 0.5, sometimes: 0.25 },
            q16: { yes: 0.4, sometimes: 0.2 },
            q17: { yes: 0.5, sometimes: 0.3 },
            q18: { yes: 0.5, sometimes: 0.3 },
            q19: { yes: 0.1, nop: 0.4, sometimes: 0.2 },
            q20: { yes: 0.5, sometimes: 0.2 },
        };

        // Обчислення ризику за відповідями
        for (let i = 1; i <= 20; i++) {
            const question = `q${i}`;
            const answer = answers[question]; // Відповідь на конкретне питання
            if (weights[question][answer]) {
                riskScore += weights[question][answer];
            }
        }

        // Обмеження ризику до 1
        riskScore = Math.min(riskScore, 1);


        /*то був другий варіант - точно працює*/



/*

        // Визначення статусу та рекомендації
        let status = "";
        let recommendation = "";

        if (riskScore >= 0.8) {
            status = "Серйозний ризик";
            recommendation = "Терміново зверніться до лікаря для консультації та обстеження.";
        } else if (riskScore >= 0.3) {
            status = "Помірний ризик";
            recommendation = "Рекомендовано звернутися на консультацію до лікаря.";
        } else {
            status = "Низький ризик";
            recommendation = "Ваш стан не викликає занепокоєння, але консультація буде корисною.";
        }

        // Збереження результатів у localStorage
        const result = { riskScore, status, recommendation };
        localStorage.setItem("patientResult", JSON.stringify(result));

        // Переадресація на сторінку результатів
        window.location.href = "index_recommend.html";
    });
});



*/


















class Recommendation {
    constructor(riskScore) {
        this.riskScore = riskScore;
    }

    getStatusAndRecommendation() {
        let status = "";
        let recommendation = "";

        if (this.riskScore >= 0.8) {
            status = "Серйозний ризик";
            recommendation = "Терміново зверніться до лікаря для консультації та обстеження.";
        } else if (this.riskScore >= 0.3) {
            status = "Помірний ризик";
            recommendation = "Рекомендовано звернутися на консультацію до лікаря.";
        } else {
            status = "Низький ризик";
            recommendation = "Ваш стан не викликає занепокоєння, але консультація буде корисною.";
        }

        return { status, recommendation };
    }
}

document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("test-form");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        // Збираємо відповіді з усіх 20 питань
        const answers = {};
        for (let i = 1; i <= 20; i++) {
            const answer = document.querySelector(`input[name="q${i}"]:checked`);
            if (answer) {
                answers[`q${i}`] = answer.value;
            }
        }

        // Перевірка: чи всі питання заповнені
        for (let i = 1; i <= 20; i++) {
            if (!answers[`q${i}`]) {
                alert(`Будь ласка, дайте відповідь на запитання ${i}.`);
                return;
            }
        }

        // Логіка для обчислення ризику
        let riskScore = 0;

        // Задаємо ваги для кожного питання та відповідей
        const weights = {
            q1: { "19-45": 0.2, "18": 0.1, "46+": 0.4 },
            q2: { yes: 0.3, sometimes: 0.2 },
            q3: { yes: 0.4, sometimes: 0.2 },
            q4: { yes: 0.5, sometimes: 0.25 },
            q5: { yes: 0.5, sometimes: 0.3 },
            q6: { yes: 0.4, sometimes: 0.2 },
            q7: { yes: 0.5, sometimes: 0.3 },
            q8: { yes: 0.4, sometimes: 0.2 },
            q9: { yes: 0.6, sometimes: 0.3 },
            q10: { yes: 0.5, sometimes: 0.3 },
            q11: { yes: 0.4, sometimes: 0.2 },
            q12: { yes: 0.6, sometimes: 0.3 },
            q13: { yes: 0.5, sometimes: 0.25 },
            q14: { yes: 0.5, sometimes: 0.2 },
            q15: { yes: 0.5, sometimes: 0.25 },
            q16: { yes: 0.4, sometimes: 0.2 },
            q17: { yes: 0.5, sometimes: 0.3 },
            q18: { yes: 0.5, sometimes: 0.3 },
            q19: { yes: 0.1, nop: 0.4, sometimes: 0.2 },
            q20: { yes: 0.5, sometimes: 0.2 },
        };

        // Обчислення ризику за відповідями
        for (let i = 1; i <= 20; i++) {
            const question = `q${i}`;
            const answer = answers[question]; // Відповідь на конкретне питання
            if (weights[question][answer]) {
                riskScore += weights[question][answer];
            }
        }

        // Обмеження ризику до 1
        riskScore = Math.min(riskScore, 1);

        // Створення екземпляра класу Recommendation
        const recommendationInstance = new Recommendation(riskScore);
        const { status, recommendation } = recommendationInstance.getStatusAndRecommendation();

        // Створюємо об'єкт для збереження
        const testData = {
            date: new Date().toISOString(),
            answers: answers,
            riskScore: riskScore,
            status: status,
            recommendation: recommendation
        };

         // Зберігаємо дані в localStorage
         let patientTests = JSON.parse(localStorage.getItem("patientTests")) || [];
         patientTests.push(testData);
         localStorage.setItem("patientTests", JSON.stringify(patientTests));
 
         // Виводимо збережені дані в консоль
         console.log("Дані тесту збережено:", testData);
         console.log("Усі тести пацієнта:", patientTests);
 
         // Передаємо дані в sessionStorage для відображення на сторінці рекомендації
         sessionStorage.setItem("currentTestResult", JSON.stringify(testData));

        // Повідомлення про успішне збереження
        alert("Ваші відповіді збережено. Можете перейти до кабінету для перегляду результатів.");

        // Переадресація на сторінку рекомендації
        window.location.href = "index_recommend.html";

        // Очистка форми (опціонально)
        //form.reset();
    });
});
