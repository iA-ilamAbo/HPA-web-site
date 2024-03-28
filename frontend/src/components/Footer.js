
import React from 'react';
import Contact from './Contact';
import Blog from './Blog';
import About from  './About';
import {Link} from 'react-router-dom';



export default function Footer() {
  return (
    <footer className='Footer'>
    <Link className='Footer-link' to='/about'>About</Link>
    <Link className='Footer-link' to='/Contact'>Contact</Link>
    <Link className='Footer-link' to='/Blog'>Blog</Link>
    <p>730 bd Aba Chouaïb Doukali hay Idrissia I Hay farah Casablanca - Maroc-tel: 0522812203</p>
    <p>Qui sommes-nous? Nos valeures</p>
   <p> Conditions générales de vente</p>
    <p>Livraison</p>
    <p>services</p>
    <p>fabriquant</p>
    <p>fournisseurs</p>
    <p>marques voitures</p>
    
    <div class="d-flex align-items-center">
                                                            <a class="align-items-center justify-content-center service whatsapp" href="https://api.whatsapp.com/send?phone=447700176357" target="_blank" rel="noopener noreferrer"><img src="https://cdn.distriauto.eu/build/images/twilio/whatsapp.svg" width="40" height="40" alt="Whatsapp"/></a>
                                                                                        <a class="service messenger" href="https://m.me/distriautoParts/" target="_blank" rel="noopener noreferrer"><img src="https://cdn.distriauto.eu/build/images/twilio/messenger.svg" width="40" height="40" alt="Messenger"/></a>
                                                        <div class="align-items-center justify-content-center service chat c-pointer" data-chat="" hidden="" data-controller="emitter" data-emitter-evt-value="twilio:openChat" data-action="click->emitter#emit">
                                {/* <img src="https://cdn.distriauto.eu/build/images/twilio/chat.svg" width="45" height="45" alt="LiveChat"/> */}
                            </div>
                        </div>
    
    {/* <p>&copy2024</p> */}
    </footer>
  )
}