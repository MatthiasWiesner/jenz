import { Config, Platform, FeatureCard } from '../../app/dashboard';
import { OPEN_HPI_REVIEWS, OPEN_SAP_REVIEWS, MOOC_HOUSE_REVIEWS, OPEN_WHO_REVIEWS } from 'assets/reviews/reviews';

const OPEN_HPI: Platform = {
    rootUrl: 'https://open.hpi.de',
    displayName: 'openHPI',
    logoUrl: 'assets/logos/open_hpi_logo.png',
    mapMarkerUrl: 'assets/marker/hpi.svg',
    reviews: OPEN_HPI_REVIEWS,
    isFilterSelected: true,
    citation: 'Be curious, be social, be successful.',
    primaryColor: '#de6212'
};

const OPEN_SAP: Platform = {
    rootUrl: 'https://open.sap.com',
    displayName: 'openSAP',
    logoUrl: 'assets/logos/openSAP_Logo_neg.png',
    mapMarkerUrl: 'assets/marker/sap.svg',
    reviews: OPEN_SAP_REVIEWS,
    isFilterSelected: false,
    citation: 'Learn anywhere, anytime and on any device!',
    primaryColor: '#f0ab00'
};

const MOOC_HOUSE: Platform = {
    rootUrl: 'https://mooc.house',
    displayName: 'mooc.house',
    logoUrl: 'assets/logos/mooc_house_logo_neg_srgb_300.png',
    mapMarkerUrl: 'assets/marker/mooc.svg',
    reviews: MOOC_HOUSE_REVIEWS,
    isFilterSelected: false,
    citation: 'Learn online together. Anytime, anywhere.',
    primaryColor: '#abb324'
};

const OPEN_WHO: Platform = {
    rootUrl: 'https://openwho.org',
    displayName: 'openWHO',
    logoUrl: 'assets/logos/who_logo_white.png',
    mapMarkerUrl: 'assets/marker/who.svg',
    reviews: OPEN_WHO_REVIEWS,
    isFilterSelected: false,
    citation: 'Equip frontline responders with the knowledge to better manage health emergencies.',
    primaryColor: '#0b72b5'
};

export const CONFIG: Config = {
    platforms: [OPEN_HPI, OPEN_SAP, MOOC_HOUSE, OPEN_WHO],
    courseSubUrl: '/api/v2/courses',
    directCourseUrl: '/courses/',
    geoSubUrl: '/api/v2/stats/geo.json',
    geoStartParam: 'start_date',
    geoEndParam: 'end_date',
    globalsSubUrl: '/api/v2/stats/global.json',
    activeUserSubUrl: '/api/v2/stats/active_users',
    activeStartParam: 'start_date',
    activeEndParam: 'end_date',
    citationAll: 'Massive Open Online Courses'
};

export const FEATURE_CARDS: FeatureCard[] = [
    { imageUrl: 'assets/many-people.svg', title: 'Massive', text: 'Learn with thousands of interested students.' },
    { imageUrl: 'assets/open-door.svg', title: 'Open', text: 'Everyone can participate. Sign-Up is free.' },
    { imageUrl: 'assets/online.svg', title: 'Online', text: 'Learn anywhere, at any time. Set your own plans.' },
    { imageUrl: 'assets/online-course.svg', title: 'Courses', text: 'A huge variety of topics, waiting to be explored.' }
  ]