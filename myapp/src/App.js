import logo from './logo.svg';
import './App.css';
import Greeting from './Greeting';
import Counter from './Counter';
// import Product from './Product';
import Productpage from './Productpage';
import Login from './Login';
function App() {
  return (
 <>
  <Greeting name = "rsjesh"/>
  <Greeting name = "rajesh"/>
  <img src='https://cdn.pixabay.com/photo/2024/01/18/16/54/leaves-8517219_640.jpg' style={{width:"100%"}}/>
  <Counter/>
  {/* <Product/> */}
  <Productpage/>
  <Login/>
 </>
  );
}

export default App;
