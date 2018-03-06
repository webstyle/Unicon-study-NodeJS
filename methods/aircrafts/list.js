const AirCraftsDao = require('../../dao/AirCraftsDao');

module.exports = async params => {
  try {
    return await AirCraftsDao.getList();
  } catch (error) {
    return Promise.reject({ message: error.message });
  }
};

