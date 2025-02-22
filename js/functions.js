
//********************************** */

//---------SELECTING ELEMENTS//

const title = document.getElementById("txt");
//console.log(title);

const img = document.getElementsByClassName("nav__icon");
//console.log(img[2]); //Selecciona by Class(Yipo Array)//

const tags = document.getElementsByTagName("tags");
//console.log(tags); //Por nombre de etiqueta lik section//

const elem = document.querySelector(".nav__icon--menu"); // Seleccionabasandose en selector css/
//console.log(elem); // Selecciona un Elemento y solo el 1ro que Encuentre//

const elem1 = document.querySelectorAll(".nav__icon"); // Seleccionabasandose en selector css/
//console.log(elem1); // Selecciona un Elemento y solo el 1ro que Encuentre//

//************************************** */

//---------CREATING AN ELEMENT// ADD ATTRIBUTE //
const parent = document.querySelector(".Products");
const newElem = document.createElement("section");
newElem.setAttribute("class", "new");

parent.append(newElem); 
// creates a new <section></section> //


//****************************************** */

//-------------DOM ATTRIBUTES//
const logo = document.querySelector(".nav__icon--logo");
//logo.setAttribute("src","../Together/css/assets/Iconos/icons8-nike-an-american-multinational-corporation---footwear,-apparel,-equipment,-accessories,-and-services-96.png");//
console.log(logo.getAttribute("src")); //Show address of Element
console.log(logo.hasAttribute("src")); // Indica si tiene el Elemento Tiene el Atributo Indicado//T or F
//logo.removeAttribute("src"); // REMOVE //

if (logo.hasAttribute("src") ) {
    //alert("Tiene SRC Si que si");//
}


//----------CSS CLASSES 

//-----------MODIFY ()---------//
const parent2 = document.querySelector(".Products__articles");
//Selecciona al Selector de clase//

const parent3 = parent2.lastElementChild;
//Elije ultimo elemento de querySel(".Products__articles")//

console.log(parent3); 
//Imprime en consola parent3//

parent3.classList.add("red"); 
//Add properties to class already selected//

parent3.classList.replace("red","blue");
//Replace class

parent3.classList.remove("blue");
//Remove property already added//

// ****************************************************///

// ------ MODIFY TXT = ------ // Modify the content of the TXT

/*1*/const button = document.getElementsByTagName("button");
console.log(button[15].innerText);

button[15].innerText= "Buy Now!";

//****MODIFY STYLE****// Modify Styles in the Txt
console.log(button[15].style);
//button[15].style.backgroundColor ="gray";//

//*****************************//


// ------- EVENTS //
//Allows element can change or create actions between them//

//target.addEventlistener(event,function)//
//target=element//
//event= NameOfElement,click//
//function= CodeToExecute//
//.addEventlistener= Events Controller//


/*EXAMPLE button[15].addEventListener("click", () => 
    {console.log("Click!!");})*/

/* EXAMPLE 
const elemButton = button[15];
elemButton.addEventListener("click",() => {
    elemButton.style.backgroundColor = "yellow";
}) */

/*2*/const elemButton = button[15];
elemButton.addEventListener("click", () => {
    elemButton.classList.toggle("toggle");
})


//*********REMOVE ELEMENTS ********//

const iconRemove = document.querySelectorAll(".cart__deleteIcon");
console.log(iconRemove);

iconRemove.forEach(elem => {
    elem.addEventListener("click", () =>{
        const elemParent = elem.parentElement;
        elemParent.remove();
    })
})


const imgCart = document.getElementById("nav__icon3");
const cart1 = document.querySelector(".cart");


imgCart.addEventListener ("click", () => {
    cart1.classList.toggle("show");
})


/*const product = document.querySelector(".mouse");

product.addEventListener("mouseenter", () => {
    product.style.opacity = ".5";
})

product.addEventListener("mouseleave", () => {
    product.style.opacity = "1";
}) */

const mainMenu = document.getElementById("nav__icon1");
const menuList = document.querySelector(".mainMenu__list");

mainMenu.addEventListener("click", () => {
    menuList.classList.toggle("showMenu");
    
})

const mainMenuClose = document.querySelector(".closeMenuImg");

    mainMenuClose.addEventListener("click", () => {
        menuList.classList.remove("showMenu");
    });

    
    // CREATING THE VARIABLES 

   

    const cart = 
          cartList = document.querySelector(".Products");
          document.getElementById("mainCart"),
          cartContainer = document.getElementById("cartList");

          let articlesCart = [];

    registeringListeners ()

    function registeringListeners ()  {
            cartList.addEventListener("click", addArticle)
    }

    function addArticle (e){
        console.log("Adding course");
        if (e.target.classList.contains("articles_btn")){
            const itemSeleccionado = e.target.parentElement;
        
        console.log("article Selected !");

        leerInfo(itemSeleccionado);
        }
    }

    function leerInfo (item) {
    const infoItem = {
        img: item.querySelector(`.articles__img`).src,
        title: item.querySelector(`.articles__title`).textContent,
        price: item.querySelector(`.articles__price`).textContent,
        id: item.querySelector(`.articles_btn`).getAttribute(`data-id`),
    };
    
    console.log(infoItem);

    // Add elements to cart 

    articlesCart = [ infoItem]
    console.log(articlesCart);

    carritoHTML ()
    
}

// Until here we have all the data of the Items in the 
//console

//>> Add OBJECT to Console.


function carritoHTML () {
        articlesCart.forEach(item =>{
        const fila = document.createElement(`li`);
        console.log("li");
        fila.classList.add('cart__article');
        console.log('cart__article');
        fila.innerHTML = `
        <img src = "${item.img}"></img>
        <p>${item.title}</p>
        <p>${item.price}</p>
        
        <img src="css/assets/Iconos/close.png" class="delete-icon" alt="Eliminar producto">
            </i>
        `;

        cartContainer.appendChild(fila)    
    });  
}

let contador = 0;

const value = document.getElementById("valor");
const btnAdd = document.querySelector(".articles_btn");

btnAdd.onclick = function() {
    contador++;

    value.innerHTML = contador;   
}
