import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import '@popperjs/core/dist/cjs/popper.js'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'bootstrap-icons/font/bootstrap-icons.css' 

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Livro from './components/livros/Livro';
import Navbar from './components/Navbar';

function App() {
    return (
        <Router>
            <Navbar/>
            <Switch>
                <Route exact path="/" render={(p) => (<h1>Home</h1>)}/>
                <Route exact path="/livros" component={Livro}/>
            </Switch>
        </Router>
    );
}

export default App;