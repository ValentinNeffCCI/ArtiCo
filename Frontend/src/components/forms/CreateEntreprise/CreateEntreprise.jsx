import React, { useEffect, useState } from "react";
import useForm from "../../../hooks/useForm";
import { useAuth } from "../../../contexts/UserContext";
import useAPI from "../../../hooks/useAPI";
import { Navigate } from "react-router-dom";
import CustomInput from "../CustomForm/Displayer/CustomInput";
import CustomForm from "../CustomForm/Displayer/CustomForm";

const CreateEntreprise = () => {
  const { user } = useAuth();
  const { content, changeListener, prepare } = useForm("/entreprise", "POST", {
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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(content);
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
      required: true,
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
      type: "text",
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
    },
    {
      name: "description",
      type: "textarea",
      id: 5,
      required: true,
      label: "Bio de l'entreprise",
    },
  ];

  return (
    <CustomForm
      form={inputs}
      onChange={changeListener}
      onSubmit={handleSubmit}
      style={{ width: "80%" }}
    >
      <div>
        <label htmlFor="image">Catégorie de votre entreprise</label>
        <select type="file" name="image" id="image" onChange={changeListener}>
          <option value="">Toutes les options</option>
          {categories.map((cat) => (
            <option key={cat.id} value={cat.id}>
              {cat.name}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="image">Photo de votre entreprise</label>
        <input type="file" name="image" id="image" onChange={changeListener} />
      </div>
      {image && (
        <figure style={{ width: "50%", aspectRatio: "4/3" }}>
          <img src={image ?? ""} alt="" style={{ width: "100%" }} />
        </figure>
      )}
    </CustomForm>
  );
};

export default CreateEntreprise;
