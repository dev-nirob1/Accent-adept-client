
import {
    BarChart,
    Bar,
    AreaChart,
    Area,
    LineChart,
    Line,
    XAxis,
    YAxis,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from 'recharts';

const userStatisticsData = [
    { name: 'January', users: 30, profits: 1000, revenue: 500 },
    { name: 'February', users: 45, profits: 1200, revenue: 600 },
    { name: 'March', users: 60, profits: 900, revenue: 450 },
    { name: 'April', users: 30, profits: 1100, revenue: 550 },
    { name: 'May', users: 46, profits: 1300, revenue: 650 },
];

const AdminHome = () => {
    return (
        <div className="container mx-auto my-8 px-5">
            <h1 className="text-4xl font-bold text-gray-800 mb-8">Admin Dashboard</h1>

            <div className="grid grid-cols-1 text-center md:grid-cols-3 gap-5">
                {/* Users Chart */}
                <div className="bg-white p-3 rounded-lg shadow-md">
                    <h2 className="text-xl text-neutral-700 font-semibold">Users</h2>
                    <ResponsiveContainer width="100%" height={200}>
                        <BarChart data={userStatisticsData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="users" fill="#8884d8" name="Users" />
                        </BarChart>
                    </ResponsiveContainer>
                </div>

                {/* Profits Chart */}
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-xl text-neutral-700 font-semibold">Profits</h2>
                    <ResponsiveContainer width="100%" height={200}>
                        <LineChart data={userStatisticsData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Line dataKey="profits" stroke="#82ca9d" name="Profits" />
                        </LineChart>
                    </ResponsiveContainer>
                </div>

                {/* Revenue Chart */}
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-xl font-semibold  text-neutral-700">Revenue</h2>
                    <ResponsiveContainer width="100%" height={200}>
                        <AreaChart data={userStatisticsData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Area type="monotone" dataKey="revenue" fill="#ffc658" name="Revenue" />
                        </AreaChart>
                    </ResponsiveContainer>
                </div>
            </div>

            {/* All Statistics Area Chart */}
            <div className="bg-white p-3 text-center rounded-lg shadow-md mt-8">
                <h2 className="text-xl md:text-2xl font-semibold mb-4 text-neutral-700">Statistics</h2>
                <ResponsiveContainer width="100%" height={300}>
                    <AreaChart data={userStatisticsData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Area type="monotone" dataKey="users" fill="#8884d8" name="Users" />
                        <Area type="monotone" dataKey="profits" stroke="#82ca9d" fill="#82ca9d" name="Profits" />
                        <Area type="monotone" dataKey="revenue" fill="#ffc658" name="Revenue" />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default AdminHome;
