(this.webpackJsonpmusicplayer2=this.webpackJsonpmusicplayer2||[]).push([[0],{102:function(t,e){},119:function(t,e,n){"use strict";n.r(e);var a=n(0),i=n.n(a),c=n(11),r=n.n(c),o=(n(57),n(5)),s=(n(64),n(121)),l=n(1);function d(){return Object(l.jsx)(s.a,{className:"d-flex justify-content-center align-items-center",style:{minHeight:"100vh",minWidth:"100vw",background:"linear-gradient(\n                      90deg,\n                      #38adae -1.77%,\n                      #cd295a 103.5%,\n                      rgba(254, 144, 175, 0) 103.51%\n                    )"},children:Object(l.jsx)("a",{className:"btn btn-success btn-lg",href:"https://accounts.spotify.com/authorize?client_id=e4ef76d98ff348cfbe2fe41f11d87279&response_type=code&redirect_uri=https://coco-peter.github.io/portfolio_musicPlayer_with_spotify_api/&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state%20playlist-modify-public%20playlist-modify-private",style:{backgroundColor:"#1b1b1b",border:"0px"},children:"Login With Spotify"})})}var p,O=n(3);!function(t){t[t.CHANGE_MAIN_CONTENTS_MODE_TO_MAIN=0]="CHANGE_MAIN_CONTENTS_MODE_TO_MAIN",t[t.CHANGE_MAIN_CONTENTS_MODE_TO_GENRE=1]="CHANGE_MAIN_CONTENTS_MODE_TO_GENRE",t[t.CHANGE_MAIN_CONTENTS_MODE_TO_MYLIST=2]="CHANGE_MAIN_CONTENTS_MODE_TO_MYLIST",t[t.CHANGE_MAIN_CONTENTS_MODE_TO_SEARCH=3]="CHANGE_MAIN_CONTENTS_MODE_TO_SEARCH",t[t.SET_API_ENTRACE_CODE=4]="SET_API_ENTRACE_CODE",t[t.SET_TRACK_LIST=5]="SET_TRACK_LIST",t[t.SET_SEARCH_RESULT=6]="SET_SEARCH_RESULT",t[t.SET_SEARCH_ENTER_ACTIVATED=7]="SET_SEARCH_ENTER_ACTIVATED",t[t.SET_ACCEES_TOKEN_NOW=8]="SET_ACCEES_TOKEN_NOW",t[t.SET_MYLIST_ID=9]="SET_MYLIST_ID",t[t.SET_PLAYING_NOW_LIST_ID=10]="SET_PLAYING_NOW_LIST_ID",t[t.SET_ADD_MUSIC_TO_MYLIST=11]="SET_ADD_MUSIC_TO_MYLIST",t[t.SET_SUB_MUSIC_FROM_MYLIST=12]="SET_SUB_MUSIC_FROM_MYLIST",t[t.CHOICE_MUSIC_GENRE=13]="CHOICE_MUSIC_GENRE",t[t.CHOICE_PLAY_MUSIC_NOW=14]="CHOICE_PLAY_MUSIC_NOW"}(p||(p={}));var u,f,h,_,b,x,m,j,T,E,C,y,S,N,I,g=p,M=n(4),w=n(37),A=M.a.div(u||(u=Object(O.a)(["\n  width: 100%;\n  height: 10vh;\n  min-height: 60px;\n  /* position: absolute; */\n  /* top: 0; */\n  position: relative;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]))),v=M.a.div(f||(f=Object(O.a)(["\n  display: flex;\n  justify-content: space-between;\n  width: 560px;\n  height: 30px;\n  @media (max-width: 750px) {\n    width: 200px;\n  }\n"]))),k=M.a.i(h||(h=Object(O.a)(["\n  font-size: 25px;\n  line-height: 30px;\n  color: #fff;\n  cursor: pointer;\n  @media (max-width: 750px) {\n    font-size: 20px;\n  }\n  @media (max-width: 350px) {\n    font-size: 15px;\n  }\n\n  &:hover {\n    /* color: red; */\n    transform: rotate(-30deg);\n  }\n"]))),L=M.a.div(_||(_=Object(O.a)(["\n  display: flex;\n  justify-content: center;\n  width: 300px;\n  height: 30px;\n\n  @media (max-width: 750px) {\n    width: 200px;\n  }\n"]))),R=M.a.input(b||(b=Object(O.a)(["\n  width: 100%;\n  height: 100%;\n"]))),D=function(){var t=Object(o.b)();return Object(l.jsxs)(v,{children:[Object(l.jsx)(k,{className:"fas fa-home",onClick:function(){t({type:g.CHANGE_MAIN_CONTENTS_MODE_TO_MAIN})}}),Object(l.jsx)(k,{className:"fas fa-chart-bar",onClick:function(){t({type:g.CHANGE_MAIN_CONTENTS_MODE_TO_GENRE})}}),Object(l.jsx)(k,{className:"fas fa-list-alt",onClick:function(){t({type:g.CHANGE_MAIN_CONTENTS_MODE_TO_MYLIST})}}),Object(l.jsx)(k,{className:"fas fa-search",onClick:function(){t({type:g.CHANGE_MAIN_CONTENTS_MODE_TO_SEARCH,payload:{searchBarOnOff:!0}})}})]})},H=function(){var t=Object(o.b)();return Object(l.jsx)(L,{children:Object(l.jsx)(R,{onChange:function(e){t({type:g.SET_SEARCH_RESULT,payload:{searchResult:e.target.value}})},onKeyDown:function(e){e.key,t({type:g.SET_SEARCH_ENTER_ACTIVATED})}})})},G=function(){var t=Object(o.c)((function(t){return t.searchBarOnOff})),e=Object(o.b)();return t?Object(l.jsx)(A,{children:Object(l.jsx)(w.a,{onOutsideClick:function(){e({type:g.CHANGE_MAIN_CONTENTS_MODE_TO_SEARCH,payload:{searchBarOnOff:!1}})},children:Object(l.jsx)(H,{})})}):Object(l.jsx)(A,{children:Object(l.jsx)(D,{})})},B=n(7),U=n(51),P=M.a.div(x||(x=Object(O.a)(["\n  width: 100%;\n  height: 10vh;\n  min-height: 60px;\n"]))),Y=function(){var t=Object(o.c)((function(t){return t.trackNow})),e=Object(o.c)((function(t){return[t.accessTokenNow]})),n=Object(B.a)(e,1)[0],i=Object(a.useState)(!1),c=Object(B.a)(i,2),r=c[0],s=c[1];return Object(a.useEffect)((function(){return s(!0)}),[t.url]),n?Object(l.jsx)(P,{children:Object(l.jsx)(U.a,{token:n,showSaveIcon:!0,callback:function(t){t.isPlaying||s(!1)},play:r,uris:t.url?[t.url]:[]})}):null},z=M.a.div(m||(m=Object(O.a)(["\n  width: 100%;\n  height: 80%;\n  grid-template-columns: 1fr 1fr 1fr;\n  overflow-y: scroll;\n\n  @media (max-width: 750px) {\n    grid-template-columns: 1fr 1fr;\n  }\n"]))),W=M.a.div(j||(j=Object(O.a)(["\n  width: 200px;\n  height: 50px;\n  background-color: #1b1b1b;\n  color: #fff;\n  /* margin-right: 50px; */\n  text-align: center;\n  line-height: 50px;\n  font-size: 16px;\n\n  cursor: pointer;\n  @media (max-width: 750px) {\n    width: 130px;\n    height: 40px;\n    line-height: 40px;\n    font-size: 15px;\n\n    /* margin-right: 30px; */\n  }\n\n  @media (max-width: 350px) {\n    width: 100px;\n    height: 30px;\n    line-height: 30px;\n    font-size: 13px;\n  }\n"]))),F=function(t){var e=t.musicGenre,n=Object(o.b)();return Object(l.jsx)(W,{onClick:function(){n({type:g.CHOICE_MUSIC_GENRE,payload:{genre:e,nameOfTitle:e}})},children:e})},K=function(){var t=Object(o.c)((function(t){return t.mainContentsModeIdx}));return Object(l.jsx)(z,{style:{display:1===t?"grid":"none"},children:["k-pop","pop","j-pop","rock","classical","jazz","dance","edm","acoustic"].map((function(t){return Object(l.jsx)(F,{musicGenre:t},t)}))})},V=n(19),J=n.n(V);var q,Q,X,Z,$,tt,et,nt=M.a.div(T||(T=Object(O.a)(["\n  width: 100%;\n  height: 80px;\n  display: flex;\n  position: relative;\n  align-items: center;\n  margin-right: 30px;\n  @media (max-width: 750px) {\n    width: 100%;\n    height: 40px;\n    margin-bottom: 20px;\n    margin-right: 0%;\n  }\n  @media (max-width: 350px) {\n    height: 35px;\n    margin-bottom: 15px;\n  }\n"]))),at=M.a.img(E||(E=Object(O.a)(["\n  width: 50px;\n  height: 50px;\n  margin-right: 20px;\n  @media (max-width: 750px) {\n    width: 40px;\n    height: 40px;\n    margin-right: 20px;\n  }\n  @media (max-width: 350px) {\n    width: 35px;\n    height: 35px;\n    margin-right: 15px;\n  }\n"]))),it=M.a.div(C||(C=Object(O.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n"]))),ct=M.a.div(y||(y=Object(O.a)(["\n  color: #fff;\n  font-size: 18px;\n  /* width: 300px; */\n\n  width: 200px;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n\n  @media (max-width: 750px) {\n    font-size: 15px;\n    width: 220px;\n  }\n\n  @media (max-width: 350px) {\n    font-size: 13px;\n    width: 150px;\n  }\n"]))),rt=M.a.div(S||(S=Object(O.a)(["\n  color: #cacaca;\n  font-size: 18px;\n\n  width: 200px;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n  /* width: 100%; */\n  @media (max-width: 750px) {\n    font-size: 15px;\n    width: 220px;\n  }\n\n  @media (max-width: 350px) {\n    font-size: 13px;\n    width: 150px;\n  }\n"]))),ot=M.a.div(N||(N=Object(O.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 30px;\n  position: absolute;\n  background-color: #1b1b1b;\n  width: 80%;\n  height: 100%;\n  opacity: 0;\n  &:hover {\n    opacity: 0.5;\n  }\n"]))),st=M.a.i(I||(I=Object(O.a)(["\n  font-size: 20px;\n  color: #fff;\n  line-height: 30px;\n  cursor: pointer;\n\n  &:hover {\n    scale: (1.2);\n    color: #f2c94c;\n  }\n  @media (max-width: 750px) {\n    font-size: 15px;\n    margin-left: 20px;\n    /* line-height: 30px; */\n  }\n\n  @media (max-width: 350px) {\n    font-size: 10px;\n  }\n"]))),lt=function(t){var e=t.track,n=Object(o.b)(),a=Object(o.c)((function(t){return[t.spotifyApi,t.myListId,t.playingListId]})),i=Object(B.a)(a,3),c=i[0],r=i[1];i[2];return Object(l.jsxs)(nt,{children:[Object(l.jsx)(at,{src:e.albumImg}),Object(l.jsxs)(it,{children:[Object(l.jsx)(ct,{children:e.title}),Object(l.jsxs)(rt,{children:[e.artist," / ",e.album]})]}),Object(l.jsxs)(ot,{children:[Object(l.jsx)(st,{className:"fas fa-play",onClick:function(){n({type:g.CHOICE_PLAY_MUSIC_NOW,payload:{trackNow:e}})}}),Object(l.jsx)(st,{className:"fas fa-plus",onClick:function(){r&&c.addTracksToPlaylist(r,[e.url]).then((function(t){n({type:g.SET_ADD_MUSIC_TO_MYLIST})}))}}),Object(l.jsx)(st,{className:"fas fa-minus",onClick:function(){r&&c.removeTracksFromPlaylist(r,[{uri:e.url}]).then((function(t){n({type:g.SET_SUB_MUSIC_FROM_MYLIST})}))}})]})]})},dt=M.a.div(q||(q=Object(O.a)(["\n  width: 100%;\n  height: 80%;\n  grid-template-columns: 1fr 1fr;\n  overflow-y: scroll;\n  /* overflow-x: hidden; */\n\n  @media (max-width: 750px) {\n    grid-template-columns: 1fr;\n  }\n"]))),pt=function(){var t=Object(o.b)(),e=Object(o.c)((function(t){return[t.entraceCode,t.selectedMusicGenre,t.searchResult,t.searchBarEnterOnOff,t.trackList,t.mainContentsModeIdx,t.spotifyApi,t.myListId,t.addMusicToMylist,t.subMusicFromMylist]})),n=Object(B.a)(e,10),i=n[0],c=n[1],r=n[2],s=n[3],d=n[4],p=n[5],O=n[6],u=n[7],f=n[8],h=n[9],_=function(t){var e=Object(a.useState)(""),n=Object(B.a)(e,2),i=n[0],c=n[1],r=Object(a.useState)(""),s=Object(B.a)(r,2),l=s[0],d=s[1],p=Object(a.useState)(0),O=Object(B.a)(p,2),u=O[0],f=O[1],h=Object(o.b)();return Object(a.useEffect)((function(){J.a.post("https://musicdata.link/login",{code:t}).then((function(t){c(t.data.accessToken),d(t.data.refreshToken),f(t.data.expiresIn),window.history.pushState({},"","/")})).catch((function(){h({type:g.SET_API_ENTRACE_CODE,payload:{apiEntraceCode:""}}),window.location.href="/"}))}),[t]),Object(a.useEffect)((function(){if(l&&u){var t=setInterval((function(){J.a.post("https://musicdata.link/refresh",{refreshToken:l}).then((function(t){c(t.data.accessToken),f(t.data.expiresIn),window.history.pushState({},"","/")})).catch((function(){window.location.href="/"}))}),1e3*(u-60));return function(){return clearInterval(t)}}}),[l,u]),i}(i);return Object(a.useEffect)((function(){_&&(O.setAccessToken(_),t({type:g.SET_ACCEES_TOKEN_NOW,payload:{accessTokenNow:_}}))}),[_]),Object(a.useEffect)((function(){r&&3===p&&O.searchTracks(r).then((function(e){var n,a=null===(n=e.body.tracks)||void 0===n?void 0:n.items.map((function(t){return{title:t.name,artist:t.artists[0].name,album:t.album.name,albumImg:t.album.images[0].url,popularity:t.popularity,url:t.uri}}));t({type:g.SET_TRACK_LIST,payload:{trackList:a||[]}})}))}),[s]),Object(a.useEffect)((function(){u&&2===p&&O.getPlaylist(u).then((function(e){var n=e.body.tracks.items.map((function(t){return{title:t.track.name,artist:t.track.artists[0].name,album:t.track.album.name,albumImg:t.track.album.images[0].url,popularity:t.track.popularity,url:t.track.uri}}));t({type:g.SET_TRACK_LIST,payload:{trackList:n||[]}})}))}),[u,p,f,h]),Object(a.useEffect)((function(){_&&(O.createPlaylist("My playlist",{description:"My favorite music list"}).then((function(e){t({type:g.SET_MYLIST_ID,payload:{myListId:e.body.id}})})),O.createPlaylist("playing now list",{description:"My playlist what i listened once"}).then((function(e){t({type:g.SET_PLAYING_NOW_LIST_ID,payload:e.body.id})})))}),[_]),Object(a.useEffect)((function(){_&&0===p&&O.getRecommendations({seed_genres:["".concat(c)]}).then((function(e){var n=e.body.tracks.map((function(t){return{title:t.name,artist:t.artists[0].name,album:t.album.name,albumImg:t.album.images[0].url,popularity:t.popularity,url:t.uri}}));t({type:g.SET_TRACK_LIST,payload:{trackList:n||[]}})}))}),[c,_,p]),Object(l.jsx)(dt,{style:{display:1!==p?"grid":"none"},children:d.sort((function(t,e){return e.popularity-t.popularity})).map((function(t){return Object(l.jsx)(lt,{track:t},t.title+t.artist+t.album+t.url)}))})},Ot=M.a.div(Q||(Q=Object(O.a)(["\n  display: flex;\n  flex-direction: column;\n  width: 300px;\n  height: 60px;\n  margin-bottom: 10px;\n  @media (max-width: 750px) {\n    width: 280px;\n    height: 40px;\n    margin-bottom: 35px;\n  }\n\n  @media (max-width: 350px) {\n    width: 250px;\n\n    margin-bottom: 20px;\n  }\n"]))),ut=M.a.div(X||(X=Object(O.a)(["\n  color: #fff;\n  font-size: 25px;\n  @media (max-width: 750px) {\n    font-size: 20px;\n  }\n\n  @media (max-width: 350px) {\n    font-size: 18px;\n  }\n"]))),ft=M.a.div(Z||(Z=Object(O.a)(["\n  width: 100%;\n  height: 4px;\n\n  @media (max-width: 750px) {\n    height: 3px;\n    width: 90%;\n  }\n\n  @media (max-width: 350px) {\n    width: 80%;\n    height: 2px;\n  }\n"]))),ht=function(t){var e=t.title,n=t.barColor;return Object(l.jsxs)(Ot,{children:[Object(l.jsx)(ut,{children:e}),Object(l.jsx)(ft,{style:{backgroundColor:"".concat(n)}})]})},_t=M.a.div($||($=Object(O.a)(["\n  width: 100%;\n  height: 80vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 0 20px;\n  box-sizing: border-box;\n"]))),bt=M.a.div(tt||(tt=Object(O.a)(["\n  display: flex;\n  flex-direction: column;\n  width: 90%;\n  height: 80%;\n"]))),xt=function(){var t=Object(o.c)((function(t){return[t.nameOfTitle,t.colorOfTitleBar]})),e=Object(B.a)(t,2),n=e[0],a=e[1];return Object(l.jsx)(_t,{children:Object(l.jsxs)(bt,{children:[Object(l.jsx)(ht,{title:n,barColor:a}),Object(l.jsx)(K,{}),Object(l.jsx)(pt,{})]})})},mt=M.a.div(et||(et=Object(O.a)(["\n  width: 100vw;\n  height: 100vh;\n  /* position: fixed; // \uc74c... \uc774\uc804\uc5d0 \uc5b4\ub5bb\uac8c \ud588\uc9c0?? */\n  background: linear-gradient(\n    90deg,\n    #38adae -1.77%,\n    #cd295a 103.5%,\n    rgba(254, 144, 175, 0) 103.51%\n  );\n"])));function jt(t){var e=t.code,n=Object(o.b)();return Object(a.useEffect)((function(){n({type:g.SET_API_ENTRACE_CODE,payload:{apiEntraceCode:e}})}),[e]),Object(l.jsxs)(mt,{children:[Object(l.jsx)(G,{}),Object(l.jsx)(xt,{}),Object(l.jsx)(Y,{})]})}var Tt,Et=n(50),Ct=n(2),yt=n(49),St=n.n(yt),Nt={mainContentsModeIdx:0,musicList:[],entraceCode:null!==(Tt=new URLSearchParams(window.location.search).get("code"))&&void 0!==Tt?Tt:"",accessTokenNow:"",selectedMusicGenre:"pop",nameOfTitle:"Recommand",colorOfTitleBar:"#72B1C5",searchResult:"",searchBarOnOff:!1,searchBarEnterOnOff:!1,trackList:[],trackNow:{title:"",artist:"",album:"",albumImg:"",popularity:0,url:""},spotifyApi:new St.a({clientId:"e4ef76d98ff348cfbe2fe41f11d87279"}),myListId:"",playingListId:"",addMusicToMylist:!1,subMusicFromMylist:!1};var It=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Nt,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case g.CHANGE_MAIN_CONTENTS_MODE_TO_MAIN:return Object(Ct.a)(Object(Ct.a)({},t),{},{mainContentsModeIdx:0,nameOfTitle:"Recommand",colorOfTitleBar:"#72B1C5",selectedMusicGenre:"pop"});case g.CHANGE_MAIN_CONTENTS_MODE_TO_GENRE:return Object(Ct.a)(Object(Ct.a)({},t),{},{mainContentsModeIdx:1,nameOfTitle:"Genre",colorOfTitleBar:"#7972C5"});case g.CHANGE_MAIN_CONTENTS_MODE_TO_MYLIST:return Object(Ct.a)(Object(Ct.a)({},t),{},{mainContentsModeIdx:2,nameOfTitle:"MyList",colorOfTitleBar:"#D96BC1"});case g.CHANGE_MAIN_CONTENTS_MODE_TO_SEARCH:return Object(Ct.a)(Object(Ct.a)({},t),{},{mainContentsModeIdx:t.mainContentsModeIdx,searchBarOnOff:e.payload.searchBarOnOff});case g.SET_API_ENTRACE_CODE:return Object(Ct.a)(Object(Ct.a)({},t),{},{entraceCode:e.payload.apiEntraceCode});case g.SET_SEARCH_RESULT:return Object(Ct.a)(Object(Ct.a)({},t),{},{searchResult:e.payload.searchResult});case g.SET_SEARCH_ENTER_ACTIVATED:return Object(Ct.a)(Object(Ct.a)({},t),{},{mainContentsModeIdx:3,searchBarEnterOnOff:!t.searchBarEnterOnOff,nameOfTitle:"search result : ".concat(t.searchResult),colorOfTitleBar:"#D96BC1",searchBarOnOff:!1});case g.SET_TRACK_LIST:return Object(Ct.a)(Object(Ct.a)({},t),{},{trackList:e.payload.trackList});case g.SET_ACCEES_TOKEN_NOW:return Object(Ct.a)(Object(Ct.a)({},t),{},{accessTokenNow:e.payload.accessTokenNow});case g.SET_MYLIST_ID:return Object(Ct.a)(Object(Ct.a)({},t),{},{myListId:e.payload.myListId});case g.SET_PLAYING_NOW_LIST_ID:return Object(Ct.a)(Object(Ct.a)({},t),{},{playingListId:e.payload.playingListId});case g.SET_ADD_MUSIC_TO_MYLIST:return Object(Ct.a)(Object(Ct.a)({},t),{},{addMusicToMylist:!t.addMusicToMylist});case g.SET_SUB_MUSIC_FROM_MYLIST:return Object(Ct.a)(Object(Ct.a)({},t),{},{subMusicFromMylist:!t.subMusicFromMylist});case g.CHOICE_MUSIC_GENRE:return Object(Ct.a)(Object(Ct.a)({},t),{},{selectedMusicGenre:e.payload.genre,mainContentsModeIdx:0,nameOfTitle:e.payload.nameOfTitle,colorOfTitleBar:e.payload.colorOfTitleBar});case g.CHOICE_PLAY_MUSIC_NOW:return Object(Ct.a)(Object(Ct.a)({},t),{},{trackNow:e.payload.trackNow})}return t},gt=Object(Et.a)(It),Mt=new URLSearchParams(window.location.search).get("code"),wt=function(){return Mt?Object(l.jsx)(jt,{code:Mt}):Object(l.jsx)(d,{})};var At=function(){return Object(l.jsx)(o.a,{store:gt,children:Object(l.jsx)(wt,{})})},vt=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,122)).then((function(e){var n=e.getCLS,a=e.getFID,i=e.getFCP,c=e.getLCP,r=e.getTTFB;n(t),a(t),i(t),c(t),r(t)}))};r.a.render(Object(l.jsx)(i.a.StrictMode,{children:Object(l.jsx)(At,{})}),document.getElementById("root")),vt()},57:function(t,e,n){}},[[119,1,2]]]);
//# sourceMappingURL=main.5e166df4.chunk.js.map