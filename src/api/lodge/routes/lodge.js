'use strict';

/**
 * lodge router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::lodge.lodge');
