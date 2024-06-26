import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const pizzaData = [
  {
    name: 'Focaccia',
    ingredients: 'Bread with italian olive oil and rosemary',
    price: 6,
    photoName: 'pizzas/focaccia.jpg',
    soldOut: false,
  },
  {
    name: 'Pizza Margherita',
    ingredients: 'Tomato and mozarella',
    price: 10,
    photoName: 'pizzas/margherita.jpg',
    soldOut: false,
  },
  {
    name: 'Pizza Spinaci',
    ingredients: 'Tomato, mozarella, spinach, and ricotta cheese',
    price: 12,
    photoName: 'pizzas/spinaci.jpg',
    soldOut: false,
  },
  {
    name: 'Pizza Funghi',
    ingredients: 'Tomato, mozarella, mushrooms, and onion',
    price: 12,
    photoName: 'pizzas/funghi.jpg',
    soldOut: false,
  },
  {
    name: 'Pizza Salamino',
    ingredients: 'Tomato, mozarella, and pepperoni',
    price: 15,
    photoName: 'pizzas/salamino.jpg',
    soldOut: true,
  },
  {
    name: 'Pizza Prosciutto',
    ingredients: 'Tomato, mozarella, ham, aragula, and burrata cheese',
    price: 18,
    photoName: 'pizzas/prosciutto.jpg',
    soldOut: false,
  },
];

function App() {
  return (
    <div className='container'>
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  const style = {};

  return (
    <header className='header'>
      <h1 style={style}>Welcome to Pizzeria!</h1>
    </header>
  );
}

function Menu() {
  return (
    <main className='menu'>
      <h2>Our Menu!!</h2>

      <ul className='pizzas'>
        {pizzaData
          // .filter((pizza) => !pizza.soldOut)
          .map((pizza) => {
            return (
              <Pizza
                name={pizza.name}
                ingredients={pizza.ingredients}
                price={pizza.price}
                photoName={pizza.photoName}
                soldOut={pizza.soldOut}
                key={pizza.name}
              />
            );
          })}
      </ul>
    </main>
  );
}

function Pizza(props) {
  return (
    <li className={`pizza ${props.soldOut ? 'sold-out' : ''}`}>
      <img src={props.photoName} alt={props.name} />
      <div>
        <h3>{props.name}</h3>
        <p>{props.ingredients}</p>
        <span>{props.soldOut ? 'SOLD OUT' : props.price}</span>
      </div>
    </li>
  );
}

function Footer() {
  const hour = new Date().getHours();

  const openHour = 12;
  const closeHour = 22;

  const isOpen = hour >= openHour && hour <= closeHour;
  console.log(isOpen);

  return (
    <footer className='footer'>
      {isOpen ? (
        <Order openHour={openHour} closeHour={closeHour} />
      ) : (
        <p>
          We're happy to welcome you between {openHour}:00 to {closeHour}:00 :)
        </p>
      )}
    </footer>
  );
}

function Order(props) {
  return (
    <div className='order'>
      <p>
        We are open until {props.closeHour}, Come visit us or order online!!
      </p>
      <button className='btn'>Order</button>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
