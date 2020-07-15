import React,{Component} from 'react';

class Navbar extends Component{
    render()
    {
        return(
            <div>

             <nav class="blue">
             <div class="nav-wrapper transparent right">
        
             <ul id="nav-mobile" class="left hide-on-med-and-down">
               <li><a href="sass.html">HOME</a></li>
               <li><a href="badges.html">API</a></li>
               <li><a href="collapsible.html">CONTACT US</a></li>
             </ul>
             <div class="row">
             <div class="col-">
             <input type="text" class="white "></input>
             </div>
             <div class="col-1">
             <button class="btn waves-effect waves-light red" type="submit" name="action">Search</button>
             </div>
        
            
             </div>
             
             
             </div>
             </nav>
             </div>
        )
    }
    
}
export default Navbar;
