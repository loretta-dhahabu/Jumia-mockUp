var productone = {
  img: "./assets/images/shoe1.jpg",
  productName: "Sneaker",
  price: 3500,
  description:
        "Lorem ipsum dolor sit amet consectetur <br> adipisicing elit. Placeat, porro?",
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
  description:
    "Lorem ipsum dolor sit amet consectetur <br> adipisicing elit. Placeat, porro?",
  id: 102,
};

document.getElementById("imgTwo").src = producttwo.img;
document.getElementById("prodTwoName").innerHTML = producttwo.productName;
document.getElementById("prodTwoPrice").innerHTML = producttwo.price;
// document.getElementById( "prodTwoDesc" ).innerHTML = productone.description;

document.getElementById("producttwo").onclick = function () {
  window.location.href = "products.html" + "?" + producttwo.id;
};

