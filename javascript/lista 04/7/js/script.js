const nome1 = prompt("Digite o nome da primeira pessoa:");
const idade1 = parseInt(prompt(`Digite a idade de ${nome1}:`));
const nome2 = prompt("Digite o nome da segunda pessoa:");
const idade2 = parseInt(prompt(`Digite a idade de ${nome2}:`));

if (idade1 > idade2) {
  alert(`${nome1} é a pessoa mais velha.`);
} else if (idade2 > idade1) {
  alert(`${nome2} é a pessoa mais velha.`);
} else {
  alert("As duas pessoas têm a mesma idade.");
}
