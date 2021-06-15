


import {MainGenre} from "./main-genre"
import {MainMusicList} from "./main-musiclist"
import {MainPlayingList} from "./main-playingList"

function Maintitle({title}:{title:string}){
    return (
        <div id = "main-title">
            <div className = "main-title-text">{title}</div>
            <div className = "main-title-underbar"></div>
        </div>
    )
}

export function Main(){

    return (
        <div id="main">
            <Maintitle title="Genre" />
            <MainGenre />
            <MainMusicList />
            <MainPlayingList />
        </div>
    )

}