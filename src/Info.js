import React, { useEffect, useState} from 'react';
import axios from "axios";
import {
    Grid,
    Segment, Form
} from 'semantic-ui-react'
import {Link} from "react-router-dom";
export default
function Info(){

  const [tickets, settickets] = useState([]);
 const [ty,setty]= useState("");
        const [BookedPersons, setBookedPerson] = useState([]);
    const [t,sett]= useState(false);
function  componentDidMount() {

 axios.get('https://booking-system-pika.herokuapp.com/pika-booking/persons/most-booked').then(res => {
        setBookedPerson(res.data);

        console.log(res.data)
    })

    }
    function getTicket(){
    if (t == false){
            axios.get('https://cleanncleardb2.herokuapp.com/CleanNClear/tickets').then((res) => {
                    settickets(res.data);


                }, (error) => {
                    console.log(error);
                }
            );
            sett(true);

            }
        }
 function getrevuened(){
 let t = 0;
   console.log(t)
  for( let i=0; i<tickets.length; i++ ){
  console.log(tickets[i].date.substr(5, 2))
  console.log(Date().toLocaleString().substr(8, 2))
 if(tickets[i].date.substr(5, 2)==Date().toLocaleString().substr(8, 2)&&tickets[i].date.substr(7, 4)==Date().toLocaleString().substr(3, 4)&&tickets[i].date.substr(12, 4)==Date().toLocaleString().substr(11, 4))
  if (tickets[i].measurementtype=="Tons"){
     t= t+(tickets[i].price*tickets[i].measurement)/1.4}
     else {
       t= t+(tickets[i].price*tickets[i].measurement)}
     }

   console.log(t)

  return t
 }
 function getrevueneM(){
 let t = 0;
   console.log(t)
  for( let i=0; i<tickets.length; i++ ){
  if(tickets[i].date.substr(7, 4)==Date().toLocaleString().substr(3, 4)&&tickets[i].date.substr(12, 4)==Date().toLocaleString().substr(11, 4))
  if (tickets[i].measurementtype=="Tons"){
     t= t+(tickets[i].price*tickets[i].measurement)/1.4}
     else {
       t= t+(tickets[i].price*tickets[i].measurement)}
     }

   console.log(t)

  return t
  }
  function getrevueney(){
   let t = 0;
     console.log(t)

      for( let i=0; i<tickets.length; i++ ){
       console.log(tickets[i].date.substr(12, 4))
        console.log(Date().toLocaleString().substr(11, 4))
   if(tickets[i].date.substr(12, 4)==Date().toLocaleString().substr(11, 4))
     if (tickets[i].measurementtype=="Tons"){
        t= t+(tickets[i].price*tickets[i].measurement)/1.4}
        else {
          t= t+(tickets[i].price*tickets[i].measurement)}
        }

      console.log(t)

     return t
   }
function getvolumenD(){
let t = 0;
   console.log(t)
  for( let i=0; i<tickets.length; i++ ){
if(tickets[i].date.substr(5, 2)==Date().toLocaleString().substr(8, 2)&&tickets[i].date.substr(7, 4)==Date().toLocaleString().substr(3, 4)&&tickets[i].date.substr(12, 4)==Date().toLocaleString().substr(11, 4))
  if (tickets[i].measurementtype=="Tons"){
     t= t+tickets[i].measurement/1.4}
     else {
     t= t+tickets[i].measurement
}
 console.log(t)
  }
  return t
 }
function getvolumenM(){
let t = 0;
   console.log(t)
  for( let i=0; i<tickets.length; i++ ){
if(tickets[i].date.substr(7, 4)==Date().toLocaleString().substr(3, 4)&&tickets[i].date.substr(12, 4)==Date().toLocaleString().substr(11, 4))
if (tickets[i].measurementtype=="Tons"){
     t= t+tickets[i].measurement/1.4}
     else {
     t= t+tickets[i].measurement
}
 console.log(t)
  }
  return t
 }
function getvolumenY(){
let t = 0;
   console.log(t)
  for( let i=0; i<tickets.length; i++ ){
if(tickets[i].date.substr(12, 4)==Date().toLocaleString().substr(11, 4))
if (tickets[i].measurementtype=="Tons"){
     t= t+tickets[i].measurement/1.4}
     else {
     t= t+tickets[i].measurement
}
   console.log(t)
  }
  return t
 }

function type (parameter){
   switch (parameter) {
           case 'Daily':
                return getrevuened()
            case 'Weekly':
                return  7
            case 'Monthly':
                return getrevueneM()
            case 'Yearly':
                return  getrevueney()
                }
}
function type2 (parameter){
   switch (parameter) {
           case 'Daily':
                return getvolumenD()
            case 'Monthly':
                return getvolumenD()
            case 'Yearly':
                return  getvolumenY()
                }
}
useEffect(()=> {
    getTicket()

})
        return <>

            <Segment>
                <Segment placeholder>

                  <Form>
                                                  <Form.Input label='Time'>
                                                        <select defaultValue={'0'} style={{textAlign: "center"}} onChange={(e) => {setty(e.target.value)}}>
                                                            <option key={0} value={'0'}>Select time frame</option>
                                                             {

                                                            ['Daily','Monthly','Yearly' ].map((item) => {return <option>{item}</option>})
                                                                                                           }
                                                        </select>
                                                    </Form.Input>
                                                    </Form>
                    <Grid columns={2} stackable textAlign='center'>

                            <Grid.Column>
                                <h5> Revenue:    (Per Material)

                                        <table style={{marginLeft: "auto", marginRight: "auto"}}> <ul>
                                            <thead>

                                            <th> ${type(ty)}.00 </th>
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
                                       <th> {type2(ty)} Yards</th>





                                    </tr>

                                    </thead>
                                </table> </ul> </h5>
                            </Grid.Column>

                    </Grid>
                </Segment>
            </Segment>
        </>

}

