import LongPurpleLogo from "../../assets/logos/purple-long-logo.svg";
import LongWhiteLogo from "../../assets/logos/white-long-logo.svg";
import WhiteLogo from "../../assets/logos/logo-white.svg";
import PurpleLogo from "../../assets/logos/logo-purple.svg";
import classes from './Logo.module.css';

export const Logo = ({
  theme = "light",
  text = true,
  size = 100,
  style = {}
}) => {
  const defineLogoToUse = () => {
    if(theme == 'light'){
        return text ? LongWhiteLogo : WhiteLogo
    } else {
        return text ? LongPurpleLogo : PurpleLogo
    }
  };

  return (
    <figure className={classes["logo-holder"]} style={{
        width: size
    }}>
      <img src={defineLogoToUse()} alt="Logo Artico" />
    </figure>
  );
};
