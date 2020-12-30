import React, {useState, useEffect} from 'react'
import axios from 'axios'
import getApiEndPoint from '../utils/getApiEndPoint';
import getTodaysData from '../utils/getTodaysData';
import stringToDateData from '../utils/stringToDateData';
import ApodDisplay from './ApodDisplay';

export default function Home() {

  const [state, setState] = useState({apodData: {}, showHD: true, message: ""});

  const requestApod = (evnt) => {
    const dateInput = evnt.target;
    const selectedDate = dateInput.value;
    if (selectedDate < dateInput.min || selectedDate > dateInput.max) {
      setState({...state, 
        message: `Select a date between\n${dateInput.min} and ${dateInput.max}`
      })
    } else {
      setState({...state, message: ""})
      fetchApodData(stringToDateData(selectedDate))
    }
  }

  const fetchApodData = async (todaysData) => {
    try {
      const endpoint = getApiEndPoint() + "/media/bydate";
      const response = await axios.put(endpoint, todaysData)
      setState({...state, apodData: response.data})
    } catch (error) {
      console.log(error.message || error);
    }
  }

  useEffect( () => {
    fetchApodData(getTodaysData(false))    
  }, [])

  return (
    <div>
      <h1>
        NASA APOD
      </h1>
      <input
        style={{fontSize: 25}}
        type="date"
        onChange={requestApod}
        max={getTodaysData(true)}
        min="1995-06-16"
      />
      <h3>{state.message}</h3>
      <ApodDisplay data={state.apodData} showHD={state.showHD}/>
      <button
        style={{margin: '2%', cursor: 'pointer', border: 'none', borderRadius: 15, backgroundColor: '#222', color: 'white', padding: 20, fontSize: 'large', fontWeight: 300}}
        onClick={() => {setState({...state, showHD: !state.showHD})}}
      >
        {state.showHD ? "Display SD Images" : "Display HD Images" }
      </button>
    </div>
  )
}
