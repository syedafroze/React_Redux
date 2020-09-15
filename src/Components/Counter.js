import React, { PureComponent } from 'react'
import {connect} from 'react-redux';
import {Increment,Decrement} from '../Redux/store'
class Counter extends PureComponent {
  constructor(props) {
    super(props)

  
  }

  render() {
    console.log(this.props)
    return (
      <div>
    <h2>Count is {this.props.count}</h2>
    <button onClick ={()=>this.props.increment()}>Increment</button>
    <button onClick ={()=>this.props.decrement()}>Decrement</button>
    </div>
    )
  }
}

//store will call mapStateToProps and pass state to it 
//and mapStateToProps will return Object(with updateState) to the component as props .

const mapStateToProps =(state)=>{
 
  return {
    count :state.count,
    id    :state.id
  }
}

//return the object as  props to the Component 

const mapDispatchToProps =(dispatch) =>{
return {
  increment : ()=>dispatch(Increment()),
  decrement : ()=>dispatch(Decrement())
}
}
//it provides this dispatch method as prop to the component 

//connect method is like subscribing to store 

export default connect(mapStateToProps,mapDispatchToProps)(Counter) ;