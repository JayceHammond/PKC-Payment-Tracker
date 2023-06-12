import React, {useEffect, useState} from 'react'
import './App.css'

function App(){

  const [backendData, setBackendData] = useState([{}])

  useEffect(() => {
    fetch("/api").then(
      response => response.json()
    ).then(
      data => {
        setBackendData(data)
      }
    )
  }, [])

  return(
    <div className="student">
      {/*
      {(typeof backendData.students === 'undefined') ? (
        <p>Loading...</p>
      ) : (
        backendData.students.map((student, i) => (
          <p key={i} className="student">{student}</p>
        ))
      )}
        */}

        <p> {JSON.stringify(backendData)} </p>
    </div>
  )
}


export default App