document.body.onload = createElements;

function createElements(){
   // let cat = document.querySelector("img");
   // let angle = Math.PI / 2;
   // function animate(time, lastTime) {
   //   if (lastTime != null) {
   //     angle += (time - lastTime) * 0.001;
   //   }
   //   cat.style.top = (Math.sin(angle) * 20) + "px";
   //   cat.style.left = (Math.cos(angle) * 200) + "px";
   //   requestAnimationFrame(newTime => animate(newTime, time));
   // }
   // requestAnimationFrame(animate);
   
   // let figure = document.createElement("figure");
   // let image = document.createElement("img");
   // image.src = "../bilder/apple.jpg";

    //let caption = document.createElement("figcaption");
    //let figText = document.createTextNode("Äpple");
    
    createHeader();
    createMainSectionFame();
    createSection2();
    createMainSectionShame();
    createSection3();
    createFooter();
    
    

    
    
    //for(let i = 0; i < 2; i++) createMainSectionShame();
    //section.appendChild(figure); 
    //figure.appendChild(image);
    

    //section.appendChild(caption);
    //caption.appendChild(figText);
   
}


function createHeader(){
    let header = document.createElement("header");
    let h1 = document.createElement("h1");
    let title = document.createTextNode("Rubrik");

    header.appendChild(h1);
    h1.appendChild(title);
    document.getElementById("wrapper").appendChild(header);
}
function createFooter(){
    let footer = document.createElement("footer");
    let p = document.createElement("p");
    let footerText = document.createTextNode("test");
    footer.appendChild(p);
    p.appendChild(footerText);
    document.getElementById("wrapper").appendChild(footer);
}



function createMainSectionFame(){
    let article1 = document.createElement("article");
    let text = document.createElement("p")
    let pText = document.createTextNode("Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae aperiam laboriosam ratione pariatur labore optio quod. Natus temporibus, beatae nulla dignissimos libero officia nisi quos voluptatem omnis nobis nostrum quo?");
    
    let figure = document.createElement("figure");
    let image = document.createElement("img");
    image.src = "./bilder/apple.jpg";
    let caption = document.createElement("figcaption");
    let figText = document.createTextNode("Äpple");

    let buttonNext = document.createElement("button");
    buttonNext.id = "buttonNextID"
    let nextLink = document.createElement("a");
    nextLink.href = "https://www.aftonbladet.se/";
    
    
    article1.appendChild(figure); 
    article1.appendChild(caption);
    article1.appendChild(text);
    article1.appendChild(buttonNext);
    buttonNext.appendChild(nextLink);
    text.appendChild(pText);
    figure.appendChild(image);
    figure.appendChild(caption);
    caption.appendChild(figText);



    document.getElementById("sectionFame").appendChild(article1);
}

function createMainSectionShame(){
    let article2 = document.createElement("article");
    let text = document.createElement("p")
    let pText = document.createTextNode("test2");
    
    let figure = document.createElement("figure");
    let image = document.createElement("img");
    image.src = "./bilder/Orange.jpg";
    let caption = document.createElement("figcaption");
    let figText = document.createTextNode("Apelsin");

   
    article2.appendChild(figure); 
    article2.appendChild(caption);
    article2.appendChild(text);
    text.appendChild(pText);
    figure.appendChild(image);
    figure.appendChild(caption);
    caption.appendChild(figText);


    document.getElementById("sectionShame").appendChild(article2);
}

function createSection2(){
    let article3 = document.createElement("article");
    let text = document.createElement("p")
    let pText = document.createTextNode(" test3");
    

    let figure = document.createElement("figure");
    let image = document.createElement("img");
    image.src = "./bilder/Pineapple.jpg";
    let caption = document.createElement("figcaption");
    let figText = document.createTextNode("Annanas");

    article3.appendChild(figure); 
    article3.appendChild(caption);
    article3.appendChild(text);
    text.appendChild(pText);
    figure.appendChild(image);
    figure.appendChild(caption);
    caption.appendChild(figText);
    document.getElementById("sectionFame").appendChild(article3);
}

function createSection3(){
    let article4 = document.createElement("article");
    let text = document.createElement("p")
    let pText = document.createTextNode(" test4?");
    

    let figure = document.createElement("figure");
    let image = document.createElement("img");
    image.src = "./bilder/passion.jpg";
    let caption = document.createElement("figcaption");
    let figText = document.createTextNode("passionsfrukt");

    article4.appendChild(figure); 
    article4.appendChild(caption);
    article4.appendChild(text);
    text.appendChild(pText);
    figure.appendChild(image);
    figure.appendChild(caption);
    caption.appendChild(figText);
    document.getElementById("sectionShame").appendChild(article4);
}

