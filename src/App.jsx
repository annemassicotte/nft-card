import "./index.css"
import Card from "./card/Card";
import Title from "./title/Title";
import Text from "./text/Text";
import Wrapper from "./wrapper/Wrapper"
import Hr from "./hr/Hr"
import Image from "./image/Image"

import React from 'react'

const App = () => {
  return (
    <div className = "app">
      <Card>
          <Image src="./src/assets/image-equilibrium.jpg" alt="Equilibrium"></Image>
        <Title as="h1" className="h1">Equilibrum#3429</Title>
        <Text className="text-gray">Our Equilibrum collection promotes balance and calm.</Text> 
        <Wrapper flex>
          <Text as="span" className="text-aqua bold value-eth">0.041ETH</Text>
          <Text as="span" className="text-gray days-left">3 days left</Text>
        </Wrapper>
        <Hr className="hr-gray" />
        <Wrapper flex className="flex-row">
          <Image src="./src/assets/image-avatar.png" alt="Avatar" className="avatar-img"></Image>
          <Text className="text-gray">Creation of<Text as="span"className="span-white"> Anne Massicotte</Text></Text>
        </Wrapper>
      </Card>
    </div>
  )
}

export default App;