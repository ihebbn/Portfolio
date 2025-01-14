import { IconType } from 'react-icons'
import {
  FaInstagram,
  FaLinkedin,
  FaStackOverflow,
  FaTwitter,
  FaYoutube,
  FaGithub,
  FaDev,
} from 'react-icons/fa'

type SocialMedia = {
  label: string
  href: string
  icon: IconType
}

export const SocialMedias: SocialMedia[] = [
  
  /* {
    label: 'Instagram',
    href: 'https://www.instagram.com/kllawingco/',
    icon: FaInstagram,
  }, */
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/mohamed-iheb-ben-slama/',
    icon: FaLinkedin,
  },
  {
    label: 'StackOverflow',
    href: 'https://stackoverflow.com/',
    icon: FaStackOverflow,
  },
  {
    label: 'Github',
    href: 'https://github.com/ihebbn/',
    icon: FaGithub,
  },
  /* {
    label: 'Youtube',
    href: 'https://www.youtube.com/@djmok734',
    icon: FaYoutube,
  }, */
  {
    label: 'Dev.to',
    href: 'https://dev.to/',
    icon: FaDev,
  },
]
