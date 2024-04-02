'use strict';

/**
 * lodge service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::lodge.lodge');
