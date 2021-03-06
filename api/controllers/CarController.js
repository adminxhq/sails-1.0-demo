
module.exports = {

  'index': function (req, res) {
    Car.find()
      .populateAll()
      .sort('updatedAt desc')
      .then(function (cars) {
        return res.view('car-list', { cars:cars });
      })
      .catch(res.serverError)
    ;
  },

  'details': function (req, res) {
    var id = parseInt(req.param('id'));

    Car.findOne({ id: id })
      .populateAll()
      .then(function (car) {
        if(car) {
          res.view('car-details', { car: car });
        }
        return res.badRequest();
      })
      .catch(res.serverError)
    ;
  }

}
