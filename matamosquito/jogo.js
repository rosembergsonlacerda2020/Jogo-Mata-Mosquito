var altura = 0
var largura = 0
var vidas = 1
var tempo = 20
var nivel = window.location.href
var criaTempomosca = 1500
nivel = nivel.replace('?', '')


if(nivel === 'facil'){
    criaTempomosca = 1500
}
else if(nivel === 'medio'){
    criaTempomosca = 1000
}

else if(nivel === 'dificil'){
    criaTempomosca = 750
}
function ajustaPalcoJogo(){
    altura = window.innerHeight
    largura = window.innerWidth
}
ajustaPalcoJogo();


var cronometro = setInterval(function(){
    tempo-=1;
    if(tempo < 0){
        window.location.href = 'vitoria.html'
    }else{
        document.getElementById('crono').innerHTML = tempo
    }
},1000)

function tamanhoAleatorio(){
    var classMosca = Math.floor(Math.random() * 3)

    switch(classMosca){
        case 0:
            return 'mosquito1'
        case 1:
            return 'mosquito2'
        case 2:
            return 'mosquito3'
    }

}
function posicaoRandomica(){
    
    if(document.getElementById('mosquitoid')){
        document.getElementById('mosquitoid').remove();
        if(vidas > 3){
            window.location.href = 'fimdejogo.html'
        }else{
            document.getElementById('v' + vidas).src = "./imagens/coracao_vazio.png"
            vidas++
        }
    }

    var positionX = Math.floor(Math.random() * largura) - 90
    var positionY = Math.floor(Math.random() * altura) - 90

    positionX = positionX < 0 ? 0 : positionX
    positionY = positionY < 0 ? 0 : positionY
    var imagem = document.createElement('img')

    imagem.src = 'imagens/mosca.png'
    imagem.className = tamanhoAleatorio() + ' ' + ladoAleatorio()
    imagem.style.left = positionX +'px'
    imagem.style.top = positionY + 'px'
    imagem.style.position = 'absolute'
    imagem.id = 'mosquitoid'
    imagem.onclick = function (){
        this.remove()
    }
    document.body.appendChild(imagem)

    
    
}


function ladoAleatorio(){
    var classMosca = Math.floor(Math.random() * 2)

    switch(classMosca){
        case 0:
            return 'ladoA'
        case 1:
            return 'ladoB'
    }
}