require('dotenv').config();

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

exports.handler = async (event) => {
    try {
        const { amount, user } = JSON.parse(event.body);

        const paymentIntent = await stripe.paymentIntents.create({
            amount,
            currency: 'gbp',
            receipt_email: user.email,
            payment_method_types: ['card'],
            shipping: {
                name: user.displayName,
                address: {
                    line1: ''
                }
            }
        });

        return {
            statusCode: 200,
            body: JSON.stringify({ paymentIntent })
        }
    } catch (error) {
        console.log(error);
        return {
            statusCode: 400,
            body: JSON.stringify({ error })
        }
    }
}