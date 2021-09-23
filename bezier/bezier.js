//Interpolirana sta začetni in končni, ostali dve sta aproksimirani.

//var vsepikce = [];
//var vsizlepki = [];
var barva;

function myFunction() {
    barva = document.getElementById("myColor").value;
}

var prvi = 1;
var zacasni = [];
var zacasni2 = [];

var pikce = [];
var stevec = 4;
var prvi1 = [];
var prvi2 = [];
var tocka = [];

var user;
function choose(choice){
    user = choice;
    zacasni = [];
    zacasni2 = [];
    prvi = 1;
}

function color(choice){
    barva = choice;
}

window.onload = function() {
    var canvas = document.getElementById("canvas");
    canvas.addEventListener("mousedown", draw, false);
}

function draw(event) {
    var canvas = document.getElementById("canvas");
    var ctx=canvas.getContext("2d");

    //var centerX=canvas.width/2;
    //var centerY=canvas.height/2;

    //ctx.beginPath();
    //ctx.moveTo(centerX,0);
    //ctx.moveTo(0,centerY);
    //ctx.stroke();
    if(user==1){
        if(stevec > 0){

            x = event.clientX;
            y = event.clientY;

            pikce.push(x,y);

            if(stevec == 4 || stevec == 1){
                ctx.fillStyle = barva;
                ctx.beginPath();
                //ctx.arc(x-224,y-110,5,0,2*Math.PI); //kvadratek uradit
                ctx.fillRect((x-224) - 10 / 2, (y-110) - 10 / 2, 10, 10);
                //ctx.stroke();
                ctx.fill();
            }

            if(stevec == 3 || stevec == 2){
                ctx.fillStyle = barva;
                ctx.beginPath();
                ctx.arc(x-224,y-110,5,0,2*Math.PI);
                //ctx.stroke();
                ctx.fill();
            }

            stevec --;
        }

        else if(stevec <= 0){
            //var prvi1 = [];
            //var prvi2 = [];
            //var tocka = [];

            prvi1.push(pikce[0]*1 + pikce[2]*0 + pikce[4]*0 + pikce[6]*0);
            prvi1.push(pikce[0]*-3 + pikce[2]*3 + pikce[4]*0 + pikce[6]*0);
            prvi1.push(pikce[0]*3 + pikce[2]*-6 + pikce[4]*3 + pikce[6]*0);
            prvi1.push(pikce[0]*-1 + pikce[2]*3 + pikce[4]*-3 + pikce[6]*1);

            prvi2.push(pikce[1]*1 + pikce[3]*0 + pikce[5]*0 + pikce[7]*0);
            prvi2.push(pikce[1]*-3 + pikce[3]*3 + pikce[5]*0 + pikce[7]*0);
            prvi2.push(pikce[1]*3 + pikce[3]*-6 + pikce[5]*3 + pikce[7]*0);
            prvi2.push(pikce[1]*-1 + pikce[3]*3 + pikce[5]*-3 + pikce[7]*1);

            var i;
            for(i=0.0; i<=1.0; i+=0.001){
                tocka.push(prvi1[0]*1 + prvi1[1]*i + prvi1[2]*(i*i) + prvi1[3]*(i*i*i));
                tocka.push(prvi2[0]*1 + prvi2[1]*i + prvi2[2]*(i*i) + prvi2[3]*(i*i*i));
                x = tocka[0];
                y = tocka[1];

                ctx.fillStyle = barva;
                ctx.beginPath();
                ctx.arc(x-224,y-110,5,0,2*Math.PI);
                //ctx.stroke();
                ctx.fill();

                tocka = [];
            }

            stevec = 4;
            //vsepikce.push(pikce);
            pikce = [];

            prvi1 = [];
            prvi2 = [];
            tocka = [];
        }
    }   

    else if(user==2){
        if(prvi == 1){
            if(stevec > 0){

                x = event.clientX;
                y = event.clientY;
    
                pikce.push(x,y);
    
                if(stevec == 4 || stevec == 1){
                    ctx.fillStyle = barva;
                    if(stevec == 1){
                        zacasni2.push(x,y);
                    }
                    ctx.beginPath();
                    //ctx.arc(x-224,y-110,5,0,2*Math.PI); //kvadratek uradit
                    ctx.fillRect((x-224) - 10 / 2, (y-110) - 10 / 2, 10, 10);
                    //ctx.stroke();
                    ctx.fill();
                }
    
                if(stevec == 3 || stevec == 2){
                    ctx.fillStyle = barva;
                    ctx.beginPath();
                    ctx.arc(x-224,y-110,5,0,2*Math.PI);
                    //ctx.stroke();
                    ctx.fill();
                }
    
                stevec --;
            }
    
            else if(stevec <= 0){
                //var prvi1 = [];
                //var prvi2 = [];
                //var tocka = [];
    
                prvi1.push(pikce[0]*1 + pikce[2]*0 + pikce[4]*0 + pikce[6]*0);
                prvi1.push(pikce[0]*-3 + pikce[2]*3 + pikce[4]*0 + pikce[6]*0);
                prvi1.push(pikce[0]*3 + pikce[2]*-6 + pikce[4]*3 + pikce[6]*0);
                prvi1.push(pikce[0]*-1 + pikce[2]*3 + pikce[4]*-3 + pikce[6]*1);
    
                prvi2.push(pikce[1]*1 + pikce[3]*0 + pikce[5]*0 + pikce[7]*0);
                prvi2.push(pikce[1]*-3 + pikce[3]*3 + pikce[5]*0 + pikce[7]*0);
                prvi2.push(pikce[1]*3 + pikce[3]*-6 + pikce[5]*3 + pikce[7]*0);
                prvi2.push(pikce[1]*-1 + pikce[3]*3 + pikce[5]*-3 + pikce[7]*1);
    
                var i;
                for(i=0.0; i<=1.0; i+=0.001){
                    tocka.push(prvi1[0]*1 + prvi1[1]*i + prvi1[2]*(i*i) + prvi1[3]*(i*i*i));
                    tocka.push(prvi2[0]*1 + prvi2[1]*i + prvi2[2]*(i*i) + prvi2[3]*(i*i*i));
                    x = tocka[0];
                    y = tocka[1];
    
                    ctx.fillStyle = barva;
                    ctx.beginPath();
                    ctx.arc(x-224,y-110,5,0,2*Math.PI);
                    //ctx.stroke();
                    ctx.fill();
    
                    tocka = [];
                }
    
                stevec = 4;
                //vsepikce.push(pikce);
                pikce = [];
    
                prvi1 = [];
                prvi2 = [];
                tocka = [];
                prvi = 0;

                zacasni = zacasni2;
                zacasni2 = [];
            }
        }

        else if(stevec > 1){

            x = event.clientX;
            y = event.clientY;

            pikce.push(x,y);

            if(stevec == 2){
                ctx.fillStyle = barva;
                zacasni2.push(x,y);
                ctx.beginPath();
                //ctx.arc(x-224,y-110,5,0,2*Math.PI); //kvadratek uradit
                ctx.fillRect((x-224) - 10 / 2, (y-110) - 10 / 2, 10, 10);
                //ctx.stroke();
                ctx.fill();
            }

            if(stevec == 4 || stevec == 3){
                ctx.fillStyle = barva;
                ctx.beginPath();
                ctx.arc(x-224,y-110,5,0,2*Math.PI);
                //ctx.stroke();
                ctx.fill();
            }

            stevec --;
        }

        else if(stevec <= 1){
            //var prvi1 = [];
            //var prvi2 = [];
            //var tocka = [];

            prvi1.push(zacasni[0]*1 + pikce[0]*0 + pikce[2]*0 + pikce[4]*0);
            prvi1.push(zacasni[0]*-3 + pikce[0]*3 + pikce[2]*0 + pikce[4]*0);
            prvi1.push(zacasni[0]*3 + pikce[0]*-6 + pikce[2]*3 + pikce[4]*0);
            prvi1.push(zacasni[0]*-1 + pikce[0]*3 + pikce[2]*-3 + pikce[4]*1);

            prvi2.push(zacasni[1]*1 + pikce[1]*0 + pikce[3]*0 + pikce[5]*0);
            prvi2.push(zacasni[1]*-3 + pikce[1]*3 + pikce[3]*0 + pikce[5]*0);
            prvi2.push(zacasni[1]*3 + pikce[1]*-6 + pikce[3]*3 + pikce[5]*0);
            prvi2.push(zacasni[1]*-1 + pikce[1]*3 + pikce[3]*-3 + pikce[5]*1);

            var i;
            for(i=0.0; i<=1.0; i+=0.001){
                tocka.push(prvi1[0]*1 + prvi1[1]*i + prvi1[2]*(i*i) + prvi1[3]*(i*i*i));
                tocka.push(prvi2[0]*1 + prvi2[1]*i + prvi2[2]*(i*i) + prvi2[3]*(i*i*i));
                x = tocka[0];
                y = tocka[1];

                ctx.fillStyle = barva;
                ctx.beginPath();
                ctx.arc(x-224,y-110,5,0,2*Math.PI);
                //ctx.stroke();
                ctx.fill();

                tocka = [];
            }

            stevec = 4;
            //vsepikce.push(pikce);
            pikce = [];

            prvi1 = [];
            prvi2 = [];
            tocka = [];

            zacasni = zacasni2;
            zacasni2 = [];
        }
    }
}

function calculate() {
}