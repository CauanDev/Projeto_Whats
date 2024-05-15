import { Box, Flex, Text, Avatar,AvatarBadge } from '@chakra-ui/react';
import { useState } from 'react';
import { componentesCampanha } from 'variables/icons/components';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { tablesTableData } from "variables/general";

export default function Campanhas() {
  const [componenteAtual, setComponenteAtual] = useState(null);
  const [activeIndex, setActiveIndex] = useState(null);
  const titles = ["Visão Geral","Contas Associadas","Diagnósticos"," Grupos"]
  const handleClick = (Componente, index) => {
    setComponenteAtual(<Componente id={index} />);
    setActiveIndex(index);
  };
  const { id } = useParams();
  const user = tablesTableData[id];
  return (
    <>
    
      <Box borderBottom="1px" borderColor="black.500">
        <Flex gap={3} pb={3}>

           <Avatar  borderRadius='100%' size='sm' src={user.logo} >
            <AvatarBadge boxSize='15px' bg={user.status? 'green.500':'tomato'} />
            </Avatar>

              <Text               
              fontSize="lg"
              pb={2}
              color="#fff"
              cursor="pointer">
                {user.name}
              </Text>
        </Flex>

        <Flex gap={5} ml={6} >
          {componentesCampanha.map((componente, index) => (
            <Text
              key={index}
              fontSize="lg"
              pb={2}
              color="#fff"
              cursor="pointer"
              borderBottom={activeIndex === index ? "5px solid white" : "5px solid transparent"}
              _hover={{ borderColor: "white" }}
              onClick={() => handleClick(componente, index)}
            >
              {titles[index]}
            </Text>
          ))}
          
        </Flex>
      </Box>
	  <Box p={4}>
    {componenteAtual}	  </Box>
    </>
  );
}
