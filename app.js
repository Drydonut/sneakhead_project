
const wrapper = document.querySelector(".sliderwrapper")
const menuItems = document.querySelectorAll(".menuItem")

const products = [
    {
      id: 1,
      title: "Air Force",
      price: 119,
      colors: [
        {
          code: "black",
          img: "./photo/shoes/air.png",
        },
        {
          code: "darkblue",
          img: "./photo/shoes/air2.png",
        },
      ],
    },
    {
      id: 2,
      title: "Air Jordan",
      price: 149,
      colors: [
        {
          code: "lightgray",
          img: "./photo/shoes/jordan.png",
        },
        {
          code: "green",
          img: "./photo/shoes/jordan2.png",
        },
      ],
    },
    {
      id: 3,
      title: "Blazer",
      price: 139,
      colors: [
        {
          code: "lightgray",
          img: "./photo/shoes/blazer.png",
        },
        {
          code: "green",
          img: "./photo/shoes/blazer2.png",
        },
      ],
    },
    {
      id: 4,
      title: "Crater",
      price: 169,
      colors: [
        {
          code: "black",
          img: "./photo/shoes/crater1.png",
        },
        {
          code: "lightgray",
          img: "./photo/shoes/crater2.png",
        },
      ],
    },
    {
      id: 5,
      title: "Hippie",
      price: 109,
      colors: [
        {
          code: "gray",
          img: "./photo/shoes/hippie.png",
        },
        {
          code: "black",
          img: "./photo/shoes/hippie2.png",
        },
      ],
    },
];

let choosenProduct = products[0]

const currentproductImg = document.querySelector(".productImg");
const currentproductTitle = document.querySelector(".productTitle");
const currentproductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    //change the current slide
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    //change the choosen product
    choosenProduct = products[index];

    //change texts of currentProduct
    currentproductTitle.textContent = choosenProduct.title;
    currentproductPrice.textContent = "$" + choosenProduct.price;
    currentproductImg.src = choosenProduct.colors[0].img;

    //assing new colors
    currentProductColors.forEach((color, index) => {
      color.style.backgroundColor = choosenProduct.colors[index].code;
        });
  });
});

currentProductColors.forEach((color, index) => {
  color.addEventListener("click", () => {
    currentproductImg.src = choosenProduct.colors[index].img;
  });
});

currentProductSizes.forEach((size, index) => {
  size.addEventListener("click", () => {
    currentProductSizes.forEach((size) => {
      size.style.backgroundColor = "white";
      size.style.color = "black";
    });
    size.style.backgroundColor = "black";
    size.style.color = "white";
  });
});


const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
  payment.style.display = "flex";
});

close.addEventListener("click", () => {
  payment.style.display = "none";
});

