import React, { useEffect, useState} from 'react';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import axios from "axios";
import {
    Grid,
    Segment,
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
                    <Grid columns={3} stackable textAlign='left'>

                            <Grid.Column>
                                <h5> Revenue:
                                    <li>
                                        <table style={{marginLeft: "auto", marginRight: "auto"}}>
                                            <thead>
                                            <tr>
                                                <th>Domestic: </th>

                                                <th>Vegetative:</th>


                                            </tr>
                                            </thead>

                                            <tbody>

                                            </tbody>
                                        </table>
                                            </li>
                                    </h5>

                            </Grid.Column>



                            <Grid.Column>
                                <h5> Volume: <ul><table style={{marginLeft: "auto", marginRight: "auto"}}>
                                    <thead>
                                    <tr>
                                       <th>Domestic: </th>

                                                                                     <th>Vegetative:</th>



                                    </tr>
                                    </thead>

                                    <tbody>
                                    </tbody>
                                </table> </ul> </h5>
                            </Grid.Column>

                    </Grid>
                </Segment>
            </Segment>
        </>

}

