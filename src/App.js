import {BrowserRouter} from 'react-router-dom';
import {NavigationBar} from './Components/NavigationBar/NavigationBar';
import {Routes} from './Components/Routes/Routes';

function App() {
  return (
    <BrowserRouter>
      <NavigationBar/>
      <Routes />
    </BrowserRouter>
  );
}

export default App;
