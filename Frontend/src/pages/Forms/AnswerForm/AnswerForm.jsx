import { ArrowLeft } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { CustomButton } from "../../../components/buttons/Custom/CustomButton";
import Loader from "../../../components/UX/loaders/Loader";
import useAPI from "../../../hooks/useAPI";
import classes from './AnswerForm.module.css'
import CustomForm from "../../../components/forms/CustomForm/Displayer/CustomForm";
import useForm from '../../../hooks/useForm'

const AnswerForm = () => {
  const { id } = useParams();
  const navigation = useNavigate();
  const returnBack = () => navigation(-1);
  const {query: callAPI} = useAPI();
  const [form, setForm] = useState(false);
  const {content, changeListener:onChange} = useForm("/soumissions", "POST");

  const getForm = async () => {
    const response = await callAPI('/formulaires/'+id);
    if(response){
        setForm(response);
    }
  }

  const handleSubmit = (e)=>{
    console.log('test')
    e.preventDefault();
    console.log(content);
  }

  useEffect(()=>{
    getForm();
  }, [id])

  if(!form) return <Loader/>

  return (
    <main className={classes["page"]}>
      <CustomButton clickAction={returnBack} className={classes['goBack']}>
        <ArrowLeft />
        Revenir en arrière
      </CustomButton>
      <h1>
        {form.name}
      </h1>
      <CustomForm 
      form={form.inputs} 
      onChange={onChange} 
      onSubmit={handleSubmit} 
      submitButton={"Envoyer"}
      style={{
        width: "70%",
        margin: "1rem auto"
      }}
      />
    </main>
  );
};

export default AnswerForm;
