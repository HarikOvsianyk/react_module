import {BrowserRouter} from 'react-router-dom';
import {NavigationBar} from './Components/NavigationBar/NavigationBar';
import {Routes} from './Components/Routes/Routes';
import Theme from './Components/UI/Theme';

function App() {
  return (
    <Theme>
      <BrowserRouter>
        <NavigationBar/>
        <Routes />
      </BrowserRouter>
    </Theme>
  );
}

export default App;
