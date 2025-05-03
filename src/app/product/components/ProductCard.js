'use client';

function ProductCard(props) {
    return (
        <div>
            <img src={props.image} alt={props.title} style={{ width: '35%', borderRadius: '8px' }} />
            <h2>{props.title}</h2>
            <p>Price: £{props.price}</p>
            <button onClick={ () => props.onAddToCart(props.title) }>Add to Cart</button>
        </div>
    );
}

export default ProductCard;