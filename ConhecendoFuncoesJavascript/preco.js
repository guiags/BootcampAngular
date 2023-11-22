function calculaDesconto(condicaoPagamento, precoEtiqueta){
    if(condicaoPagamento === 1){
        return precoEtiqueta-(precoEtiqueta*0.1);
    }else if(condicaoPagamento === 2){
        return precoEtiqueta-(precoEtiqueta*0.15);
    }else if(condicaoPagamento === 3){
        return precoEtiqueta;
    }else if(condicaoPagamento === 4){
        return precoEtiqueta+(precoEtiquetaprecoEtiqueta*0.1);
    }
}

(function main(){
    let precoEtiqueta = 100;
    let condicaoPagamento = 1;
    let precoVenda = calculaDesconto(condicaoPagamento, precoEtiqueta);

    console.log("O preço de venda é %d R$", precoVenda);
})();

//https://github.com/digitalinnovationone/javascript-developer-m1

