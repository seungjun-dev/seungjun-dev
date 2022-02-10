module.exports = {
  title: `seungjun.me`,
  description: `승순의 개발블로그`,
  language: `ko`, // `ko`, `en` => currently support versions for Korean and English
  siteUrl: `https://seungjun.me`,
  ogImage: `/thumbnail.png`, // Path to your in the 'static' folder
  comments: {
    utterances: {
      repo: ``, // `zoomkoding/zoomkoding-gatsby-blog`,
    },
  },
  ga: '0', // Google Analytics Tracking ID
  author: {
    name: `이승준`,
    bio: {
      role: `개발자`,
      description: ['사람을 좋아하는', '공유에 가치를 두는', '배움에 가치를 두는', '프론트엔드'],
      thumbnail: 'profile.png', // Path to the image in the 'asset' folder
    },
    social: {
      github: `https://github.com/seungjun-dev`, 
      linkedIn: `https://www.linkedin.com/in/seungjun-lee`,
      instagram: `https://www.instagram.com/seungjun91`,
      email: `seungjun1991@gmail.com`, 
    },
  },

  // metadata for About Page
  about: {
    timestamps: [
      // =====       [Timestamp Sample and Structure]      =====
      // ===== 🚫 Don't erase this sample (여기 지우지 마세요!) =====
      {
        date: '',
        activity: '',
        links: {
          github: '',
          post: '',
          googlePlay: '',
          appStore: '',
          demo: '',
        },
      },
      // ========================================================
      // ========================================================
      {
        date: '2019.09 ~',
        activity: '하나금융티아이 은행채널셀',
      },
      {
        date: '2017.10 ~ 2019.08',
        activity: '닐슨코리아 IT운영'
      },
      {
        date: '2018.12',
        activity: '소비자 감성 분석 기반의 음악 추천 알고리즘 개발'
      },
      {
        date: '2015.07 ~ 2015.08',
        activity: '월드프렌즈 IT봉사단 프로젝트 팀'
      },
    ],

    projects: [
      // =====        [Project Sample and Structure]        =====
      // ===== 🚫 Don't erase this sample (여기 지우지 마세요!)  =====
      {
        title: '',
        description: '',
        techStack: ['', ''],
        thumbnailUrl: '',
        links: {
          post: '',
          github: '',
          googlePlay: '',
          appStore: '',
          demo: '',
        },
      },
      // ========================================================~
      // ========================================================
      {
        title: 'Best Pick(이상형 월드컵)',
        description:
          '이상형 월드컵입니다. 최근 심리테스트 등 캐주얼한 컨텐츠를 담고 있는 링크들이 많은 것 같아 만들어보았습니다.',
        techStack: ['Vanilla JS'],
        thumbnailUrl: 'project_bestpick.png',
        links: {
          //post: '/gatsby-starter-zoomkoding-introduction',
          github: 'https://github.com/seungjun-dev/best_pick',
          demo: 'https://seungjun.me/best_pick',
        },
      },
      {
        title: '숫자 야구 게임',
        description:
          '어렸을때 즐겨하던 숫자 야구 게임입니다.',
        techStack: ['Vanilla JS'],
        thumbnailUrl: 'project_baseball.png',
        links: {
          //post: '/gatsby-starter-zoomkoding-introduction',
          github: 'https://github.com/seungjun-dev/baseball',
          demo: 'https://seungjun.me/baseball',
        },
      },
    ],
  },
};
