    import './App.css';
    import {useEffect} from "react";
    import {userTelegram} from "./hooks/userTelegram";
    import Header from "./components/Header/Header";


    const tg = window.Telegram.WebApp;
    function App() {
        const {onToggleButton, tg} = userTelegram();
        useEffect(() => {
            tg.ready();
            },[])

      return (
        <div className="App">
            <button onClick={onToggleButton}>toggle</button>
        </div>
      );
    }

    export default App;
