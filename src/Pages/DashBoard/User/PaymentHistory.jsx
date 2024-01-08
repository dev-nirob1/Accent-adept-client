import { Helmet } from "react-helmet-async";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import moment from 'moment';
const PaymentHistory = () => {
    const { user } = useContext(AuthContext)
    const [axiosSecure] = useAxiosSecure()
    const { data: paymentHistory = [] } = useQuery({
        queryKey: ['payment-history', user?.email],
        queryFn: async () => {
            const data = await axiosSecure.get(`/payment-history?email=${user?.email}`)
            return data.data
        }
    })
    return (
        <div className="border p-5 rounded-sm shadow">
            <Helmet>
                <title>Accent Adept | Payment History</title>
            </Helmet>
            <div>
                <div className="flex justify-between">
                    <h3 className="text-3xl font-semibold">Payment History</h3>
                    <button className="border rounded-md px-4 py-2 inline-flex items-center">
                        <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" /></svg>
                        <span>Download</span>
                </button>
            </div>
            <div className="overflow-x-auto mt-5">
                <table className="table">
                    <thead>
                        <tr>
                            <th>TrxId</th>
                            <th>Amount</th>
                            <th>Payment time</th>
                            <th>Course</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            paymentHistory.map(history =>
                                <tr key={history._id}>
                                    <td>TrxId: {history.transactionId}</td>
                                    <td>$ {history.price}</td>
                                    <td><p>{moment(history.date).format("MMM Do YY")}</p>
                                        <p>
                                            {moment(history.date).startOf('hour').fromNow()}</p>
                                    </td>
                                    <td>{history.courseName}</td>
                                    <td><p className="w-fit bg-green-400 rounded-md text-green-800 font-medium">successful</p></td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
        </div >
    );
};

export default PaymentHistory;