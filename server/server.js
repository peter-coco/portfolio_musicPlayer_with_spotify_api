const express = require("express");
const spotifyApi = require("spotify-web-api-node");
const app = express();

app.post("/login", (req, res) => {
  const code = req.body.code;
  const spotifyApi = new SpotifyWebApi({
    redirectUri: "http://localhost:3000",
    clientId: "e4ef76d98ff348cfbe2fe41f11d87279",
    clientSecret: "eabebe089db44942bc912940c398c29a",
  });

  spotifyApi.authorizationCodeGrant(code).then((data) => {
    res.json({
      accessToken: data.body.access_token,
      refreshToken: data.body.refresh_token,
      expriesIn: data.body.expries_in,
    });
  });
});
