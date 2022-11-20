import cartIcon from './assets/cart2.svg'

const CartWidget = (props) => {

    return (
        <button onClick={props.fn}>
            <img src={cartIcon} alt='img-cart' style={{width: 30}}/>
            3
        </button>
    )
}

export default CartWidget