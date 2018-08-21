let numero = 26;

let chute;
chute = prompt('chute um número');
while (chute !== numero) {

    chute = prompt('chute um número');
    if (chute == numero) { alert("numero certo") }
    if(chute < numero){ alert("chute menor") }
    if(chute > numero){ alert("chute maior") }

}

alert("acertou")
