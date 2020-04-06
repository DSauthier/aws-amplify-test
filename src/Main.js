import React, { Component } from 'react';
import axios from 'axios'
import './Main.css'
import AnswerBoard from './AnswerBoard'
import UserForm from './UserForm'

const BASE_API_URL = "https://covid-19-statistics.p.rapidapi.com/reports"
let query = {
  region_province: null,
  iso: null,
  region_name: "",
  date: null,
  q: null
};
class Main extends Component{
constructor(props){
  super(props);
  this.state = {Region: "",ISO:"", CountryName:"",LatestDate:"",cases:"", deaths:"",recoveries:""}
  this.getInfo = this.getInfo.bind(this)
  this.FormInformation = this.FormInformation.bind(this)
  this.changeInfo = this.changeInfo.bind(this)
}

  getInfo(InfoFromChild){
    query.region_name = InfoFromChild.Country;
    // query.region_province = InfoFromChild.City;  
      console.log(query+"THIS IS QUERY")
let headers={
  "x-rapidapi-host": "covid-19-statistics.p.rapidapi.com",
  "x-rapidapi-key": "4cae8f30camsh5d38ea84ab6b306p12841bjsne29b87fb9f1f"
};
  let req = axios.get(BASE_API_URL,{headers:headers, params:query})
  .then((res)=>{
    let data = res.data.data[0];
    console.log(res.data.data)
  this.setState({
    Region:data.region.province,
     ISO:data.region.iso,
    CountryName:data.region.name,
    LatestDate:data.last_update,
    deaths:data.deaths,
    cases: data.confirmed,
    recoveries: data.recovered,

  })
  
  })
  .catch((er)=>{console.log(er)})
}

FormInformation(info){
// console.log(info)
}
  OnClickHandler(evt) {
    evt.preventDefault();
    console.log(evt)
    // this.FormInformation("hello");
    // this.getInfo();

  }
  changeInfo(InfoFromChild){
    // this.setState({CountryName: InfoFromChild

    // })
    this.getInfo(InfoFromChild);
    // console.log(this.state)

  }

  render(){
    return(
      <div className="AnswerBoard">
        <UserForm changeInfo={this.changeInfo}/>

        <AnswerBoard Region={this.state.Region} iso={this.state.iso} CountryName={this.state.CountryName} LatestDate={this.state.LatestDate} cases={this.state.cases} deaths={this.state.deaths} recoveries={this.state.recoveries}/>
       
      </div>
    )
  }
}

export default Main