import { Provider, useSelector, useDispatch } from 'react-redux';
import './App.css';



function App() {
    const value = useSelector((state) => {
        return state;
    });

    return (
       
            <div className="App">
                <div>
                    <button onClick={() => {}}>+</button>
                    <p>{value}</p>
                    <button>-</button>
                </div>
            </div>
       
    );
}

export default App;
