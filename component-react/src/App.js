/*import React, {Component} from 'react';
 
class App extends Component{
  render(){
    const name1 = 'hahazzz';
    
    return <div className="react">{name1}</div>;
  }
}*/

import React from 'react';
import MyComponent from './MyComponent'

const App = () => {
  return <MyComponent name="MyComponent" favoriteNumber={1}>react!!</MyComponent>;
}

export default App;
