import React, {useState, useEffect} from 'react'
import axios from 'axios'
import getApiEndPoint from '../utils/getApiEndPoint';

export default function Home() {

  const [data, setData] = useState({});

  useEffect(() => {

    const today = new Date();
    const endpoint = getApiEndPoint() + "/media/bydate";
    // console.log(endpoint);
    axios.put(endpoint, {data: {
      year: today.getFullYear,
      month: today.getMonth,
      day: today.getDate,
    }})
    .then( res => {
      setData(res.data)
    })
    .catch( err => {
      console.log(err.message);
    })

  }, [])

  return (
    <div>
      <h1>
        NASA APOD
      </h1>
      <input
      
        type="date"

      />
      
    </div>
  )
}
