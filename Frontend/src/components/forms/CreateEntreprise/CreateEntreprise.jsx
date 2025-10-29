import React, { useEffect, useState } from "react";
import useForm from "../../../hooks/useForm";
import { useAuth } from "../../../contexts/UserContext";
import useAPI from "../../../hooks/useAPI";
import { Navigate } from "react-router-dom";
import CustomForm from "../CustomForm/Displayer/CustomForm";
import style from "./style.module.css";
import { Upload } from "lucide-react";
import placeholder from "../../../assets/photos/placeholder.jpeg";

const CreateEntreprise = (defaultValues = false) => {
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
    window.scrollTo({
      top: 0,
    });
    retrieveCategories();
  }, []);

  const handleImageChange = (e)=>{
    setImage(URL.createObjectURL(e.target.files[0]));
    changeListener(e)
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (import.meta.env.VITE_ENV_MODE == "demo") {
      changeListener({
        target: {
          name: "image",
          value: null,
        },
      });
    }
    const response = await prepare(e);
    if(response){
      return <Navigate to={"/profil"}/>
    }
  };

  const inputs = [
    {
      name: "name",
      type: "text",
      id: 1,
      required: true,
      label: "Nom de l'entreprise",
      value: defaultValues.name ?? ""
    },
    {
      name: "adress1",
      type: "text",
      id: 2,
      required: true,
      label: "Adresse de l'entreprise",
      value: defaultValues.adress1 ?? ""
    },
    {
      name: "adress2",
      type: "text",
      id: 3,
      required: false,
      label: "Complément d'adresse",
      value: defaultValues.adress2 ?? ""
    },
    {
      name: "city",
      type: "text",
      id: 8,
      required: true,
      label: "Ville",
      value: defaultValues.city ?? ""
    },
    {
      name: "cp",
      type: "text",
      id: 9,
      required: true,
      label: "Code postal",
      value: defaultValues.cp ?? ""
    },
    {
      name: "phone",
      type: "phone",
      id: 4,
      required: true,
      label: "Téléphone de l'entreprise",
      value: defaultValues.phone ?? ""
    },
    {
      name: "email",
      type: "email",
      id: 5,
      required: true,
      label: "Email de l'entreprise",
      value: user.email,
      value: defaultValues.email ?? ""
    },
    {
      name: "description",
      type: "textarea",
      id: 5,
      required: false,
      label: "Bio de l'entreprise",
      value: defaultValues.description ?? ""
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
          defaultValue={defaultValues.categorie_id}
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
          onChange={handleImageChange}
          style={{
            opacity: 0,
            height: 0.1,
            width: 0.1,
          }}
        />
      </div>
      <figure style={{ width: "50%", margin: "0 auto", border: "1px solid var(--dark)" }}>
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
