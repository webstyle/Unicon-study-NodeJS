const dao = require('./base');

class AirCraftsDao {
  static async getList() {
    const columns = [
      dao.knex.raw(`model->>'ru' as name`),
      `aircraft_code`,
      `range`
    ];
    return await dao.knex
      .select(columns)
      .from(`aircrafts_data`)
      .then(list => list)
      .catch(error => {
        throw error
      });
  }
}

module.exports = AirCraftsDao;
