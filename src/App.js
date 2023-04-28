import {useSelector} from 'react-redux';
import Cart from './components/Cart/Cart';
import Layout from './components/layout/Layout';
import Products from './components/Shop/Products';

const App = () => {
  const showcart = useSelector(state=>state.ui.cartIsVisible);
  return (
   
    <Layout>
      { showcart && <Cart/>}
      <Products/>
    </Layout>
  )
}

export default App;