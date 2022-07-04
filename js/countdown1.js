var endDate = new Date("2024/03/01 12:00:00");
var interval = 1000;

function countdownTimer1() {
  var nowDate = new Date();
  var period = endDate - nowDate;
  var addZero = function (n) {
    return ("0" + n).slice(-2);
  };
  var addZeroDay = function (n) {
    return ("0" + n).slice(-3);
  };
  if (period >= 0) {
    var year_second = 1000 * 60 * 60 * 24 * 365;
    var day_second = 1000 * 60 * 60 * 24;
    var hour_second = 1000 * 60 * 60;
    var minutes_second = 1000 * 60;

    var year = Math.floor(period / year_second);
    period -= year * year_second;
    var day = Math.floor(period / day_second);
    period -= day * day_second;
    var hour = Math.floor(period / hour_second);
    period -= hour * hour_second;
    var minutes = Math.floor(period / minutes_second);
    period -= minutes * minutes_second;
    var second = Math.floor(period / 1000);
    var insert = "";
    insert += '<span class="h">' + addZero(year) + "年　" + "</span>";
    insert += '<span class="h">' + addZeroDay(day) + "日　" + "</span>";
    insert += '<span class="h">' + addZero(hour) + "時間　" + "</span>";
    insert += '<span class="m">' + addZero(minutes) + "分　" + "</span>";
    insert += '<span class="s">' + addZero(second) + "秒" + "</span>";
    document.getElementById("result1").innerHTML = insert;
    setTimeout(countdownTimer1, 10);
  } else {
    var insert = "";
    var number = 0;
    insert += '<span class="h">' + number + number + "</span>";
    insert += '<span class="m">' + number + number + "</span>";
    insert += '<span class="s">' + number + number + "</span>";
    document.getElementById("result1").innerHTML = insert;
  }
}

countdownTimer1();