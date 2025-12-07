import React from "react";
import { Minus, Plus, X } from "lucide-react";
import { CustomButton } from "../../../../buttons/Custom/CustomButton.jsx";
import classes from "./Option.module.css";

const OptionBuilder = ({ option, onDelete }) => {
  const onRemove = (e) => {
    e.preventDefault();
    onDelete(option.id);
  };
  return (
    <div className={classes["option"]}>
      <span>{option.value}</span>
      <CustomButton
        style={{
          "--color": "red",
          border: "none",
          borderRadius: 0,
        }}
        clickAction={onRemove}
      >
        <Minus size={15} />
      </CustomButton>
    </div>
  );
};

export default OptionBuilder;
