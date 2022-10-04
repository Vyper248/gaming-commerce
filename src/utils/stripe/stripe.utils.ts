import { loadStripe } from "@stripe/stripe-js";

let publishableKey: string = process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY as string;

export const stripePromise = loadStripe(publishableKey);