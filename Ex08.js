var d1 = "2005-10-14";
var d2 = "2005-09-25";
const date1 = new Date(d1);
const date2 = new Date(d2);
const timeDiff = date2.getTime() - date1.getTime();
const daysDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
alert("Số ngày chênh lệch là: " + Math.abs(daysDiff));
