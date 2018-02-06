import React, {Component} from 'react';
import {render} from 'react-dom';
import { Home, About, Search, Test } from './screens';
import Navbar from './components/Navbar';


const Index = ({pathname}) =>{
    switch(pathname) {
        case '/': return <Home />;
        case '/About': return <About />;
        case '/Search': return <Search />;        
        default: <Home />
    }
}

let contact = [{
    id:1,
    name: 'scott',
    phone:5555511155555
  },{
      id:2,
    name: 'lkott1',
    phone:55552838555555
  },{
      id:3,
    name: 'lott2',
    phone:5553335555},
    {
    id:4,  
    name: 'kott3',
    phone:55551414555}

];

let pathname = window.location.pathname;




render(
    
   <Index pathname={pathname}/>,
    document.getElementById('root')
)

window.addEventListener('popstate', function (){
    pathname.window.loction.pathname;
})













/* import React, {Component} from 'react';
import {render} from 'react-dom';
import {createStore} from 'redux';
import { connect } from 'react-redux';
import { Provider } from 'react-redux';
 */

/* const intialState = {
    count: 0
}

const reducer = (state = intialState, action) => {
    switch(action.type){
        case 'increment': return {...state, count : state.count + 1};
        case 'decrement': return {...state, count : state.count - 1};
        case 'reset': return {...state, count : state.count = 0};
        default: return state;
    }
}

const store = createStore(reducer);

const mapStateToProps = (state) => {
    return {
        count: state.count
    }
}

const mapDsispatchToProps = (dispatch) => {
    return{
        onIncrement: () => dispatch({type: 'increment'}),
        ondecrement: () => dispatch({type: 'decrement'}),
        onreset: () => dispatch({type: 'reset'})       
    }
}

let Counter = ({ count,ondecrement,onIncrement,onreset}) => {
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={onIncrement}>+</button>
            <button onClick={onreset}>reset</button>
            <button onClick={ondecrement}>-</button>
        </div>
    )
}

let ConnectedCounter = connect(mapStateToProps,mapDsispatchToProps)(Counter)


render(
    <Provider store={store}>
        <ConnectedCounter />
    </Provider>
    ,document.getElementById('root')
) */