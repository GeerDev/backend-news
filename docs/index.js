const basicInfo = require('./basicInfo');
const components = require('./components');
const news = require('./news');

module.exports = {
    ...basicInfo,
    ...components,
    ...news
};