import Home from './components/Home';
import { useAuth0 } from "@auth0/auth0-react";
import fondo from "./img/fondoInicio.webp";
import { LoginButton } from "./components/Login";

function App() {
  
    const { isAuthenticated } = useAuth0();
  
    return (
      <div className="App">
        <header className="App-header">
         
        {isAuthenticated ? (
          <>
            <Home />
            
          </>
        ) : (
          <div>
          <img src={fondo} className="fondo" alt="fondo" />
          <LoginButton />
          </div>
        )}
        </header>
      </div>
    );
  }
  

export default App;
