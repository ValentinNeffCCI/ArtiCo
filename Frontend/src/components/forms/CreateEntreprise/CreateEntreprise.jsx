import React, { useEffect, useState } from "react";
import useForm from "../../../hooks/useForm";
import { useAuth } from "../../../contexts/UserContext";
import useAPI from "../../../hooks/useAPI";
import { Navigate } from "react-router-dom";
import CustomForm from "../CustomForm/Displayer/CustomForm";
import style from "./style.module.css";
import { Upload } from "lucide-react";
import placeholder from "../../../assets/photos/placeholder.jpeg";

const CreateEntreprise = () => {
  const { user } = useAuth();
  const { content, changeListener, prepare } = useForm("/entreprises", "POST", {
    user_id: user.id,
    email: user.email,
  });
  const API = useAPI();
  const [categories, setCategories] = useState([]);

  const retrieveCategories = async () => {
    const response = await API.query("/categories");
    if (response) {
      setCategories(response);
    } else {
      return <Navigate to={"/profil"} />;
    }
  };

  const [image, setImage] = useState(false);

  useEffect(() => {
    retrieveCategories();
  }, []);

  useEffect(() => {
    if (content.image) {
      setImage(URL.createObjectURL(content.image));
    } else {
      setImage(false);
    }
  }, [content]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(import.meta.env.VITE_ENV_MODE == "demo"){
      changeListener({
        target:{
          name: "image",
          value: null
        }
      })
    }
    const response = await prepare(e);
    console.log(response);
  };

  const inputs = [
    {
      name: "name",
      type: "text",
      id: 1,
      required: true,
      label: "Nom de l'entreprise",
    },
    {
      name: "adress1",
      type: "text",
      id: 2,
      required: true,
      label: "Adresse de l'entreprise",
    },
    {
      name: "adress2",
      type: "text",
      id: 3,
      required: false,
      label: "Complément d'adresse",
    },
    {
      name: "city",
      type: "text",
      id: 8,
      required: true,
      label: "Ville",
    },
    {
      name: "cp",
      type: "text",
      id: 9,
      required: true,
      label: "Code postal",
    },
    {
      name: "phone",
      type: "phone",
      id: 4,
      required: true,
      label: "Téléphone de l'entreprise",
    },
    {
      name: "email",
      type: "email",
      id: 5,
      required: true,
      label: "Email de l'entreprise",
      value: user.email,
    },
    {
      name: "description",
      type: "textarea",
      id: 5,
      required: false,
      label: "Bio de l'entreprise",
    },
  ];

  return (
    <CustomForm
      form={inputs}
      onChange={changeListener}
      onSubmit={handleSubmit}
      style={{
        width: "50%",
        margin: "0 auto",
        padding: "0 2rem",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div className={[style["input"], style["select"]].join(" ")}>
        <label htmlFor="categorie_id">Catégorie de votre entreprise :</label>
        <select
          type="file"
          name="categorie_id"
          id="categorie_id"
          onChange={changeListener}
        >
          <option value="">Toutes les options</option>
          {categories.map((cat) => (
            <option key={cat.id} value={cat.id}>
              {cat.name}
            </option>
          ))}
        </select>
      </div>
      <div className={[style["input"], style["file"]].join(" ")}>
        <h4>Photo de votre entreprise :</h4>
        <label htmlFor="image">
          <Upload />
        </label>
        <input
          type="file"
          name="image"
          id="image"
          onChange={changeListener}
          style={{
            opacity: 0,
            height: 0.1,
            width: 0.1,
          }}
        />
      </div>
      <figure style={{ width: "50%", aspectRatio: "4/3", margin: "0 auto" }}>
        <label htmlFor="image" className="pointer">
          <img
            src={image ? image : placeholder}
            alt="photo de l'entreprise"
            style={{ width: "100%", objectFit: "cover" }}
          />
        </label>
      </figure>
    </CustomForm>
  );
};

export default CreateEntreprise;
