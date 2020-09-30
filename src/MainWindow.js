import React, { Component } from 'react';
import Selector from './components/Selector'
import WebSocketFetcher from './components/WebSocketFetcher'

class MainWindow extends Component {   
    constructor(){
        super();
        this._WebSocketFetcherRef = React.createRef();
    }

    render(){
        return(
            <div>
            {/*<h1 className="centeredH1">Monitoring Baterai Lab Indi</h1>*/}
            
            <Selector />    
            <WebSocketFetcher />
            </div>

        );
    }
}

export default MainWindow;