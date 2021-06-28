import React from "react";
import { Container } from "react-bootstrap";
import { useSelector } from "react-redux";
import { GlobalState } from "../redux/reducer";

const AUTH_URL =
  "https://accounts.spotify.com/authorize?client_id=e4ef76d98ff348cfbe2fe41f11d87279&response_type=code&redirect_uri=http://localhost:3000&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state%20playlist-modify-public%20playlist-modify-private";

export default function Login() {
  // const AUTH_URL = useSelector<GlobalState, string | undefined>(
  //   (state) => state.authUrl
  // );
  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{
        minHeight: "100vh",
        minWidth: "100vw",
        background: `linear-gradient(
                      90deg,
                      #38adae -1.77%,
                      #cd295a 103.5%,
                      rgba(254, 144, 175, 0) 103.51%
                    )`,
      }}
    >
      <a
        className="btn btn-success btn-lg"
        href={AUTH_URL}
        style={{ backgroundColor: "#1b1b1b", border: "0px" }}
      >
        Login With Spotify
      </a>
    </Container>
  );
}
