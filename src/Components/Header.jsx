import newsLogo from "./../assets/logo.png";
import moment from "moment";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <img className="my-3 mx-auto" src={newsLogo} alt="" />
      <p className="text-center text-lg font-bold text-gray-500">
        Journalism Without Fear or Favour
      </p>
      <div className="text-center text-lg font-semibold text-gray-700">
        <p>{moment().format("dddd, MMMM Do YYYY")}</p>
      </div>
      {/* marquee text  */}
      <div className="flex justify-between items-center my-5 bg-base-200 p-3 rounded-lg">
        <button className="btn btn-error text-white font-semibold text-xl mr-2">
          latest
        </button>
        <Marquee
          className="text-2xl font-semibold space-x-14 text-green-600"
          pauseOnHover={true}
          speed={100}
        >
          <Link to={"/news"}>
            An international geopolitical conference began today in Dhaka,
            featuring over 200 speakers and participants from 80+ countries. Dr.
            Muhammad Yunus delivered the keynote speech, addressing topics such
            as democracy, human rights, climate change, and economic
            development. This three-day event, titled "A Fractured World," aims
            to foster dialogue and cooperation among nations​
          </Link>{" "}
          <Link to={"/news"}>
            Historic Power Transaction Between Nepal, India, and Bangladesh For
            the first time, electricity from Nepal is being supplied to
            Bangladesh via India under a trilateral agreement. This initiative
            symbolizes growing regional cooperation in the energy sector.
            Although this year’s supply is limited to one day, the arrangement
            will extend annually from June to November starting in 2025
          </Link>{" "}
          <Link to={"/news"}>
            Shahbagh: Bodies of Unknown Man and Woman Found Authorities
            discovered the bodies of an unidentified man and woman at separate
            locations in Shahbagh, Dhaka. Local investigations suggest they were
            homeless individuals involved in begging
          </Link>
        </Marquee>
      </div>
    </div>
  );
}

export default Header;
