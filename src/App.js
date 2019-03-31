import React, { Component } from 'react';
import './App.css';
import Form from './components/Form/Form';
import Result from './components/Result/Result'

class App extends Component {
  state = {
    temp:"",
    humdity:"",
    country:"",
    city:"",
    errors:[]
  };

  //validation
  validateCity = async(name)=>{
    const error_msg = [];
    //characters only
    const pattern = /^[a-z]{1,20}$/;
    //name required
    if(name.length === 0){
      error_msg.push("Enter City Name") ;
    }else{
      if(!name.match(pattern)){
        error_msg.push("City Name not valid") ;
      }
    }
    if(error_msg.length !== 0){
      await this.setState({
          errors:error_msg
      });
    }else{
      return 200;
    }
   
  } 
  sendData =async (event)=>{
    //removing refresh after submit
    event.preventDefault();
    //get form inputs
    const city = event.target.elements.city.value;
    //validate city name
    const result = await this.validateCity(city);
    if(result === 200){
      //get data
      await this.fetchData(city);
    }
   
  }
  fetchData = async(cityName)=>{
    const fetchData = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=9f8a9aaf54b0155bf971ebb98550a78c`);
    const data = await fetchData.json();
    //process incoming data
    if(data && (data.cod !==200)){
      this.setState({
        errors:["City not exist"]
    });
    }else{
      this.setState({
        temp:data.main.temp,
        humdity:data.main.humidity,
        country:data.sys.country,
        city:data.name,
        errors:[]
      });
    }
  }
  
  render() {
    return (
      <div className="App">
      <Form sendData={this.sendData} errors = {this.state.errors} />
      <Result result={this.state}/>
      </div>
    );
  }

}

export default App;
