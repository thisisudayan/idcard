import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleModal,add_note } from './dashboardSlice'


const Dashboard = () => {
    const toggleModalState = useSelector((state)=>state.dashboard.modalStatus)
    const notes = useSelector((state)=>state.dashboard.notes)
    const dispatch = useDispatch()



  return (
    <>  

        <h1>{toggleModalState?"sdf":'maruf'}</h1>
        <button onClick={()=>dispatch(toggleModal())}>Test</button>
        <h1>{JSON.stringify(notes)}</h1>
        <button onClick={()=>dispatch(add_note(Date.now()))}>Get Random</button>

    </>
  )
}

export default Dashboard