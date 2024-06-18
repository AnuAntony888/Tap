import React, { useState } from "react";
import { GoSellElements } from "@tap-payments/gosell";

const GoSell = () => {
  const [response, setResponse] = useState(null);

  const callbackFunc = (response) => {
    console.log(response);
    setResponse(response);
  };

  const handleSubmit = () => {
    if (GoSellElements) {
      GoSellElements.submit();
    } else {
      console.error("GoSellElements is not available.");
    }
  };

  return (
    <div className="App">
      <button onClick={handleSubmit}>Submit</button>
      <GoSellElements
        gateway={{
          publicKey: "pk_test_QWL5jN4Bytiv3PAu69kqInDx",
          language: "en",
          supportedCurrencies: "all",
          supportedPaymentMethods: "all",
          notifications: "msg",
          callback: callbackFunc,
          labels: {
            cardNumber: "Card Number",
            expirationDate: "MM/YY",
            cvv: "CVV",
            cardHolder: "Name on Card",
            actionButton: "Pay"
          },
          style: {
            base: {
              color: "#535353",
              lineHeight: "12px",
              fontFamily: "sans-serif",
              fontSmoothing: "antialiased",
              fontSize: "16px",
              "::placeholder": {
                color: "rgba(0, 0, 0, 0.26)",
                fontSize: "15px"
              }
            },
            invalid: {
              color: "red",
              iconColor: "#fa755a"
            }
          }
        }}
      />
    </div>
  );
};

export default GoSell;
