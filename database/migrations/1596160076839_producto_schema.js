'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ProductoSchema extends Schema {
  up () {
    this.create('productos', (table) => {
      table.increments()
      
      table.string('nombre', 80).notNullable()
      table.string('precio', 3).notNullable()
      table.string('descripcion', 80).notNullable()
      table.string('url').notNullable()
      table.string('vendido').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('productos')
  }
}

module.exports = ProductoSchema
