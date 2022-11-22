// Write your code on this file. Please don't change the existing code
// unless absolutely needed.

//Initial price of the burger
var wholeWheatBun = 20;

//Ingredients of the burger along with the price
// Clue: the name is same as the textcontent of the button. Will be useful later on :)
var ingredients = {
  Patty: 80,
  Cheese: 10,
  Tomatoes: 20,
  Onions: 20,
  Lettuce: 20
};

//Current state of the ingredients in the burger
var state = {
  Patty: true,
  Cheese: true,
  Tomatoes: true,
  Onions: true,
  Lettuce: true
};

// This function renders the entire screen everytime the state changes accordingly
function renderAll() {
  
  renderPatty();
  renderCheese();
  renderTomatoes();
  renderOnions();
  renderLettuce();
  renderPrice();
}

function renderPatty() {
  let patty = document.querySelector("#patty");
  //you can also use getElementById
  if (state.Patty) {
    patty.style.display = "inherit";
  } else {
    patty.style.display = "none";
  }
}

function renderCheese() {
   
    let cheese = document.querySelector("#cheese");
    //you can also use getElementById
    if (state.Cheese) {
      cheese.style.display = "inherit";
    } else {
      cheese.style.display = "none";
    }
  }

function renderTomatoes() {
  let tomatoes = document.querySelector("#tomato");
    //you can also use getElementById
    if (state.Tomatoes) {
      tomatoes.style.display = "inherit";
    } else {
      tomatoes.style.display = "none";
    }
  }

function renderOnions() {
  let onions = document.querySelector("#onion");
    //you can also use getElementById
    if (state.Onions) {
      onions.style.display = "inherit";
    } else {
      onions.style.display = "none";
    }
}

function renderLettuce() {
  let lettuce = document.querySelector("#lettuce");
    //you can also use getElementById
    if (state.Lettuce) {
      lettuce.style.display = "inherit";
    } else {
      lettuce.style.display = "none";
    }
}
const btn_patty = document.getElementById('btn-patty')
document.querySelector(".btn-patty").onclick = function () {
  state.Patty = !state.Patty;
  renderAll();

  if (state.Patty === true) {
    btn_patty.classList.add("active");
} else {
  btn_patty.classList.remove("active");
}

if (state.Patty === !true) {
  btn_lettuce.classList.add("hide");
} else {
btn_lettuce.classList.remove("hide");
}
};

// Trial 2 - Setup event listener for the cheese button
const btn_cheese = document.getElementById('btn-cheese')
document.querySelector(".btn-cheese").onclick = function () {
  state.Cheese = !state.Cheese;
  renderAll();

  if (state.Cheese === true) {
    btn_cheese.classList.add("active");
} else {
  btn_cheese.classList.remove("active");
}

if (state.Cheese === !true) {
  btn_lettuce.classList.add("hide");
} else {
btn_lettuce.classList.remove("hide");
}
};

// Trial 2 - Setup event listener for the tomatoes button

const btn_tomato = document.getElementById('btn-tomato')
document.querySelector(".btn-tomatoes").onclick = function () {
  state.Tomatoes = !state.Tomatoes;
  renderAll();

  if (state.Tomatoes === true) {
    btn_tomato.classList.add("active");
} else {
  btn_tomato.classList.remove("active");
}

if (state.Tomatoes === !true) {
  btn_lettuce.classList.add("hide");
} else {
btn_lettuce.classList.remove("hide");
}
};

// Trial 2 - Setup event listener for the onion button
const btn_onion = document.getElementById('btn-onion')

document.querySelector(".btn-onions").onclick = function () {
  state.Onions = !state.Onions;
  renderAll();

  if (state.Onions === true) {
    btn_onion.classList.add("active");
} else {
  btn_onion.classList.remove("active");
}

if (state.Onions === !true) {
  btn_lettuce.classList.add("hide");
} else {
btn_lettuce.classList.remove("hide");
}
};

// Trial 2 - Setup event listener for the lettuce button
const btn_lettuce = document.getElementById('btn-lettuce')
document.querySelector(".btn-lettuce").onclick = function () {
  state.Lettuce = !state.Lettuce;
  renderAll();

  if (state.Lettuce === true) {
    btn_lettuce.classList.add("active");
} else {
  btn_lettuce.classList.remove("active");
}

if (state.Lettuce === !true) {
  btn_lettuce.classList.add("hide");
} else {
btn_lettuce.classList.remove("hide");
}
};

//Challenge 1 - Add/Remove the class active to the buttons based on state
// Adding/Removing the active class with each eventListener


//Challenge 2 - Render only the items selected in the ingredients board based on the state



//Judgement 1
//In the p element having price-details as the class, display the calculated
//price based on ingredients
function renderPrice(){
  let sum=20;
  Object.keys(state).forEach(item=>{
    if(state[item]){
      sum+=ingredients[item];
    }
  })
  document.querySelector(".price-details").innerText=`INR ${sum}`;
}