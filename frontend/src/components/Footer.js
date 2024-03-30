
import React from 'react';
import Contact from './Contact';
import About from  './About';
import {Link} from 'react-router-dom';



export default function Footer() {
  return (
    <footer className='Footer'>
    {/* <Link className='Footer-link' to='/about'>About</Link> */}
    <p>Qui sommes-nous?</p>
    <p>Nos services</p>
    <p> Conditions générales de vente</p>
    <p>Livraison</p>
    <Link className='Footer-link' to='/Catalogue'>Catalogue</Link>
    <Link className='Footer-link' to='/Fournisseurs'>Fournisseurs & Fabriquants</Link>
    <Link className='Footer-link' to='/MarquesA'>Marques de Voitures</Link>
    {/* <Link className='Footer-link' to='/Blog'>Blog</Link> */}
    <p>730 bd Aba Chouaïb Doukali<br/> Idrissia I Hay farah<br/> Casablanca - Maroc<br/> tel: 0522812203</p>
    <div class="Footer-link">
    <Link className='Footer-link' to='/Contact'>Contact</Link>
                                                           <br/> <a class="align-items-center justify-content-center service whatsapp" href="https://api.whatsapp.com/send?phone=447700176357" target="_blank" rel="noopener noreferrer"><img src="https://cdn.distriauto.eu/build/images/twilio/whatsapp.svg" width="40" height="40" alt="Whatsapp"/></a>
                                                                                        <a class="service messenger" href="https://m.me/distriautoParts/" target="_blank" rel="noopener noreferrer"><img src="https://cdn.distriauto.eu/build/images/twilio/messenger.svg" width="40" height="40" alt="Messenger"/></a>
                                                        <div class="align-items-center justify-content-center service chat c-pointer" data-chat="" hidden="" data-controller="emitter" data-emitter-evt-value="twilio:openChat" data-action="click->emitter#emit">
                                {/* <img src="https://cdn.distriauto.eu/build/images/twilio/chat.svg" width="45" height="45" alt="LiveChat"/> */}
                            </div>
                        </div>
    
    {/* <p>&copy2024</p> */}
    </footer>
  )
}