import React, { Component } from 'react';
import {Cards, Chart, CountryPicker} from './component';
import styles from './App.module.css';
import { fetchData } from './api';

class App extends Component {

    state = {
        data: {},
        country: ''
    }

    async componentDidMount(){
        const fetchedData = await fetchData()
        this.setState({data: fetchedData })
    }

    handleCountryChange = async (country) => {
        
        const fetchedData = await fetchData(country)
        console.log(fetchedData)
        console.log(country)
        this.setState({data: fetchedData, country: country })
    }

    render(){
        const {data} = this.state;
        const {country} = this.state;
        return(
            <div className={styles.container}>
                <h1>COVID-19</h1>
               <Cards data={data} />
               <CountryPicker handleCountryChange={this.handleCountryChange} />
               <Chart data={data} country={country} />
            </div>
        )
    }
}

export default App;