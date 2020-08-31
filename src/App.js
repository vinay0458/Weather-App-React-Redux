import React, { StyleSheet, Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchData, setCurrentWeatherData } from './actions/index';
import Button from './Component/Button';
import TodayWeather from './Component/TodayWeather';
import styles from './App.css';
class App extends Component {
  constructor(props) {
    super(props);
    this.state={
      city:'',
      weatherData:'',
      isInputValid: false
    }
  }
  componentDidUpdate(prevProps,prevState) {
    console.log(this.props.currentWeatherData);
    if(!!this.props.currentWeatherData && prevProps.currentWeatherData !== this.props.currentWeatherData) {
      this.setState({
        isInputValid: true
      });
    }
  }

  getCityName=(e)=>{
    this.setState({city:e.target.value},() =>{
        if(!this.state.city){
          this.setState({
            isInputValid: false
          });
        }
    });
  }
  submitCity=()=>{
    this.props.fetchData(this.state.city);
  }

  render() {
    return (
      <div className="App">
        <div className="searchCity">
          <input type="text" value={this.state.city} className="inputBox" placeHolder= "Enter City" onChange={(e)=>this.getCityName(e)}/>
          <Button onClick={()=>this.submitCity(this)} text="submit City"/>
        </div>
        {this.state.isInputValid &&
          <div className="todayWeather">
            <TodayWeather city={this.state.city} {...this.props.currentWeatherData}/>
          </div>
        }
      </div>
    )
  }
}

const mapStateToProps = state => ({
  currentWeatherData : state.getWeatherData.currentWeatherData
})

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    fetchData: fetchData
  }, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
