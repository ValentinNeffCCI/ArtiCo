import { Link } from "react-router-dom";
import classes from "./NotFound.module.css";
import { ArrowLeft } from "lucide-react";
import panicWorker from '../../assets/mascotte/panic-worker.png'
import { LinkButton } from '../../components/buttons/Link/LinkButton'

const NotFound = () => {
    return (
        <main className={classes.NotFound}>
            <img src={panicWorker} alt="ouvrier paniqué" className="hidden-mobile" />
            <h1 className="text-center">404</h1>
            <p className="text-center">Page non trouvée</p>
            <div className="flex justify-center items-center gap-1">
                <LinkButton path="/" style={{}}>
                    <ArrowLeft />
                    Revenir a l'accueil
                </LinkButton>
            </div>
        </main>
    )
}
export default NotFound;