const colorList = [
    "#FF33F9", "#DA3482", "#FF0E0E", 
    "#7A82DE", "#232323", "#230122",
    "#161616", "#121212", "#160803", 
    "#120203"
]

const btn = document.getElementById("btn")
const color = document.getElementById("color")

btn.addEventListener("click", ()=>{
    let randomNumber = Math.floor(Math.random() * 10);
    document.body.style.backgroundColor = colorList[randomNumber]
    color.innerText = colorList[randomNumber]
})