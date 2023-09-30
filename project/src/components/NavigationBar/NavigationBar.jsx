import {
  NavButton,
  NavButtonWrapper,
  NavigationBarWrapper,
  NavigationLeft,
  NavigationRight,
} from "./NavigationBarStyle";
import { Link } from "react-router-dom";

const NavigationBar = () => {
  return (
    <NavigationBarWrapper>
      <NavigationLeft>
        <li>
          <Link to={"/"}>
            <i className="fa-solid fa-house fa-xs"></i>
          </Link>
        </li>
        <li>
          <Link to={"/resume"}>Resume</Link>
        </li>
        <li>
          <Link to={"/portfolio"}>Portfolio</Link>
        </li>
        <li>
          <a href="blog.html" id="tab-active">
            Blog
          </a>
        </li>
        <li>
          <a href="contact.html">Contact</a>
        </li>
      </NavigationLeft>

      <NavigationRight>
        <li>
          <i className="fa-brands fa-facebook-f"></i>
        </li>
        <li>
          <i className="fa-brands fa-twitter"></i>
        </li>
        <li>
          <i className="fa-brands fa-instagram"></i>
        </li>
        <li>
          <i className="fa-solid fa-basketball"></i>
        </li>
        <li>
          <i className="fa-solid fa-bars"></i>
        </li>
        <li className="btn__hire-me">
          <NavButtonWrapper>
            <NavButton href="mailto:@tavonline.net">
              Hire Me <i className="fa-solid fa-paper-plane fa-xs"></i>
            </NavButton>
          </NavButtonWrapper>
        </li>
      </NavigationRight>
    </NavigationBarWrapper>
  );
};

export default NavigationBar;
