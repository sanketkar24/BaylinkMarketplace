import { FaLinkedin, FaPlusCircle } from "react-icons/fa";
import "./index.css";

function AboutUsFoundersCard(props) {
  return (
    <>
      {!props.empty && <div className="w-64 relative h-72 my-4">
        <div className="rounded-md"
          style={{
            background: `url("${props.image}")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            height: "100%",
            width: "100%",
          }}>
        </div>
        <div className="flex absolute -bottom-8 shadow-xl left-1 bg-white px-6 rounded-md py-4 justify-between w-[96%] items-center">
          <div className="flex flex-col items-start">
            <h1 className="font-semibold">{props.name}</h1>
            <p className="font-light text-sm">{props.position}</p>
          </div>
          <a href={props.linkedin} target="_blank">
            <FaLinkedin className="" size={24} />
          </a>
        </div>
      </div>}

      {props.empty && <div className="w-64 relative h-72 my-4">
        <div className="rounded-md bg-gray-200 h-full w-full flex justify-center items-center">
          <FaPlusCircle className="text-[#48BFEA] text-3xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
        </div>
        <div className="flex absolute -bottom-8 shadow-xl left-1 bg-white px-6 rounded-md py-4 justify-between w-[96%] items-center">
          <div className="flex flex-col items-start">
            <h1 className="font-semibold text-sm">
              Wanna be a part of our team?
            </h1>
            <p className="font-light text-sm">
              Join Us!
            </p>
          </div>
        </div>
      </div>}

    </>
  );
}

export default AboutUsFoundersCard;

/*

YOUR CSS FOR THIS COMPONENT: USING PROPER TAILWIND CSS HAS REDUCED TO WHAT YOU'RE SEEING ABOVE 

.card {
  width: 300px;
  border: 1px solid #ccc;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  display: flex;
  flex-direction: row;
}

.card-image {
  width: 100px;
  height: 100%;
  object-fit: cover;
}

.card-content {
  width: 200px;
  height: 100%;
  padding: 20px;
}

.card-name {
  font-size: 24px;
  font-weight: bold;
}

.card-title {
  font-size: 18px;
  color: #666;
}

.card-link {
  position: absolute;
  bottom: 10px;
  right: 10px;
}

.card-link img {
  width: 32px;
}


#container {
  height: 20vh;
  width: 20vw;
  position: relative;
  margin-bottom: 15vh;
}
#image {
  position: absolute;
  left: 0;
  top: 0;
  border-radius: 20px;
}
#text {
  z-index: 100;
  position: absolute;
  color: black;
  font-size: 24px;
  font-weight: bold;
  left: 20px;
  top: 220px;
}

.text-box{
  width: 250px;
  background-color: #666;
  color: #fff;
  padding: 10px;
  border-radius: 10px;
  
}


*/