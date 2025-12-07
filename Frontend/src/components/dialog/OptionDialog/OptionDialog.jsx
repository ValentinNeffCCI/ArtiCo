import React, { useEffect } from "react";
import classes from "./Dialog.module.css";
import { CustomButton } from "../../buttons/Custom/CustomButton";
import useForm from "../../../hooks/useForm";
import { toast, ToastContainer } from "react-toastify";

const OptionDialog = ({addOption, inputId, onClose}) => {

    //Ajouter callAPI création d'option + addOption parent

    const {content, changeListener:handleChange, prepare:save} = useForm('/options', 'POST', {
      input_id: inputId
    });

    const handleSubmit = async (e) => {
      e.preventDefault();
      const response = await save(e);
      if(response){
        addOption(response, inputId);
        onClose();
      } else {
        toast.error('Une erreur est survenue');
      }
    }

  return (
    <div className={classes["dialog"]} onClick={onClose}>
      <div className={classes["dialog-body"]} onClick={(e) => e.stopPropagation()}>
        <h3>Ajouter un choix</h3>
        <form onSubmit={handleSubmit}>
          <label htmlFor="value">Intitulé du choix</label>
          <input type="text" name="value" required id="value" onChange={handleChange}/>
        
          <CustomButton>
            <span>Enregistrer</span>
          </CustomButton>
        </form>
      </div>
    </div>
  );
};

export default OptionDialog;
