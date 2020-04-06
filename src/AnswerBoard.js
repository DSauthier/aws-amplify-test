import React,{Component} from 'react'
import './Main.css'
import axios from 'axios'

class AnswerBoard extends Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div>
        <div className="AnswerBox">
          <label htmlFor="region" >City:</label>
          <p name="region" id="region" >{this.props.Region}</p>
        </div>
        <div className="AnswerBox">
          <label htmlFor="iso" >Country Iso:</label>
          <p name="iso" id="iso" >{this.props.iso}</p>
        </div>
        <div className="AnswerBox">
          <label htmlFor="CountryName" >Country:</label>
          <p name="CountryName" id="CountryName" >{this.props.CountryName}</p>
        </div>
        <div className="AnswerBox">
          <label htmlFor="LatestDate" >Latest Update:</label>
          <p name="LatestDate" id="LatestDate" >{this.props.LatestDate}</p>
        </div>
        <div className="AnswerBox">
          <label htmlFor="deaths" >Deaths:</label>
          <p name="deaths" id="deaths" >{this.props.deaths}</p>
        </div>
        <div className="AnswerBox">
          <label htmlFor="cases" >Confirmed Cases:</label>
          <p name="cases" id="cases" >{this.props.cases}</p>
        </div>
        <div className="AnswerBox">
          <label htmlFor="recoveries" >Recovered Cases:</label>
          <p name="recoveries" id="recoveries" >{this.props.recoveries}</p>
        </div>
      </div>
    )
  }
}

export default AnswerBoard