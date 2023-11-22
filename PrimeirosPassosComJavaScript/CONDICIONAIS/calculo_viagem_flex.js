let precoGasolina= 5.60;
let precoEtanol= 3.98;
let tipoCombustivelUsado = 'Gasolina';
let distanciaEmKm = 100;
let autonomiaMediaKm = 10;

isGasolina = tipoCombustivelUsado === 'Gasolina';

if(isGasolina){
    gastoGasolina = (distanciaEmKm/autonomiaMediaKm) * precoGasolina;
    console.log("O gasto em gasolina foi de %d R$!", gastoGasolina.toFixed(2));
}else{
    gastoEtanol = (distanciaEmKm/autonomiaMediaKm) * precoEtanol;
    console.log("O gasto em etanol foi de %d R$!", gastoEtanol.toFixed(2));
}
