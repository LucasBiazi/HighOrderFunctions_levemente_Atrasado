const data = require("./data.json");
const pessoas_bla_bla_bla = data.map(user =>
    user.age * 2);
    pessoas_bla_bla_bla.filter(user =>
        user.age <= 50);
console.log(pessoas_bla_bla_bla);
