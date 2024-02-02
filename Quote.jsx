import React from 'react'
import './Quote.css'
import TitileTypeTwo from '../../UI/TitileTypeTwo/TitileTypeTwo'
import { quoteData } from '../../Data/Data'

const Quote = () => {
  return (
    <section className='Quote'>
        <div className="container quote-cotnainer">
            <TitileTypeTwo Title={'Quote of the day'} ClassName={'quote-title'}/>
            <article>{
                quoteData.map(({quote,speaker},index)=>{
                    return(
                        <article key={index}>
                            <p>{quote}</p>
                            <h5>{speaker}</h5>

                        </article>

                    )
                })
                }
                
            </article>
        </div>
    </section>
  )
}

export default Quote