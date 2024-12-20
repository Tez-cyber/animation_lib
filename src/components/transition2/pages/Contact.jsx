import { Body } from "../components/Body"
import { Container } from "../components/Container"
import { Title } from "../components/Title"
import { motion } from "framer-motion"

export const Contact = () => {
  return (
    <Container>
      <Title>
        Contact
      </Title>
      <Body>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Ea delectus ex possimus blanditiis rem, fugiat necessitatibus.
        laborum aliquam perferendis laboriosam, mollitia excepturi.
        Possimus harum deserunt voluptate adipisci eos nam, velit
        sapiente distinctio ullam? Quaerat sit, tempora nobis facere
        deserunt dignissimos aut quasi odio repellendus dicta perferendis
        vero minima impedit.
      </Body>
      <motion.div
        initial={{
          y: "-100%"
        }}
        transition={{
          duration: 2,
          ease: [.2, 1, .2, 1]
        }}
        animate={{
          y: "100%"
        }}
        className="fixed top-0 left-0 w-full h-screen bg-[#0f0f0f] overflow-hidden" />
      {/* <motion.div
        exit={{
          width: "100%",
          height: "100%",
          borderRadius: 0
        }}
        transition={{
          duration: .5,
          ease: "easeInOut"
        }}
        animate={{
          width: 0,
          height: 0,
          borderRadius: "100%"
        }}
        className="absolute top-1/2 left-1/2 translate-x-1/2 translate-y-1/2 bg-[#ffcf81]"
      /> */}
    </Container>
  )
}
