import { useDispatch, useSelector } from "react-redux";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import "./style.css";
import { removeFromCart } from "../../redux/slice";
function Cart() {
  const cartItems = useSelector((state) => state.productsRed);
  const total = cartItems.total;

  const dispatch = useDispatch();
  const handleCancelClick = (el) => {
    const items = [...cartItems.cart];
    items.splice(
      cartItems.cart.findIndex((item) => item.id === el.id),
      1
    );

    dispatch(removeFromCart({ items, price: el.price }));
  };
  return (
    <div className="cartContenair">
      <h1 className="cartHeader">Shopping Cart </h1>
      <div className="cartSections">
        <div className="cartLeftSide">
          <h1 className="cartHeader">Items</h1>
          {cartItems.cart?.map((el, i) => {
            return (
              <div className="productCart">
                <div className="cancel" onClick={() => handleCancelClick(el)}>
                  <CloseOutlinedIcon style={{ fontSize: "35px" }} />
                </div>

                <img
                  src={el.image}
                  alt="cartProductImg"
                  className="cartProductImg"
                />
                <div className="productcartMeta">
                  <h1>{el.title}</h1>
                  <p>{el.description}</p>
                  <h1 style={{ color: "rgb(211, 8, 8)" }}>
                    Price:{el.price} $
                  </h1>
                </div>
              </div>
            );
          })}
          <hr />
        </div>
        <div className="cartRightSide">
          <h1 className="cartHeader">Order Summary</h1>
          {cartItems.cart?.map((el, i) => {
            return (
              <div className="priceInfo">
                <h2>{el.title.slice(0, 30)}</h2>
                <h1 style={{ color: "rgb(211, 8, 8)" }}>Price {el.price} $</h1>
              </div>
            );
          })}
          {cartItems.cart.length > 0 ? (
            <div className="totalPrices">
              <h1 className="total">Totale:</h1>
              <h1 className="totalPrice">{total.toFixed(3)} $</h1>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default Cart;
