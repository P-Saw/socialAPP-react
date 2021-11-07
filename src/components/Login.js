import styled from 'styled-components';
import Logo from '../assets/SocialAPPLogo.png';
import Hero from '../assets/Hero-img.png';
import { Link } from 'react-router-dom';
import { Button } from './Button/Button';
import FloatingLabelInput from './Input/FloatingLabelInput';

const StyledHeader = styled.header`
  background-color: ${({ theme }) => theme.colors.white};
`;

const StyledNav = styled.nav`
  width: 100%;
  max-width: 1600px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: auto;
  padding: 0 20px;
`;

const StyledLogoLink = styled(Link)`
  font-size: ${({ theme }) => theme.fontSize.xl};
  font-weight: 700;
  color: ${({ theme }) => theme.colors.turq};
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  text-decoration: none;
  & img {
    width: 100%;
    max-width: 60px;
  }
  @media (max-width: 768px) {
    font-size: ${({ theme: { fontSize } }) => fontSize.l};
    & img {
      max-width: 40px;
    }
  }
`;

const ButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledSection = styled.section`
  height: 100%;
  width: 100%;
  max-width: 1920px;
  margin: auto;
  padding: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

const FormWrapper = styled.div`
  flex-shrink: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  & h1 {
    width: 80%;
    font-size: ${({ theme }) => theme.fontSize.xxl};
    color: ${({ theme }) => theme.colors.darkGrey};
  }
  & form {
    background-color: ${({ theme }) => theme.colors.white};
    border-radius: 30px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    max-width: 350px;
    margin: auto;
    padding: 50px 30px;
  }
  @media (max-width: 800px) {
    & h1 {
      width: 100%;
    }
  }
`;

const HeroImg = styled.div`
  & img {
    width: 100%;
  }
`;

const Login = () => {
  return (
    <>
      <StyledHeader>
        <StyledNav>
          <StyledLogoLink to="/">
            <img src={Logo} alt="" />
            <p>SocialAPP</p>
          </StyledLogoLink>
          <ButtonsWrapper>
            <Button>Join now</Button>
            <Button colored>Sign Up</Button>
          </ButtonsWrapper>
        </StyledNav>
      </StyledHeader>
      <main>
        <StyledSection>
          <FormWrapper>
            <h1>Welcome to your professional community</h1>
            <form>
              <FloatingLabelInput id="login" type="text" label="Login" />
              <FloatingLabelInput id="password" type="password" label="Password" />
              <Button colored>Login</Button>
              <p>Dont have account? Register here</p>
            </form>
          </FormWrapper>
          <HeroImg>
            <img src={Hero} alt="" />
          </HeroImg>
        </StyledSection>
      </main>
    </>
  );
};

export default Login;
