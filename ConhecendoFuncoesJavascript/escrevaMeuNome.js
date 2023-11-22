function escrevaMeuNome(nome){
    console.log('Meu nome é %s!', nome);
}
function verificaIdade(idade){
    if(idade >= 18){
        console.log("Maior de Idade!");
    }else{
        console.log("Menor de Idade!");
    }
}

(function main(){
    escrevaMeuNome('Guilherme');
    verificaIdade(14);
})();