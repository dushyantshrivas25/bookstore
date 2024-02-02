import React from 'react'
import Header from '../Components/Header/Header'
import Brands from '../Components/Brands/Brands'
import FeaturesBooks from '../Components/FeaturesBooks/FeaturesBooks'
import BestSellingBooks from '../Components/BestSellingBooks/BestSellingBooks'
import PopularBooks from '../Components/PopularBooks/PopularBooks'
import Quote from '../Components/Quote/Quote'
import LatestArticle from '../Components/LatestArticle/LatestArticle'

const Home = () => {
  return (
    <>
    <Header/>
    <Brands/>
    <FeaturesBooks/>
    <BestSellingBooks/>
    <PopularBooks/>
    <Quote/>
    <LatestArticle/>

    </>
  )
}

export default Home