import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import { loginActionCreator } from './redux/actionCreators/ActionCreators';

function App(props) {

  let login = () =>{
   
    props.login()
  }

  return (
    <div className="App">
      <header className="App-header">
        {console.log(props.stateObject)}
        {props.stateObject.name}
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button onClick={(e) => { login(e) }}>button</button>
      </header>
    </div>
  );
}


let mapStateToProps = (stateObject) => {
  return {
    stateObject
  }
}

let mapDispatchToProps = (dispatch) => {

  return {
    login: () => {
      dispatch(loginActionCreator())
    }
  }

}
export default connect(mapStateToProps, mapDispatchToProps)(App);
