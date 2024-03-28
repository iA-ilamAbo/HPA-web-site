import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

function Recherche() {
  return (
    <div>
      {/* Utilisation du composant Recherche */}
      {/* <form onSubmit={handleSubmit}> */}
      {/*   <input type="text" placeholder="entrer la marque" /> */}
      {/*   <button type="submit"> */}
      <div>
        <FontAwesomeIcon icon={faSearch} />
      </div>
      {/*   </button> */}
      {/* </form> */}
    </div>
  );
}

export default Recherche;
