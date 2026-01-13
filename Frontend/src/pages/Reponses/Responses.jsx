import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import useAPI from '../../hooks/useAPI'
import Loader from '../../components/UX/loaders/Loader'
import { useNavigate } from 'react-router-dom'
import { ArrowLeft, TextAlignCenter } from 'lucide-react'
import { CustomButton } from '../../components/buttons/Custom/CustomButton'
import style from './Responses.module.css'
import ResponseCard from '../../components/cards/ResponseCard/ResponseCard'

const Responses = () => {
    const {id} = useParams();
    const {query} = useAPI();
    const navigation = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const [responses, setResponses] = useState([]);

    const returnBack = () => navigation(-1);  

    const getResponses = async () => {
        setIsLoading(true);
        const soumissions = await query(`/submission/formulaire/${id}`);
        if(soumissions){
            setResponses(soumissions.reverse());
        }
        setIsLoading(false);
    }

    useEffect(() => {
        getResponses();
    }, []);
    
  return (
    <main className={style["page"]}>
        {isLoading && <Loader />}
        <CustomButton clickAction={returnBack} className={style["goBack"]}>
            <ArrowLeft size={20}/>
            Revenir en arrière
        </CustomButton>
        <h1>Réponses au questionnaire</h1>
        <div>
           {
            responses.length != 0 ? 
            responses.map((response) => (
                <ResponseCard key={response.id} reponse={response} />
            ))
            :
            <div style={{
                textAlign: 'center',
                marginTop: "3rem"
            }}>
                Il semblerait que personne n'ai encore répondu à ce questionnaire 🤔
            </div>
           }
        </div>
    </main>
  )
}

export default Responses