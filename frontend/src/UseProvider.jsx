import React from "react";
import { TOKEN_POST, TOKEN_VALIDATE_GET, USER_GET } from "./api";
import { UserContext } from "./UserContext";
import { useNavigate } from "react-router-dom";

export const UserStorage = ({ children }) => {
  const [dataUser, setDataUser] = React.useState(null);
  const [message, setMessage] = React.useState(null);
  const [login, setLogin] = React.useState(null);
  const [loading, setLoding] = React.useState(false);
  const navigate = useNavigate();

  const userLogin = async (username, password) => {
    try {
      setMessage(null);
      setLoding(true);
      const { url, options } = TOKEN_POST({ username, password });
      const response = await fetch(url, options);
      const { token, message } = await response.json();
      if (!response.ok) {
        setMessage(message);
        return;
      }
      window.localStorage.setItem("token", token);
      await getUser(token);
      navigate("/dashboard");
    } catch {
      setLogin(false);
      setMessage(["Serviço temporariamente indisponivel."]);
    } finally {
      setLoding(false);
    }
  };

  const getUser = async (token) => {
    const { url, options } = USER_GET(token);
    const response = await fetch(url, options);
    const dataUser = await response.json();
    setDataUser(dataUser);
    setLogin(true);
  };

  const userLogout = React.useCallback(() => {
    setDataUser(null);
    setMessage(null);
    setLoding(false);
    setLogin(false);
    window.localStorage.removeItem("token");
    navigate("/login");
  }, [navigate]);

  React.useEffect(() => {
    const autoLogin = async () => {
      const token = window.localStorage.getItem("token");

      if (token) {
        try {
          setMessage(null);
          setLoding(true);

          const { url, options } = TOKEN_VALIDATE_GET(token);
          const response = await fetch(url, options);
          const { message } = await response.json();

          if (!response.ok) {
            setMessage(message);
            return;
          }
          await getUser(token);
        } catch (err) {
          console.error(err.message);
          userLogout();
        } finally {
          setLoding(false);
        }
      } else {
        setLogin(false);
      }
    };
    autoLogin();
  }, [userLogout]);

  return (
    <UserContext.Provider
      value={{ userLogin, userLogout, dataUser, message, loading, login }}
    >
      {children}
    </UserContext.Provider>
  );
};
