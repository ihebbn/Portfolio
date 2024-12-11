import { IconBaseProps, IconType } from 'react-icons'
import {
  SiDotnet,
  SiGraphql,
  SiApollographql,
  SiRedux,
  SiStyledcomponents,
  SiDocker,
  SiGooglecloud,
  SiCpanel,
  SiRancher,
  SiGitlab,
  SiPostgresql,
  SiMysql,
  SiMongodb,
  SiRedis,
  SiMaterialformkdocs ,
  SiFramer,
  SiGit,
  SiUnity,
  SiElectron,
  SiSpring,
  SiNodedotjs,
  SiAngular,
} from 'react-icons/si'
import { BsQuestionSquare } from 'react-icons/bs'
import { AiOutlineAntDesign } from 'react-icons/ai'
import { FaSourcetree } from 'react-icons/fa'
import { DiVisualstudio } from 'react-icons/di' 
import { TfiMicrosoftAlt} from 'react-icons/tfi'



export type SkillCategory =
  | 'backend'
  | 'frontend'
  | 'cicd'
  | 'database'
  | 'ui frameworks'
  | 'productivity boost'
  | 'mobile'
  | 'games'
  | 'desktop'
  | 'ai'
  | 'devOps'


export type Skill = {
  name: string
  icon: IconType
}

export const Skills: {
  [key in SkillCategory]: Skill[]
} = {
  backend: [
    {
      name: 'Spring Boot',
      icon: SiSpring,
    },
    
    {
      name: 'C# - .NET.Core',
      icon: SiDotnet,
    },
    {
      name: 'Node',
      icon: SiNodedotjs,
    },
    /* {
      name: 'Javascript (ES6+)',
      icon: SiJavascript,
    }, */
    
    {
      name: 'Graphql',
      icon: SiGraphql,
    },
    /* {
      name: 'PHP (Wordpress, Slim)',
      icon: SiPhp,
    }, */
  ],
  frontend: [
    {
      name: 'Angular',
      icon: SiAngular,
    },
    {
      name: 'NextJS',
      icon: SiNodedotjs,
    },
    {
      name: 'Apollo Graphql',
      icon: SiApollographql,
    },
    {
      name: 'Redux',
      icon: SiRedux,
    },
   

  ],
  database: [
    {
      name: 'PostgreSQL',
      icon: SiPostgresql,
    },
    
    {
      name: 'MySQL',
      icon: SiMysql,
    },
    {
      name: 'MongoDb',
      icon: SiMongodb,
    },
    {
      name: 'Redis',
      icon: SiRedis,
    },
    
    {
      name: 'Google Pubsub',
      icon: SiGooglecloud,
    },
  ],
  cicd: [
    {
      name: 'Docker',
      icon: SiDocker,
    },
    {
      name: 'GCP',
      icon: SiGooglecloud,
    },
    {
      name: 'CPanel',
      icon: SiCpanel,
    },
    {
      name: 'Rancher',
      icon: SiRancher,
    },
    {
      name: 'GitlabCICD',
      icon: SiGitlab,
    },
    {
      name: 'Buildkite',
      icon: BsQuestionSquare,
    },
  ],
  'ui frameworks': [
    {
      name: 'Styled Components',
      icon: SiStyledcomponents,
    },
    {
      name: 'AntDesign',
      icon: AiOutlineAntDesign,
    },
    {
      name: 'MaterialUI',
      icon: SiMaterialformkdocs,
    },
    {
      name: 'Framer Motion',
      icon: SiFramer,
    },
    
  ],
  'productivity boost': [
    {
      name: 'VSCode',
      icon: DiVisualstudio,
    },
    {
      name: 'Git',
      icon: SiGit,
    },
    
    {
      name: 'SourceTree',
      icon: FaSourcetree,
    },
  ],
  ai: [
   
  
  ],
  devOps: [
   
  
  ],
  mobile: [
   
  
  ],
  games: [
    {
      name: 'Unity3D',
      icon: SiUnity,
    },
  ],
  desktop: [
    {
      name: 'Windows Forms, WPF',
      icon: TfiMicrosoftAlt,
    },
    {
      name: 'Electron',
      icon: SiElectron,
    },
  ],
}

export const splitSkills = (srcArray: Skill[]) => {
  const arrLength = srcArray.length
  const isEvenChunk = arrLength % 2 === 0

  let chunk = 4
  if (isEvenChunk) {
    chunk = arrLength / 2
  } else if (arrLength <= 5 && arrLength > 2) {
    chunk = 3
  }

  let i = 0
  let j = 0
  const temporary = []
  for (i = 0, j = srcArray.length; i < j; i += chunk) {
    temporary.push(srcArray.slice(i, i + chunk))
  }
  return temporary
}
function SiNodedotJs(props: IconBaseProps): Element {
  throw new Error('Function not implemented.')
}

