'use strict';

goog.require('Blockly.Blocks');
goog.require('Blockly');


Blockly.defineBlocksWithJsonArray([
  {
    "type": "bad",
    "message0": "bad touch",
    "previousStatement": null,
    "colour": '#ff0000',
    "tooltip": "",
    "helpUrl": ""
  }
]);


Blockly.defineBlocksWithJsonArray([
  {
    "type": "good",
    "message0": "good touch",
    "previousStatement": null,
    "colour": 105,
    "tooltip": "",
    "helpUrl": ""
  }
]);

Blockly.defineBlocksWithJsonArray([
  {
    "type": "bad1",
    "message0": "NOT TO GO",
    "previousStatement": null,
    "colour": '#ff0000',
    "tooltip": "",
    "helpUrl": ""
  }
]);


Blockly.defineBlocksWithJsonArray([
  {
    "type": "good1",
    "message0": "TO GO",
    "previousStatement": null,
    "colour": 105,
    "tooltip": "",
    "helpUrl": ""
  }
]);


Blockly.defineBlocksWithJsonArray([
  {
    "type": "up",
    "message0": "Move Upward %1",
    
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
    "message0": "Move Downward %1",
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
  "message0": "Move Forward %1",
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
  "message0": "Move Backward %1",
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
    "message0": "START GAME %1",
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
    "message0": "Repeat %1 %2 %3 %4",
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
  
