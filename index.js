const a = require("../country/state/city/index");
const b = require("../utilities/utils/index");
const getPeopleInCity = (peopleNames) => {
  return b(peopleNames);
};
module.exports = getPeopleInCity;
