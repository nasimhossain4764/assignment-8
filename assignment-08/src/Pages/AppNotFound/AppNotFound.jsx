import appNotFound from "../../assets/App-Error.png";

const AppNotFound = () => {
  return (
    <div className="text-center justify-center items-center pt-10">
      <div className="w-full flex items-center justify-center">
        <img src={appNotFound} alt="" />
      </div>
      <p className="text-6xl font-bold py-5 pb-15">App not found!</p>
    </div>
  );
};

export default AppNotFound;
