import "./App.css";
import Header from "./components/Header";
import { WeatherProvider } from "./context/WeatherContext";
import Container from "./components/Container";

const App = () => {
  return (
    <div className="App">
      <WeatherProvider>
        <Header />
        <Container />   
      </WeatherProvider>
    </div>
  );
};

export default App;
