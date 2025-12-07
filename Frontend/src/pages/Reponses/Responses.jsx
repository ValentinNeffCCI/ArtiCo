import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import useAPI from '../../hooks/useAPI'
import Loader from '../../components/UX/loaders/Loader'
import { useNavigate } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { CustomButton } from '../../components/buttons/Custom/CustomButton'
import style from './Responses.module.css'
import ResponseCard from '../../components/cards/ResponseCard/ResponseCard'

const Responses = () => {
    const {id} = useParams();
    const {query} = useAPI();
    const navigation = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const [responses, setResponses] = useState([]);
    const [form, setForm] = useState(null);

    const returnBack = () => navigation(-1);  
    
    const getForm = async () => {
        const form = await query(`/formulaires/${id}`);
        if(form){
            setForm(form);
        }
    }

    const getResponses = async () => {
        setIsLoading(true);
        const soumissions = await query(`/soumissions?formulaire_id=${id}`);
        if(soumissions){
            setResponses(soumissions.reverse());
        }
        setIsLoading(false);
    }

    useEffect(() => {
        getResponses();
        getForm();
    }, []);
    
    if(!form) return <Loader />;
  return (
    <main className={style["page"]}>
        {isLoading && <Loader />}
        <CustomButton clickAction={returnBack} className={style["goBack"]}>
            <ArrowLeft size={20}/>
            Revenir en arrière
        </CustomButton>
        <h1>Réponses au questionnaire "{form.name}"</h1>
        <div>
           {
            responses.map((response) => (
                <ResponseCard key={response.id} reponse={response} form={form} />
            ))
           }
        </div>
    </main>
  )
}

export default Responses