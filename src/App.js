import './App.css';
import WeatherCard from "./components/WeatherCard/weatherCard";
import { Provider } from 'react-redux';
import { store } from './Store'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";


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
