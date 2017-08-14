import React  from 'react';
import Navbar from './scenes/navbar/Navbar';
import { connect } from 'react-redux';

 

class App extends React.Component {

    constructor(props, context) {
        super(props, context);
    }

    componentDidMount() {
    }

    componentDidUpdate() {  
    }

    render() {
        return  (
       <div className="fluid-container "ssName>
          <Navbar />
          <div className="fluid-container ">
              {this.props.children}
            </div>
            </div>
     );
    }
}

App.propTypes = {
    
};

App.contextTypes = {
    router: React.PropTypes.object.isRequired
};

function mapStateToProps() {
    return {
    };
}

function mapDispatchToProps() {
    return {
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
