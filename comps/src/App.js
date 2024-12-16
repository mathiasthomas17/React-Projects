import React from 'react'
import Button from './Button'
// Import React Icon
import { MdDriveFileMoveOutline } from "react-icons/md";
import { MdFoundation } from "react-icons/md";
import { MdHourglassFull } from "react-icons/md";
import { MdOutlineAccountTree, MdMapsHomeWork } from "react-icons/md";


const App = () => {
  const handleClick = ()=>{
    console.log('çliked')
  }
  return (
    <div>
    <div>
      <Button primary rounded onClick ={handleClick}><MdFoundation/> Click Here</Button>
    </div>
    <div>
      <Button secondary> <MdMapsHomeWork/> Hire</Button>
    </div>
    <div>
      <Button danger outline> <MdDriveFileMoveOutline/> Follow Page</Button>
    </div>
    <div>
      
      <Button success > <MdHourglassFull/> Contact Us</Button>
    </div>
    <div>
      <Button warning> <MdOutlineAccountTree/> Location</Button>
    </div>
    </div>
  )
}

export default App