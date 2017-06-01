var config = {};

// github keys
config.githubClientID = process.env.githubClientID || 'GET_YOUR_OWN';
config.githubClientSecret = process.env.githubClientSecret || 'GET_YOUR_OWN';
config.githubCallbackURL = process.env.githubCallbackURL || "http://localhost:3000/auth/github/callback";

// twitter keys
config.twitterConsumerKey = process.env.twitterConsumerKey || 'GET_YOUR_OWN';
config.twitterConsumerSecret = process.env.twitterConsumerSecret || 'GET_YOUR_OWN';
config.twitterAccessTokenKey = process.env.twitterAccessTokenKey || 'GET_YOUR_OWN';
config.twitterAccessTokenSecret = process.env.twitterAccessTokenSecret || 'GET_YOUR_OWN';

config.githubUsername = process.env.githubUsername || 'GITHUB_USERNAME';
config.githubPassword = process.env.githubPassword || 'GITHUB_PASSWORD';

// secret key (update in production!!!)
config.secretKey = process.env.secretKey || "\x1d\x0fB\x8d'\xaa\xaf\x04\xca\xfe\n\xb8Vg\x95X\x9b\xd6\x18\xd60T`\xc6";

// mongo uri
config.mongoURI = {
  development: "mongodb://localhost/hackathon",
  test: "mongodb://localhost/hackathon-test",
  stage: process.env.MONGOLAB_URI
};

// hashtags for twitter stream
config.hashtags = '#mozsprint';

// owner/repos for commit stream
config.github = [
{ owner: 'mozilla', repo: 'global-sprint'},
{ owner: 'ODiogoSilva', repo: 'TriFusion'},
{ owner: 'LiteraturePark', repo: 'LiteraturePark'},
{ owner: 'OpenKnowledgeMaps', repo: 'mozsprint'},
{ owner: 'OpenKnowledgeMaps', repo: 'project-website'},
{ owner: 'OpenKnowledgeMaps', repo: 'Headstart'},
{ owner: 'nifrasismail', repo: 'feedback'},
{ owner: 'westwork-org', repo: 'westwork'},
{ owner: 'ColperScience', repo: 'global-sprint'},
{ owner: 'ColperScience', repo: 'podcasting'},
{ owner: 'MrClan', repo: 'RealTimePolls'},
{ owner: 'opentechinstitute', repo: 'piecewise'},
{ owner: 'dib-lab', repo: 'osf-cli'},
{ owner: 'JoPauls', repo: 'OpenHeart-Project'},
{ owner: 'acgetchell', repo: 'CDT-plusplus'},
{ owner: 'mozillabvp', repo: 'iFiction-builder'},
{ owner: 'katjaq', repo: 'BrainBoxTutorials'},
{ owner: 'algobook', repo: 'algobook'},
{ owner: 'codebuddiesdotorg', repo: 'cb-v2-scratch'},
{ owner: 'lappleapple', repo: 'feedmereadmes'},
{ owner: 'dasaderi', repo: 'WhyNotOpenScience'},
{ owner: 'cliqz-oss', repo: 'privacy-bot'},
{ owner: 'cliqz-oss', repo: 'web-ninja'},
{ owner: 'cliqz-oss', repo: 'green-analytics'},
{ owner: 'Sage-Bionetworks', repo: 'synapsePythonClient'},
{ owner: 'autonome', repo: 'web-and-messaging'},
{ owner: 'edgi-govdata-archiving', repo: 'web-monitoring '},
{ owner: 'edgi-govdata-archiving', repo: 'web-monitoring-processing'},
{ owner: 'SamanthaHindle', repo: 'preprint_JournalClub'},
{ owner: 'cyverse', repo: 'atmosphere'},
{ owner: 'cskumaresan', repo: 'm2s'},
{ owner: 'peekdistrict', repo: 'peekdistrict'},
{ owner: 'Carotejada', repo: 'Maker-Spaces-para-pequenas-industrias'},
{ owner: 'edovio', repo: 'Open_Student_Book'},
{ owner: 'diaspora', repo: 'diaspora'},
{ owner: 'MozillaFoundation', repo: 'vr-curriculum-sprint'},
{ owner: 'p2pu', repo: 'Awesome-Online-Courses'},
{ owner: 'mozillascience', repo: 'studyGroupEvents'},
{ owner: 'cytoscape', repo: 'cytoscape.js-euler'},
{ owner: 'Open-Data-Open-Minds', repo: 'odom_GlobalSprint2017'},
{ owner: 'open-omaha', repo: 'omaha-parks'},
{ owner: 'dh-southernafrica', repo: 'capacity-building'},
{ owner: 'shillontheroad', repo: 'makers-jam'},
{ owner: 'felixhenninger', repo: 'lab.js'},
{ owner: 'sparcopen', repo: 'do-a-doathon'},
{ owner: 'resbazaz', repo: 'studyGroup'},
{ owner: 'mozilla-neutrino', repo: 'neutrino-dev'},
{ owner: 'elidron', repo: 'womenobservatory'},
{ owner: 'pomochieng', repo: 'Jilinde-App'},
{ owner: 'TyJK', repo: 'EchoBurst'},
{ owner: 'ContextLab', repo: 'hypertools'},
{ owner: 'pransh15', repo: 'decentralization-camp'},
{ owner: 'Obadha', repo: 'baraza'},
{ owner: 'PiReel', repo: 'PiReel-Core'},
{ owner: 'oacore', repo: 'oacore-mozsprint17'},
{ owner: 'chamaconekt', repo: 'apigatewayMicroservice'},
{ owner: 'chamaconekt', repo: 'chamaconekt.github.io'},
{ owner: 'chamaconekt', repo: 'blog'},
{ owner: 'chamaconekt', repo: 'mpesaCheckout-api'},
{ owner: 'chamaconekt', repo: 'mpesaB2C-api'},
{ owner: 'chamaconekt', repo: 'mpesaB2B-api'},
{ owner: 'chamaconekt', repo: 'visa-apiMicroservice'},
{ owner: 'chamaconekt', repo: 'clientMicroservice'},
{ owner: 'chamaconekt', repo: 'docs'},
{ owner: 'chamaconekt', repo: 'core'},
{ owner: 'NeuroTechX', repo: 'eeg-101'},
{ owner: 'DIYScience', repo: 'DIYScience'},
{ owner: 'lohanitech', repo: 'openpics'},
{ owner: 'MozillaFoundation', repo: 'mpa-offline-games-challenge'},
{ owner: 'MozillaFoundation', repo: 'mpa-iot-escape-room-challenge'},
{ owner: 'MozillaFoundation', repo: 'mpa-game-jam-challenge'},
{ owner: 'MozillaFoundation', repo: 'mpa-cryptomancer-challenge'},
{ owner: 'cmaumet', repo: 'fmri_reporting'},
{ owner: 'the-method', repo: 'podcast'},
{ owner: 'nteract', repo: 'hydrogen'},
{ owner: 'AuthorCarpentry', repo: 'planning'},
{ owner: 'AuthorCarpentry', repo: 'dois-citation-data'},
{ owner: 'AuthorCarpentry', repo: 'orcid-profile'},
{ owner: 'AuthorCarpentry', repo: 'markdown-github-webpages'},
{ owner: 'jasonclark', repo: 'linked-people-bioscience'},
{ owner: 'bionode', repo: 'bionode'},
{ owner: 'dimonga', repo: 'Smart-Street-Bulbs'},
{ owner: 'dunebuggie', repo: 'participation-collaboration-mozillaclubs'},
{ owner: 'dvigneshwer', repo: 'deeprust'},
{ owner: 'ipsha21', repo: 'altruism-in-tech'},
{ owner: 'Kevin-Mattheus-Moerman', repo: 'GIBBON'},
{ owner: 'girlscript', repo: 'contribute-girlscript'},
{ owner: 'GrantRVD', repo: 'data-neuroscience'},
{ owner: 'Open-Data-Science-at-SIO', repo: 'RRROBOTS'},
{ owner: 'vyaspranjal33', repo: 'privacy-brigade'},
{ owner: 'paulvill', repo: 'paulvill.github.io'},
{ owner: 'NeuroTechX', repo: 'learn.neurotechedu.com'},
{ owner: 'semirahd', repo: 'Mozilla-NorthAmerican-CampusClub'},
{ owner: 'Monsauce', repo: 'Open-the-North'},
{ owner: 'phageParser', repo: 'phageParser'},
{ owner: 'LibraryCarpentry', repo: 'librarycarpentry.github.io'},
{ owner: 'voxverus', repo: 'JobTalk'},
{ owner: 'dbild', repo: 'teen-open-leadership'},
{ owner: 'deniselinn', repo: 'connectchicago'},
{ owner: 'marcosvital', repo: 'teach-R-project'},
{ owner: 'ottagit', repo: 'git_push_freshman'},
{ owner: 'drashti4', repo: 'localisationofschool'},
{ owner: 'safenetwork', repo: 'safenetwork'},
{ owner: 'lesliePhD', repo: 'open_funders_canada'},
{ owner: 'sunpy', repo: 'sunpy'},
{ owner: 'kshitizkhanal7', repo: 'Aerogami'},
{ owner: 'misaakidis', repo: 'pakalolo'},
{ owner: 'Chicago', repo: 'opengrid'},
{ owner: 'lisahandsonline', repo: 'Internet-Safety-Driving-Licence'},
{ owner: 'werdnanoslen', repo: 'mobile-map-io'},
{ owner: 'jpwrobinson', repo: 'OpenDerby'},
{ owner: 'aletheia-foundation', repo: 'admin'},
{ owner: 'libscie', repo: 'liberator'},
{ owner: 'shawnmgoulet', repo: 'teachosm-for-high-school'},
{ owner: 'WikiToLearn', repo: 'Hives-Network'},
{ owner: 'kitsunenosaraT', repo: 'Mozilla-Italia-l10n-guide'},
{ owner: 'opensnp', repo: 'snpr'},
{ owner: 'WhitakerLab', repo: 'WhitakerLabProjectManagement'}
];

module.exports = config;