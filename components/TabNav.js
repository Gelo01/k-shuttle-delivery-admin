import { useState } from "react";

const TabNav = ({  }) => {
  const [isOpen, setIsOpen] = useState(false);
  const navTogglerHandler = () => setIsOpen(!isOpen);
    return (
      <div className="navbar-admin position-fixed  shadow-none p-3 mb-5 bg-dark rounded">
        <nav className="d-flex justify-space-around">
          <button  onClick={navTogglerHandler}
            className="button-nav  d-inline-block"
            
          >
            <i class="bi bi-list text-dark"></i>
          </button>
        </nav>
      </div>
    );
  };
  
  export default TabNav;