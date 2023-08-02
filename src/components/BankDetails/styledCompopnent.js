import styled from "styled-components";

export const BankDetailsItemMainCon = styled.div`
display: flex;
flex-direction: column;
align-item: center
justify-content: space-between;
align-self: center;
width: 50%;
border-radius: 5px;
border: 1px solid green;
`

export const BankDetailsItem = styled.div`
display: flex;
flex-direction: row;
align-item: center
justify-content: space-between;
align-self: center;
width: 100%;
border-bottom: 1px solid green;
`
export const KeyName = styled.p`
text-align: left;
font-weight: 600;
width: 45%;
padding-left: 3%;
border-right: 1px solid green;
` 
export const ValueNAme = styled.p`
text-align: left;
width: 50%;
padding-left: 3%;
`