
var count = 1;
var sky;
var man;
var mann;
var bucket;
var fireextin;
var blanket;
var arrow1;
var arrow2;
var arrow3;
var arrow4;

var gameOver = false;
var scoreText;
var config;

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
        width: 700,
        height: 420,
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
    this.load.image('sky', 'assets/white.png');
    this.load.image('man', 'assets/man.gif');
    this.load.image('bucket', 'assets/bucket.png');
    this.load.image('fireextin', 'assets/fireex2.png');
    this.load.image('blanket', 'assets/blanket.png');
    this.load.image('mann', 'assets/man1.png');
    this.load.image('kid','assets/kid.png');
    this.load.image('arrow1','assets/1.png');
    this.load.image('arrow2','assets/2.png');
    this.load.image('arrow3','assets/3.png');
    this.load.image('arrow4','assets/4.png');
  
}

function create ()
{
    //  A simple background for our game
    this.add.image(350, 210, 'sky');

    //MANN
   mann=this.physics.add.group();

    //MAN
    man=this.physics.add.image(100, 80, 'man');


    //BUCKET
    this.add.image(370,380, 'bucket');

    //Fire Extinguisher
    this.add.image(390,220, 'fireextin');

    //BLANKET
   
    blanket=this.physics.add.image(380,90,'blanket');

    //LEFT ARROW BEFORE BUCKET
    this.add.image(610,390,'arrow3');
    this.add.image(540,390,'arrow3');
    this.add.image(480,390,'arrow3');
    this.add.image(420,390,'arrow3');

    //LEFT ARROW AFTER BUCKET
    this.add.image(320,390,'arrow3');
    this.add.image(270,390,'arrow3');
    this.add.image(220,390,'arrow3');
    this.add.image(170,390,'arrow3');

    //LEFT ARROW BEFORE FIRE EXTINGUISHER
    this.add.image(610,245,'arrow3');
    this.add.image(540,245,'arrow3');
    this.add.image(480,245,'arrow3');
    this.add.image(420,245,'arrow3');

  //LEFT ARROW AFTER FIRE EXTINGUISHER
  this.add.image(170,245,'arrow3');
  this.add.image(220,245,'arrow3');
  this.add.image(270,245,'arrow3');
  this.add.image(320,245,'arrow3');

    //LEFT ARROW BEFORE BLANKET
    this.add.image(610,100,'arrow3');
    this.add.image(540,100,'arrow3');
    this.add.image(480,100,'arrow3');
    this.add.image(420,100,'arrow3');

    //LEFT ARROW AFTER BLANKET
    this.add.image(200,100,'arrow3');
    this.add.image(250,100,'arrow3');
    this.add.image(300,100,'arrow3');
   

    //UP ARROW(ABOVE KID)
    this.add.image(665,310,'arrow4');
    this.add.image(665,250,'arrow4');

    this.add.image(665,190,'arrow4');
    this.add.image(665,130,'arrow4');

    //UP ARROW(BELOW MAN)
    this.add.image(120,380,'arrow4');
    this.add.image(120,320,'arrow4');
    this.add.image(120,250,'arrow4');
    this.add.image(120,190,'arrow4');

    
    //Kid
    kid=this.physics.add.image(700, 380, 'kid');
    kid.setCollideWorldBounds();

  this.physics.add.overlap(kid,blanket,disappear,null,this);
    
    this.physics.add.overlap(kid,man,appear,null,this);


}



function update ()
{
    
       
}

function disappear()
{
        blanket.disableBody(true,true);
}


function appear()
{


    setTimeout( function timer(){
        blanket.disableBody(true,true);
        man.disableBody(true,true);
        var mannn=mann.create(100,100,'mann');
     },1*100 );
  
}
