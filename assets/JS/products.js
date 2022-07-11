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
