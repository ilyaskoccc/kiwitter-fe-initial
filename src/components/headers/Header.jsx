import { Link } from "react-router-dom/cjs/react-router-dom.min";
import logo from "../../../public/kiwitter.png";
import login from "../../../public/login.png";
export default function Header() {
  return (
    <div className="container mx-auto sticky top-0 bg-white shadow-md">
      <header className="mx-auto p-6">
        <nav className="flex justify-around items-center">
          <div className="w-16 h-16">
            <Link to="/">
              <span className="text-lg font-bold text-lime-800">Kiwitter</span>
              <img src={logo} alt="logo" />
            </Link>
          </div>
          <Link to="/">
            <div className="text-lg font-bold text-lime-800">Home Page</div>
          </Link>
          <div className="flex gap-5 items-center">
            <Link to="/signup">
              <span className="text-lg font-bold text-lime-800">Sign Up</span>
            </Link>
            ||
            <Link to="/login">
              <img className="w-12 h-8" src={login} alt="login" />
            </Link>
          </div>
        </nav>
      </header>
    </div>
  );
}
