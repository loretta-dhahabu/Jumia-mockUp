var productone = {
  img: "./assets/images/shoe1.jpg",
  productName: "Sneaker",
  price: 3500,
  description:"Lorem ipsum dolor sit amet consectetur <br> adipisicing elit. Placeat, porro?",
  id:101
};

document.getElementById( "imgOne" ).src = productone.img;
document.getElementById( "prodOneName" ).innerHTML = productone.productName;
document.getElementById( "prodOnePrice" ).innerHTML = productone.price;
// document.getElementById( "prodOneDesc" ).innerHTML = productone.description;

document.getElementById( "productone" ).onclick = function ()
{
    window.location.href = "products.html" + "?" + productone.id;
}

var producttwo = {
  img: "./assets/images/shoe2.jpg",
  productName: "Sneaker2",
  price: 4500,
  description:"Lorem ipsum dolor sit amet consectetur <br> adipisicing elit. Placeat, porro?",
  id: 102,
};

document.getElementById("imgTwo").src = producttwo.img;
document.getElementById("prodTwoName").innerHTML = producttwo.productName;
document.getElementById("prodTwoPrice").innerHTML = producttwo.price;
// document.getElementById( "prodTwoDesc" ).innerHTML = productone.description;

document.getElementById("producttwo").onclick = function () {
  window.location.href = "products.html" + "?" + producttwo.id;
};
var productthree = {
  img: "./assets/images/shoe3.jpg",
  productName: "Sneaker3",
  price: 4000,
  description:"Lorem ipsum dolor sit amet consectetur <br> adipisicing elit. Placeat, porro?",
  id:103,
};
document.getElementById("imgTwo").src = producttwo.img;
document.getElementById("prodTwoName").innerHTML = producttwo.productName;
document.getElementById("prodTwoPrice").innerHTML = producttwo.price;

var productfour = {
  img: "./assets/images/Icecream.jpg",
  productName: "IceCream",
  price: 700,
  description:"Lorem ipsum dolor sit amet consectetur <br> adipisicing elit. Placeat, porro?",
  id: 104,
};
document.getElementById("imgTwo").src = producttwo.img;
document.getElementById("prodTwoName").innerHTML = producttwo.productName;
document.getElementById( "prodTwoPrice" ).innerHTML = producttwo.price;

var productfive = {
  img: "./assets/images/burger.jpg",
  productName: "Burger",
  price: 1500,
  description:"Lorem ipsum dolor sit amet consectetur <br> adipisicing elit. Placeat, porro?",
  id: 105,
};
document.getElementById("imgTwo").src = producttwo.img;
document.getElementById("prodTwoName").innerHTML = producttwo.productName;
document.getElementById( "prodTwoPrice" ).innerHTML = producttwo.price;

var productsix = {
  img: "./assets/images/clothing.jpg",
  productName: "Women Clothes",
  price: 6500,
  description:"Lorem ipsum dolor sit amet consectetur <br> adipisicing elit. Placeat, porro?",
  id: 106,
};
document.getElementById("imgSix").src = productsix.img;
document.getElementById("prodSixName").innerHTML = productsix.productName;
document.getElementById("prodSixPrice").innerHTML = productsix.price;
