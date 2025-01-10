import Header from '../components/category navbar/Header'
import Carousel from '../components/home/Carousel'
import FeaturedCategories from '../components/home/FeaturedCategories'
import Popular from '../components/home/Popular'
import Coupons from '../components/home/Offers'
import Features from '../components/home/Features'

const Home = () => {
  
  return (
  <div className=''>
       <Header/>
       <Carousel/>
       <FeaturedCategories/>
       <Popular/>
       <Coupons/>
       <Features/>
        
        
  </div>
  )
}

export default Home