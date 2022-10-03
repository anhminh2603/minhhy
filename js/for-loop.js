var scores =[24, 32, 17];
var arraylength = scores.length;
var roundnumber = 0;
var msg = '';
for (var i = 0; i < arraylength; i ++){
    roundnumber = (i + i);
    msg += 'round ' + roundnumber + ':';
    msg += scores[i]+ '<br />';
}
document.getElementById('answer').innerHTML = msg;