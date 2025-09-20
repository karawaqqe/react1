import "./App.css";
import fish from "./fish.jpg";

function App() {
  const name = "Андрій";
  const website = { name: "Fish", url: "https://www.dota2.com/home" };
  const num1 = 6;
  const num2 = 10;
  const colors = ["Червоний", "Синій", "Зелений"];

  return (
    <div className="app">
      <h1 className="app__title">{name}</h1>
      <p className="app__welcome">Ласкаво просимо до нашого сайту!</p>
      <img className="app__image" src={fish} alt="Fish logo" width="300px" />
      <a className="app__link" href={website.url}>
        {website.name}
      </a>
      <p className="app__sum">Сума: {num1 + num2}</p>
      <ul className="list">
        {colors.map((color) => (
          <li key={color} className="list__item" data-color={color.toLowerCase()}>
            {color}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;