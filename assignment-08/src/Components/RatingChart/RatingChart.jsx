import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
  Cell,
} from "recharts";

const RatingChart = ({ filteredData }) => {
  if (!filteredData?.ratings) {
    return <p className="text-center text-gray-500">No ratings available</p>;
  }

  const sortedRatings = [...filteredData.ratings].sort(
    (a, b) => parseInt(b.name) - parseInt(a.name)
  );

  return (
    <div className="w-full h-80 bg-white p-5 rounded-2xl shadow-md">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          layout="vertical"
          data={sortedRatings}
          margin={{ top: 10, right: 30, left: 40, bottom: 10 }}
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis type="number" />
          <YAxis
            dataKey="name"
            type="category"
            tick={{ fontSize: 14 }}
            width={70}
          />
          <Tooltip />
          <Bar dataKey="count" radius={[0, 8, 8, 0]}>
            {sortedRatings.map((_, index) => (
              <Cell key={`cell-${index}`} fill="#FB923C" />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default RatingChart;
