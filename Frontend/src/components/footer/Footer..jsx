
import classes from './Footer.module.css'
export const Footer = () => (
    <footer className={classes["footer"]}>
        <span>
            &copy; {new Date().getFullYear()} Artico
        </span>
        <span>
            Valentin NEFF
        </span>
    </footer>
)