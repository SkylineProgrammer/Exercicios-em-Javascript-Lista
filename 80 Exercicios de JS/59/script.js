let contadora, idade, nome, somaDeIdades, mediaIdades;

somaDeIdades = 0;
contadora = 1;

 do{
  nome = prompt("Insira nome da " + contadora + "° pessoa:");
  idade = parseInt(
    prompt(nome + " registrada. Agora, por favor insira sua idade:")
  );
  somaDeIdades = somaDeIdades + idade;
  contadora++;
}while (contadora <= 5)

mediaIdades = somaDeIdades / (contadora-1);
alert("A média das 5 idades inseridas é igual a:" + mediaIdades);