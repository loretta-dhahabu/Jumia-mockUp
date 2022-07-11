var queryString = decodeURIComponent( window.location.search);

// console.log(queryString);

var carriedId = queryString.slice( 1 );
console.log( carriedId );

var productone = {
  img: "./assets/images/shoe1.jpg",
  productName: "Sneaker",
  price: 3500,
  description:
    "Lorem ipsum dolor sit amet consectetur <br> adipisicing elit. Placeat, porro?",
  id: 101,
};

if ( carriedId == productone.id )
{
    document.getElementById("productImg").src = productone.img;
    document.getElementById("productName").innerHTML = productone.productName;
    document.getElementById("productPrice").innerHTML = productone.price;
    document.getElementById("productDesc").innerHTML = productone.description;
}

var producttwo = {
  img: "./assets/images/shoe2.jpg",
  productName: "Sneaker2",
  price: 4500,
  description:
    "Lorem ipsum dolor sit amet consectetur <br> adipisicing elit. Placeat, porro?",
  id: 102,
};

if (carriedId == producttwo.id) {
  document.getElementById("productImg").src = producttwo.img;
  document.getElementById("productName").innerHTML = producttwo.productName;
  document.getElementById("productPrice").innerHTML = producttwo.price;
  document.getElementById( "productDesc" ).innerHTML = producttwo.description;
}


  let productthree = {
  img: "./assets/images/shoe3.jpg",
  productName: "Sneaker3",
  price: 4000,
  description:"Lorem ipsum dolor sit amet consectetur <br> adipisicing elit. Placeat, porro?",
  id:103,
  };

if ( carriedId == productthree.id )
{
  document.getElementById("productImg").src = productthree.img;
  document.getElementById("productName").innerHTML = productthree.productName;
  document.getElementById("productPrice").innerHTML = productthree.price;
  document.getElementById("productDesc").innerHTML = productthree.description;
}

let productfour = {
  img: "./assets/images/Icecream.jpg",
  productName: "IceCream",
  price: 700,
  description:
    "Lorem ipsum dolor sit amet consectetur <br> adipisicing elit. Placeat, porro?",
  id: 104,
};
if (carriedId == productfour.id) {
  document.getElementById("productImg").src = productfour.img;
  document.getElementById("productName").innerHTML = productfour.productName;
  document.getElementById("productPrice").innerHTML = productfour.price;
  document.getElementById("productDesc").innerHTML = productfour.description;
}

let productfive = {
  img: "./assets/images/burger.jpg",
  productName: "Burger",
  price: 1500,
  description:
    "Lorem ipsum dolor sit amet consectetur <br> adipisicing elit. Placeat, porro?",
  id: 105,
};
if (carriedId == productfive.id) {
  document.getElementById("productImg").src = productfive.img;
  document.getElementById("productName").innerHTML = productfive.productName;
  document.getElementById("productPrice").innerHTML = productfive.price;
  document.getElementById("productDesc").innerHTML = productfive.description;
}

let productsix = {
  img: "./assets/images/clothing.jpg",
  productName: "Women Clothes",
  price: 6500,
  description:
    "Lorem ipsum dolor sit amet consectetur <br> adipisicing elit. Placeat, porro?",
  id: 106,
};
if (carriedId == productsix.id) {
  document.getElementById("productImg").src = productsix.img;
  document.getElementById("productName").innerHTML = productsix.productName;
  document.getElementById("productPrice").innerHTML = productsix.price;
  document.getElementById("productDesc").innerHTML = productsix.description;
}
