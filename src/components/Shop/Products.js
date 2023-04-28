import classes from './Products.module.css';
import ProductItem from './ProductItem';

const DUMMY_PRODUCTS = [
    {
        id:'p1',
        price:6,
        title:'My first book',
        description:'My first book ever wrote'
    },
    {
        id:'p2',
        price:5,
        title:'My second book',
        description:'My second book ever wrote'
    }
]
const Products = () => {
  return (
    <section className={classes.products}>
        <h2>Buy your favorite products</h2>
        <ul>{
            DUMMY_PRODUCTS.map((product)=>(
                <ProductItem key = {product.id} id={product.id} title={product.title} price={product.price} description={product.description}/>

            ))
            }
            
        </ul>

    </section>
  )
}

export default Products;