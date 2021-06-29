import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { GlobalState, Music } from "../../redux/reducer";
import SpotifyWebApi from "spotify-web-api-node";
import Actions from "../../redux/actions";

const MainMusicList = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  position: relative;
  align-items: center;
  margin-right: 30px;
  @media (max-width: 750px) {
    width: 100%;
    height: 40px;
    margin-bottom: 20px;
    margin-right: 0%;
  }
  @media (max-width: 350px) {
    height: 35px;
    margin-bottom: 15px;
  }
`;
const MainMusicListImg = styled.img`
  width: 50px;
  height: 50px;
  margin-right: 20px;
  @media (max-width: 750px) {
    width: 40px;
    height: 40px;
    margin-right: 20px;
  }
  @media (max-width: 350px) {
    width: 35px;
    height: 35px;
    margin-right: 15px;
  }
`;
const MainMusicListSubscription = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const MainMusicListTitle = styled.div`
  color: #fff;
  font-size: 18px;
  /* width: 300px; */

  width: 200px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;

  @media (max-width: 750px) {
    font-size: 15px;
    width: 220px;
  }

  @media (max-width: 350px) {
    font-size: 13px;
    width: 150px;
  }
`;
const MainMusicListArtistNAlbum = styled.div`
  color: #cacaca;
  font-size: 18px;

  width: 200px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  /* width: 100%; */
  @media (max-width: 750px) {
    font-size: 15px;
    width: 220px;
  }

  @media (max-width: 350px) {
    font-size: 13px;
    width: 150px;
  }
`;

const MainMusicSubFunctions = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
  position: absolute;
  background-color: #1b1b1b;
  width: 80%;
  height: 100%;
  opacity: 0;
  &:hover {
    opacity: 0.5;
  }
`;

const MainMusicSubFunc = styled.i`
  font-size: 20px;
  color: #fff;
  line-height: 30px;
  cursor: pointer;
  transition: all 300ms ease;

  &:hover {
    transform: scale(1.2);
    color: #f2c94c;
  }
  @media (max-width: 750px) {
    font-size: 15px;
    margin-left: 20px;
    /* line-height: 30px; */
  }

  @media (max-width: 350px) {
    font-size: 10px;
  }
`;

export const MainMusicLists = ({ track }: { track: Music }) => {
  const dispatch = useDispatch();
  const [spotifyApi, myListId, playingListId] = useSelector<
    GlobalState,
    [SpotifyWebApi, string, string]
  >((state) => [state.spotifyApi, state.myListId, state.playingListId]);

  return (
    <MainMusicList>
      <MainMusicListImg src={track.albumImg} />
      <MainMusicListSubscription>
        <MainMusicListTitle>{track.title}</MainMusicListTitle>
        <MainMusicListArtistNAlbum>
          {track.artist} / {track.album}
        </MainMusicListArtistNAlbum>
      </MainMusicListSubscription>
      <MainMusicSubFunctions>
        <MainMusicSubFunc
          className="fas fa-play"
          onClick={() => {
            dispatch({
              type: Actions.CHOICE_PLAY_MUSIC_NOW,
              payload: { trackNow: track },
            });
          }}
        />
        {/* <MainMusicSubFunc className="fas fa-thumbs-up" /> */}
        <MainMusicSubFunc
          className="fas fa-plus"
          onClick={() => {
            if (!myListId) return;
            spotifyApi
              .addTracksToPlaylist(myListId, [track.url])
              .then((res) => {
                dispatch({
                  type: Actions.SET_ADD_MUSIC_TO_MYLIST,
                });
              });
          }}
        />
        <MainMusicSubFunc
          className="fas fa-minus"
          onClick={() => {
            if (!myListId) return;
            spotifyApi
              .removeTracksFromPlaylist(myListId, [{ uri: track.url }])
              .then((res) => {
                dispatch({ type: Actions.SET_SUB_MUSIC_FROM_MYLIST });
              });
          }}
        />
      </MainMusicSubFunctions>
    </MainMusicList>
  );
};
