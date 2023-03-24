import './App.scss';
import Navbar from './components/Navbar';
import { Provider } from "react-redux";
import store from "./store";
import Slider from './components/Slider';
import Products from './components/Products';
import Gallery from './components/Gallery';
import Formulario from './components/Formulario';
import Footer from './components/Footer'; 

function App() {
  const images = [
		{
			id: '1',
			image:require('./images/slider1.png'),
		},
		{
			id: '2',
			image:require('./images/slider2.png'),
    },
		{
			id: '3',
			image:require('./images/slider3.png'),
    }
	]
  return (
    <div className='App'>
    <Provider store = {store}>
      <header className="iconos">
        <Navbar/>
      </header>
      <main>
        <Slider images={images}/>
        <Products />
        <Gallery />
        <Formulario/>
      </main>
      <footer>
        <Footer/>
      </footer>
    </Provider>
    
    </div>
  );
}

export default App;