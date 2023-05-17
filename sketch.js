let gameOver = false;//var para verificar se o jogo está finalizado

let passaro; //var para armazenar sprite de passsaro

function setup(){
    //fiunção chamada ao iniciar a execução do código;

    createCanvas(1000, 600);

    //Criar sprite passaro e definir cor:
    passaro=creatSprite(50,50,20,20)
    passaro.shapeColor= "yellow";
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

    }else{
        //Congela o pássaro na tela:
        passaro.velocityY=0;
        
        //Mostra Game Over na tela
        textSize();
        text("Game Over", 400,350); 
    }
    drawSprites();//Desenha os sprites na tela;
    
}

