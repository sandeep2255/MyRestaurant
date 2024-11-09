import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = ()=>{
    return(
        <nav className="navbar">
            <div className="nav-brand">MyRestaurant</div>
            <ul className="nav-links">
                <li><Link to="/dashboard">Home</Link></li>
                <li><Link to="/take-order">Take Order</Link></li>
                <li><Link to="/orders-in-progress">Orders in Progress</Link></li>
                <li><Link to="/completed-orders">Ready to Serve</Link></li>
                <li><Link to="/menu-management">Menu Management</Link></li>
                <li><Link to="/prep-time-tracker">Preparation Time</Link></li>
                <li><Link to="/settings">Settings</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar;