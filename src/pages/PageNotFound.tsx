import { Link } from "react-router-dom";

function PageNotFound() {
    return (
        <main style={{ padding: "2rem", fontFamily: "sans-serif" }}>
            <h1>404 - Page non trouvee</h1>
            <p>La page demandee n'existe pas.</p>
            <Link to="/">Retour a l'accueil</Link>
        </main>
    );
}

export default PageNotFound;