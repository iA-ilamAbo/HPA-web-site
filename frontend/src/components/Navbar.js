import React from 'react';
import {Link} from 'react-router-dom';
import LogoHPA from '../Assets/LogoHPA.png';


export default function Navbar() {
return (
<nav>

    <Link className='Navbar-link' to='/'>
      <img src={LogoHPA} alt='Logo HPA' style={{ width: '100px', height: 'auto' }} />
    </Link>

    <div className='Navbar'>
      <Link className='Navbar-link' to='/about'>About</Link>
     
      <Link className='Navbar-link' to='/Piecesa'> Pièces Auto</Link>

      <Link className='Navbar-link' to='/Categorie'>Categorie &nbsp;
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" class="bi bi-list" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
      </svg>
      </Link>

      

      <Link className='Navbar-link' to='/Reparation'>Réparation Auto &nbsp;
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-car-front-fill" viewBox="0 0 16 16">
      <path d="M2.52 3.515A2.5 2.5 0 0 1 4.82 2h6.362c1 0 1.904.596 2.298 1.515l.792 1.848c.075.175.21.319.38.404.5.25.855.715.965 1.262l.335 1.679q.05.242.049.49v.413c0 .814-.39 1.543-1 1.997V13.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1.338c-1.292.048-2.745.088-4 .088s-2.708-.04-4-.088V13.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1.892c-.61-.454-1-1.183-1-1.997v-.413a2.5 2.5 0 0 1 .049-.49l.335-1.68c.11-.546.465-1.012.964-1.261a.8.8 0 0 0 .381-.404l.792-1.848ZM3 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2m10 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2M6 8a1 1 0 0 0 0 2h4a1 1 0 1 0 0-2zM2.906 5.189a.51.51 0 0 0 .497.731c.91-.073 3.35-.17 4.597-.17s3.688.097 4.597.17a.51.51 0 0 0 .497-.731l-.956-1.913A.5.5 0 0 0 11.691 3H4.309a.5.5 0 0 0-.447.276L2.906 5.19Z"/>
      </svg> 
      </Link>

      <Link className='Navbar-link' to='/Contact'>Contact</Link>

      <Link className='Navbar-link' to='/login'>Login &nbsp;
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
      <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
      </svg>
      </Link>
       
      <Link className='Navbar-link' to='/bag'>
      {/* <img src={bagHPA} alt='bag HPA' 
      style={{ width: '40px', height: 'auto'}} /> */}
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart-check-fill" viewBox="0 0 16 16">
      <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0m7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0m-1.646-7.646-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L8 8.293l2.646-2.647a.5.5 0 0 1 .708.708"/>
      </svg>
      </Link>
    </div>
      
    {/* <form className='Navbar-link' method="get" action="/pieces-auto/recherche" class="autocomplete" data-controller="form--autocomplete" data-form--autocomplete-dropdown-class="autocomplete__dropdown__main-search" data-form--autocomplete-url-value="/ajax/autocomplete" data-action="submit->form--autocomplete#go" data-form--autocomplete-focus-param="true" >
      <div class="mb-0 mt-2">        
        <div class="input-group input-group--btn-inside position-relative" data-controller="form--input-clear"><input type="search" name="q" required="required" data-action="input->form--autocomplete#search keydown->form--autocomplete#changeFocus focus->form--autocomplete#focus" data-form--autocomplete-target="input" class="text-truncate form-control" data-hj-allow="" placeholder="Entrer la référence ou le nom de la pièce" autocomplete="off" data-form--input-clear-target="input"/>
          <button class="btn btn-primary" type="submit">
            <i class="fa fa-search"></i>
          </button>
        </div>
      </div>
    </form>      */}
      
      
     


</nav>
  )
}



