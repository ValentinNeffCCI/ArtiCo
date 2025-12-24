import { Fragment, useEffect, useState } from "react";
import InputBuilder from "./InputBuilder";
import classes from "./form.module.css";
import { CustomButton } from "../../../buttons/Custom/CustomButton";
import { Plus, Save } from "lucide-react";
import useAPI from "../../../../hooks/useAPI";
import OptionDialog from "../../../dialog/OptionDialog/OptionDialog";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const defaultInput = (formId) => ({
  type: "text",
  formulaireId: formId,
});

const FormBuilder = ({
  form = [],
  style = {},
  formId,
  formDatas = {
    name: "",
    entrepriseId: false,
  },
}) => {
  const [datas, setDatas] = useState(form.length > 0 ? form : []);
  const [showDialog, setShowDialog] = useState(false);

  const navigation = useNavigate();

  const openDialog = (id) => {
    setShowDialog(id);
  };

  const closeDialog = () => {
    setShowDialog(false);
  };

  const { query: callAPI } = useAPI();

  const createInput = async () => {
    return callAPI("/input", "POST", defaultInput(formId));
  };

  const handleChange = (value, id) => {
    setDatas((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
              ...value,
              options: item.options,
            }
          : item
      )
    );
  };

  const addField = async (e) => {
    e.preventDefault();
    const response = await createInput();
    if (response) {
      setDatas((prev) => [...prev, response]);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payLoad = {
      name: formDatas.name,
      entrepriseId: formDatas.entrepriseId,
      inputs: datas.map(i=>({
        ...i,
        required: i.required == "true" ? true : false 
      })),
    };
    const response = await callAPI("/formulaire/" + formId, "PUT", payLoad);
    if (!response.error) {
      navigation(-1);
    } else {
      toast.error(await response.json().message);
    }
  };

  const onRemove = async (id) => {
    const response = await callAPI("/input/" + id, "DELETE");
    if (response) {
      setDatas((prev) => prev.filter((row) => row.id !== id));
    }
  };

  const addOption = (option, id) => {
    setDatas((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
              ...item,
              options: item.options ? [...item.options, option] : [option],
            }
          : item
      )
    );
  };

  const removeOption = async (id) => {
    const response = await callAPI("/option/" + id, "DELETE");
    if (response) {
      setDatas((prev) =>
        prev.map((item) =>
          item.options && item.options.find((option) => option.id == id)
            ? {
                ...item,
                options: item.options.filter((option) => option.id !== id),
              }
            : item
        )
      );
    }
  };

  return (
    <div style={style} className={classes["builder"]}>
      <form onSubmit={handleSubmit}>
        {datas.map((input, index) => (
          <InputBuilder
            key={input.id}
            input={input}
            onChange={handleChange}
            onDelete={onRemove}
            onOpenDialog={openDialog}
            onRemoveOption={removeOption}
          />
        ))}
        <CustomButton
          clickAction={addField}
          className={classes["addField"]}
          style={{
            "--color": "var(--primary)",
          }}
        >
          <span>Ajouter un champ</span>
          <Plus size={12} />
        </CustomButton>
        <CustomButton
          style={{
            display: "flex",
            alignItems: "center",
            fontSize: 15,
            gap: 5,
            "--bg-color": "var(--secondary)",
            marginTop: 20,
          }}
        >
          <span>Enregistrer</span>
          <Save size={15} />
        </CustomButton>
      </form>
      {showDialog && (
        <OptionDialog
          inputId={showDialog}
          onClose={closeDialog}
          addOption={addOption}
        />
      )}
    </div>
  );
};

export default FormBuilder;
