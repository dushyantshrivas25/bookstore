import React from 'react'
import './PopularBooks.css'
import { useState } from 'react'

import TitileTypeOne from '../../UI/TitileTypeOne/TitileTypeOne'
import { galleryData } from '../../Data/Data'

const PopularBooks = () => {

    const [activeButton,setActiveButton] = useState('all');
    const handleFilterChange = (category)=>{
        setActiveButton(category);
    }

    const filterItems = activeButton === 'all' ? galleryData : galleryData.filter((item)=>
    item.category === activeButton);
  return (
    <section className='PopularBooks'>
        <div className="container popularbooks-container">
            <TitileTypeOne TitleTop={'some quality items'} Title={'Popular Books'}
            ClassName={'popularbooks-title'}/>

<div className="filter-buttons">
    <button
    className={activeButton === 'all' ? 'active': ''}
    onClick={()=>handleFilterChange('all')}
    >
        All
   </button>

    <button
    className={activeButton === 'all' ? 'active': ''}
    onClick={()=>handleFilterChange('Business')}>
        Business
   </button>

    <button
    className={activeButton === 'all' ? 'active': ''}
    onClick={()=>handleFilterChange('Technology')}>
        Technology
   </button>

    <button
    className={activeButton === 'all' ? 'active': ''}
    onClick={()=>handleFilterChange(' Adventure')}>
        Adventure
   </button>

    <button
    className={activeButton === 'all' ? 'active': ''}
    onClick={()=>handleFilterChange('Romantic')}>
        Romantic
   </button>

    <button
    className={activeButton === 'all' ? 'active': ''}
    onClick={()=>handleFilterChange('Fictional')}>
        Fictional
   </button>
</div>

<div className="gallery">
{
    filterItems.map(({name,writer,price,image},index)=>{
        return(
            <div className="gallery-items" key={index}>
                <div className="popularbook-image">
                    <img src={image} alt="" />
                </div>
                <div className="popularbook-info">
                    <h4>{name}</h4>
                    <div><small>{writer}</small></div>
                    <h5><span>{price}</span></h5>
                </div>
            </div>
        )
    })
}
</div>
    </div>
    </section>
  )
}

export default PopularBooks