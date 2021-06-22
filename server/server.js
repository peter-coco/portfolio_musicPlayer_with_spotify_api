const express = require("express");
const SpotifyWebApi = require("spotify-web-api-node");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post("/refresh", (req, res) => {
  const refreshToken = req.body.refreshToken;
  // console.log("HI");
  const spotifyApi = new SpotifyWebApi({
    redirectUri: "http://localhost:3000",
    clientId: "e4ef76d98ff348cfbe2fe41f11d87279",
    clientSecret: "eabebe089db44942bc912940c398c29a",
    refreshToken,
  });

  spotifyApi
    .refreshAccessToken()
    .then((data) => {
      // console.log(data.body);
      res.json({
        accessToken: data.body.accessToken,
        expiresIn: data.body.expiresIn,
      });
    })
    .catch((err) => {
      // console.log(err);
      res.sendStatus(400);
    });
});

app.post("/login", (req, res) => {
  // res.header({
  //   "Access-Control-Allow-Origin": "*",
  // });

  const code = req.body.code;
  const spotifyApi = new SpotifyWebApi({
    redirectUri: "http://localhost:3000",
    clientId: "e4ef76d98ff348cfbe2fe41f11d87279",
    clientSecret: "eabebe089db44942bc912940c398c29a",
  });

  spotifyApi
    .authorizationCodeGrant(code)
    .then((data) => {
      res.json({
        accessToken: data.body.access_token,
        refreshToken: data.body.refresh_token,
        expiresIn: data.body.expires_in,
      });
    })
    .catch((err) => {
      // console.log(err);
      res.sendStatus(400);
    });
});

app.listen(3001);
