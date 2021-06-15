# portfolio_musicPlayer2

## introduce
  - API를 이용하여 음악db를 로드하는 음악 플레이어
  - tools : html, css, typescript, react
  - redux, styled component 적용

## component
  [header]
    - home ( click event ) : main component에 좋아요를 기준으로 내림차순 정렬(API의 db정보에 따라 달라질 수 있음)
    - rank ( click event ) : main component에 좋아요를 기준으로 장르별 내림차순 정렬(API의 db정보에 따라 달라질 수 있음)
    - library (click event ) : main component에 library에 등록된 음악들을 좋아요를 기준으로 내림차순 정렬(API의 db정보에 따라 달라질 수 있음)
    - search icon( click event ) : click시 search bar가 활성화 되며 알파벳 하나라도 일치한 음악들이 main component에 좋아요를 기준으로 내림차순 정렬
  [main]
    [home]
    [genre]
    [my-play-list]
      - 내가 library에 등록한 음악들이 담긴 list
    [play-list]
      - 현재 내가 재생을 누른 음악들이 담긴 list
  [footer]
    - 현재 내가 재생중인 음악 표시
    - 위로 화살표를 누르면 [main]-[play-list] 활성화 됨.
    
  
  
