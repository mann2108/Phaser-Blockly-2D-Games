'use strict';
goog.require('Blockly.JavaScript');
var p = 1;
var count = 0;
var flag=true;
var u1=false;
var d1=false;
var e1=false;

var commands="";

function End(){
if(commands!="wwww"){
  
  player.disableBody();
  $("#exampleModal1").modal('show');
 
  }
  else{
    /*$("#exampleModal").modal();*/
    setTimeout( function timer(){
        $("#exampleModal").modal();
  
     }, 4*759 );
 
  }


}

function Reset(){
  player.x=720;
  player.y=240;
 
  player.anims.play('turn',true);
  if (Blockly.mainWorkspace !== null) {
  Blockly.mainWorkspace.clear();
   }
   count=0;
}

Blockly.JavaScript['up'] = function(block) {
  var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  if(flag)
  {
    $("#exampleModal3").modal('show');
    
    return;

  }
  u1=true;
    commands+="u";
  var code = '...;\n';
  return code;
};

Blockly.JavaScript['down'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  if(flag)
  {
    $("#exampleModal3").modal('show');
    
    return;

  }


    
    d1=true;
    commands+="d";
  return code;
};

Blockly.JavaScript['east'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  if(flag)
  {
    $("#exampleModal3").modal('show');
    
    return;

  }
  e1=true;
    commands+="e";
  var code = '...;\n';
  return code
};

Blockly.JavaScript['west'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  if(flag)
  {
    $("#exampleModal3").modal('show');
    
    return;

  }

  if(p==1){
    if(u1==true || d1==true || e1==true)
    {
      End();
      game.scene.pause();
      return ;
    }
   //For spritesheet
    player.anims.play('left', true);
    player.x -=150;
    
    //speech bubble
   
    Left();
    p=0;
    count++;
    }else{
      if(u1==true || d1==true || e1==true)
    {
      End();
      game.scene.pause();
      return ;
    }
      //speech bubble
      Left();
      count++;
      setTimeout( function timer(){
        player.anims.play('left', true);
              player.x -=150;
       
    }, count*500 )
    }

   
    
    commands+="w";
  var code = '...;\n';
  return code;
};

Blockly.JavaScript['start'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  flag=false;
  var code = '...;\n';
  return code;
};
  
 
  

/*Blockly.JavaScript['loop'] = function(block) {
  if(flag)
  {
    $("#exampleModal3").modal('show');
    return;

  }
  var number_loopvalue = block.getFieldValue('loopValue');  
  for( var i=0;i<number_loopvalue;i++)
    var statements_name = Blockly.JavaScript.statementToCode(block, 'NAME');
  
  var code = '...;\n';
  return code;
};
*/
Blockly.JavaScript['loop'] = function(block) {
 
 
  if(flag)
  {
    $("#exampleModal3").modal('show');
    return;

  }
  var number_loopvalue = block.getFieldValue('loopValue');  
  for( var i=0;i<number_loopvalue;i++)
    var statements_name = Blockly.JavaScript.statementToCode(block, 'NAME');
  
  var code = '...;\n';
  return code;

 
};





