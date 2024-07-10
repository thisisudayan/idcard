import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleModal,add_note } from './dashboardSlice'
import Theme1 from '../themes/theme1'

const Dashboard = () => {
    const toggleModalState = useSelector((state)=>state.dashboard.modalStatus)
    const notes = useSelector((state)=>state.dashboard.notes)
    const dispatch = useDispatch()
  return (
    <div>  
        <Theme1 />
    </div>
  )
}

export default Dashboard