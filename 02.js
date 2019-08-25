const data = require("./data.json");

const mulheres_acima_dos_18 = data.filter(user => 
(user.gender.toLowerCase() === "female" && user.age  > 18 ));
console.log(mulheres_acima_dos_18);