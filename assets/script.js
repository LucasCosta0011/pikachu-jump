const pikainicio = document.getElementById('pikainicio')
const pikachu = document.getElementById('pikachu')
const pokemon = document.getElementById('pokemon')
const bg = document.getElementById('bg')
const gameover = document.getElementById('gameover')
const iniciarbtn = document.getElementById('iniciar')
const reiniciar = document.getElementById('reiniciar')
const logo = document.getElementById('logo')
const mostraPlacar = document.getElementById('mostraPlacar')
const jumpBtn = document.getElementById('jumpbtn')
const pokebola = document.getElementById('pokeballCaptura')
const carregando = document.getElementById('carregando')
const telaInicial = document.getElementById('telaInicial')
let capturados = 0
let placar = document.getElementById('placar')
let iniciar = false
let capturado = false

// SONS
const music = document.getElementById('musica')
music.volume =0.02
const jumpSound = new Audio('assets/mp3/jump.mp3');
const capturaSound = new Audio('assets/mp3/captura.mp3');
capturaSound.playbackRate = 2
capturaSound.volume =0.05
jumpSound.volume =0.08
const gameoverSound = new Audio('assets/mp3/gameover.mp3');
const pikaInicio = new Audio('assets/mp3/pikachuInicio.mp3');
const pikaFim = new Audio('assets/mp3/pikachuFim.mp3');
const pikaBate = new Audio('assets/mp3/pikachuBate.mp3');

setInterval(()=>{
    carregando.style.display ='none'
    telaInicial.style.display ='flex'
},3000)

function iniciaJogo(){
    carregado = true
    iniciar = true
    capturados = 0
    gameover.style.display='none'
    music.play()
    iniciarbtn.style.display = 'none'
    pikainicio.style.display = 'none'
    mostraPlacar.style.display = 'block'
    pikachu.style.display = 'block'
    pokemon.style.display = 'block'
    logo.style = 'position:absolute; width:300px;top: 20px;left: 10px;'
}


const jump =()=>{
    pikachu.classList.add('jump')
    jumpSound.play()
    setTimeout(()=>{
        pikachu.classList.remove('jump')
    },1000)
}

const loop = setInterval(()=>{
    
if (iniciar){
const pokePosition = window.getComputedStyle(pokemon).left.replace('px','')
const pikaPosition = window.getComputedStyle(pikachu).bottom.replace('px','')

   


if (pokePosition <= 125 && pikaPosition < 50 && !capturado){
    pikaBate.play()
    setTimeout(()=>{pikaFim.play()},500)
    music.pause()
    gameoverSound.play()
    bg.style.animation = 'none'
    bg.style.left = '0'
    pokemon.style.animation = 'none'
    pokemon.style.left = '80px'
    pikachu.style.animation = 'none'
    pikachu.style.bottom = '0'
    pikachu.src = 'assets/img/pikaend.png'
    pikachu.style.width= '100px'
    gameover.classList.add('gameoveranimation')
    gameover.style.opacity='1'
    reiniciar.style.display='block'
    clearInterval(loop)
}

if ( pokePosition < 115 ){
    pokebola.style.display = 'block'
    capturaSound.play()
    void pokebola.offsetWidth;
    setTimeout(()=>{pokebola.style.display = 'none'},1000)
        
 }

if ( pokePosition < 0 ){
    capturado = true
    //pokebola.style.display = 'block'
    //capturaSound.play()
    pokemon.classList.remove('pokemon')
     capturados++
     placar.innerText = capturados;
     void pokemon.offsetWidth;
     
     pokemon.classList.add('pokemon')
     capturado = false
     //void pokebola.offsetWidth;
    setTimeout(()=>{pokebola.style.display = 'none'},1000)
    pokemon.src=`assets/img/pokemon/pokemon (${Math.floor(Math.random() * 151+1)}).gif` 
     
 }

}},1)




document.addEventListener('keydown', jump)
document.addEventListener('click', jump)