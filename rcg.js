const container = document.querySelector(".container");

for (let i = 0; i < 30; i++) {
    const colorcontainer = document.createElement("div")
    colorcontainer.classList.add("color-container");
    container.appendChild(colorcontainer)
}

const allcolors = document.querySelectorAll(".color-container");

function generate(){
   allcolors.forEach(colorcontainer=> {
        const newcolor = randomcolor();
        console.log(newcolor);
        colorcontainer.style.backgroundColor = "#"+newcolor;
        colorcontainer.innerText = "#"+newcolor;
   });
}
generate()

function randomcolor(){
    const chars = "0123456789abcdef"
    const colorLength = 6;
    let color = "";
    for(let i = 0 ; i<colorLength ; i++)
    {
        const randomNum = Math.floor(Math.random() * chars.length);
        color += chars.substring(randomNum , randomNum+1)
    }
    return color
}