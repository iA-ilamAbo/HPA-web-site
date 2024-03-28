import React from 'react';
import {Link} from 'react-router-dom';

export default function Blog() {
  return (
    <div>
      {/* <Link className='Footer-link' to='/blog'>Blog</Link> */}
      

      <div id="categories" class="category-list container pb-5 pt-3 pt-lg-5">
                

    

        <div class="pb-3 text-center">
            <h1 class="mb-2 mb-sm-0">Trouvez des pièces auto à prix discount</h1>
        </div>

        


    <form class="gp-suggestion__selector__form px-2 pt-2 mb-5" action="/pieces-auto/recherche">
        <div class="row justify-content-center align-items-center">
            <div class="h5 col-lg-4 text-lg-end mb-0 fw-normal">Par liste des pièces (recommandé)&nbsp;:</div>
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

    <div class="d-none d-md-block autocomplete--sticked" data-controller="sticky" data-sticky-classes-value="autocomplete--sticked">
        <div class="autocomplete autocomplete-sticky py-1 bg-white">
            <div class="container">
                                <div class="row col-lg-10 gx-0 align-items-center">
                    <div class="col-2 pe-2">
                        <img src="https://cdn.distriauto.eu/build/images/common/logo/logo-blue.png" width="222" height="28" class="img-fluid" alt=""/>
                    </div>
                    <div class="col-10 col-lg-8 position-relative">
                        <form method="get" action="/pieces-auto/recherche" class="autocomplete" data-controller="form--autocomplete" data-form--autocomplete-dropdown-class="autocomplete__dropdown__main-search" data-form--autocomplete-url-value="/ajax/autocomplete" data-action="submit->form--autocomplete#go" data-form--autocomplete-focus-param="true" data-form--autocomplete-absolute-value="0">
                        <div class="mb-0">        <div class="input-group input-group--btn-inside position-relative" data-controller="form--input-clear"><input type="search" name="q" required="required" data-action="input->form--autocomplete#search keydown->form--autocomplete#changeFocus focus->form--autocomplete#focus" data-form--autocomplete-target="input" class="text-truncate form-control" data-hj-allow="" placeholder="Effectuez une recherche" autocomplete="off" data-form--input-clear-target="input"/>
        <button class="btn btn-search bg-white text-primary" type="submit">
            <i class="fa fa-search"></i>
        </button>
    </div>
        </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>

        <div class="or-separator">ou</div>

        <div class="h5 mb-2 text-center fw-normal">Par nomenclature&nbsp;:</div>

            

<div class="row">
                                    <div class="col-sm-6 col-md-6 col-lg-3 mb-3">
            <div class="category-list__item rounded-bordered">
                <a href="https://www.distriauto.fr/pieces-auto/308-moteur/" class="fw-bold d-flex align-items-center">
                    <img class="flex-shrink-0" srcset="https://cdn.distriauto.eu/build/images/spare-parts/category/icon/308.webp" type="image/webp"/>
                        <img class="img-fluid" src="https://cdn.distriauto.eu/build/images/spare-parts/category/icon/308.png" height="25" width="25" alt="" loading="lazy"/>
                   
                    <span>Moteur</span>
                </a>
                                    <ul class="mt-2 mb-1">
                                                                                                                <li>
                                    <a href="https://www.distriauto.fr/pieces-auto/363-distribution-moteur/">
                                        Distribution moteur
                                    </a>
                                </li>
                                                            <li>
                                    <a href="https://www.distriauto.fr/pieces-auto/310-joints-1/">
                                        Joints
                                    </a>
                                </li>
                                                            <li>
                                    <a href="https://www.distriauto.fr/pieces-auto/402-systeme-bielle-manivelle/">
                                        Système bielle-manivelle
                                    </a>
                                </li>
                                                            <li>
                                    <a href="https://www.distriauto.fr/pieces-auto/338-alimentation-en-air/">
                                        Alimentation en air
                                    </a>
                                </li>
                                                            <li>
                                    <a href="https://www.distriauto.fr/pieces-auto/454-support-du-moteur/">
                                        Support du moteur
                                    </a>
                                </li>
                                                                        </ul>
                                                                    <a href="https://www.distriauto.fr/pieces-auto/308-moteur/" class="btn btn-secondary fw-medium text-capitalize">Tout afficher</a>
                                                </div>
        </div>
                                    <div class="col-sm-6 col-md-6 col-lg-3 mb-3">
            <div class="category-list__item rounded-bordered">
                <a href="https://www.distriauto.fr/pieces-auto/814-dispositif-de-freinage/" class="fw-bold d-flex align-items-center">
                    <img class="flex-shrink-0"source srcset="https://cdn.distriauto.eu/build/images/spare-parts/category/icon/814.webp" type="image/webp"/>
                        <img class="img-fluid" src="https://cdn.distriauto.eu/build/images/spare-parts/category/icon/814.png" height="25" width="25" alt="" loading="lazy"/>
                    
                    <span>Dispositif de freinage</span>
                </a>
                                    <ul class="mt-2 mb-1">
                                                                                                                <li>
                                    <a href="https://www.distriauto.fr/pieces-auto/815-frein-a-disque/">
                                        Frein à disque
                                    </a>
                                </li>
                                                            <li>
                                    <a href="https://www.distriauto.fr/pieces-auto/817-plaquette-de-frein/">
                                        Plaquette de frein
                                    </a>
                                </li>
                                                            <li>
                                    <a href="https://www.distriauto.fr/pieces-auto/820-etrier-de-frein/">
                                        Étrier de frein
                                    </a>
                                </li>
                                                            <li>
                                    <a href="https://www.distriauto.fr/pieces-auto/836-flexibles-de-frein/">
                                        Flexibles de frein
                                    </a>
                                </li>
                                                            <li>
                                    <a href="https://www.distriauto.fr/pieces-auto/823-frein-a-tambour/">
                                        Frein à tambour
                                    </a>
                                </li>
                                                                        </ul>
                                                                    <a href="https://www.distriauto.fr/pieces-auto/814-dispositif-de-freinage/" class="btn btn-secondary fw-medium text-capitalize">Tout afficher</a>
                                                </div>
        </div>
                                    <div class="col-sm-6 col-md-6 col-lg-3 mb-3">
            <div class="category-list__item rounded-bordered">
                <a href="https://www.distriauto.fr/pieces-auto/522-filtre/" class="fw-bold d-flex align-items-center">
                    <img class="flex-shrink-0"source srcset="https://cdn.distriauto.eu/build/images/spare-parts/category/icon/522.webp" type="image/webp"/>
                        <img class="img-fluid" src="https://cdn.distriauto.eu/build/images/spare-parts/category/icon/522.png" height="25" width="25" alt="" loading="lazy"/>
                    
                    <span>Filtre</span>
                </a>
                                    <ul class="mt-2 mb-1">
                                                                                                                <li>
                                    <a href="https://www.distriauto.fr/pieces-auto/523-filtre-a-huile-2/">
                                        Filtre à huile
                                    </a>
                                </li>
                                                            <li>
                                    <a href="https://www.distriauto.fr/pieces-auto/524-filtre-a-air/">
                                        Filtre à air
                                    </a>
                                </li>
                                                            <li>
                                    <a href="https://www.distriauto.fr/pieces-auto/526-filtre-a-air-pour-habitacle/">
                                        Filtre à air pour habitacle
                                    </a>
                                </li>
                                                            <li>
                                    <a href="https://www.distriauto.fr/pieces-auto/527-filtre-hydraulique/">
                                        Filtre hydraulique
                                    </a>
                                </li>
                                                            <li>
                                    <a href="https://www.distriauto.fr/pieces-auto/528-filtre-a-liquide-de-refroidissement/">
                                        Filtre à liquide de refroidissement
                                    </a>
                                </li>
                                                                        </ul>
                                                                    <a href="https://www.distriauto.fr/pieces-auto/522-filtre/" class="btn btn-secondary fw-medium text-capitalize">Tout afficher</a>
                                                </div>
        </div>
                                    <div class="col-sm-6 col-md-6 col-lg-3 mb-3">
            <div class="category-list__item rounded-bordered">
                <a href="https://www.distriauto.fr/pieces-auto/935-systeme-electrique/" class="fw-bold d-flex align-items-center">
                    <img class="flex-shrink-0" source srcset="https://cdn.distriauto.eu/build/images/spare-parts/category/icon/935.webp" type="image/webp"/>
                        <img class="img-fluid" src="https://cdn.distriauto.eu/build/images/spare-parts/category/icon/935.png" height="25" width="25" alt="" loading="lazy"/>
                   
                    <span>Système électrique</span>
                </a>
                                    <ul class="mt-2 mb-1">
                                                                                                                <li>
                                    <a href="https://www.distriauto.fr/pieces-auto/973-feux-1/">
                                        Feux
                                    </a>
                                </li>
                                                            <li>
                                    <a href="https://www.distriauto.fr/pieces-auto/946-projecteurs-principaux-composants-2/">
                                        Projecteurs principaux / composants
                                    </a>
                                </li>
                                                            <li>
                                    <a href="https://www.distriauto.fr/pieces-auto/940-alternateur-composants/">
                                        Alternateur / composants
                                    </a>
                                </li>
                                                            <li>
                                    <a href="https://www.distriauto.fr/pieces-auto/1029-capteurs/">
                                        Capteurs
                                    </a>
                                </li>
                                                            <li>
                                    <a href="https://www.distriauto.fr/pieces-auto/1022-interrupteur-relais-controle-clignotant-appareil-d-commande/">
                                        Interrupteur / Relais / Contrôle clignotant / Appareil d.commande
                                    </a>
                                </li>
                                                                        </ul>
                                                                    <a href="https://www.distriauto.fr/pieces-auto/935-systeme-electrique/" class="btn btn-secondary fw-medium text-capitalize">Tout afficher</a>
                                                </div>
        </div>
                                    <div class="col-sm-6 col-md-6 col-lg-3 mb-3">
            <div class="category-list__item rounded-bordered">
                <a href="https://www.distriauto.fr/pieces-auto/872-suspension-d-essieu-guidage-des-roues-roues/" class="fw-bold d-flex align-items-center">
                    <img class="flex-shrink-0"source srcset="https://cdn.distriauto.eu/build/images/spare-parts/category/icon/872.webp" type="image/webp"/>
                        <img class="img-fluid" src="https://cdn.distriauto.eu/build/images/spare-parts/category/icon/872.png" height="25" width="25" alt="" loading="lazy"/>
                    <span>Suspension d'essieu / Guidage des roues / Roues</span>
                </a>
                                    <ul class="mt-2 mb-1">
                                                                                                                <li>
                                    <a href="https://www.distriauto.fr/pieces-auto/874-bras-oscillant-suspension/">
                                        Bras oscillant / suspension
                                    </a>
                                </li>
                                                            <li>
                                    <a href="https://www.distriauto.fr/pieces-auto/877-piece-de-stabilisateur-pieces-de-fixation/">
                                        Pièce de stabilisateur / pièces de fixation
                                    </a>
                                </li>
                                                            <li>
                                    <a href="https://www.distriauto.fr/pieces-auto/884-moyeu-de-roue-fixation/">
                                        Moyeu de roue / fixation
                                    </a>
                                </li>
                                                            <li>
                                    <a href="https://www.distriauto.fr/pieces-auto/890-rotules/">
                                        Rotules
                                    </a>
                                </li>
                                                            <li>
                                    <a href="https://www.distriauto.fr/pieces-auto/903-roue-fixation-de-la-roue/">
                                        Roue / fixation de la roue
                                    </a>
                                </li>
                                                                        </ul>
                                                                    <a href="https://www.distriauto.fr/pieces-auto/872-suspension-d-essieu-guidage-des-roues-roues/" class="btn btn-secondary fw-medium text-capitalize">Tout afficher</a>
                                                </div>
        </div>
                                    <div class="col-sm-6 col-md-6 col-lg-3 mb-3">
            <div class="category-list__item rounded-bordered">
                <a href="https://www.distriauto.fr/pieces-auto/858-suspension-amortissement/" class="fw-bold d-flex align-items-center">
                    <img class="flex-shrink-0"source srcset="https://cdn.distriauto.eu/build/images/spare-parts/category/icon/858.webp" type="image/webp"/>
                        <img class="img-fluid" src="https://cdn.distriauto.eu/build/images/spare-parts/category/icon/858.png" height="25" width="25" alt="" loading="lazy"/>
                   
                    <span>Suspension / Amortissement</span>
                </a>
                                    <ul class="mt-2 mb-1">
                                                                                                                <li>
                                    <a href="https://www.distriauto.fr/pieces-auto/860-amortisseurs/">
                                        Amortisseurs
                                    </a>
                                </li>
                                                            <li>
                                    <a href="https://www.distriauto.fr/pieces-auto/862-coupelle-de-suspension-d-amortisseur/">
                                        Coupelle de suspension / d'amortisseur
                                    </a>
                                </li>
                                                            <li>
                                    <a href="https://www.distriauto.fr/pieces-auto/859-suspension/">
                                        Suspension
                                    </a>
                                </li>
                                                            <li>
                                    <a href="https://www.distriauto.fr/pieces-auto/865-jambe-de-suspension-amortisseur-pieces-d-assemblage/">
                                        Jambe de suspension / Amortisseur / Pièces d'assemblage
                                    </a>
                                </li>
                                                            <li>
                                    <a href="https://www.distriauto.fr/pieces-auto/868-suspension-sur-ressorts-a-lames/">
                                        Suspension sur ressorts à lames
                                    </a>
                                </li>
                                                                        </ul>
                                                                    <a href="https://www.distriauto.fr/pieces-auto/858-suspension-amortissement/" class="btn btn-secondary fw-medium text-capitalize">Tout afficher</a>
                                                </div>
        </div>
                                    <div class="col-sm-6 col-md-6 col-lg-3 mb-3">
            <div class="category-list__item rounded-bordered">
                <a href="https://www.distriauto.fr/pieces-auto/79-carrosserie/" class="fw-bold d-flex align-items-center">
                    <img class="flex-shrink-0"source srcset="https://cdn.distriauto.eu/build/images/spare-parts/category/icon/79.webp" type="image/webp"/>
                        <img class="img-fluid" src="https://cdn.distriauto.eu/build/images/spare-parts/category/icon/79.png" height="25" width="25" alt="" loading="lazy"/>
                   
                    <span>Carrosserie</span>
                </a>
                                    <ul class="mt-2 mb-1">
                                                                                                                <li>
                                    <a href="https://www.distriauto.fr/pieces-auto/198-pieces-de-carrosserie-ailes-pares-chocs/">
                                        Pièces de carrosserie / ailes / pares-chocs
                                    </a>
                                </li>
                                                            <li>
                                    <a href="https://www.distriauto.fr/pieces-auto/218-capots-hayons-portes-toit-ouvrant-toit-pliant/">
                                        Capots / hayons / portes / toit ouvrant / toit pliant
                                    </a>
                                </li>
                                                            <li>
                                    <a href="https://www.distriauto.fr/pieces-auto/230-vitrages-miroirs/">
                                        Vitrages / Miroirs
                                    </a>
                                </li>
                                                            <li>
                                    <a href="https://www.distriauto.fr/pieces-auto/299-ressorts-pneumatiques-3/">
                                        Ressorts pneumatiques
                                    </a>
                                </li>
                                                            <li>
                                    <a href="https://www.distriauto.fr/pieces-auto/226-grilles-decoratives-logos-anti-eclaboussures/">
                                        Grilles décoratives, logos, anti-éclaboussures
                                    </a>
                                </li>
                                                                        </ul>
                                                                    <a href="https://www.distriauto.fr/pieces-auto/79-carrosserie/" class="btn btn-secondary fw-medium text-capitalize">Tout afficher</a>
                                                </div>
        </div>
                                    <div class="col-sm-6 col-md-6 col-lg-3 mb-3">
            <div class="category-list__item rounded-bordered">
                <a href="https://www.distriauto.fr/pieces-auto/1044-allumage-prechauffage/" class="fw-bold d-flex align-items-center">
                    <img class="flex-shrink-0" source srcset="https://cdn.distriauto.eu/build/images/spare-parts/category/icon/1044.webp" type="image/webp"/>
                        <img class="img-fluid" src="https://cdn.distriauto.eu/build/images/spare-parts/category/icon/1044.png" height="25" width="25" alt="" loading="lazy"/>
                    
                    <span>Allumage / préchauffage</span>
                </a>
                                    <ul class="mt-2 mb-1">
                                                                                                                <li>
                                    <a href="https://www.distriauto.fr/pieces-auto/1047-bougie-d-allumage/">
                                        Bougie d'allumage
                                    </a>
                                </li>
                                                            <li>
                                    <a href="https://www.distriauto.fr/pieces-auto/1053-bougie-de-prechauffage/">
                                        Bougie de préchauffage
                                    </a>
                                </li>
                                                            <li>
                                    <a href="https://www.distriauto.fr/pieces-auto/1046-bobine-unite-de-bobine-d-allumage/">
                                        Bobine / unite de bobine d'allumage
                                    </a>
                                </li>
                                                            <li>
                                    <a href="https://www.distriauto.fr/pieces-auto/1050-generateur-d-impulsions/">
                                        Générateur d'impulsions
                                    </a>
                                </li>
                                                            <li>
                                    <a href="https://www.distriauto.fr/pieces-auto/1051-appareil-de-commande-relais/">
                                        Appareil de commande / relais
                                    </a>
                                </li>
                                                                        </ul>
                                                                    <a href="https://www.distriauto.fr/pieces-auto/1044-allumage-prechauffage/" class="btn btn-secondary fw-medium text-capitalize">Tout afficher</a>
                                                </div>
        </div>
                                    <div class="col-sm-6 col-md-6 col-lg-3 mb-3">
            <div class="category-list__item rounded-bordered">
                <a href="https://www.distriauto.fr/pieces-auto/692-refroidissement/" class="fw-bold d-flex align-items-center">
                    <img class="flex-shrink-0" source srcset="https://cdn.distriauto.eu/build/images/spare-parts/category/icon/692.webp" type="image/webp"/>
                        <img class="img-fluid" src="https://cdn.distriauto.eu/build/images/spare-parts/category/icon/692.png" height="25" width="25" alt="" loading="lazy"/>
                   
                    <span>Refroidissement</span>
                </a>
                                    <ul class="mt-2 mb-1">
                                                                                                                <li>
                                    <a href="https://www.distriauto.fr/pieces-auto/694-pompe-a-eau-joint/">
                                        Pompe à eau / joint
                                    </a>
                                </li>
                                                            <li>
                                    <a href="https://www.distriauto.fr/pieces-auto/704-radiateur-d-eau-d-huile/">
                                        Radiateur d'eau / d'huile
                                    </a>
                                </li>
                                                            <li>
                                    <a href="https://www.distriauto.fr/pieces-auto/710-tuyauterie-et-brides/">
                                        Tuyauterie et brides
                                    </a>
                                </li>
                                                            <li>
                                    <a href="https://www.distriauto.fr/pieces-auto/701-joint-thermostat/">
                                        Joint / Thermostat
                                    </a>
                                </li>
                                                            <li>
                                    <a href="https://www.distriauto.fr/pieces-auto/720-antigel/">
                                        Antigel
                                    </a>
                                </li>
                                                                        </ul>
                                                                    <a href="https://www.distriauto.fr/pieces-auto/692-refroidissement/" class="btn btn-secondary fw-medium text-capitalize">Tout afficher</a>
                                                </div>
        </div>
                                    <div class="col-sm-6 col-md-6 col-lg-3 mb-3">
            <div class="category-list__item rounded-bordered">
                <a href="https://www.distriauto.fr/pieces-auto/561-alimentation-carburant/" class="fw-bold d-flex align-items-center">
                    <img class="flex-shrink-0" source srcset="https://cdn.distriauto.eu/build/images/spare-parts/category/icon/561.webp" type="image/webp"/>
                        <img class="img-fluid" src="https://cdn.distriauto.eu/build/images/spare-parts/category/icon/561.png" height="25" width="25" alt="" loading="lazy"/>
                    
                    <span>Alimentation carburant</span>
                </a>
                                    <ul class="mt-2 mb-1">
                                                                                                                <li>
                                    <a href="https://www.distriauto.fr/pieces-auto/570-boitier-filtre-a-carburant/">
                                        Boîtier / filtre à carburant
                                    </a>
                                </li>
                                                            <li>
                                    <a href="https://www.distriauto.fr/pieces-auto/564-pompe-accessoires/">
                                        Pompe / accessoires
                                    </a>
                                </li>
                                                            <li>
                                    <a href="https://www.distriauto.fr/pieces-auto/562-unite-d-alimentation-complete/">
                                        Unité d'alimentation complète
                                    </a>
                                </li>
                                                            <li>
                                    <a href="https://www.distriauto.fr/pieces-auto/574-tuyauterie/">
                                        Tuyauterie
                                    </a>
                                </li>
                                                            <li>
                                    <a href="https://www.distriauto.fr/pieces-auto/563-reservoir-de-carburant-accessoires/">
                                        Réservoir de carburant / accessoires
                                    </a>
                                </li>
                                                                        </ul>
                                                                    <a href="https://www.distriauto.fr/pieces-auto/561-alimentation-carburant/" class="btn btn-secondary fw-medium text-capitalize">Tout afficher</a>
                                                </div>
        </div>
                                    <div class="col-sm-6 col-md-6 col-lg-3 mb-3">
            <div class="category-list__item rounded-bordered">
                <a href="https://www.distriauto.fr/pieces-auto/722-embrayage-composants/" class="fw-bold d-flex align-items-center">
                    <img class="flex-shrink-0" source srcset="https://cdn.distriauto.eu/build/images/spare-parts/category/icon/722.webp" type="image/webp"/>
                        <img class="img-fluid" src="https://cdn.distriauto.eu/build/images/spare-parts/category/icon/722.png" height="25" width="25" alt="" loading="lazy"/>
                   
                    <span>Embrayage / composants</span>
                </a>
                                    <ul class="mt-2 mb-1">
                                                                                                                <li>
                                    <a href="https://www.distriauto.fr/pieces-auto/723-kit-d-embrayage/">
                                        Kit d'embrayage
                                    </a>
                                </li>
                                                            <li>
                                    <a href="https://www.distriauto.fr/pieces-auto/735-commande-d-embrayage/">
                                        Commande d'embrayage
                                    </a>
                                </li>
                                                            <li>
                                    <a href="https://www.distriauto.fr/pieces-auto/730-butee-d-embrayage-butee-hydraulique/">
                                        Butée d’embrayage / butée hydraulique
                                    </a>
                                </li>
                                                            <li>
                                    <a href="https://www.distriauto.fr/pieces-auto/747-volant-moteur-1/">
                                        Volant-moteur
                                    </a>
                                </li>
                                                            <li>
                                    <a href="https://www.distriauto.fr/pieces-auto/725-disque-d-embrayage/">
                                        Disque d'embrayage
                                    </a>
                                </li>
                                                                        </ul>
                                                                    <a href="https://www.distriauto.fr/pieces-auto/722-embrayage-composants/" class="btn btn-secondary fw-medium text-capitalize">Tout afficher</a>
                                                </div>
        </div>
                                    <div class="col-sm-6 col-md-6 col-lg-3 mb-3">
            <div class="category-list__item rounded-bordered">
                <a href="https://www.distriauto.fr/pieces-auto/530-commande-a-courroie-1/" class="fw-bold d-flex align-items-center">
                    <img class="flex-shrink-0" source srcset="https://cdn.distriauto.eu/build/images/spare-parts/category/icon/530.webp" type="image/webp"/>
                        <img class="img-fluid" src="https://cdn.distriauto.eu/build/images/spare-parts/category/icon/530.png" height="25" width="25" alt="" loading="lazy"/>
                    
                    <span>Commande à courroie</span>
                </a>
                                    <ul class="mt-2 mb-1">
                                                                                                                <li>
                                    <a href="https://www.distriauto.fr/pieces-auto/537-jeu-courroies-trapezoidales-a-nervures-1/">
                                        Jeu / courroies trapézoïdales à nervures
                                    </a>
                                </li>
                                                            <li>
                                    <a href="https://www.distriauto.fr/pieces-auto/556-poulie-2/">
                                        Poulie
                                    </a>
                                </li>
                                                            <li>
                                    <a href="https://www.distriauto.fr/pieces-auto/532-jeu-courroies-trapezoidales-1/">
                                        Jeu / courroies trapèzoïdales
                                    </a>
                                </li>
                                                            <li>
                                    <a href="https://www.distriauto.fr/pieces-auto/558-accessoires-2/">
                                        Accessoires
                                    </a>
                                </li>
                                                            <li>
                                    <a href="https://www.distriauto.fr/pieces-auto/560-outils-9/">
                                        Outils
                                    </a>
                                </li>
                                                                        </ul>
                                                                    <a href="https://www.distriauto.fr/pieces-auto/530-commande-a-courroie-1/" class="btn btn-secondary fw-medium text-capitalize">Tout afficher</a>
                                                </div>
        </div>
                                    <div class="col-sm-6 col-md-6 col-lg-3 mb-3">
            <div class="category-list__item rounded-bordered">
                <a href="https://www.distriauto.fr/pieces-auto/641-echappement/" class="fw-bold d-flex align-items-center">
                    <img class="flex-shrink-0" source srcset="https://cdn.distriauto.eu/build/images/spare-parts/category/icon/641.webp" type="image/webp"/>
                        <img class="img-fluid" src="https://cdn.distriauto.eu/build/images/spare-parts/category/icon/641.png" height="25" width="25" alt="" loading="lazy"/>
                  
                    <span>Échappement</span>
                </a>
                                    <ul class="mt-2 mb-1">
                                                                                                                <li>
                                    <a href="https://www.distriauto.fr/pieces-auto/655-pieces-de-montage-2/">
                                        Pièces de montage
                                    </a>
                                </li>
                                                            <li>
                                    <a href="https://www.distriauto.fr/pieces-auto/646-capteur-lambda/">
                                        Capteur lambda
                                    </a>
                                </li>
                                                            <li>
                                    <a href="https://www.distriauto.fr/pieces-auto/654-turbocompresseur/">
                                        Turbocompresseur
                                    </a>
                                </li>
                                                            <li>
                                    <a href="https://www.distriauto.fr/pieces-auto/643-silencieux/">
                                        Silencieux
                                    </a>
                                </li>
                                                            <li>
                                    <a href="https://www.distriauto.fr/pieces-auto/645-catalyseur/">
                                        Catalyseur
                                    </a>
                                </li>
                                                                        </ul>
                                                                    <a href="https://www.distriauto.fr/pieces-auto/641-echappement/" class="btn btn-secondary fw-medium text-capitalize">Tout afficher</a>
                                                </div>
        </div>
                                    <div class="col-sm-6 col-md-6 col-lg-3 mb-3">
            <div class="category-list__item rounded-bordered">
                <a href="https://www.distriauto.fr/pieces-auto/1092-pieces-de-maintenance/" class="fw-bold d-flex align-items-center">
                    <img class="flex-shrink-0" source srcset="https://cdn.distriauto.eu/build/images/spare-parts/category/icon/1092.webp" type="image/webp"/>
                        <img class="img-fluid" src="https://cdn.distriauto.eu/build/images/spare-parts/category/icon/1092.png" height="25" width="25" alt="" loading="lazy"/>
                   
                    <span>Pièces de maintenance</span>
                </a>
                                    <ul class="mt-2">
                                                                                                                <li>
                                    <a href="https://www.distriauto.fr/pieces-auto/1093-intervalle/">
                                        Intervalle
                                    </a>
                                </li>
                                                            <li>
                                    <a href="https://www.distriauto.fr/pieces-auto/1094-travaux-supplementaires/">
                                        Travaux supplémentaires
                                    </a>
                                </li>
                                                                        </ul>
                                                </div>
        </div>
                                    <div class="col-sm-6 col-md-6 col-lg-3 mb-3">
            <div class="category-list__item rounded-bordered">
                <a href="https://www.distriauto.fr/pieces-auto/908-direction/" class="fw-bold d-flex align-items-center">
                    <img class="flex-shrink-0" source srcset="https://cdn.distriauto.eu/build/images/spare-parts/category/icon/908.webp" type="image/webp"/>
                        <img class="img-fluid" src="https://cdn.distriauto.eu/build/images/spare-parts/category/icon/908.png" height="25" width="25" alt="" loading="lazy"/>
                  
                    <span>Direction</span>
                </a>
                                    <ul class="mt-2 mb-1">
                                                                                                                <li>
                                    <a href="https://www.distriauto.fr/pieces-auto/915-rotules-1/">
                                        Rotules
                                    </a>
                                </li>
                                                            <li>
                                    <a href="https://www.distriauto.fr/pieces-auto/919-cremaillere-de-direction-pompe/">
                                        Crémaillère de direction / pompe
                                    </a>
                                </li>
                                                            <li>
                                    <a href="https://www.distriauto.fr/pieces-auto/914-soufflet-joint/">
                                        Soufflet / joint
                                    </a>
                                </li>
                                                            <li>
                                    <a href="https://www.distriauto.fr/pieces-auto/910-barre-de-connexion-composants/">
                                        Barre de connexion / composants
                                    </a>
                                </li>
                                                            <li>
                                    <a href="https://www.distriauto.fr/pieces-auto/927-pieces-de-transmission-de-direction/">
                                        Pièces de transmission de direction
                                    </a>
                                </li>
                                                                        </ul>
                                                                    <a href="https://www.distriauto.fr/pieces-auto/908-direction/" class="btn btn-secondary fw-medium text-capitalize">Tout afficher</a>
                                                </div>
        </div>
                                    <div class="col-sm-6 col-md-6 col-lg-3 mb-3">
            <div class="category-list__item rounded-bordered">
                <a href="https://www.distriauto.fr/pieces-auto/1108-nettoyage-des-vitres/" class="fw-bold d-flex align-items-center">
                    <img class="flex-shrink-0" source srcset="https://cdn.distriauto.eu/build/images/spare-parts/category/icon/1108.webp" type="image/webp"/>
                        <img class="img-fluid" src="https://cdn.distriauto.eu/build/images/spare-parts/category/icon/1108.png" height="25" width="25" alt="" loading="lazy"/>
                   
                    <span>Nettoyage des vitres</span>
                </a>
                                    <ul class="mt-2 mb-1">
                                                                                                                <li>
                                    <a href="https://www.distriauto.fr/pieces-auto/1109-balai-d-essuie-glace-raclette/">
                                        Balai d'essuie-glace / raclette
                                    </a>
                                </li>
                                                            <li>
                                    <a href="https://www.distriauto.fr/pieces-auto/1110-moteur-d-essuie-glace/">
                                        Moteur d'essuie-glace
                                    </a>
                                </li>
                                                            <li>
                                    <a href="https://www.distriauto.fr/pieces-auto/1111-pompe-a-eau-essuie-glaces/">
                                        Pompe-à-eau / essuie-glaces
                                    </a>
                                </li>
                                                            <li>
                                    <a href="https://www.distriauto.fr/pieces-auto/1112-bras-d-essuie-glace-fixation/">
                                        Bras d'essuie-glace / fixation
                                    </a>
                                </li>
                                                            <li>
                                    <a href="https://www.distriauto.fr/pieces-auto/1114-reservoir-d-eau-de-lavage-conduite/">
                                        Réservoir d'eau de lavage / conduite
                                    </a>
                                </li>
                                                                        </ul>
                                                                    <a href="https://www.distriauto.fr/pieces-auto/1108-nettoyage-des-vitres/" class="btn btn-secondary fw-medium text-capitalize">Tout afficher</a>
                                                </div>
        </div>
                                    <div class="col-sm-6 col-md-6 col-lg-3 mb-3">
            <div class="category-list__item rounded-bordered">
                <a href="https://www.distriauto.fr/pieces-auto/582-carburation/" class="fw-bold d-flex align-items-center">
                    <img class="flex-shrink-0" source srcset="https://cdn.distriauto.eu/build/images/spare-parts/category/icon/582.webp" type="image/webp"/>
                        <img class="img-fluid" src="https://cdn.distriauto.eu/build/images/spare-parts/category/icon/582.png" height="25" width="25" alt="" loading="lazy"/>
                  
                    <span>Carburation</span>
                </a>
                                    <ul class="mt-2">
                                                                                                                <li>
                                    <a href="https://www.distriauto.fr/pieces-auto/607-melange-air-carburant/">
                                        Mélange air-carburant
                                    </a>
                                </li>
                                                            <li>
                                    <a href="https://www.distriauto.fr/pieces-auto/629-carburateurs/">
                                        Carburateurs
                                    </a>
                                </li>
                                                            <li>
                                    <a href="https://www.distriauto.fr/pieces-auto/583-epuration-des-gaz-d-echappement-1/">
                                        Épuration des gaz d'échappement
                                    </a>
                                </li>
                                                                        </ul>
                                                </div>
        </div>
                                    <div class="col-sm-6 col-md-6 col-lg-3 mb-3">
            <div class="category-list__item rounded-bordered">
                <a href="https://www.distriauto.fr/pieces-auto/794-entrainement-des-roues/" class="fw-bold d-flex align-items-center">
                    <img class="flex-shrink-0" source srcset="https://cdn.distriauto.eu/build/images/spare-parts/category/icon/794.webp" type="image/webp"/>
                        <img class="img-fluid" src="https://cdn.distriauto.eu/build/images/spare-parts/category/icon/794.png" height="25" width="25" alt="" loading="lazy"/>
                    
                    <span>Entraînement des roues</span>
                </a>
                                    <ul class="mt-2 mb-1">
                                                                                                                <li>
                                    <a href="https://www.distriauto.fr/pieces-auto/795-arbre-de-transmission/">
                                        Arbre de transmission
                                    </a>
                                </li>
                                                            <li>
                                    <a href="https://www.distriauto.fr/pieces-auto/797-rotules-jeu/">
                                        Rotules / jeu
                                    </a>
                                </li>
                                                            <li>
                                    <a href="https://www.distriauto.fr/pieces-auto/798-soufflet/">
                                        Soufflet
                                    </a>
                                </li>
                                                            <li>
                                    <a href="https://www.distriauto.fr/pieces-auto/800-pieces-de-fixation-accessoires/">
                                        Pièces de fixation / accessoires
                                    </a>
                                </li>
                                                            <li>
                                    <a href="https://www.distriauto.fr/pieces-auto/796-tripode/">
                                        Tripode
                                    </a>
                                </li>
                                                                        </ul>
                                                                    <a href="https://www.distriauto.fr/pieces-auto/794-entrainement-des-roues/" class="btn btn-secondary fw-medium text-capitalize">Tout afficher</a>
                                                </div>
        </div>
                                    <div class="col-sm-6 col-md-6 col-lg-3 mb-3">
            <div class="category-list__item rounded-bordered">
                <a href="https://www.distriauto.fr/pieces-auto/1119-systemes-de-confort/" class="fw-bold d-flex align-items-center">
                    <img class="flex-shrink-0"source srcset="https://cdn.distriauto.eu/build/images/spare-parts/category/icon/1119.webp" type="image/webp"/>
                        <img class="img-fluid" src="https://cdn.distriauto.eu/build/images/spare-parts/category/icon/1119.png" height="25" width="25" alt="" loading="lazy"/>
                   
                    <span>Systèmes de confort</span>
                </a>
                                    <ul class="mt-2 mb-1">
                                                                                                                <li>
                                    <a href="https://www.distriauto.fr/pieces-auto/1123-leve-vitre/">
                                        Lève-vitre
                                    </a>
                                </li>
                                                            <li>
                                    <a href="https://www.distriauto.fr/pieces-auto/1127-commande-du-hayon/">
                                        Commande du hayon
                                    </a>
                                </li>
                                                            <li>
                                    <a href="https://www.distriauto.fr/pieces-auto/1122-aide-au-stationnement-alarme-de-marche-arriere/">
                                        Aide au stationnement / Alarme de marche arrière
                                    </a>
                                </li>
                                                            <li>
                                    <a href="https://www.distriauto.fr/pieces-auto/1153-verrouillage-central-1/">
                                        Verrouillage central
                                    </a>
                                </li>
                                                            <li>
                                    <a href="https://www.distriauto.fr/pieces-auto/1124-regulateur-de-vitesse/">
                                        Régulateur de vitesse
                                    </a>
                                </li>
                                                                        </ul>
                                                                    <a href="https://www.distriauto.fr/pieces-auto/1119-systemes-de-confort/" class="btn btn-secondary fw-medium text-capitalize">Tout afficher</a>
                                                </div>
        </div>
                                    <div class="col-sm-6 col-md-6 col-lg-3 mb-3">
            <div class="category-list__item rounded-bordered">
                <a href="https://www.distriauto.fr/pieces-auto/802-entrainement-des-essieux/" class="fw-bold d-flex align-items-center">
                    <img class="flex-shrink-0" source srcset="https://cdn.distriauto.eu/build/images/spare-parts/category/icon/802.webp" type="image/webp"/>
                        <img class="img-fluid" src="https://cdn.distriauto.eu/build/images/spare-parts/category/icon/802.png" height="25" width="25" alt="" loading="lazy"/>
                   
                    <span>Entraînement des essieux</span>
                </a>
                                    <ul class="mt-2 mb-1">
                                                                                                                <li>
                                    <a href="https://www.distriauto.fr/pieces-auto/803-arbre-longitudinal/">
                                        Arbre longitudinal
                                    </a>
                                </li>
                                                            <li>
                                    <a href="https://www.distriauto.fr/pieces-auto/807-differentiel/">
                                        Différentiel
                                    </a>
                                </li>
                                                            <li>
                                    <a href="https://www.distriauto.fr/pieces-auto/810-huiles-3/">
                                        Huiles
                                    </a>
                                </li>
                                                            <li>
                                    <a href="https://www.distriauto.fr/pieces-auto/808-boite-de-transfert/">
                                        Boîte de transfert
                                    </a>
                                </li>
                                                            <li>
                                    <a href="https://www.distriauto.fr/pieces-auto/811-accouplement-a-lamelles-4-roues-motrices/">
                                        Accouplement à lamelles 4 roues motrices
                                    </a>
                                </li>
                                                                        </ul>
                                                                    <a href="https://www.distriauto.fr/pieces-auto/802-entrainement-des-essieux/" class="btn btn-secondary fw-medium text-capitalize">Tout afficher</a>
                                                </div>
        </div>
                                    <div class="col-sm-6 col-md-6 col-lg-3 mb-3">
            <div class="category-list__item rounded-bordered">
                <a href="https://www.distriauto.fr/pieces-auto/1197-verrouillage/" class="fw-bold d-flex align-items-center">
                    <img class="flex-shrink-0" source srcset="https://cdn.distriauto.eu/build/images/spare-parts/category/icon/1197.webp" type="image/webp"/>
                        <img class="img-fluid" src="https://cdn.distriauto.eu/build/images/spare-parts/category/icon/1197.png" height="25" width="25" alt="" loading="lazy"/>
                    
                    <span>Verrouillage</span>
                </a>
                                    <ul class="mt-2 mb-1">
                                                                                                                <li>
                                    <a href="https://www.distriauto.fr/pieces-auto/1204-poignees-1/">
                                        Poignées
                                    </a>
                                </li>
                                                            <li>
                                    <a href="https://www.distriauto.fr/pieces-auto/1200-serrure-exterieure/">
                                        Serrure extérieure
                                    </a>
                                </li>
                                                            <li>
                                    <a href="https://www.distriauto.fr/pieces-auto/1201-serrure-interieure/">
                                        Serrure intérieure
                                    </a>
                                </li>
                                                            <li>
                                    <a href="https://www.distriauto.fr/pieces-auto/1203-cylindre-de-serrure-jeu/">
                                        Cylindre de serrure / jeu
                                    </a>
                                </li>
                                                            <li>
                                    <a href="https://www.distriauto.fr/pieces-auto/1205-composants-6/">
                                        Composants
                                    </a>
                                </li>
                                                                        </ul>
                                                                    <a href="https://www.distriauto.fr/pieces-auto/1197-verrouillage/" class="btn btn-secondary fw-medium text-capitalize">Tout afficher</a>
                                                </div>
        </div>
                                    <div class="col-sm-6 col-md-6 col-lg-3 mb-3">
            <div class="category-list__item rounded-bordered">
                <a href="https://www.distriauto.fr/pieces-auto/754-boite-de-vitesses/" class="fw-bold d-flex align-items-center">
                    <img class="flex-shrink-0" source srcset="https://cdn.distriauto.eu/build/images/spare-parts/category/icon/754.webp" type="image/webp"/>
                        <img class="img-fluid" src="https://cdn.distriauto.eu/build/images/spare-parts/category/icon/754.png" height="25" width="25" alt="" loading="lazy"/>
                   
                    <span>Boîte de vitesses</span>
                </a>
                                    <ul class="mt-2">
                                                                                                                <li>
                                    <a href="https://www.distriauto.fr/pieces-auto/756-boite-de-vitesses-manuelle/">
                                        Boîte de vitesses manuelle
                                    </a>
                                </li>
                                                            <li>
                                    <a href="https://www.distriauto.fr/pieces-auto/792-huiles-2/">
                                        Huiles
                                    </a>
                                </li>
                                                            <li>
                                    <a href="https://www.distriauto.fr/pieces-auto/770-boite-de-vitesse-automatique/">
                                        Boîte de vitesse automatique
                                    </a>
                                </li>
                                                            <li>
                                    <a href="https://www.distriauto.fr/pieces-auto/1693-boite-de-vitesses-manuelle-robotisee-bvr/">
                                        Boîte de vitesses manuelle robotisée (BVR)
                                    </a>
                                </li>
                                                            <li>
                                    <a href="https://www.distriauto.fr/pieces-auto/793-outils-15/">
                                        Outils
                                    </a>
                                </li>
                                                                        </ul>
                                                </div>
        </div>
                                    <div class="col-sm-6 col-md-6 col-lg-3 mb-3">
            <div class="category-list__item rounded-bordered">
                <a href="https://www.distriauto.fr/pieces-auto/1061-chauffage-ventilation/" class="fw-bold d-flex align-items-center">
                    <img class="flex-shrink-0" source srcset="https://cdn.distriauto.eu/build/images/spare-parts/category/icon/1061.webp" type="image/webp"/>
                        <img class="img-fluid" src="https://cdn.distriauto.eu/build/images/spare-parts/category/icon/1061.png" height="25" width="25" alt="" loading="lazy"/>
                   
                    <span>Chauffage / Ventilation</span>
                </a>
                                    <ul class="mt-2 mb-1">
                                                                                                                <li>
                                    <a href="https://www.distriauto.fr/pieces-auto/1065-pulseur-d-air-habitacle-composants/">
                                        Pulseur d'air habitacle composants
                                    </a>
                                </li>
                                                            <li>
                                    <a href="https://www.distriauto.fr/pieces-auto/1068-gaines-tuyaux/">
                                        Gaines / tuyaux
                                    </a>
                                </li>
                                                            <li>
                                    <a href="https://www.distriauto.fr/pieces-auto/1069-regulation-soupapes/">
                                        Régulation / soupapes
                                    </a>
                                </li>
                                                            <li>
                                    <a href="https://www.distriauto.fr/pieces-auto/1067-elements-de-commande/">
                                        Éléments de commande
                                    </a>
                                </li>
                                                            <li>
                                    <a href="https://www.distriauto.fr/pieces-auto/1066-appareils-de-commande-2/">
                                        Appareils de commande
                                    </a>
                                </li>
                                                                        </ul>
                                                                    <a href="https://www.distriauto.fr/pieces-auto/1061-chauffage-ventilation/" class="btn btn-secondary fw-medium text-capitalize">Tout afficher</a>
                                                </div>
        </div>
                                    <div class="col-sm-6 col-md-6 col-lg-3 mb-3">
            <div class="category-list__item rounded-bordered">
                <a href="https://www.distriauto.fr/pieces-auto/1072-climatisation/" class="fw-bold d-flex align-items-center">
                    <img class="flex-shrink-0" source srcset="https://cdn.distriauto.eu/build/images/spare-parts/category/icon/1072.webp" type="image/webp"/>
                        <img class="img-fluid" src="https://cdn.distriauto.eu/build/images/spare-parts/category/icon/1072.png" height="25" width="25" alt="" loading="lazy"/>
                   
                    <span>Climatisation</span>
                </a>
                                    <ul class="mt-2 mb-1">
                                                                                                                <li>
                                    <a href="https://www.distriauto.fr/pieces-auto/1073-compresseur-composants-1/">
                                        Compresseur / composants
                                    </a>
                                </li>
                                                            <li>
                                    <a href="https://www.distriauto.fr/pieces-auto/1074-condenseur/">
                                        Condenseur
                                    </a>
                                </li>
                                                            <li>
                                    <a href="https://www.distriauto.fr/pieces-auto/1087-tuyaux-conduites-1/">
                                        Tuyaux / Conduites
                                    </a>
                                </li>
                                                            <li>
                                    <a href="https://www.distriauto.fr/pieces-auto/1076-dessicateur/">
                                        Dessicateur
                                    </a>
                                </li>
                                                            <li>
                                    <a href="https://www.distriauto.fr/pieces-auto/1088-controle-reglage/">
                                        Contrôle / Réglage
                                    </a>
                                </li>
                                                                        </ul>
                                                                    <a href="https://www.distriauto.fr/pieces-auto/1072-climatisation/" class="btn btn-secondary fw-medium text-capitalize">Tout afficher</a>
                                                </div>
        </div>
                                    <div class="col-sm-6 col-md-6 col-lg-3 mb-3">
            <div class="category-list__item rounded-bordered">
                <a href="https://www.distriauto.fr/pieces-auto/1186-systemes-de-securite/" class="fw-bold d-flex align-items-center">
                    <img class="flex-shrink-0" source srcset="https://cdn.distriauto.eu/build/images/spare-parts/category/icon/1186.webp" type="image/webp"/>
                        <img class="img-fluid" src="https://cdn.distriauto.eu/build/images/spare-parts/category/icon/1186.png" height="25" width="25" alt="" loading="lazy"/>
                   
                    <span>Systèmes de sécurité</span>
                </a>
                                    <ul class="mt-2 mb-1">
                                                                                                                <li>
                                    <a href="https://www.distriauto.fr/pieces-auto/1188-systeme-d-air-bag/">
                                        Système d'air-bag
                                    </a>
                                </li>
                                                            <li>
                                    <a href="https://www.distriauto.fr/pieces-auto/1189-systeme-d-alarme-2/">
                                        Système d'alarme
                                    </a>
                                </li>
                                                            <li>
                                    <a href="https://www.distriauto.fr/pieces-auto/1192-immobilisateur-antivol/">
                                        Immobilisateur antivol
                                    </a>
                                </li>
                                                            <li>
                                    <a href="https://www.distriauto.fr/pieces-auto/1187-systeme-gps/">
                                        Système GPS
                                    </a>
                                </li>
                                                            <li>
                                    <a href="https://www.distriauto.fr/pieces-auto/1193-outils-29/">
                                        Outils
                                    </a>
                                </li>
                                                                        </ul>
                                                                    <a href="https://www.distriauto.fr/pieces-auto/1186-systemes-de-securite/" class="btn btn-secondary fw-medium text-capitalize">Tout afficher</a>
                                                </div>
        </div>
                                    <div class="col-sm-6 col-md-6 col-lg-3 mb-3">
            <div class="category-list__item rounded-bordered">
                <a href="https://www.distriauto.fr/pieces-auto/1164-equipement-interieur/" class="fw-bold d-flex align-items-center">
                    <img class="flex-shrink-0"source srcset="https://cdn.distriauto.eu/build/images/spare-parts/category/icon/1164.webp" type="image/webp"/>
                        <img class="img-fluid" src="https://cdn.distriauto.eu/build/images/spare-parts/category/icon/1164.png" height="25" width="25" alt="" loading="lazy"/>
                    
                    <span>Équipement intérieur</span>
                </a>
                                    <ul class="mt-2 mb-1">
                                                                                                                <li>
                                    <a href="https://www.distriauto.fr/pieces-auto/1173-poignees/">
                                        Poignées
                                    </a>
                                </li>
                                                            <li>
                                    <a href="https://www.distriauto.fr/pieces-auto/1174-leviers-manuels-leviers-de-pedale/">
                                        Leviers manuels / Leviers de pédale
                                    </a>
                                </li>
                                                            <li>
                                    <a href="https://www.distriauto.fr/pieces-auto/1180-recouvrement-1/">
                                        Recouvrement
                                    </a>
                                </li>
                                                            <li>
                                    <a href="https://www.distriauto.fr/pieces-auto/1168-leve-vitre-2/">
                                        Lève-vitre
                                    </a>
                                </li>
                                                            <li>
                                    <a href="https://www.distriauto.fr/pieces-auto/1178-sieges/">
                                        Sièges
                                    </a>
                                </li>
                                                                        </ul>
                                                                    <a href="https://www.distriauto.fr/pieces-auto/1164-equipement-interieur/" class="btn btn-secondary fw-medium text-capitalize">Tout afficher</a>
                                                </div>
        </div>
                                    <div class="col-sm-6 col-md-6 col-lg-3 mb-3">
            <div class="category-list__item rounded-bordered">
                <a href="https://www.distriauto.fr/pieces-auto/1095-dispositif-d-attelage-accessoires/" class="fw-bold d-flex align-items-center">
                    <img class="flex-shrink-0" source srcset="https://cdn.distriauto.eu/build/images/spare-parts/category/icon/1095.webp" type="image/webp"/>
                        <img class="img-fluid" src="https://cdn.distriauto.eu/build/images/spare-parts/category/icon/1095.png" height="25" width="25" alt="" loading="lazy"/>
                    
                    <span>Dispositif d'attelage / accessoires</span>
                </a>
                                    <ul class="mt-2">
                                                                                                                <li>
                                    <a href="https://www.distriauto.fr/pieces-auto/1097-pieces-du-systeme-electrique/">
                                        Pièces du système électrique
                                    </a>
                                </li>
                                                            <li>
                                    <a href="https://www.distriauto.fr/pieces-auto/1096-dispositif-d-attelage-accessoires-1/">
                                        Dispositif d'attelage / accessoires
                                    </a>
                                </li>
                                                            <li>
                                    <a href="https://www.distriauto.fr/pieces-auto/1098-composants-pieces-de-montage/">
                                        Composants / pièces de montage
                                    </a>
                                </li>
                                                            <li>
                                    <a href="https://www.distriauto.fr/pieces-auto/1099-kit-d-assemblage/">
                                        Kit d'assemblage
                                    </a>
                                </li>
                                                            <li>
                                    <a href="https://www.distriauto.fr/pieces-auto/1100-controle-5/">
                                        Contrôle
                                    </a>
                                </li>
                                                                        </ul>
                                                </div>
        </div>
                                    <div class="col-sm-6 col-md-6 col-lg-3 mb-3">
            <div class="category-list__item rounded-bordered">
                <a href="https://www.distriauto.fr/pieces-auto/1107-nettoyage-des-phares/" class="fw-bold d-flex align-items-center">
                    <img class="flex-shrink-0" source srcset="https://cdn.distriauto.eu/build/images/spare-parts/category/icon/1107.webp" type="image/webp"/>
                        <img class="img-fluid" src="https://cdn.distriauto.eu/build/images/spare-parts/category/icon/1107.png" height="25" width="25" alt="" loading="lazy"/>
                    
                    <span>Nettoyage des phares</span>
                </a>
                                    <ul class="mt-2">
                                                    <li>
                                <a href="https://www.distriauto.fr/pieces-auto/1107-nettoyage-des-phares/">
                                    Nettoyage des phares
                                </a>
                            </li>
                                            </ul>
                                                </div>
        </div>
                                    <div class="col-sm-6 col-md-6 col-lg-3 mb-3">
            <div class="category-list__item rounded-bordered">
                <a href="https://www.distriauto.fr/pieces-auto/1231-systeme-pneumatique/" class="fw-bold d-flex align-items-center">
                    <img class="flex-shrink-0" source srcset="https://cdn.distriauto.eu/build/images/spare-parts/category/icon/1231.webp" type="image/webp"/>
                        <img class="img-fluid" src="https://cdn.distriauto.eu/build/images/spare-parts/category/icon/1231.png" height="25" width="25" alt="" loading="lazy"/>
                   
                    <span>Système pneumatique</span>
                </a>
                                    <ul class="mt-2 mb-1">
                                                                                                                <li>
                                    <a href="https://www.distriauto.fr/pieces-auto/1242-dessicateur-d-air-cartouche/">
                                        Dessicateur d'air / cartouche
                                    </a>
                                </li>
                                                            <li>
                                    <a href="https://www.distriauto.fr/pieces-auto/1246-soupapes-systeme-d-air-comprime/">
                                        Soupapes / Système d'air comprimé
                                    </a>
                                </li>
                                                            <li>
                                    <a href="https://www.distriauto.fr/pieces-auto/1232-robinet-d-arret-robinet-a-plusieurs-voies/">
                                        Robinet d'arrêt / Robinet à plusieurs voies
                                    </a>
                                </li>
                                                            <li>
                                    <a href="https://www.distriauto.fr/pieces-auto/1243-port-d-essai/">
                                        Port d'essai
                                    </a>
                                </li>
                                                            <li>
                                    <a href="https://www.distriauto.fr/pieces-auto/1238-tete-d-attelage/">
                                        Tête d'attelage
                                    </a>
                                </li>
                                                                        </ul>
                                                                    <a href="https://www.distriauto.fr/pieces-auto/1231-systeme-pneumatique/" class="btn btn-secondary fw-medium text-capitalize">Tout afficher</a>
                                                </div>
        </div>
                                    <div class="col-sm-6 col-md-6 col-lg-3 mb-3">
            <div class="category-list__item rounded-bordered">
                <a href="https://www.distriauto.fr/pieces-auto/1156-systeme-d-information-et-de-communication/" class="fw-bold d-flex align-items-center">
                    <img class="flex-shrink-0" source srcset="https://cdn.distriauto.eu/build/images/spare-parts/category/icon/1156.webp" type="image/webp"/>
                        <img class="img-fluid" src="https://cdn.distriauto.eu/build/images/spare-parts/category/icon/1156.png" height="25" width="25" alt="" loading="lazy"/>
                    
                    <span>Système d'information et de communication</span>
                </a>
                                    <ul class="mt-2 mb-1">
                                                                                                                <li>
                                    <a href="https://www.distriauto.fr/pieces-auto/1158-antennes/">
                                        Antennes
                                    </a>
                                </li>
                                                            <li>
                                    <a href="https://www.distriauto.fr/pieces-auto/1162-systeme-audio/">
                                        Système audio
                                    </a>
                                </li>
                                                            <li>
                                    <a href="https://www.distriauto.fr/pieces-auto/1157-instruments-1/">
                                        Instruments
                                    </a>
                                </li>
                                                            <li>
                                    <a href="https://www.distriauto.fr/pieces-auto/1163-outils-27/">
                                        Outils
                                    </a>
                                </li>
                                                            <li>
                                    <a href="https://www.distriauto.fr/pieces-auto/1159-navigation/">
                                        Navigation
                                    </a>
                                </li>
                                                                        </ul>
                                                                    <a href="https://www.distriauto.fr/pieces-auto/1156-systeme-d-information-et-de-communication/" class="btn btn-secondary fw-medium text-capitalize">Tout afficher</a>
                                                </div>
        </div>
                                    <div class="col-sm-6 col-md-6 col-lg-3 mb-3">
            <div class="category-list__item rounded-bordered">
                <a href="https://www.distriauto.fr/pieces-auto/1208-accessoires-4/" class="fw-bold d-flex align-items-center">
                    <img class="flex-shrink-0" source srcset="https://cdn.distriauto.eu/build/images/spare-parts/category/icon/1208.webp" type="image/webp"/>
                        <img class="img-fluid" src="https://cdn.distriauto.eu/build/images/spare-parts/category/icon/1208.png" height="25" width="25" alt="" loading="lazy"/>
                   
                    <span>Accessoires</span>
                </a>
                                    <ul class="mt-2 mb-1">
                                                                                                                <li>
                                    <a href="https://www.distriauto.fr/pieces-auto/1222-allume-cigares/">
                                        Allume-cigares
                                    </a>
                                </li>
                                                            <li>
                                    <a href="https://www.distriauto.fr/pieces-auto/1223-divers/">
                                        Divers
                                    </a>
                                </li>
                                                            <li>
                                    <a href="https://www.distriauto.fr/pieces-auto/1212-tapis-bac-auto-1/">
                                        Tapis bac auto
                                    </a>
                                </li>
                                                            <li>
                                    <a href="https://www.distriauto.fr/pieces-auto/1689-coffre-boite-de-rangement/">
                                        Coffre / boîte de rangement
                                    </a>
                                </li>
                                                            <li>
                                    <a href="https://www.distriauto.fr/accessoires/chaine/">
                                        Chaîne à neige
                                    </a>
                                </li>
                                                                        </ul>
                                                                    <a href="https://www.distriauto.fr/pieces-auto/1208-accessoires-4/" class="btn btn-secondary fw-medium text-capitalize">Tout afficher</a>
                                                </div>
        </div>
                                    <div class="col-sm-6 col-md-6 col-lg-3 mb-3">
            <div class="category-list__item rounded-bordered">
                <a href="https://www.distriauto.fr/pieces-auto/1251-prise-de-force/" class="fw-bold d-flex align-items-center">
                    <img class="flex-shrink-0" source srcset="https://cdn.distriauto.eu/build/images/spare-parts/category/icon/1251.webp" type="image/webp"/>
                        <img class="img-fluid" src="https://cdn.distriauto.eu/build/images/spare-parts/category/icon/1251.png" height="25" width="25" alt="" loading="lazy"/>
                    
                    <span>Prise de force</span>
                </a>
                                    <ul class="mt-2 mb-1">
                                                                                                                <li>
                                    <a href="https://www.distriauto.fr/pieces-auto/1257-commande-a-courroie-2/">
                                        Commande à courroie
                                    </a>
                                </li>
                                                            <li>
                                    <a href="https://www.distriauto.fr/pieces-auto/1252-joints-10/">
                                        Joints
                                    </a>
                                </li>
                                                            <li>
                                    <a href="https://www.distriauto.fr/pieces-auto/1783-tirette-a-cable-1715/">
                                        Tirette à câble
                                    </a>
                                </li>
                                                            <li>
                                    <a href="https://www.distriauto.fr/pieces-auto/1253-interrupteur-3/">
                                        Interrupteur
                                    </a>
                                </li>
                                                            <li>
                                    <a href="https://www.distriauto.fr/pieces-auto/1254-huile/">
                                        Huile
                                    </a>
                                </li>
                                                                        </ul>
                                                                    <a href="https://www.distriauto.fr/pieces-auto/1251-prise-de-force/" class="btn btn-secondary fw-medium text-capitalize">Tout afficher</a>
                                                </div>
        </div>
                                    <div class="col-sm-6 col-md-6 col-lg-3 mb-3">
            <div class="category-list__item rounded-bordered">
                <a href="https://www.distriauto.fr/pieces-auto/1258-entrainement-hybride-electrique/" class="fw-bold d-flex align-items-center">
                    <img class="flex-shrink-0" source srcset="https://cdn.distriauto.eu/build/images/spare-parts/category/icon/1258.webp" type="image/webp"/>
                        <img class="img-fluid" src="https://cdn.distriauto.eu/build/images/spare-parts/category/icon/1258.png" height="25" width="25" alt="" loading="lazy"/>
                  
                    <span>Entraînement hybride / électrique</span>
                </a>
                                    <ul class="mt-2 mb-1">
                                                                                                                <li>
                                    <a href="https://www.distriauto.fr/pieces-auto/1266-chargeur/">
                                        Chargeur
                                    </a>
                                </li>
                                                            <li>
                                    <a href="https://www.distriauto.fr/pieces-auto/1275-onduleur/">
                                        Onduleur
                                    </a>
                                </li>
                                                            <li>
                                    <a href="https://www.distriauto.fr/pieces-auto/1270-station-de-charge/">
                                        Station de charge
                                    </a>
                                </li>
                                                            <li>
                                    <a href="https://www.distriauto.fr/pieces-auto/1259-batterie-de-traction/">
                                        Batterie de traction
                                    </a>
                                </li>
                                                            <li>
                                    <a href="https://www.distriauto.fr/pieces-auto/1687-boite-de-vitesses-1619/">
                                        Boîte de vitesses
                                    </a>
                                </li>
                                                                        </ul>
                                                                    <a href="https://www.distriauto.fr/pieces-auto/1258-entrainement-hybride-electrique/" class="btn btn-secondary fw-medium text-capitalize">Tout afficher</a>
                                                </div>
        </div>
                                    <div class="col-sm-6 col-md-6 col-lg-3 mb-3">
            <div class="category-list__item rounded-bordered">
                <a href="https://www.distriauto.fr/pieces-auto/1515-outils-speciaux/" class="fw-bold d-flex align-items-center">
                    <img class="flex-shrink-0" source srcset="https://cdn.distriauto.eu/build/images/spare-parts/category/icon/1515.webp" type="image/webp"/>
                        <img class="img-fluid" src="https://cdn.distriauto.eu/build/images/spare-parts/category/icon/1515.png" height="25" width="25" alt="" loading="lazy"/>
                    
                    <span>Outils spéciaux</span>
                </a>
                                    <ul class="mt-2 mb-1">
                                                                                                                <li>
                                    <a href="https://www.distriauto.fr/pieces-auto/1526-outils-speciaux-entrainement-d-essieu/">
                                        Outils spéciaux entraînement d’essieu
                                    </a>
                                </li>
                                                            <li>
                                    <a href="https://www.distriauto.fr/pieces-auto/1516-outils-speciaux-echappement/">
                                        Outils spéciaux échappement
                                    </a>
                                </li>
                                                            <li>
                                    <a href="https://www.distriauto.fr/pieces-auto/1543-outil-d-injection-d-extraction-accessoires/">
                                        Outil d’injection / d’extraction / accessoires
                                    </a>
                                </li>
                                                            <li>
                                    <a href="https://www.distriauto.fr/pieces-auto/1538-outils-speciaux-suspension-amortissement/">
                                        Outils spéciaux suspension / amortissement
                                    </a>
                                </li>
                                                            <li>
                                    <a href="https://www.distriauto.fr/pieces-auto/1530-outils-speciaux-suspension-d-essieu-guidage-des-roues-roues/">
                                        Outils spéciaux suspension d’essieu / guidage des roues / roues
                                    </a>
                                </li>
                                                                        </ul>
                                                                    <a href="https://www.distriauto.fr/pieces-auto/1515-outils-speciaux/" class="btn btn-secondary fw-medium text-capitalize">Tout afficher</a>
                                                </div>
        </div>
                                    <div class="col-sm-6 col-md-6 col-lg-3 mb-3">
            <div class="category-list__item rounded-bordered">
                <a href="https://www.distriauto.fr/pieces-auto/1224-roues-pneus/" class="fw-bold d-flex align-items-center">
                    <img class="flex-shrink-0" source srcset="https://cdn.distriauto.eu/build/images/spare-parts/category/icon/1224.webp" type="image/webp"/>
                        <img class="img-fluid" src="https://cdn.distriauto.eu/build/images/spare-parts/category/icon/1224.png" height="25" width="25" alt="" loading="lazy"/>
                    
                    <span>Roues / Pneus</span>
                </a>
                                    <ul class="mt-2 mb-1">
                                                                                                                <li>
                                    <a href="https://www.distriauto.fr/pieces-auto/1230-outils-31/">
                                        Outils
                                    </a>
                                </li>
                                                            <li>
                                    <a href="https://www.distriauto.fr/pneus/">
                                        Pneus
                                    </a>
                                </li>
                                                            <li>
                                    <a href="https://www.distriauto.fr/pieces-auto/1792-systeme-de-gonflage-des-pneus/">
                                        Système de gonflage des pneus
                                    </a>
                                </li>
                                                            <li>
                                    <a href="https://www.distriauto.fr/pieces-auto/1226-jantes/">
                                        Jantes
                                    </a>
                                </li>
                                                            <li>
                                    <a href="https://www.distriauto.fr/pieces-auto/1227-accessoires-5/">
                                        Accessoires
                                    </a>
                                </li>
                                                                        </ul>
                                                                    <a href="https://www.distriauto.fr/pieces-auto/1224-roues-pneus/" class="btn btn-secondary fw-medium text-capitalize">Tout afficher</a>
                                                </div>
        </div>
                                    <div class="col-sm-6 col-md-6 col-lg-3 mb-3">
            <div class="category-list__item rounded-bordered">
                <a href="https://www.distriauto.fr/pieces-auto/1101-portes-bagages/" class="fw-bold d-flex align-items-center">
                    <img class="flex-shrink-0" source srcset="https://cdn.distriauto.eu/build/images/spare-parts/category/icon/1101.webp" type="image/webp"/>
                        <img class="img-fluid" src="https://cdn.distriauto.eu/build/images/spare-parts/category/icon/1101.png" height="25" width="25" alt="" loading="lazy"/>
                    
                    <span>Portes-bagages</span>
                </a>
                                    <ul class="mt-2">
                                                                                                                <li>
                                    <a href="https://www.distriauto.fr/pieces-auto/1102-barres-de-toit/">
                                        Barres de toit
                                    </a>
                                </li>
                                                            <li>
                                    <a href="https://www.distriauto.fr/pieces-auto/1103-porte-bagages-a-l-arriere/">
                                        Porte-bagages à l'arrière
                                    </a>
                                </li>
                                                            <li>
                                    <a href="https://www.distriauto.fr/pieces-auto/1104-fixation-pour-des-portes-bagages/">
                                        Fixation pour des portes-bagages
                                    </a>
                                </li>
                                                            <li>
                                    <a href="https://www.distriauto.fr/pieces-auto/1105-porte-velo-1/">
                                        Porte-vélo
                                    </a>
                                </li>
                                                            <li>
                                    <a href="https://www.distriauto.fr/pieces-auto/1106-support-habitacle/">
                                        Support habitacle
                                    </a>
                                </li>
                                                                        </ul>
                                                </div>
        </div>
        </div>

    </div>
        
    </div>
  )
}