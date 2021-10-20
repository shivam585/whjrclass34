var emoji1,emoji1image,emoji2,emoji2image
var gamestate="serve"

function preload(){
    emoji1image=loadImage("whjrfriends (4).jpg")
    emoji2image=loadImage("snowflake.png")
    ghostimage=loadImage("ghost.png")
    teddyimage=loadImage("cartoonteddy.png")

    sealimage=loadImage("cartoonsealwithball.png")



}

function setup(){

createCanvas(1530,750)
emoji1=createSprite(width/2,height/2,80,80)
emoji1.addImage(emoji1image)
emoji1.scale=3.5

teddy=createSprite(width/8,height/2,80,80)
teddy.addImage(teddyimage)
teddy.scale=3

seal=createSprite(1200,height/2,80,80)
seal.addImage(sealimage)
seal.scale=2

emojigroup=new Group()


}

function draw(){
background("green")


drawSprites()

fill("red")
textSize(50)
stroke("black")
textFont("Algerian")
text("my coding teacher" ,width/3,height/1.2)


if(frameCount%10===0&&gamestate==="serve"){
emoji2=createSprite()
emoji2.x=Math.round(random(width/1,width/20))
emoji2.velocityY=5
emoji2.width=20
emoji2.height=20
emoji2.addImage(emoji2image)
emoji2.scale=0.3
emojigroup.add(emoji2)
}





    if(gamestate==="end"){
        emoji3=createSprite()
        emoji3.x=width/2
        emoji3.y=height/2
        emoji3.width=300
        emoji3.height=300
        emoji3.addImage(ghostimage)
        emoji3.scale=5
        
        emojigroup.destroyEach()
    }

}


