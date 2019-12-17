'use strict';

goog.require('Blockly.Blocks');
goog.require('Blockly');

Blockly.defineBlocksWithJsonArray([
  {
    "type": "up",
    "message0": "ઉપર તરફ %1",
    
    "args0": [
      {
        "type": "field_image",
        "src": "assets/up3.png",
        "width": 50,
        "height": 40,
        "alt": "*",
        "flipRtl": false
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": '#E76363',
    "tooltip": "",
    "helpUrl": ""
  
  }
]);

Blockly.defineBlocksWithJsonArray([
  {
    "type": "down",
    "message0": " નીચે તરફ %1",
    "args0": [
      {
        "type": "field_image",
        "src": "assets/d.png",
        "width": 50,
        "height": 40,
        "alt": "*",
        "flipRtl": false
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": '#E76363',
    "tooltip": "",
    "helpUrl": ""
  
  }
]);

Blockly.defineBlocksWithJsonArray([
{
  "type": "east",
  "message0": "આગળ %1",
  "args0": [
    {
      "type": "field_image",
      "src": "assets/right3.png",
      "width": 50,
      "height": 40,
      "alt": "*",
      "flipRtl": false
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": '#E76363',
  "tooltip": "",
  "helpUrl": ""
}
]);

Blockly.defineBlocksWithJsonArray([

{
  "type": "west",
  "message0": "પાછળ %1",
  "args0": [
    {
      "type": "field_image",
      "src": "assets/left3.png",
      "width": 50,
      "height": 40,
      "alt": "*",
      "flipRtl": false
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": '#E76363',
  "tooltip": "",
  "helpUrl": ""
}
]);

Blockly.defineBlocksWithJsonArray([
  {
    "type": "start",
    "message0": "પ્રારંભ %1",
    "args0": [
      {
        "type": "field_image",
        "src": "assets/play.png",
        "width": 50,
        "height": 50,
        "alt": "*",
        "flipRtl": false
      }
    ],
    "nextStatement": null,
    "colour": '#CDB99C',
    "tooltip": "",
    "helpUrl": ""
  }
]);

Blockly.defineBlocksWithJsonArray([
  {
    "type": "loop",
    "message0": "રિપીટ %1 %2 %3 %4",
    "args0": [
     {
       "type":"field_image",
       "src":"assets/reset-512.png",
       "width":50,
       "height":50,
       "alt":"*",
       "flipRtl":false
     },
     
      {
        "type": "input_dummy",
        "align": "CENTRE"
      },
      {
        "type": "field_number",
        "name": "loopValue",
        "value": 0
      },
      {
        "type": "input_statement",
        "name": "NAME"
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": '#330000' ,
    "tooltip": "",
    "helpUrl": ""
  }
  
  ]); 
  
