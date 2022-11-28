import React, { useEffect, useState,  Component } from 'react';
import axios from "axios";
import _ from 'lodash'

import {
    Grid,
    Segment, Form, Search
} from 'semantic-ui-react'
import {Link} from "react-router-dom";
import Rooms from "./Components/Client";
const source = _.times(5, () => ({

}))

class Client extends Component {
   state = {
     clients: null,
     loading: false,
     value: ''
   };

   search = async val => {
     this.setState({ loading: true });
     const res = await axios(
       `https://cleanncleardb2.herokuapp.com/CleanNClear/clients/${this.state.value}/`
     );
     const clients = await res.data.results;

     this.setState({ clients, loading: false });
   };

   onChangeHandler = async e => {
     this.search(e.target.value);
     this.setState({ value: e.target.value });
   };

   get renderclients() {
     let clients = <h1>Theres no clients</h1>;
     if (this.state.movies) {
       clients = <Rooms list={this.state.client} />;
     }

     return clients;
   }

   render() {
     return (
       <div>
         <input
           value={this.state.value}
           onChange={e => this.onChangeHandler(e)}
           placeholder="Type something to search"
         />
         {this.renderclients}
       </div>
     );
   }
 }
export default Client