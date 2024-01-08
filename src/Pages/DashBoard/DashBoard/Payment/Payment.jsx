import { Elements } from "@stripe/react-stripe-js";
import CheckOutForm from "./CheckOutForm";
import { loadStripe } from "@stripe/stripe-js";
import { useParams } from "react-router-dom";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const Payment = () => {
    const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_PK);

    const [axiosSecure] = useAxiosSecure()
    const { id } = useParams()

    const { data: payment = [] } = useQuery({
        queryKey: ['selectedCourse'],
        queryFn: async () => {
            const data = await axiosSecure.get(`/selectedCourse/${id}`)
            return data.data
        }
    })
    const price = payment.price;
    const priceToNumber = parseFloat(price)
    const total = parseFloat(priceToNumber.toFixed(2))
    // console.log(payment)

    return (
        <div className="md:w-3/4 mx-auto">
            <Elements stripe={stripePromise}>
                <CheckOutForm payment={payment} price={total}/>
            </Elements>
        </div>
    );
};

export default Payment;