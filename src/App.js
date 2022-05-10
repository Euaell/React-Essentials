import './App.css';
import restaurant from "./shop.png";

function Header(props){
	return (
		<header>
			<h1>{props.name} Machiato</h1>
		</header>
	)
}
function Main(props){
	return (
		<section>
			<p>We serve the most {props.adj} coffee around.</p>
			<img src={restaurant} alt="A Restaurant PNG" height={200}/>
			<ul style={{textAlign: "left"}}>
				{props.dishes.map((dish) => <li key={dish.id}>{dish.title}</li>)}
			</ul>
		</section>
	)
}

function Footer(props) {
	return ( 
		<footer>
			<p>copyright {props.year}</p>
		</footer>
	 );
}

const dishes = [
	"Pasta with vegetables",
	"Asa wet",
	"Quanta firfir",
	"Tegabino"
]

const dishObjects = dishes.map((dish, i) => ({id: i, title: dish}));

function App() {
  return (
    <div className="App">
		<Header name="Proxima"/>
		<Main adj="delicious" dishes={dishObjects}/>
		<Footer year= {new Date().getFullYear()}/>
    </div>
  );
}

export default App;
