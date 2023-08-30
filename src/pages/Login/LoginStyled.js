import { styled } from "styled-components";
import BackgroundImage from "./../../assets/login-background.jpg";

export const Container = styled.section`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  text-align: center;
  height: 100vh;
`;

export const Content = styled.div`
  margin-bottom: 10vw;
  width: 100%;
  position: relative;
  min-height: 100vh;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 80px 40px;
  height: 100%;
`;

export const BgImage = styled.div`
  background-image: url(${BackgroundImage});
  height: 100%;
  background-size: cover;
  background-position: top;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: -1;
`;

export const CTA = styled.div`
  width: 100%;
  max-width: 650px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  transition-timing-function: ease;
  transition: opacity 0.2s;
`;

export const CTALogo = styled.img`
  width: 100%;
  height: 100%;
  max-width: 600px;
  display: block;
  min-height: 1px;
`;

export const SignUp = styled.a`
  font-weight: bold;
  color: #f9f9f9;
  background-color: #0063e5;
  width: 100%;
  margin-bottom: 10px;
  padding: 10px;
  letter-spacing: 5px !important;
  font-size: 18px;
  border: 1px solid transparent;
  border-radius: 5px;
  transition: 0.3s background-color;
  &:hover {
    background-color: #0483ee;
  }
`;

export const Description = styled.p`
  color: hsla(0%, 0%, 95.3%, 1%);
  font-size: 14px;
  margin: 0 0 24px;
  line-height: 1.5;
  letter-spacing: 1.5px;
`;

export const CTALogoSecond = styled.img`
width: 100%;
max-width: 600px;
display: inline-block;
vertical-align: bottom;
margin-bottom: 20px;
`