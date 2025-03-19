

var currentSection 

window.addEventListener('DOMContentLoaded', function () {
    var hello = this.document.querySelector("canvas");
    this.alert(hello);
    this.alert(window.getComputedStyle(hello).width);
});

/*This code will trigger upon when the website is opened*/
window.onload = function() {
    currentSection = document.getElementById("about-me");
    back = document.getElementById("back");
    const canvas = document.querySelector("canvas");
    const context = canvas.getContext("2d");

    //Customization
    const colorPicker = document.getElementById("colorPicker");
    const lineWidth = document.getElementById("lineWidth");
    //alert(colorPicker);
    //alert(canvas.getBoundingClientRect().x);
    
    context.canvas.innerHeight = window.innerHeight;
    let drawing = false;
    let data = [];
    
    let lineSize = '5';
    let color = 'black';

    
    function adjustCanvas() {
        //alert("aaa");
        let previous = context.getImageData(0, 0, context.canvas.clientWidth, context.canvas.innerHeight);
        context.canvas.width = canvas.clientWidth;
        context.canvas.innerHeight = window.innerHeight;
        
        context.putImageData(previous, 0, 0);
        //alert(canvas.clientWidth);
    }

    
    
    //data.push(context.getImageData(0, 0, canvas.clientWidth, canvas.clientHeight));
    
    function startLine(e) {
        alert("toucing");
        drawing = true;
        draw(e);
    }

    function endLine(e) {
        drawing = false;
        context.beginPath();
        //data.push(context.getImageData(0, 0, context.canvas.innerWidth, context.canvas.innerHeight));
    }

    function draw(e) {
        
        if (!drawing) return;
        
        context.lineWidth = lineSize;
        context.lineCap = 'round';
        context.strokeStyle = color;
        
        
        
        context.lineTo(e.clientX - canvas.getBoundingClientRect().x, e.clientY - canvas.getBoundingClientRect().y);
        context.stroke();
        context.beginPath();
        context.moveTo(e.clientX - canvas.getBoundingClientRect().x, e.clientY - canvas.getBoundingClientRect().y);
    }

    function test() {
        console.log("maybe im not so perfect");
        console.log(data.length);
        context.putImageData(data[data.length - 3], 0, 0);
        data.pop();
        
    }

    
    function changeColor () {
        color = colorPicker.value;
    }

    function changeWidth () {
        console.log("hh");
        lineSize = lineWidth.value;
    }
    // Event Listeners
    canvas.addEventListener("mousedown", startLine);
    canvas.addEventListener("mouseup", endLine);
    canvas.addEventListener("mousemove", draw);
    canvas.addEventListener("touchstart", startLine);
    canvas.addEventListener("touchend", endLine);
    canvas.addEventListener("touchmove", draw);
    canvas.addEventListener("mouseleave", endLine);
    window.addEventListener("resize", adjustCanvas);
    back.addEventListener("click", test);
    colorPicker.addEventListener("change", changeColor);
    lineWidth.addEventListener("change", changeWidth);

    
}


function NavButton(id) {
    /*alert(id)*/
    var newSection = document.getElementById(document.getElementById(id).getAttribute("sectionID"));
    
    currentSection.classList.add("hidden");

    currentSection = newSection;
    currentSection.classList.remove("hidden");
    
}


