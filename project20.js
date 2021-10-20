var wall1,wall2,wall3,wall4,wall5;
var gunpart1,gunpart2,gunpart3,gunpart4,gunpart5,gunpart6,gunpart7,gunpart8;
var shield1,shield2,shield3,shield4;
var speed1,speed2,speed3,speed4;
var thickness1,thickness2,thickness3,thickness4;
var damage1,damage2,damage3,damage4;
var bulletweight1,bulletweight2,bulletweight3,bulletweight4;
var shooter1, shooter2, shooter3, shooter4,bulletgroup;
var bullet1,bullet2,bullet3,bullet4,bulletgroup2,bulletgroup3,bulletgroup4
var gamestate


function setup(){

createCanvas(1530,750)
wall1=createSprite(765,70,1530,10)
wall1.shapeColor=("orange")
wall2=createSprite(765,200,1530,10)
wall2.shapeColor=("orange")
wall3=createSprite(765,330,1530,10)
wall3.shapeColor=("orange")                       
wall4=createSprite(765,460,1530,10)
wall4.shapeColor=("orange")
wall5=createSprite(765,590,1530,10)
wall5.shapeColor=("orange")
gunpart1=createSprite(105,130,15,40)
gunpart1.shapeColor=("black")
gunpart2=createSprite(140,115,80,15)
gunpart2.shapeColor=("black")
gunpart3=createSprite(105,260,15,40)
gunpart3.shapeColor=("black")
gunpart4=createSprite(140,245,80,15)
gunpart4.shapeColor=("black")
gunpart5=createSprite(105,390,15,40)
gunpart5.shapeColor=("black")
gunpart6=createSprite(140,375,80,15)
gunpart6.shapeColor=("black")
gunpart7=createSprite(105,520,15,40)
gunpart7.shapeColor=("black")
gunpart8=createSprite(140,505,80,15)
gunpart8.shapeColor=("black")

shield1=createSprite(1300,130,thickness1,70)
shield1.shapeColor=("lightgreen")
shield2=createSprite(1300,260,thickness2,70)
shield2.shapeColor=("blue")
shield3=createSprite(1300,390,thickness3,70)
shield3.shapeColor=("orange")
shield4=createSprite(1300,520,thickness4,70)
shield4.shapeColor=("lightblue")

shooter1=createSprite(50,130,30,30)
shooter1.shapeColor=("red")
shooter2=createSprite(50,260,30,30)
shooter2.shapeColor=("red")
shooter3=createSprite(50,390,30,30)
shooter3.shapeColor=("red")
shooter4=createSprite(50,520,30,30)
shooter4.shapeColor=("red")
thickness1=random(22,83)
thickness2=random(32,63)
thickness3=random(32,93)
thickness4=random(22,83)

speed1=random(20,45)
speed2=random(12,61)
speed3=random(23,55)
speed4=random(23,31)

bulletweight1=random(52,82)
bulletweight2=random(42,62)
bulletweight3=random(62,92)
bulletweight4=random(22,67)

damage1=0.5*speed1*bulletweight1*speed1/thickness1*thickness1*thickness1
damage2=0.5*speed2*bulletweight2*speed2/thickness2*thickness2*thickness2
damage3=0.5*speed3*bulletweight3*speed3/thickness3*thickness3*thickness3
damage4=0.5*speed4*bulletweight4*speed4/thickness4*thickness4*thickness4

bulletgroup=new Group();
bulletgroup2=new Group();
bulletgroup3=new Group();
bulletgroup4=new Group();

console.log(damage1)
console.log(damage2)
console.log(damage3)
console.log(damage4)

gamestate="play"
}

function draw(){
background("green")


drawSprites()

if(mousePressedOver(shooter1)){
    shootbullet1()
}

if(mousePressedOver(shooter2)){
    shootbullet2()
    }

    if(mousePressedOver(shooter3)){
        shootbullet3()
        }

        if(mousePressedOver(shooter4)){
           shootbullet4()
            }

if(bulletgroup.isTouching(shield1)){

gamestate="result1"
}

if(gamestate==="result1"){
    bulletgroup.destroyEach()

}


if(damage1>0&&damage1<2000000&&gamestate==="result1"){
    textFont("Algerian")
    textSize(60)
    stroke("blue")
    strokeWeight("10")
    fill("yellow")
    text("Qualified",400,140)
}

if(damage1>200000&&gamestate==="result1"){
    textFont("Algerian")
    textSize(60)
    stroke("blue")
    strokeWeight("10")
    fill("yellow")
    text("Qualified",400,140)
}

if(bulletgroup2.isTouching(shield2)){

    gamestate="result2"
    }
    
    if(gamestate==="result2"){
        bulletgroup2.destroyEach()
    
    }
    
    
    if(damage2>0&&damage2<200000&&gamestate==="result2"){
        textFont("Algerian")
        textSize(60)
        stroke("blue")
        strokeWeight("10")
        fill("yellow")
        text("Qualified",400,280)
    }
    
    if(damage2>200000&&gamestate==="result2"){
        textFont("Algerian")
        textSize(60)
        stroke("blue")
        strokeWeight("10")
        fill("red")
        text("rejected",400,280)
    }

    if(bulletgroup3.isTouching(shield3)){

        gamestate="result3"
        }
        
        if(gamestate==="result3"){
            bulletgroup3.destroyEach()
        
        }
        
        
        if(damage3>0&&damage3<1000000&&gamestate==="result3"){
            textFont("Algerian")
            textSize(60)
            stroke("blue")
            strokeWeight("10")
            fill("yellow")
            text("Qualified",400,410)
        }
        
        if(damage3>200000&&gamestate==="result3"){
            textFont("Algerian")
            textSize(60)
            stroke("blue")
            strokeWeight("10")
            fill("red")
            text("rejected",400,410)
        }


        if(bulletgroup4.isTouching(shield4)){

            gamestate="result4"
            }
            
            if(gamestate==="result4"){
                bulletgroup4.destroyEach()
            
            }
            
            
            if(damage4>0&&damage4<2000000&&gamestate==="result4"){
                textFont("Algerian")
                textSize(60)
                stroke("blue")
                strokeWeight("10")
                fill("yellow")
                text("Qualified",400,520)
            }
            
            if(damage4>2000000&&gamestate==="result4"){
                textFont("Algerian")
                textSize(60)
                stroke("blue")
                strokeWeight("10")
                fill("red")
                text("rejected",400,520)
            }
}

function shootbullet1(){

bullet1=createSprite(140,115,20,20)
bullet1.shapeColor=("white")
bullet1.velocityX=(speed1)
bullet1.collide(shield1)
bulletgroup.add(bullet1)





}

function shootbullet2(){

    bullet2=createSprite(140,240,20,20)
    bullet2.shapeColor=("white")
    bullet2.velocityX=(speed2)
    bullet2.collide(shield2)
    bulletgroup2.add(bullet2)
    
    
    
    
    
    }

    function shootbullet3(){

        bullet3=createSprite(140,375,20,20)
        bullet3.shapeColor=("white")
        bullet3.velocityX=(speed3)
        bullet3.collide(shield3)
        bulletgroup3.add(bullet3)
        
        
        
        
        
        }

        function shootbullet4(){

            bullet4=createSprite(140,500,20,20)
            bullet4.shapeColor=("white")
            bullet4.velocityX=(speed4)
            bullet4.collide(shield4)
            bulletgroup4.add(bullet4)
            
            
            
            
            
            }