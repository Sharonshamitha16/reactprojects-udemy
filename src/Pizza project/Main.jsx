import React from 'react'

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

const Pizza = ({pizzaobj}) => {
  console.log(pizzaobj);
  // if(pizzaobj.soldOut) return null;
  return (
    <div className={`pizza ${pizzaobj.soldOut ? "sold-out": ""}`}>
      {/* <img src='/pizzas/spinaci.jpg' />
       */}
      <img src={pizzaobj.photoName} alt={pizzaobj.name} />
      <h1>{pizzaobj.name}</h1>
      <h3>{pizzaobj.ingredients}</h3>
      <h3>{pizzaobj.price}</h3>

      <span>{pizzaobj.soldOut ? "SOLD OUT": ""}</span>
    </div>
  )
}

const Main = () => {
  
  const pizzas = pizzaData
  // const pizzas = []
  const numPizzas = pizzas.length
  
  return (
    <main className='menu'><h2>Our Menu</h2>
      {/* <Pizza
        name='pizza Spinaci' 
        ingredients='Tomato,mozarella,spinach and ricotta cheese'
        photoName='/pizzas/spinaci.jpg'
        price={10} />
              <Pizza
        name='pizza Funghi' 
        ingredients='Tomato,mushrooms'
        photoName='/pizzas/funghi.jpg'
        price={12} /> */}

      {/* condtional rendering -- using a length  to allow the rendering through the condtion i.e used and opertaor if it's one fails it won't ceck another as it's num it throws u number 0 in ui which is not gud so we can use condtionif >0 to render ... if not it fails to check the other one if the first one fails to be ... */}

      {/* {numPizzas >0  && <ul className='pizzas'>
        {pizzaData.map((pizza, index) => (<Pizza key={index} pizzaobj={pizza} />))}</ul>} */}
      {
        numPizzas > 0 ?
          (<>
          <p>
          Authentic Italian cuisine. 6 creative dishes to choose from. All from our stone oven, all organic, all delicious.
          </p>
            <ul className='pizzas'>
              {
                pizzaData.map(
                  (pizza, index) =>
                  (
                    <Pizza key={index} pizzaobj={pizza} />
                  )
                )
              }</ul></>
          )
          : <p>We're still working on the Menu.Please come back Later..!!</p>}


    </main>
  )
}

export default Main