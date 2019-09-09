document.querySelector('#canvas').style.position = 'absolute';

const canvas = document.querySelector('#canvas');

let c = canvas.getContext('2d');


function drawGraph(xloop = 10, yloop = 10, width = innerWidth, height = innerWidth){
    canvas.width = width;
    canvas.height = height;

    for(let i = 0; i < Math.ceil(width); i += xloop){
        c.lineWidth = .4;
        c.beginPath();
        c.moveTo(0, i); 
        c.lineTo(i + width, i);
        c.stroke();
    }
    for(let i = 0; i < Math.ceil(height); i += yloop){
        c.lineWidth = .4;
        c.beginPath();
        c.moveTo(i, 0); 
        c.lineTo(i, height);
        c.stroke();
    }
}
drawGraph();
