
import React from 'react'

export default function PiecesA() {
  return (
    
<div>
    <div id="categories" class="PiecesA-list container pb-5 pt-3 pt-lg-5">
        <div class="pb-3 text-center">
        <h2 class="mb-2 mb-sm-0">Identifiez votre voiture en remplissant les champs ci-dessous</h2>
        <form className='row'>
    
    <div className='PiecesA-form'>
    
    <div class="col-lg form-search-vehicle-all__vehicle">
                        <div class="rounded-bordered bg-white fs-xsmall">
                            
                                                        



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
     </div>
        </form>
        </div>
        
        

        <div className="pb-3 text-center">
        <div className='row'>
        <h2 class="mb-2 mb-sm-0">Choisissez votre article dans la liste suivante</h2>
        <form class="gp-suggestion__selector__form px-2 pt-2 mb-5" action="/pieces-auto/recherche">
            <div class="row justify-content-center align-items-center">
                
                <div class="col-lg-7 mt-sm-1">
                                                    
        
    <div data-controller="form--select-gp fullscreen" data-form--select-gp-trans-value="{&quot;trigger&quot;:&quot;Tous les groupes de produits&quot;,&quot;triggerCount&quot;:&quot;Groupes de produits&quot;}" data-form--select-gp-multiple-value="true" data-form--select-gp-max-value="5" data-form--select-gp-auto-submit-value="true" class="selectbox selectbox--input" data-action="change->form--select-gp#maxCount">
        <div class="selectbox__trigger form-select" data-form--select-gp-target="trigger">Tous les groupes de produits</div>
        <div class="selectbox__dropdown fullscreen-lg" data-form--select-gp-target="dropdown" hidden="">
            <div class="fullscreen__title d-flex align-items-center d-lg-none" data-fullscreen-target="title">
                <span class="text-center w-100 px-1 fw-bold fs-base">Tous les groupes de produits</span>
                <button type="button" data-action="form--select-gp#close" class="btn btn-close"><i class="fa fa-cancel"></i></button>
            </div>
            <div class="selectbox__input">
                <input type="text" class="form-control form-control-sm" placeholder="Recherche" autocomplete="off" data-form--select-gp-target="input" data-hj-allow=""/>
                                        <div class="selectbox__stack" data-form--select-gp-target="stack"></div>
                            <span class="fs-xsmall text-danger fw-medium d-none" data-form--select-gp-target="max">5 choix maximum</span>
                            <span class="fs-xsmall text-danger fw-medium d-none" data-form--select-gp-target="error">Veuillez choisir un groupe de produit</span>
                                </div>
            <ul class="overflow-scroll" data-form--select-gp-target="results">
                                                                    <li role="option" class="selectbox--focused">
                                    <span class="form-check">
                                        <input type="checkbox" class="form-check-input" name="groupProducts[]" value="1718"/>
                                        <label class="form-check-label">Accumulateur de Pression, Suspension / Amortissement</label>
                                    </span>
                                </li>
                                                        <li role="option">
                                    <span class="form-check">
                                        <input type="checkbox" class="form-check-input" name="groupProducts[]" value="449"/>
                                        <label class="form-check-label">Aile</label>
                                    </span>
                                </li>
                                                        <li role="option">
                                    <span class="form-check">
                                        <input type="checkbox" class="form-check-input" name="groupProducts[]" value="4"/>
                                        <label class="form-check-label">Alternateur</label>
                                    </span>
                                </li>
                                                        <li role="option">
                                    <span class="form-check">
                                        <input type="checkbox" class="form-check-input" name="groupProducts[]" value="854"/>
                                        <label class="form-check-label">Amortisseur</label>
                                    </span>
                                </li>
                                                        <li role="option">
                                    <span class="form-check">
                                        <input type="checkbox" class="form-check-input" name="groupProducts[]" value="1087"/>
                                        <label class="form-check-label">Amortisseur de Choc, Pare-Chocs</label>
                                    </span>
                                </li>
                                                        <li role="option">
                                    <span class="form-check">
                                        <input type="checkbox" class="form-check-input" name="groupProducts[]" value="4118"/>
                                        <label class="form-check-label">Amortisseur Pneumatique</label>
                                    </span>
                                </li>
                                                        <li role="option">
                                    <span class="form-check">
                                        <input type="checkbox" class="form-check-input" name="groupProducts[]" value="105"/>
                                        <label class="form-check-label">Ampoule</label>
                                    </span>
                                </li>
                                                        <li role="option">
                                    <span class="form-check">
                                        <input type="checkbox" class="form-check-input" name="groupProducts[]" value="2254"/>
                                        <label class="form-check-label">Anneau de Palpeur, ABS</label>
                                    </span>
                                </li>
                                                        <li role="option">
                                    <span class="form-check">
                                        <input type="checkbox" class="form-check-input" name="groupProducts[]" value="699"/>
                                        <label class="form-check-label">Appareil de Commande</label>
                                    </span>
                                </li>
                                                        <li role="option">
                                    <span class="form-check">
                                        <input type="checkbox" class="form-check-input" name="groupProducts[]" value="566"/>
                                        <label class="form-check-label">Arbre à Cames</label>
                                    </span>
                                </li>
                                                        <li role="option">
                                    <span class="form-check">
                                        <input type="checkbox" class="form-check-input" name="groupProducts[]" value="13"/>
                                        <label class="form-check-label">Arbre de Transmission</label>
                                    </span>
                                </li>
                                                        <li role="option">
                                    <span class="form-check">
                                        <input type="checkbox" class="form-check-input" name="groupProducts[]" value="204"/>
                                        <label class="form-check-label">Bague d'Étanchéité</label>
                                    </span>
                                </li>
                                                        <li role="option">
                                    <span class="form-check">
                                        <input type="checkbox" class="form-check-input" name="groupProducts[]" value="1002"/>
                                        <label class="form-check-label">Baguette et Bande Protectrice</label>
                                    </span>
                                </li>
                                                        <li role="option">
                                    <span class="form-check">
                                        <input type="checkbox" class="form-check-input" name="groupProducts[]" value="298"/>
                                        <label class="form-check-label">Balai d'Essuie-Glace</label>
                                    </span>
                                </li>
                                                        <li role="option">
                                    <span class="form-check">
                                        <input type="checkbox" class="form-check-input" name="groupProducts[]" value="1531"/>
                                        <label class="form-check-label">Balais, Démarreur</label>
                                    </span>
                                </li>
                                                        <li role="option">
                                    <span class="form-check">
                                        <input type="checkbox" class="form-check-input" name="groupProducts[]" value="1055"/>
                                        <label class="form-check-label">Bandes de Caoutchouc, Échappement</label>
                                    </span>
                                </li>
                                                        <li role="option">
                                    <span class="form-check">
                                        <input type="checkbox" class="form-check-input" name="groupProducts[]" value="284"/>
                                        <label class="form-check-label">Barre de Connexion</label>
                                    </span>
                                </li>
                                                        <li role="option">
                                    <span class="form-check">
                                        <input type="checkbox" class="form-check-input" name="groupProducts[]" value="285"/>
                                        <label class="form-check-label">Barre de Direction</label>
                                    </span>
                                </li>
                                                        <li role="option">
                                    <span class="form-check">
                                        <input type="checkbox" class="form-check-input" name="groupProducts[]" value="1"/>
                                        <label class="form-check-label">Batterie de Démarrage</label>
                                    </span>
                                </li>
                                                        <li role="option">
                                    <span class="form-check">
                                        <input type="checkbox" class="form-check-input" name="groupProducts[]" value="3230"/>
                                        <label class="form-check-label">Biellette de Barre Stabilisatrice</label>
                                    </span>
                                </li>
                                                        <li role="option">
                                    <span class="form-check">
                                        <input type="checkbox" class="form-check-input" name="groupProducts[]" value="5514"/>
                                        <label class="form-check-label">Bit Pour Tournevis</label>
                                    </span>
                                </li>
                                                        <li role="option">
                                    <span class="form-check">
                                        <input type="checkbox" class="form-check-input" name="groupProducts[]" value="689"/>
                                        <label class="form-check-label">Bobine d'Allumage</label>
                                    </span>
                                </li>
                                                        <li role="option">
                                    <span class="form-check">
                                        <input type="checkbox" class="form-check-input" name="groupProducts[]" value="2914"/>
                                        <label class="form-check-label">Bobine, Embrayage Magnétique (Compresseur)</label>
                                    </span>
                                </li>
                                                        <li role="option">
                                    <span class="form-check">
                                        <input type="checkbox" class="form-check-input" name="groupProducts[]" value="3167"/>
                                        <label class="form-check-label">Boîtier de Connecteur</label>
                                    </span>
                                </li>
                                                        <li role="option">
                                    <span class="form-check">
                                        <input type="checkbox" class="form-check-input" name="groupProducts[]" value="1792"/>
                                        <label class="form-check-label">Boîtier du Thermostat</label>
                                    </span>
                                </li>
                                                        <li role="option">
                                    <span class="form-check">
                                        <input type="checkbox" class="form-check-input" name="groupProducts[]" value="3393"/>
                                        <label class="form-check-label">Boîtier, Rétroviseur Extérieur</label>
                                    </span>
                                </li>
                                                        <li role="option">
                                    <span class="form-check">
                                        <input type="checkbox" class="form-check-input" name="groupProducts[]" value="1603"/>
                                        <label class="form-check-label">Bouchon de Dilatation</label>
                                    </span>
                                </li>
                                                        <li role="option">
                                    <span class="form-check">
                                        <input type="checkbox" class="form-check-input" name="groupProducts[]" value="3365"/>
                                        <label class="form-check-label">Bouchon de Protection / Soufflet, Amortisseur</label>
                                    </span>
                                </li>
                                                        <li role="option">
                                    <span class="form-check">
                                        <input type="checkbox" class="form-check-input" name="groupProducts[]" value="56"/>
                                        <label class="form-check-label">Bouchon</label>
                                    </span>
                                </li>
                                                        <li role="option">
                                    <span class="form-check">
                                        <input type="checkbox" class="form-check-input" name="groupProducts[]" value="686"/>
                                        <label class="form-check-label">Bougie d'Allumage</label>
                                    </span>
                                </li>
                                                        <li role="option">
                                    <span class="form-check">
                                        <input type="checkbox" class="form-check-input" name="groupProducts[]" value="243"/>
                                        <label class="form-check-label">Bougie de Préchauffage</label>
                                    </span>
                                </li>
                                                        <li role="option">
                                    <span class="form-check">
                                        <input type="checkbox" class="form-check-input" name="groupProducts[]" value="657"/>
                                        <label class="form-check-label">Boulon de Roue</label>
                                    </span>
                                </li>
                                                        <li role="option">
                                    <span class="form-check">
                                        <input type="checkbox" class="form-check-input" name="groupProducts[]" value="301"/>
                                        <label class="form-check-label">Bras d'Essuie-Glace, Nettoyage des Vitres</label>
                                    </span>
                                </li>
                                                        <li role="option">
                                    <span class="form-check">
                                        <input type="checkbox" class="form-check-input" name="groupProducts[]" value="273"/>
                                        <label class="form-check-label">Bras de Liaison, Suspension de Roue</label>
                                    </span>
                                </li>
                                                        <li role="option">
                                    <span class="form-check">
                                        <input type="checkbox" class="form-check-input" name="groupProducts[]" value="3219"/>
                                        <label class="form-check-label">Bride de Liquide de Refroidissement</label>
                                    </span>
                                </li>
                                                        <li role="option">
                                    <span class="form-check">
                                        <input type="checkbox" class="form-check-input" name="groupProducts[]" value="1452"/>
                                        <label class="form-check-label">Buse/Gicleur/Injecteur</label>
                                    </span>
                                </li>
                                                        <li role="option">
                                    <span class="form-check">
                                        <input type="checkbox" class="form-check-input" name="groupProducts[]" value="48"/>
                                        <label class="form-check-label">Butée de Débrayage</label>
                                    </span>
                                </li>
                                                        <li role="option">
                                    <span class="form-check">
                                        <input type="checkbox" class="form-check-input" name="groupProducts[]" value="252"/>
                                        <label class="form-check-label">Butée Élastique</label>
                                    </span>
                                </li>
                                                        <li role="option">
                                    <span class="form-check">
                                        <input type="checkbox" class="form-check-input" name="groupProducts[]" value="47"/>
                                        <label class="form-check-label">Butée Hydraulique, Embrayage</label>
                                    </span>
                                </li>
                                                        <li role="option">
                                    <span class="form-check">
                                        <input type="checkbox" class="form-check-input" name="groupProducts[]" value="618"/>
                                        <label class="form-check-label">Câble d'Accélération</label>
                                    </span>
                                </li>
                                                        <li role="option">
                                    <span class="form-check">
                                        <input type="checkbox" class="form-check-input" name="groupProducts[]" value="684"/>
                                        <label class="form-check-label">Câble d'Allumage</label>
                                    </span>
                                </li>
                                                        <li role="option">
                                    <span class="form-check">
                                        <input type="checkbox" class="form-check-input" name="groupProducts[]" value="1150"/>
                                        <label class="form-check-label">Câble Flexible de Commande de Compteur</label>
                                    </span>
                                </li>
                                                        <li role="option">
                                    <span class="form-check">
                                        <input type="checkbox" class="form-check-input" name="groupProducts[]" value="4256"/>
                                        <label class="form-check-label">Cache Moteur</label>
                                    </span>
                                </li>
                                                        <li role="option">
                                    <span class="form-check">
                                        <input type="checkbox" class="form-check-input" name="groupProducts[]" value="3308"/>
                                        <label class="form-check-label">Cache, Courroie</label>
                                    </span>
                                </li>
                                                        <li role="option">
                                    <span class="form-check">
                                        <input type="checkbox" class="form-check-input" name="groupProducts[]" value="3251"/>
                                        <label class="form-check-label">Cale-Porte</label>
                                    </span>
                                </li>
                                                        <li role="option">
                                    <span class="form-check">
                                        <input type="checkbox" class="form-check-input" name="groupProducts[]" value="531"/>
                                        <label class="form-check-label">Capot-Moteur</label>
                                    </span>
                                </li>
                                                        <li role="option">
                                    <span class="form-check">
                                        <input type="checkbox" class="form-check-input" name="groupProducts[]" value="833"/>
                                        <label class="form-check-label">Capteur d'Angle, Vilebrequin</label>
                                    </span>
                                </li>
                                                        <li role="option">
                                    <span class="form-check">
                                        <input type="checkbox" class="form-check-input" name="groupProducts[]" value="3921"/>
                                        <label class="form-check-label">Capteur de Cognement</label>
                                    </span>
                                </li>
                                                        <li role="option">
                                    <span class="form-check">
                                        <input type="checkbox" class="form-check-input" name="groupProducts[]" value="3925"/>
                                        <label class="form-check-label">Capteur de Pression Barométrique, Adaptation à l'Altitude</label>
                                    </span>
                                </li>
                                                        <li role="option">
                                    <span class="form-check">
                                        <input type="checkbox" class="form-check-input" name="groupProducts[]" value="3553"/>
                                        <label class="form-check-label">Capteur de Pression, Turbocompresseur</label>
                                    </span>
                                </li>
                                                        <li role="option">
                                    <span class="form-check">
                                        <input type="checkbox" class="form-check-input" name="groupProducts[]" value="2232"/>
                                        <label class="form-check-label">Capteur de Roue, Système de Contrôle de Pression des Pneus</label>
                                    </span>
                                </li>
                                                        <li role="option">
                                    <span class="form-check">
                                        <input type="checkbox" class="form-check-input" name="groupProducts[]" value="4113"/>
                                        <label class="form-check-label">Capteur de Vitesse de Roue, Boite Automatique</label>
                                    </span>
                                </li>
                                                        <li role="option">
                                    <span class="form-check">
                                        <input type="checkbox" class="form-check-input" name="groupProducts[]" value="4319"/>
                                        <label class="form-check-label">Capteur NOx</label>
                                    </span>
                                </li>
                                                        <li role="option">
                                    <span class="form-check">
                                        <input type="checkbox" class="form-check-input" name="groupProducts[]" value="412"/>
                                        <label class="form-check-label">Capteur</label>
                                    </span>
                                </li>
                                                        <li role="option">
                                    <span class="form-check">
                                        <input type="checkbox" class="form-check-input" name="groupProducts[]" value="21"/>
                                        <label class="form-check-label">Capuchon, Crochet de Remorquage</label>
                                    </span>
                                </li>
                                                        <li role="option">
                                    <span class="form-check">
                                        <input type="checkbox" class="form-check-input" name="groupProducts[]" value="1122"/>
                                        <label class="form-check-label">Carrosserie</label>
                                    </span>
                                </li>
                                                        <li role="option">
                                    <span class="form-check">
                                        <input type="checkbox" class="form-check-input" name="groupProducts[]" value="592"/>
                                        <label class="form-check-label">Carter d'Huile</label>
                                    </span>
                                </li>
                                                        <li role="option">
                                    <span class="form-check">
                                        <input type="checkbox" class="form-check-input" name="groupProducts[]" value="1093"/>
                                        <label class="form-check-label">Catadioptre</label>
                                    </span>
                                </li>
                                                        <li role="option">
                                    <span class="form-check">
                                        <input type="checkbox" class="form-check-input" name="groupProducts[]" value="429"/>
                                        <label class="form-check-label">Catalyseur</label>
                                    </span>
                                </li>
                                                        <li role="option">
                                    <span class="form-check">
                                        <input type="checkbox" class="form-check-input" name="groupProducts[]" value="1123"/>
                                        <label class="form-check-label">Chaine de Distribution</label>
                                    </span>
                                </li>
                                                        <li role="option">
                                    <span class="form-check">
                                        <input type="checkbox" class="form-check-input" name="groupProducts[]" value="740"/>
                                        <label class="form-check-label">Charnière, Capot-Moteur</label>
                                    </span>
                                </li>
                                                        <li role="option">
                                    <span class="form-check">
                                        <input type="checkbox" class="form-check-input" name="groupProducts[]" value="2368"/>
                                        <label class="form-check-label">Clé à Douille</label>
                                    </span>
                                </li>
                                                        <li role="option">
                                    <span class="form-check">
                                        <input type="checkbox" class="form-check-input" name="groupProducts[]" value="4578"/>
                                        <label class="form-check-label">Clé Polygonale Double</label>
                                    </span>
                                </li>
                                                        <li role="option">
                                    <span class="form-check">
                                        <input type="checkbox" class="form-check-input" name="groupProducts[]" value="4691"/>
                                        <label class="form-check-label">Clés Polygonales et de Clés à Fourches</label>
                                    </span>
                                </li>
                                                        <li role="option">
                                    <span class="form-check">
                                        <input type="checkbox" class="form-check-input" name="groupProducts[]" value="3881"/>
                                        <label class="form-check-label">Clip, Enjoliveur</label>
                                    </span>
                                </li>
                                                        <li role="option">
                                    <span class="form-check">
                                        <input type="checkbox" class="form-check-input" name="groupProducts[]" value="1543"/>
                                        <label class="form-check-label">Collecteur, Système d'Échappement</label>
                                    </span>
                                </li>
                                                        <li role="option">
                                    <span class="form-check">
                                        <input type="checkbox" class="form-check-input" name="groupProducts[]" value="5973"/>
                                        <label class="form-check-label">Collier de Serrage</label>
                                    </span>
                                </li>
                                                        <li role="option">
                                    <span class="form-check">
                                        <input type="checkbox" class="form-check-input" name="groupProducts[]" value="2415"/>
                                        <label class="form-check-label">Commande, Embrayage (Régulateur de Vitesse)</label>
                                    </span>
                                </li>
                                                        <li role="option">
                                    <span class="form-check">
                                        <input type="checkbox" class="form-check-input" name="groupProducts[]" value="1563"/>
                                        <label class="form-check-label">Commutateur de Colonne de Direction</label>
                                    </span>
                                </li>
                                                        <li role="option">
                                    <span class="form-check">
                                        <input type="checkbox" class="form-check-input" name="groupProducts[]" value="332"/>
                                        <label class="form-check-label">Compresseur</label>
                                    </span>
                                </li>
                                                        <li role="option">
                                    <span class="form-check">
                                        <input type="checkbox" class="form-check-input" name="groupProducts[]" value="448"/>
                                        <label class="form-check-label">Condenseur, Climatisation</label>
                                    </span>
                                </li>
                                                        <li role="option">
                                    <span class="form-check">
                                        <input type="checkbox" class="form-check-input" name="groupProducts[]" value="2096"/>
                                        <label class="form-check-label">Conduite à Haute / Basse Pression, Climatisation</label>
                                    </span>
                                </li>
                                                        <li role="option">
                                    <span class="form-check">
                                        <input type="checkbox" class="form-check-input" name="groupProducts[]" value="2094"/>
                                        <label class="form-check-label">Conduite à Haute Pression, Climatisation</label>
                                    </span>
                                </li>
                                                        <li role="option">
                                    <span class="form-check">
                                        <input type="checkbox" class="form-check-input" name="groupProducts[]" value="3739"/>
                                        <label class="form-check-label">Conduite d'Huile, Compresseur</label>
                                    </span>
                                </li>
                                                        <li role="option">
                                    <span class="form-check">
                                        <input type="checkbox" class="form-check-input" name="groupProducts[]" value="515"/>
                                        <label class="form-check-label">Conduite de Frein</label>
                                    </span>
                                </li>
                                                        <li role="option">
                                    <span class="form-check">
                                        <input type="checkbox" class="form-check-input" name="groupProducts[]" value="3492"/>
                                        <label class="form-check-label">Connecteur de Câbles</label>
                                    </span>
                                </li>
                                                        <li role="option">
                                    <span class="form-check">
                                        <input type="checkbox" class="form-check-input" name="groupProducts[]" value="373"/>
                                        <label class="form-check-label">Connecteur, Conduite d'air Comprimé</label>
                                    </span>
                                </li>
                                                        <li role="option">
                                    <span class="form-check">
                                        <input type="checkbox" class="form-check-input" name="groupProducts[]" value="407"/>
                                        <label class="form-check-label">Contact d'Avertissement, Usure des Plaquettes de Frein</label>
                                    </span>
                                </li>
                                                        <li role="option">
                                    <span class="form-check">
                                        <input type="checkbox" class="form-check-input" name="groupProducts[]" value="682"/>
                                        <label class="form-check-label">Contacteur</label>
                                    </span>
                                </li>
                                                        <li role="option">
                                    <span class="form-check">
                                        <input type="checkbox" class="form-check-input" name="groupProducts[]" value="1298"/>
                                        <label class="form-check-label">Contrôle de Ralenti, Alimentation en air</label>
                                    </span>
                                </li>
                                                        <li role="option">
                                    <span class="form-check">
                                        <input type="checkbox" class="form-check-input" name="groupProducts[]" value="158"/>
                                        <label class="form-check-label">Corps Papillon</label>
                                    </span>
                                </li>
                                                        <li role="option">
                                    <span class="form-check">
                                        <input type="checkbox" class="form-check-input" name="groupProducts[]" value="700"/>
                                        <label class="form-check-label">Correcteur, Portée Lumineuse</label>
                                    </span>
                                </li>
                                                        <li role="option">
                                    <span class="form-check">
                                        <input type="checkbox" class="form-check-input" name="groupProducts[]" value="1075"/>
                                        <label class="form-check-label">Coulisse, Chaine de Distribution</label>
                                    </span>
                                </li>
                                                        <li role="option">
                                    <span class="form-check">
                                        <input type="checkbox" class="form-check-input" name="groupProducts[]" value="1180"/>
                                        <label class="form-check-label">Coupelle de Suspension</label>
                                    </span>
                                </li>
                                                        <li role="option">
                                    <span class="form-check">
                                        <input type="checkbox" class="form-check-input" name="groupProducts[]" value="306"/>
                                        <label class="form-check-label">Courroie de Distribution</label>
                                    </span>
                                </li>
                                                        <li role="option">
                                    <span class="form-check">
                                        <input type="checkbox" class="form-check-input" name="groupProducts[]" value="10"/>
                                        <label class="form-check-label">Courroie Trapézoïdale</label>
                                    </span>
                                </li>
                                                        <li role="option">
                                    <span class="form-check">
                                        <input type="checkbox" class="form-check-input" name="groupProducts[]" value="305"/>
                                        <label class="form-check-label">Courroie Trapézoïdale à Nervures</label>
                                    </span>
                                </li>
                                                        <li role="option">
                                    <span class="form-check">
                                        <input type="checkbox" class="form-check-input" name="groupProducts[]" value="582"/>
                                        <label class="form-check-label">Coussinet de Bielle</label>
                                    </span>
                                </li>
                                                        <li role="option">
                                    <span class="form-check">
                                        <input type="checkbox" class="form-check-input" name="groupProducts[]" value="331"/>
                                        <label class="form-check-label">Coussinet de Palier</label>
                                    </span>
                                </li>
                                                        <li role="option">
                                    <span class="form-check">
                                        <input type="checkbox" class="form-check-input" name="groupProducts[]" value="574"/>
                                        <label class="form-check-label">Coussinet de Vilebrequin</label>
                                    </span>
                                </li>
                                                        <li role="option">
                                    <span class="form-check">
                                        <input type="checkbox" class="form-check-input" name="groupProducts[]" value="977"/>
                                        <label class="form-check-label">Couvercle de Culasse</label>
                                    </span>
                                </li>
                                                        <li role="option">
                                    <span class="form-check">
                                        <input type="checkbox" class="form-check-input" name="groupProducts[]" value="3323"/>
                                        <label class="form-check-label">Couvercle, Boîtier du Filtre à Huile</label>
                                    </span>
                                </li>
                                                        <li role="option">
                                    <span class="form-check">
                                        <input type="checkbox" class="form-check-input" name="groupProducts[]" value="286"/>
                                        <label class="form-check-label">Crémaillère de Direction</label>
                                    </span>
                                </li>
                                                        <li role="option">
                                    <span class="form-check">
                                        <input type="checkbox" class="form-check-input" name="groupProducts[]" value="1263"/>
                                        <label class="form-check-label">Culasse de Cylindre</label>
                                    </span>
                                </li>
                                                        <li role="option">
                                    <span class="form-check">
                                        <input type="checkbox" class="form-check-input" name="groupProducts[]" value="432"/>
                                        <label class="form-check-label">Culbuteur, Distribution</label>
                                    </span>
                                </li>
                                                        <li role="option">
                                    <span class="form-check">
                                        <input type="checkbox" class="form-check-input" name="groupProducts[]" value="277"/>
                                        <label class="form-check-label">Cylindre de Roue</label>
                                    </span>
                                </li>
                                                        <li role="option">
                                    <span class="form-check">
                                        <input type="checkbox" class="form-check-input" name="groupProducts[]" value="234"/>
                                        <label class="form-check-label">Cylindre Émetteur, Embrayage</label>
                                    </span>
                                </li>
                                                        <li role="option">
                                    <span class="form-check">
                                        <input type="checkbox" class="form-check-input" name="groupProducts[]" value="620"/>
                                        <label class="form-check-label">Cylindre Récepteur, Embrayage</label>
                                    </span>
                                </li>
                                                        <li role="option">
                                    <span class="form-check">
                                        <input type="checkbox" class="form-check-input" name="groupProducts[]" value="3926"/>
                                        <label class="form-check-label">Débitmètre de Masse d'air</label>
                                    </span>
                                </li>
                                                        <li role="option">
                                    <span class="form-check">
                                        <input type="checkbox" class="form-check-input" name="groupProducts[]" value="1330"/>
                                        <label class="form-check-label">Déflecteur, Disque de Frein</label>
                                    </span>
                                </li>
                                                        <li role="option">
                                    <span class="form-check">
                                        <input type="checkbox" class="form-check-input" name="groupProducts[]" value="2"/>
                                        <label class="form-check-label">Démarreur</label>
                                    </span>
                                </li>
                                                        <li role="option">
                                    <span class="form-check">
                                        <input type="checkbox" class="form-check-input" name="groupProducts[]" value="3400"/>
                                        <label class="form-check-label">Détecteur de l'Usure des Plaquettes de Frein</label>
                                    </span>
                                </li>
                                                        <li role="option">
                                    <span class="form-check">
                                        <input type="checkbox" class="form-check-input" name="groupProducts[]" value="761"/>
                                        <label class="form-check-label">Détendeur de Suralimentation</label>
                                    </span>
                                </li>
                                                        <li role="option">
                                    <span class="form-check">
                                        <input type="checkbox" class="form-check-input" name="groupProducts[]" value="183"/>
                                        <label class="form-check-label">Détendeur</label>
                                    </span>
                                </li>
                                                        <li role="option">
                                    <span class="form-check">
                                        <input type="checkbox" class="form-check-input" name="groupProducts[]" value="14"/>
                                        <label class="form-check-label">Disperseur</label>
                                    </span>
                                </li>
                                                        <li role="option">
                                    <span class="form-check">
                                        <input type="checkbox" class="form-check-input" name="groupProducts[]" value="74"/>
                                        <label class="form-check-label">Dispositif d'Assistance de Frein</label>
                                    </span>
                                </li>
                                                        <li role="option">
                                    <span class="form-check">
                                        <input type="checkbox" class="form-check-input" name="groupProducts[]" value="39"/>
                                        <label class="form-check-label">Dispositif d'Attelage</label>
                                    </span>
                                </li>
                                                        <li role="option">
                                    <span class="form-check">
                                        <input type="checkbox" class="form-check-input" name="groupProducts[]" value="4106"/>
                                        <label class="form-check-label">Dispositif de Réglage Électrique d'Arbre à Cames</label>
                                    </span>
                                </li>
                                                        <li role="option">
                                    <span class="form-check">
                                        <input type="checkbox" class="form-check-input" name="groupProducts[]" value="262"/>
                                        <label class="form-check-label">Disque d'Embrayage</label>
                                    </span>
                                </li>
                                                        <li role="option">
                                    <span class="form-check">
                                        <input type="checkbox" class="form-check-input" name="groupProducts[]" value="82"/>
                                        <label class="form-check-label">Disque de Frein</label>
                                    </span>
                                </li>
                                                        <li role="option">
                                    <span class="form-check">
                                        <input type="checkbox" class="form-check-input" name="groupProducts[]" value="691"/>
                                        <label class="form-check-label">Doigt Allumeur</label>
                                    </span>
                                </li>
                                                        <li role="option">
                                    <span class="form-check">
                                        <input type="checkbox" class="form-check-input" name="groupProducts[]" value="421"/>
                                        <label class="form-check-label">Doublure d'Aile</label>
                                    </span>
                                </li>
                                                        <li role="option">
                                    <span class="form-check">
                                        <input type="checkbox" class="form-check-input" name="groupProducts[]" value="213"/>
                                        <label class="form-check-label">Douille de Guidage</label>
                                    </span>
                                </li>
                                                        <li role="option">
                                    <span class="form-check">
                                        <input type="checkbox" class="form-check-input" name="groupProducts[]" value="1595"/>
                                        <label class="form-check-label">Douille, Levier de Vitesse</label>
                                    </span>
                                </li>
                                                        <li role="option">
                                    <span class="form-check">
                                        <input type="checkbox" class="form-check-input" name="groupProducts[]" value="475"/>
                                        <label class="form-check-label">Durite de Radiateur</label>
                                    </span>
                                </li>
                                                        <li role="option">
                                    <span class="form-check">
                                        <input type="checkbox" class="form-check-input" name="groupProducts[]" value="3792"/>
                                        <label class="form-check-label">Écartement des Roues Élargi</label>
                                    </span>
                                </li>
                                                        <li role="option">
                                    <span class="form-check">
                                        <input type="checkbox" class="form-check-input" name="groupProducts[]" value="1220"/>
                                        <label class="form-check-label">Écrou</label>
                                    </span>
                                </li>
                                                        <li role="option">
                                    <span class="form-check">
                                        <input type="checkbox" class="form-check-input" name="groupProducts[]" value="658"/>
                                        <label class="form-check-label">Écrou de Roue</label>
                                    </span>
                                </li>
                                                        <li role="option">
                                    <span class="form-check">
                                        <input type="checkbox" class="form-check-input" name="groupProducts[]" value="450"/>
                                        <label class="form-check-label">Élargissement, Aile</label>
                                    </span>
                                </li>
                                                        <li role="option">
                                    <span class="form-check">
                                        <input type="checkbox" class="form-check-input" name="groupProducts[]" value="3497"/>
                                        <label class="form-check-label">Électroaimant de Levage</label>
                                    </span>
                                </li>
                                                        <li role="option">
                                    <span class="form-check">
                                        <input type="checkbox" class="form-check-input" name="groupProducts[]" value="791"/>
                                        <label class="form-check-label">Élément d'Ajustage</label>
                                    </span>
                                </li>
                                                        <li role="option">
                                    <span class="form-check">
                                        <input type="checkbox" class="form-check-input" name="groupProducts[]" value="2182"/>
                                        <label class="form-check-label">Embrayage à Roue Libre, Démarreur</label>
                                    </span>
                                </li>
                                                        <li role="option">
                                    <span class="form-check">
                                        <input type="checkbox" class="form-check-input" name="groupProducts[]" value="1236"/>
                                        <label class="form-check-label">Embrayage Magnétique, Pour Compresseurs de Climatisation</label>
                                    </span>
                                </li>
                                                        <li role="option">
                                    <span class="form-check">
                                        <input type="checkbox" class="form-check-input" name="groupProducts[]" value="509"/>
                                        <label class="form-check-label">Embrayage, Ventilateur de Radiateur</label>
                                    </span>
                                </li>
                                                        <li role="option">
                                    <span class="form-check">
                                        <input type="checkbox" class="form-check-input" name="groupProducts[]" value="19"/>
                                        <label class="form-check-label">Enjoliveur</label>
                                    </span>
                                </li>
                                                        <li role="option">
                                    <span class="form-check">
                                        <input type="checkbox" class="form-check-input" name="groupProducts[]" value="3229"/>
                                        <label class="form-check-label">Entretoise / Tige, Stabilisateur</label>
                                    </span>
                                </li>
                                                        <li role="option">
                                    <span class="form-check">
                                        <input type="checkbox" class="form-check-input" name="groupProducts[]" value="78"/>
                                        <label class="form-check-label">Étrier de Frein</label>
                                    </span>
                                </li>
                                                        <li role="option">
                                    <span class="form-check">
                                        <input type="checkbox" class="form-check-input" name="groupProducts[]" value="471"/>
                                        <label class="form-check-label">Évaporateur Climatisation</label>
                                    </span>
                                </li>
                                                        <li role="option">
                                    <span class="form-check">
                                        <input type="checkbox" class="form-check-input" name="groupProducts[]" value="291"/>
                                        <label class="form-check-label">Feu Antibrouillard Arrière</label>
                                    </span>
                                </li>
                                                        <li role="option">
                                    <span class="form-check">
                                        <input type="checkbox" class="form-check-input" name="groupProducts[]" value="391"/>
                                        <label class="form-check-label">Feu Arrière</label>
                                    </span>
                                </li>
                                                        <li role="option">
                                    <span class="form-check">
                                        <input type="checkbox" class="form-check-input" name="groupProducts[]" value="62"/>
                                        <label class="form-check-label">Feu Clignotant</label>
                                    </span>
                                </li>
                                                        <li role="option">
                                    <span class="form-check">
                                        <input type="checkbox" class="form-check-input" name="groupProducts[]" value="2466"/>
                                        <label class="form-check-label">Feu Diurne</label>
                                    </span>
                                </li>
                                                        <li role="option">
                                    <span class="form-check">
                                        <input type="checkbox" class="form-check-input" name="groupProducts[]" value="293"/>
                                        <label class="form-check-label">Feu Éclaireur de Plaque</label>
                                    </span>
                                </li>
                                                        <li role="option">
                                    <span class="form-check">
                                        <input type="checkbox" class="form-check-input" name="groupProducts[]" value="900"/>
                                        <label class="form-check-label">Feu Latéral</label>
                                    </span>
                                </li>
                                                        <li role="option">
                                    <span class="form-check">
                                        <input type="checkbox" class="form-check-input" name="groupProducts[]" value="1428"/>
                                        <label class="form-check-label">Feu Stop Additionnel</label>
                                    </span>
                                </li>
                                                        <li role="option">
                                    <span class="form-check">
                                        <input type="checkbox" class="form-check-input" name="groupProducts[]" value="3496"/>
                                        <label class="form-check-label">Fiche</label>
                                    </span>
                                </li>
                                                        <li role="option">
                                    <span class="form-check">
                                        <input type="checkbox" class="form-check-input" name="groupProducts[]" value="3166"/>
                                        <label class="form-check-label">Fiche Sertie</label>
                                    </span>
                                </li>
                                                        <li role="option">
                                    <span class="form-check">
                                        <input type="checkbox" class="form-check-input" name="groupProducts[]" value="8"/>
                                        <label class="form-check-label">Filtre à air</label>
                                    </span>
                                </li>
                                                        <li role="option">
                                    <span class="form-check">
                                        <input type="checkbox" class="form-check-input" name="groupProducts[]" value="9"/>
                                        <label class="form-check-label">Filtre à Carburant</label>
                                    </span>
                                </li>
                                                        <li role="option">
                                    <span class="form-check">
                                        <input type="checkbox" class="form-check-input" name="groupProducts[]" value="7"/>
                                        <label class="form-check-label">Filtre à Huile</label>
                                    </span>
                                </li>
                                                        <li role="option">
                                    <span class="form-check">
                                        <input type="checkbox" class="form-check-input" name="groupProducts[]" value="1256"/>
                                        <label class="form-check-label">Filtre à Particules / à Suie, Échappement</label>
                                    </span>
                                </li>
                                                        <li role="option">
                                    <span class="form-check">
                                        <input type="checkbox" class="form-check-input" name="groupProducts[]" value="851"/>
                                        <label class="form-check-label">Filtre Déshydratant, Climatisation</label>
                                    </span>
                                </li>
                                                        <li role="option">
                                    <span class="form-check">
                                        <input type="checkbox" class="form-check-input" name="groupProducts[]" value="416"/>
                                        <label class="form-check-label">Filtre Hydraulique, Boite Automatique</label>
                                    </span>
                                </li>
                                                        <li role="option">
                                    <span class="form-check">
                                        <input type="checkbox" class="form-check-input" name="groupProducts[]" value="424"/>
                                        <label class="form-check-label">Filtre</label>
                                    </span>
                                </li>
                                                        <li role="option">
                                    <span class="form-check">
                                        <input type="checkbox" class="form-check-input" name="groupProducts[]" value="1113"/>
                                        <label class="form-check-label">Fixation de Phare</label>
                                    </span>
                                </li>
                                                        <li role="option">
                                    <span class="form-check">
                                        <input type="checkbox" class="form-check-input" name="groupProducts[]" value="83"/>
                                        <label class="form-check-label">Flexible de Frein</label>
                                    </span>
                                </li>
                                                        <li role="option">
                                    <span class="form-check">
                                        <input type="checkbox" class="form-check-input" name="groupProducts[]" value="3401"/>
                                        <label class="form-check-label">Flexible</label>
                                    </span>
                                </li>
                                                        <li role="option">
                                    <span class="form-check">
                                        <input type="checkbox" class="form-check-input" name="groupProducts[]" value="3419"/>
                                        <label class="form-check-label">Fourchette de Débrayage, Embrayage</label>
                                    </span>
                                </li>
                                                        <li role="option">
                                    <span class="form-check">
                                        <input type="checkbox" class="form-check-input" name="groupProducts[]" value="1159"/>
                                        <label class="form-check-label">Fusée d'Essieu, Suspension de Roue</label>
                                    </span>
                                </li>
                                                        <li role="option">
                                    <span class="form-check">
                                        <input type="checkbox" class="form-check-input" name="groupProducts[]" value="60475"/>
                                        <label class="form-check-label">Fusible</label>
                                    </span>
                                </li>
                                                        <li role="option">
                                    <span class="form-check">
                                        <input type="checkbox" class="form-check-input" name="groupProducts[]" value="9217"/>
                                        <label class="form-check-label">Gaine de Chauffage</label>
                                    </span>
                                </li>
                                                        <li role="option">
                                    <span class="form-check">
                                        <input type="checkbox" class="form-check-input" name="groupProducts[]" value="3314"/>
                                        <label class="form-check-label">Gaine de Suralimentation</label>
                                    </span>
                                </li>
                                                        <li role="option">
                                    <span class="form-check">
                                        <input type="checkbox" class="form-check-input" name="groupProducts[]" value="1560"/>
                                        <label class="form-check-label">Garniture, Passage de Roue</label>
                                    </span>
                                </li>
                                                        <li role="option">
                                    <span class="form-check">
                                        <input type="checkbox" class="form-check-input" name="groupProducts[]" value="303"/>
                                        <label class="form-check-label">Gicleur d'eau de Nettoyage</label>
                                    </span>
                                </li>
                                                        <li role="option">
                                    <span class="form-check">
                                        <input type="checkbox" class="form-check-input" name="groupProducts[]" value="472"/>
                                        <label class="form-check-label">Grille de Radiateur</label>
                                    </span>
                                </li>
                                                        <li role="option">
                                    <span class="form-check">
                                        <input type="checkbox" class="form-check-input" name="groupProducts[]" value="244"/>
                                        <label class="form-check-label">Grille de Ventilation, Pare-Chocs</label>
                                    </span>
                                </li>
                                                        <li role="option">
                                    <span class="form-check">
                                        <input type="checkbox" class="form-check-input" name="groupProducts[]" value="4973"/>
                                        <label class="form-check-label">Groupe Carter, Turbocompresseur</label>
                                    </span>
                                </li>
                                                        <li role="option">
                                    <span class="form-check">
                                        <input type="checkbox" class="form-check-input" name="groupProducts[]" value="637"/>
                                        <label class="form-check-label">Groupe de Ressorts</label>
                                    </span>
                                </li>
                                                        <li role="option">
                                    <span class="form-check">
                                        <input type="checkbox" class="form-check-input" name="groupProducts[]" value="3846"/>
                                        <label class="form-check-label">Guidage à Galets, Porte Coulissante</label>
                                    </span>
                                </li>
                                                        <li role="option">
                                    <span class="form-check">
                                        <input type="checkbox" class="form-check-input" name="groupProducts[]" value="1644"/>
                                        <label class="form-check-label">Guide de Soupape</label>
                                    </span>
                                </li>
                                                        <li role="option">
                                    <span class="form-check">
                                        <input type="checkbox" class="form-check-input" name="groupProducts[]" value="1667"/>
                                        <label class="form-check-label">Huile de Transmission</label>
                                    </span>
                                </li>
                                                        <li role="option">
                                    <span class="form-check">
                                        <input type="checkbox" class="form-check-input" name="groupProducts[]" value="3224"/>
                                        <label class="form-check-label">Huile Moteur</label>
                                    </span>
                                </li>
                                                        <li role="option">
                                    <span class="form-check">
                                        <input type="checkbox" class="form-check-input" name="groupProducts[]" value="3069"/>
                                        <label class="form-check-label">Huile Pour Boite Automatique</label>
                                    </span>
                                </li>
                                                        <li role="option">
                                    <span class="form-check">
                                        <input type="checkbox" class="form-check-input" name="groupProducts[]" value="805"/>
                                        <label class="form-check-label">Indicateur de Pression d'Huile</label>
                                    </span>
                                </li>
                                                        <li role="option">
                                    <span class="form-check">
                                        <input type="checkbox" class="form-check-input" name="groupProducts[]" value="2187"/>
                                        <label class="form-check-label">Induit, Démarreur</label>
                                    </span>
                                </li>
                                                        <li role="option">
                                    <span class="form-check">
                                        <input type="checkbox" class="form-check-input" name="groupProducts[]" value="3902"/>
                                        <label class="form-check-label">Injecteur</label>
                                    </span>
                                </li>
                                                        <li role="option">
                                    <span class="form-check">
                                        <input type="checkbox" class="form-check-input" name="groupProducts[]" value="1353"/>
                                        <label class="form-check-label">Insonorisation du Compartiment Moteur</label>
                                    </span>
                                </li>
                                                        <li role="option">
                                    <span class="form-check">
                                        <input type="checkbox" class="form-check-input" name="groupProducts[]" value="468"/>
                                        <label class="form-check-label">Intercooler, Échangeur</label>
                                    </span>
                                </li>
                                                        <li role="option">
                                    <span class="form-check">
                                        <input type="checkbox" class="form-check-input" name="groupProducts[]" value="809"/>
                                        <label class="form-check-label">Interrupteur</label>
                                    </span>
                                </li>
                                                        <li role="option">
                                    <span class="form-check">
                                        <input type="checkbox" class="form-check-input" name="groupProducts[]" value="813"/>
                                        <label class="form-check-label">Interrupteur d'Allumage / de Démarreur</label>
                                    </span>
                                </li>
                                                        <li role="option">
                                    <span class="form-check">
                                        <input type="checkbox" class="form-check-input" name="groupProducts[]" value="816"/>
                                        <label class="form-check-label">Interrupteur de Signal de Détresse</label>
                                    </span>
                                </li>
                                                        <li role="option">
                                    <span class="form-check">
                                        <input type="checkbox" class="form-check-input" name="groupProducts[]" value="1103"/>
                                        <label class="form-check-label">Interrupteur de Température, Ventilateur de Radiateur</label>
                                    </span>
                                </li>
                                                        <li role="option">
                                    <span class="form-check">
                                        <input type="checkbox" class="form-check-input" name="groupProducts[]" value="806"/>
                                        <label class="form-check-label">Interrupteur des Feux de Freins</label>
                                    </span>
                                </li>
                                                        <li role="option">
                                    <span class="form-check">
                                        <input type="checkbox" class="form-check-input" name="groupProducts[]" value="599"/>
                                        <label class="form-check-label">Jauge de Niveau d'Huile</label>
                                    </span>
                                </li>
                                                        <li role="option">
                                    <span class="form-check">
                                        <input type="checkbox" class="form-check-input" name="groupProducts[]" value="1217"/>
                                        <label class="form-check-label">Jeu de Boulons de Culasse de Cylindre</label>
                                    </span>
                                </li>
                                                        <li role="option">
                                    <span class="form-check">
                                        <input type="checkbox" class="form-check-input" name="groupProducts[]" value="2905"/>
                                        <label class="form-check-label">Jeu de Bras, Suspension de Roue</label>
                                    </span>
                                </li>
                                                        <li role="option">
                                    <span class="form-check">
                                        <input type="checkbox" class="form-check-input" name="groupProducts[]" value="542"/>
                                        <label class="form-check-label">Jeu de Courroies Trapézoïdales à Nervures</label>
                                    </span>
                                </li>
                                                        <li role="option">
                                    <span class="form-check">
                                        <input type="checkbox" class="form-check-input" name="groupProducts[]" value="1165"/>
                                        <label class="form-check-label">Jeu de Douilles de Guidage, Étrier de Frein</label>
                                    </span>
                                </li>
                                                        <li role="option">
                                    <span class="form-check">
                                        <input type="checkbox" class="form-check-input" name="groupProducts[]" value="43"/>
                                        <label class="form-check-label">Jeu de Joints d'Étanchéité</label>
                                    </span>
                                </li>
                                                        <li role="option">
                                    <span class="form-check">
                                        <input type="checkbox" class="form-check-input" name="groupProducts[]" value="194"/>
                                        <label class="form-check-label">Jeu de Joints-Soufflets</label>
                                    </span>
                                </li>
                                                        <li role="option">
                                    <span class="form-check">
                                        <input type="checkbox" class="form-check-input" name="groupProducts[]" value="5"/>
                                        <label class="form-check-label">Jeu de Joints, Arbre de Transmission</label>
                                    </span>
                                </li>
                                                        <li role="option">
                                    <span class="form-check">
                                        <input type="checkbox" class="form-check-input" name="groupProducts[]" value="70"/>
                                        <label class="form-check-label">Jeu de Mâchoires de Frein</label>
                                    </span>
                                </li>
                                                        <li role="option">
                                    <span class="form-check">
                                        <input type="checkbox" class="form-check-input" name="groupProducts[]" value="444"/>
                                        <label class="form-check-label">Jeu de Segments de Pistons</label>
                                    </span>
                                </li>
                                                        <li role="option">
                                    <span class="form-check">
                                        <input type="checkbox" class="form-check-input" name="groupProducts[]" value="190"/>
                                        <label class="form-check-label">Jeu de Suspensions, Ressorts / Amortisseurs</label>
                                    </span>
                                </li>
                                                        <li role="option">
                                    <span class="form-check">
                                        <input type="checkbox" class="form-check-input" name="groupProducts[]" value="141"/>
                                        <label class="form-check-label">Joint</label>
                                    </span>
                                </li>
                                                        <li role="option">
                                    <span class="form-check">
                                        <input type="checkbox" class="form-check-input" name="groupProducts[]" value="27"/>
                                        <label class="form-check-label">Joint d'Étanchéité</label>
                                    </span>
                                </li>
                                                        <li role="option">
                                    <span class="form-check">
                                        <input type="checkbox" class="form-check-input" name="groupProducts[]" value="321"/>
                                        <label class="form-check-label">Joint de Cache Culbuteurs</label>
                                    </span>
                                </li>
                                                        <li role="option">
                                    <span class="form-check">
                                        <input type="checkbox" class="form-check-input" name="groupProducts[]" value="191"/>
                                        <label class="form-check-label">Joint-Soufflet</label>
                                    </span>
                                </li>
                                                        <li role="option">
                                    <span class="form-check">
                                        <input type="checkbox" class="form-check-input" name="groupProducts[]" value="1164"/>
                                        <label class="form-check-label">Kit d'Accessoires</label>
                                    </span>
                                </li>
                                                        <li role="option">
                                    <span class="form-check">
                                        <input type="checkbox" class="form-check-input" name="groupProducts[]" value="518"/>
                                        <label class="form-check-label">Kit d'Assemblage</label>
                                    </span>
                                </li>
                                                        <li role="option">
                                    <span class="form-check">
                                        <input type="checkbox" class="form-check-input" name="groupProducts[]" value="479"/>
                                        <label class="form-check-label">Kit d'Embrayage</label>
                                    </span>
                                </li>
                                                        <li role="option">
                                    <span class="form-check">
                                        <input type="checkbox" class="form-check-input" name="groupProducts[]" value="6545"/>
                                        <label class="form-check-label">Kit de Bras d'Essuie-Glace, Nettoyage des Vitres</label>
                                    </span>
                                </li>
                                                        <li role="option">
                                    <span class="form-check">
                                        <input type="checkbox" class="form-check-input" name="groupProducts[]" value="685"/>
                                        <label class="form-check-label">Kit de Câbles d'Allumage</label>
                                    </span>
                                </li>
                                                        <li role="option">
                                    <span class="form-check">
                                        <input type="checkbox" class="form-check-input" name="groupProducts[]" value="6138"/>
                                        <label class="form-check-label">Kit de Chaînes, Commande de Pompe à Huile</label>
                                    </span>
                                </li>
                                                        <li role="option">
                                    <span class="form-check">
                                        <input type="checkbox" class="form-check-input" name="groupProducts[]" value="5840"/>
                                        <label class="form-check-label">Kit de Clés à Douille</label>
                                    </span>
                                </li>
                                                        <li role="option">
                                    <span class="form-check">
                                        <input type="checkbox" class="form-check-input" name="groupProducts[]" value="8761"/>
                                        <label class="form-check-label">Kit de Clip de Fixation, Carrosserie</label>
                                    </span>
                                </li>
                                                        <li role="option">
                                    <span class="form-check">
                                        <input type="checkbox" class="form-check-input" name="groupProducts[]" value="5017"/>
                                        <label class="form-check-label">Kit de Coussinet de Vilebrequin</label>
                                    </span>
                                </li>
                                                        <li role="option">
                                    <span class="form-check">
                                        <input type="checkbox" class="form-check-input" name="groupProducts[]" value="6167"/>
                                        <label class="form-check-label">Kit de Coussinets de Bielle</label>
                                    </span>
                                </li>
                                                        <li role="option">
                                    <span class="form-check">
                                        <input type="checkbox" class="form-check-input" name="groupProducts[]" value="307"/>
                                        <label class="form-check-label">Kit de Distribution</label>
                                    </span>
                                </li>
                                                        <li role="option">
                                    <span class="form-check">
                                        <input type="checkbox" class="form-check-input" name="groupProducts[]" value="1389"/>
                                        <label class="form-check-label">Kit de Distribution par Chaine</label>
                                    </span>
                                </li>
                                                        <li role="option">
                                    <span class="form-check">
                                        <input type="checkbox" class="form-check-input" name="groupProducts[]" value="3176"/>
                                        <label class="form-check-label">Kit de Feux Arrières</label>
                                    </span>
                                </li>
                                                        <li role="option">
                                    <span class="form-check">
                                        <input type="checkbox" class="form-check-input" name="groupProducts[]" value="3174"/>
                                        <label class="form-check-label">Kit de Feux Clignotants</label>
                                    </span>
                                </li>
                                                        <li role="option">
                                    <span class="form-check">
                                        <input type="checkbox" class="form-check-input" name="groupProducts[]" value="3843"/>
                                        <label class="form-check-label">Kit de Filtre Hydraulique, Boite Automatique</label>
                                    </span>
                                </li>
                                                        <li role="option">
                                    <span class="form-check">
                                        <input type="checkbox" class="form-check-input" name="groupProducts[]" value="4055"/>
                                        <label class="form-check-label">Kit de Filtres</label>
                                    </span>
                                </li>
                                                        <li role="option">
                                    <span class="form-check">
                                        <input type="checkbox" class="form-check-input" name="groupProducts[]" value="3405"/>
                                        <label class="form-check-label">Kit de Freins, Frein à Disques</label>
                                    </span>
                                </li>
                                                        <li role="option">
                                    <span class="form-check">
                                        <input type="checkbox" class="form-check-input" name="groupProducts[]" value="3894"/>
                                        <label class="form-check-label">Kit de Joints, Injecteur</label>
                                    </span>
                                </li>
                                                        <li role="option">
                                    <span class="form-check">
                                        <input type="checkbox" class="form-check-input" name="groupProducts[]" value="2420"/>
                                        <label class="form-check-label">Kit de Montage</label>
                                    </span>
                                </li>
                                                        <li role="option">
                                    <span class="form-check">
                                        <input type="checkbox" class="form-check-input" name="groupProducts[]" value="402"/>
                                        <label class="form-check-label">Kit de Plaquettes de Frein, Frein à Disque</label>
                                    </span>
                                </li>
                                                        <li role="option">
                                    <span class="form-check">
                                        <input type="checkbox" class="form-check-input" name="groupProducts[]" value="4768"/>
                                        <label class="form-check-label">Kit de Poulies, Vilebrequin</label>
                                    </span>
                                </li>
                                                        <li role="option">
                                    <span class="form-check">
                                        <input type="checkbox" class="form-check-input" name="groupProducts[]" value="3328"/>
                                        <label class="form-check-label">Kit de Projecteurs Principaux</label>
                                    </span>
                                </li>
                                                        <li role="option">
                                    <span class="form-check">
                                        <input type="checkbox" class="form-check-input" name="groupProducts[]" value="919"/>
                                        <label class="form-check-label">Kit de Protection Contre la Poussière, Amortisseur</label>
                                    </span>
                                </li>
                                                        <li role="option">
                                    <span class="form-check">
                                        <input type="checkbox" class="form-check-input" name="groupProducts[]" value="2473"/>
                                        <label class="form-check-label">Kit de Remise en État, Bras de Liaison</label>
                                    </span>
                                </li>
                                                        <li role="option">
                                    <span class="form-check">
                                        <input type="checkbox" class="form-check-input" name="groupProducts[]" value="276"/>
                                        <label class="form-check-label">Kit de Réparation</label>
                                    </span>
                                </li>
                                                        <li role="option">
                                    <span class="form-check">
                                        <input type="checkbox" class="form-check-input" name="groupProducts[]" value="654"/>
                                        <label class="form-check-label">Kit de Roulements de Roue</label>
                                    </span>
                                </li>
                                                        <li role="option">
                                    <span class="form-check">
                                        <input type="checkbox" class="form-check-input" name="groupProducts[]" value="189"/>
                                        <label class="form-check-label">Kit de Suspension, Ressorts</label>
                                    </span>
                                </li>
                                                        <li role="option">
                                    <span class="form-check">
                                        <input type="checkbox" class="form-check-input" name="groupProducts[]" value="179"/>
                                        <label class="form-check-label">Kit Électrique, Dispositif d'Attelage</label>
                                    </span>
                                </li>
                                                        <li role="option">
                                    <span class="form-check">
                                        <input type="checkbox" class="form-check-input" name="groupProducts[]" value="4921"/>
                                        <label class="form-check-label">Kit Pces, Vidange d'Huile de Boîte de Vitesses Automatique</label>
                                    </span>
                                </li>
                                                        <li role="option">
                                    <span class="form-check">
                                        <input type="checkbox" class="form-check-input" name="groupProducts[]" value="1561"/>
                                        <label class="form-check-label">Lève-Vitre</label>
                                    </span>
                                </li>
                                                        <li role="option">
                                    <span class="form-check">
                                        <input type="checkbox" class="form-check-input" name="groupProducts[]" value="1650"/>
                                        <label class="form-check-label">Levier de Vitesse</label>
                                    </span>
                                </li>
                                                        <li role="option">
                                    <span class="form-check">
                                        <input type="checkbox" class="form-check-input" name="groupProducts[]" value="507"/>
                                        <label class="form-check-label">Levier Intermédiaire de Direction</label>
                                    </span>
                                </li>
                                                        <li role="option">
                                    <span class="form-check">
                                        <input type="checkbox" class="form-check-input" name="groupProducts[]" value="281"/>
                                        <label class="form-check-label">Mâchoire de Frein</label>
                                    </span>
                                </li>
                                                        <li role="option">
                                    <span class="form-check">
                                        <input type="checkbox" class="form-check-input" name="groupProducts[]" value="258"/>
                                        <label class="form-check-label">Maître-Cylindre de Frein</label>
                                    </span>
                                </li>
                                                        <li role="option">
                                    <span class="form-check">
                                        <input type="checkbox" class="form-check-input" name="groupProducts[]" value="1599"/>
                                        <label class="form-check-label">Manchon, Fixation du Bras Transversal</label>
                                    </span>
                                </li>
                                                        <li role="option">
                                    <span class="form-check">
                                        <input type="checkbox" class="form-check-input" name="groupProducts[]" value="261"/>
                                        <label class="form-check-label">Mécanisme d'Embrayage</label>
                                    </span>
                                </li>
                                                        <li role="option">
                                    <span class="form-check">
                                        <input type="checkbox" class="form-check-input" name="groupProducts[]" value="454"/>
                                        <label class="form-check-label">Module d'Alimentation en Carburant</label>
                                    </span>
                                </li>
                                                        <li role="option">
                                    <span class="form-check">
                                        <input type="checkbox" class="form-check-input" name="groupProducts[]" value="1415"/>
                                        <label class="form-check-label">Module de Tube d'Admission</label>
                                    </span>
                                </li>
                                                        <li role="option">
                                    <span class="form-check">
                                        <input type="checkbox" class="form-check-input" name="groupProducts[]" value="4198"/>
                                        <label class="form-check-label">Module-EGR</label>
                                    </span>
                                </li>
                                                        <li role="option">
                                    <span class="form-check">
                                        <input type="checkbox" class="form-check-input" name="groupProducts[]" value="295"/>
                                        <label class="form-check-label">Moteur d'Essuie-Glace</label>
                                    </span>
                                </li>
                                                        <li role="option">
                                    <span class="form-check">
                                        <input type="checkbox" class="form-check-input" name="groupProducts[]" value="792"/>
                                        <label class="form-check-label">Moteur Électrique</label>
                                    </span>
                                </li>
                                                        <li role="option">
                                    <span class="form-check">
                                        <input type="checkbox" class="form-check-input" name="groupProducts[]" value="653"/>
                                        <label class="form-check-label">Moyeu de Roue</label>
                                    </span>
                                </li>
                                                        <li role="option">
                                    <span class="form-check">
                                        <input type="checkbox" class="form-check-input" name="groupProducts[]" value="1501"/>
                                        <label class="form-check-label">Outil</label>
                                    </span>
                                </li>
                                                        <li role="option">
                                    <span class="form-check">
                                        <input type="checkbox" class="form-check-input" name="groupProducts[]" value="2109"/>
                                        <label class="form-check-label">Palier, Palier Central d'Arbre de Transmission</label>
                                    </span>
                                </li>
                                                        <li role="option">
                                    <span class="form-check">
                                        <input type="checkbox" class="form-check-input" name="groupProducts[]" value="901"/>
                                        <label class="form-check-label">Panneau Latéral</label>
                                    </span>
                                </li>
                                                        <li role="option">
                                    <span class="form-check">
                                        <input type="checkbox" class="form-check-input" name="groupProducts[]" value="1191"/>
                                        <label class="form-check-label">Pare-Brise</label>
                                    </span>
                                </li>
                                                        <li role="option">
                                    <span class="form-check">
                                        <input type="checkbox" class="form-check-input" name="groupProducts[]" value="938"/>
                                        <label class="form-check-label">Pare-Chocs</label>
                                    </span>
                                </li>
                                                        <li role="option">
                                    <span class="form-check">
                                        <input type="checkbox" class="form-check-input" name="groupProducts[]" value="755"/>
                                        <label class="form-check-label">Passage de Roue</label>
                                    </span>
                                </li>
                                                        <li role="option">
                                    <span class="form-check">
                                        <input type="checkbox" class="form-check-input" name="groupProducts[]" value="1300"/>
                                        <label class="form-check-label">Patin de Ressort</label>
                                    </span>
                                </li>
                                                        <li role="option">
                                    <span class="form-check">
                                        <input type="checkbox" class="form-check-input" name="groupProducts[]" value="3767"/>
                                        <label class="form-check-label">Patte Métallique</label>
                                    </span>
                                </li>
                                                        <li role="option">
                                    <span class="form-check">
                                        <input type="checkbox" class="form-check-input" name="groupProducts[]" value="3625"/>
                                        <label class="form-check-label">Peinture Combinée Pour Voitures</label>
                                    </span>
                                </li>
                                                        <li role="option">
                                    <span class="form-check">
                                        <input type="checkbox" class="form-check-input" name="groupProducts[]" value="1056"/>
                                        <label class="form-check-label">Pièce de Serrage, Échappement</label>
                                    </span>
                                </li>
                                                        <li role="option">
                                    <span class="form-check">
                                        <input type="checkbox" class="form-check-input" name="groupProducts[]" value="1530"/>
                                        <label class="form-check-label">Pignon, Démarreur</label>
                                    </span>
                                </li>
                                                        <li role="option">
                                    <span class="form-check">
                                        <input type="checkbox" class="form-check-input" name="groupProducts[]" value="443"/>
                                        <label class="form-check-label">Piston</label>
                                    </span>
                                </li>
                                                        <li role="option">
                                    <span class="form-check">
                                        <input type="checkbox" class="form-check-input" name="groupProducts[]" value="177"/>
                                        <label class="form-check-label">Plaque de Seuil</label>
                                    </span>
                                </li>
                                                        <li role="option">
                                    <span class="form-check">
                                        <input type="checkbox" class="form-check-input" name="groupProducts[]" value="2980"/>
                                        <label class="form-check-label">Plot de Berceau / Support d'Agrégats</label>
                                    </span>
                                </li>
                                                        <li role="option">
                                    <span class="form-check">
                                        <input type="checkbox" class="form-check-input" name="groupProducts[]" value="150"/>
                                        <label class="form-check-label">Pochette Basse</label>
                                    </span>
                                </li>
                                                        <li role="option">
                                    <span class="form-check">
                                        <input type="checkbox" class="form-check-input" name="groupProducts[]" value="319"/>
                                        <label class="form-check-label">Pochette Haute</label>
                                    </span>
                                </li>
                                                        <li role="option">
                                    <span class="form-check">
                                        <input type="checkbox" class="form-check-input" name="groupProducts[]" value="560"/>
                                        <label class="form-check-label">Pochette Moteur Complète</label>
                                    </span>
                                </li>
                                                        <li role="option">
                                    <span class="form-check">
                                        <input type="checkbox" class="form-check-input" name="groupProducts[]" value="3719"/>
                                        <label class="form-check-label">Poignée de Porte, Équipement Intérieur</label>
                                    </span>
                                </li>
                                                        <li role="option">
                                    <span class="form-check">
                                        <input type="checkbox" class="form-check-input" name="groupProducts[]" value="1373"/>
                                        <label class="form-check-label">Poignée Extérieure de Porte</label>
                                    </span>
                                </li>
                                                        <li role="option">
                                    <span class="form-check">
                                        <input type="checkbox" class="form-check-input" name="groupProducts[]" value="3707"/>
                                        <label class="form-check-label">Pommeau</label>
                                    </span>
                                </li>
                                                        <li role="option">
                                    <span class="form-check">
                                        <input type="checkbox" class="form-check-input" name="groupProducts[]" value="458"/>
                                        <label class="form-check-label">Pompe à Carburant</label>
                                    </span>
                                </li>
                                                        <li role="option">
                                    <span class="form-check">
                                        <input type="checkbox" class="form-check-input" name="groupProducts[]" value="1260"/>
                                        <label class="form-check-label">Pompe à Eau</label>
                                    </span>
                                </li>
                                                        <li role="option">
                                    <span class="form-check">
                                        <input type="checkbox" class="form-check-input" name="groupProducts[]" value="3096"/>
                                        <label class="form-check-label">Pompe à Eau + Kit de Courroie de Distribution</label>
                                    </span>
                                </li>
                                                        <li role="option">
                                    <span class="form-check">
                                        <input type="checkbox" class="form-check-input" name="groupProducts[]" value="1351"/>
                                        <label class="form-check-label">Pompe à eau Auxiliaire (Circuit d'eau de Refroidiss.)</label>
                                    </span>
                                </li>
                                                        <li role="option">
                                    <span class="form-check">
                                        <input type="checkbox" class="form-check-input" name="groupProducts[]" value="3918"/>
                                        <label class="form-check-label">Pompe à Haute Pression</label>
                                    </span>
                                </li>
                                                        <li role="option">
                                    <span class="form-check">
                                        <input type="checkbox" class="form-check-input" name="groupProducts[]" value="596"/>
                                        <label class="form-check-label">Pompe à Huile</label>
                                    </span>
                                </li>
                                                        <li role="option">
                                    <span class="form-check">
                                        <input type="checkbox" class="form-check-input" name="groupProducts[]" value="387"/>
                                        <label class="form-check-label">Pompe à Vide, Freinage</label>
                                    </span>
                                </li>
                                                        <li role="option">
                                    <span class="form-check">
                                        <input type="checkbox" class="form-check-input" name="groupProducts[]" value="794"/>
                                        <label class="form-check-label">Pompe d'Eau de Nettoyage, Nettoyage des Vitres</label>
                                    </span>
                                </li>
                                                        <li role="option">
                                    <span class="form-check">
                                        <input type="checkbox" class="form-check-input" name="groupProducts[]" value="999"/>
                                        <label class="form-check-label">Pompe de Circulation d'Eau, Chauffage Auxiliaire</label>
                                    </span>
                                </li>
                                                        <li role="option">
                                    <span class="form-check">
                                        <input type="checkbox" class="form-check-input" name="groupProducts[]" value="12"/>
                                        <label class="form-check-label">Pompe Hydraulique, Direction</label>
                                    </span>
                                </li>
                                                        <li role="option">
                                    <span class="form-check">
                                        <input type="checkbox" class="form-check-input" name="groupProducts[]" value="460"/>
                                        <label class="form-check-label">Pompe, Pré Alimentation de Carburant</label>
                                    </span>
                                </li>
                                                        <li role="option">
                                    <span class="form-check">
                                        <input type="checkbox" class="form-check-input" name="groupProducts[]" value="1529"/>
                                        <label class="form-check-label">Pont de Diodes, Alternateur</label>
                                    </span>
                                </li>
                                                        <li role="option">
                                    <span class="form-check">
                                        <input type="checkbox" class="form-check-input" name="groupProducts[]" value="2181"/>
                                        <label class="form-check-label">Porte-Balais</label>
                                    </span>
                                </li>
                                                        <li role="option">
                                    <span class="form-check">
                                        <input type="checkbox" class="form-check-input" name="groupProducts[]" value="3901"/>
                                        <label class="form-check-label">Porte-Injecteur</label>
                                    </span>
                                </li>
                                                        <li role="option">
                                    <span class="form-check">
                                        <input type="checkbox" class="form-check-input" name="groupProducts[]" value="312"/>
                                        <label class="form-check-label">Poulie Renvoi / Transmission</label>
                                    </span>
                                </li>
                                                        <li role="option">
                                    <span class="form-check">
                                        <input type="checkbox" class="form-check-input" name="groupProducts[]" value="1390"/>
                                        <label class="form-check-label">Poulie Roue Libre, Alternateur</label>
                                    </span>
                                </li>
                                                        <li role="option">
                                    <span class="form-check">
                                        <input type="checkbox" class="form-check-input" name="groupProducts[]" value="308"/>
                                        <label class="form-check-label">Poulie-Tendeur, Courroie de Distribution</label>
                                    </span>
                                </li>
                                                        <li role="option">
                                    <span class="form-check">
                                        <input type="checkbox" class="form-check-input" name="groupProducts[]" value="1108"/>
                                        <label class="form-check-label">Poulie</label>
                                    </span>
                                </li>
                                                        <li role="option">
                                    <span class="form-check">
                                        <input type="checkbox" class="form-check-input" name="groupProducts[]" value="1216"/>
                                        <label class="form-check-label">Poussoir de Soupape</label>
                                    </span>
                                </li>
                                                        <li role="option">
                                    <span class="form-check">
                                        <input type="checkbox" class="form-check-input" name="groupProducts[]" value="4145"/>
                                        <label class="form-check-label">Prérésistance, Moteur Électrique (Ventilateur de Radiateur)</label>
                                    </span>
                                </li>
                                                        <li role="option">
                                    <span class="form-check">
                                        <input type="checkbox" class="form-check-input" name="groupProducts[]" value="1360"/>
                                        <label class="form-check-label">Pressostat, Climatisation</label>
                                    </span>
                                </li>
                                                        <li role="option">
                                    <span class="form-check">
                                        <input type="checkbox" class="form-check-input" name="groupProducts[]" value="289"/>
                                        <label class="form-check-label">Projecteur Antibrouillard</label>
                                    </span>
                                </li>
                                                        <li role="option">
                                    <span class="form-check">
                                        <input type="checkbox" class="form-check-input" name="groupProducts[]" value="724"/>
                                        <label class="form-check-label">Projecteur de Travail</label>
                                    </span>
                                </li>
                                                        <li role="option">
                                    <span class="form-check">
                                        <input type="checkbox" class="form-check-input" name="groupProducts[]" value="259"/>
                                        <label class="form-check-label">Projecteur Principal</label>
                                    </span>
                                </li>
                                                        <li role="option">
                                    <span class="form-check">
                                        <input type="checkbox" class="form-check-input" name="groupProducts[]" value="2669"/>
                                        <label class="form-check-label">Pulseur d'air Habitacle</label>
                                    </span>
                                </li>
                                                        <li role="option">
                                    <span class="form-check">
                                        <input type="checkbox" class="form-check-input" name="groupProducts[]" value="1050"/>
                                        <label class="form-check-label">Raccord de Tuyau, Système d'Échappement</label>
                                    </span>
                                </li>
                                                        <li role="option">
                                    <span class="form-check">
                                        <input type="checkbox" class="form-check-input" name="groupProducts[]" value="469"/>
                                        <label class="form-check-label">Radiateur d'Huile</label>
                                    </span>
                                </li>
                                                        <li role="option">
                                    <span class="form-check">
                                        <input type="checkbox" class="form-check-input" name="groupProducts[]" value="1047"/>
                                        <label class="form-check-label">Radiateur d'Huile de Boite Automatique</label>
                                    </span>
                                </li>
                                                        <li role="option">
                                    <span class="form-check">
                                        <input type="checkbox" class="form-check-input" name="groupProducts[]" value="470"/>
                                        <label class="form-check-label">Radiateur</label>
                                    </span>
                                </li>
                                                        <li role="option">
                                    <span class="form-check">
                                        <input type="checkbox" class="form-check-input" name="groupProducts[]" value="943"/>
                                        <label class="form-check-label">Recouvrement de Pare-Chocs, Dispositif d'Attelage</label>
                                    </span>
                                </li>
                                                        <li role="option">
                                    <span class="form-check">
                                        <input type="checkbox" class="form-check-input" name="groupProducts[]" value="1701"/>
                                        <label class="form-check-label">Régleur de Timonerie, Freinage</label>
                                    </span>
                                </li>
                                                        <li role="option">
                                    <span class="form-check">
                                        <input type="checkbox" class="form-check-input" name="groupProducts[]" value="288"/>
                                        <label class="form-check-label">Régulateur d'Alternateur</label>
                                    </span>
                                </li>
                                                        <li role="option">
                                    <span class="form-check">
                                        <input type="checkbox" class="form-check-input" name="groupProducts[]" value="73"/>
                                        <label class="form-check-label">Régulateur de Freinage</label>
                                    </span>
                                </li>
                                                        <li role="option">
                                    <span class="form-check">
                                        <input type="checkbox" class="form-check-input" name="groupProducts[]" value="4394"/>
                                        <label class="form-check-label">Régulateur</label>
                                    </span>
                                </li>
                                                        <li role="option">
                                    <span class="form-check">
                                        <input type="checkbox" class="form-check-input" name="groupProducts[]" value="800"/>
                                        <label class="form-check-label">Relais, Courant de Travail</label>
                                    </span>
                                </li>
                                                        <li role="option">
                                    <span class="form-check">
                                        <input type="checkbox" class="form-check-input" name="groupProducts[]" value="837"/>
                                        <label class="form-check-label">Réservoir d'Eau de Nettoyage, Nettoyage des Vitres</label>
                                    </span>
                                </li>
                                                        <li role="option">
                                    <span class="form-check">
                                        <input type="checkbox" class="form-check-input" name="groupProducts[]" value="453"/>
                                        <label class="form-check-label">Réservoir de Carburant</label>
                                    </span>
                                </li>
                                                        <li role="option">
                                    <span class="form-check">
                                        <input type="checkbox" class="form-check-input" name="groupProducts[]" value="2975"/>
                                        <label class="form-check-label">Résistance, Pulseur d'Air Habitacle</label>
                                    </span>
                                </li>
                                                        <li role="option">
                                    <span class="form-check">
                                        <input type="checkbox" class="form-check-input" name="groupProducts[]" value="1453"/>
                                        <label class="form-check-label">Ressort</label>
                                    </span>
                                </li>
                                                        <li role="option">
                                    <span class="form-check">
                                        <input type="checkbox" class="form-check-input" name="groupProducts[]" value="188"/>
                                        <label class="form-check-label">Ressort de Suspension</label>
                                    </span>
                                </li>
                                                        <li role="option">
                                    <span class="form-check">
                                        <input type="checkbox" class="form-check-input" name="groupProducts[]" value="4119"/>
                                        <label class="form-check-label">Ressort Pneumatique, Châssis</label>
                                    </span>
                                </li>
                                                        <li role="option">
                                    <span class="form-check">
                                        <input type="checkbox" class="form-check-input" name="groupProducts[]" value="4826"/>
                                        <label class="form-check-label">Ressort Tournant, Airbag</label>
                                    </span>
                                </li>
                                                        <li role="option">
                                    <span class="form-check">
                                        <input type="checkbox" class="form-check-input" name="groupProducts[]" value="50"/>
                                        <label class="form-check-label">Rétroviseur Extérieur</label>
                                    </span>
                                </li>
                                                        <li role="option">
                                    <span class="form-check">
                                        <input type="checkbox" class="form-check-input" name="groupProducts[]" value="208"/>
                                        <label class="form-check-label">Revêtement Avant</label>
                                    </span>
                                </li>
                                                        <li role="option">
                                    <span class="form-check">
                                        <input type="checkbox" class="form-check-input" name="groupProducts[]" value="23"/>
                                        <label class="form-check-label">Revêtement, Rétroviseur Extérieur</label>
                                    </span>
                                </li>
                                                        <li role="option">
                                    <span class="form-check">
                                        <input type="checkbox" class="form-check-input" name="groupProducts[]" value="1589"/>
                                        <label class="form-check-label">Rondelle d'Écartement</label>
                                    </span>
                                </li>
                                                        <li role="option">
                                    <span class="form-check">
                                        <input type="checkbox" class="form-check-input" name="groupProducts[]" value="135"/>
                                        <label class="form-check-label">Rondelle d'Étanchéité, Vis de Vidange d'Huile</label>
                                    </span>
                                </li>
                                                        <li role="option">
                                    <span class="form-check">
                                        <input type="checkbox" class="form-check-input" name="groupProducts[]" value="1521"/>
                                        <label class="form-check-label">Rondelle de Compensation, Jeu des Soupapes</label>
                                    </span>
                                </li>
                                                        <li role="option">
                                    <span class="form-check">
                                        <input type="checkbox" class="form-check-input" name="groupProducts[]" value="2193"/>
                                        <label class="form-check-label">Rotor, Alternateur</label>
                                    </span>
                                </li>
                                                        <li role="option">
                                    <span class="form-check">
                                        <input type="checkbox" class="form-check-input" name="groupProducts[]" value="914"/>
                                        <label class="form-check-label">Rotule de Barre de Connexion</label>
                                    </span>
                                </li>
                                                        <li role="option">
                                    <span class="form-check">
                                        <input type="checkbox" class="form-check-input" name="groupProducts[]" value="2066"/>
                                        <label class="form-check-label">Rotule de Direction</label>
                                    </span>
                                </li>
                                                        <li role="option">
                                    <span class="form-check">
                                        <input type="checkbox" class="form-check-input" name="groupProducts[]" value="51"/>
                                        <label class="form-check-label">Rotule de Direction Intérieure, Barre de Connexion</label>
                                    </span>
                                </li>
                                                        <li role="option">
                                    <span class="form-check">
                                        <input type="checkbox" class="form-check-input" name="groupProducts[]" value="2462"/>
                                        <label class="form-check-label">Rotule de Suspension</label>
                                    </span>
                                </li>
                                                        <li role="option">
                                    <span class="form-check">
                                        <input type="checkbox" class="form-check-input" name="groupProducts[]" value="655"/>
                                        <label class="form-check-label">Roulement de Roue</label>
                                    </span>
                                </li>
                                                        <li role="option">
                                    <span class="form-check">
                                        <input type="checkbox" class="form-check-input" name="groupProducts[]" value="1626"/>
                                        <label class="form-check-label">Roulement, Coupelle de Suspension</label>
                                    </span>
                                </li>
                                                        <li role="option">
                                    <span class="form-check">
                                        <input type="checkbox" class="form-check-input" name="groupProducts[]" value="3324"/>
                                        <label class="form-check-label">Séparateur d'Huile, Prise de Recyclage des gaz de Carter</label>
                                    </span>
                                </li>
                                                        <li role="option">
                                    <span class="form-check">
                                        <input type="checkbox" class="form-check-input" name="groupProducts[]" value="1365"/>
                                        <label class="form-check-label">Serrure de Capot-Moteur</label>
                                    </span>
                                </li>
                                                        <li role="option">
                                    <span class="form-check">
                                        <input type="checkbox" class="form-check-input" name="groupProducts[]" value="1362"/>
                                        <label class="form-check-label">Serrure de Hayon</label>
                                    </span>
                                </li>
                                                        <li role="option">
                                    <span class="form-check">
                                        <input type="checkbox" class="form-check-input" name="groupProducts[]" value="1361"/>
                                        <label class="form-check-label">Serrure de Porte</label>
                                    </span>
                                </li>
                                                        <li role="option">
                                    <span class="form-check">
                                        <input type="checkbox" class="form-check-input" name="groupProducts[]" value="3437"/>
                                        <label class="form-check-label">Silencieux Arrière</label>
                                    </span>
                                </li>
                                                        <li role="option">
                                    <span class="form-check">
                                        <input type="checkbox" class="form-check-input" name="groupProducts[]" value="3435"/>
                                        <label class="form-check-label">Silencieux Avant</label>
                                    </span>
                                </li>
                                                        <li role="option">
                                    <span class="form-check">
                                        <input type="checkbox" class="form-check-input" name="groupProducts[]" value="3436"/>
                                        <label class="form-check-label">Silencieux Central</label>
                                    </span>
                                </li>
                                                        <li role="option">
                                    <span class="form-check">
                                        <input type="checkbox" class="form-check-input" name="groupProducts[]" value="830"/>
                                        <label class="form-check-label">Sonde de Température, Liquide de Refroidissement</label>
                                    </span>
                                </li>
                                                        <li role="option">
                                    <span class="form-check">
                                        <input type="checkbox" class="form-check-input" name="groupProducts[]" value="3922"/>
                                        <label class="form-check-label">Sonde Lambda</label>
                                    </span>
                                </li>
                                                        <li role="option">
                                    <span class="form-check">
                                        <input type="checkbox" class="form-check-input" name="groupProducts[]" value="324"/>
                                        <label class="form-check-label">Soufflet de Suspension, Suspension Pneumatique</label>
                                    </span>
                                </li>
                                                        <li role="option">
                                    <span class="form-check">
                                        <input type="checkbox" class="form-check-input" name="groupProducts[]" value="1269"/>
                                        <label class="form-check-label">Soupape d'Admission</label>
                                    </span>
                                </li>
                                                        <li role="option">
                                    <span class="form-check">
                                        <input type="checkbox" class="form-check-input" name="groupProducts[]" value="1270"/>
                                        <label class="form-check-label">Soupape d'Émission</label>
                                    </span>
                                </li>
                                                        <li role="option">
                                    <span class="form-check">
                                        <input type="checkbox" class="form-check-input" name="groupProducts[]" value="3886"/>
                                        <label class="form-check-label">Soupape, Dégazage du Carter</label>
                                    </span>
                                </li>
                                                        <li role="option">
                                    <span class="form-check">
                                        <input type="checkbox" class="form-check-input" name="groupProducts[]" value="845"/>
                                        <label class="form-check-label">Spoiler</label>
                                    </span>
                                </li>
                                                        <li role="option">
                                    <span class="form-check">
                                        <input type="checkbox" class="form-check-input" name="groupProducts[]" value="274"/>
                                        <label class="form-check-label">Stabilisateur, Châssis</label>
                                    </span>
                                </li>
                                                        <li role="option">
                                    <span class="form-check">
                                        <input type="checkbox" class="form-check-input" name="groupProducts[]" value="2192"/>
                                        <label class="form-check-label">Stator, Alternateur</label>
                                    </span>
                                </li>
                                                        <li role="option">
                                    <span class="form-check">
                                        <input type="checkbox" class="form-check-input" name="groupProducts[]" value="122"/>
                                        <label class="form-check-label">Support</label>
                                    </span>
                                </li>
                                                        <li role="option">
                                    <span class="form-check">
                                        <input type="checkbox" class="form-check-input" name="groupProducts[]" value="247"/>
                                        <label class="form-check-label">Support Moteur</label>
                                    </span>
                                </li>
                                                        <li role="option">
                                    <span class="form-check">
                                        <input type="checkbox" class="form-check-input" name="groupProducts[]" value="248"/>
                                        <label class="form-check-label">Suspension</label>
                                    </span>
                                </li>
                                                        <li role="option">
                                    <span class="form-check">
                                        <input type="checkbox" class="form-check-input" name="groupProducts[]" value="467"/>
                                        <label class="form-check-label">Système de Chauffage</label>
                                    </span>
                                </li>
                                                        <li role="option">
                                    <span class="form-check">
                                        <input type="checkbox" class="form-check-input" name="groupProducts[]" value="879"/>
                                        <label class="form-check-label">Système de Nettoyage des Vitres</label>
                                    </span>
                                </li>
                                                        <li role="option">
                                    <span class="form-check">
                                        <input type="checkbox" class="form-check-input" name="groupProducts[]" value="123"/>
                                        <label class="form-check-label">Tambour de Frein</label>
                                    </span>
                                </li>
                                                        <li role="option">
                                    <span class="form-check">
                                        <input type="checkbox" class="form-check-input" name="groupProducts[]" value="1750"/>
                                        <label class="form-check-label">Temporisateur de Préchauffage</label>
                                    </span>
                                </li>
                                                        <li role="option">
                                    <span class="form-check">
                                        <input type="checkbox" class="form-check-input" name="groupProducts[]" value="541"/>
                                        <label class="form-check-label">Tendeur de Courroie</label>
                                    </span>
                                </li>
                                                        <li role="option">
                                    <span class="form-check">
                                        <input type="checkbox" class="form-check-input" name="groupProducts[]" value="571"/>
                                        <label class="form-check-label">Tendeur, Chaine de Distribution</label>
                                    </span>
                                </li>
                                                        <li role="option">
                                    <span class="form-check">
                                        <input type="checkbox" class="form-check-input" name="groupProducts[]" value="692"/>
                                        <label class="form-check-label">Tête d'Allumeur</label>
                                    </span>
                                </li>
                                                        <li role="option">
                                    <span class="form-check">
                                        <input type="checkbox" class="form-check-input" name="groupProducts[]" value="316"/>
                                        <label class="form-check-label">Thermostat, Liquide de Refroidissement</label>
                                    </span>
                                </li>
                                                        <li role="option">
                                    <span class="form-check">
                                        <input type="checkbox" class="form-check-input" name="groupProducts[]" value="124"/>
                                        <label class="form-check-label">Tirette à Câble</label>
                                    </span>
                                </li>
                                                        <li role="option">
                                    <span class="form-check">
                                        <input type="checkbox" class="form-check-input" name="groupProducts[]" value="1238"/>
                                        <label class="form-check-label">Tirette de Capot Moteur</label>
                                    </span>
                                </li>
                                                        <li role="option">
                                    <span class="form-check">
                                        <input type="checkbox" class="form-check-input" name="groupProducts[]" value="4694"/>
                                        <label class="form-check-label">Tournevis</label>
                                    </span>
                                </li>
                                                        <li role="option">
                                    <span class="form-check">
                                        <input type="checkbox" class="form-check-input" name="groupProducts[]" value="1134"/>
                                        <label class="form-check-label">Transmetteur de Pression, Contrôle des Gaz d'Échappement</label>
                                    </span>
                                </li>
                                                        <li role="option">
                                    <span class="form-check">
                                        <input type="checkbox" class="form-check-input" name="groupProducts[]" value="754"/>
                                        <label class="form-check-label">Traverse</label>
                                    </span>
                                </li>
                                                        <li role="option">
                                    <span class="form-check">
                                        <input type="checkbox" class="form-check-input" name="groupProducts[]" value="1147"/>
                                        <label class="form-check-label">Trépied, Arbre de Commande</label>
                                    </span>
                                </li>
                                                        <li role="option">
                                    <span class="form-check">
                                        <input type="checkbox" class="form-check-input" name="groupProducts[]" value="300"/>
                                        <label class="form-check-label">Tringlerie d'Essuie-Glace</label>
                                    </span>
                                </li>
                                                        <li role="option">
                                    <span class="form-check">
                                        <input type="checkbox" class="form-check-input" name="groupProducts[]" value="2234"/>
                                        <label class="form-check-label">Turbocompresseur, Suralimentation</label>
                                    </span>
                                </li>
                                                        <li role="option">
                                    <span class="form-check">
                                        <input type="checkbox" class="form-check-input" name="groupProducts[]" value="1481"/>
                                        <label class="form-check-label">Tuyau</label>
                                    </span>
                                </li>
                                                        <li role="option">
                                    <span class="form-check">
                                        <input type="checkbox" class="form-check-input" name="groupProducts[]" value="1591"/>
                                        <label class="form-check-label">Tuyau d'Aspiration, Alimentation d'air</label>
                                    </span>
                                </li>
                                                        <li role="option">
                                    <span class="form-check">
                                        <input type="checkbox" class="form-check-input" name="groupProducts[]" value="17"/>
                                        <label class="form-check-label">Tuyau d'Échappement</label>
                                    </span>
                                </li>
                                                        <li role="option">
                                    <span class="form-check">
                                        <input type="checkbox" class="form-check-input" name="groupProducts[]" value="556"/>
                                        <label class="form-check-label">Tuyau d'Huile</label>
                                    </span>
                                </li>
                                                        <li role="option">
                                    <span class="form-check">
                                        <input type="checkbox" class="form-check-input" name="groupProducts[]" value="609"/>
                                        <label class="form-check-label">Tuyau de Carburant</label>
                                    </span>
                                </li>
                                                        <li role="option">
                                    <span class="form-check">
                                        <input type="checkbox" class="form-check-input" name="groupProducts[]" value="3971"/>
                                        <label class="form-check-label">Tuyau Flexible, Échappement</label>
                                    </span>
                                </li>
                                                        <li role="option">
                                    <span class="form-check">
                                        <input type="checkbox" class="form-check-input" name="groupProducts[]" value="677"/>
                                        <label class="form-check-label">Tuyau Hydraulique, Direction</label>
                                    </span>
                                </li>
                                                        <li role="option">
                                    <span class="form-check">
                                        <input type="checkbox" class="form-check-input" name="groupProducts[]" value="610"/>
                                        <label class="form-check-label">Tuyauterie de Carburant</label>
                                    </span>
                                </li>
                                                        <li role="option">
                                    <span class="form-check">
                                        <input type="checkbox" class="form-check-input" name="groupProducts[]" value="546"/>
                                        <label class="form-check-label">Tuyauterie du Réfrigérant</label>
                                    </span>
                                </li>
                                                        <li role="option">
                                    <span class="form-check">
                                        <input type="checkbox" class="form-check-input" name="groupProducts[]" value="4179"/>
                                        <label class="form-check-label">Tuyauterie, Vanne EGR</label>
                                    </span>
                                </li>
                                                        <li role="option">
                                    <span class="form-check">
                                        <input type="checkbox" class="form-check-input" name="groupProducts[]" value="1382"/>
                                        <label class="form-check-label">Unité d'Injection de Carburant</label>
                                    </span>
                                </li>
                                                        <li role="option">
                                    <span class="form-check">
                                        <input type="checkbox" class="form-check-input" name="groupProducts[]" value="3826"/>
                                        <label class="form-check-label">Valve de Commande, Réglage d'Arbres à Came</label>
                                    </span>
                                </li>
                                                        <li role="option">
                                    <span class="form-check">
                                        <input type="checkbox" class="form-check-input" name="groupProducts[]" value="2920"/>
                                        <label class="form-check-label">Valve de Réglage, Compresseur</label>
                                    </span>
                                </li>
                                                        <li role="option">
                                    <span class="form-check">
                                        <input type="checkbox" class="form-check-input" name="groupProducts[]" value="2073"/>
                                        <label class="form-check-label">Valve Magnétique</label>
                                    </span>
                                </li>
                                                        <li role="option">
                                    <span class="form-check">
                                        <input type="checkbox" class="form-check-input" name="groupProducts[]" value="1145"/>
                                        <label class="form-check-label">Vanne EGR</label>
                                    </span>
                                </li>
                                                        <li role="option">
                                    <span class="form-check">
                                        <input type="checkbox" class="form-check-input" name="groupProducts[]" value="397"/>
                                        <label class="form-check-label">Vase d'Expansion, Liquide de Refroidissement</label>
                                    </span>
                                </li>
                                                        <li role="option">
                                    <span class="form-check">
                                        <input type="checkbox" class="form-check-input" name="groupProducts[]" value="508"/>
                                        <label class="form-check-label">Ventilateur, Refroidissement du Moteur</label>
                                    </span>
                                </li>
                                                        <li role="option">
                                    <span class="form-check">
                                        <input type="checkbox" class="form-check-input" name="groupProducts[]" value="219"/>
                                        <label class="form-check-label">Vérin de Hayon, de Coffre</label>
                                    </span>
                                </li>
                                                        <li role="option">
                                    <span class="form-check">
                                        <input type="checkbox" class="form-check-input" name="groupProducts[]" value="514"/>
                                        <label class="form-check-label">Vérin</label>
                                    </span>
                                </li>
                                                        <li role="option">
                                    <span class="form-check">
                                        <input type="checkbox" class="form-check-input" name="groupProducts[]" value="5486"/>
                                        <label class="form-check-label">Verre de Rétroviseur</label>
                                    </span>
                                </li>
                                                        <li role="option">
                                    <span class="form-check">
                                        <input type="checkbox" class="form-check-input" name="groupProducts[]" value="731"/>
                                        <label class="form-check-label">Vis</label>
                                    </span>
                                </li>
                                                        <li role="option">
                                    <span class="form-check">
                                        <input type="checkbox" class="form-check-input" name="groupProducts[]" value="2967"/>
                                        <label class="form-check-label">Vis de Correction du Carrossage</label>
                                    </span>
                                </li>
                                                        <li role="option">
                                    <span class="form-check">
                                        <input type="checkbox" class="form-check-input" name="groupProducts[]" value="593"/>
                                        <label class="form-check-label">Vis-Bouchon, Carter d'Huile</label>
                                    </span>
                                </li>
                                                        <li role="option">
                                    <span class="form-check">
                                        <input type="checkbox" class="form-check-input" name="groupProducts[]" value="1194"/>
                                        <label class="form-check-label">Vitre Latérale</label>
                                    </span>
                                </li>
                                                        <li role="option">
                                    <span class="form-check">
                                        <input type="checkbox" class="form-check-input" name="groupProducts[]" value="577"/>
                                        <label class="form-check-label">Volant Moteur</label>
                                    </span>
                                </li>
                                                    <li class="selectbox__empty">
                                Aucun résultat
                            </li>
                                </ul>
            <div class="selectbox__bottom d-flex border-top align-items-center">
                                <div class="selectbox__counter fs-xsmall" data-form--select-gp-target="counter">0 / 365</div>
                                                    <button class="btn btn-sm btn-primary fs-small text-uppercase lh-lg ms-auto" type="button" data-action="form--select-gp#submit">Valider</button>
                                </div>
        </div>
    </div>
                </div>
            </div>
            <div class="row justify-content-center align-items-center">
                <div class="col-lg-4"></div>
                <div class="col-lg-7">
                    <button type="submit" class="btn btn-primary d-none w-100 mt-1">Valider</button>
                </div>
            </div>
        </form>
        </div>
        </div>
       
    
           
   </div> 
   </div>
  )
}

