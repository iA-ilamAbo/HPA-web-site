import React from 'react'

export default function Reparation() {
  return (
    <form className='Reparation-content'>
      <div className='Reparation-form'>&nbsp;&nbsp;
      <label for="marque">Marque</label>&nbsp;&nbsp;
        <select id="choix" name="choix">
            <option value="option1">Acura</option>
            <option value="option2">Alfa Romeo</option>
            <option value="option3">Alpine</option>
            <option value="option4">Aston Martin</option>
            <option value="option4">Audi</option>
            <option value="option4">Bentley</option>
            <option value="option4">BMW</option>
            <option value="option4"> Abarth</option>
            <option value="option4">Bugatti</option>
            <option value="option4">Buick</option>
            <option value="option4">Cadillac</option>
            <option value="option4">Chevrolet</option>
            <option value="option4">Chrysler</option>
            <option value="option4">Citroën</option>
            <option value="option4">Corvette</option>
            <option value="option4">Dacia</option>
            <option value="option4">Daihatsu</option>
            <option value="option4">Dodge</option>
            <option value="option4">DS Automobiles</option>
            <option value="option4">Ferrari</option>
            <option value="option4">Fiat</option>
            <option value="option4">Fisker</option>
            <option value="option4">Ford</option>
            <option value="option4">Genesis</option>
            <option value="option4">GMC</option>
            <option value="option4">Holden</option>
            <option value="option4">Honda</option>
            <option value="option4">Hyundai</option>
            <option value="option4">Infiniti</option>
            <option value="option4">Isuzu</option>
            <option value="option4">Jaguar</option>
            <option value="option4">Jeep</option>
            <option value="option4">Kia</option>
            <option value="option4">Koenigsegg</option>
            <option value="option4">Lada</option>
            <option value="option4">Lamborghini</option>
            <option value="option4">Lancia</option>
            <option value="option4">Land Rover</option>
            <option value="option4">Lexus</option>
            <option value="option4">Lincoln</option>
            <option value="option4">Lotus</option>
            <option value="option4">Maserati</option>
            <option value="option4">Maybach</option>
            <option value="option4">Mazda</option>
            <option value="option4">McLaren</option>
            <option value="option4">Mercedes-Benz</option>
            <option value="option4">Mercury</option>
            <option value="option4">MG</option>
            <option value="option4">Mini</option>
            <option value="option4">Mitsubishi</option>
            <option value="option4">Morgan</option>
            <option value="option4">Nissan</option>
            <option value="option4">Noble</option>
            <option value="option4">Opel</option>
            <option value="option4">Pagani</option>
            <option value="option4">Peugeot</option>
            <option value="option4">Pininfarina</option>
            <option value="option4">Plymouth</option>
            <option value="option4">Polestar</option>
            <option value="option4">Pontiac</option>
            <option value="option4">Porsche</option>
            <option value="option4">Proton</option>
            <option value="option4">Ram</option>
            <option value="option4">Renault</option>
            <option value="option4">Rolls-Royce</option>
            <option value="option4">Rover</option>
            <option value="option4">Saab</option>
            <option value="option4">Saleen</option>
            <option value="option4">Saturn</option>
            <option value="option4">Scion</option>
            <option value="option4">SEAT</option>
            <option value="option4">Škoda</option>
            <option value="option4">Smart</option>
            <option value="option4">Spyker</option>
            <option value="option4">SsangYong</option>
            <option value="option4">Subaru</option>
            <option value="option4">Suzuki</option>
            <option value="option4">Tatra</option>
            <option value="option4">Tesla</option>
            <option value="option4">Toyota</option>
            <option value="option4">Triumph</option>
            <option value="option4">TVR</option>
            <option value="option4">Vauxhall</option>
            <option value="option4">Volkswagen</option>
            <option value="option4">Volvo</option>
            <option value="option4">Wiesmann</option>
        </select>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
       <label htmlFor='Model'>Model </label>&nbsp;&nbsp;
       <input className='reparation-input' name='Model' type='Model' placeholder='entrer le model' />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

       <label htmlFor='Motorisation'>Motorisation </label>&nbsp;&nbsp;
        <select id="motorisation" name="motorisation">
            <option value="option1">Diesel</option>
            <option value="option2">Essence</option>
        </select>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
       <label htmlFor='Panne'>Détail</label>&nbsp;&nbsp;
       <input className='reparation-input' name='Panne' type='texte'  placeholder="info sur la panne" />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
       <br/><br/>
       <button className='Reparation-btn'> Demander un devis de réparation </button>&nbsp;&nbsp;
      </div>
  </form>
  )
}

