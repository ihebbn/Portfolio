import { Link } from '@chakra-ui/react'

export type Company = 'Deloitte' | 'Confledis' | 'SCG' | 'Blotocol'

export type CompanyDetail = {
  name: string
  longName: string
  subDetail?: string
  url: string
  position: string
  duration: string
  location: string
  logo: {
    light: string
    dark?: string
  }
  roles?: JSX.Element[]
}

export const Experiences: {
  [key in Company]: CompanyDetail
} = {
  Deloitte: {
    name: 'Strategya2Ai',
    longName: 'Strategya2Ai',
    subDetail: 'Full-Stack Developer',
    url: 'https://www.strategya2ai.com/',
    position: 'Software Engineer',
    duration: 'Feb 2024 - Oct 2024',
    location: 'Les Berges du Lac II, Tunisia',
    logo: {
      light: '/worked_at_logos/deloitte/S2ai_logo.png',
      dark: '/worked_at_logos/deloitte/S2ai_logo.png',
    },
    roles: [
      <>
        Played a pivotal role in developing an enterprise management platform
        with multiple modules to modernize the company HR and recruitment
        management tools.
      </>,
      <>
        Designed and implemented a robust JWT-based authentication system
        supporting five distinct user roles, ensuring secure and tailored access
        while managing permissions effectively.
      </>,
      <>
        Led the development of an advanced leave management microservice,
        automating workflows, reducing errors, and providing real-time insights
        into leave history.
      </>,
      <>
        Designed and implemented a highly intelligent AI-powered chatbot
        leveraging Spring AI, revolutionizing administrative workflows by
        centralizing access to internal company information. This innovative
        solution provided administrators with instant, personalized, and
        context-aware assistance, significantly improving operational efficiency
        and decision-making.
      </>,
      <>
        Engineered Python algorithms for a recruitment management microservice
        to evaluate CVs and rank candidates based on predefined criteria,
        enhancing preselection quality and reducing recruitment time.
      </>,
      <>
        Wrote comprehensive unit tests using JUnit and Mockito to ensure code
        reliability, maintainability, and scalability.
      </>,
      <>
        Served as Scrum Master, effectively managing the team’s workflow,
        facilitating sprint planning, conducting daily stand-ups, and ensuring
        smooth project delivery by adhering to Agile methodologies.
      </>,
    ],
  },

  Confledis: {
    name: 'Confledis',
    longName: 'Confledis France',
    subDetail: 'Full-Stack Developer Intern',
    url: 'https://confledis.com/',
    position: 'Full-Stack Developer Intern',
    duration: 'Aug 2023 - Nov 2023',
    location: 'Paris, Île-de-France, France (Remote)',
    logo: {
      light: '/worked_at_logos/confledis/confledis_logo.png', // Add correct logo path
      dark: '/worked_at_logos/confledis/confledis_logo.png', // Add correct logo path
    },
    roles: [
      <>
        Played a key role in the development of &apos;Food&apos; an online food
        ordering and delivery platform, handling both front-end and back-end
        development.
      </>,
      <>
        Designed and implemented user-friendly interfaces using Ionic and
        Angular, significantly enhancing the platform’s usability and user
        experience.
      </>,
      <>
        Developed RESTful APIs to enable efficient order placement for users and
        offer management for restaurants.
      </>,
      <>
        Integrated PayPal as a payment gateway, ensuring secure and smooth
        transaction processes for customers.
      </>,
      <>
        Configured and optimized a scalable infrastructure on Amazon Web
        Services (AWS) to handle high traffic and multiple restaurant
        integrations, leveraging EC2 instances, S3 for storage, and RDS for
        database management.
      </>,
      <>
        Leveraged Docker and Capacitor for efficient deployment and
        cross-platform compatibility, ensuring a robust and maintainable system.
      </>,
      <>
        Utilized technologies and tools like Spring Boot, Angular, Ionic,
        Docker, AWS, PostgreSQL, Payment Gateway (PayPal), GitHub, Jira, and
        REST APIs to deliver a high-performing and scalable solution.
      </>,
    ],
  },

  SCG: {
    name: 'Euro Tech Conseil',
    longName: 'Euro Tech Conseil',
    subDetail: 'Full stack developer',
    url: 'https://www.eurotechconseil.com/',
    position: 'Software Engineer',
    duration: 'Juin 2023 - Aug 2023',
    location: 'Tunis, Tunisia',
    logo: {
      light: './worked_at_logos/scg/Etc.png',
      dark: './worked_at_logos/scg/Etc.png',
    },
    roles: [
      <>
        Collaborated in the development of a large-scale human resource
        management application, focusing on both back-end and front-end to
        optimize functionality and enhance user experience.
      </>,
      <>
        Spearheaded the design and development of a responsive user interface to
        manage over 5000 users, leave requests, and accounts, reducing
        administrative workload by 40%.
      </>,
      <>
        Integrated Keycloak to implement a secure, scalable authentication and
        authorization system, ensuring seamless user management across the
        platform.
      </>,
      <>
        Developed back-end functionalities using SpringBoot and built an
        interactive, user-friendly front-end using Angular.
      </>,
      <>
        Worked closely with cross-functional teams to ensure smooth API
        integration and secure data handling.
      </>,
      <>
        Leveraged tools such as GitHub, Jenkins, and Jira for efficient source
        control, continuous integration, and project tracking, ensuring
        development continuity.
      </>,
      <>
        Utilized technologies and tools including SpringBoot, Angular, Keycloak,
        REST APIs, Auth2, Jenkins, Jira, and MySQL to deliver a scalable and
        efficient solution.
      </>,
    ],
  },
  Blotocol: {
    name: 'Tunisie Telecom',
    longName: 'Tunisie Telecom',
    subDetail: 'Intern',
    url: 'https://blotocol.com/',
    position: 'Full-Stack Developer Intern',
    duration: 'Aug 2022 - Sep 2022',
    location: 'Tunis, Tunisia (On-Site)',
    logo: {
      light: '${basePath}/worked_at_logos/ivp/TT_logo.png',
      dark: '${basePath}/worked_at_logos/ivp/TT_logo.png',
    },
    roles: [
      <>
        Designed and developed a web E-Commerce platform for Tunisia Telecom
        products, delivering a user-friendly and feature-rich solution.
      </>,
      <>
        Implemented back-end functionality using Python and Django to manage
        server-side operations, ensuring seamless and secure workflows.
      </>,
      <>
        Created a responsive and interactive user interface using HTML,
        Bootstrap, and JavaScript, enhancing the platform’s usability and
        engagement.
      </>,
      <>
        Streamlined product browsing and purchase workflows to provide customers
        with a smooth and intuitive shopping experience.
      </>,
      <>
        Leveraged technologies such as Django, REST APIs, OAuth0, payment
        gateways (Stripe), Elasticsearch, PostgreSQL, and HTTPS encryption to
        build a secure and scalable platform.
      </>,
    ],
  },
}

export const ExperiencesList = [
  Experiences.Deloitte,
  Experiences.Confledis,
  Experiences.SCG,
  Experiences.Blotocol,
]