import Features from '../components/Features/Features'
import Header from '../components/Header/Header'
import Pricing from '../components/Pricing/Pricing'
import Services from '../components/Services/Services'

const Home = () => {
  return (
    <div>
        <Header/>
        <Services/>
        <Features/>
        <Pricing/>
    </div>
  )
}

export default Home