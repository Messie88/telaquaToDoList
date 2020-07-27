import React, {Component} from 'react';

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false
        }
    }

    componentDidCatch(error, info){
        this.setState({hasError: true})
    }

    render(){
        if (this.state.hasError) {
            return <h1>Ooooops. That's not good</h1>
        }
        return this.props.children; 
        // children will be everything that's between our class
    }
}


export default ErrorBoundary;