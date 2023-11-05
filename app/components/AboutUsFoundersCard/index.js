import "./index.css";

function AboutUsFoundersCard(props) {
  return (
    // <div className="flex">
    //   <div className="card">
    //     <img src={props.image} alt="Person" />
    //   </div>
    //   <div className="card-content">
    //     <h3 className="card-name">{props.name}</h3>
    //     <p className="card-title">{props.title}</p>
    //   </div>
    // </div>
    <div id="container">
      <img
        id="image"
        src="https://i.pinimg.com/1200x/4e/00/9a/4e009ad7cf2c339c46ef5d1644798755.jpg"
      />
      <div id="text">
        <div className="text-box">
          <h1>Siddharth Jain</h1>
          <p>Co-Founder & CEO</p>
        </div>
      </div>
    </div>
  );
}

export default AboutUsFoundersCard;
