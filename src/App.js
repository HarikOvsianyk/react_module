import { Provider } from "react-redux";
import { store } from "./Store/store";
import { BrowserRouter } from "react-router-dom";
import { NavigationBar } from "./Components/NavigationBar/NavigationBar";
import { Routes } from "./Components/Routes/Routes";
import Theme from "./Components/UI/Theme";

function App() {
  return (
    <Provider store={store}>
      <Theme>
        <BrowserRouter>
          <NavigationBar />
          <Routes />
        </BrowserRouter>
      </Theme>
    </Provider>
  );
}

export default App;
