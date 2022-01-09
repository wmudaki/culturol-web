import logo from './logo.svg';
import './App.css';
import Home from "./screens/home";
import {Provider} from "react-redux";
import {createStore} from "redux";
import stateStore from './state/index'

function App() {
    const store = createStore(stateStore)
    return (
        <>
            <Provider store={store}>
                <Home/>
            </Provider>
        </>
    );
}

export default App;
