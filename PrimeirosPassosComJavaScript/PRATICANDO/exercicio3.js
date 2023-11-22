let precoEtiqueta = 100;
//let condicaoPagamento = 'A vista debito';
//let condicaoPagamento = 'A vista no dinheiro ou PIX';
//let condicaoPagamento = 'Em duas vezes';
let condicaoPagamento = 'Acima de duas vezes';

let precoVenda = 0;

if(condicaoPagamento === 'A vista debito'){
    precoVenda = precoEtiqueta - (precoEtiqueta*0.1);
    console.log(precoVenda);
}else if(condicaoPagamento === 'A vista no dinheiro ou PIX'){
    precoVenda = precoEtiqueta - (precoEtiqueta*0.15);
    console.log(precoVenda);
}else if(condicaoPagamento === 'Em duas vezes'){
    precoVenda = precoEtiqueta;
    console.log(precoVenda);
}else if(condicaoPagamento === 'Acima de duas vezes'){
    precoVenda = precoEtiqueta + (precoEtiqueta*0.1);
    console.log(precoVenda);
}
//https://github.com/digitalinnovationone/javascript-developer-m1
