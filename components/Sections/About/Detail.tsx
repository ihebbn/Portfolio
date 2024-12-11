import { memo } from 'react'
import {
  Heading,
  Text,
  List,
  ListItem,
  ListIcon,
  Icon,
  SimpleGrid,
  Box,
  Tooltip,
  Stack,
  useColorModeValue,
} from '@chakra-ui/react'
import {
  SiSpring,
  SiGraphql,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiDocker,
  SiPostgresql,
  SiBt,
  SiAngular,
} from 'react-icons/si'
import { FaJava } from 'react-icons/fa'
import { GiCoffeePot } from 'react-icons/gi'
import { IoMdOpen } from 'react-icons/io'

type ISkillSetModal = {
  onOpen(): void
}

const Detail = ({ onOpen }: ISkillSetModal) => {
  const emphasis = useColorModeValue('teal.500', 'cyan.200')

  return (
    <Stack
      width={{ base: '100%', lg: '70%' }}
      spacing={{ base: 6, xl: 8 }}
      as="section"
    >
      <Heading
        as="h4"
        size="2xl"
        letterSpacing={1.8}
        style={{
          fontVariantCaps: 'small-caps',
        }}
      >
        What I Do
      </Heading>
      <Text variant="description">
        I am a passionate <b>Full-Stack Software Engineer</b> with a strong focus on
        building scalable, efficient, and user-friendly solutions. My journey has
        taken me through developing enterprise-grade applications, integrating
        AI-powered features, and creating engaging user interfaces. Currently, I
        specialize in <b>backend systems</b>, <b>microservices architecture</b>,
        and <b>full-stack development</b>. Here are a few technologies that make up my{' '}
        <Tooltip
          label="Definitely coffee over tea!"
          aria-label="Coffee!"
          hasArrow
        >
          <Text as="span" variant="emphasis">
            coffee
          </Text>
        </Tooltip>{' '}
        <Icon as={GiCoffeePot} color={emphasis} /> stack:
      </Text>

      <SimpleGrid columns={2} spacing={4}>
        <List spacing={3}>
          <ListItem fontSize="small" display="flex" alignItems="center">
            <ListIcon as={FaJava} color={emphasis} fontSize="2em" />
            Java & Spring Boot
          </ListItem>
          <ListItem fontSize="small" display="flex" alignItems="center">
            <ListIcon as={SiGraphql} color={emphasis} fontSize="2em" />
            GraphQL
          </ListItem>
          <ListItem fontSize="small" display="flex" alignItems="center">
            <ListIcon as={SiNodedotjs} color={emphasis} fontSize="2em" />
            Node.js
          </ListItem>
          <ListItem fontSize="small" display="flex" alignItems="center">
            <ListIcon as={SiPostgresql} color={emphasis} fontSize="2em" />
            PostgreSQL
          </ListItem>
        </List>
        <List spacing={3}>
        <ListItem fontSize="small" display="flex" alignItems="center">
            <ListIcon as={SiAngular} color={emphasis} fontSize="2em" />
            Angular
          </ListItem>
          <ListItem fontSize="small" display="flex" alignItems="center">
            <ListIcon as={SiNextdotjs} color={emphasis} fontSize="2em" />
            Next.js
          </ListItem>
          <ListItem fontSize="small" display="flex" alignItems="center">
            <ListIcon as={SiDocker} color={emphasis} fontSize="2em" />
            Docker
          </ListItem>
          <ListItem fontSize="small" display="flex" alignItems="center">
            <ListIcon as={SiBt} color={emphasis} fontSize="2em" />
            BERT for NLP
          </ListItem>
        </List>
        <Box>
          <Text
            as="button"
            variant="emphasis"
            fontSize="smaller"
            textAlign="left"
            onClick={onOpen}
          >
            See my full skillset <Icon as={IoMdOpen} />
          </Text>
        </Box>
      </SimpleGrid>
    </Stack>
  )
}

export default memo(Detail)
