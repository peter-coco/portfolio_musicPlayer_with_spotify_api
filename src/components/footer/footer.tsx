import styled from "styled-components";
import SpotifyPlayer from "react-spotify-web-playback";
import { useSelector } from "react-redux";
import { GlobalState, Music } from "../../redux/reducer";
import { useEffect, useState } from "react";

const FooterWrap = styled.div`
  width: 100%;
  height: 10vh;
  min-height: 60px;
`;

export const Footer = () => {
  const trackNow = useSelector<GlobalState, Music>((state) => state.trackNow);
  const [accessTokenNow] = useSelector<GlobalState, [string]>((state) => [
    state.accessTokenNow,
  ]);
  const [play, setPlay] = useState(false);
  useEffect(() => {
    setPlay(true);
    console.log(trackNow.url);
  }, [trackNow.url]);

  if (!accessTokenNow) return null;
  return (
    <FooterWrap>
      <SpotifyPlayer
        // style={{ width: "100%", height: "10vh" }}
        token={accessTokenNow}
        showSaveIcon
        callback={(state) => {
          if (!state.isPlaying) setPlay(false);
        }}
        play={play}
        uris={trackNow.url ? [trackNow.url] : []}
      />
    </FooterWrap>
  );
};
