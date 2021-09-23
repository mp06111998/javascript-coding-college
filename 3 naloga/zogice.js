//kjer se prostor deli s QuadTree drevesom (QuadTree). V vsakem končnem podprostoru izvedete preverjanje trkov, med elementi podprostora.

var koliko = document.getElementById("koliko").value;

var canvas = document.getElementById("my_canvas");
var c = canvas.getContext("2d");

var on = true;
function mreza() {
  if(on){
    on = false;
  }
  else{
    on = true;
  }
}

var okvir = {
  x: 0,
  y: 0,
  width: 560,
  height: 560
};

var elementi = []

for(var i = 0; i < koliko; i++){
    var x = Math.floor((Math.random() * 500) + 20);
    var y = Math.floor((Math.random() * 500) + 20);
    var r = 8;

    var smer = Math.floor((Math.random() * 4) + 0);

    var premikx = Math.random();
    var premiky = 2-premikx;
    elementi.push({x,y,r,premikx,premiky,smer});
}

function zacni() {

  var koliko2 = document.getElementById("koliko").value;
  if(koliko2 > koliko){
    var st = koliko2 - koliko;
    koliko ++;
    for(var i = 0; i < st; i++){
      var x = Math.floor((Math.random() * 500) + 20);
      var y = Math.floor((Math.random() * 500) + 20);
      var r = 8;
  
      var smer = Math.floor((Math.random() * 4) + 0);
  
      var premikx = Math.random();
      var premiky = 2-premikx;
      elementi.push({x,y,r,premikx,premiky,smer});
    }
  }
  else if (koliko2 < koliko){
    elementi.pop();
    koliko --;
  }

  c.fillStyle = "white";
  c.fillRect(okvir.x, okvir.y, okvir.width, okvir.height);
  var we = true;

  for (var i = 0; i < elementi.length; i++) {
    if(we){
      if(on){
    var cii = document.getElementById("my_canvas");
      var ctxi = cii.getContext("2d");
      ctxi.beginPath();
      ctxi.moveTo(okvir.width/2, 0);
      ctxi.lineTo(okvir.width/2, okvir.height);
      ctxi.moveTo(0, (okvir.height/2));
      ctxi.lineTo(okvir.width, (okvir.height/2));
      ctxi.stroke();
      we = false;}}

    //var xzac;
    //var yzac;
    var alije = false;
    for (var j = 0; j < elementi.length; j++) {
      if(i != j && elementi[j].x - elementi[j].r-8 < elementi[i].x && elementi[i].x < elementi[j].x + elementi[j].r+8 && elementi[j].y - elementi[j].r-8 < elementi[i].y && elementi[i].y < elementi[j].y + elementi[j].r+8){
        alije = true;
        /*if(elementi[j].x > elementi[j].x){
          xzac = elementi[j].x-(elementi[j].x-elementi[i].x)
        }
        else{
          xzac = elementi[i].x-(elementi[i].x-elementi[j].x)
        }
        if(elementi[j].y > elementi[j].y){
          yzac = elementi[j].y-(elementi[j].y-elementi[i].y)
        }
        else{
          yzac = elementi[i].y-(elementi[i].y-elementi[j].y)
        }*/
      }
    }
    if(alije == true){
      c.fillStyle = "red";
    }
    else{
      c.fillStyle = "grey";
    }

    c.beginPath();
    c.arc(elementi[i].x, elementi[i].y, elementi[i].r, 0, Math.PI * 2, true);
    c.fill()

    if (elementi[i].premikx + elementi[i].x - elementi[i].r < okvir.x || elementi[i].premikx + elementi[i].x + elementi[i].r > okvir.width) {
        elementi[i].premikx = -elementi[i].premikx;
    }
      
    if (elementi[i].premiky + elementi[i].y + elementi[i].r > okvir.height || elementi[i].premiky + elementi[i].y - elementi[i].r < okvir.y) {
        elementi[i].premiky = -elementi[i].premiky;
    }
      
    elementi[i].x += elementi[i].premikx
    elementi[i].y += elementi[i].premiky
  }

  if(on){
    var kolikoo = 0;
    var kolikoo1 = 0;
    var kolikoo2 = 0;
    var kolikoo3 = 0;

    var s1 = 0;
    var s2 = 0;
    var s3 = 0;
    var s4 = 0;
    var s5 = 0;
    var s6 = 0;
    var s7 = 0;
    var s8 = 0;
    var s9 = 0;
    var s10 = 0;
    var s11 = 0;
    var s12 = 0;
    var s13 = 0;
    var s14 = 0;
    var s15 = 0;
    var s16 = 0;

    for (var k = 0; k < elementi.length; k++) {
      if(elementi[k].x < (okvir.width/2) && elementi[k].y < (okvir.height/2)){
        kolikoo ++;
      }
      if(elementi[k].x < (okvir.width/2) && elementi[k].y > (okvir.height/2)){
        kolikoo1 ++;
      }
      if(elementi[k].x > (okvir.width/2) && elementi[k].y < (okvir.height/2)){
        kolikoo2 ++;
      }
      if(elementi[k].x > (okvir.width/2) && elementi[k].y > (okvir.height/2)){
        kolikoo3 ++;
      }



      if(elementi[k].x < (okvir.width/4) && elementi[k].y < (okvir.height/4)){
        s1 ++;
      }
      if(elementi[k].x < (okvir.width/4) && elementi[k].y > (okvir.height/4) && elementi[k].y < (okvir.height/2)){
        s2 ++;
      }
      if(elementi[k].x < (okvir.width/4) && elementi[k].y > (okvir.height/2) && elementi[k].y < (okvir.height/2+okvir.height/4)){
        s3 ++;
      }
      if(elementi[k].x < (okvir.width/4) && elementi[k].y > (okvir.height/2+okvir.height/4)){
        s4 ++;
      }


      if(elementi[k].x < (okvir.width/2) && elementi[k].x > (okvir.width/4) && elementi[k].y < (okvir.height/4)){
        s5 ++;
      }
      if(elementi[k].x < (okvir.width/2) && elementi[k].x > (okvir.width/4) && elementi[k].y > (okvir.height/4) && elementi[k].y < (okvir.height/2)){
        s6 ++;
      }
      if(elementi[k].x < (okvir.width/2) && elementi[k].x > (okvir.width/4) && elementi[k].y > (okvir.height/2) && elementi[k].y < (okvir.height/2+okvir.height/4)){
        s7 ++;
      }
      if(elementi[k].x < (okvir.width/2) && elementi[k].x > (okvir.width/4) && elementi[k].y > (okvir.height/2+okvir.height/4)){
        s8 ++;
      }


      if(elementi[k].x > (okvir.width/2) && elementi[k].x < (okvir.width/4+okvir.width/2) && elementi[k].y < (okvir.height/4)){
        s9 ++;
      }
      if(elementi[k].x > (okvir.width/2) && elementi[k].x < (okvir.width/4+okvir.width/2) && elementi[k].y > (okvir.height/4) && elementi[k].y < (okvir.height/2)){
        s10 ++;
      }
      if(elementi[k].x > (okvir.width/2) && elementi[k].x < (okvir.width/4+okvir.width/2) && elementi[k].y > (okvir.height/2) && elementi[k].y < (okvir.height/2+okvir.height/4)){
        s11 ++;
      }
      if(elementi[k].x > (okvir.width/2) && elementi[k].x < (okvir.width/4+okvir.width/2) && elementi[k].y > (okvir.height/2+okvir.height/4)){
        s12 ++;
      }


      if(elementi[k].x > (okvir.width/2+okvir.width/4) && elementi[k].y < (okvir.height/4)){
        s13 ++;
      }
      if(elementi[k].x > (okvir.width/2+okvir.width/4) && elementi[k].y > (okvir.height/4) && elementi[k].y < (okvir.height/2)){
        s14 ++;
      }
      if(elementi[k].x > (okvir.width/2+okvir.width/4) && elementi[k].y > (okvir.height/2) && elementi[k].y < (okvir.height/2+okvir.height/4)){
        s15 ++;
      }
      if(elementi[k].x > (okvir.width/2+okvir.width/4) && elementi[k].y > (okvir.height/2+okvir.height/4)){
        s16 ++;
      }
    }

    if(4 <= s16){
      var ci = document.getElementById("my_canvas");
      var ctx = ci.getContext("2d");
      ctx.beginPath();
      ctx.moveTo(okvir.width/8+okvir.width/2+okvir.width/4, 0+okvir.height/2+okvir.height/4);
      ctx.lineTo(okvir.width/8+okvir.width/2+okvir.width/4, okvir.height/4+okvir.height/2+okvir.height/4);
      ctx.moveTo(0+okvir.width/2+okvir.width/4, (okvir.height/8+okvir.height/2+okvir.height/4));
      ctx.lineTo(okvir.width/4+okvir.width/2+okvir.width/4, (okvir.height/8+okvir.height/2+okvir.height/4));
      ctx.stroke();
    }

    if(4 <= s15){
      var ci = document.getElementById("my_canvas");
      var ctx = ci.getContext("2d");
      ctx.beginPath();
      ctx.moveTo(okvir.width/8+okvir.width/2+okvir.width/4, 0+okvir.height/2);
      ctx.lineTo(okvir.width/8+okvir.width/2+okvir.width/4, okvir.height/4+okvir.height/2);
      ctx.moveTo(0+okvir.width/2+okvir.width/4, (okvir.height/8+okvir.height/2));
      ctx.lineTo(okvir.width/4+okvir.width/2+okvir.width/4, (okvir.height/8+okvir.height/2));
      ctx.stroke();
    }

    if(4 <= s14){
      var ci = document.getElementById("my_canvas");
      var ctx = ci.getContext("2d");
      ctx.beginPath();
      ctx.moveTo(okvir.width/8+okvir.width/2+okvir.width/4, 0+okvir.height/4);
      ctx.lineTo(okvir.width/8+okvir.width/2+okvir.width/4, okvir.height/4+okvir.height/4);
      ctx.moveTo(0+okvir.width/2+okvir.width/4, (okvir.height/8+okvir.height/4));
      ctx.lineTo(okvir.width/4+okvir.width/2+okvir.width/4, (okvir.height/8+okvir.height/4));
      ctx.stroke();
    }

    if(4 <= s13){
      var ci = document.getElementById("my_canvas");
      var ctx = ci.getContext("2d");
      ctx.beginPath();
      ctx.moveTo(okvir.width/8+okvir.width/2+okvir.width/4, 0);
      ctx.lineTo(okvir.width/8+okvir.width/2+okvir.width/4, okvir.height/4);
      ctx.moveTo(0+okvir.width/2+okvir.width/4, (okvir.height/8));
      ctx.lineTo(okvir.width/4+okvir.width/2+okvir.width/4, (okvir.height/8));
      ctx.stroke();
    }

    if(4 <= s12){
      var ci = document.getElementById("my_canvas");
      var ctx = ci.getContext("2d");
      ctx.beginPath();
      ctx.moveTo(okvir.width/8+okvir.width/2, 0+okvir.height/2+okvir.height/4);
      ctx.lineTo(okvir.width/8+okvir.width/2, okvir.height/4+okvir.height/2+okvir.height/4);
      ctx.moveTo(0+okvir.width/2, (okvir.height/8+okvir.height/2+okvir.height/4));
      ctx.lineTo(okvir.width/4+okvir.width/2, (okvir.height/8+okvir.height/2+okvir.height/4));
      ctx.stroke();
    }

    if(4 <= s11){
      var ci = document.getElementById("my_canvas");
      var ctx = ci.getContext("2d");
      ctx.beginPath();
      ctx.moveTo(okvir.width/8+okvir.width/2, 0+okvir.height/2);
      ctx.lineTo(okvir.width/8+okvir.width/2, okvir.height/4+okvir.height/2);
      ctx.moveTo(0+okvir.width/2, (okvir.height/8+okvir.height/2));
      ctx.lineTo(okvir.width/4+okvir.width/2, (okvir.height/8+okvir.height/2));
      ctx.stroke();
    }

    if(4 <= s10){
      var ci = document.getElementById("my_canvas");
      var ctx = ci.getContext("2d");
      ctx.beginPath();
      ctx.moveTo(okvir.width/8+okvir.width/2, 0+okvir.height/4);
      ctx.lineTo(okvir.width/8+okvir.width/2, okvir.height/4+okvir.height/4);
      ctx.moveTo(0+okvir.width/2, (okvir.height/8+okvir.height/4));
      ctx.lineTo(okvir.width/4+okvir.width/2, (okvir.height/8+okvir.height/4));
      ctx.stroke();
    }

    if(4 <= s9){
      var ci = document.getElementById("my_canvas");
      var ctx = ci.getContext("2d");
      ctx.beginPath();
      ctx.moveTo(okvir.width/8+okvir.width/2, 0);
      ctx.lineTo(okvir.width/8+okvir.width/2, okvir.height/4);
      ctx.moveTo(0+okvir.width/2, (okvir.height/8));
      ctx.lineTo(okvir.width/4+okvir.width/2, (okvir.height/8));
      ctx.stroke();
    }

    if(4 <= s8){
      var ci = document.getElementById("my_canvas");
      var ctx = ci.getContext("2d");
      ctx.beginPath();
      ctx.moveTo(okvir.width/8+okvir.width/4, 0+okvir.width/2+okvir.width/4);
      ctx.lineTo(okvir.width/8+okvir.width/4, okvir.height/4+okvir.width/2+okvir.width/4);
      ctx.moveTo(0+okvir.width/4, (okvir.height/8+okvir.width/2+okvir.width/4));
      ctx.lineTo(okvir.width/4+okvir.width/4, (okvir.height/8+okvir.width/2+okvir.width/4));
      ctx.stroke();
    }

    if(4 <= s7){
      var ci = document.getElementById("my_canvas");
      var ctx = ci.getContext("2d");
      ctx.beginPath();
      ctx.moveTo(okvir.width/8+okvir.width/4, 0+okvir.width/2);
      ctx.lineTo(okvir.width/8+okvir.width/4, okvir.height/4+okvir.width/2);
      ctx.moveTo(0+okvir.width/4, (okvir.height/8+okvir.width/2));
      ctx.lineTo(okvir.width/4+okvir.width/4, (okvir.height/8+okvir.width/2));
      ctx.stroke();
    }

    if(4 <= s6){
      var ci = document.getElementById("my_canvas");
      var ctx = ci.getContext("2d");
      ctx.beginPath();
      ctx.moveTo(okvir.width/8+okvir.width/4, 0+okvir.width/4);
      ctx.lineTo(okvir.width/8+okvir.width/4, okvir.height/4+okvir.width/4);
      ctx.moveTo(0+okvir.width/4, (okvir.height/8+okvir.width/4));
      ctx.lineTo(okvir.width/4+okvir.width/4, (okvir.height/8+okvir.width/4));
      ctx.stroke();
    }

    if(4 <= s5){
      var ci = document.getElementById("my_canvas");
      var ctx = ci.getContext("2d");
      ctx.beginPath();
      ctx.moveTo(okvir.width/8+okvir.width/4, 0);
      ctx.lineTo(okvir.width/8+okvir.width/4, okvir.height/4);
      ctx.moveTo(0+okvir.width/4, (okvir.height/8));
      ctx.lineTo(okvir.width/4+okvir.width/4, (okvir.height/8));
      ctx.stroke();
    }

    if(4 <= s4){
      var ci = document.getElementById("my_canvas");
      var ctx = ci.getContext("2d");
      ctx.beginPath();
      ctx.moveTo(okvir.width/8, okvir.height/2+okvir.height/4);
      ctx.lineTo(okvir.width/8, okvir.height);
      ctx.moveTo(0, (okvir.height/8+okvir.height/4+okvir.height/2));
      ctx.lineTo(okvir.width/4, (okvir.height/8+okvir.height/4+okvir.height/2));
      ctx.stroke();
    }

    if(4 <= s3){
      var ci = document.getElementById("my_canvas");
      var ctx = ci.getContext("2d");
      ctx.beginPath();
      ctx.moveTo(okvir.width/8, okvir.height/2);
      ctx.lineTo(okvir.width/8, okvir.height/2+okvir.height/4);
      ctx.moveTo(0, (okvir.height/8+okvir.height/2));
      ctx.lineTo(okvir.width/4, (okvir.height/8+okvir.height/2));
      ctx.stroke();
    }

    if(4 <= s2){
      var ci = document.getElementById("my_canvas");
      var ctx = ci.getContext("2d");
      ctx.beginPath();
      ctx.moveTo(okvir.width/8, okvir.height/4);
      ctx.lineTo(okvir.width/8, okvir.height/2);
      ctx.moveTo(0, (okvir.height/8+okvir.height/4));
      ctx.lineTo(okvir.width/4, (okvir.height/8+okvir.height/4));
      ctx.stroke();
    }

    if(4 <= s1){
      var ci = document.getElementById("my_canvas");
      var ctx = ci.getContext("2d");
      ctx.beginPath();
      ctx.moveTo(okvir.width/8, 0);
      ctx.lineTo(okvir.width/8, okvir.height/4);
      ctx.moveTo(0, (okvir.height/8));
      ctx.lineTo(okvir.width/4, (okvir.height/8));
      ctx.stroke();
    }

    if(4 <= kolikoo){
      var ci = document.getElementById("my_canvas");
      var ctx = ci.getContext("2d");
      ctx.beginPath();
      ctx.moveTo(okvir.width/4, 0);
      ctx.lineTo(okvir.width/4, okvir.height/2);
      ctx.moveTo(0, (okvir.height/4));
      ctx.lineTo(okvir.width/2, (okvir.height/4));
      ctx.stroke();
    }
    if(4 <= kolikoo1){
      var ci = document.getElementById("my_canvas");
      var ctx = ci.getContext("2d");
      ctx.beginPath();
      ctx.moveTo(okvir.width/2-okvir.width/4, okvir.height/2);
      ctx.lineTo(okvir.width/2-okvir.width/4, okvir.height);
      ctx.moveTo(0, (okvir.height/2+okvir.height/4));
      ctx.lineTo(okvir.width/2, (okvir.height/2+okvir.height/4));
      ctx.stroke();
    }
    if(4 <= kolikoo2){
      var ci = document.getElementById("my_canvas");
      var ctx = ci.getContext("2d");
      ctx.beginPath();
      ctx.moveTo(okvir.width/2+okvir.width/4, 0);
      ctx.lineTo(okvir.width/2+okvir.width/4, okvir.height/2);
      ctx.moveTo(okvir.width/2, (okvir.height/4));
      ctx.lineTo(okvir.width, (okvir.height/4));
      ctx.stroke();
    }
    if(4 <= kolikoo3){
      var ci = document.getElementById("my_canvas");
      var ctx = ci.getContext("2d");
      ctx.beginPath();
      ctx.moveTo(okvir.width/2+okvir.width/4, okvir.height/2);
      ctx.lineTo(okvir.width/2+okvir.width/4, okvir.height);
      ctx.moveTo(okvir.width/2, (okvir.height/2+okvir.height/4));
      ctx.lineTo(okvir.width, (okvir.height/2+okvir.height/4));
      ctx.stroke();
    }
}

/*if(on){
    var kolikoo = 0;
    var kolikoo1 = 0;
    var kolikoo2 = 0;
    var kolikoo3 = 0;
    for (var k = 0; k < elementi.length; k++) {
      if(elementi[k].x < (okvir.width/2) && elementi[k].y < (okvir.height/2)){
        kolikoo ++;
      }
      if(elementi[k].x < (okvir.width/2) && elementi[k].y > (okvir.height/2)){
        kolikoo1 ++;
      }
      if(elementi[k].x > (okvir.width/2) && elementi[k].y < (okvir.height/2)){
        kolikoo2 ++;
      }
      if(elementi[k].x > (okvir.width/2) && elementi[k].y > (okvir.height/2)){
        kolikoo3 ++;
      }
    }

    if(6 <= kolikoo){
      var ci = document.getElementById("my_canvas");
      var ctx = ci.getContext("2d");
      ctx.beginPath();
      ctx.moveTo(okvir.width/4, 0);
      ctx.lineTo(okvir.width/4, okvir.height/2);
      ctx.moveTo(0, (okvir.height/4));
      ctx.lineTo(okvir.width/2, (okvir.height/4));
      ctx.stroke();
    }
    if(6 <= kolikoo1){
      var ci = document.getElementById("my_canvas");
      var ctx = ci.getContext("2d");
      ctx.beginPath();
      ctx.moveTo(okvir.width/2-okvir.width/4, okvir.height/2);
      ctx.lineTo(okvir.width/2-okvir.width/4, okvir.height);
      ctx.moveTo(0, (okvir.height/2+okvir.height/4));
      ctx.lineTo(okvir.width/2, (okvir.height/2+okvir.height/4));
      ctx.stroke();
    }
    if(6 <= kolikoo2){
      var ci = document.getElementById("my_canvas");
      var ctx = ci.getContext("2d");
      ctx.beginPath();
      ctx.moveTo(okvir.width/2+okvir.width/4, 0);
      ctx.lineTo(okvir.width/2+okvir.width/4, okvir.height/2);
      ctx.moveTo(okvir.width/2, (okvir.height/4));
      ctx.lineTo(okvir.width, (okvir.height/4));
      ctx.stroke();
    }
    if(6 <= kolikoo3){
      var ci = document.getElementById("my_canvas");
      var ctx = ci.getContext("2d");
      ctx.beginPath();
      ctx.moveTo(okvir.width/2+okvir.width/4, okvir.height/2);
      ctx.lineTo(okvir.width/2+okvir.width/4, okvir.height);
      ctx.moveTo(okvir.width/2, (okvir.height/2+okvir.height/4));
      ctx.lineTo(okvir.width, (okvir.height/2+okvir.height/4));
      ctx.stroke();
    }
}*/

  requestAnimationFrame(zacni);
}
requestAnimationFrame(zacni);