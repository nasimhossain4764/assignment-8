import { Link } from "react-router";
import downloadImg from "../../assets/icon-downloads.png";
import reviewdImg from "../../assets/icon-ratings.png";

const Card = ({ data }) => {
  return (
    <Link
      to={`allApps/${data.id}`}
      className="card bg-base-100 w-full shadow-sm"
    >
      <figure>
        <img className="h-36" src={data.image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{data.title}</h2>
        <div className="flex justify-between">
          <div className="badge badge-outline border-0 lg:p-4 badge-success bg-green-100 flex items-center justify-center">
            <img className="w-4 h-4" src={downloadImg} alt="" />
            {data.downloads}
          </div>
          <div className="badge badge-soft lg:p-4 badge-warning bg-amber-100 flex items-center justify-center ">
            <img className="w-4 h-4" src={reviewdImg} alt="" />
            {data.ratingAvg}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
