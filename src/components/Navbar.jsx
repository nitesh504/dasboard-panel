import React from 'react'
import { useEffect } from 'react'
import {AiOutlineMenu} from 'react-icons/ai'
import {FiShoppingCart} from 'react-icons/fi'
import {BsChatLeft} from 'react-icons/bs'
import {RiNotifications3Line} from 'react-icons/ri'
import {MDkeyboardArrowDown} from 'react-icons/md'
import {TooltipComponent} from '@syncfusion/ej2-react-popups'
import avatar from "../data/avatar.jpg"
import {Cart, Chat, Notifications, Userprofile} from '.';
import {useStateContext} from '../contexts/ContextProvider';
const Navbutton = ({title, customFunc, icon, color, dotcolor}) => (
  <TooltipComponent content={title} position='BottomCenter'>

  </TooltipComponent>
)


const Navbar = () => {
  const {activeMenu, setActiveMenu} = useStateContext();
  return (
    <div className='flex justify-between p-2 md:mx-6 relative'>
      <Navbutton title="Menu" customFunc={()=>setActiveMenu((preActiveMenu)=> !preActiveMenu)} color="blue" icon ={<AiOutlineMenu/>}/>
    </div>
  )
}

export default Navbar
