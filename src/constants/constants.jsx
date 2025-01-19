import CodeIcon from '@mui/icons-material/Code';
import GraphicEqIcon from '@mui/icons-material/GraphicEq';
import DeveloperModeIcon from '@mui/icons-material/DeveloperMode';

export const categories = [
  { name: 'React JS', icon: <CodeIcon /> },
  { name: 'Flutter', icon: <DeveloperModeIcon /> },
  { name: 'Next.js', icon: <CodeIcon /> },
  { name: 'React Native', icon: <CodeIcon /> },
  { name: 'UI/UX Design', icon: <GraphicEqIcon /> },
  { name: 'CSS & Sass', icon: <CodeIcon /> },
  { name: 'JavaScript', icon: <CodeIcon /> },
  { name: 'TypeScript', icon: <CodeIcon /> },
  { name: 'Vue.js', icon: <CodeIcon /> },
  { name: 'Angular', icon: <CodeIcon /> },
  { name: 'Tailwind CSS', icon: <CodeIcon /> },
  { name: 'Redux', icon: <CodeIcon /> },
  { name: 'Material UI', icon: <CodeIcon /> },
  { name: 'Web Performance', icon: <DeveloperModeIcon /> },
  { name: 'Web Animation', icon: <GraphicEqIcon /> },
  { name: 'Web Accessibility', icon: <DeveloperModeIcon /> },
];

/**Activa esta constante si vas a trabajar localmente **/
export const BASE_URI = import.meta.env.DEV ? '/' : '/youtube-clone';
