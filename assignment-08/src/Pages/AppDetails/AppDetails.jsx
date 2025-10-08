import { useParams } from "react-router";
import axios from "axios";

const AppDetails = () => {
  const { id } = useParams();
  console.log(id);
  return <div>jkdjhfgjk</div>;
};

export default AppDetails;
