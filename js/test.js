var count = 3;

var game = "switch";
var i =  Math.floor(Math.random() * 10);
var message = new Array(
  '今日は雨が降るでしょう', '今日は晴れるでしょう', '今日は曇りでしょう',
  '今日は雨が降るでしょう', '今日は晴れるでしょう', '今日は曇りでしょう',
  '今日は雪でしょう',
   'オヤジのカミナリが落ちるでしょう', 'オヤジギャグが吹き荒れるでしょう', 'おかんの怒りが爆発するでしょう');
   var greet = new Array(
    'あけましておめでとう', 'こたつのオトモに', '別れの季節ですね',
    'サクラが咲く春', 'そよかぜが心地いい', '梅雨で憂うつですね',
    '最近、暑くて倒れそう',　'夏休みだ！', '運動会だ！',
    'そろそろ、紅葉しているだろうか', '最近、寒くね？', '今年も終わりですね');

document.write("<br>天気予報　" + message[i]);


var day = new Date();
document.write("<br><br>" + (day.getMonth()+1) + "月です。"　+ "<br>"  );
document.write(greet[day.getMonth()] + "<br>"  );
document.write("<br>" + day.getHours() + "時をとっくに過ぎています。"  );