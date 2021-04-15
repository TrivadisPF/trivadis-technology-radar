import {Item} from './model';

export const radarName = 'Trivadis Platform Factory Technology Radar';
export const radarNameShort = 'Technology Radar';

export const quadrants = [
  'languages-and-frameworks',
  'architecture-methods-and-patterns',
  'platforms-and-services',
  'data-management',
];

export const rings = [
    'all',
    'adopt',
    'trial',
    'assess',
    'hold',
    'watch'
] as const;

export type Ring = typeof rings[number]

export const getItemPageNames = (items: Item[]) => items.map(item => `${item.quadrant}/${item.name}`);

export const showEmptyRings = false;

const messages = {
  'languages-and-frameworks': 'Languages & Frameworks',
  'architecture-methods-and-patterns': 'Architecture, Methods & Patterns',
  'platforms-and-services': 'Platforms and Services',
  'data-management': 'Data Management',
};

export const translate = (key: string) => (messages[key] || '-');

export function isMobileViewport() {
    // return false for server side rendering
    if (typeof window == 'undefined') return false;

    const width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    return width < 1200;
}

export function assetUrl(file: string) {
    return process.env.PUBLIC_URL + '/' + file;
    // return `/techradar/assets/${file}`
}
