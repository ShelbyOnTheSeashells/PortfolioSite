

var currentSection 


/*This code will trigger upon when the website is opened*/
window.onload = function() {
    currentSection = document.getElementById("about-me");
    back = document.getElementById("back");
    const canvas = document.getElementById("canvas");
    const context = canvas.getContext("2d");

    context.canvas.innerWidth = window.innerWidth;
    context.canvas.innerHeight = window.innerHeight;
    let drawing = false;
    let data = [];
    data.push(context.getImageData(0, 0, context.canvas.innerWidth, context.canvas.innerHeight));
    
    function startLine(e) {
        drawing = true;
        draw(e);
    }

    function endLine(e) {
        drawing = false;
        context.beginPath();
        data.push(context.getImageData(0, 0, context.canvas.innerWidth, context.canvas.innerHeight));
    }

    function draw(e) {
        if (!drawing) return;
        context.lineWidth = 5;
        context.lineCap = 'round';
        context.strokeStyle = "black";
        
        
        
        context.lineTo(e.offsetX, e.offsetY);
        context.stroke();
        context.beginPath();
        context.moveTo(e.offsetX, e.offsetY);
    }
    
    function adjustCanvas() {
        context.canvas.innerWidth = window.innerWidth;
        context.canvas.innerHeight = window.innerHeight;
        console.log("Resizing");
    }

    function test() {
        console.log("maybe im not so perfect");
        console.log(data.length);
        context.putImageData(data[data.length - 3], 0, 0);
        data.pop();
        
    }

    // Event Listeners
    canvas.addEventListener("mousedown", startLine);
    canvas.addEventListener("mouseup", endLine);
    canvas.addEventListener("mousemove", draw);
    canvas.addEventListener("mouseleave", endLine);
    window.addEventListener("resize", adjustCanvas);
    back.addEventListener("click", test);

    
}


function NavButton(id) {
    /*alert(id)*/
    var newSection = document.getElementById(document.getElementById(id).getAttribute("sectionID"));
    
    currentSection.classList.add("hidden");

    currentSection = newSection;
    currentSection.classList.remove("hidden");
    
}


