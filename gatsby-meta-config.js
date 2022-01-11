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
        activity: '닐슨코리아 프론트엔드 개발'
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
      // ========================================================
      // ========================================================
      {
        title: '개발 블로그 테마 개발',
        description:
          '개발 블로그를 운영하는 기간이 조금씩 늘어나고 점점 많은 생각과 경험이 블로그에 쌓아가면서 제 이야기를 담고 있는 블로그를 직접 만들어보고 싶게 되었습니다. 그동안 여러 개발 블로그를 보면서 좋았던 부분과 불편했던 부분들을 바탕으로 레퍼런스를 참고하여 직접 블로그 테마를 만들게 되었습니다.',
        techStack: ['gatsby', 'react'],
        thumbnailUrl: 'blog.png',
        links: {
          post: '/gatsby-starter-zoomkoding-introduction',
          github: 'https://github.com/zoomkoding/zoomkoding-gatsby-blog',
          demo: 'https://www.zoomkoding.com',
        },
      },
    ],
  },
};
