import Footer from '../Footer/Footer.js';
import Saat from '../Saat/Saat.jsx';
const stil = {
	textAlign: 'center',
	color: 'brown',
	fontSize: '70px',
};

function App() {
	return (
		<div className="App">
			<h1 style={stil}>REACT KURSUNA HOS GELDINIZ</h1>
			<Saat />
			<Footer />
		</div>
	);
}

export default App;
