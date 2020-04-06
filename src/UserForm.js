import React, { Component } from 'react'
import './Main.css'
import axios from 'axios'

class UserForm extends Component {
  constructor(props) {
    super(props);
    this.state = {Country:"" , City:""}
    this.handleChange = this.handleChange.bind(this);
    this.sendInfoToParent = this.sendInfoToParent.bind(this)
  }

  handleChange(evt){
    this.setState({
      [evt.target.name]: evt.target.value
    });
  }
  sendInfoToParent(evt){
    evt.preventDefault();
    this.props.changeInfo(this.state)


  }

  render() {
    return (
      <div>
        <form onSubmit={this.sendInfoToParent}>
          <label>Search for Information:</label>
          <label htmlFor="Country">Country</label>
          <input 
          type="text"
          placeholder="Country"
          id="Country" 
          value={this.state.Country}
          name="Country"
          onChange={this.handleChange}/>
          <label htmlFor="City">City</label>
          <input
            type="text"
            placeholder="City"
            id="City"
            value={this.state.City}
            name="City"
            onChange={this.handleChange} />
          <button>Get Info</button>
        </form>
      </div>
    )
  }
}

export default UserForm