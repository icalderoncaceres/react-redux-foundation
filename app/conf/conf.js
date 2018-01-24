/* Using enviroment */
global.enviroment = 'dev';

/* Using to export constants */
const conf = {dev: {}, prod: {}}

/* Enviroment on development */
conf['dev']['base_url'] = 'http://localhost';
conf['dev']['port'] = '3100';
conf['dev']['apiServer'] = '';
conf['dev']['fileName'] = 'all_dist';
conf['dev']['minify'] = true;

/* Enviroment on production */
conf['prod']['base_url']  = 'https://example.co';
conf['prod']['port'] = '3100';
conf['prod']['apiServer'] = '';
conf['prod']['fileName'] = 'bundle';
conf['prod']['minify'] = true;

/* Export constants */
module.exports = conf[global.enviroment];
