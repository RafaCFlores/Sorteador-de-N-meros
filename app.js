
// SORTEADOR DE NÚMEROS VERSÃO 3


function sortear() {

            let quantidade = parseInt(document.getElementById('quantidade').value);
            let de = parseInt(document.getElementById('de').value);
            let ate = parseInt(document.getElementById('ate').value);

            let sorteados = [];
            let numero = 0;

            if (quantidade < (ate - de)) {

                        for (let i = 0 ; i < quantidade ; i++) {

                            numero = obterNumeroAleat(de, ate);

                                    while (sorteados.includes(numero)) {
                                    numero = obterNumeroAleat(de, ate);
                                    };

                                    sorteados.push(numero);


                                };
                                   
                                let resultados = document.getElementById('resultado');
                                resultados.innerHTML =  `<label class="texto__paragrafo">Números sorteados:  ${sorteados}</label>`;

                        } else {

                                let resultados = document.getElementById('resultado');
                                resultados.innerHTML =  `<label class="texto__paragrafo">A quantidade é maior do que o intervalo solicitado.</label>`;


            };



            let botao1 = document.getElementById('btn-reiniciar');
            alterarStatusBotão(botao1);

            let botao2 = document.getElementById('btn-sortear');
            alterarStatusBotão(botao2);

};


function obterNumeroAleat(min, max) {

return Math.floor(Math.random() * (max - min +1)) + min;

};


function alterarStatusBotão(botao) {


if (botao.classList.contains('container__botao-desabilitado')) {

        botao.classList.remove('container__botao-desabilitado');
        botao.classList.add('container__botao');

} else {

        botao.classList.add('container__botao-desabilitado');

};

};


function reiniciar() {

    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';

    document.getElementById('resultado').innerHTML =  `<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>`;

    let botao1 = document.getElementById('btn-reiniciar');
    alterarStatusBotão(botao1);
    
    let botao2 = document.getElementById('btn-sortear');
    alterarStatusBotão(botao2);

};




