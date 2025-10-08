import { useEffect, useState } from "react";
import banImg from "../../assets/hero.png";
import axios from "axios";
import Card from "../../Components/Card/Card";
import { Link } from "react-router";

const Home = () => {
  const [homeData, setHomeData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get("/appsData.json");
      const data = res.data;

      setHomeData(data.slice(0, 8));
    };
    fetchData();
  }, []);

  return (
    <div>
      {/* Hero text */}
      <div className="text-center">
        <h1 className="text-6xl font-bold py-5">
          We Build <br /> <span className="text-purple-700">Productive</span>{" "}
          Apps
        </h1>
        <p className="text-gray-600">
          At HERO.IO , we craft innovative apps designed to make everyday life
          simpler, smarter, and more exciting. <br /> Our goal is to turn your
          ideas into digital experiences that truly make an impact.
        </p>
        <button>Google Play</button>
        <button>App Store</button>
      </div>

      {/* Hero Banner */}
      <div className="py-10">
        <img
          src={banImg}
          alt="Banner Image"
          className="justify-self-center-safe"
        />

        <div className=" bg-purple-600 text-white text-center">
          <h1 className="text-5xl font-bold py-10">
            Trusted by Millions, Built for You
          </h1>
          <div className="pb-10">
            <div className="stats stats-vertical lg:stats-horizontal gap-10">
              <div className="stat">
                <div className="stat-title text-white">Total downloads</div>
                <div className="stat-value">29.6M</div>
                <div className="stat-desc text-white">
                  21% more than last month
                </div>
              </div>

              <div className="stat">
                <div className="stat-title text-white">Total Reviews</div>
                <div className="stat-value">906K</div>
                <div className="stat-desc text-white">
                  46% more than last month
                </div>
              </div>

              <div className="stat">
                <div className="stat-title text-white">Active Apps</div>
                <div className="stat-value">132+</div>
                <div className="stat-desc text-white">31 more will Launch</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Trendiing Apps section */}
      <div className="text-center">
        <h1 className="text-4xl font-bold">Trending Apps</h1>
        <p className="text-gray-600 py-7">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>

      <div className="grid  grid-cols-2 lg:grid-cols-4 gap-5 pb-7">
        {homeData.map((data) => (
          <Card key={data.id} data={data} />
        ))}
      </div>

      {/* show allbutton  */}
      <div className="text-center pb-10">
        <Link
          to={"allApps"}
          className="text-white font-semibold bg-purple-600 btn"
        >
          Show all
        </Link>
      </div>
    </div>
  );
};

export default Home;
