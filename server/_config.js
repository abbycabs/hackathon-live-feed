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
  {owner: 'mozillascience', repo: 'global-sprint-2016'},
  {owner: 'acabunoc', repo: 'hackathon-live-feed'},
  {owner: 'simpeg', repo: 'simpeg'},
  {owner: 'KirstieJane', repo: 'STEMMRoleModels'},
  {owner: 'openSNP', repo: 'snpr'},
  {owner: 'everware', repo: 'everware'},
  {owner: 'goyalsid', repo: 'phageParser'},
  {owner: 'RobSullivan', repo: 'pmc-ref'},
  {owner: 'mozillascience', repo: 'open-data-training'},
  {owner: 'mozillascience', repo: 'paperbadger'},
  {owner: 'trillian', repo: 'trillian'},
  {owner: 'WorldBrain', repo: 'Webmarks'},
  {owner: 'brian-bot', repo: 'githubr'},
  {owner: 'binder-project', repo: 'binder'},
  {owner: 'ContentMine', repo: 'visualizations'},
  {owner: 'ContentMine', repo: 'contentmine.org'},
  {owner: 'ContentMine', repo: 'canary'},
  {owner: 'SOFTowaha', repo: 'Quantum_Mechanics'},
  {owner: 'cytoscape', repo: 'cytosnap'},
  {owner: 'cytoscape', repo: 'cytosnap-demo'},
  {owner: 'mandar2812', repo: 'DynaML'},
  {owner: 'annakrystalli', repo: 'rmacroRDM'},
  {owner: 'Homebrew', repo: 'homebrew-science'},
  {owner: 'OpenCosmics', repo: 'opencosmics.github.io'},
  {owner: 'data-lessons', repo: 'library-data-intro'},
  {owner: 'data-lessons', repo: 'librarycarpentry'},
  {owner: 'data-lessons', repo: 'lesson-catalog'},
  {owner: 'data-lessons', repo: 'gapminder-openrefine'},
  {owner: 'data-lessons', repo: 'gapminder-R'},
  {owner: 'data-lessons', repo: 'gapminder-spreadsheet'},
  {owner: 'data-lessons', repo: 'library-sql'},
  {owner: 'data-lessons', repo: 'library-openrefine'},
  {owner: 'data-lessons', repo: 'library-git'},
  {owner: 'data-lessons', repo: 'library-shell'},
  {owner: 'everware', repo: 'everware.github.io'},
  {owner: 'OKScienceDE', repo: 'Open_Science_101'},
  {owner: 'weecology', repo: 'retriever'},
  {owner: 'AAROC', repo: 'CODE-RADE'},
  {owner: 'jcolomb', repo: 'CeTrAn'},
  {owner: 'DIYbiosphere', repo: 'diybiosphere.io'},
  {owner: 'xpansa', repo: 'sciai'},
  {owner: 'codeforscience', repo: 'sciencefair'},
  {owner: 'joeyklee', repo: 'bec-explorer'},
  {owner: 'schae234', repo: 'locuspocus'},
  {owner: 'Akronix', repo: 'birding'},
  {owner: 'crowdAI', repo: 'Knowledge-Base'},
  {owner: 'bmkramer', repo: '101innovations-survey-data'},
  {owner: 'kdaily', repo: 'shinyPathway'},
  {owner: 'cbahlai', repo: 'lampyrid'},
  {owner: 'cbahlai', repo: 'dede'},
  {owner: 'zjsteyn', repo: 'ruralcomputing'},
  {owner: 'paperhive', repo: 'paperhive-frontend'},
  {owner: 'paperhive', repo: 'paperhive-frontend-static'},
  {owner: 'paperhive', repo: 'walter-whitelist'},
  {owner: 'paperhive', repo: 'mongoose-erase'},
  {owner: 'paperhive', repo: 'oai-pmh'},
  {owner: 'cafervero', repo: 'moderforest'},
  {owner: 'SASUSA', repo: 'SunRisksStatsViz'},
  {owner: 'KirstieJane', repo: 'clubs-events'},
  {owner: 'SASUSA', repo: 'MappingRegisteredUSClinicalTrials'},
  {owner: 'aliburchard', repo: 'ProjectBuilderDocumentation'},
  {owner:'josmas', repo: 'badgr-client'}

];

module.exports = config;