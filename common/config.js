export const radarName = 'Trivadis Platform Factory Technology Radar';
export const radarNameShort = 'Technology Radar';

export const quadrants = [
  'languages-and-frameworks',
  'architecture-methods-and-patterns',
  'platforms-and-services',
  'data-management',
];

export function assetUrl(file) {
  return `/techradar/assets/${file}`
}

export const getPageNames = (radar) => {
  return [
    'index',
    'overview',
    'help-and-about-tech-radar',
    'aoe-toolbox',
    ...quadrants,
    ...getItemPageNames(radar.items),
  ]
}

export const getItemPageNames = (items) => items.map(item => `${item.quadrant}/${item.name}`);

export const rings = [
  'adopt',
  'trial',
  'assess',
  'hold',
  'watch'
];

const messages = {
  'languages-and-frameworks': 'Languages & Frameworks',
  'architecture-methods-and-patterns': 'Architecture, Methods & Patterns',
  'platforms-and-services': 'Platforms and Services',
  'data-management': 'Data Management',
};

export const translate = (key) => (messages[key] || '-');

export function isMobileViewport() {
    // return false for server side rendering
    if (typeof window == 'undefined') return false;

    const width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    return width < 1200;
}

const formatRelease = (release) => moment(release, 'YYYY-MM-DD').format('MMM YYYY');
