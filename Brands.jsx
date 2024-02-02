import React from 'react'
import { brandsData } from '../../Data/Data'
import './Brands.css'

const Brands = () => {
  return (
    <div className='Brands'>
        <div className="container brands-container">
            {
                brandsData.map(({img},index)=>{
                    return(
                        <div className="brand" key={index}> 
                            <img src={img} alt="" />
                        </div>
                    )
                })
            }
        </div>
        </div>
  )
}

export default Brands