import CartContext from '../../context/CartContext'
import './index.css'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value

      const totalAmount = cartList.reduce(
        (total, eachItem) => total + eachItem.price * eachItem.quantity,
        0,
      )

      return (
        <div className="cart-summary-container">
          <h1 className="order-total">
            Order Total: <span>Rs {totalAmount}/-</span>
          </h1>
          <p className="total-items">{cartList.length} Items in cart</p>
          <button type="button" className="checkout-button">
            Checkout
          </button>
        </div>
      )
    }}
  </CartContext.Consumer>
)

export default CartSummary
