import axios from "axios";
import { useEffect, useState } from "react";
import Card from "../../Components/Card/Card";

const AllApps = () => {
  const [AllAppsData, setAllAppData] = useState([]);
  useEffect(() => {
    const fetchAllData = async () => {
      const res = await axios.get("/appsData.json");
      const data = res.data;
      setAllAppData(data);
    };
    fetchAllData();
  }, []);

  return (
    <div>
      <div className="text-center py-10">
        <h1 className="text-7xl pb-5">Our All Applications</h1>
        <p className="text-gray-600 pb-4">
          Explore All Apps on the Market developed by us. We code for Millions
        </p>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 pb-7">
        {AllAppsData.map((data) => (
          <Card key={data.id} data={data} />
        ))}
      </div>
    </div>
  );
};

export default AllApps;
