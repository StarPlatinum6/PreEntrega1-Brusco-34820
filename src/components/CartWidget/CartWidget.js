const CartWidget = (props) => {

    return (
        <button onClick={props.fn}>
            <img src={'./images/cart2.svg'} alt='img-cart' style={{width: 30}}/>
            3
        </button>
    )
}

export default CartWidget