import '../style/nav.css'
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse ,faUsers ,faChalkboardUser  , faPlus} from '@fortawesome/free-solid-svg-icons'
function Navbar(){
    return(
    <>
 
<nav className="navbar navbar-light bg-light fixed-top">
  <div className="container-fluid">
    <a className="navbar-brand">Dashboard</a>
    <p className='welcomeTeaxt'>know all about our ceneter through the dashboard </p>
    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="offcanvas offcanvas-end text-bg-light" tabindex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
      <div className="offcanvas-header">
        <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">Dashboard</h5>
        <button type="button" className="btn-close btn-close-dark" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div className="offcanvas-body">
        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
          <li className="nav-item">
            <Link to={'/'} className="nav-link active" aria-current="page" > <FontAwesomeIcon className='icon' icon={faHouse} style={{color: "#ee4e34",}} />Overview</Link>
          </li>
          <li className="nav-item">
            <Link to={'/teacher'} class="nav-link" > <FontAwesomeIcon className='icon' icon={faChalkboardUser}  style={{color: "#ee4e34",}}/>Teachers</Link>
          </li>
          <li className="nav-item">
            <Link to={'/student'} class="nav-link" > <FontAwesomeIcon className='icon' icon={faUsers} style={{color: "#ee4e34",}} />Student</Link>
          </li>
          
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle"  role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Dropdown
            </a>
            <ul className="dropdown-menu dropdown-menu-light">
              <li><Link to={'/addstudent'} className="dropdown-item" > <FontAwesomeIcon className='icon' icon={faPlus}style={{color: "#ee4e34",}}/>add Student</Link></li>
              <li><Link to={'/addteacher'} className="dropdown-item" > <FontAwesomeIcon className='icon' icon={faPlus}style={{color: "#ee4e34",}}/>add teacher</Link></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </div>
</nav>
    </>
    )
}
export default Navbar;