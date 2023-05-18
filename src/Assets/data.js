import fashion from './Projects/fashion.png';
import weather from './Projects/calculator.png';
import check from './Projects/check.png';
import cine from './Projects/cine.png';
import zap from './Projects/zap.png';
import track from './Projects/track.png';

const projects = [
  {
    id: 1,
    title: 'Movies',
    description: 'Streamlined movie seat booking app with visually interface and checkout process.',
    ghLink: 'https://github.com/wallysom2/CineFlex',
    demoLink: 'https://projeto-cineflex-self.vercel.app/',
    imgPath: cine,
  },
  {
    id: 2,
    title: 'Analyzer',
    description: 'Analyze text for inappropriate words and manage exceptions for clean communication.',
    ghLink: 'https://github.com/wallysom2/check-text--front',
    demoLink: 'https://check-text-front-orpin.vercel.app/',
    imgPath: check,
  },
  {
    id: 3,
    title: 'Flashcards',
    description: 'Interactive app to enhance memory with Active Recall and Spaced Repetition methodologies.',
    ghLink: 'https://github.com/wallysom2/zaprecall',
    demoLink: 'https://projeto8-zaprecall-o70y4yk98-wallysom2.vercel.app/',
    imgPath: zap,
  },
  {
    id: 4,
    title: 'Tracker',
    description: 'Mobile app to track habits, visualize progress, and stay motivated with streaks.',
    ghLink: 'https://github.com/wallysom2/trackit',
    demoLink: 'https://trackit-nine.vercel.app/today',
    imgPath: track,
  },
  {
    id: 5,
    title: 'Calculator',
    description: 'Simple and efficient calculator app built with Vue.js for basic mathematical operations.',
    ghLink: 'https://github.com/siddharth-singh/weather-app',
    demoLink: 'https://siddharth-singh.github.io/weather-app/',
    imgPath: weather,
  },
  {
    id: 6,
    title: 'Market',
    description: 'Browse and order clothes from an online marketplace with various options.',
    ghLink: 'https://github.com/siddharth-singh/fashion-store',
    demoLink: 'https://scintillating-unicorn-0565df.netlify.app/',
    imgPath: fashion,
  },
];

export default projects;
