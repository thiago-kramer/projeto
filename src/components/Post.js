import React from 'react';
import Comment from "./Comment";

export default class App extends React.Component{
    render() {
        return(
            <div>
                <h3>{this.props.title}</h3>
                <Comment text='Isso 'e um comentario/>
            </div>
        );
    }
}