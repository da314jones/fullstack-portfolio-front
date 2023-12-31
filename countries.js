const getFullCountryName = (countryCode) => {
  const countries = {
    'ar': 'Argentina',
    'au': 'Australia',
    'be': 'Belgium',
    'br': 'Brazil',
    'ca': 'Canada',
    'cn': 'China',
    'co': 'Colombia',
    'cu': 'Cuba',
    'cz': 'Czech Republic',
    'eg': 'Egypt',
    'fr': 'France',
    'de': 'Germany',
    'gr': 'Greece',
    'hk': 'Hong Kong',
    'hu': 'Hungary',
    'in': 'India',
    'id': 'Indonesia',
    'ie': 'Ireland',
    'il': 'Israel',
    'it': 'Italy',
    'jp': 'Japan',
    'kr': 'South Korea',
    'lv': 'Latvia',
    'lt': 'Lithuania',
    'my': 'Malaysia',
    'mx': 'Mexico',
    'ma': 'Morocco',
    'nl': 'Netherlands',
    'nz': 'New Zealand',
    'ng': 'Nigeria',
    'no': 'Norway',
    'ph': 'Philippines',
    'pk': 'Pakistan',
    'pl': 'Poland',
    'pt': 'Portugal',
    'ro': 'Romania',
    'ru': 'Russia',
    'sa': 'Saudi Arabia',
    'rs': 'Serbia',
    'sg': 'Singapore',
    'sk': 'Slovakia',
    'si': 'Slovenia',
    'za': 'South Africa',
    'es': 'Spain',
    'se': 'Sweden',
    'ch': 'Switzerland',
    'tw': 'Taiwan',
    'th': 'Thailand',
    'tr': 'Turkey',
    'ae': 'United Arab Emirates',
    'ua': 'Ukraine',
    'gb': 'United Kingdom',
    'us': 'United States',
    've': 'Venezuela',
    'vn': 'Vietnam'
  };

  const countryName = countries[countryCode.toLowerCase()] || countryCode;
  return countryName.toUpperCase();
};

window.onload = function() {
  var myVideo = document.getElementById("ad");
  myVideo.play();
}
  
const openInSameTab = (e) => {
  e.preventDefault();
  window.open(e.target.href, "_self");
};

const getCategoryColor = (category) => {
  switch (category) {
    case 'BUSINESS':
      return 'blue';
    case 'ENTERTAINMENT':
      return 'red';
    case 'GENERAL':
      return 'green';
    case 'HEALTH':
      return 'yellow';
    case 'SCIENCE':
      return 'purple';
    case 'SPORTS':
      return 'orange';
    case 'TECHNOLOGY':
      return 'gray';
    default:
      return 'black';
  }
};
