import CTALogoImage from "./../../assets/cta-logo-one.svg";
import CTAlogoTwo from "./../../assets/cta-logo-two.png"
import { BgImage, CTA, CTALogo, CTALogoSecond, Container, Content, Description, SignUp } from "./LoginStyled";
const Login = () => {
  return (
    <Container>
      <Content>
        <CTA>
          <CTALogo src={CTALogoImage} />
          <SignUp>GET ALL THERE</SignUp>
          <Description>
            Get Access to Premiure Disney+ For An Additional Fee of $200
            Anuallyy. Offer Expire Soon  Get Access to Premiure Disney+ For An Additional Fee of $200
            Anuallyy. Offer Expire Soon
          </Description>
          <CTALogoSecond src={CTAlogoTwo} alt="ctalogo" />
        </CTA>
        <BgImage />
      </Content>
    </Container>
  );
};



export default Login;
