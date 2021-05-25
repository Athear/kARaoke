const axios = require ("axios");

module.exports = {
    find: function(req, res) {
        axios
      .get("https://api.giphy.com/v1/gifs/random?api_key=" + process.env.GIPHY_API_KEY +"&tag=dog&rating=pg-13")
      .then(result => res.json(result.data.data))
        .catch(err => res.status(422).json(err));
    },
}