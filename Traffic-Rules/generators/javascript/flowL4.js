'use strict';
goog.require('Blockly.JavaScript');
var p = 1;
var count = 0;
var flag=true;

var commands="";

function End(){
if(commands!="www"){
  setTimeout( function timer(){
 
    $("#exampleModal1").modal('show');
  
 },3*759 );


}
else{
  /*$("#exampleModal").modal();*/
  setTimeout( function timer(){
      $("#exampleModal").modal();
    
   },5*759 );

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


//left

function left1(){
   
  if(p==1){
  
    kid.x -=70;
    
    //speech bubble
   
    
    p=0;
    count++;
    }else{
      //speech bubble
  
      count++;
      setTimeout( function timer(){
    kid.x -=90;
       
    }, count*500 )
    }
  }


  function upward(){
   
    if(p==1){
    
      kid.y -=70;
      
      //speech bubble
     
      
      p=0;
      count++;
      }else{
        //speech bubble
    
        count++;
        setTimeout( function timer(){
      kid.y -=90;
         
      }, count*500 )
      }
  
  }

Blockly.JavaScript['up'] = function(block) {
  var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  if(flag)
  {
      $("#exampleModal3").modal('show');
    
    return;
   }

   upward();
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
  left1();
    commands+="w";
  var code = '0';
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


Blockly.JavaScript['dropdown'] = function(block) {
  var dropdown_path = block.getFieldValue('Path');
  // TODO: Assemble JavaScript into code variable.
  var code = dropdown_path;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};


Blockly.JavaScript['if_else'] = function(block) {
  var d1 = Blockly.JavaScript.valueToCode(block, 'if', Blockly.JavaScript.ORDER_ATOMIC);
  var d2 = Blockly.JavaScript.statementToCode(block, 'do');

  // TODO: Assemble JavaScript into code variable
if(d1=='(0)' && d2==0)
{
  left1();
}
else{
  $("#exampleModal1").modal('show');
  Reset();

}
var code = ';\n';
  return code;
};



