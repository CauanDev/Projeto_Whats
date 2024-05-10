import { Box, Flex, Text } from '@chakra-ui/react';
import { useState } from 'react';
import { componentesCampanha } from 'variables/icons/components';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
export default function Campanhas() {
  const [componenteAtual, setComponenteAtual] = useState(null);
  const [activeIndex, setActiveIndex] = useState(null);
  const titles = ["Contas Associadas","Diagnósticos","Visão Geral"," Grupos"]
  const handleClick = (Componente, index) => {
    setComponenteAtual(<Componente />);
    setActiveIndex(index);
  };
  const { id } = useParams();

  return (
    <>
    
      <Box borderBottom="1px" borderColor="black.500" mt={'2%'}>
        <Flex gap={5} ml={6} mt={5}>
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
              {titles[index] +" "+id}
            </Text>
          ))}
        </Flex>
      </Box>
	  <Box p={4}>
		{componenteAtual}
	  </Box>
    </>
  );
}
