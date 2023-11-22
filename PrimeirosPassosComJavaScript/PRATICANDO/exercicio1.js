let nota1 = 7;
let nota2 = 6;
let nota3 = 8;


let mediaNotas = (nota1 + nota2 + nota3) / 3;
console.log("Média: " + mediaNotas);


if(mediaNotas > 7 ){
    console.log("Passou de Semestre!");
}else if(mediaNotas <= 7 && mediaNotas>= 5){
    console.log("Recuperação!");
}else if(mediaNotas < 5){
    console.log("Reprovado!");
}else{
    console.log("Notas Inválidas!");
}

//https://github.com/digitalinnovationone/javascript-developer-m1
