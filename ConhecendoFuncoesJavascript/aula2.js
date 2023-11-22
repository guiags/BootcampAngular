function calcImc(peso, altura){
    imprimeImc(peso /Math.pow(altura, 2));
    return 0;
}
function imprimeImc(IMC){
    if(IMC < 18.5){
        console.log("Abaixo do Peso!");
    }else if(IMC >= 18.5 && IMC < 25){
        console.log("Peso Normal!");
    }else if(IMC >= 25 && IMC < 30){
        console.log("Acima do Peso!");
    }else if(IMC >= 30 && IMC < 40){
        console.log("Obeso!");
    }else if(IMC >= 40){
        console.log("Obesidade Grave!");
    }
}

(function main(){
    let peso = 76;
    let altura = 1.74;
    calcImc(peso, altura);

})();

