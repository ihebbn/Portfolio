/* eslint-disable react/no-multi-comp */
import {
  Heading,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  List,
  ListItem,
  ListIcon,
  SimpleGrid,
  useColorModeValue,
  Divider,
  Text,
} from '@chakra-ui/react'
import styles from './styles.module.css'
import { Skill, Skills, splitSkills } from 'config/skills'
import { SiSymfony, SiDotNet, SiDjango, SiStrapi, SiMongodb } from 'react-icons/si';
import { SiBt, SiNpm, SiOpenid, SiDocker, SiJenkins } from 'react-icons/si';
import { SiIonic, SiStyledComponents, SiMaterialUi, SiFramer } from 'react-icons/si';
import { SiGit, SiVisualstudiocode } from 'react-icons/si';
import { AiOutlineAntDesign } from 'react-icons/ai';
import { FaSourcetree } from 'react-icons/fa';
import { BsQuestionSquare } from 'react-icons/bs';


type ISkillSetModal = {
  isOpen: boolean
  onClose(): void
}

const SkillList = ({
  title,
  columns,
}: {
  title: string
  columns: Skill[][]
}) => {
  const emphasis = useColorModeValue('teal.500', 'cyan.200')
  const [colOne, colTwo = []] = columns
  return (
    <>
      <Heading as="div" size="sm" paddingBottom={1} variant="description">
        {title}
      </Heading>
      <Divider marginBottom={4} />
      <SimpleGrid columns={2} spacing={4} paddingBottom={6}>
        <List spacing={3}>
          {colOne.map((item) => (
            <ListItem
              key={item.name}
              fontSize="small"
              display="flex"
              alignItems="center"
            >
              <ListIcon as={item.icon} color={emphasis} fontSize="2em" />
              {item.name}
            </ListItem>
          ))}
        </List>
        <List spacing={3}>
          {colTwo.map((item) => (
            <ListItem
              key={item.name}
              fontSize="small"
              display="flex"
              alignItems="center"
            >
              <ListIcon as={item.icon} color={emphasis} fontSize="2em" />
              {item.name}
            </ListItem>
          ))}
        </List>
      </SimpleGrid>
    </>
  )
}

const SkillSetModal = ({ isOpen, onClose }: ISkillSetModal) => {
  const backendCols = splitSkills((Skills.backend || []).concat([
    { name: 'Symfony (API Platform)', icon: SiSymfony },
    { name: 'Django', icon: SiDjango },
    { name: 'FastAPI', icon: SiStrapi },
  ]))
  const frontendCols = splitSkills((Skills.frontend || []))
  const databaseCols = splitSkills((Skills.database || []))
  const uiFrameworkCols = splitSkills((Skills['ui frameworks'] || []).concat([
  ]))
  const aiCols = splitSkills((Skills.ai || []).concat([
    { name: 'BERT', icon: SiBt },
    { name: 'NLP Models', icon: SiNpm },
    { name: 'OpenAI API', icon: SiOpenid },
  ]))
  const devOpsCols = splitSkills((Skills.devOps || []).concat([
    { name: 'Docker', icon: SiDocker },
    { name: 'Jenkins', icon: SiJenkins },
    { name: 'CI/CD Pipelines', icon: SiJenkins },
  ]))
  const mobileCols = splitSkills((Skills.mobile || []).concat([
    { name: 'Ionic', icon: SiIonic },
  ]))
  const productivityBoostCols = splitSkills((Skills['productivity boost'] || []).concat([
  ]))

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      motionPreset="slideInBottom"
      scrollBehavior="inside"
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Full Skill Set List</ModalHeader>
        <ModalCloseButton />
        <ModalBody className={styles.skillModal}>
          <SkillList title="Backend Development" columns={backendCols} />
          <SkillList title="Frontend Development" columns={frontendCols} />
          <SkillList title="Database Technologies" columns={databaseCols} />
          <SkillList title="AI & Machine Learning" columns={aiCols} />
          <SkillList title="DevOps & CI/CD" columns={devOpsCols} />
          <SkillList title="UI Frameworks" columns={uiFrameworkCols} />
          <SkillList title="Mobile Development" columns={mobileCols} />
          <SkillList
            title="Productivity & Developer Tools"
            columns={productivityBoostCols}
          />
        </ModalBody>
        <ModalFooter>
          <Text fontSize="x-small">
            *Some minor tools and frameworks not included
          </Text>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

export default SkillSetModal
