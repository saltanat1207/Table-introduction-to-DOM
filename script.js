var boxes = document.querySelectorAll(".box");
document.body.style.margin = "0";
for (let i=0; i<boxes.length; i++){
boxes[i].style.height ="100px";
boxes[i].style.lineHeight ="100px";
boxes[i].style.verticalAlign ="middle";
boxes[i].style.fontSize ="30px";
boxes[i].style.backgroundColor ="olive";
boxes[i].style.border ="solid 10px rgb(53,45,16)";
boxes[i].style.borderRadius ="20px";
boxes[i].style.textAlign ="center";
boxes[i].style.color ="white";
boxes[i].boxSizing ="border-box";

//if id of current is not "large"
// then apply 100px width

if (boxes[i].id !=="large") {
    boxes[i].style.width = "32%";
    boxes[i].style.float = "left";
}
} 
document.querySelector(".clearfix").style.clear = "both";