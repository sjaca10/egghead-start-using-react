import React from 'react';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            input: '/* Add your jsx here */',
            output: '',
            err: '',
        }

        this.upate = this.update.bind(this);
    }

    update(e) {
        console.log(this);
        let code = e.target.value;
        try {
            console.log(this);
            this.setState({
                output: babel.transform(code, {
                    stage: 0,
                    loose: 'all',
                    comments: true,
                }).code,
                err: ''
            })
        }
        catch(err) {
            console.log(this);
            this.setState({err: err.message})
        }
    }

    render() {
        return (
            <div>
                <header>
                    {this.state.err}
                </header>
                <div className="container">
                    <textarea
                        onChange={this.update}
                        defaultValue={this.state.input}>
                    </textarea>
                    <pre>
                        {this.state.output}
                    </pre>
                </div>
            </div>
        );
    }
}

export default App;