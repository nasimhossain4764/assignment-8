// import axios from "axios";
// import { useEffect, useState } from "react";
// import InstalledAppsCard from "../‎InstalledAppsCard/‎InstalledAppsCard";

// const InstalledApps = () => {
//   const [installedApps, setInstalledApps] = useState([]);

//   const getInstalledAppIds = () => {
//     const storedData = localStorage.getItem("appList");
//     return storedData ? JSON.parse(storedData) : [];
//   };

//   useEffect(() => {
//     const fetchData = async () => {
//       const res = await axios.get("appsData.json");
//       const data = res.data;

//       const filteredApps = getInstalledAppIds().map(Number);

//       const filteredAppDt = data.filter((app) => filteredApps.includes(app.id));

//       setInstalledApps(filteredAppDt);
//     };

//     fetchData();
//   }, []);
//   console.log(installedApps);
//   return (
//     <div>
//       <h1>Installed Apps</h1>
//       <div>
//         {installedApps.map((filterDt) => (
//           <InstalledAppsCard filterDt={filterDt} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default InstalledApps;

import axios from "axios";
import { useEffect, useState } from "react";
import InstalledAppsCard from "../‎InstalledAppsCard/‎InstalledAppsCard";

const InstalledApps = () => {
  const [installedApps, setInstalledApps] = useState([]);

  const getInstalledAppIds = () => {
    const storedData = localStorage.getItem("appList");
    return storedData ? JSON.parse(storedData) : [];
  };

  // Remove app from localStorage and UI
  const handleRemoveDtFromLocalStor = (id) => {
    // Remove from localStorage
    const storedData = getInstalledAppIds();
    const updatedData = storedData.filter(
      (appId) => Number(appId) !== Number(id)
    );
    localStorage.setItem("appList", JSON.stringify(updatedData));

    // Remove from UI
    setInstalledApps((prev) => prev.filter((app) => app.id !== id));
  };

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get("/appsData.json");
      const data = res.data;

      const installedIds = getInstalledAppIds().map(Number);

      const filteredAppDt = data.filter((app) => installedIds.includes(app.id));

      setInstalledApps(filteredAppDt);
    };

    fetchData();
  }, []);

  if (installedApps.length === 0)
    return <p className="text-center py-10">No installed apps found.</p>;

  return (
    <div className="p-5">
      <h1 className="text-3xl font-bold mb-5">Installed Apps</h1>
      <div className="grid gap-6">
        {installedApps.map((filterDt) => (
          <InstalledAppsCard
            key={filterDt.id}
            filterDt={filterDt}
            handleRemoveDtFromLocalStor={handleRemoveDtFromLocalStor}
          />
        ))}
      </div>
    </div>
  );
};

export default InstalledApps;
