import React, { useEffect, useState} from 'react';
import axios from "axios";
import {
    Grid,
    Segment, Form
} from 'semantic-ui-react'
import {Link} from "react-router-dom";
export default
function Info(){


 const [ty,setty]= useState("");
        const [BookedPersons, setBookedPerson] = useState([]);
        const [BookedRooms, setBookedRooms] = useState([]);
    const [ BusiestHours, setBusiestHours] = useState([]);
    const [t,sett]= useState(false);
function  componentDidMount() {
    axios.get('https://booking-system-pika.herokuapp.com/pika-booking/persons/most-booked').then(res => {

        setBookedPerson(res.data);

        console.log(res.data)
    })

    }
function type (parameter, value){
   switch (parameter) {
           case 'Daily':
                return value
            case 'Weekly':
                return  7*value
            case 'Monthly':
                return 30*value
            case 'Yearly':
                return  365*value
                }
}
useEffect(()=> {
    componentDidMount()
})
        return <>

            <Segment>
                <Segment placeholder>

                  <Form>
                                                  <Form.Input label='Time'>
                                                        <select defaultValue={'Daily'} style={{textAlign: "center"}} onChange={(e) => {setty(e.target.value)}}>
                                                            <option key={0} value={'0'}>Select time frame</option>
                                                             {

                                                            ['Daily','Weekly','Monthly','Yearly' ].map((item) => {return <option>{item}</option>})
                                                                                                           }
                                                        </select>
                                                    </Form.Input>
                                                    </Form>
                    <Grid columns={2} stackable textAlign='center'>

                            <Grid.Column>
                                <h5> Revenue:    (Per Material)

                                        <table style={{marginLeft: "auto", marginRight: "auto"}}> <ul>
                                            <thead>
                                            <tr>
                                                <th>Domestic: {type(ty,1)}</th>



                                            </tr>
                                            <th>Vegetative: {type(ty,1)}</th>
                                            </thead>
                                             </ul>
                                            <tbody>

                                            </tbody>
                                        </table>

                                    </h5>

                            </Grid.Column>



                            <Grid.Column>
                                <h5> Volume:  (Per Material)<ul><table style={{marginLeft: "auto", marginRight: "auto"}}>
                                    <thead>
                                    <tr>
                                       <th>Domestic: {type(ty,2)}</th>





                                    </tr>
                                    <th>Vegetative: {type(ty,3)}</th>
                                    </thead>
                                </table> </ul> </h5>
                            </Grid.Column>

                    </Grid>
                </Segment>
            </Segment>
        </>

}

