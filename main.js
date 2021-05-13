let cart =[]
let total = 0

let toppings = {
  noodles:{
  name: 'noodles',
   price: 3.5977676,
   imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiaKdZemPZ4LPrWuMXqDvtbYLGupo9kxjq-mTvhiae9B0HAw00KqFm5ah75tThXYAT6O2Gdr1_&usqp=CAc'
  },
  cheese: {
  name: 'cheese',
  price: 2.22,
  imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTULuOTIIw8jpPqZmxg0iFVYFITmYZzb5RLWNmoEoFsGJSilnu0ZnEplq-cGJMT4pKc3D_2XPQ&usqp=CAc'
  },
 mysteriousRedSauce: {
  name: 'mysteriousRedSauce',
  price: 7,
  imgUrl: 'https://brianclifton.com/wp-content/uploads/2012/10/ketchup.jpg'
  },
  bacon: {
    name: 'bacon',
    price: 3.50,
    imgUrl: 'https://bulkfoods.com/963-large_default/bacon-bits-real.jpg'
    }
}



function addNoodles(){
  let  item ={name: 'noodles', price: 3.5977676}
  cart.push(item)
  console.log("you added noodles", cart)
  // this adds the noodles
  draw()
}

function addItem(itemName){
  // this finds the item out of the dictoinary and adds it to the cart
  let item = toppings[itemName]
  cart.push(item)
  draw()
}

function checkout(){
  cart = []
  total = 0
  draw()
}

function draw(){
  let template = ''
  // let cartElm = document.getElementById('cart')
  cart.forEach(item => {
    total += item.price
    template += `<li>${item.name} - $${item.price.toFixed(2)}</li>`
  })
  // cartElm.innerHTML = template
  document.getElementById('cart').innerHTML = template
  document.getElementById('total').innerText = total.toFixed(2)
}

function drawToppings(){
let template = ''

for (let key in toppings){
  let topping = toppings[key]
  template += `
    <div class="col-4 text-center">
      <img class="img-fluid"
        src="${topping.imgUrl}"
        alt="">
      <button class="btn btn-primary btn-block" onclick="addItem('${topping.name}')"> ${topping.name}</button>
      <p>$${topping.price.toFixed(2)}</p>
    </div>`
}
// NOTE for when toppings is an array
// toppings.forEach(topping => {
//   template += `
//   <div class="col-4 text-center">
//     <img class="img-fluid"
//       src="${topping.imgUrl}"
//       alt="">
//     <button class="btn btn-primary btn-block" onclick="addItem('${topping.name}')"> ${topping.name}</button>
//     <p>$${topping.price.toFixed(2)}</p>
//   </div>`
// })
document.getElementById('items').innerHTML = template
}

function party(){
  document.getElementById('party').classList.toggle('party-mode')
}

function startInterval(){
  let interval = setInterval(party, 500)
}

startInterval()

drawToppings()