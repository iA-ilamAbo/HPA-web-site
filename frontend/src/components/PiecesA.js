
import React from 'react'

export default function PiecesA() {
  return (
    

    <form className='PiecesA-content'>
    <div class="col-lg form-search-vehicle-all__vehicle">
                        <div class="rounded-bordered bg-white fs-xsmall">
                            <p class="h6 font-inherit fs-base text-center mb-3">Par modèle</p>
                                                        



<form name="search_vehicle" method="get" action="/ajax/search/vehicle/" data-controller="form--search-by-model" data-action="submit->form--search-by-model#submit" data-form--search-by-model-hub-route-value="/search/vehicle/hub/set">




<div class="mb-1">
                    <div class="input-prepend input-prepend--active" data-prepend="1" data-select-start-open-value="1" data-select-focus-on-open-value="0" data-select-close-on-select-value="0" data-select-trans-value="{&quot;placeholder&quot;:&quot;Marque&quot;}" data-select-back-target-value="form--search-by-model">    <select id="search_vehicle_manufacturer" name="search_vehicle[manufacturer]" required="required" autocomplete="off" data-action="mousedown->form--search-by-model#fullscreen change->form--search-by-model#changeManufacturer" data-form--search-by-model-target="manufacturer" class="form-select"><option value="" selected="selected">Marque</option>    <optgroup label="Marques les plus populaires">
                    <option value="5" data-img="https://cdn.distriauto.eu/assets/img/vehicle/manufacturer/5_100.webp">Audi</option><option value="16" data-img="https://cdn.distriauto.eu/assets/img/vehicle/manufacturer/custom/1/6_100.webp">BMW</option><option value="21" data-img="https://cdn.distriauto.eu/assets/img/vehicle/manufacturer/custom/2/1_100.webp">Citroën</option><option value="35" data-img="https://cdn.distriauto.eu/assets/img/vehicle/manufacturer/custom/3/5_100.webp">Fiat</option><option value="36" data-img="https://cdn.distriauto.eu/assets/img/vehicle/manufacturer/3/6_100.webp">Ford</option><option value="74" data-img="https://cdn.distriauto.eu/assets/img/vehicle/manufacturer/7/4_100.webp">Mercedes-Benz</option><option value="84" data-img="https://cdn.distriauto.eu/assets/img/vehicle/manufacturer/custom/8/4_100.webp">Opel</option><option value="88" data-img="https://cdn.distriauto.eu/assets/img/vehicle/manufacturer/custom/8/8_100.webp">Peugeot</option><option value="93" data-img="https://cdn.distriauto.eu/assets/img/vehicle/manufacturer/custom/9/3_100.webp">Renault</option><option value="104" data-img="https://cdn.distriauto.eu/assets/img/vehicle/manufacturer/1/0/4_100.webp">Seat</option><option value="111" data-img="https://cdn.distriauto.eu/assets/img/vehicle/manufacturer/1/1/1_100.webp">Toyota</option><option value="121" data-img="https://cdn.distriauto.eu/assets/img/vehicle/manufacturer/1/2/1_100.webp">Volkswagen</option></optgroup><optgroup label="Toutes les marques">
                    <option value="3854" data-img="https://cdn.distriauto.eu/assets/img/vehicle/manufacturer/3/8/5/4_100.webp">Abarth</option><option value="609" data-img="https://cdn.distriauto.eu/assets/img/vehicle/manufacturer/6/0/9_100.webp">AC</option><option value="1505" data-img="https://cdn.distriauto.eu/assets/img/vehicle/manufacturer/custom/1/5/0/5_100.webp">Acura</option><option value="1480" data-img="https://cdn.distriauto.eu/assets/img/vehicle/manufacturer/1/4/8/0_100.webp">Aixam</option><option value="2" data-img="https://cdn.distriauto.eu/assets/img/vehicle/manufacturer/2_100.webp">Alfa Romeo</option><option value="866" data-img="https://cdn.distriauto.eu/assets/img/vehicle/manufacturer/8/6/6_100.webp">Alpina</option><option value="1360" data-img="https://cdn.distriauto.eu/assets/img/vehicle/manufacturer/1/3/6/0_100.webp">ARO</option><option value="3495" data-img="https://cdn.distriauto.eu/assets/img/vehicle/manufacturer/3/4/9/5_100.webp">Artega</option><option value="881" data-img="https://cdn.distriauto.eu/assets/img/vehicle/manufacturer/8/8/1_100.webp">Aston Martin</option><option value="5" data-img="https://cdn.distriauto.eu/assets/img/vehicle/manufacturer/5_100.webp">Audi</option><option value="6" data-img="https://cdn.distriauto.eu/assets/img/vehicle/manufacturer/6_100.webp">Austin</option><option value="1538" data-img="https://cdn.distriauto.eu/assets/img/vehicle/manufacturer/1/5/3/8_100.webp">Austin-Healey</option><option value="799" data-img="https://cdn.distriauto.eu/assets/img/vehicle/manufacturer/7/9/9_100.webp">Autobianchi</option><option value="815" data-img="https://cdn.distriauto.eu/assets/img/vehicle/manufacturer/8/1/5_100.webp">Bentley</option><option value="1485" data-img="https://cdn.distriauto.eu/assets/img/vehicle/manufacturer/1/4/8/5_100.webp">Bertone</option><option value="16" data-img="https://cdn.distriauto.eu/assets/img/vehicle/manufacturer/custom/1/6_100.webp">BMW</option><option value="788" data-img="https://cdn.distriauto.eu/assets/img/vehicle/manufacturer/7/8/8_100.webp">Bugatti</option><option value="816" data-img="https://cdn.distriauto.eu/assets/img/vehicle/manufacturer/8/1/6_100.webp">Buick</option><option value="819" data-img="https://cdn.distriauto.eu/assets/img/vehicle/manufacturer/8/1/9_100.webp">Cadillac</option><option value="1490" data-img="https://cdn.distriauto.eu/assets/img/vehicle/manufacturer/1/4/9/0_100.webp">Caterham</option><option value="138" data-img="https://cdn.distriauto.eu/assets/img/vehicle/manufacturer/1/3/8_100.webp">Chevrolet</option><option value="20" data-img="https://cdn.distriauto.eu/assets/img/vehicle/manufacturer/2/0_100.webp">Chrysler</option><option value="21" data-img="https://cdn.distriauto.eu/assets/img/vehicle/manufacturer/custom/2/1_100.webp">Citroën</option><option value="4896" data-img="https://cdn.distriauto.eu/assets/img/vehicle/manufacturer/4/8/9/6_100.webp">Cupra</option><option value="139" data-img="https://cdn.distriauto.eu/assets/img/vehicle/manufacturer/custom/1/3/9_100.webp">Dacia</option><option value="185" data-img="https://cdn.distriauto.eu/assets/img/vehicle/manufacturer/1/8/5_100.webp">Daewoo</option><option value="24" data-img="https://cdn.distriauto.eu/assets/img/vehicle/manufacturer/2/4_100.webp">DAF</option><option value="25" data-img="https://cdn.distriauto.eu/assets/img/vehicle/manufacturer/2/5_100.webp">Daihatsu</option><option value="26" data-img="https://cdn.distriauto.eu/assets/img/vehicle/manufacturer/2/6_100.webp">Daimler</option><option value="4717" data-img="https://cdn.distriauto.eu/assets/img/vehicle/manufacturer/custom/4/7/1/7_100.webp">DE LA Chapelle</option><option value="1494" data-img="https://cdn.distriauto.eu/assets/img/vehicle/manufacturer/1/4/9/4_100.webp">DE Lorean</option><option value="29" data-img="https://cdn.distriauto.eu/assets/img/vehicle/manufacturer/custom/2/9_100.webp">Dodge</option><option value="4658" data-img="https://cdn.distriauto.eu/assets/img/vehicle/manufacturer/4/6/5/8_100.webp">Donkervoort</option><option value="4468" data-img="https://cdn.distriauto.eu/assets/img/vehicle/manufacturer/4/4/6/8_100.webp">DS</option><option value="700" data-img="https://cdn.distriauto.eu/assets/img/vehicle/manufacturer/7/0/0_100.webp">Ferrari</option><option value="35" data-img="https://cdn.distriauto.eu/assets/img/vehicle/manufacturer/custom/3/5_100.webp">Fiat</option><option value="3738" data-img="https://cdn.distriauto.eu/assets/img/vehicle/manufacturer/3/7/3/8_100.webp">Fisker</option><option value="36" data-img="https://cdn.distriauto.eu/assets/img/vehicle/manufacturer/3/6_100.webp">Ford</option><option value="776" data-img="https://cdn.distriauto.eu/assets/img/vehicle/manufacturer/7/7/6_100.webp">Ford USA</option><option value="5475">Galloper</option><option value="1498" data-img="https://cdn.distriauto.eu/assets/img/vehicle/manufacturer/custom/1/4/9/8_100.webp">Ginetta</option><option value="39" data-img="https://cdn.distriauto.eu/assets/img/vehicle/manufacturer/3/9_100.webp">GMC</option><option value="45" data-img="https://cdn.distriauto.eu/assets/img/vehicle/manufacturer/4/5_100.webp">Honda</option><option value="183" data-img="https://cdn.distriauto.eu/assets/img/vehicle/manufacturer/1/8/3_100.webp">Hyundai</option><option value="1526" data-img="https://cdn.distriauto.eu/assets/img/vehicle/manufacturer/1/5/2/6_100.webp">Infiniti</option><option value="54" data-img="https://cdn.distriauto.eu/assets/img/vehicle/manufacturer/5/4_100.webp">Isuzu</option><option value="55" data-img="https://cdn.distriauto.eu/assets/img/vehicle/manufacturer/5/5_100.webp">Iveco</option><option value="56" data-img="https://cdn.distriauto.eu/assets/img/vehicle/manufacturer/5/6_100.webp">Jaguar</option><option value="882" data-img="https://cdn.distriauto.eu/assets/img/vehicle/manufacturer/8/8/2_100.webp">Jeep</option><option value="184" data-img="https://cdn.distriauto.eu/assets/img/vehicle/manufacturer/custom/1/8/4_100.webp">KIA</option><option value="2760" data-img="https://cdn.distriauto.eu/assets/img/vehicle/manufacturer/2/7/6/0_100.webp">KTM</option><option value="63" data-img="https://cdn.distriauto.eu/assets/img/vehicle/manufacturer/6/3_100.webp">Lada</option><option value="701" data-img="https://cdn.distriauto.eu/assets/img/vehicle/manufacturer/7/0/1_100.webp">Lamborghini</option><option value="64" data-img="https://cdn.distriauto.eu/assets/img/vehicle/manufacturer/6/4_100.webp">Lancia</option><option value="1820" data-img="https://cdn.distriauto.eu/assets/img/vehicle/manufacturer/1/8/2/0_100.webp">Land Rover</option><option value="842" data-img="https://cdn.distriauto.eu/assets/img/vehicle/manufacturer/8/4/2_100.webp">Lexus</option><option value="1513" data-img="https://cdn.distriauto.eu/assets/img/vehicle/manufacturer/1/5/1/3_100.webp">Ligier</option><option value="1200" data-img="https://cdn.distriauto.eu/assets/img/vehicle/manufacturer/1/2/0/0_100.webp">Lincoln</option><option value="802" data-img="https://cdn.distriauto.eu/assets/img/vehicle/manufacturer/8/0/2_100.webp">Lotus</option><option value="771" data-img="https://cdn.distriauto.eu/assets/img/vehicle/manufacturer/7/7/1_100.webp">Maserati</option><option value="2164" data-img="https://cdn.distriauto.eu/assets/img/vehicle/manufacturer/2/1/6/4_100.webp">Maybach</option><option value="72" data-img="https://cdn.distriauto.eu/assets/img/vehicle/manufacturer/7/2_100.webp">Mazda</option><option value="74" data-img="https://cdn.distriauto.eu/assets/img/vehicle/manufacturer/7/4_100.webp">Mercedes-Benz</option><option value="75" data-img="https://cdn.distriauto.eu/assets/img/vehicle/manufacturer/custom/7/5_100.webp">MG</option><option value="4219" data-img="https://cdn.distriauto.eu/assets/img/vehicle/manufacturer/4/2/1/9_100.webp">Microcar</option><option value="1523" data-img="https://cdn.distriauto.eu/assets/img/vehicle/manufacturer/custom/1/5/2/3_100.webp">Mini</option><option value="77" data-img="https://cdn.distriauto.eu/assets/img/vehicle/manufacturer/7/7_100.webp">Mitsubishi</option><option value="803" data-img="https://cdn.distriauto.eu/assets/img/vehicle/manufacturer/8/0/3_100.webp">Morgan</option><option value="80" data-img="https://cdn.distriauto.eu/assets/img/vehicle/manufacturer/custom/8/0_100.webp">Nissan</option><option value="84" data-img="https://cdn.distriauto.eu/assets/img/vehicle/manufacturer/custom/8/4_100.webp">Opel</option><option value="88" data-img="https://cdn.distriauto.eu/assets/img/vehicle/manufacturer/custom/8/8_100.webp">Peugeot</option><option value="4659" data-img="https://cdn.distriauto.eu/assets/img/vehicle/manufacturer/custom/4/6/5/9_100.webp">PGO</option><option value="181" data-img="https://cdn.distriauto.eu/assets/img/vehicle/manufacturer/1/8/1_100.webp">Piaggio</option><option value="850" data-img="https://cdn.distriauto.eu/assets/img/vehicle/manufacturer/8/5/0_100.webp">Plymouth</option><option value="774" data-img="https://cdn.distriauto.eu/assets/img/vehicle/manufacturer/7/7/4_100.webp">Pontiac</option><option value="92" data-img="https://cdn.distriauto.eu/assets/img/vehicle/manufacturer/9/2_100.webp">Porsche</option><option value="93" data-img="https://cdn.distriauto.eu/assets/img/vehicle/manufacturer/custom/9/3_100.webp">Renault</option><option value="705" data-img="https://cdn.distriauto.eu/assets/img/vehicle/manufacturer/custom/7/0/5_100.webp">Rolls-Royce</option><option value="95" data-img="https://cdn.distriauto.eu/assets/img/vehicle/manufacturer/9/5_100.webp">Rover</option><option value="99" data-img="https://cdn.distriauto.eu/assets/img/vehicle/manufacturer/9/9_100.webp">Saab</option><option value="104" data-img="https://cdn.distriauto.eu/assets/img/vehicle/manufacturer/1/0/4_100.webp">Seat</option><option value="106" data-img="https://cdn.distriauto.eu/assets/img/vehicle/manufacturer/1/0/6_100.webp">Skoda</option><option value="1138" data-img="https://cdn.distriauto.eu/assets/img/vehicle/manufacturer/1/1/3/8_100.webp">Smart</option><option value="175" data-img="https://cdn.distriauto.eu/assets/img/vehicle/manufacturer/1/7/5_100.webp">Ssangyong</option><option value="107" data-img="https://cdn.distriauto.eu/assets/img/vehicle/manufacturer/1/0/7_100.webp">Subaru</option><option value="109" data-img="https://cdn.distriauto.eu/assets/img/vehicle/manufacturer/1/0/9_100.webp">Suzuki</option><option value="3328" data-img="https://cdn.distriauto.eu/assets/img/vehicle/manufacturer/3/3/2/8_100.webp">Tesla</option><option value="111" data-img="https://cdn.distriauto.eu/assets/img/vehicle/manufacturer/1/1/1_100.webp">Toyota</option><option value="112" data-img="https://cdn.distriauto.eu/assets/img/vehicle/manufacturer/1/1/2_100.webp">Triumph</option><option value="861" data-img="https://cdn.distriauto.eu/assets/img/vehicle/manufacturer/8/6/1_100.webp">TVR</option><option value="117" data-img="https://cdn.distriauto.eu/assets/img/vehicle/manufacturer/1/1/7_100.webp">Vauxhall</option><option value="120" data-img="https://cdn.distriauto.eu/assets/img/vehicle/manufacturer/custom/1/2/0_100.webp">Volvo</option><option value="121" data-img="https://cdn.distriauto.eu/assets/img/vehicle/manufacturer/1/2/1_100.webp">Volkswagen</option></optgroup></select></div>

</div>
<div class="mb-1">
                    <div class="input-prepend input-prepend--active" data-prepend="2" data-select-start-open-value="1" data-select-focus-on-open-value="0" data-select-close-on-select-value="0" data-select-trans-value="{&quot;placeholder&quot;:&quot;Mod\u00e8le&quot;}" data-select-back-target-value="form--search-by-model">    <select id="search_vehicle_modelSeries" name="search_vehicle[modelSeries]" required="required" autocomplete="off" data-action="mousedown->form--search-by-model#fullscreen change->form--search-by-model#changeModel" data-form--search-by-model-target="model" class="form-select"><option value="" selected="selected">Modèle</option>    <optgroup label="Alhambra">
                    <option value="1564">Alhambra (7V8, 7V9) (04/1996 - 03/2010)</option><option value="9009">Alhambra (710, 711) (06/2010 - 12/2022)</option><option value="41662">Alhambra VAN (7V8, 7V9) (03/1996 - 03/2010)</option><option value="41660">Alhambra VAN (711) (06/2010 - 06/2023)</option></optgroup><optgroup label="Altea">
                    <option value="5111">Altea (5P1) (03/2004 - 12/2015)</option></optgroup><optgroup label="Altea XL">
                    <option value="6236">Altea XL (5P5, 5P8) (10/2006 - 12/2015)</option></optgroup><optgroup label="Arosa">
                    <option value="1903">Arosa (6H1) (05/1997 - 06/2004)</option></optgroup><optgroup label="Arona">
                    <option value="38144">Arona (KJ7, KJP) (07/2017 - ...)</option></optgroup><optgroup label="Ateca">
                    <option value="36512">Ateca (KH7, KHP) (04/2016 - ...)</option></optgroup><optgroup label="Cordoba">
                    <option value="93">Cordoba (6K1, 6K2) (02/1993 - 12/2002)</option><option value="1992">Cordoba Vario (6K5) (07/1996 - 12/2002)</option><option value="4961">Cordoba (6L2) (09/2002 - 11/2009)</option></optgroup><optgroup label="Cordoba Vario">
                    <option value="39007">Cordoba Vario Fourgon/Break (6K5) (08/2000 - 12/2002)</option></optgroup><optgroup label="Exeo">
                    <option value="8032">Exeo (3R2) (12/2008 - 05/2013)</option><option value="8095">Exeo ST (3R5) (05/2009 - 05/2013)</option></optgroup><optgroup label="Fura">
                    <option value="443">Fura (25A) (01/1982 - 12/1986)</option></optgroup><optgroup label="Ibiza">
                    <option value="564">Ibiza I (21A) (06/1984 - 12/1993)</option><option value="569">Ibiza II (6K1) (03/1993 - 05/2002)</option><option value="4870">Ibiza III (6L1) (02/2002 - 11/2009)</option><option value="7540">Ibiza IV (6J5, 6P1) (03/2008 - 12/2017)</option><option value="7567">Ibiza IV SC (6J1, 6P5) (06/2008 - 12/2018)</option><option value="8609">Ibiza IV ST (6J8, 6P8) (03/2010 - 07/2016)</option><option value="39005">Ibiza IV Camionnette/Berline Bicorps Trois ou Cinq Portes (6 (04/2008 - 05/2015)</option><option value="37916">Ibiza V (KJ1, KJG) (01/2017 - ...)</option></optgroup><optgroup label="Inca">
                    <option value="1551">Inca (6K9) (11/1995 - 11/2003)</option></optgroup><optgroup label="Leon">
                    <option value="4350">Leon (1M1) (11/1999 - 06/2006)</option><option value="5431">Leon (1P1) (05/2005 - 12/2013)</option><option value="10734">Leon (5F1) (09/2012 - 05/2021)</option><option value="11279">Leon SC (5F5) (01/2013 - 12/2018)</option><option value="11484">Leon ST (5F8) (09/2012 - 08/2020)</option><option value="40534">Leon (KL1) (11/2019 - ...)</option><option value="40535">Leon Sportstourer (KL8) (03/2020 - ...)</option><option value="38537">Leon Camionnette/Berline Bicorps Trois ou Cinq Portes (5F1) (09/2012 - 08/2020)</option></optgroup><optgroup label="Leon ST">
                    <option value="38536">Leon ST Fourgon/Break (5F8) (01/2013 - 08/2020)</option></optgroup><optgroup label="Malaga">
                    <option value="245">Malaga (23A) (11/1984 - 12/1993)</option></optgroup><optgroup label="Marbella">
                    <option value="262">Marbella (28A) (08/1986 - 05/1999)</option><option value="1960">Marbella Camionnette/Berline Bicorps Trois ou Cinq Portes (0 (11/1986 - 05/1999)</option></optgroup><optgroup label="Mii">
                    <option value="10094">Mii (KF1, KE1) (10/2011 - ...)</option></optgroup><optgroup label="Panda">
                    <option value="5035">Panda (141A) (10/1980 - 12/1986)</option></optgroup><optgroup label="Ritmo">
                    <option value="5036">Ritmo (138) (07/1978 - 09/1983)</option></optgroup><optgroup label="Ronda">
                    <option value="91">Ronda (22A) (06/1982 - 11/1988)</option></optgroup><optgroup label="Tarraco">
                    <option value="39208">Tarraco (KN2) (09/2018 - ...)</option></optgroup><optgroup label="Terra">
                    <option value="382">Terra (24) (01/1987 - 12/1996)</option><option value="386">Terra Fourgon/Break (024A) (01/1987 - 02/1996)</option></optgroup><optgroup label="Toledo">
                    <option value="409">Toledo I (1L2) (01/1991 - 10/1999)</option><option value="3899">Toledo II (1M2) (10/1998 - 05/2006)</option><option value="5378">Toledo III (5P2) (04/2004 - 05/2009)</option><option value="10880">Toledo IV (KG3) (07/2012 - 04/2019)</option></optgroup><optgroup label="600">
                    <option value="468">600 (110B) (09/1963 - 04/1970)</option></optgroup><optgroup label="850">
                    <option value="5038">850 (100GD) (01/1966 - 10/1975)</option></optgroup><optgroup label="124">
                    <option value="5040">124 (01/1968 - 10/1980)</option><option value="5041">124 Break (124A) (01/1970 - 12/1976)</option></optgroup><optgroup label="127">
                    <option value="5037">127 (127A) (04/1972 - 12/1982)</option></optgroup><optgroup label="128">
                    <option value="5045">128 (128A) (01/1976 - 12/1980)</option></optgroup><optgroup label="131">
                    <option value="2029">131 (131A) (05/1975 - 12/1986)</option></optgroup><optgroup label="132">
                    <option value="5043">132 (132A) (01/1973 - 12/1982)</option></optgroup><optgroup label="133">
                    <option value="159">133 (133A) (05/1974 - 11/1979)</option></optgroup></select></div>

</div>
<div class="mb-1">
                    <div class="input-prepend" data-prepend="3" data-select-start-open-value="1" data-select-focus-on-open-value="0" data-select-close-on-select-value="0" data-select-trans-value="{&quot;placeholder&quot;:&quot;V\u00e9hicule&quot;}" data-select-back-target-value="form--search-by-model">    <select id="search_vehicle_vehicle" name="search_vehicle[vehicle]" /*disabled="disabled"*/ required="required" autocomplete="off" data-action="mousedown->form--search-by-model#fullscreen change->form--search-by-model#changeVehicle" data-form--search-by-model-target="vehicle" class="form-select"><option value="" selected="selected">Véhicule</option>    </select></div>

</div>
<button class="btn btn-primary w-100 text-uppercase" type="submit">chercher</button>

</form>
                        </div>
                    </div>

                    
       {/* <p>Identifiez votre vehicule:</p>
      <div className='PiecesA-form'>
      &nbsp;&nbsp;
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

      <label htmlFor='Model'>Model</label>&nbsp;&nbsp;
      <input className='PiecesA-input'   name='Model' type='Model' placeholder='entrer le model' />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

      <label htmlFor='Motorisation'>Motorisation </label>&nbsp;&nbsp;
        <select id="motorisation" name="motorisation">
            <option value="option1">Diesel</option>
            <option value="option2">Essence</option>
        </select>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

{/* <div class="btn-group">
  <button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Categorie
  </button>
  <div class="dropdown-menu">
    <a class="dropdown-item" href="/categorie">Categorie</a>
    <a class="dropdown-item" href="/About">Another action</a>
    <a class="dropdown-item" href="Blog">Something else here</a>
    <div class="dropdown-divider"></div>
    <a class="dropdown-item" href="Login">Separated link</a>
  </div>
</div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; */}

      {/* <button className='PiecesA-btn'>Chercher</button>&nbsp;&nbsp;&nbsp; */}
   



  </form>
  )
}

