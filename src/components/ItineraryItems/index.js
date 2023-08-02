import {
    ItineraryItemsContainer, 
    ItineraryItemsSubContainer,
    ItineraryItemsSubContainerOne,
    DayAndDateHeading, 
    ItineraryItemsTopContainer, 
    ItineraryItemsDescription, 
    ItineraryItemsButtomContainer, 
    ItineraryItemImage,
    ItineraryItemsTopContainerOne,
    ItineraryItemsTopContainerTwo,
    ItineraryItemsTopContainerThree,
    ItineraryItemsButtomContainerOne,
    ItineraryItemsButtomContainerTwo,
    ItineraryItemsButtomContainerThree
} from './styledComponent'

const ItineraryItems = props => {
    const {eachItem, index} = props
    const {
        date, 
        description,
        imgUrl,
        description1, 
        description2, 
        description3, 
        imgUrl1, 
        imgUrl2, 
        imgUrl3
    } = eachItem

    const renderPage = () => {
        if(index<2){
            return (
                <ItineraryItemsSubContainer>
                    <DayAndDateHeading>{date}</DayAndDateHeading>
                    <ItineraryItemsSubContainerOne>
                        <ItineraryItemsTopContainerOne>
                            <ItineraryItemsDescription>{description1}</ItineraryItemsDescription>
                        </ItineraryItemsTopContainerOne>
                        <ItineraryItemsButtomContainerOne>
                            <ItineraryItemImage src={imgUrl1} alt="Itinerary Image"/>
                        </ItineraryItemsButtomContainerOne>
                    </ItineraryItemsSubContainerOne>
                    <ItineraryItemsSubContainerOne>
                        <ItineraryItemsTopContainerTwo>
                            <ItineraryItemsDescription>{description2}</ItineraryItemsDescription>
                        </ItineraryItemsTopContainerTwo>
                        <ItineraryItemsButtomContainerTwo>
                            <ItineraryItemImage src={imgUrl2} alt="Itinerary Image"/>
                        </ItineraryItemsButtomContainerTwo>
                    </ItineraryItemsSubContainerOne>
                    <ItineraryItemsSubContainerOne>
                        <ItineraryItemsTopContainerThree>
                            <ItineraryItemsDescription>{description3}</ItineraryItemsDescription>
                        </ItineraryItemsTopContainerThree>
                        <ItineraryItemsButtomContainerThree>
                            <ItineraryItemImage src={imgUrl3} alt="Itinerary Image"/>
                        </ItineraryItemsButtomContainerThree>
                   </ItineraryItemsSubContainerOne>
            </ItineraryItemsSubContainer>
            )
        }else{
            return(
                <ItineraryItemsSubContainer>
                    <DayAndDateHeading>{date}</DayAndDateHeading>
                    <ItineraryItemsSubContainerOne>
                        <ItineraryItemsTopContainer>
                            <ItineraryItemsDescription>{description}</ItineraryItemsDescription>
                        </ItineraryItemsTopContainer>
                        <ItineraryItemsButtomContainer>
                            <ItineraryItemImage src={imgUrl} alt="Itinerary Image"/>
                        </ItineraryItemsButtomContainer>
                    </ItineraryItemsSubContainerOne>
                </ItineraryItemsSubContainer>
            )
        }
    }

    return(
        <ItineraryItemsContainer>
            {renderPage()}
        </ItineraryItemsContainer>
    )
}
export default ItineraryItems