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
          <Link to={'/news'}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam
            minima amet blanditiis repudiandae, at possimus facilis, assumenda
            ut dolores vero dolor aliquam, optio iusto error. Inventore,
            voluptas? Facere non tempore magnam. Tenetur, sed explicabo, hic
            nesciunt pariatur perferendis a unde cumque laudantium illo
            recusandae voluptate, alias sapiente eligendi id maxime.
          </Link>{" "}
          <Link  to={'/news'}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam
            minima amet blanditiis repudiandae, at possimus facilis, assumenda
            ut dolores vero dolor aliquam, optio iusto error. Inventore,
            voluptas? Facere non tempore magnam. Tenetur, sed explicabo, hic
            nesciunt pariatur perferendis a unde cumque laudantium illo
            recusandae voluptate, alias sapiente eligendi id maxime.
          </Link>{" "}
          <Link  to={'/news'}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam
            minima amet blanditiis repudiandae, at possimus facilis, assumenda
            ut dolores vero dolor aliquam, optio iusto error. Inventore,
            voluptas? Facere non tempore magnam. Tenetur, sed explicabo, hic
            nesciunt pariatur perferendis a unde cumque laudantium illo
            recusandae voluptate, alias sapiente eligendi id maxime.
          </Link>
        </Marquee>
      </div>
    </div>
  );
}

export default Header;
