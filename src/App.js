import React, { Component } from 'react';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            number: 0
        }
    }

    updateVal = act => {
        this.setState(({ number: a }) => ({
            number: (act === "+") ? a + 1 : a -1
        }));
    }

    render() {
        return(
            <>
                <h1 className="display">{ this.state.number }</h1>
                <button className="decrement" onClick={ () => this.updateVal("-") }>-</button>
                <button className="increment" onClick={ () => this.updateVal("+") }>+</button>
            </>
        );
    }
}

export default App;