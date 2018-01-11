module.exports = {
  STORE_KEY: 'a56z0fzrNpl^2',
  BASE_URL: 'https://hopamnhacthanh.net/',
  COLOR: {
    ORANGE: '#C50',
    DARKBLUE: '#0F3274',
    LIGHTBLUE: '#6EA8DA',
    DARKGRAY: '#999',
  },
  ALBUM_URL: {
    ROOT: 'api/Album',
    GET_LIST: '/getList&apiKey=NGUYENIT',
    GET_SINGLE: '/getSingle&apiKey=NGUYENIT&slug=',
    GET_SEARCH_WITH_SLUG:'/getSearch&apiKey=NGUYENIT&searchString=',
    SLUG: '&slug=',
  },
  SONG_URL: {
    ROOT: 'api/Song',
    GET_LIST_NEWS: '/getListNews&apiKey=NGUYENIT',
    GET_LIST_POPULARS: '/getListPopulars&apiKey=NGUYENIT',
    GET_SINGLE_WITH_SLUG: '/getSingle&apiKey=NGUYENIT&slug=',
    GET_SEARCH_WITH_SEARCH_STRING:'/getSearch&apiKey=NGUYENIT&searchString=',
    SLUGVERSION: '&slugVersion=',
  },
  SHEET_URL: {
    ROOT: 'api/Sheet',
    GET_LIST_WITH_SLUG: '/getList&apiKey=NGUYENIT&slug=',
  },
  SEARCH_URL: {
    ROOT: 'api/Search',
    GET_SEARCH_WITH_SEARCH_STRING: '/getSearch&apiKey=NGUYENIT&searchString=',
  },
  SEARCH_ADVANCED_URL: {
    ROOT: 'api/SearchAdvanced',
    GET_SEARCH: '/getSearch&apiKey=NGUYENIT&searchString=',
    GET_LIST_WITH_URL: '/getSingle&apiKey=NGUYENIT&url=',
  },
  HOME_URL: {
    ROOT: 'api/Home',
    GET_LIST: '/getList&apiKey=NGUYENIT',
    GET_SINGLE_WITH_SLUG_VERSION: '/getSingle&apiKey=NGUYENIT&slug=',
    SLUG_VERSION: '&slugVersion='
  },
  CATEGORY_URL: {
    ROOT: 'api/Category',
    GET_LIST: '/getList&apiKey=NGUYENIT',
    GET_LIST_WITH_SLUG: '/getSingle&apiKey=NGUYENIT&slug=',
  },
  AUTHOR_SONG_URL: {
    ROOT: 'api/AuthorSong',
    GET_LIST: '/getList&apiKey=NGUYENIT',
    GET_LIST_WITH_SLUG: '/getSingle&apiKey=NGUYENIT&slug=',
  },
  AUDIO_URL: {
    ROOT: 'api/Audio',
    GET_LIST_WITH_SLUG: '/getSingle&apiKey=NGUYENIT&slug=',
  },
  WEB_VIEW_URL:{
    SIMPLE_SONG_WITH_SLUG_VERSION: 'bai-hat/fullscreen/',
    SHEET: 'sheet/mobile/',
    VIDEO:'video/mobile/',
    AUDIO:'audio/mobile/',
    SEARCHADVENCED:'searchAdvenced/mobile/q='
  }
};