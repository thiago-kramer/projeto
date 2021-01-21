import React from 'react';
import Post from "./Post";
import Home from "../pages/home";

export default class App extends React.Component{
    render() {
        return (
            <div>
                <header>Teste1</header>
                <main>Teste2</main>
            </div>
            // <div>
            //     <h1>Ola</h1>
            //     <Post title='Teste de titulo'/>
            //     <Post title='Teste de mais um titulo'/>
            //     <Post title='Teste de mais um titulo2'/>
            //
            //     <Home></Home>
            // </div>
        );
    }
}