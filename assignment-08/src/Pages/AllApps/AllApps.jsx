import axios from "axios";
import { useEffect, useState } from "react";
import Card from "../../Components/Card/Card";
import ModernLoading from "../ModernLoading/ModernLoading";

const AllApps = () => {
  const [allAppsData, setAllAppsData] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const fetchAllData = async () => {
      const res = await axios.get("/appsData.json");
      setAllAppsData(res.data);
      setLoading(false);
    };
    fetchAllData();
  }, []);

  const filteredApps = allAppsData.filter((app) =>
    app.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      {loading ? (
        <ModernLoading />
      ) : (
        <div>
          <div className="text-center py-10">
            <h1 className="text-7xl pb-5">Our All Applications</h1>
            <p className="text-gray-600 pb-4 text-xl">
              Explore All Apps on the Market developed by us. We code for
              Millions
            </p>
          </div>

          {/* Search section start */}
          <div className="pb-15 flex justify-between">
            <p className="text-2xl font-bold">
              ( {filteredApps.length} ) Apps Found
            </p>

            <label className="input">
              <svg
                className="h-[1em] opacity-50"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                  fill="none"
                  stroke="currentColor"
                >
                  <circle cx="11" cy="11" r="8"></circle>
                  <path d="m21 21-4.3-4.3"></path>
                </g>
              </svg>
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                type="search"
                className="grow"
                placeholder="Enter your app name"
              />
            </label>
          </div>
          {/* Search section End */}

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 pb-7">
            {filteredApps.map((data) => (
              <Card key={data.id} data={data} />
            ))}
            {filteredApps.length === 0 && (
              <p className="text-center col-span-full py-10 text-gray-500">
                No apps found for "{search}"
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default AllApps;
