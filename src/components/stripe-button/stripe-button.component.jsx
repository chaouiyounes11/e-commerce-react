import React from 'react'
import StripeCheckout from 'react-stripe-checkout'

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;

    const publishableKey = "pk_live_7d85Dpp45NP6Dj6hc7dPNy7g";

    const onToken = token => {
        console.log(token);
        
        alert('Payment Successfull')
    }

    return <StripeCheckout
    label ='Pay Now'
    name ='E-commercre React Ltd'
    currency='EUR'
    billingAddress
    shippingAddress
    image='https://svgshare.com/i/CUz.svg'
    description={`Your total is ${price} €`}
    amount = {priceForStripe}
    panelLabel='Pay Now'
    token={ onToken }
    stripeKey = {publishableKey}
    />
}

export default StripeCheckoutButton