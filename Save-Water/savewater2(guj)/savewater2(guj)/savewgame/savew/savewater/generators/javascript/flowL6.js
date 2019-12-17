'use strict';
goog.require('Blockly.JavaScript');
var p = 1;
var count = 0;
var flag=true;

var commands="";

function End(){
if(commands!="euedee" && commands!="edeuee"){
  $("#exampleModal1").modal('show');
Reset();
}
else{
  /*$("#exampleModal").modal();*/
  setTimeout( function timer(){
      $("#exampleModal").modal();
    
   }, 6*759 );

}


}

function Reset(){
  player.x=120;
  player.y=290;
 
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

  if(p==1){
   //For spritesheet
    player.anims.play('right', true);
    player.y -=150;
    
    //speech bubble
   
    
    p=0;
    count++;
    }else{
      //speech bubble
  
      count++;
      setTimeout( function timer(){
        player.anims.play('turn', true);
              player.y -=150;
       
    }, count*500 )
    }

    
    
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

  if(p==1){
   //For spritesheet
    player.anims.play('turn', true);
    player.y +=150;
    
    //speech bubble
   
    
    p=0;
    count++;
    }else{
      //speech bubble
  
      count++;
      setTimeout( function timer(){
        player.anims.play('turn', true);
              player.y +=150;
       
    }, count*500 )
    }

    
    
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

  if(p==1){
   //For spritesheet
    player.anims.play('right', true);
    player.x +=150;
    
    //speech bubble
   
    
    p=0;
    count++;
    }else{
      //speech bubble
  
      count++;
      setTimeout( function timer(){
        player.anims.play('right', true);
              player.x +=150;
       
    }, count*500 )
    }

    
    
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
   //For spritesheet
    player.anims.play('left', true);
    player.x -=150;
    
    //speech bubble
   
    
    p=0;
    count++;
    }else{
      //speech bubble
  
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


