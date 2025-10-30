import React from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../UserContext";
import Input from "../Forms/Input";
import Button from "../Forms/Button";
import useForm from "../../Hooks/useForm";
import styles from "./LoginForm.module.css";
import Message from "../Helpers/Message";
import stylesBtn from "../Forms/Button.module.css";
import User from "../../assets/user.svg?react";
import Password from "../../assets/password.svg?react";

const LoginForm = () => {
  const { userLogin, loading, message } = React.useContext(UserContext);

  const username = useForm();
  const password = useForm();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (username.validate() && password.validate()) {
      userLogin(username.value.toLowerCase(), password.value);
    }
  };

  return (
    <>
      <section className={`${styles.loginContainer} animeLeft`}>
        <h1 className="title">Liftly</h1>
        <h2 className="subtitle">Bem vindo de volta</h2>

        <form onSubmit={handleSubmit}>
          <Message message={message} />

          <div className={styles.inputContainer}>
            <User className={styles.icon} />
            <Input
              data-cy="login-user"
              type="text"
              name="username"
              placeholder="Usuário"
              {...username}
            />
          </div>

          <div className={styles.inputContainer}>
            <Password className={styles.icon} />
            <Input
              data-cy="login-password"
              type="password"
              name="password"
              placeholder="Senha"
              {...password}
            />
          </div>
          {loading ? (
            <div className={styles.buttonContainer}>
              <Button className={stylesBtn.button} disabled>
                <div className="loading"></div>
              </Button>
            </div>
          ) : (
            <div className={styles.buttonContainer}>
              <Button className={stylesBtn.button} data-cy="login-btn-entrar">
                Entrar
              </Button>

              <Link
                className={stylesBtn.buttonCadastrar}
                data-cy="login-btn-cadastro"
                to={"/login/criar"}
              >
                {" "}
                Cadastro
              </Link>
            </div>
          )}
        </form>
      </section>
    </>
  );
};

export default LoginForm;
