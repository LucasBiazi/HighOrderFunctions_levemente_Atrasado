const data = require("./data.json");
const first_cara_do_vetor_que_mora_la = data.find(user =>
    user.address.city.toLowerCase() == "monroe");
console.log(first_cara_do_vetor_que_mora_la);