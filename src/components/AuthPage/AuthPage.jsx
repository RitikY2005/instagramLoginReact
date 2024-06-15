import './AuthPage.css';
import instagram from '../../assets/instagram.png';
import { Link } from 'react-router-dom';

function AuthPage( {signinOrLogin=false} ){   // signOrLog - true means signin and false means login 
	return (
    <div className="form-container">
       
       <div className='logo'>
       	<img src={instagram} alt="instagram logo"/>
       </div>

       <form action="" id="form" >
       	  
       	  {(signinOrLogin) && (
       	  	<>
             <div className="mobile-div">
       	 	 <input type="text" placeholder="Mobile Number or Email" name="mobile" />
       	 </div>

       	 <div className="fullname-div">
       	 	 <input type="text" placeholder="FullName" name="fullname" />
       	 </div>
       	  	</>
       	  	)}

       	 

       	 <div className="username-div">
       	 	 <input type="text" placeholder="Phone Number , userName or Email" name="username" />
       	 </div>

       	 <div className="password-div">
       	 	 <input type="password" placeholder="Password" name="password" />
       	 </div>

       	 <div className="submit-div">
       	 	 <button type="submit"> {(signinOrLogin)?'Sign up' : 'Sign in'}  </button>
       	 </div>

       </form>

       <div className="other-action" >
      
	      {   signinOrLogin?
	       	  ( <p>have an account? <Link to="/login">Log in </Link></p>)
	       	  :
	       	  ( <p>Don't have an account? <Link to="/signin">Sign up </Link></p>)

       	  }
       </div>

    </div>
		)
}

export default AuthPage;