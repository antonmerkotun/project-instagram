import './App.css';
import Header from "./components/Header/Header";
import Main from "./pages/Main/Main";

function App() {
    return (
        <div className="container">
            <Header/>
            <div className="scroll-block">
                <Main/>
            </div>
        </div>
    );
}

export default App;
