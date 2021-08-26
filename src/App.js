import React,{useEffect} from 'react'
import "./styles.css"
// import axios from "axios"
import {connect} from "react-redux"
import { getCountries } from './actions'

const App = props  =>{
  // const [countries,setCountries] = useState([]);

  useEffect (() =>{
    // axios 
    //  .get("https://restcountries.eu/rest/v2/all")
    //  .then(response=>setCountries(response.data))
    //  .catch(error =>console.log({error}))
    props.getCountries();
  },[]);
  return (
    <div className="App">
      <h1> React Dersleri</h1> 
      <h2>Redux Thunk Middleware</h2>
      {
       props.isLoading ? <p>Yükleniyor...</p> : props.countries.map(country =>{
          return (
            <div key={country.name}>
            <h3>{country.name}</h3>
            <h4>{country.capital}</h4>
            <p>
              <img
                src={country.flag}
                alt={country.name}
                style={{ width: "100px" }}
              />
            </p>
          </div>
          )
        })
      }
    </div>
  )
}

const mapStateToProps = state =>{
  return {
    countries :state.countries,
    isLoading:state.isLoading
  }
}


export default connect (mapStateToProps,{getCountries})(App)