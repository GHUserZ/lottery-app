/**
 * 获取url参数值
 * */
function getQueryString(name) {
  var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
  var r = window.location.search.substr(1).match(reg);
  if (r != null) {
    return unescape(r[2]);
  }
  return null;
}

/**
 *
 * format yyyy-MM-dd hh:mm 得到2017-05-03 11:20
 * format yyyy-MM-dd 得到2017-05-03
 */
function formatDate(date, format) {
  date = new Date(date)
  var paddNum = function (num) {
    num += ''
    return num.replace(/^(\d)$/, '0$1')
  }
  // 指定格式字符
  var cfg = {
    yyyy: date.getFullYear(), // 年 : 4位
    yy: date.getFullYear().toString().substring(2), // 年 : 2位
    M: date.getMonth() + 1, // 月 : 如果1位的时候不补0
    MM: paddNum(date.getMonth() + 1), // 月 : 如果1位的时候补0
    d: date.getDate(), // 日 : 如果1位的时候不补0
    dd: paddNum(date.getDate()), // 日 : 如果1位的时候补0
    h: date.getHours(), // 时
    hh: paddNum(date.getHours()), // 时:如果1位的时候补0
    m: date.getMinutes(), // 分
    mm: paddNum(date.getMinutes()), // 分:如果1位的时候补0
    ss: date.getSeconds() // 秒
  }
  format || (format = 'yyyy-MM-dd')
  return format.replace(/([a-z])(\1)*/ig, function (m) {
    return cfg[m]
  })
}
/**
 * 拆分段落
 * @param {} str 
 */
function paragraph(str) {
  var txtContent = str.split("\r\n");
  var txtHtml = ''
  txtContent.forEach(function (v, i) {
    if (!!v) {
      txtHtml += "<p>" + v + "</p>"
    }
  })
  return txtHtml
}
function getYesterday(){
  var startStop = new Array();
  var today = new Date();
  var yesterday = new Date(today.setTime(today.getTime()-24*60*60*1000));
  var s = formatDate(yesterday,"yyyy-MM-dd 00:00");//昨日开始
  var e = formatDate(yesterday,"yyyy-MM-dd 23:59") ;//昨日结束
  startStop.push(s)
  startStop.push(e)
  return startStop
}
/***
 * 获得本月的起止时间
 */
function getCurrentMonth() {
  //起止日期数组
  var startStop = new Array();
  //获取当前时间
  var currentDate = new Date();
  //获得当前月份0-11
  var currentMonth = currentDate.getMonth();
  //获得当前年份4位年
  var currentYear = currentDate.getFullYear();
  //求出本月第一天
  var firstDay = new Date(currentYear, currentMonth, 1);


  //当为12月的时候年份需要加1
  //月份需要更新为0 也就是下一年的第一个月
  if (currentMonth == 11) {
    currentYear++;
    currentMonth = 0; //就为
  } else {
    //否则只是月份增加,以便求的下一月的第一天
    currentMonth++;
  }


  //一天的毫秒数
  var millisecond = 1000 * 60 * 60 * 24;
  //下月的第一天
  var nextMonthDayOne = new Date(currentYear, currentMonth, 1);
  //求出上月的最后一天
  var lastDay = new Date(nextMonthDayOne.getTime() - millisecond);

  //添加至数组中返回
  startStop.push(firstDay);
  startStop.push(lastDay);
  //返回
  return startStop;
};
/**
 * 获得上一月的起止日期
 * ***/
function getPreviousMonth() {
  //起止日期数组
  var startStop = new Array();
  //获取当前时间
  var currentDate = new Date();
  //获得当前月份0-11
  var currentMonth = currentDate.getMonth();
  //获得当前年份4位年
  var currentYear = currentDate.getFullYear();
  //获得上一个月的第一天
  var priorMonthFirstDay = getPriorMonthFirstDay(currentYear, currentMonth);
  //获得上一月的最后一天
  var priorMonthLastDay = new Date(priorMonthFirstDay.getFullYear(), priorMonthFirstDay.getMonth(), getMonthDays(priorMonthFirstDay.getFullYear(), priorMonthFirstDay.getMonth()));
  //添加至数组
  startStop.push(priorMonthFirstDay);
  startStop.push(priorMonthLastDay);
  //返回
  return startStop;
};
/**
 * 返回上一个月的第一天Date类型
 * @param year 年
 * @param month 月
 **/
function getPriorMonthFirstDay(year, month) {
  //年份为0代表,是本年的第一月,所以不能减
  if (month == 0) {
    month = 11; //月份为上年的最后月份
    year--; //年份减1
    return new Date(year, month, 1);
  }
  //否则,只减去月份
  month--;
  return new Date(year, month, 1);;
};
/**
 * 获得该月的天数
 * @param year年份
 * @param month月份
 * */
function getMonthDays(year, month) {
  //本月第一天 1-31
  var relativeDate = new Date(year, month, 1);
  //获得当前月份0-11
  var relativeMonth = relativeDate.getMonth();
  //获得当前年份4位年
  var relativeYear = relativeDate.getFullYear();

  //当为12月的时候年份需要加1
  //月份需要更新为0 也就是下一年的第一个月
  if (relativeMonth == 11) {
    relativeYear++;
    relativeMonth = 0;
  } else {
    //否则只是月份增加,以便求的下一月的第一天
    relativeMonth++;
  }
  //一天的毫秒数
  var millisecond = 1000 * 60 * 60 * 24;
  //下月的第一天
  var nextMonthDayOne = new Date(relativeYear, relativeMonth, 1);
  //返回得到上月的最后一天,也就是本月总天数
  return new Date(nextMonthDayOne.getTime() - millisecond).getDate();
};
export {
  formatDate,
  getQueryString,
  paragraph,
  getCurrentMonth,
  getPreviousMonth,
  getYesterday
}