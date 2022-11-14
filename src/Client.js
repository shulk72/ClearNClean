import React, { useEffect, useState} from 'react';
import axios from "axios";
import _ from 'lodash'

import {
    Grid,
    Segment, Form, Search
} from 'semantic-ui-react'
import {Link} from "react-router-dom";
const source = _.times(5, () => ({

}))

const initialState = {
  loading: false,
  results: [],
  value: '',
}

function exampleReducer(state, action) {
  switch (action.type) {
    case 'CLEAN_QUERY':
      return initialState
    case 'START_SEARCH':
      return { ...state, loading: true, value: action.query }
    case 'FINISH_SEARCH':
      return { ...state, loading: false, results: action.results }
    case 'UPDATE_SELECTION':
      return { ...state, value: action.selection }

    default:
      throw new Error()
  }
}


function Client(){



        const [BookedPersons, setBookedPerson] = useState([]);
        const [BookedRooms, setBookedRooms] = useState([]);
    const [ BusiestHours, setBusiestHours] = useState([]);
    const [t,sett]= useState(false);
   const [state, dispatch] = React.useReducer(exampleReducer, initialState)
     const { loading, results, value } = state

     const timeoutRef = React.useRef()
     const handleSearchChange = React.useCallback((e, data) => {
       clearTimeout(timeoutRef.current)
       dispatch({ type: 'START_SEARCH', query: data.value })

       timeoutRef.current = setTimeout(() => {
         if (data.value.length === 0) {
           dispatch({ type: 'CLEAN_QUERY' })
           return
         }

         const re = new RegExp(_.escapeRegExp(data.value), 'i')
         const isMatch = (result) => re.test(result.title)

         dispatch({
           type: 'FINISH_SEARCH',
           results: _.filter(source, isMatch),
         })
       }, 300)
     }, [])
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

                                                 <Grid.Column width={6}>
                                                        <Search
                                                          loading={loading}
                                                          placeholder='Search for Clients...'
                                                         style={{textAlign: "center"}}
                                                          onResultSelect={(e, data) =>
                                                            dispatch({ type: 'UPDATE_SELECTION', selection: data.result.title })
                                                          }
                                                          onSearchChange={handleSearchChange}
                                                          results={results}
                                                          value={value}
                                                        />
                                                      </Grid.Column>
                                                    </Form>
                    <Grid columns={4} stackable textAlign='center'>
  <Grid.Column>
                                <h5> Client:

                                        <table style={{marginLeft: "auto", marginRight: "auto"}}>
                                            <thead>
                                            <tr>
                                                <th style={{padding:"5px", border: "1px solid black"}} scope={"col"}>ID</th>
                                                <th style={{padding:"5px", border: "1px solid black"}} scope={"col"}>Name</th>
                                                <th style={{padding:"5px", border: "1px solid black"}} scope={"col"}>Company</th>
                                                <th style={{padding:"5px", border: "1px solid black"}} scope={"col"}>Person name</th>
                                            </tr>
                                            </thead>

                                            <tbody>
                                            {
                                                BookedPersons.map(item => {
                                                        return (
                                                            <tr>
                                                                <td style={{padding:"5px", border: "1px solid black"}}>{}</td>
                                                                <td style={{padding:"5px", border: "1px solid black"}}>{}_{}</td>
                                                                   <td style={{padding:"5px", border: "1px solid black"}}>{}</td>
                                                                  <td style={{padding:"5px", border: "1px solid black"}}>{}_{}</td>
                                                            </tr>
                                                        )
                                                    }
                                                )
                                            }
                                            </tbody>
                                        </table>

                                    </h5>

                            </Grid.Column>

                    </Grid>
                </Segment>
            </Segment>
        </>

}
export default Client