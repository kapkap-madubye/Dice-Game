function Roll(){
    const img=document.getElementById("img");
    const img2=document.getElementById("img2")
    let RandomNum=Math.floor(Math.random()*6+1);
    let RandomNum2=Math.floor(Math.random()*6+1);
    console.log(RandomNum);
    img.setAttribute("src",`${RandomNum}.png`);
    img2.setAttribute("src",`${RandomNum2}.png`);
    let Total= RandomNum+RandomNum2;
    document.getElementById("num").innerHTML="Your Roll is "+Total;

    if(Total==12){
        document.getElementById("status").innerHTML="You Won Take That Cash";
        document.getElementById("status").style.color="green";

    }else if(Total<=5){
        document.getElementById("status").innerHTML="You Can Do Better";
        document.getElementById("status").style.color="red";

    }else{
        document.getElementById("status").innerHTML="";
    }
    
    
}
function Dice(){
    setTimeout(Roll,1000);
    const img=document.getElementById("img");
    const img2=document.getElementById("img2");
    img.setAttribute("src","dice.gif");
    img2.setAttribute("src","dice.gif");
}