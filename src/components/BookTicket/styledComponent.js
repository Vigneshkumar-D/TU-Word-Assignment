import styled from "styled-components";

export const BookTicketContainer = styled.div`
display: flex;
flex-direction: column;
justify-centent: center;
align-item: center;
padding-left: 5%;
padding-right: 5%;
align-self: center;
padding: 3%;

`
export const MainPersonCon = styled.div`
display: flex;
flex-direction: column;
justify-centent: center;
align-item: center;
margin: 2%;
padding: 2%;
border-radius: 10px;
box-shadow: 0px 3px 7px 3px #e2e8f0;
align-self:center;

`
export const BookTicketSubContainer = styled.div`
display: flex;
flex-direction: column;
justify-centent: center;
align-item: center;
padding-left: 5%;
padding-right: 5%;
width: 80%;
flex-grow: 1;
align-self: center;
margin-top: 5%;
padding: 3%;
border-radius: 5px;
border: 1px solid green;
`
export const BookTicketHeading = styled.h1`
    font-size: 38px;
    font-family: Georgia, serif;
    font-weight: 600;
    text-align: center;
    color: green;
    margin-top: 5%;
`
export const PersonCount = styled.h1`
    font-size: 25px;
    font-family: Georgia, serif;
    font-weight: 600;
    text-align: center;
    color: green;
    margin-top: 3%;
`
export const FormSubContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-centent: space-between;
    align-item: center;
    flex-wrap: wrap;
    width: 100%;
    margin-right: 0px;
    padding-right: 0px;
    height: auto;
`
export const PersonsContainer = styled.div`
display: flex;
flex-direction: column;
justify-centent: space-around;
align-item: center;
margin: 2%;
padding: 2%;

border-radius: 10px;
box-shadow: 0px 3px 7px 3px #e2e8f0;
`
export const BookTicketForm = styled.form`
    display: flex;
    flex-direction: column;
    justify-centent: center;
    align-item: center;
`
export const InputName = styled.input`
padding: 10px;
font-size: ;
font-family: ;
padding-left: 15px;
width: 300px;
height: 20px;
border-radius: 5px;
out-line: none;
// align-self: center;
border: 2px solid gray;
` 
export const PersonsCount = styled.input`
padding: 10px;
font-size: ;
font-family: ;
padding-left: 15px;
width: 300px;
height: 20px;
border-radius: 5px;
out-line: none;
align-self: center;
border: 2px solid gray;
` 
export const InputAge = styled.input`
padding: 10px;
font-size: ;
font-family: ;
padding-left: 15px;
width: 300px;
height: 20px;
border-radius: 5px;
out-line: none;
border: 2px solid gray;
`
export const GovtId = styled.input`
padding: 10px;
font-size: ;
font-family: ;
padding-left: 15px;
width: 300px;
height: 20px;
border-radius: 5px;
out-line: none;
border: 2px solid gray;
`
export const MobNum = styled.input`
padding: 10px;
font-size: ;
font-family: ;
padding-left: 15px;
width: 300px;
height: 20px;
border-radius: 5px;
out-line: none;
border: 2px solid gray;
`
export const EmailAdd = styled.input`
padding: 10px;
font-size: ;
font-family: ;
padding-left: 15px;
width: 300px;
height: 20px;
border-radius: 5px;
out-line: none;
border: 2px solid gray;
`

export const CustomLabel = styled.label`
    font-size: 15px;
    font-family: 'Roboto';
    font-weight: 500;
    color: ;
    padding-left: 15px;
    margin-top: 10px;
    padding-bottom: 5px;
    padding-left: 0px;
`
export const SubmitButton = styled.button`
font-family: 'Lato', sans-serif;
font-size: 16px;
font-weight: 600;
color: green;
background-color: #ffffff;
border: 1px solid green;
border-radius: 5px;
padding: 10px;
width: 150px;
margin-top: 3%;
cursor: pointer;
align-self: center;
&:hover {
    background-color: green;
    color: #ffffff;
  }
`