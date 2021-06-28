require("dotenv").config();
const express = require("express");
const SpotifyWebApi = require("spotify-web-api-node");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(bodyParser.json());

const http = require("http");

const option = http.createServer(app).listen(80, () => {
  // console.log(`Server is running at port ${80}`);
  console.log("server is running on musicPlayer2 with SpotifyWebApi");
});

app.get("/", (req, res) => {
  res.header({
    "Access-Control-Allow-Origin": "*",
  });
  res.json(data);
});

let data = {
  res: [
    {
      title: "yellow",
      artist: "coldplay",
      album: "Parachutes",
      albumCover: "https://musicdata.link/images/coldplay_Parachutes.png",
      time: 135,
      likes: 128,
      views: 5,
      library: "",
      genre: "ROCK",
      isLike: false,
    },
  ],
};

app.post("/refresh", (req, res) => {
  const refreshToken = req.body.refreshToken;
  // console.log("HI");
  const spotifyApi = new SpotifyWebApi({
    redirectUri: process.env.REDIRECT_URI,
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
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
  // console.log(process.env.CLIENT_ID);

  const code = req.body.code;
  const spotifyApi = new SpotifyWebApi({
    redirectUri: process.env.REDIRECT_URI,
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
  });

  spotifyApi
    .authorizationCodeGrant(code)
    .then((data) => {
      console.log(data);
      res.json({
        accessToken: data.body.access_token,
        refreshToken: data.body.refresh_token,
        expiresIn: data.body.expires_in,
      });
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(400);
    });
});

// app.listen(3001);
