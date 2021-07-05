require("dotenv").config();
const express = require("express");
const SpotifyWebApi = require("spotify-web-api-node");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post("/login", (req, res) => {
  // console.log(process.env.CLIENT_ID);

  const spotifyApi = new SpotifyWebApi({
    // redirectUri: process.env.REDIRECT_URI,
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
  });

  spotifyApi
    .clientCredentialsGrant()
    .then((data) => {
      console.log(data);
      res.json({
        accessToken: data.body.access_token,
        expiresIn: data.body.expires_in,
        // refreshToken: data.body.refresh_token,
      });
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(400);
    });
});

app.listen(3001);
