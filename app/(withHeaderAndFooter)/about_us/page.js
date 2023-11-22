"use client";
import "./page.css";
import AboutUsFoundersCard from "../../components/AboutUsFoundersCard/index.js";
import FAQAccordion from "@/app/components/FAQComponent";
import { FaLinkedin } from "react-icons/fa";
import OurValue from "@/app/components/OurValues";

function AboutUsPage() {
  var founders1 = [
    {
      name: "Sakshat Gandhi",
      position: "Co-Founder & CEO",
      image: "https://i.pinimg.com/1200x/4e/00/9a/4e009ad7cf2c339c46ef5d1644798755.jpg",
      linkedin: "https://www.linkedin.com/in/siddharth-jain-1b1b1b1b/",
    },
    {
      name: "Saket",
      position: "CTO",
      image: "https://th.bing.com/th/id/OIP.u0MyPHXs0GrT15D7qNu8FAHaFj?rs=1&pid=ImgDetMain",
      linkedin: "https://www.linkedin.com/in/siddharth-jain-1b1b1b1b/",
    },
    {
      name: "Dhara Bhasin",
      position: "CFO",
      image: "https://th.bing.com/th/id/OIP.P9IZ4XZZeJ2JbkL6-LWRzwAAAA?w=250&h=300&rs=1&pid=ImgDetMain",
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
      empty: true,
    }
  ];
  return (
    <div className="aboutUsPage makeitcenter" >
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

      {/* Team Card */}
      <div className='grid gap-8 tablet:grid-cols-2 laptop:grid-cols-3'>
        {[...founders1, ...founders2].map((founder) => <AboutUsFoundersCard {...founder} />)}
      </div>

      <div className="topHeader mt-16 ">Our Values</div>

      <div className='grid gap-8 w-full px-8 tablet:grid-cols-2 laptop:grid-cols-3 grid-cols-1'>
        {Values.map((value) => <OurValue {...value} />)}
      </div>

      <div className="topHeader mt-16 ">Frequently Asked Questions</div>
      <div className="mb-20">
        <FAQAccordion />
      </div>
    </div>
  );
}

export default AboutUsPage;


export const Values = [
  {
    title: "Simplicity",
    description: "Commodo accumsan nibh commodo faucibus. Nec tincidunt ipsum faucibus enim volutpat etiam scelerisque. Pulvinar in purus pharetra aliquam tellus interdum. Nulla nec aliquam lobortis ipsum ultrices duis."
  },
  {
    title: "Simplicity",
    description: "Commodo accumsan nibh commodo faucibus. Nec tincidunt ipsum faucibus enim volutpat etiam scelerisque. Pulvinar in purus pharetra aliquam tellus interdum. Nulla nec aliquam lobortis ipsum ultrices duis."
  },
  {
    title: "Simplicity",
    description: "Commodo accumsan nibh commodo faucibus. Nec tincidunt ipsum faucibus enim volutpat etiam scelerisque. Pulvinar in purus pharetra aliquam tellus interdum. Nulla nec aliquam lobortis ipsum ultrices duis."
  },
]