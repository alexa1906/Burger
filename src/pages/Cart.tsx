import { useContext, useEffect, useState } from "react";
import { CartContext } from "../App";
import image from "../images/ImageCart.png";
import emptyCart from "../images/empty-cart-img.png";
import "../pages/cart.css";
import x from "../images/delete-option.png";

const Cart = () => {
  const { currentComanda, setCurrentComanda } = useContext(CartContext);

  console.log(currentComanda);

  let overallTotalPrice = 0;

  const incrementCount = (index: any) => {
    const updatedComanda = currentComanda.map(
      (order: { quantity: number }, i: any) => {
        if (index === i) {
          return { ...order, quantity: order.quantity + 1 };
        }
        return order;
      }
    );
    setCurrentComanda(updatedComanda);
  };

  const decrementCount = (index: any) => {
    const updatedComanda = currentComanda.map(
      (order: { quantity: number }, i: any) => {
        if (index === i && order.quantity > 0) {
          return { ...order, quantity: order.quantity - 1 };
        }
        return order;
      }
    );
    setCurrentComanda(updatedComanda);
  };

  const deleteBurger = (index: number) => {
    console.log(index);
    setCurrentComanda((prevSelected: any) =>
      prevSelected.filter((_: any, burgerIndex: any) => burgerIndex !== index)
    );
  };

  return (
    <div>
      {currentComanda && currentComanda.length > 0 ? (
        <div className="cartItemsContainer">
          {currentComanda.map(
            (
              order: {
                burgerName: any;
                selectedOptions: any;
                price: number;
                quantity: any;
              },
              orderIndex: any
            ) => {
              const { burgerName, selectedOptions, price, quantity } = order;
              const orderIngredients = selectedOptions
                .map((item: { name: any }) => item.name)
                .join(", ");
              const orderTotalPrice = price * quantity;

              overallTotalPrice += orderTotalPrice;

              return (
                <div className="cartItem" key={orderIndex}>
                  <div className="photoColumn">
                    <img src={image} alt="" className="imageCart" />
                  </div>
                  <div className="infoColumn">
                    <h3>{burgerName || "BURGERUL CREAT"}</h3>
                    <p className="ingredients">
                      CHIFLĂ BRIOCHE, {orderIngredients}
                    </p>
                  </div>
                  <div className="totalColumn">
                    <div>Total: {orderTotalPrice} lei</div>
                  </div>
                  <div className="addColumn">
                    <span
                      className="minus"
                      onClick={() => decrementCount(orderIndex)}
                    >
                      -
                    </span>
                    <input type="text" value={quantity} readOnly />
                    <span
                      className="plus"
                      onClick={() => incrementCount(orderIndex)}
                    >
                      +
                    </span>
                  </div>
                  <div>
                    <span
                      className="x-icon"
                      onClick={() => deleteBurger(orderIndex)}
                    >
                      <img src={x} alt="" />
                    </span>
                  </div>
                </div>
              );
            }
          )}
          <div className="totalPrice">
            Overall Total Price: {overallTotalPrice} lei
          </div>
        </div>
      ) : (
        <div className="emptyImage">
          <img src={emptyCart} alt="" />
          <p>Cosul este gol</p>
        </div>
      )}
    </div>
  );
};

export default Cart;
