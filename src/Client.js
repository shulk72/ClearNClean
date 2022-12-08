import React, { useEffect, useState,  Component } from 'react';
import axios from "axios";
import _ from 'lodash'

import {
    Grid,
    Segment, Form, Search, Container
} from 'semantic-ui-react'
import {Link} from "react-router-dom";
import Cli from "./Components/Client";



class Client extends Component {
   state = {
     clients: null,
     loading: false,
     clie : null,
     value: ''
   };

   search = async val => {
     this.setState({ loading: true });

     const res = await axios(  `https://cleanncleardb2.herokuapp.com/CleanNClear/clients/${this.state.value}`
     );
     const clients = await res.data;

        console.log(res.data)
     this.setState({ clients, loading: false });
   };

   onChangeHandler = async e => {
     this.search(e.target.value);
     this.setState({ value: e.target.value });
   };


   get renderclients() {
//
//          axios.get(`https://cleanncleardb2.herokuapp.com/CleanNClear/clients`).then((res) => {
//                  const clie = res.data
//                   this.setState({ clie});
//                          console.log(clie)
//                     }, (error) => {
//                         console.log(error);
//                     }
//                 );



     let clients = <h1>Please search with Client id</h1>;
     if (this.state.clients) {
       clients = <Cli company={this.state.clients.company}
                        phone = {this.state.clients.phone}
                        firstname = {this.state.clients.firstname}
                        lastname = {this.state.clients.lastname}   />;
     }

     return clients;
   }


   render() {
     return (
       <div>
         <input
           value={this.state.value}
           onChange={e => this.onChangeHandler(e)}
           placeholder="Type id and then space"
         />
         {this.renderclients}
       </div>
     );
   }
 }
export default Client