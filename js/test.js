var count = 3;

var game = "switch";
var i =  Math.floor(Math.random() * 10);
var message = new Array(
  'オヤジのカミナリが落ちるでしょう', 'ジジイのカミナリが落ちるでしょう', 'おかんの怒りが爆発するでしょう',
  'オヤジギャグが吹き荒れるでしょう', '私の心は大嵐でしょう', 'オヤジギャグが吹き荒れるでしょう',
  '私の心は大嵐でしょう',
   'オヤジのカミナリが落ちるでしょう', 'オヤジギャグが吹き荒れるでしょう', 'おかんの怒りが爆発するでしょう');
   var greet = new Array(
    'あけましておめでとう', 'こたつのオトモに', '別れの季節ですね',
    'サクラが咲く春', 'そよかぜが心地いい', '梅雨で憂うつですね',
    '最近、暑くて倒れそう',　'夏休みだ！', '運動会だ！',
    'そろそろ、紅葉しているだろうか', '最近、寒くね？', '今年も終わりですね');

document.write("<br>タメにならない天気予報<br>" + message[i]);


var day = new Date();
document.write("<br><br>" + (day.getMonth()+1) + "月です。"　+ "<br>"  );
document.write(greet[day.getMonth()] + "<br>"  );
document.write("<br>" + day.getHours() + "時をとっくに過ぎています。<br>早く仕事しましょう。"  );