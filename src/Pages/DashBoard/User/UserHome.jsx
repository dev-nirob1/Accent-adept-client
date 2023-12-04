import { Helmet } from 'react-helmet-async';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const UserHome = () => {
  // Sample data for the bar chart (assignments and scores)
  const data = [
    { assignment: 'Grammar Quiz', score: 80 },
    { assignment: 'Vocabulary Exercise', score: 65 },
    { assignment: 'Reading Comprehension', score: 90 },
    { assignment: 'Writing Essay', score: 75 },
    { assignment: 'Listening Practice', score: 85 },
  ];

  return (
    <div>
      <Helmet>
        <title>Accent Adept | Student`s Home</title>
      </Helmet>
      <div className="flex-1 p-8">
        <h2 className="text-3xl font-semibold mb-4">Welcome to Accent Adept!</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Sample Card */}
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Your Assignments</h3>
            <p className="text-gray-500">You have 5 assignments to complete.</p>
          </div>

          {/* Sample Card */}
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Upcoming Events</h3>
            <p className="text-gray-500">No upcoming events at the moment.</p>
          </div>

          {/* Sample Card */}
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Important Notices</h3>
            <p className="text-gray-500">No notices at the moment.</p>
          </div>
        </div>

        {/* Bar Chart */}
        <div className="mt-8">
          <h3 className="text-xl font-semibold mb-4">Your Assignment Scores</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={data}>
              <XAxis dataKey="assignment" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="score" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default UserHome;
