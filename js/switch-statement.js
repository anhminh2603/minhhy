var msg;
var level = 2;
switch (level) {
    case1:
        msg = 'good luck on the first test';
    break;
    case 2:
        msg = 'second of three - keep going!';
    break;
    case 3:
        msg = 'final round, almost there!';
    break;
    default:
        msg = 'good luck!';
    break;
}
var el =document.getElementById('answer');
el.textContent = msg;