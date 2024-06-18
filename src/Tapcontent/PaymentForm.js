
//  tap card or ui page for submit
import React, { useEffect, useState } from 'react';

const PaymentForm = () => {
  const [token, setToken] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    // Initialize Tap Payments
    const tap = window.Tapjsli('pk_test_EtHFV4BuPQokJT6jiROls87Y');

    const elements = tap.elements({});
    const style = {
      base: {
        color: '#535353',
        lineHeight: '18px',
        fontFamily: 'sans-serif',
        fontSmoothing: 'antialiased',
        fontSize: '16px',
        '::placeholder': {
          color: 'rgba(0, 0, 0, 0.26)',
          fontSize: '15px',
        },
      },
      invalid: {
        color: 'red',
      },
    };
    const labels = {
      cardNumber: 'Card Number',
      expirationDate: 'MM/YY',
      cvv: 'CVV',
      cardHolder: 'Card Holder Name',
    };
    const paymentOptions = {
      currencyCode: ['USD'],
      labels: labels,
      TextDirection: 'ltr',
      paymentAllowed: ['VISA', 'MASTERCARD', 'AMERICAN_EXPRESS', 'MADA'],
    };
    const card = elements.create('card', { style: style }, paymentOptions);
    card.mount('#element-container');

    card.addEventListener('change', function (event) {
      if (event.error) {
        setError(event.error.message);
      } else {
        setError('');
      }
    });

    // Handle form submission
    const form = document.getElementById('form-container');
    form.addEventListener('submit', function (event) {
      event.preventDefault();

      tap.createToken(card).then(function (result) {
        if (result.error) {
          setError(result.error.message);
        } else {
          setToken(result.id);
          localStorage.setItem('paymentToken', result.id); // Save token to local storage
          setError('');
        }
      });
    });
  }, []);

  return (
    <form id="form-container" method="post">
      <div id="element-container"></div>
      <div id="error-handler" role="alert" style={{ color: 'red' }}>
        {error}
      </div>
      {token && (
        <div id="success" style={{ position: 'relative', float: 'left' }}>
          Success! Your token is <span id="token">{token}</span>
        </div>
      )}
      <button type="submit" id="tap-btn">Submit</button>
    </form>
  );
};

export default PaymentForm;
