/*  Images
\*-------------------------------------------------------*/
import favicon from './images/favicon.png'
import logo from './images/logo.svg';
import logoWhite from './images/logo-white.svg';
import openGraph from './images/numy.jpg'

import iconLanguage from './images/icon-language.svg'
import iconWhatsApp from './images/icon-whatsapp.svg'
import iconInstagram from './images/icon-instagram.svg'
import iconFacebook from './images/icon-facebook.svg'
import iconLinkedIn from './images/icon-linkedin.svg'

import iconBeds from './images/icon-beds.svg'
import iconBaths from './images/icon-baths.svg'
import iconSqFt from './images/icon-sqft.svg'
import iconLot from './images/icon-lot.svg'

import heroMobile from './images/numy-hero-mobile.png'
import heroTablet from './images/numy-hero-tablet.png'
import heroDesktop from './images/numy-hero.png'

import coralLago from './images/coral-lago.png'
import reintree from './images/reintree.png'
import parcViewVillas from './images/parc-view-villas.png'
import lake from './images/lake.png'
import frontWater from './images/frontwater.png'
import pool from './images/pool.png'
import housePool from './images/house-pool.png'
import beach from './images/beach.png'
import garden from './images/garden.png'
import condos from './images/condos.png'
import luxuryRentals from './images/luxury-rentals.png'
import towHouse from './images/town-house.png'
import homes from './images/homes.png'
import land from './images/land.png'
import waterfrontHomes from './images/waterfront-homes.png'
import miamiBeach from './images/miami-beach.png'
import miamiFisherIsland from './images/miami-fisher-island.png'
import miamiHomes from './images/miami-homes.png'
import miamiBrickell from './images/miami-brickell.png'
import market from  './images/market.png'

import bannerAboutMobile from './images/numy-about-mobile.png'
import bannerAboutTablet from './images/numy-about-tablet.png'
import bannerAbout from './images/numy-about.png'
import bannerExclusiveMobile from './images/numy-exclusive-mobile.png'
import bannerExclusiveTablet from './images/numy-exclusive-tablet.png'
import bannerExclusive from './images/numy-exclusive.png'
import bannerServicesMobile from './images/numy-services-mobile.png'
import bannerServicesTablet from './images/numy-services-tablet.png'
import bannerServices from './images/numy-services.png'
import bannerCondosMobile from './images/numy-condos-mobile.png'
import bannerCondosTablet from './images/numy-condos-tablet.png'
import bannerCondos from './images/numy-condos.png'
import bannerLuxuryMobile from './images/numy-luxury-mobile.png'
import bannerLuxuryTablet from './images/numy-luxury-tablet.png'
import bannerLuxury from './images/numy-luxury.png'
import bannerTownMobile from './images/numy-town-mobile.png'
import bannerTownTablet from './images/numy-town-tablet.png'
import bannerTown from './images/numy-town.png'
import bannerHomesMobile from './images/numy-homes-mobile.png'
import bannerHomesTablet from './images/numy-homes-tablet.png'
import bannerHomes from './images/numy-homes.png'
import bannerLandMobile from './images/numy-land-mobile.png'
import bannerLandTablet from './images/numy-land-tablet.png'
import bannerLand from './images/numy-land.png'
import bannerWaterfrontMobile from './images/numy-waterfront-mobile.png'
import bannerWaterfrontTablet from './images/numy-waterfront-tablet.png'
import bannerWaterfront from './images/numy-waterfront.png'
import bannerSearchMobile from './images/numy-search-mobile.png'
import bannerSearchTablet from './images/numy-search-tablet.png'
import bannerSearch from './images/numy-search.png'
import bannerMiamiBeachMobile from './images/numy-miami-beach-mobile.png'
import bannerMiamiBeachTablet from './images/numy-miami-beach-tablet.png'
import bannerMiamiBeach from './images/numy-miami-beach.png'
import bannerFisherIslandMobile from './images/numy-fisher-island-mobile.png'
import bannerFisherIslandTablet from './images/numy-fisher-island-tablet.png'
import bannerFisherIsland from './images/numy-fisher-island.png'
import bannerWestonMobile from './images/numy-weston-mobile.png'
import bannerWestonTablet from './images/numy-weston-tablet.png'
import bannerWeston from './images/numy-weston.png'
import bannerBrickellMobile from './images/numy-brickell-mobile.png'
import bannerBrickellTablet from './images/numy-brickell-tablet.png'
import bannerBrickell from './images/numy-brickell.png'
import bannerProjectsMobile from './images/numy-projects-mobile.png'
import bannerProjectsTablet from './images/numy-projects-tablet.png'
import bannerProjects from './images/numy-projects.png'

import numy from './images/numy.png'

import teamOne from './images/team-01.png'
import teamTwo from './images/team-02.png'
import teamThree from './images/team-03.png'

import videoProperty from './images/video-property.png'

import fullContact from './images/numy-contact.png'
import fullContactTablet from './images/numy-contact-tablet.png'
import fullContactMobile from './images/numy-contact-mobile.png'

import loader from './images/loader.svg'



/*  CSS
\*-------------------------------------------------------*/
import scss from './scss/main.scss'



/*  JavaScript
\*-------------------------------------------------------*/
import { activeMenu, activeMenuLink } from './js/menu'
import { slider } from './js/slider';
import { slidertestimonial } from './js/testimonial';
import { bridgeData } from './js/bridge_API';
import { emailContact } from './js/email';

activeMenu('hamburger','menu')
activeMenuLink()
slidertestimonial()
emailContact()

document.addEventListener('DOMContentLoaded', () => {
  bridgeData()
  slider('slider', '.slider__container')
})
