import { Component } from 'react';
import {v4 as uuidv4} from 'uuid';
import {Redirect} from 'react-router-dom' 
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {
    HomeContainer, 
    HomeSubContainer, 
    MainHeading, 
    DescriptionContainer, 
    BookNowButton,
    DesSubContainerOne, 
    DesSubContainerTwo, 
    DesSubContainerThree, 
    OverViewHeading, 
    Description, 
    MainDescription,  
    JoinJuneryHeading,
    ItineraryHeading,
    ItineraryListTag,
    ItineraryItemsSubContainer,
    ItineraryItemsSubContainerOne,
    DayAndDateHeading, 
    ItineraryItemsTopContainer, 
    ItineraryItemsDescription,
    EndofService,
    CostDetailsContainer,
    ConstHeading,
    CostDetails,
    OfferHeading,
    OfferContainer,
    OfferOne,
    TermsandConditionsHeading,
    TermsandConditionsContainer,
    TandCListItem,
    CostDetailsSubContainer,
    BankDetailsContainer,
    BankDetailsHeading,
    BankDetailsDescription,
    BankDetailsSubContainer,
    ContactUsContainer,
    ContactsHeading,
    Email,
    MobileNum,
    ContactUsSubContainer,
    PaymentTermsandCancellationPolicyContainer,
    PaymentTermsandCancellationPolicyHeading,
    PolicyList,
    PolicyListItems,
    IncluionAndExclutionContainer,
    IncluionContainer,
    InclutionHeading,
    InclutionItemContainer,
    Incluionitem,
    ExcluionContainer,
    ExclutionHeading,
    ExclutionItemContainer,
    Excluionitem
} from './styledComponent'
import Header from '../Header'
import ItineraryItems from '../ItineraryItems'
import BankDetails from '../BankDetails'
import './index.css'

const ItineraryList = [
    {
     date: "Day 1 - Nov 14th 2023",
     description1: "- Our drivers would pick up from the JKIA airport at 7AM. You would board our 4*4 Landcruisers to embark on your journey to Maasai Mara. The road journey takes about 5to 6 hours, but you would be amazed by the landscape enroute. You would first see the Nairobinational park on your left side. On a lucky day, you would also see a White Rhino grazing near thefence. Nairobi city has a national park right in its heart!! And it is home for Lions, Leopards, Whiterhinos, gazzelles, Giraffes, crowned cranes, and other mammals and birds. This is the only city inthe World which boasts a National park within the city limits.",
     imgUrl1: "https://res.cloudinary.com/da7ik4khq/image/upload/v1690893207/AU-World%20Project/Screenshot_2023-08-01_134510_wnj0pn.png",
     description2:"- After one hour you would climb up to The Great Rift Valley. This is one priced attraction of Kenya. Formed a millions years back, this valley boasts beautiful lakes and escarpments, which providehavens for plentiful wildlife. The Great Rift Valley runs for 4,000 miles (6,400 kilometers), fromJordan in southwestern Asia to the coast of the Indian Ocean in central Mozambique. We suggest you request your driver to stop when you are on top and enjoy the views of this Nature’s marvel. You would reach Maasai Mara by noon. Complete your check in formalities and proceed to lunch. After lunch, you would go on your first game drive on the great plains of Maasai Mara!!",
     imgUrl2: "https://res.cloudinary.com/da7ik4khq/image/upload/v1690893174/AU-World%20Project/Screenshot_2023-08-01_134527_jayzfq.png",
     description3: "- This afternoon, our experienced Maasai guides/drivers would take you around the Talek and Topi plains area. There you would find a lot of ungulates, antelopes, zebras and also a huge pride of Lions. This pride is called the ‘Topi Pride’. Relax, sit back and enjoy God’s creations. You would be so excited to see the endless plains of Maasai Mara with its dwellers. Return to your camp after 6PM. Refresh yourself and head towards the camp fire. Meet up with your group and listen to their first day experience at Mara. Share your magical experiences with them. Have dinner and retire for the day ( LD )",
     imgUrl3: "https://res.cloudinary.com/da7ik4khq/image/upload/v1690893161/AU-World%20Project/Screenshot_2023-08-01_134539_gc2u6j.png"
    },
    {
        date: "Day 2 - Nov 15th 2023",
        description1: "- Wake up early. Freshen yourself and head to the restaurant for a hot cup of coffee or tea. The mornings are cold at Mara, so do wear your fleece jacket for the morning game drive. Breakfast would be packed for you. Explore the mornings at Mara. The Sunrise you witness at Mara is something which you would never get to witness anywhere in the World. Just pray that it does not rain!!",
        imgUrl1: "https://res.cloudinary.com/da7ik4khq/image/upload/v1690893199/AU-World%20Project/Screenshot_2023-08-01_134553_bghlad.png",
        description2:"- Our guides would park the vehicle under a tree for you to have a bush breakfast. This is an out of the World experience. At a distance you can see the animals peacefully grazing while you are enjoying your food. Post your breakfast, proceed again on the game drive. Mid mornings while the Lions sleep is a good time to look around for the cheetahs. November is also the season when the Topis give birth to young ones. On a lucky day, you might witness a Topi giving birth to a little one. Keep a watch on the hyenas as they would always be around a pregnant Topi!",
        imgUrl2: "https://res.cloudinary.com/da7ik4khq/image/upload/v1690893193/AU-World%20Project/Screenshot_2023-08-01_134605_hm9iaj.png",
        description3: "- Return to your camp around 11.30AM. Take a nice shower and some much needed rest. Lunch would be served from 12.30 Noon. Have a hot lunch and a short nap. The afternoon game drive would start at 3PM. Today our drivers would try and locate a leopard for you. Do ask your driver to stop where ever you want to click pictures. Return to the camp post sunset and enjoy your evening at the camp fire with your group. Have dinner and retire early as you have a full day game drive tomorrow. ( BLD )",
        imgUrl3: "https://res.cloudinary.com/da7ik4khq/image/upload/v1690893203/AU-World%20Project/Screenshot_2023-08-01_134614_kb6a7j.png"
       },
       {
        date: "Day 3 - Nov 16th 2023",
        description: "- Today is a very busy day for you at Mara. Wake up early, freshen yourself, have a hot beverage and jump into your designated vehicles. Today you would be going towards the border of Maasai Mara. You would be going for a full day game drive with packed breakfast and lunch. Sand river is the border for Maasai Mara and Tanzania. This has been the entry point of the migratory animals for millions of years. You would be amazed to see such a small river separates two different countries!! Enjoy every bit your time as this is your last day of game drive for this trip. Have lunch and take a small nap like our Maasai guides. Then proceed towards your camp. On the way back encounter a pride of lion. During your stay at Mara, you would have seen the Big 4 our of the Big 5. The Rhino being very elusive is going to be a difficult find. But this area is know for the Rhinos. If you are lucky you would get to see one. Return to the camp with great memories. Spend you evening at the camp fire before having dinner. Retire for the day. Sadly the holiday has come to an end. But at the end you would release that it was the journey which was so beautiful. Have a blissful night.",
        imgUrl: "https://res.cloudinary.com/da7ik4khq/image/upload/v1690893202/AU-World%20Project/Screenshot_2023-08-01_134625_vmxxmi.png",
       },
]
const TermsandConditionsList = [
    "Costs are based at 4 paxs per vehicle for game drives and 5 per vehicle for Internal transfers.",
    "Stay at Mara would be at Zebra plains or Loyk camp or Julia river camp.",
    "Last day to confirm the tour is August 14th 2023.",
    "Guests travelling should process valid passports with a minimum of 6 months validity from the date of return.",
    "Guests traveling should be administered with Yellow fever vaccination and Oral polio vaccination. The vaccines should be taken at least 15 days prior to travel. The certificates has to be shared for us to send you the invite letter for VISA application.",
    "Guests should intimate us on any medical ailment and Travel Unbounded World Pvt Ltd is not liable for any loss or damage to the guests during the tour.",
    "Guests should provide International travel insurance 15 days prior to travel.",
    "Guests staying at Nairobi one day prior to the travel dates have to reach JKIA airport at 7AM on Nov 14th.",
    "Guests staying at Nairobi on Nov 17th would have to arrange their transport from JKIA airport after we drop you.",
    "Lunch on the return on Nov 17th is not a part of the package.",
    "Meals are mentioned in brackets at the end of the Day’s itinerary.",
    "Groups above 5 can avail special discounts.",
    "Vehicles are provided only for internal transfers and game drives, they are not for another purposes or use.",
    "Please refer to all the terms and conditions on www.travelunbounded.com."
] 

class Home extends Component{
    state={istickedBooked: false}

    onClickBook = () => {
        this.setState(prevState => ({istickedBooked: !prevState.istickedBooked}))

    }

    render(){
        const {istickedBooked} = this.state
        console.log(istickedBooked)
        if(istickedBooked){
            return <Redirect to="/book-tickets" />
        }

        return(
        <HomeContainer>
            <Header />
            <HomeSubContainer>
                <div className="carousel-text">
                    <MainHeading>"Big Cats Week at <i style={{color: 'green'}}>Maasai Mara</i>" <br/>Diwali 2023 special</MainHeading>
                    <MainDescription><i>"The world is a book, and those who do not travel read only one page."</i> - Saint Augustine</MainDescription>
                    <BookNowButton type="button" onClick={this.onClickBook}>Book Now</BookNowButton>
                </div>
                <DescriptionContainer>
                            <OverViewHeading>Overview</OverViewHeading>
                        <DesSubContainerOne>
                            <Description>
                                "November is one of the Best times to visit Kenya, especially to visit its prime park,
                                Maasai Mara. This is because the large migratory herds would have returned to Tanzania and now
                                the Big cats have to venture long distances to hunt their prey."
                            </Description>
                        </DesSubContainerOne>
                        <DesSubContainerTwo>
                            <Description>
                                "November is also the season of short rains. This makes the plains of Maasai Mara lush green. The
                                skies are truly dramatic and colourful. The Sun rise and Sun sets during November at Mara is
                                simply breath taking."
                            </Description>
                        </DesSubContainerTwo>
                        <DesSubContainerThree>
                            <Description>
                                "November is also a time for holidaying and getting together with our families. And the icing on the
                                cake is we have curated this itinerary for such an affordable costs without compromising on any of
                                the services. This is commemorate our first year anniversary of opening up operations at Nairobi."
                            </Description>
                        </DesSubContainerThree>
                    </DescriptionContainer>
                <JoinJuneryHeading>
                    Join us on this unforgettable journey of your life time
                </JoinJuneryHeading>
                <ItineraryHeading>Itinerary</ItineraryHeading>
                <ItineraryListTag>
                    {ItineraryList.map(eachItem => (
                        <ItineraryItems eachItem={eachItem} key={uuidv4()} index={ItineraryList.indexOf(eachItem)}/>
                        )) 
                    }
                    <ItineraryItemsSubContainer>
                        <DayAndDateHeading>Day 4 - Nov 17th 2023</DayAndDateHeading>
                        <ItineraryItemsSubContainerOne>
                            <ItineraryItemsTopContainer>
                                <ItineraryItemsDescription>
                                    - Wake up at leisure, have a nice and heavy breakfast while you discuss about
                                        your experience with your group. Board the designated Landcruisers to embark on the journey to Nairobi. 
                                        You would be dropped at the JKIA airport.
                                </ItineraryItemsDescription>
                            </ItineraryItemsTopContainer>
                        </ItineraryItemsSubContainerOne>
                        <EndofService>End of services</EndofService>
                    </ItineraryItemsSubContainer>
                </ItineraryListTag>
                
                <CostDetailsContainer>
                <ConstHeading>Costs</ConstHeading>
                    <CostDetailsSubContainer>
                        <CostDetails>Cost per adult, Ex Nairobi - USD 1582/- incl of local taxes</CostDetails>
                        <CostDetails>Cost per child ( 4 to 9 years ), Ex Nairobi - USD 1400/- incl of taxes</CostDetails>
                    </CostDetailsSubContainer>
                    <OfferContainer>
                        <OfferHeading>Special Offer!!!</OfferHeading>
                        <CostDetailsSubContainer>
                            <OfferOne>
                                Special Independence Day offer valid for bookings made on or before till August 14th 2023 -
                                Cost per adult - USD 1322
                            </OfferOne>
                            <OfferOne>
                                Special Independence Day offer valid for bookings made on or before till August 14th 2023 -
                                Cost per child - USD 1127
                            </OfferOne>
                        </CostDetailsSubContainer>
                    </OfferContainer>
                </CostDetailsContainer>
                <TermsandConditionsHeading>Terms and Conditions</TermsandConditionsHeading>
                <TermsandConditionsContainer>
                {TermsandConditionsList.map(eachItem => (
                    <TandCListItem key={uuidv4()}>{eachItem}</TandCListItem>
                ))}
                </TermsandConditionsContainer>
                <PaymentTermsandCancellationPolicyContainer>
                    <PaymentTermsandCancellationPolicyHeading>Payment terms and Cancellation Policy</PaymentTermsandCancellationPolicyHeading>
                    <PolicyList>
                        <PolicyListItems>100% of the tour cost at the time of booking.</PolicyListItems>
                        <PolicyListItems>
                            50% of the tour cost would be given back as credit if the tour is cancelled 60 days before the
                            travel dates.
                        </PolicyListItems>
                        <PolicyListItems>No refund is provided if tour is cancelled within thirty days of the travel dates.</PolicyListItems>
                    </PolicyList>
                </PaymentTermsandCancellationPolicyContainer>
                <IncluionAndExclutionContainer>
                    <IncluionContainer>
                    <InclutionHeading>Inclution</InclutionHeading>
                        <InclutionItemContainer>
                            <Incluionitem>Internal transfers from JKIA airport to Maasai Mara and back by Landcruiser on shared basis</Incluionitem>
                            <Incluionitem>Stay on twin sharing basis at Maasai Mara either at Zebra plains or</Incluionitem>
                            <Incluionitem>Game drives in Landcruisers in shared basis - minimum 4 paxs per vehicle</Incluionitem>
                            <Incluionitem>Water during game drives</Incluionitem>
                            <Incluionitem>All meals as mentioned in the itinerary</Incluionitem>
                            <Incluionitem>Park Fees</Incluionitem>
                            <Incluionitem>Guide Fees</Incluionitem>
                            <Incluionitem>English speaking guides/drivers</Incluionitem>
                        </InclutionItemContainer>
                    </IncluionContainer>
                    <ExcluionContainer>
                        <ExclutionHeading>Exclution</ExclutionHeading>
                            <ExclutionItemContainer>
                                <Excluionitem>Internal transfers from JKIA airport to Maasai Mara and back by Landcruiser on shared basis</Excluionitem>
                                <Excluionitem>Stay on twin sharing basis at Maasai Mara either at Zebra plains or</Excluionitem>
                                <Excluionitem>Game drives in Landcruisers in shared basis - minimum 4 paxs per vehicle</Excluionitem>
                                <Excluionitem>Water during game drives</Excluionitem>
                            </ExclutionItemContainer>
                        </ExcluionContainer>
                </IncluionAndExclutionContainer>
                <BankDetailsContainer>
                    <BankDetailsHeading>Bank Details for USD transfers</BankDetailsHeading>
                    <BankDetailsDescription>
                        All payments have to be done to the below mentioned bank
                        only. Any guests wanting to pay in INR has to bear the conversion charges and the transfer
                        charges.
                    </BankDetailsDescription>
                    <BankDetailsSubContainer>
                        <BankDetails />
                    </BankDetailsSubContainer>
                </BankDetailsContainer>
                
            </HomeSubContainer>
            <ContactUsContainer>
                    <ContactsHeading>Contact Us</ContactsHeading>
                    <ContactUsSubContainer>
                        <Email><a style={{color:'#ffffff'}} href="mailto:ck@travelunbounded.com">ck@travelunbounded.com</a></Email>
                        <MobileNum>+919845090014</MobileNum>
                        <Email><a style={{color:'#ffffff'}} href="mailto:sk@travelunbounded.com">sk@travelunbounded.com</a></Email>
                        <MobileNum>+919739255255</MobileNum>
                        <Email><a style={{color:'#ffffff'}} href="mailto:sg@travelunbounded.com">sg@travelunbounded.com</a></Email>
                        <MobileNum>+919884023028</MobileNum>
                    </ContactUsSubContainer>
                </ContactUsContainer>
        </HomeContainer>
        )
        
    }
}
export default Home