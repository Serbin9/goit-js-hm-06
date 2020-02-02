// Получить пользоваля (не массив) по email (поле email, он уникальный).
`use strict`;
import users from "./users.js"

const getUserWithEmail = (users, email) => {
    return users.find(user =>user.email === email);
  // твой код
};

console.log(getUserWithEmail(users, 'shereeanthony@kog.com')); // {объект пользователя Sheree Anthony}
console.log(getUserWithEmail(users, 'elmahead@omatom.com')); // {объект пользователя Elma Head}