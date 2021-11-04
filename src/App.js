import './App.css';
import {NavigationBar} from './Components/NavigationBar/NavigationBar';
import {MainPage} from './Pages/MainPage';
import {LogInPage} from './Pages/LogInPage';
import {SignUpPage} from './Pages/SignUpPage';

function App() {
  return (
    <div>
      <NavigationBar/>
      <SignUpPage />
    </div>
  );
}

export default App;
