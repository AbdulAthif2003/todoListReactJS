import React from 'react'

import { FaTrashAlt } from "react-icons/fa";
import ItemsList from './ItemsList';


const Content = ({items,handleCheck,handleDelete}) => {
  

  return (
    <>
      {(items.length) ? (
        <ItemsList 
        items={items}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
        />
      ):(
        <p>Your list is empty</p>
      )}
      
    </>
    
  )
}

export default Content