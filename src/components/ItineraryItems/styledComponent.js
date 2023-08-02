import styled from "styled-components";

export const ItineraryItemsContainer = styled.li`
display:flex;
flex-direction:column;
justify-content: space-around;
flex-grow: 1;
// width: 100%;
margin-top: 3%;
padding: 0px;
list-style-type: none;
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
height: 450px;
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
    width: 75%;
    align-self: center;
`
export const ItineraryItemsButtomContainer = styled.div`
// display:flex;
// flex:direction:column;
// justify-content: center;
// align-item:center;
width: 50%;
`
export const ItineraryItemImage = styled.img`
height: 450px;
width: 700px;
border-radius: 13px;
`
export const ItineraryItemsTopContainerOne = styled.div`
display:flex;
flex:direction:column;
justify-content: center;
align-item:center;
width: 50%;
order: 0;
padding: 2%;
height: 400px;
`
export const ItineraryItemsButtomContainerOne = styled.div`
// display:flex;
// flex:direction:column;
// justify-content: center;
// align-item:center;
width: 50%;
order: -1;
`
export const ItineraryItemsTopContainerTwo = styled.div`
display:flex;
flex:direction:column;
justify-content: center;
align-item:center;
width: 50%;
padding: 2%;
order: -1;
`
export const ItineraryItemsButtomContainerTwo = styled.div`
// display:flex;
// flex:direction:column;
// justify-content: center;
// align-item:center;
width: 50%;
order: 0;
`
export const ItineraryItemsTopContainerThree = styled.div`
display:flex;
flex:direction:column;
justify-content: center;
align-item:center;
width: 50%;
padding: 2%;
order: 0;
`


export const ItineraryItemsButtomContainerThree = styled.div`
// display:flex;
// flex:direction:column;
// justify-content: center;
// align-item:center;
width: 50%;
order: -1;
`