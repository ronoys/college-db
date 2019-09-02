import React from 'react';
import firestore from "./Firestore.js";
import firebase from 'firebase';

class College extends React.Component {


  constructor() {
      super();
      this.state = {
          name:"",
          acceptanceRate:"",
          gpa:"",
          act:"",
          sat:"",
          cost:"",
          
          

      };
  }

  updateInput = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
    
  addCollege = e => {
    e.preventDefault();

    const db = firebase.firestore();
    db.settings({
        timestampsInSnapshots: true
    });
    const collegeRef = db.collection("colleges").add({
        name: this.state.name,
        acceptanceRate: this.state.acceptanceRate,
        gpa: this.state.gpa,
        act: this.state.act,
        sat: this.state.sat,
        cost: this.state.cost,
    });


    this.setState({
        name:"",
        acceptanceRate:"",
        gpa:"",
        act:"",
        sat:"",
        cost:"",
    });
  }


  render() {
    return (
        <form onSubmit={this.addCollege}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            onChange={this.updateInput}
            value={this.state.name}
          />
          <input
            type="number"
            name="acceptanceRate"
            placeholder="Acceptance Rate"
            onChange={this.updateInput}
            value={this.state.acceptanceRate}
          />
          <input
            type="number"
            name="act"
            placeholder="Average ACT"
            onChange={this.updateInput}
            value={this.state.act}
          />
          <input
            type="number"
            name="sat"
            placeholder="Average SAT"
            onChange={this.updateInput}
            value={this.state.sat}
          />
          <input
            type="number"
            name="cost"
            placeholder="Cost"
            onChange={this.updateInput}
            value={this.state.cost}
          />
          <input
            type="number"
            name="gpa"
            placeholder="Average GPA"
            onChange={this.updateInput}
            value={this.state.gpa}
          />
          
          

          <button type="submit">Submit</button>
        </form>
        );
      }
   }
export default College;