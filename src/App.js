import Footer from 'components/footer/Footer';




import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Home from 'components/pages/Home';
import Contact from 'components/pages/Contact';
import About from 'components/pages/About';
import Affiliate from 'components/pages/Affiliate';
import AllHeader from 'components/header/AllHeader';
import Category from 'components/pages/category/Category';
import Cloth from 'components/pages/items/Cloth';
import Shoes from 'components/pages/items/Shoes';
import Phones from 'components/pages/items/Phones';
import Computer from 'components/pages/items/Computer';
import Sports from 'components/pages/items/Sports';
import Login from 'components/login/Login';
import Signup from 'components/login/Signup';
import Cart from 'components/pages/Cart';



function App() {
  return (
    <Router>
      
    <div className='bg-gray-100'>
      <div className='grid-cols-1'></div>
      <div className='grid-cols-10'>
      <AllHeader/>
      <Switch>
      <Route path='/' exact component={Home }/>
      <Route path='/category'  component={Category }/>
      <Route path='/about' component = {About}/>
      <Route path='/affiliate' component = {Affiliate}/>
      <Route path='/contact' component = {Contact}/>
      <Route path='/clothing' component = {Cloth}/>
      <Route path='/shoes' component = {Shoes}/>
      <Route path='/phone' component = {Phones}/>
      <Route path='/computers' component = {Computer}/>
      <Route path='/sports' component = {Sports}/>
      <Route path='/login' component = {Login}/>
      <Route path='/register' component = {Signup}/>
      <Route path='/cart' component = {Cart}/>
      
      </Switch>

      
     
       
      
        
        
    
        <Footer/>
      </div>
      <div className='grid-cols-1'></div>
     
    
    </div>
    </Router>
    
  );
}

export default App;
