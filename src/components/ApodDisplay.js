import React from 'react'
import ReactPlayer from "react-player"

export default function ApodDisplay(props) {
  const {data, showHD} = props;

  return (
    <div
      style={{margin: '5% 0'}}
    >
      <h2>{data.title}</h2>
      { 
        data.copyright 
        ? (<h5>Provided By: {data.copyright}</h5>) 
        : null
      }
      { data.media_type === 'image' 
        ? (<img 
            src={ showHD && data.hdurl ? data.hdurl : data.url }
            style={{maxWidth: '80vw', margin: '3% 0'}}
            alt=''
          />)
        : (<ReactPlayer 
            style={{ margin: '0 auto'}}
            width="60%"
            light={true}
            url={data.url}
          />)
      }
      <h3>APoD for the day of: {data.date}</h3>
      <h4>Explanation: </h4>
      <p
        style={{maxWidth: '60vw', margin: '0 auto'}}
      >{data.explanation}</p>
    </div>
  )
}
