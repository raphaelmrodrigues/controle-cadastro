import Logo from './components/template/Logo'
import Nav from './components/template/Nav'
import Footer from './components/template/Footer'
import { BrowserRouter } from 'react-router-dom';

import Routes from './Routes'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import './App.css';
import './components/template/Header'
import Header from "./components/template/Header";

export default props =>
    <BrowserRouter>
        <div className="App">
            <Logo/>
            <Nav />
            <Routes />
            <Footer />
        </div>
    </BrowserRouter>


