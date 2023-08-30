import { styled } from "styled-components";
import NavLogo from "./../assets/logo.svg";
import { Link } from "react-router-dom";
import { navLinks } from "../constants/helper";
import { auth, googleProvider } from "../firebase";
import { signInWithPopup } from "firebase/auth";
const Header = () => {
  const handleAuth = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        console.log(result);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Nav>
      <Logo>
        <img src={NavLogo} alt="Disney+" />
      </Logo>
      <NavMenu>
        {navLinks.map((data) => (
          <Link key={data.id} to="/">
            <img src={data.img} alt={data.altText} />
            <span>{data.text}</span>
          </Link>
        ))}
      </NavMenu>
      <Login onClick={handleAuth}>Login</Login>
    </Nav>
  );
};

const Nav = styled.nav`
  top: 0;
  height: 75px;
  background-color: #090b13;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0 20px;
`;
const Logo = styled.a`
  padding: 0;
  width: 70px;
  margin-top: 4px;
  max-height: 70px;
  font-size: 0;
  display: inline-block;
  img {
    display: block;
    width: 100%;
  }
`;

const NavMenu = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  height: 100%;
  justify-content: flex-end;
  position: relative;
  margin: 0;
  padding: 0;
  margin-right: auto;
  margin-left: 25px;

  a {
    display: flex;
    align-items: center;
    padding: 0 12px;

    img {
      height: 30px;
      width: 30px;
      z-index: auto;
      min-width: 20px;
    }
    span {
      color: rgb(249, 249, 249);
      font-size: 16px;
      letter-spacing: 1.42px;
      line-height: 1.08;
      position: relative;
      white-space: nowrap;
      &::before {
        background-color: rgb(249, 249, 249);
        content: "";
        height: 2px;
        width: auto;
        position: absolute;
        left: 0px;
        opacity: 0;
        visibility: hidden;
        position: absolute;
        right: 0px;
        bottom: -6px;
        transform-origin: left center;
        transform: scaleX(0);
        transition: all 250ms ease-in-out;
      }
    }

    &:hover {
      span::before {
        transform: scaleX(1);
        visibility: visible;
        opacity: 1;
      }
    }
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

const Login = styled.a`
  background-color: rgba(0, 0, 0, 0.6);
  border: 1px solid #f9f9f9;
  padding: 7px 25px;
  border-radius: 10px;
  cursor: pointer;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  &:hover {
    background-color: #f9f9f9;
    color: #000;
    border: 1px solid #000;
  }
`;

export default Header;
