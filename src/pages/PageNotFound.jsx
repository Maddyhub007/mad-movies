import pagenotfound from '../assets/pagenotfound.jpg';
import { Link } from 'react-router-dom';

export const PageNotFound = () => {
  return (
   <div className="container">
    <img src={pagenotfound} className='img-fluid' />
    <p className='text-center'>
      <Link to="/" className="btn btn-danger"
        
      >Goto Home Page</Link>
    </p>
   </div>
  )
}

