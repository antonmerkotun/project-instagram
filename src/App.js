import './App.css';
import Header from "./components/Header/Header";
import Main from "./pages/Main/Main";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import React from "react";
import User from "./pages/User/User";
import NotFound from "./pages/NotFound/NotFound";
import {useSelector} from "react-redux";

function App() {
    const accountData = useSelector(state => state.accountData) || []

    return (
        <BrowserRouter>
            <div className="container">
                <Header account={accountData.account}/>
                <div className="scroll-block">
                    <Routes>
                        <Route exact path="/" element={<Main/>}/>
                        <Route exact path="/user" element={<User/>}/>
                        <Route exact path="/notfound" element={<NotFound/>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
