import { HeaderContainer, HeaderLogo } from "./styles";
import Logo from "../../assets/Logo.png";

export const Header = () => {
  return (
    <HeaderContainer>
      <figure>
        <HeaderLogo src={Logo} alt="Logo" />
      </figure>
    </HeaderContainer>
  );
};
