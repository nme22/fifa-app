import React from 'react';
import ReactDom from 'react-dom';

class App extends react.Component {
    render() {
        return (
            <div className='container'>
                <Homepage/>
            </div>
        )
    }
}

ReactDom.render(
    <App/>,
    document.getElementById('App')
);