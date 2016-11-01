import React from 'react';

class App extends React.Component {
    render() {
        // This does not function cause render method can only execute once
        // Reacte.createElement method, it is required wrap the elements into one
        // return <h1>Hello World!</h1> <b>Bold</b>
        return (
            <div>
                <h1>Hello World!</h1>
                <b>Bold</b>
            </div>
        );
    }
}

export default App;