// PaymentMethodCard.js
import React from 'react';

const PaymentMethodCard = ({ selected, cardType, lastDigits, expiryDate, onRemove, onSelect }) => {
  return (
    <div
      onClick={onSelect}
      className={`flex items-center justify-between p-4 border rounded-md cursor-pointer transition-all duration-300 ${
        selected ? 'border-blue-400 bg-blue-50' : 'border-gray-200'
      }`}
    >
      <div className="flex items-center">
        <input
          type="radio"
          checked={selected}
          onChange={onSelect}
          className="mr-4 cursor-pointer"
        />
        <img
          src={cardType}
          alt="Card type"
          className="w-8 h-8 mr-2"
        />
        <p className="font-semibold">•••• {lastDigits}</p>
        <span className="ml-4 text-gray-500">Expires {expiryDate}</span>
      </div>
      <button onClick={onRemove} className="text-red-500 font-medium">
        Remove
      </button>
    </div>
  );
};

export default PaymentMethodCard;
