import React from "react"

import LIneItem from "./LIneItem";
const ItemsList = ({items,handleCheck,handleDelete}) => {
  return (
    <ul>
        {items.map((item)=>(
            <LIneItem
            item={item}
            key={item.id}
            handleCheck={handleCheck}
            handleDelete={handleDelete}
            
            />

        ))}
      </ul>
  )
}

export default ItemsList