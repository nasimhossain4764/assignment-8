import { useParams } from "react-router";
import axios from "axios";
import { useEffect, useState } from "react";
import downloadImg from "../../assets/icon-downloads.png";
import reviewsImg from "../../assets/icon-review.png";
import ratingImg from "../../assets/icon-ratings.png";
import RatingChart from "../../Components/RatingChart/RatingChart";
import AppNotFound from "../AppNotFound/AppNotFound";
import ModernLoading from "../ModernLoading/ModernLoading";
import { ToastContainer, toast } from "react-toastify";

const AppDetails = () => {
  const [filteredData, setFilteredData] = useState(null);
  const [buttonStatus, setButtonStatus] = useState(false);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  const getLsStorDatas = () => {
    const storedData = localStorage.getItem("appList");
    return storedData ? JSON.parse(storedData) : [];
  };

  const addDataToTheDb = (id) => {
    const storedData = getLsStorDatas();
    if (!storedData.includes(id)) {
      storedData.push(id);
      localStorage.setItem("appList", JSON.stringify(storedData));
    }
  };

  useEffect(() => {
    const fetchAppDetailsData = async () => {
      const res = await axios.get("/appsData.json");
      const data = res.data;
      const filteredAppData = data.find((item) => String(item.id) === id);
      setFilteredData(filteredAppData);

      const storedData = getLsStorDatas().map(String);
      if (storedData.includes(id)) {
        setButtonStatus(true);
      }
      setLoading(false);
    };
    fetchAppDetailsData();
  }, [id]);

  const handleInstallClick = () => {
    if (filteredData?.id) {
      addDataToTheDb(String(filteredData.id));
      setButtonStatus(true);
      toast.success("App installed successfully!");
    }
  };

  if (!filteredData) return <AppNotFound />;

  return (
    <div>
      {loading ? (
        <ModernLoading />
      ) : (
        <div>
          <div className="card card-side">
            <figure>
              <img
                className="w-96"
                src={filteredData.image}
                alt={filteredData.title}
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-3xl pb-3">{filteredData.title}</h2>
              <p className="text-start text-xl text-gray-500">
                Developed by:{" "}
                <span className="text-purple-600 font-semibold">
                  {filteredData.companyName}
                </span>
              </p>
              <div className="divider"></div>

              <div className="stats lg:stats-horizontal shadow grid grid-cols-3">
                <div className="stat">
                  <div className="stat-title mx-auto">
                    <img src={downloadImg} alt="Downloads" />
                  </div>
                  <div className="text-center">Downloads</div>
                  <div className="stat-desc font-bold text-5xl text-center">
                    {filteredData.downloads}
                  </div>
                </div>

                <div className="stat">
                  <div className="stat-title mx-auto">
                    <img src={ratingImg} alt="Ratings" />
                  </div>
                  <div className="text-center">Average Ratings</div>
                  <div className="stat-desc font-bold text-5xl text-center">
                    {filteredData.ratingAvg}
                  </div>
                </div>

                <div className="stat">
                  <div className="stat-title mx-auto">
                    <img src={reviewsImg} alt="Reviews" />
                  </div>
                  <div className="text-center">Reviews</div>
                  <div className="stat-desc font-bold text-5xl text-center">
                    {filteredData.reviews}
                  </div>
                </div>
              </div>

              <div className="card-actions mt-7">
                <button
                  disabled={buttonStatus}
                  onClick={handleInstallClick}
                  className={`btn btn-success text-white text-xl ${
                    buttonStatus ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                >
                  {buttonStatus
                    ? "Installed"
                    : `Install Now (${filteredData.size} MB)`}
                </button>
              </div>
            </div>
          </div>

          <div className="divider py-10"></div>

          {filteredData.ratings && <RatingChart filteredData={filteredData} />}
        </div>
      )}
      <ToastContainer />;
    </div>
  );
};

export default AppDetails;
