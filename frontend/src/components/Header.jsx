import React from "react";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";
import Logo from "../assets/bolt.svg?react";
import { UserContext } from "../UserContext";
import Logout from "../assets/logout.svg?react";

const Header = () => {
  const { dataUser, userLogout } = React.useContext(UserContext);

  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} container`}>
        <Link className={styles.logo} to={"/"} aria-label="Liftly - Home">
          <Logo />
        </Link>
        {dataUser ? (
          <Link
            className={styles.login}
            data-cy="header-user"
            to={"/dashboard"}
          >
            {`Olá ${dataUser.username}`}
            <Logout className={styles.iconLogout} onClick={userLogout} />
          </Link>
        ) : (
          <Link className={styles.login} to={"/login"}>
            {dataUser && dataUser.email}
            Login / Criar
          </Link>
        )}
      </nav>
    </header>
  );
};

export default Header;
