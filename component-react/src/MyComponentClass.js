import React,{Component} from 'react';
import PropTypes from 'prop-types';

class MyComponent extends Component {
    render(){
        const {name, favoriteNumber, children} = this.pros;
        return (
            <div>
                멋진 컴포넌트!! 제이름은 {name}<br/>
                children value {children}<br/>
                my favoriteNumber {favoriteNumber}
            </div>
        ) ;   
    }
}

MyComponent.defaultProps = {
  name : 'base name'  
};

MyComponent.propTypes = {
    name : PropTypes.string
    ,favoriteNumber : PropTypes.number.isRequired
}

export default MyComponent;