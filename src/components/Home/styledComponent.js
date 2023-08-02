import styled from 'styled-components'

export const HomeContainer = styled.div`
display: flex;
flex-direction: column;
min-height: 100vh;
` 
export const HomeSubContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-item: center;
    flex-grow: 1;
    padding-left: 6%;
    padding-right: 6%;
`
export const DescriptionContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 5%;
    padding: 4%; 
    border: 1px solid green;
    border-radius: 8px;
`
export const OverViewHeadingCon = styled.div`
    
` 
export const OverViewHeading  = styled.h1`
    font-family: Georgia, serif;
    font-weight: 600;
    text-align: center;
    color: #696969;
    margin-top: 1%;
    color: green;
    padding: 5px;
    align-self: center;
    width: 180px;
    border-bottom: 1px solid green;
    font-size: 38px;
`
export  const MainHeading = styled.h1`
    font-size: 50px;
    font-family: Georgia, serif;
    font-weight: 600;
    text-align: center;
    // color: #696969;
    margin-top: 5%;
    text-shadow: 2px 4px 4px #e2e8f0;
` 
export const MainDescription = styled.p`
    font-size: 20px;
    text-align: center;
    font-family: Trebuchet MS, sans-serif;
    font-weight: 500;
    color: gray;
    align-self: center;
`
export const DesSubContainerOne = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-item: center;
    box-shadow:  0px 3px 7px 3px #e2e8f0; 
    height: 150px;
    align-self: start;
    width: 40%;
    border-radius: 10px;
    margin-top: 2%;
    padding-left: 2%;
    border-left: 5px solid green;
`
export const DesSubContainerTwo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-item: center;
    box-shadow:  0px 3px 7px 3px #e2e8f0; 
    height: 150px;
    align-self: center;
    width: 40%;
    border-radius: 10px;
    margin-top: 2%;
    padding-left: 2%;
    border-left: 5px solid green;
`
export const DesSubContainerThree = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-item: center;
    box-shadow:  0px 3px 7px 3px #e2e8f0; 
    height: 160px;
    align-self: end;
    width: 40%;
    border-radius: 10px;
    margin-top: 2%;
    padding-left: 2%;
    padding-right: 2%;
    border-left: 5px solid green;
`
export const Description = styled.p`
    font-size: 18px;
    align-self: start;
    font-family: 'Trebuchet MS', sans-serif;
    font-weight: 500;
    color: #A9A9A9; 
    color: #000000;
    margin: 0px;
`
export const BookNowButton = styled.button`
font-family: 'Lato', sans-serif;
font-size: 16px;
font-weight: 600;
color: green;
background-color: #ffffff;
border: 1px solid green;
border-radius: 5px;
padding: 10px;
width: 150px;
cursor: pointer;
align-self: center;
&:hover {
    background-color: green;
    color: #ffffff;
  }
`
export const JoinJuneryHeading = styled.h1`
    font-size: 38px;
    padding-left: 5%;
    padding-right: 5%;
    font-family: Georgia, serif;
    font-weight: 600;
    text-align: center;
    // color: #3b82f6;
    color: green;
    margin-top: 7%;
    margin-bottom: 5%;
    align-self:center;
    width: 75%;
    padding: 10px;
    border-bottom: 1px solid green;
`
export const ItineraryHeading = styled.h1`
    font-size: 38px;
    padding-left: 5%;
    padding-right: 5%;
    font-family: Georgia, serif;
    font-weight: 600;
    text-align: center;
    color: green;
    width: 12%;
    padding: 10px;
    align-self: center;
    border-bottom: 1px solid green;
`
export const ItineraryListTag = styled.ul`
display: flex;
flex-direction: column;
align-item: center;
flex-grow: 1;
padding-left: 0px;
// border: 1px solid green;
`
export const ItineraryItemsSubContainer = styled.div`
display:flex;
flex-direction:column;
justify-content: space-around;
`
export const ItineraryItemsSubContainerOne = styled.div`
display: flex;
flex-direction: row;
// width: 100%;
justify-content: space-between;
align-item: center;
margin-bottom: 4%;
padding: 15px;
border-radius: 10px;
// height: 450px;
// box-shadow:  0px 3px 7px 3px #e2e8f0;
`
export const DayAndDateHeading = styled.h1`
margin-bottom: 3%;
font-family: Trebuchet MS, sans-serif;
font-size: ;
color: green;
font-weight: 600;
text-align: center;
padding: 10px;
width: 25%;
align-self: center;
border-bottom: 1px solid green;
`
export const ItineraryItemsTopContainer = styled.div`
display:flex;
flex:direction:column;
justify-content: center;
align-item:center;
`
export const ItineraryItemsDescription =styled.p`
    font-size: 18px;
    text-align: left;
    align-self: center;
    width: 50%;
    line-height: 25px;
    // text-align: center;
    margin-bottom: 0px;
`
export const EndofService = styled.p`
    font-size: 25px;
    align-self: center;
    font-weight: 600;
    margin-top: 0px;
    text-align: center;
`
export const  CostDetailsContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: space-around;
align-item: center;
// box-shadow: 0px 3px 7px 3px #e2e8f0;
width: 90%;
// height: 300px;
align-self: center;
padding-left: 4%;
padding-right: 4%;
border-radius: 10px;
padding-top: 2%;
padding-bottom: 2%;
margin-right: 5%;
`
export const ConstHeading = styled.h1`
margin-bottom: 3%;
font-family: Trebuchet MS, sans-serif;
font-size: 38px;
color: green;
font-weight: 600;
text-align: center;
padding: 10px;
width: 8%;
align-self: center;
border-bottom: 1px solid green;
`
export const CostDetails = styled.li`
font-size: 20px;
margin-bottom: 0px;
margin-top: 0px;
list-style-type: disc;
`
export const OfferContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center
align-item: center;
`
export const OfferHeading = styled.h1`
margin-top: 5%;
margin-bottom: 3%;
font-family: Trebuchet MS, sans-serif;
font-size: 38px;
color: green;
font-weight: 600;
text-align: center;
padding: 10px;
width: 25%;
align-self: center;
border-bottom: 1px solid green;
`
export const OfferOne = styled.li`
font-size: 20px;
align-self: center;
font-weight: 600;
margin-top: 0px;
// color: #FF8000;
list-style-type: disc;
`
export const TermsandConditionsHeading = styled.h1`
margin-bottom: 3%;
margin-top: 5%;
font-family: 'Trebuchet MS', sans-serif;
// font-family: 'Dancing Script';
font-size: 38px;
color: green;
font-weight: 600;
text-align: center;
padding: 10px;
width: 30%;
align-self: center;
border-bottom: 1px solid green;
`
export const TermsandConditionsContainer = styled.ul`
display: flex;
flex-direction: column;
justify-content: center
align-item: center;
width: 80%;
padding-left: 10%;
`
export const TandCListItem = styled.li`
font-size: 18px;
font-weight: 400;
line-height: 30px;
margin-top: 0px;
list-style-type: disc;
`
export const CostDetailsSubContainer = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
align-item: center;
width: 100%;
padding: 3%;
border-radius: 10px;
box-shadow: 0px 3px 7px 3px #e2e8f0;
`
export const BankDetailsContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
align-item: center;
`
export const BankDetailsHeading = styled.h1`
    margin-bottom: 3%;
    margin-top: 5%;
    font-family: 'Trebuchet MS', sans-serif;
    // font-family: 'Dancing Script';
    font-size: 38px;
    color: green;
    font-weight: 600;
    text-align: center;
    padding: 10px;
    width: 40%;
    align-self: center;
    border-bottom: 1px solid green;
`

export const BankDetailsDescription =styled.p`
    font-size: 18px;
    text-align: left;
    align-self: center;
    width: 50%;
    line-height: 25px;
    text-align: center;
    margin-bottom: 2%;
`
export const BankDetailsSubContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-item: center;
`
export const ContactUsContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
align-item: center;
background-color: #000000;
margin-top: 5%;
width: 100%;
`
export const ContactsHeading = styled.h1`
    margin-bottom: 3%;
    margin-top: 3%;
    font-family: 'Trebuchet MS', sans-serif;
    font-size: 38px;
    color: green;
    font-weight: 600;
    text-align: center;
    padding: 10px;
    width: 15%;
    align-self: center;
    border-bottom: 1px solid green;
`
export const Email =styled.p`
    font-size: 18px;
    text-align: left;
    align-self: center;
    width: 50%;
    line-height: 25px;
    text-align: center;
    margin-bottom: 2%;
    color: #ffffff;
    text-decoration: none;
`
export const MobileNum =styled.p`
    font-size: 18px;
    text-align: left;
    align-self: center;
    width: 50%;
    line-height: 25px;
    text-align: center;
    margin-bottom: 2%;
    color: #ffffff;
`
export const ContactUsSubContainer = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
align-item: center;
border: 1px solid green;
width: 45%;
border-radius: 5px; 
flex-wrap: wrap;
align-self: center;
margin-bottom: 3%;
`
export const PaymentTermsandCancellationPolicyContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-item: center;
    padding-left: 7%;
`
export const PaymentTermsandCancellationPolicyHeading = styled.h1`
    margin-bottom: 3%;
    margin-top: 5%;
    font-family: 'Trebuchet MS', sans-serif;
    font-size: 38px;
    color: green;
    font-weight: 600;
    text-align: center;
    padding: 10px;
    width: 55%;
    align-self: center;
    border-bottom: 1px solid green;
`
export const PolicyList = styled.ul`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-item: center;
`
export const PolicyListItems = styled.li`
    font-size: 18px;
    font-weight: 400;
    line-height: 30px;
    margin-top: 0px;
    list-style-type: disc;
`
export const IncluionAndExclutionContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-item: center;
    padding-left: 7%;
    margin-top: 4%;
    // border: 1px solid green;

`
export const IncluionContainer = styled.div`
    display: flex;
    flex-direction: column;
    // justify-content: flex-start;
    align-item: center;
    // padding-left: 7%;
`
export const InclutionHeading = styled.h1`
    margin-bottom: 3%;
    margin-top: 5%;
    font-family: 'Trebuchet MS', sans-serif;
    font-size: 38px;
    color: green;
    font-weight: 600;
    text-align: center;
    padding: 10px;
    width: 30%;
    align-self: center;
    border-bottom: 1px solid green;
`
export const InclutionItemContainer = styled.ul`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-item: center;
    padding-left: 7%;
    padding-right: 5%;
    border-right: 1px solid green;

`
export const Incluionitem = styled.li`
    font-size: 18px;
    font-weight: 400;
    line-height: 30px;
    margin-top: 0px;
    list-style-type: disc;
`
export const ExcluionContainer = styled.div`
    display: flex;
    flex-direction: column;
    // justify-content: space-between;
    align-item: center;
    // padding: 2%;
`
export const ExclutionHeading = styled.h1`
    margin-bottom: 3%;
    margin-top: 5%;
    font-family: 'Trebuchet MS', sans-serif;
    font-size: 38px;
    color: green;
    font-weight: 600;
    text-align: center;
    padding: 10px;
    width: 30%;
    align-self: center;
    border-bottom: 1px solid green;
`
export const ExclutionItemContainer = styled.ul`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-item: center;
    padding-left: 7%;
    padding-right: 7%;
`
export const Excluionitem = styled.li`
    font-size: 18px;
    font-weight: 400;
    line-height: 30px;
    margin-top: 0px;
    list-style-type: disc;
`
