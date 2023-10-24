"use client";
import "./page.css";
import AboutUsFoundersCard from "../../components/AboutUsFoundersCard/index.js";
import FAQAccordion from "@/app/components/FAQComponent";

function AboutUsPage() {
  var founders1 = [
    {
      name: "Siddharth Jain",
      position: "Co-Founder & CEO",
      image: "https://i.pinimg.com/1200x/4e/00/9a/4e009ad7cf2c339c46ef5d1644798755.jpg",
      linkedin: "https://www.linkedin.com/in/siddharth-jain-1b1b1b1b/",
    },
    {
      name: "Siddharth Jain",
      position: "Co-Founder & CEO",
      image: "https://i.pinimg.com/1200x/4e/00/9a/4e009ad7cf2c339c46ef5d1644798755.jpg",
      linkedin: "https://www.linkedin.com/in/siddharth-jain-1b1b1b1b/",
    },
    {
      name: "Siddharth Jain",
      position: "Co-Founder & CEO",
      image: "https://i.pinimg.com/1200x/4e/00/9a/4e009ad7cf2c339c46ef5d1644798755.jpg",
      linkedin: "https://www.linkedin.com/in/siddharth-jain-1b1b1b1b/",
    },
    
  ];

  var founders2 = [
    {
      name: "Siddharth Jain",
      position: "Co-Founder & CEO",
      image:
        "https://i.pinimg.com/1200x/4e/00/9a/4e009ad7cf2c339c46ef5d1644798755.jpg",
      linkedin: "https://www.linkedin.com/in/siddharth-jain-1b1b1b1b/",
    },
    {
      name: "Siddharth Jain",
      position: "Co-Founder & CEO",
      image:
        "https://i.pinimg.com/1200x/4e/00/9a/4e009ad7cf2c339c46ef5d1644798755.jpg",
      linkedin: "https://www.linkedin.com/in/siddharth-jain-1b1b1b1b/",
    },
    {
      name: "Siddharth Jain",
      position: "Co-Founder & CEO",
      image:
        "https://i.pinimg.com/1200x/4e/00/9a/4e009ad7cf2c339c46ef5d1644798755.jpg",
      linkedin: "https://www.linkedin.com/in/siddharth-jain-1b1b1b1b/",
    },
  ];
  return (
    <div className="aboutUsPage  makeitcenter" >
      <div className=" topHeader mt-10">
        Unlocking Retail{" "}
        <span style={{ color: "white", backgroundColor: "#22B2E6" }}>
          Success!
        </span>
      </div>
      <div className="topParagraph ">
        Revolutionizing retail, Baylink aims to Empower Brands and Retailers
        through Seamless Integration of Online and Offline Channels, Strategic
        Support, Streamlined Logistics, and Innovative Solutions
      </div>
      <div className="makeitcenter my-20">
        <div className="recordValuesBox">
          <div>
            <div className="valuesBoldStyle">50+</div>
            <div className="whiteBoldText">Customers</div>
          </div>
          <div className="verticalSeparator"></div>
          <div>
            <div className="valuesBoldStyle">100+</div>
            <div className="whiteBoldText">Brands</div>
          </div>
          <div className="verticalSeparator"></div>
          <div>
            <div className="valuesBoldStyle">1000+</div>
            <div className="whiteBoldText">Stores</div>
          </div>
        </div>
      </div>
      <div className="topHeader">Our Mission and Vision</div>
      <p className="normalParagraph px-[20%]">
        Our mission is to make offline expansion accessible and affordable for
        all D2C brands, regardless of their size or budget. We aim to turn
        Indian D2C brands into global leaders by giving them access to the
        lucrative US market, leading to both substantial revenue growth for
        these brands and a boost to India's economy through international
        expansion.
      </p>
      <div className="topHeader">Our Team</div>
      <div className="mb-20 w-full flex justify-evenly">
        {founders1.map((founder, index) => (
          <AboutUsFoundersCard
            key={index}
            name={founder.name}
            position={founder.position}
            image={founder.image}
            linkedin={founder.linkedin}
          />
        ))}
      </div>
      <div className="mb-20 w-full flex justify-evenly">
        {founders2.map((founder, index) => (
          <AboutUsFoundersCard
            key={index}
            name={founder.name}
            position={founder.position}
            image={founder.image}
            linkedin={founder.linkedin}
          />
        ))}
      </div>
      <div className="topHeader">Frequently Asked Questions</div>
      <div className="mb-20">
        <FAQAccordion />
      </div>
    </div>
  );
}

export default AboutUsPage;
