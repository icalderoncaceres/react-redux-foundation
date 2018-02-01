/* Using enviroment */
global.enviroment = 'dev';

/* Using to export constants */
const conf = {dev: {}, prod: {}}

/* Enviroment on development */
conf['dev']['base_url'] = 'http://localhost';
conf['dev']['port'] = '3100';
conf['dev']['apiServer'] = 'http://127.0.0.1:3100';
conf['dev']['fileName'] = 'all_dist';
conf['dev']['minify'] = true;
conf['dev']['mediaApi'] = 'http://127.0.0.1:3100/dist/';

/* Enviroment on production */
conf['prod']['base_url']  = 'http://localhost';
conf['prod']['port'] = '3100';
conf['prod']['apiServer'] = '';
conf['prod']['fileName'] = 'bundle';
conf['prod']['minify'] = true;

/* Export constants */
module.exports = conf[global.enviroment];
