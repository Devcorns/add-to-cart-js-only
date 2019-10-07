window.onload = designApply; 

function designData(e) {
    let products = [
        {name:"Ks",ml:"150"},
        {name:"Set Wet",ml:"170"},
        {name:"Addiction",ml:"125"}
    ];
}

function designApply(e) {
    
    let getBody = document.querySelectorAll("body");
    getBody[0].style.background = '#f1f1f1';
    let getProduct = getBody[0].getAttribute("prod-row-elem");
    console.log(getProduct);
    let newElem = this.createEle("div");
    newElem = "main-container";
    getBody[0].append(newElem);
    
}

function createEle(e) {
   switch(e) {
        case 'div':
            return document.createElement("DIV");
            break;
        case 'span':
            return document.createElement("SPAN");
            break;
   }
}
