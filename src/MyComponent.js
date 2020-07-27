import React from 'react';
import PropTypes from 'prop-types';

const MyComponent = ({name, favoriteNumber, children}) => {
    return (
        <div>
            멋진 컴포넌트!! 제이름은 {name}<br/>
            children value {children}<br/>
            my favoriteNumber {favoriteNumber}
        </div>
    ) ;   
}

MyComponent.defaultProps = {
  name : 'base name'  
};

MyComponent.propTypes = {
    name : PropTypes.string
    ,favoriteNumber : PropTypes.number.isRequired
}

export default MyComponent;