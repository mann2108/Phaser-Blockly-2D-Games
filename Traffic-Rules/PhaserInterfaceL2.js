
var count = 1;
var player;
var helmet;
var cycle2;
var gameOver = false;
var scoreText;
var config;
var kid;
var cycle;
var a1;
var a2;
var a3;
var a4;
var line;
var line1;
var cycle;

function resize() {
    
    var canvas = document.querySelector("canvas");

    canvas.style.width="50%";
    canvas.style.height="50%";

    canvas.style.minHeight="50%";
    canvas.style.minWidth="50%";

}

window.onload = function() {

    //Game config here
    config = {
        type: Phaser.AUTO,
        width: 750,
        height: 450,
        physics: {
            default: 'arcade',
            arcade: {
                gravity: { y: 0 },
                debug: false
            }
        },
        scene: {
            preload: preload,
            create: create,
            update: update
        }
    };

    game = new Phaser.Game(config);
    resize();
    window.addEventListener("resize", resize, false);
}


function preload ()
{
    this.load.image('bg', 'assets/b2.jpg');
    this.load.image('cycle','assets/cycle.png');
    this.load.image('kid','assets/boy.png');
    this.load.image('a1','assets/1.png');
    this.load.image('a2','assets/2.png');
    this.load.image('a3','assets/3.png');
    this.load.image('a4','assets/4.png');
    this.load.image('line','assets/line.png');
    this.load.image('helmet','assets/helmet.png');
    this.load.image('cycle2','assets/cycle2.png');
  this.load.image('line1','assets/line1.png')
}

function create ()
{
    //  A simple background for our game
        this.add.image(384, 225, 'bg');
//helmet
    helmet = this.physics.add.image(392,300,'helmet');
  //line
  line = this.physics.add.image(350,335,'line');
   
   // helmet.setCollideWorldBounds(true);

   //line1
   line1= this.physics.add.image(231,335,'line1');
   
        //cycle

        cycle=  this.physics.add.image(150,300,'cycle');

    
    //arrow right
    arrow=this.physics.add.group();
    
    arrow.create(300,350,'a3');
    arrow.create(250,350,'a3');
    
    
    //arrow down

    arrow=this.physics.add.group();
    
    arrow.create(350,290,'a2');
    
    arrow.create(350,340,'a2');
    


      //kid
      kid = this.physics.add.image(358,240,'kid');
      kid.setCollideWorldBounds(true);

      //cycle

     
   cycle2 = this.physics.add.group();
  this.physics.add.overlap(kid,line,disappear,null,this);
   this.physics.add.overlap(kid,line1,disappear1,null,this);


}



function update ()
{
    
       
}

function disappear()
{
 
helmet.disableBody(true,true);

   
}

function disappear1()
{
    kid.disableBody(true,true);
    cycle.disableBody(true,true);
        var cycle1 = cycle2.create(155,268,'cycle2');
       for(i=0;i<10;i++){
        setTimeout( function timer(){
            cycle1.x +=50;
               
        }, 1*1000 )
    }
       }
     

