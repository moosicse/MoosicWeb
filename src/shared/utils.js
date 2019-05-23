import Moment from 'moment';

export const getUrlLoader = () => {
  return encodeURI(window.location.href.replace(window.location.host, '').replace('http://', '').replace('https://', ''));
};

export const translateWeekName = (weekName) => {
  const dict = {
    Sun: '星期日',
    Mon: '星期一',
    Tue: '星期二',
    Wed: '星期三',
    Thu: '星期四',
    Fri: '星期五',
    Sat: '星期六',
  };
  return dict[weekName];
};

export const getDateTimeText = (datetime) => {
  return Moment(datetime).format("YYYY年MM月DD日 HH时mm分");
};