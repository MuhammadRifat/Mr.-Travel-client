import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

const SimpleCardForm = ({handlePayment}) => {
    const stripe = useStripe();
    const elements = useElements();
    const [paymentError, setPaymentError] = useState(null);
    const [paymentSuccess, setPaymentSuccess] = useState(null);

    const handleSubmit = async (event) => {
        // Block native form submission.
        event.preventDefault();

        if (!stripe || !elements) {
            // Stripe.js has not loaded yet. Make sure to disable
            // form submission until Stripe.js has loaded.
            return;
        }

        // Get a reference to a mounted CardElement. Elements knows how
        // to find your CardElement because there can only ever be one of
        // each type of element.
        const cardElement = elements.getElement(CardElement);

        // Use your card Element with other Stripe.js APIs
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card: cardElement,
        });

        if (error) {
            setPaymentError(error.message);
            setPaymentSuccess(null);
        } else {
            handlePayment(paymentMethod.id);
            setPaymentSuccess(paymentMethod.id);
            setPaymentError(null);
        }
    };
    return (
        <div className="text-center">
            <form onSubmit={handleSubmit}>
                <CardElement />
                <button className="btn btn-success mt-3" type="submit" disabled={!stripe}>
                    Pay Now
                </button>
            </form>
            {
                paymentError && <p style={{color: 'red', marginTop:'10px'}}>{paymentError}</p>
            }
            {
                paymentSuccess && <p style={{color: 'green', marginTop:'10px'}}>Your payment successfully done.</p>
            }
        </div>
    );
};

export default SimpleCardForm;