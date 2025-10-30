import React from "react";
import Input from "../Forms/Input";
import Button from "../Forms/Button";
import styles from "./LoginForm.module.css";
import stylesBtn from "../Forms/Button.module.css";
import useForm from "../../Hooks/useForm";
import { USER_POST } from "../../api";
import { UserContext } from "../../UserContext";
import useFetch from "../../Hooks/useFetch";
import Message from "../Helpers/Message";
import User from "../../assets/user.svg?react";
import Password from "../../assets/password.svg?react";
import Email from "../../assets/email.svg?react";
import Halter from "../../assets/halter.svg?react";

const LoginCreate = () => {
  const username = useForm();
  const email = useForm("email");
  const password = useForm("password");

  const { userLogin } = React.useContext(UserContext);
  const { loading, message, request } = useFetch();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (username.validate() && email.validate() && password.validate()) {
      const { url, options } = USER_POST({
        username: username.value,
        email: email.value,
        password: password.value,
      });

      const { response } = await request(url, options);

      if (response && response.ok) {
        alert("Cadastro realizado com sucesso!");
        userLogin(username.value, password.value);
      }
    }
  };

  return (
    <section className="animeLeft">
      <h1 className="title">Liftly</h1>
      <h2 className="subtitle">
        Cadastre-se aqui
        <Halter className={styles.halter} />
      </h2>
      <form onSubmit={handleSubmit}>
        <Message message={message} />

        <div className={styles.inputContainer}>
          <User className={styles.iconSingup} />
          <Input
            type="text"
            name="username"
            placeholder="Usuario"
            {...username}
          />
        </div>

        <div className={styles.inputContainer}>
          <Email className={styles.iconSingup} />
          <Input type="email" name="email" placeholder="Email" {...email} />
        </div>
        <div className={styles.inputContainer}>
          <Password className={styles.iconSingup} />
          <Input
            type="password"
            name="password"
            placeholder="Senha"
            {...password}
          />
        </div>
        {loading ? (
          <div className={styles.buttonContainer}>
            <Button className={stylesBtn.buttonCadastrar} disabled>
              <div className="loading"></div>
            </Button>
          </div>
        ) : (
          <div className={styles.buttonContainer}>
            <Button className={stylesBtn.buttonCadastrar}>Cadastrar</Button>
          </div>
        )}
      </form>
    </section>
  );
};

export default LoginCreate;
