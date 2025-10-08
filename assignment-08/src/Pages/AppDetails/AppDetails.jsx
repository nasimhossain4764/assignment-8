import { useParams } from "react-router";
import axios from "axios";
import { useEffect, useState } from "react";
import downloadImg from "../../assets/icon-downloads.png";
import reviewsImg from "../../assets/icon-review.png";
import ratingImg from "../../assets/icon-ratings.png";
import RatingChart from "../../Components/RatingChart/RatingChart";

const AppDetails = () => {
  const [filteredData, setFilteredData] = useState([]);
  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    const fetchAppDetailsData = async () => {
      const res = await axios.get("/appsData.json");
      const data = res.data;
      const filteredAppData = data.find((item) => String(item.id) === id);
      setFilteredData(filteredAppData);
    };
    fetchAppDetailsData();
  }, [id]);

  return (
    <>
      <div className="card card-side">
        <figure>
          <img className="w-96" src={filteredData.image} alt="Movie" />
        </figure>
        <div className="card-body">
          <div>
            <h2 className="card-title text-3xl pb-3"> {filteredData.title} </h2>
            <p className="text-start text-xl text-gray-500">
              Developed by :{" "}
              <span className="text-purple-600 font-semibold">
                {filteredData.companyName}
              </span>
            </p>
            <div className="divider"></div>
          </div>

          <div className="stats  lg:stats-horizontal shadow   grid grid-cols-3">
            <div className="stat">
              <div className="stat-title mx-auto">
                <img src={downloadImg} alt="" />
              </div>
              <div className="text-center">Downloads</div>
              <div className="stat-desc font-bold text-5xl text-center">
                {filteredData.downloads}
              </div>
            </div>

            <div className="stat">
              <div className="stat-title mx-auto">
                <img src={ratingImg} alt="" />
              </div>
              <div className="text-center">Average Ratings</div>
              <div className="stat-desc font-bold text-5xl text-center">
                {filteredData.ratingAvg}
              </div>
            </div>

            <div className="stat">
              <div className="stat-title mx-auto">
                <img src={reviewsImg} alt="" />
              </div>
              <div className="text-center">Downloads</div>
              <div className="stat-desc font-bold text-5xl text-center">
                {filteredData.reviews}
              </div>
            </div>
          </div>
          <div className="card-actions mt-7">
            <button className="btn btn-success text-white text-xl">
              {`Install Now (${filteredData.size} MB) `}
            </button>
          </div>
        </div>
      </div>
      <div className="divider py-10"></div>
      {/* Rating chart */}
      <RatingChart filteredData={filteredData} />
    </>
  );
};

export default AppDetails;
