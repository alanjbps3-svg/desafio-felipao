//começo do desafio

//declarando a variável para armazenar o nome do personagem
let heroi = "Alan";
//declarando a variável para armazenar o xp do personagem
let xp_heroi = 8600
let nivel = ""

//Estruturas de decisão
if (xp_heroi < 1000) {
    nivel = "Ferro";
} else if (xp_heroi >= 1001 && xp_heroi <= 2000) {
    nivel = "Bronze";
} else if (xp_heroi >= 2001 && xp_heroi <= 5000) {
    nivel = "Prata";
} else if (xp_heroi >= 5001 && xp_heroi <= 7000) {
    nivel = "Ouro";
} else if (xp_heroi >= 7001 && xp_heroi <= 8000) {
    nivel = "Platina";
} else if (xp_heroi >= 8001 && xp_heroi <= 9000) {
    nivel = "Ascendente";
} else if (xp_heroi >= 9001 && xp_heroi <= 10000) {
    nivel = "Imortal";
} else if (xp_heroi >= 10001) {
    nivel = "Radiante";
}


//Mensagem final
console.log("O Herói de nome **"+ heroi+"** está no nível **"+ nivel +"**.");
