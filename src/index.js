import React from 'react';
import ReactDOM from 'react-dom';

//Simple react tests

//Simple text from the variable element to the 'root'
//const element = <h1>Hello world</h1>;
//ReactDOM.render(element, 'root');

//Simple list element.
const listElement = (
    <ul>
        <li>Shiba</li>
        <li>Hokkaido</li>
        <li>Kishu</li>
        <li>Shikoku</li>
        <li>Kai</li>
        <li>Akita</li>
    </ul>
);

ReactDOM.render(listElement, document.getElementById('root'));

//Simple function element that's called in the root when page is loaded.
//NOT CALLED
function Akita(){
    return <h2>Hello, I'm an akita inu!</h2>
}

//Class function element that has constructor.
//NOT CALLED
class AkitaInu extends React.Component {
    constructor(){
        super();
        this.state = {color: "red"}//this works a bit like variable
    }
    render() {
        return <h2>Hello, I'm {this.state.color} akita inu!</h2>;
    }
}

//component in a component!
//Akita2 componenet is called in the Heart component
class Akita2 extends React.Component {
    render() {
        return <h2>Akita!</h2>;
    }
}

class Heart extends React.Component {
    render() {
        return (
            <div>
                <h1>Who lives in your heart?</h1>
                <Akita2 />
            </div>
        );
    }
}

ReactDOM.render(<Heart />, document.getElementById('root'));