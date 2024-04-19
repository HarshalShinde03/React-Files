import "./App.css";
import Logo from "./assets/logo.png";
import image1 from "./assets/1.png";
import middleImg from "./assets/2.png";
import lastImg from "./assets/3.png";
// import {} from "react-icons/"
import { FaSquarePhone } from "react-icons/fa6";
import { IoLogoFacebook } from "react-icons/io5";
import { TfiWorld } from "react-icons/tfi";
function App() {
  return (
    <>
      <div id="hero">
        <div id="main">
          <img src={Logo} />
        </div>
        <div id="middle">
          <div id="left">
            <img src={image1} />
          </div>
          <div id="right">
            <p>
              {" "}
              <b>
                C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018
                for the 4th time.
              </b>
            </p>
            <div id="middle-1">
              <ul>
                <li>
                  C.R.I.'s energy efficient products are well recognized by
                  various Government Institutions, as trustworthy products for
                  various projects across the globe to save energy.
                </li>
                <li>
                  C.R.I. is the highest contributor in the country for the
                  projects of EESL (Energy Efficiency Services Limited) to
                  replace the old inefficient pumps with 5 Star rated energy
                  efficient smart pumps with IoT enabled control panel.
                </li>
              </ul>
              <img src={middleImg} />
            </div>
            <p>
              Government of India has awarded the "National Energy Conservation
              Award 2018". Mr. G. Selvaraj, Joint Managing Director of C.R.I.
              Group received the award from Smt. Sumitra Mahajan, Speaker of Lok
              Sabha & Shri. Raj Kumar Singh, Honorable Minister of State.
            </p>
          </div>
        </div>
        <p id="centerP" className="img-above-text">
          INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY
          RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF
          POWER FOR THE NATION.
        </p>
        <div id="lastImage">
          <img src={lastImg} />
        </div>
        <p id="centerP" className="img-text">
          Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables -
          Solar Systems - Motors
        </p>
        <hr />
        <p id="centerP" className="heading">
          <b>C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS</b>
        </p>

        <p id="centerP" className="secondLast-text">
          CHEMICALS & PROCESS <span>| </span>POWER<span>| </span> WATER & WASTE
          WATER<span>| </span> OILS & GAS<span>| </span> PHARMA<span>| </span>{" "}
          SUGARS & DISTILLERIES<span>| </span> PAPER & PULP<span>| </span>{" "}
          MARINE & DEFENCE<span>| </span> METAL & MINING<span>| </span> FOOD &
          BEVERAGE<span>| </span> PETROCHEMICAL & REFINERIES<span>| </span>{" "}
          SOLAR<span>| </span> BUILDING<span>| </span> HVAC<span>| </span> FIRE
          FIGHTING<span>| </span> AGRICULTURE & RESIDENTIAL
        </p>
        <div id="footer-container">
          <div id="footer">
            <div>
              <FaSquarePhone size={30} style={{ fill: "white" }} />
              <p>Toll Free  1800 200 1234</p>
            </div>
            <div>
              <IoLogoFacebook size={30} style={{ fill: "white" }} />
              <p><a href="www.facebook.com/cripumps">www.facebook.com/cripumps</a></p>
            </div>
            <div>
              <TfiWorld size={30} style={{ fill: "white"}} />
              <p><a href="www.crirgoups.com">www.crirgoups.com</a></p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
