
//criaçãi de tabela 

exports.up = function(knex) {
 return knex.schema.createTable('ongs', function (table) {
    table.string('id').primary();
    table.string('name').notNullable();
    table.string('email').notNullable();
    table.string('whatsapp').notNullable();
    table.string('city').notNullable();
    table.string('uf', 2).notNullable();
 });
  
};

//deletar tabela 
exports.down = function(knex) {
    return knex.schema.droptable('ongs')

  
};
