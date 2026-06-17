import { useState } from 'react';
import classes from './Footer.module.css'
import MentionsLegales from '../modales/Mentions/MentionsLegales';
import PolitiqueConfidentialite from '../modales/Mentions/PolitiqueConfidentialite';

export const Footer = () => {
    const [openModal, setOpenModal] = useState(null);

    const close = () => setOpenModal(null);

    return (
        <footer className={classes["footer"]}>
            <span>
                &copy; {new Date().getFullYear()} Artico
            </span>
            <span>
                Valentin NEFF
            </span>
            <nav className={classes["legal-links"]}>
                <button type="button" onClick={() => setOpenModal("legal")}>
                    Mentions légales
                </button>
                <span className={classes["separator"]}>·</span>
                <button type="button" onClick={() => setOpenModal("privacy")}>
                    Politique de confidentialité
                </button>
            </nav>

            {openModal === "legal" && (
                <MentionsLegales
                    onClose={close}
                    onOpenPrivacy={() => setOpenModal("privacy")}
                />
            )}
            {openModal === "privacy" && (
                <PolitiqueConfidentialite onClose={close} />
            )}
        </footer>
    )
}
