import styled from "styled-components";
import { Link } from "react-router-dom";

export default function Sucess(props){

    const { dataSession, reservation, selects, setSelects } = props;

    return(
        <>
        <TextContainer>
                <strong><p>Filme e sessão</p></strong>
                <p>{dataSession.Name}</p>
                <p>{dataSession.Day} - {dataSession.Hour}</p>
            </TextContainer>

            <TextContainer>
                <strong><p>Ingressos</p></strong>
                {selects.map((seat) => <p>Assento {seat}</p>)}
            </TextContainer>

            <TextContainer>
                <strong><p>Comprador</p></strong>
                <p>Nome: {reservation.name}</p>
                <p>CPF: {reservation.cpf}</p>
            </TextContainer>


            <Link to={'/'}>
                <button onClick={() =>{setSelects([])}}>Voltar para Home</button>
            </Link>
        </>
    )
}

const TextContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-top: 30px;
    strong {
        font-weight: bold;
        margin-bottom: 10px;
    }
    
`

