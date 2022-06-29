
import './App.css';
import WeatherCard from "./components/WeatherCard/weatherCard";
import { Provider } from 'react-redux';
import { store } from './Store'

function App() {
  return (
      <Provider store={store}>
            <div className="App">
                  <WeatherCard />
            </div>
      </Provider>
  );
}

export default App;
