function TextoNaTela (tag, texto)
{
    let Escritura = document.querySelector (tag);
    Escritura.innerHTML = texto;
    responsiveVoice.speak (texto, "Portuguese Female", {rate: 1.2});
}

function LimparChute() 
 {
   let Chute = document.querySelector (`input`);  
   Chute.value = ""
 }

function TextoInicial() 
{
  TextoNaTela (`h1`, `Jogo do número secreto`);
  TextoNaTela (`p`, `Escolha um número de 1 a 30`);
}

let ListaNumerosGerados = [];

function GerarNumeroAleatorio ()
{
    let LimparListadeNumerosGerados = ListaNumerosGerados.length
   if (LimparListadeNumerosGerados == 3) {ListaNumerosGerados = []}
    let AleatorioGerado = parseInt(Math.random () * 50 + 1)
   if (ListaNumerosGerados.includes (AleatorioGerado)) {return GerarNumeroAleatorio ()}
   else {ListaNumerosGerados.push (AleatorioGerado); console.log (ListaNumerosGerados); return AleatorioGerado}

}
TextoInicial()

let NumeroSecreto = GerarNumeroAleatorio ();
let tentativas = 0;
console.log (NumeroSecreto);

function ApertarChute()
 {
    console.log (`O botão Chute foi apertado`);
    let Chute = document.querySelector (`input`).value;
    tentativas ++;
    console.log (tentativas);
    console.log (Chute == NumeroSecreto);
    let palavratentativas = tentativas == 1 ? "tentativa" : "tentativas"; 
    
    if (Chute == NumeroSecreto) 
    {
      TextoNaTela (`h1`, `Parabéns`);
      TextoNaTela (`p`, `Você acertou o número secreto com ${tentativas} ${palavratentativas}`);
      document.getElementById ("reiniciar") .removeAttribute (`disabled`);
    } 
   if (Chute > NumeroSecreto) 
    {
      TextoNaTela (`h1`, `Ainda não, tente novamente!`);
      TextoNaTela (`p`, `O número secreto é menor que o número ${Chute}`);
    }
    if (Chute < NumeroSecreto) 
    {
      TextoNaTela (`h1`, `Ainda não, tente novamente!`);
      TextoNaTela (`p`, `O número secreto é maior que o número ${Chute}`); 
   }
   LimparChute ();
 }

function ReinicioJogo ()
{
   console.log ("O botão Reinicio foi apertado");
   TextoInicial()
   NumeroSecreto = GerarNumeroAleatorio ();
   LimparChute ();
   tentativas = 0;
   console.log (NumeroSecreto);
  document.getElementById ("reiniciar") .setAttribute (`disabled`, true);
}