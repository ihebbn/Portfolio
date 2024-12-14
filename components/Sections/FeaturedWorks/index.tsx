import { memo } from 'react'
import {
  Heading,
  Text,
  Stack,
  Grid,
  GridItem,
  useBreakpointValue,
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import FeaturedCard from './FeaturedCard'
import { fadeInUpSlower, galleryStagger } from 'config/animations'
import { mobileBreakpointsMap } from 'config/theme'
const MotionGrid = motion(Grid)
const MotionGridItem = motion(GridItem)

const FeaturedWorksSection = () => {
  const isMobile = useBreakpointValue(mobileBreakpointsMap)
  return (
    <Stack
      width={{ base: '99%', lg: '60%', xl: '75%' }}
      height="100%"
      spacing={{ base: 6, xl: 8 }}
    >
      <Heading
        size="2xl"
        style={{
          fontVariantCaps: 'small-caps',
        }}
      >
        Some of my works.
      </Heading>
      <Text variant="description">
        Check out some of the works I made at freelancing, company projects and
        even case studies.
      </Text>

      <MotionGrid
        templateRows="repeat(1, 1fr)"
        templateColumns="repeat(6, 1fr)"
        gap={{ base: 5, md: 6 }}
        variants={galleryStagger}
      >
        <MotionGridItem colSpan={6} variants={fadeInUpSlower}>
          <FeaturedCard
            idx={1}
            title="IntraConnect Pro!"
            src="./works/s2ai.png"
            description="An integrated enterprise management platform. This platform features advanced leave management, document requests, CV Scoring management modules, and an intelligent AI-powered chatbot for quick access to company data."
            height={{ base: '130px', md: '225px', '2xl': '300px' }}
            ctaUrl="https://intraconnect-pro.com"
            objectPosition="right 20%"
            isMobile={isMobile}
          />
        </MotionGridItem>

        <MotionGridItem colSpan={6} variants={fadeInUpSlower}>
          <FeaturedCard
            idx={2}
            title="RSV"
            description="RSV is a smart contract (ERC20) powered reservation system. I am incharge of backend using NET.Core 2.1."
            src="./works/rsv.webp"
            height={{ base: '130px', md: '225px', '2xl': '300px' }}
            ctaUrl="https://solution.rsv.ltd/jp"
            isMobile={isMobile}
          />
        </MotionGridItem>

        <MotionGridItem colSpan={6} variants={fadeInUpSlower}>
          <FeaturedCard
            idx={3}
            title="Esprit University"
            description="Web application for Esprit University, enabling efficient event management, student registration, and academic information handling. Backend powered by Spring Boot and Angular for Front end."
            src="./works/e.png"
            height={{ base: '130px', md: '225px', '2xl': '300px' }}
            ctaUrl="https://esprit.tn/"
            objectPosition="right 20%"
            isMobile={isMobile}
          />
        </MotionGridItem>

        <MotionGridItem colSpan={6} variants={fadeInUpSlower}>
          <FeaturedCard
            idx={4}
            title=" Ecwid EC"
            description="Developed a scalable e-commerce platform as a freelancer to enhance online shopping experiences. Integrated secure payment gateways, real-time order tracking, and a robust product management system. Built using Python (Django) for the backend and React for the frontend, ensuring a seamless and user-friendly interface."
            src="./works/pr.png"
            height={{ base: '130px', md: '225px', '2xl': '300px' }}
            ctaUrl="https://www.ecwid.com/"
            isMobile={isMobile}
          />
        </MotionGridItem>
      </MotionGrid>
    </Stack>
  )
}

export default memo(FeaturedWorksSection)
