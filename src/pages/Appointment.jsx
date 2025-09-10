import React, { useEffect } from 'react'
import { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext'
import { useState } from 'react'

const Appointment = () => {

  const {docId} = useParams()
  const {doctors} = useContext(AppContext)

  const [docInfo, seTDocInfo] = useState(null)

  const fetchDocInfo = async () =>{
    const docInfo = doctors.find(doc => doc._id === docId)
    seTDocInfo(docInfo)
  }


  useEffect(()=>{
    fetchDocInfo()
  },[doctors,docId])
  
  return (
    <div>
      {/* ......doctor details........ */}
      <div>
        <div>
          <img src={docInfo.image} alt="" /> 
        </div>
      </div>
    </div>
  )
}

export default Appointment