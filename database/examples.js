// mathTasks.js

// Класс для задачи
class MathTask {
    /**
     * @param {string} question      - Текст задачи (например, "5 + 3 = ?")
     * @param {number} correctAnswer - Правильный ответ (например, 8)
     */
    constructor(question, correctAnswer) {
        this.question = question;
        this.correctAnswer = correctAnswer;
    }


}

// Примеры задач
const mathTasks = [
    new MathTask("5 + 3 = ?", 8),
    new MathTask("12 ÷ 4 = ?", 3),
    new MathTask("7 × 6 = ?", 42),
    new MathTask("15 - 7 = ?", 8),
    new MathTask("9 × 9 = ?", 81),
    new MathTask("4 × 2 = ?", 8),
    new MathTask("5 × 2 = ?", 10),
    new MathTask("10 ÷ 2 = ?", 5),
    new MathTask("18 ÷ 2 = ?", 9),
    new MathTask("7 × 2 = ?", 14),
    new MathTask("9 × 2 = ?", 18),
    new MathTask("8 × 2 = ?", 16),
    new MathTask("6 × 2 = ?", 12),
    new MathTask("20 ÷ 2 = ?", 10),
    new MathTask("14 ÷ 2 = ?", 7),
    new MathTask("3 × 2 = ?", 6),
    new MathTask("4 ÷ 2 = ?", 2),
    new MathTask("5 × 3 = ?", 15),
    new MathTask("8 × 3 = ?", 24),
    new MathTask("9 ÷ 3 = ?", 3),
    new MathTask("6 ÷ 3 = ?", 2),
    new MathTask("7 × 3 = ?", 21),
    new MathTask("12 ÷ 3 = ?", 4),
    new MathTask("15 ÷ 3 = ?", 5),
    new MathTask("18 ÷ 3 = ?", 6),
    new MathTask("9 × 3 = ?", 27),
    new MathTask("10 × 3 = ?", 30),
    new MathTask("4 × 3 = ?", 12),
    new MathTask("5 × 4 = ?", 20),
    new MathTask("36 ÷ 4 = ?", 9),
    new MathTask("8 × 4 = ?", 32),
    new MathTask("6 × 4 = ?", 24),
    new MathTask("28 ÷ 4 = ?", 7),
    new MathTask("16 ÷ 4 = ?", 4),
    new MathTask("7 × 4 = ?", 28),
    new MathTask("40 ÷ 4 = ?", 10),
    new MathTask("32 ÷ 4 = ?", 8),
    new MathTask("20 ÷ 4 = ?", 5),
    new MathTask("25 - 8 = ?", 17),
    new MathTask("42 - 19 = ?", 23),
    new MathTask("17 + 6 = ?", 23),
    new MathTask("35 ÷ 7 = ?", 5),
    new MathTask("8 × 5 = ?", 40),
    new MathTask("6 × 7 = ?", 42),
    new MathTask("72 ÷ 8 = ?", 9),
    new MathTask("90 - 45 = ?", 45),
    new MathTask("33 + 18 = ?", 51),
    new MathTask("49 - 21 = ?", 28),
    new MathTask("56 ÷ 7 = ?", 8),
    new MathTask("14 × 3 = ?", 42)
];

// Пример использования
mathTasks.forEach((task, index) => {
    console.log(`Задача ${index + 1}: ${task.question}`);
    console.log(`Правильный ответ: ${task.correctAnswer}`);
});


