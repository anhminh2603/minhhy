var score1 = 8;
var socre2 = 8;
var pass1 = 6;
var pass2 = 6;
var minpass = (score1 >= pass1) || (score2 >= pass2);
var msg = 'resit required:' + !minpass;
var el = document.getElementById('answer');
el.innerHTML = msg;
