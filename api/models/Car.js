/**
 * Car.js
 *
 * @description :: Motorized vehicle with 4 wheels for individual and family transport
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

module.exports = {

  /* SailsJS schema configuration
   * Mandatory for SailsJS framework */
  attributes: {
    model: { type:'string' },
    brand: { model: 'brand' },
    year: { type: 'number', min: 2000, max: 2019, columnType: 'integer' },
    dailyRate: { type: 'number', min: 0, columnType: 'float' },
    availableAt: { type: 'string', columnType: 'date' },
    fullTank: { type: 'boolean' },
    summary: { type: 'string', columnType: 'mediumtext' },
    thumbnail: { type: 'string' },
    cover: { type: 'string' },
    extras: { type: 'json', columnType: 'array' },
    doorConfiguration: {
      type: 'string',
      isIn: ['2 Doors', '3 Doors', '4 Doors', '5 Doors', '6 Doors']
    },
    history: { type: 'string', columnType: 'longtext' },
    metaData: { type: 'json' },
  },

  /* AdminX configuration
   * This configuration is optional
   * Here you can define how AdminX
   * displays and helps you edit your data */
  adminx: {
    name: 'Car',
    attributes: {
      id: { disabled: true },
      thumbnail: { list: true, editor: 'image' },
      brand: { }, // Here for ordering
      year: { editor: 'input-integer' },
      dailyRate: { editor: 'input-float' },
      availableAt: { editor: 'md-datepicker' },
      model: { list: true },
      summary: { }, // Here for ordering
      cover: { editor: 'image' },
      extras: { editor: 'md-chips' },
      doorConfiguration: { editor: 'md-select' },
      history: { editor: 'html-simple' },
      createdAt: { editor: 'moment-picker' },
      updatedAt: { list: true, editor: 'moment-picker' },
    }
  }
};
