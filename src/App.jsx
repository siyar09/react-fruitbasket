import { useState } from 'react';
import './App.css';
import FruitList from './components/FruitList/FruitList';
import OrderForm from './components/OrderForm/OrderForm';


function App() {
  const [bananas, setBananas] = useState(0);
  const [strawberries, setStrawberries] = useState(0);
  const [apple, setApple] = useState(0);
  const [kiwi, setKiwi] = useState(0);
  const [formData, setFormData] = useState({
    voornaam: "",
    achternaam: "",
    leeftijd: "",
    postcode: "",
    frequency: "weekly",
    tijd: "overdag",
    opmerking: "",
});

const resetAll = () => {
    setBananas(0);
    setStrawberries(0);
    setApple(0);
    setKiwi(0);
};

const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
};

const handleSubmit = () => {
    console.log("Formulier verzonden met de volgende gegevens:");
    console.log("Voornaam:", formData.voornaam);
    console.log("Achternaam:", formData.achternaam);
    console.log("Leeftijd:", formData.leeftijd);
    console.log("Postcode:", formData.postcode);
    console.log("Bestelfrequentie:", formData.frequency);
    console.log("Bezorgtijd:", formData.tijd);
    console.log("Opmerking:", formData.opmerking);
    console.log("🍌 Bananen:", bananas);
    console.log("🍓 Aardbeien:", strawberries);
    console.log("🍏 Appels:", apple);
    console.log("🥝 Kiwi's:", kiwi);
};


return (
    <>
      <h1>Fruitmand bezorgservice</h1>
      <FruitList bananas={bananas} setBananas={setBananas} strawberries={strawberries} setStrawberries={setStrawberries} apple={apple} setApple={setApple} kiwi={kiwi} setKiwi={setKiwi} resetAll={resetAll} />
      <OrderForm formData={formData} handleInputChange={handleInputChange} handleSubmit={handleSubmit} />
    </>
  );
}

export default App;
