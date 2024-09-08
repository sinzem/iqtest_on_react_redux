import Header from "./components/header/Header";
import blueBrain from "../src/assets/img/blue_brain.png";

function App() {
  return (
    <div className="App">
      <Header title="Hello World" img={blueBrain}/>
    </div>
  );
}

export default App;


