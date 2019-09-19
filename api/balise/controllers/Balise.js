'use strict';

/**
 * Balise.js controller
 *
 * @description: A set of functions called "actions" for managing `Balise`.
 */

module.exports = {

  /**
   * Retrieve balise records.
   *
   * @return {Object|Array}
   */

  find: async (ctx, next, { populate } = {}) => {
    if (ctx.query._q) {
      return strapi.services.balise.search(ctx.query);
    } else {
      return strapi.services.balise.fetchAll(ctx.query, populate);
    }
  },

  /**
   * Retrieve a balise record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.balise.fetch(ctx.params);
  },

  /**
   * Count balise records.
   *
   * @return {Number}
   */

  count: async (ctx, next, { populate } = {}) => {
    return strapi.services.balise.count(ctx.query, populate);
  },

  /**
   * Create a/an balise record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.balise.add(ctx.request.body);
  },

  /**
   * Update a/an balise record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.balise.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an balise record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.balise.remove(ctx.params);
  }
};
