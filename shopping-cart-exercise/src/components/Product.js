import './Product.css';

function Product(props) {
    const { title, author, text } = props;

    return (
        <article className='product'>
            <h2>{ title }</h2>
            <h3>{ author }</h3>
            <p>{ text }</p>
            <button className='product__button'>Add to cart</button>
        </article>
    )
}

export default Product;