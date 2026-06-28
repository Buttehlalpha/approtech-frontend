import { useCart } from "@/context/CartContext";

import { Button } from "@/components/ui/button";

import {
  Minus,
  Plus,
  Trash2,
  ShoppingBag,
  ArrowLeft,
} from "lucide-react";

import { Link, useNavigate } from "react-router-dom";

import freshProduce from "@/assets/fresh-produce.jpg";

const Cart = () => {
  const navigate = useNavigate();

  const {
    items,
    updateQuantity,
    removeFromCart,
    clearCart,
    totalPrice,
  } = useCart();

  // DELIVERY PRICE
  const deliveryFee = 2000;

  // EMPTY CART
  if (items.length === 0) {
    return (
      <div className="flex min-h-[60vh] flex-col items-center justify-center gap-4">

        <ShoppingBag className="h-16 w-16 text-muted-foreground/40" />

        <h2 className="font-display text-2xl font-bold text-foreground">
          Your cart is empty
        </h2>

        <p className="font-body text-muted-foreground">
          Start shopping for fresh farm produce!
        </p>

        <Link to="/marketplace">
          <Button variant="default" size="lg">
            Browse Marketplace
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f7faf7]">

      <div className="container mx-auto px-4 py-8">

        {/* BACK */}
        <Link
          to="/marketplace"
          className="mb-6 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" />
          Continue Shopping
        </Link>

        {/* TITLE */}
        <h1 className="mt-4 text-3xl font-bold text-gray-800">
          Shopping Cart
        </h1>

        <div className="mt-6 grid gap-8 lg:grid-cols-3">

          {/* CART ITEMS */}
          <div className="space-y-4 lg:col-span-2">

            {items.map(({ product, quantity }) => (

              <div
                key={product._id || product.id}
                className="flex gap-4 rounded-2xl border bg-white p-4 shadow-sm"
              >

                {/* PRODUCT IMAGE */}
                <img
                  src={
                    product.image
                      ? product.image
                      : freshProduce
                  }
                  alt={product.name}
                  className="h-24 w-24 rounded-xl object-cover"
                />

                <div className="flex flex-1 flex-col justify-between">

                  {/* PRODUCT INFO */}
                  <div>

                    <h3 className="text-lg font-semibold text-gray-800">
                      {product.name}
                    </h3>

                    <p className="text-sm text-muted-foreground">
                      {product.farmerName || "Local Farmer"} • Nigeria
                    </p>
                  </div>

                  {/* ACTIONS */}
                  <div className="flex items-center justify-between">

                    {/* QUANTITY */}
                    <div className="flex items-center rounded-xl border">

                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8"
                        onClick={() =>
                          updateQuantity(
                            product._id || product.id,
                            quantity - 1
                          )
                        }
                      >
                        <Minus className="h-3 w-3" />
                      </Button>

                      <span className="w-8 text-center text-sm font-medium">
                        {quantity}
                      </span>

                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8"
                        onClick={() =>
                          updateQuantity(
                            product._id || product.id,
                            quantity + 1
                          )
                        }
                      >
                        <Plus className="h-3 w-3" />
                      </Button>
                    </div>

                    {/* PRICE */}
                    <span className="text-lg font-bold text-green-700">
                      ₦
                      {(
                        Number(product.price) *
                        quantity
                      ).toLocaleString()}
                    </span>

                    {/* REMOVE */}
                    <Button
                      variant="ghost"
                      size="icon"
                      className="text-red-600"
                      onClick={() =>
                        removeFromCart(
                          product._id || product.id
                        )
                      }
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* ORDER SUMMARY */}
          <div className="h-fit rounded-2xl border bg-white p-6 shadow-sm">

            <h3 className="text-xl font-semibold text-gray-800">
              Order Summary
            </h3>

            <div className="mt-5 space-y-3 text-sm">

              {/* SUBTOTAL */}
              <div className="flex justify-between text-muted-foreground">

                <span>Subtotal</span>

                <span>
                  ₦{totalPrice.toLocaleString()}
                </span>
              </div>

              {/* DELIVERY */}
              <div className="flex justify-between text-muted-foreground">

                <span>Delivery</span>

                <span>
                  ₦{deliveryFee.toLocaleString()}
                </span>
              </div>

              {/* TOTAL */}
              <div className="flex justify-between border-t pt-3 text-base font-semibold">

                <span>Total</span>

                <span className="text-green-700">
                  ₦
                  {(
                    totalPrice + deliveryFee
                  ).toLocaleString()}
                </span>
              </div>
            </div>

            {/* CHECKOUT */}
            <Button
              className="mt-6 w-full bg-green-600 hover:bg-green-700"
              size="lg"
              onClick={() =>
                navigate("/checkout")
              }
            >
              Proceed to Checkout
            </Button>

            {/* CLEAR */}
            <Button
              variant="ghost"
              size="sm"
              className="mt-2 w-full text-red-600"
              onClick={clearCart}
            >
              Clear Cart
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;