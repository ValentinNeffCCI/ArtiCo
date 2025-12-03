import React, { useState } from "react";
import { useAuth } from "../../contexts/UserContext";
import { Navigate } from "react-router-dom";
import Soudure from "../../assets/photos/özgür_özkan/soudure.jpg";
import { LoginForm } from "./sections/LoginForm";
import { RegisterForm } from "./sections/RegisterForm";
import classes from "./Login.module.css";
import { LinkButton } from "../../components/buttons/Link/LinkButton";
import { ArrowLeft } from "lucide-react";
import { CustomButton } from "../../components/buttons/Custom/CustomButton";
import { ToastContainer } from "react-toastify";

const Login = () => {
  const { user } = useAuth();

  if (user) return <Navigate to={user.role === "ADMIN" ? "/admin" : "/"} />;

  const [isConnecting, setIsConnecting] = useState(true);

  const switchScreen = () => setIsConnecting((prev) => !prev);

  return (
    <main
      style={{
        height: "100vh",
        display: "flex",
        overflow: "hidden"
      }}
    >
      <div
        className={`hidden-mobile`}
        style={{
          width: "50%",
          height: "100vh",
          overflow: "hidden",
          borderRight: "1px solid #d9d9d9",
        }}
      >
        <figure
          style={{
            width: "100%",
            height: "95%",
          }}
        >
          <img
            src={Soudure}
            alt="Photo En Niveaux De Gris De L'homme Tenant Des Outils"
            style={{
              height: "95%",
            }}
          />
          <figcaption
            style={{
              padding: ".5rem",
              fontWeight: 600,
            }}
          >
            Crédits: özgür özkan
          </figcaption>
        </figure>
      </div>
      <div className={classes["form"]}>
        <LinkButton
          style={{
            fontFamily: "itim",
            textAlign: "left",
            border: "none",
            display: "flex",
            alignItems: "center",
            gap: ".5rem",
            fontWeight: 600,
            position: window.innerWidth < 768 ? "absolute" : "static",
            top: "1rem",
            color: window.innerWidth < 768 ? "white" : " ",
            width: "fit-content",
            alignSelf: "start"
          }}
        >
          <ArrowLeft />
          <span>Revenir à l'accueil</span>
        </LinkButton>

        {isConnecting ? (
          <LoginForm>
            <CustomButton
              style={{
                textAlign: "left",
              }}
              clickAction={switchScreen}
            >
              {isConnecting ? "Je n'ai pas de compte" : "J'ai déjà un compte "}
            </CustomButton>
          </LoginForm>
        ) : (
          <RegisterForm>
            <CustomButton
              style={{
                textAlign: "left",
              }}
              clickAction={switchScreen}
            >
              {isConnecting ? "Je n'ai pas de compte" : "J'ai déjà un compte "}
            </CustomButton>
          </RegisterForm>
        )}
      </div>
    </main>
  );
};

export default Login;
