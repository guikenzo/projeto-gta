// Obejtivo 1 - quando o usuário clicar no botão de seleção de plataforma deve abrir uma caixa com os botões de seleção de plataforma
//         Passo 1 - pegar o botão de seleção de plataforma no JS para poder verificar quando o usuário clicar em cima dele

//         Passo 2 - Pegar o elemento do conteúdo que precisa ser mostrado

//          Passo 3 - Pegar o clique do usuário no js

//          Passo 4 - Quando o usuário clicar, adicionar a classe ativo na listagem de plataformas dentro do botão para que o conteúdo dele apareça

// Obejtivo 2 - caso a lista de botões de plataformas já esteja aparecendo e o usuário clcicar no botão de fechar, o conteúdo deve ser escondido.
//         Passo 1 - verificar se o botão ja foi ativado pelo usuário, se sim, devemos remover a classe ativo para que ele esconda o conteúdo novamente        

// console.log(document); // mostrando o document no console da pagina(F12)

const botao = document.querySelector(".btn-plataforma"); // Buscando o seletor no html ".btn-plataforma"

const elementoPlataformas = document.querySelector(".btn-plataforma .plataformas");

// -------------------------------------------------------- 1° Metodo de fazer --------------------------------------------------------------
/*let botaoAtivado = 0;

function aparecerPlataformas(){
    elementoPlataformas.classList.add("ativo");
}

function desaparecerPlataformas(){
    elementoPlataformas.classList.remove("ativo");
}

function desaparecerOuAparecer(){
    if(botaoAtivado === 0){
        aparecerPlataformas();
        botaoAtivado = 1;
    }
    else{
        desaparecerPlataformas();
        botaoAtivado = 0;
    }
}
botao.addEventListener("click", desaparecerOuAparecer);*/

//---------------------------------------------------------- 2° Método de fazer -------------------------------------------------------------

/*botao.addEventListener('click', () => {
  // console.log(" O botao foi ativado");

  const botaoEstaAberto = elementoPlataformas.classList.contains("ativo");

   if(botaoEstaAberto){
     elementoPlataformas.classList.remove("ativo");
   }
   else{
     elementoPlataformas.classList.add("ativo");
   }
});*/

//---------------------------------------------------------- 3° método de fazer ---------------------------------------------------------------
botao.addEventListener("click",()=>{
    elementoPlataformas.classList.toggle("ativo"); //Alternando a classe = toggle.
})