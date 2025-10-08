import fourOfourImg from "../../assets/error-404.png";

const FourOFourPage = () => {
  return (
    <div className="text-center justify-center items-center pt-10">
      <div className="w-full flex items-center justify-center">
        <img src={fourOfourImg} alt="" />
      </div>
      <p className="text-6xl font-bold py-5 pb-15">Page not found!</p>
    </div>
  );
};

export default FourOFourPage;
