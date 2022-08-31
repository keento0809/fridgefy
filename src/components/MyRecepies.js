import React, {useContext} from 'react'
import { DataContext } from '../helper/DataContext'; 

const MyRecepies = () => {
  const { myRecepies } = useContext(DataContext);
  return (
    <div>MyRecepies</div>
  )
}

export default MyRecepies
