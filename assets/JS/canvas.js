function makeCanvas() {
    var PI_TWO = Math.PI * 2;

    var canvas1 = document.getElementById('canvas1');
    var ctx1 = canvas1.getContext('2d');
    

    ctx1.font = '32pt Arial';
    ctx1.fillStyle = 'DeepSkyBlue';
    ctx1.strokeStyle = 'black';

    ctx1.fillText("i LOVE yOU",100,150);
    ctx1.strokeText("i LOVE yOU",100,150);
    


    var canvas2 = document.getElementById('canvas2');
    var ctx2 = canvas2.getContext('2d');

    ctx2.fillStyle ='#f00';
    ctx2.strokeStyle = "#000";
    ctx2.lineWidth = 10;
    ctx2.fillRect(45,5,135,135);
    ctx2.strokeRect(45,5,135,135);

    ctx2.fillStyle ='#666';
    ctx2.fillRect(200,5,135,135);
    
    ctx2.fillStyle ='#666';
    ctx2.fillRect(45,160,135,135);

    ctx2.fillStyle ='#f00';
    ctx2.fillRect(200,160,135,135);
    ctx2.strokeRect(200,160,135,135);




    var canvas3 = document.getElementById('canvas3');
    var ctx3 = canvas3.getContext('2d');

    ctx3.fillStyle = "#f00";
    ctx3.strokeStyle = "#666";
    ctx3.lineWidth = 5;
    ctx3.beginPath();
    ctx3.moveTo(100,100);
    ctx3.lineTo(150,200);
    ctx3.lineTo(200,200);
    ctx3.lineTo(200,290);
    ctx3.lineTo(290,290);
    ctx3.lineTo(290,100);
    ctx3.lineTo(100,100);
    ctx3.lineTo(50,50);
    
    ctx3.stroke();
    ctx3.fill();
    ctx3.closePath();



    var canvas4 = document.getElementById('canvas4');
    var ctx4 = canvas4.getContext('2d');

    ctx4.fillStyle = "#00f";

    ctx4.beginPath();
    ctx4.arc(200,30,25,0,PI_TWO);
    ctx4.fill();
    ctx4.closePath();

    ctx4.fillStyle = "#0f0";

    ctx4.beginPath();
    ctx4.arc(200,100,45,0,PI_TWO);
    ctx4.fill();
    ctx4.closePath();

    ctx4.fillStyle = "#f00";

    ctx4.beginPath();
    ctx4.arc(200,220,75,0,PI_TWO);
    ctx4.fill();
    ctx4.closePath();



    var canvas5 = document.getElementById('canvas5');
    var ctx5 = canvas5.getContext('2d');
    var posX = 0;
    var posY = 0;
    

    setInterval(function() {
         posX += 1 ;
         posY += 1 ;

        ctx5.fillStyle = "#000";
        ctx5.fillRect(0,0,canvas5.width,canvas5.height);

        ctx5.fillStyle = "#fff";
        ctx5.beginPath();
        ctx5.arc(posX,120,75,0,PI_TWO);
        ctx5.fill();

        ctx5.fillStyle = "#f00";
        ctx5.beginPath();
        ctx5.arc(150,posY,55,0,PI_TWO);
        ctx5.fill();

        ctx5.fillStyle = "#00f";
        ctx5.beginPath();
        ctx5.arc(360,posY,55,0,PI_TWO);
        ctx5.fill();

    },30)

 
}