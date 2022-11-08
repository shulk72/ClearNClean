import React, { useEffect, useState} from 'react';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import axios from "axios";
import {
    Grid,
    Segment, Form
} from 'semantic-ui-react'
import {Link} from "react-router-dom";
export default
function Info(){



        const [BookedPersons, setBookedPerson] = useState([]);
        const [BookedRooms, setBookedRooms] = useState([]);
    const [ BusiestHours, setBusiestHours] = useState([]);
    const [t,sett]= useState(false);
   function  componentDidMount() {
if (t===false) {
    axios.get('https://booking-system-pika.herokuapp.com/pika-booking/persons/most-booked').then(res => {

        setBookedPerson(res.data);

        console.log(res.data)
    })
    axios.get('https://booking-system-pika.herokuapp.com/pika-booking/rooms/most-booked').then(res => {
        let BookedRoom = res.data
        setBookedRooms(BookedRoom);
console.log(BookedRoom)
    })
    axios.get('https://booking-system-pika.herokuapp.com/pika-booking/booking/busiesthour').then(res => {
        setBusiestHours(res.data)
        console.log(res.data)
    })
    sett(true)
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
                                                        <select defaultValue={"0"} style={{textAlign: "center"}} onChange={(e) => {}}>
                                                            <option key={0} value={"0"}>Daily</option>
                                                            <option key={1} value={"1"}>Weekly</option>
                                                            <option key={2} value={"2"}>Monthly</option>
                                                            <option key={3} value={"3"}>Yearly</option>
                                                        </select>
                                                    </Form.Input>
                                                    </Form>
                    <Grid columns={2} stackable textAlign='center'>

                            <Grid.Column>
                                <h5> Revenue:    (Per Material)
                                    <li>
                                        <table style={{marginLeft: "auto", marginRight: "auto"}}>
                                            <thead>
                                            <tr>
                                                <th>Domestic: </th>



                                            </tr>
                                            <th>Vegetative:</th>
                                            </thead>

                                            <tbody>

                                            </tbody>
                                        </table>
                                            </li>
                                    </h5>

                            </Grid.Column>



                            <Grid.Column>
                                <h5> Volume:  (Per Material)<ul><table style={{marginLeft: "auto", marginRight: "auto"}}>
                                    <thead>
                                    <tr>
                                       <th>Domestic: </th>





                                    </tr>
                                    <th>Vegetative:</th>
                                    </thead>
                                </table> </ul> </h5>
                            </Grid.Column>

                    </Grid>
                </Segment>
            </Segment>
        </>

}

