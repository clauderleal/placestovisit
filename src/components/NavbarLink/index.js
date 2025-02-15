import { Link } from "react-router-dom";
import styles from "./NavbarLink.module.css"


function NavbarLink ({ url, children }) {
    return (
        <Link to={url} className={styles.link}>
            {children}
        </Link>
    )
}

export default NavbarLink;