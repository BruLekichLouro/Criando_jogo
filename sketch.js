let obstaculo_cor="purple";
let obstaculo_largura=50;
let obstaculo_velocidade=-8;
let obstaculo_tempo_de_vida=300;
let grupoObstaculos;

let gameOver = false;//var para verificar se o jogo está finalizado

let passaro; //var para armazenar sprite de passsaro

function setup(){
    //fiunção chamada ao iniciar a execução do código;

    createCanvas(1000, 600);

    //Criar sprite passaro e definir cor:
    passaro=creatSprite(50,50,20,20)
    passaro.shapeColor= "yellow";

    //Cria grupo de obstáculos e configure colisao do pássaro com eles
    grupoObstaculos= new Group();
    passaro.collide(grupoObstaculos);
}

function Draw(){
    //função chamada a cada frame(quadro)

    background(220);//Limpa o pano de fundo e define sua cor
    if(gameOver==false){
        passaro.velocityY=passaro.velocityY+0.5

        //Faz pássaro pular ao apertar a tecla espaço:
        if(keyDown("space")){
            passaro.velocityY=-10;
        }
        if(passaro.y>height){
            gameOver=true;
        }
        if(passaro.y<0){
            gameOver=true;
        }
        if(grupoObstaculos.isTouching(passaro)){
            
        }
        gerarObstaculos();
    }else{
        //Congela o pássaro na tela:
        passaro.velocityY=0;

        //Mostra Game Over na tela
        textSize();
        text("Game Over", 400,350); 
    }
    drawSprites();//Desenha os sprites na tela; 
}
function gerarObstaculos(){
    //Função para gerar obstáculos na tela
    if(frameCount % 60==0){//Verifica se o número de quadros é multiplo de 60
        //Criar obstáculo superior:
        let obstaculoSuperior = createSprite(
            width,//posição horizontal
            0,//posição vertical
            50,//largura
            400//altura
        );
        //Define as propriedades do obstáculo superior:
        obstaculoSuperior.shapeColor=purplebstaculo_cor;
        obstaculoSuperior.velocityX=obstaculo_velocidade;//velocidade orizontal
        obstaculoSuperior.lifetime=obstaculo_tempo_de_vida;//tempo de vida do obstáculo(em quadros)


        //Criar obstáculo inferior:
        let obstaculoInferior = createSprite(
            width,//posição horizontal
            0,//posição vertical
            50,//largura
            400//altura
        );
        //Define as propriedades do obstaculo inferior:
        obstaculoSuperior.shapeColor=purplebstaculo_cor;
        obstaculoSuperior.velocityX=obstaculo_velocidade;//velocidade orizontal
        obstaculoSuperior.lifetime=obstaculo_tempo_de_vida;//tempo de vida do obstáculo(em quadros)

        grupoObstaculos.add(obstaculoSuperior);
        grupoObstaculos.add(obstaculoSuperior);
        
    }
}

