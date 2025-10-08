import axios from "axios";
import { useEffect, useState } from "react";
import InstalledAppsCard from "../‎InstalledAppsCard/‎InstalledAppsCard";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const InstalledApps = () => {
  const [installedApps, setInstalledApps] = useState([]);
  const [filteredDt, setFilteredDt] = useState([]);
  const [sort, setSort] = useState("");

  const getInstalledAppIds = () => {
    const storedData = localStorage.getItem("appList");
    return storedData ? JSON.parse(storedData) : [];
  };

  const handleRemoveDtFromLocalStor = (id) => {
    toast.success("App uninstalled successfully!");
    setFilteredDt((prev) => prev.filter((rmId) => rmId.id !== id));
    const storedData = getInstalledAppIds();
    const updatedData = storedData.filter(
      (appId) => Number(appId) !== Number(id)
    );
    localStorage.setItem("appList", JSON.stringify(updatedData));
    setInstalledApps((prev) => prev.filter((app) => app.id !== id));
  };

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get("/appsData.json");
      const data = res.data;
      const installedIds = getInstalledAppIds().map(Number);
      const filteredAppDt = data.filter((app) => installedIds.includes(app.id));
      setInstalledApps(filteredAppDt);
      const filteredData = data.filter((app) => installedIds.includes(app.id));
      setFilteredDt(filteredData);
    };

    fetchData();
  }, []);

  const handleSortingFunctionality = (sortType) => {
    setSort(sortType);
    if (sortType === "lowToHigh") {
      const sortedBySize = [...filteredDt].sort((a, b) => a.size - b.size);
      setFilteredDt(sortedBySize);
    } else if (sortType === "highToLow") {
      const sortedBySize = [...filteredDt].sort((a, b) => b.size - a.size);
      setFilteredDt(sortedBySize);
    }
  };

  return (
    <div className="p-5">
      {installedApps.length === 0 ? (
        <p className="text-center py-10">No installed apps found.</p>
      ) : (
        <>
          <h1 className="text-3xl font-bold mb-5">Installed Apps</h1>

          <select
            value={sort}
            onChange={(e) => handleSortingFunctionality(e.target.value)}
            className="select"
          >
            <option value="">Sort By</option>
            <option value="lowToHigh">Low to High</option>
            <option value="highToLow">High to Low</option>
          </select>

          <div className="grid gap-6">
            {filteredDt.map((filterDt) => (
              <InstalledAppsCard
                key={filterDt.id}
                filterDt={filterDt}
                handleRemoveDtFromLocalStor={handleRemoveDtFromLocalStor}
              />
            ))}
          </div>
        </>
      )}

      <ToastContainer position="top-right" autoClose={2000} />
    </div>
  );
};

export default InstalledApps;
