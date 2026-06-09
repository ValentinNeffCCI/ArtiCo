import { useState, useRef, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { Plus, Save } from "lucide-react";
import { toast } from "react-toastify";
import InputBuilder from "./InputBuilder";
import { CustomButton } from "../../../buttons/Custom/CustomButton";
import useForm from "../../../../hooks/useForm";
import classes from "./form.module.css";
import dialogClasses from "../../../dialog/OptionDialog/Dialog.module.css";

const OPTION_TYPES = ["select", "radio", "checkbox"];

const defaultInput = () => ({
  id: uuidv4(),
  name: "",
  type: "text",
  required: true,
  options: [],
});

const LocalOptionDialog = ({ inputId, onClose, addOption }) => {
  const [value, setValue] = useState("");

  const inputRef = useRef(null);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value.trim()) return;
    addOption({ id: uuidv4(), value: value.trim() }, inputId);
    onClose();
  };

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <div className={dialogClasses["dialog"]} onClick={onClose}>
      <div
        className={dialogClasses["dialog-body"]}
        onClick={(e) => e.stopPropagation()}
      >
        <h3>Ajouter un choix</h3>
        <form onSubmit={handleSubmit}>
          <label htmlFor="value">Intitulé du choix</label>
          <input
            ref={inputRef}
            type="text"
            name="value"
            id="value"
            required
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <CustomButton>
            <span>Enregistrer</span>
          </CustomButton>
        </form>
      </div>
    </div>
  );
};

const FormBuilder = ({ entrepriseId = false, form = null, onSuccess }) => {
  const isEdit = Boolean(form?.id);

  const { content, changeListener, setContent, submitForm } = useForm(
    isEdit ? `/formulaire/${form.id}` : "/formulaire",
    isEdit ? "PUT" : "POST",
    {
      name: form?.name ?? "",
      entrepriseId: form?.entrepriseId ?? entrepriseId,
      inputs: form?.inputs ?? [],
    }
  );
  const fields = content.inputs;

  const [showDialog, setShowDialog] = useState(false);

  const openDialog = (id) => setShowDialog(id);
  const closeDialog = () => setShowDialog(false);

  const updateInputs = (updater) =>
    setContent((prev) => ({ ...prev, inputs: updater(prev.inputs) }));

  const addField = (e) => {
    e.preventDefault();
    updateInputs((inputs) => [...inputs, defaultInput()]);
  };

  const handleChange = (value, id) => {
    updateInputs((inputs) =>
      inputs.map((item) =>
        item.id === id
          ? {
              ...value,
              required: value.required === true || value.required === "true",
              options: item.options,
            }
          : item
      )
    );
  };

  const onRemove = (id) => {
    updateInputs((inputs) => inputs.filter((field) => field.id !== id));
  };

  const addOption = (option, id) => {
    updateInputs((inputs) =>
      inputs.map((item) =>
        item.id === id
          ? {
              ...item,
              options: item.options ? [...item.options, option] : [option],
            }
          : item
      )
    );
  };

  const removeOption = (optionId) => {
    updateInputs((inputs) =>
      inputs.map((item) =>
        item.options?.find((option) => option.id === optionId)
          ? {
              ...item,
              options: item.options.filter((option) => option.id !== optionId),
            }
          : item
      )
    );
  };

  const handleSubmit = async (e) => {
    const invalidField = fields.find(
      (field) =>
        OPTION_TYPES.includes(field.type) &&
        (!field.options || field.options.length === 0)
    );
    if (invalidField) {
      e.preventDefault();
      toast.error(
        `Le champ "${
          invalidField.name || "sans nom"
        }" doit proposer au moins une option`
      );
      return;
    }

    const response = await submitForm(e);

    if (response && !response.error) {
      toast.success(
        isEdit ? "Formulaire mis à jour" : "Formulaire créé avec succès"
      );
      if (onSuccess) {
        onSuccess(response);
      } else if (!isEdit) {
        setContent({ name: "", entrepriseId, inputs: [] });
      }
    } else {
      toast.error(response?.error || "Une erreur est survenue");
    }
  };

  return (
    <div className={classes["builder"]}>
      <form onSubmit={handleSubmit}>
        <label htmlFor="form-name">Nom du formulaire :</label>
        <input
          id="form-name"
          name="name"
          type="text"
          value={content.name}
          onChange={changeListener}
          placeholder="Nom du formulaire"
          required
        />

        {fields.map((input) => (
          <InputBuilder
            key={input.id}
            input={input}
            onChange={handleChange}
            onDelete={onRemove}
            onOpenDialog={openDialog}
            onRemoveOption={removeOption}
          />
        ))}

        <CustomButton clickAction={addField} className={classes["addField"]}>
          <span>Ajouter un champ</span>
          <Plus size={16} />
        </CustomButton>

        <CustomButton className={classes["save"]}>
          <span>Enregistrer</span>
          <Save size={15} />
        </CustomButton>
      </form>

      {showDialog && (
        <LocalOptionDialog
          inputId={showDialog}
          onClose={closeDialog}
          addOption={addOption}
        />
      )}
    </div>
  );
};

export default FormBuilder;
