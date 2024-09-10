// PaymentPage.js
import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import PaymentMethodCard from '../components/PaymentMethodCard'; // Adjust the import path as necessary
import Breadcrumbs from '../components/Breadcrumbs';

const PaymentPage = () => {
  const location = useLocation();
  const { title, price } = location.state || { title: 'Default Product', price: 0 }; // Receive title and price

  const [paymentMethods, setPaymentMethods] = useState([
    { id: 1, cardType: '/path/to/visa-icon.png', lastDigits: '6754', expiryDate: '06/2021', selected: true },
    { id: 2, cardType: '/path/to/mastercard-icon.png', lastDigits: '5643', expiryDate: '11/2025', selected: false },
  ]);

  const handleSelect = (id) => {
    setPaymentMethods((methods) =>
      methods.map((method) =>
        method.id === id ? { ...method, selected: true } : { ...method, selected: false }
      )
    );
  };

  const handleRemove = (id) => {
    setPaymentMethods((methods) => methods.filter((method) => method.id !== id));
  };

  return (
    <div className="flex p-6 space-x-6">
      <Breadcrumbs />

      {/* Payment Method Section */}
      <div className="w-2/3 p-4 border rounded-lg">
        <h2 className="font-semibold text-lg mb-4">Payment Method</h2>
        <div className="space-y-4">
          {paymentMethods.map((method) => (
            <PaymentMethodCard
              key={method.id}
              selected={method.selected}
              cardType={method.cardType}
              lastDigits={method.lastDigits}
              expiryDate={method.expiryDate}
              onRemove={() => handleRemove(method.id)}
              onSelect={() => handleSelect(method.id)}
            />
          ))}
        </div>
        <button className="text-orange-500 mt-4 flex items-center">
          <span className="mr-2">+</span> Add Payment method
        </button>
      </div>

      {/* Order Summary Section */}
      <div className="p-11 border rounded-3xl bg-white flex flex-col justify-between" style={{ height: '600px' }}>
        <h2 className="font-semibold text-lg mb-4">Order Summary</h2>
        <div className="space-y-2 flex-grow">
          <div className="flex justify-between">
            <p>Product</p>
            <p>{title}</p> {/* Display the product title */}
          </div>
          <div className="flex justify-between">
            <p>Price</p>
            <p>${price}</p> {/* Display the product price */}
          </div>
          <div className="flex justify-between">
            <p>Shipping</p>
            <p className="text-orange-500">Free</p>
          </div>
          {/* Remove the discount section */}
          <hr className="my-2" />
          <div className="flex justify-between font-bold">
            <p>TOTAL</p>
            <p>${price}</p> {/* Set the total to the price */}
          </div>
          <div className="flex justify-between mt-4">
            <p>Estimated Delivery by</p>
            <p>01 Feb, 2023</p>
          </div>
          <input
            type="text"
            placeholder="Coupon Code"
            className="w-full p-2 border rounded-md mt-2"
          />
        </div>
        <button className="bg-orange-500 text-white w-full py-3 rounded-md">
          Place Your Order and Pay
        </button>
      </div>
    </div>
  );
};

export default PaymentPage;
