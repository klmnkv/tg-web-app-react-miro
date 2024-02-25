    import './App.css';
    import {useEffect} from "react";
    import {userTelegram} from "./hooks/userTelegram";
    import Header from "./components/Header/Header";
    import {Route,Routes} from 'react-router-dom';
    import ProductList from "./components/ProductList/ProductList";
    import FormT from "./components/FormT/FormT";



function App() {
    const {onToggleButton, tg} = userTelegram();

    useEffect(() => {
        tg.ready();
    }, [])

    return (
        <div className="App">
            <Header />
            <Routes>
                <Route index element={<ProductList />}/>
                <Route path={'formt'} element={<FormT />}/>
            </Routes>
        </div>
    );
}

    export default App;
