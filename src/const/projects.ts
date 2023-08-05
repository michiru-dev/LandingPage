export const projectsList = [
  {
    title: 'ショッピングサイト',
    skills: ['React', 'Next.js', 'Redux', 'Typescript'],
    description:
      'シンプルなショッピングサイトです。商品一覧、商品詳細、カート、支払いページで構成しています。支払いページでは任意の数字を入力し進めてください',
    src: 'ecサイト',
    url: 'https://nextjs-ec-website.vercel.app/',
    repoUrl: 'https://github.com/michiru-dev/EC-Website-Next.js',
  },
  {
    title: '人事管理アプリ',
    skills: ['React', 'Redux', 'SCSS', 'Cloud Firestore'],
    description:
      '社員情報を登録、閲覧、検索、編集できるアプリです。ダミーデータを登録しているので、自由に追加や編集等行ってください。',
    src: 'hrapp社員検索',
    url: 'https://hr-app-nu.vercel.app/',
    repoUrl: 'https://github.com/michiru-dev/HR-App-Cloud-FireStore',
  },
  {
    title: 'ニュースアプリ',
    skills: ['React', 'Typescript', 'Node.js', 'Express'],
    description:
      'フリーAPIからデータを取得し、表示しています。このAPIとの繋ぎ込みのため、バックエンドも実装しています。',
    src: 'newspp',
    url: 'https://news-app-with-react-ten.vercel.app/',
    repoUrl: 'https://github.com/michiru-dev/News-App-with-React',
  },
  {
    title: '国旗クイズアプリ',
    skills: ['React', 'Typescript', 'SCSS'],
    description: '4択の国旗当てゲームです。',
    src: 'flagQuizApp',
    url: 'https://flag-quiz-app.vercel.app/',
    repoUrl: 'https://github.com/michiru-dev/Flag-Quiz-App',
  },
] as const
