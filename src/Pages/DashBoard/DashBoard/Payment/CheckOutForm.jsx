import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import './style.css'
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../../AuthProvider/AuthProvider";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const CheckOutForm = ({ payment, price }) => {
    const navigate = useNavigate()
    const stripe = useStripe();
    const elements = useElements();
    const { user } = useContext(AuthContext)
    const [axiosSecure] = useAxiosSecure()
    const [processing, setProcessing] = useState(false)
    const [error, setError] = useState('')
    const [transactionId, setTransactionId] = useState('')
    const [clientSecret, setClientSecret] = useState('')

    useEffect(() => {
        if (price > 0) {
            axiosSecure.post('/create-payment-intent', { price })
                .then(res => {
                    // console.log(res.data.clientSecret)
                    setClientSecret(res.data.clientSecret)
                })
        }
    }, [price, axiosSecure])


    const handleSubmit = async (event) => {
        // Block native form submission.
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }

        const { error } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            setError(error.message)
            console.log('[error]', error);
        }
        setProcessing(true)

        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    name: user?.name || 'anonymous',
                    email: user?.email || 'unknown',
                },
            },
        });

        if (confirmError) {
            setError(confirmError.message);
            // return;
        }
        setProcessing(false)

        if (paymentIntent && paymentIntent.status === 'succeeded') {
            console.log(paymentIntent.status)
            const transactionId = paymentIntent.id;
            console.log('transactionId', transactionId)

            const paymentDetails = {
                student_name: user?.displayName || 'anonymous',
                user_email: user?.email || 'unknown',
                price,
                date: new Date(),
                transactionId,
                selectedCourseId: payment._id,
                courseId: payment.courseId,
                courseName: payment.language,
                className: payment.className,
                added_by: payment.hostEmail
            }
            
            axiosSecure.post('/payments', paymentDetails)
                .then(response => {

                    const data = response.data;
                    if (data.paymentResult.insertedId) {
                        setError("")
                        setTransactionId(transactionId)
                        toast.success(`You Have Enrolled course : ${payment.language}`);
                        navigate('/dashboard/enrolled-class');
                    }
                })
                .catch(error => {
                    console.error('Error selecting course:', error);
                });

        }
    };

    return (
        <div>
            {processing ? <h3 className="text-3xl font-medium">Your are paying for: Loading...</h3>
                : <div className="flex items-center justify-between">
                    <h3 className="text-3xl font-medium">Your are paying for: {payment.language}</h3>
                    <img className="h-16 w-24 rounded-lg" src={payment.image} alt="course image" />
                </div>
            }
            {processing ? <p className="text-lg font-semibold">total:{'Loading...'}</p>
                : <p className="text-lg font-semibold">total: {price}</p>
            }
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />

                {error && <p className="mt-3 text-red-600 text-center">{error}</p>}
                {transactionId && <p className="mt-3 text-green-600 text-center">Thanks for payment your transactionId : {transactionId}</p>}

                <button className="px-5 py-2 rounded bg-indigo-700 text-white font-semibold" type="submit" disabled={!stripe || !elements}>
                    {processing ? <div>loading..</div> : <span>Pay</span>}
                </button>
            </form>
        </div>
    );
};

export default CheckOutForm;