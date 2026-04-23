# ⚔️ Classificador de Nível de Herói

Um projeto simples em **JavaScript** para classificar o nível de um herói com base na sua quantidade de Experiência (XP). Este desafio foi desenvolvido para praticar conceitos fundamentais de programação, como variáveis, operadores lógicos e estruturas de decisão.

---

## 📋 Sobre o Projeto

O objetivo do código é receber o nome e a quantidade de XP de um herói e, através de uma estrutura de decisão (`if...else if`), determinar em qual categoria ele se encontra. Ao final, o sistema exibe uma mensagem personalizada com o nome e o ranque conquistado.

---

## 🛠️ Tecnologias Utilizadas

* **JavaScript:** Lógica de programação e estruturas de controle.

---

## 📊 Regras de Classificação

A lógica do sistema obedece a seguinte tabela de níveis de acordo com a experiência acumulada:

| Quantidade de XP | Nível do Herói |
| :--- | :--- |
| Menor que 1.000 | Ferro |
| Entre 1.001 e 2.000 | Bronze |
| Entre 2.001 e 5.000 | Prata |
| Entre 5.001 e 7.000 | Ouro |
| Entre 7.001 e 8.000 | Platina |
| Entre 8.001 e 9.000 | Ascendente |
| Entre 9.001 e 10.000 | Imortal |
| Maior ou igual a 10.001 | Radiante |

---

## 💻 Exemplo de Código

```javascript
// Declarando o nome e XP do herói
let heroi = "Alan";
let xp_heroi = 8600;
let nivel = "";

// Estruturas de decisão para definir o nível
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

// Saída no console
console.log("O Herói de nome **" + heroi + "** está no nível **" + nivel + "**.");
