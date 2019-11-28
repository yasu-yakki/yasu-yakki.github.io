var count = 3;

var game = "switch";
var i =  Math.floor(Math.random() * 10);
var message = new Array(
  '今日は雨が降るでしょう', '今日は晴れるでしょう', '今日は曇りでしょう',
  '今日は雨が降るでしょう', '今日は晴れるでしょう', '今日は曇りでしょう',
  '今日は雪でしょう',
   'オヤジのカミナリが落ちるでしょう', 'オヤジギャグが吹き荒れるでしょう', 'おかんの怒りが爆発するでしょう');


document.write("<br>天気予報　" + message[i]);
