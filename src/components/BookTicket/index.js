import { Component } from 'react';
import {v4 as uuidv4} from 'uuid';
import {
    BookTicketContainer, 
    BookTicketSubContainer,
    BookTicketHeading, 
    BookTicketForm, 
    CustomLabel,
    InputName, 
    InputAge, 
    GovtId, 
    MobNum, 
    EmailAdd, 
    FormSubContainer,
    PersonsContainer,
    SubmitButton,
    PersonCount, 
    MainPersonCon,
    PersonsCount,
    SubmitContainer,
    SuccessHeading,
    SuccessDes
} from './styledComponent'
    import Header from '../Header'

class BookTicket extends Component{
    state = {noOfPersons: '', name: '', age: '', govtId: '', mobNum: '', email: '', submitted: false}

    onChangePersons = event => {
        this.setState({noOfPersons: event.target.value});
    }
    
    renderPersons = () => {
        const {noOfPersons} = this.state

        let myArr = []
        for(let i=0; i<noOfPersons-1; i++){
            myArr.push(i);    
        }
        if(myArr.length>0){
            return(
                <>
                    {myArr.map(eachItem => (
                    <PersonsContainer key={uuidv4()}>
                        <PersonCount>{`Person ${eachItem + 1}`}</PersonCount>
                        <>
                            <CustomLabel htmlFor="username">
                            Name
                            </CustomLabel>
                            <InputName type="text"/>
                            <CustomLabel htmlFor="age">
                                Age
                            </CustomLabel>
                            <InputAge type="text"/>
                            <CustomLabel htmlFor="govtid">
                                GovtId
                            </CustomLabel>
                            <GovtId type="text" />
                            </>
                    </PersonsContainer>
                    ))}
                </>
            )
        }
        return null
        
    }

    onChangeName = event  => {
        this.setState({name: event.target.value});
    }

    onChangAge = event => {
        this.setState({age: event.target.value});
    }

    onChangeGovtId = event => {
        this.setState({govtId: event.target.value});
    }

    onChangeMail = event => {
        this.setState({email: event.target.value});
    }

    onChangeMobNum = event => {
        this.setState({mobNum: event.target.value});
    }

    onSubmitForm = event => {
        event.preventDefault()
        const {name, age, govtId, mobNum, email} = this.state
        console.log(name)
         if(name.length>0 && age.length > 0 && govtId.length>0 && mobNum.length>1  && email.length>0 ){
            this.setState(prevState => ({submitted: ! prevState.submitted}));
            this.setState({noOfPersons: '', name: '', age: '', govtId: '', mobNum: '', email: ''});
         }
        

    }

    render(){
        const {submitted, noOfPersons, name, age, govtId, mobNum, email} = this.state
        
        if(submitted){
            return(
                <>
            <Header />
            <BookTicketContainer>
                <SubmitContainer>
                    <SuccessHeading>
                    Success!
                    </SuccessHeading>
                    <SuccessDes>Congratulations, <br/> You have Successfully booked your Tickets.</SuccessDes>
                </SubmitContainer>
                </BookTicketContainer>
                </>
            )
        }

        return(
            <>
            <Header />
            <BookTicketContainer>
                <BookTicketSubContainer>
                <BookTicketHeading>Book Tickets</BookTicketHeading>
                <PersonsCount value={noOfPersons} placeholder='Enter Number of Persons' onChange={this.onChangePersons} />
                <BookTicketForm onSubmit={this.onSubmitForm}>
                    <MainPersonCon>
                        <CustomLabel htmlFor="username">
                            Name
                        </CustomLabel>
                        <InputName value={name} onChange={this.onChangeName} type="text" id="name"/>
                        <CustomLabel htmlFor="age">
                            Age
                        </CustomLabel>
                        <InputAge value={age} onChange={this.onChangAge} type="text" id="age" />
                        <CustomLabel  htmlFor="govtid">
                            GovtId
                        </CustomLabel>
                        <GovtId value={govtId} onChange={this.onChangeGovtId} type="text" id="govtid"/>
                        <CustomLabel htmlFor="mobnum">
                            Mobile Number
                        </CustomLabel>
                        <MobNum value={mobNum} onChange={this.onChangeMobNum} type='text' id="mobnum"/>
                        <CustomLabel htmlFor="email">
                            E-mail
                        </CustomLabel>
                        <EmailAdd value={email} onChange={this.onChangeMail} type='email' id="email"/>
                        </MainPersonCon>
                        <FormSubContainer>
                            {this.renderPersons()}
                        </FormSubContainer>
                        <SubmitButton type="submit">Submit</SubmitButton>
                </BookTicketForm>
                
                </BookTicketSubContainer>
            </BookTicketContainer>
          </>
        )
    }

}
export default BookTicket