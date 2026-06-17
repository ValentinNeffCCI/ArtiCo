import { Link } from 'react-router-dom';
import classes from './Footer.module.css'

export const Footer = () => {
    return (
        <footer className={classes["footer"]}>
            <span>
                &copy; {new Date().getFullYear()} Artico
            </span>
            <span>
                Valentin NEFF
            </span>
            <nav className={classes["legal-links"]}>
                <Link to="/mentions-legales">
                    Mentions légales
                </Link>
                <span className={classes["separator"]}>·</span>
                <Link to="/politique-de-confidentialite">
                    Politique de confidentialité
                </Link>
                <span className={classes["separator"]}>·</span>
                <Link to="/politique-de-protection-des-donnees">
                    Politique de protection des données
                </Link>
            </nav>
        </footer>
    )
}
