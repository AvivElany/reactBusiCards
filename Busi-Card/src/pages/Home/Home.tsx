import './Home.css'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import Logo from '../../components/Logo/Logo'

export default function Home() {


  return (
    <div className='Home Page'>
        <div className="container-fluid py-5">
        <h1>CLOSE THIS PAGE</h1>
        <h3>IF YOU CAN'T HANDLE MORE CUSTOMERS.</h3>
        <hr />
        
          <p className="para start">Hundreds of people are currently surfing the web looking for a service right like the one that your business is offering.</p>
        
          <h2>Planning your digital transformation</h2>
        
          <div className="para reprecent">
            We start our engagement with a 360˚ strategy and business model assessment that is based on the intersection of your business goals and the needs, interests and aspirations of your target customers. Our focus is on enhancing your relevance in the market by solving the most significant pain points of your customers and providing you the marketing context in which we can continually optimize business performance together.
          </div>
        <h1 className='logo'><Logo /></h1>
        <div className="para reprecent">
          We will work with you to present and resolve critical brand, business model, product and customer experience issues and drive growth for your business.
        </div>

        <Button variant="outline-primary" size="lg">
          <Link to={'/Customers'} >Go Find Out Our Customers</Link>
        </Button> <br></br><br></br>
        <Button variant="outline-success" size="lg">
          <Link to={'/Deals'} >Check Our Deals</Link>
        </Button>
      </div>
    </div>
  )
}
