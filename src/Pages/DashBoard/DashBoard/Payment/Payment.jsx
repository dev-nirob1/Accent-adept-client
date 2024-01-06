import { Elements } from "@stripe/react-stripe-js";
import CheckOutForm from "./CheckOutForm";
import { loadStripe } from "@stripe/stripe-js";
import { useLoaderData } from "react-router-dom";

const Payment = () => {
    const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_PK);

    const payment = useLoaderData()
    const price = payment.price;
    const priceToNumber = parseFloat(price)
    const total = parseFloat(priceToNumber.toFixed(2))
    console.log(payment)

    return (
        <div className="md:w-3/4 mx-auto">
            <Elements stripe={stripePromise}>
                <CheckOutForm price={total} payment={payment} />
            </Elements>
        </div>
    );
};

export default Payment;