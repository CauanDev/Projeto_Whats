import { Box, Flex, Text, Button, Spacer } from '@chakra-ui/react';
import { useState } from 'react';
import { componentesCampanhasGrupos } from 'variables/icons/components';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { tablesTableData } from "variables/general";
import { titlesCompontesCampanhaGrupo } from 'variables/icons/components';

export default function GruposCampanha() {
  const [componenteAtual, setComponenteAtual] = useState(null);
  const [activeIndex, setActiveIndex] = useState(null);
  
  const handleClick = (Componente, index) => {
    setComponenteAtual(<Componente id={index} />);
    setActiveIndex(index);
  };
  
  const { id } = useParams();
  const user = tablesTableData[id];
   
  return (
    <>
      <Box borderBottom="1px" pb={10} borderColor="gray.500">
        <Flex gap={3} ml={6} direction={"column"}>
          <Box mb={3}>
            {/* Botão para o índice 0 */}
            <Button
              fontSize="xs"
              cursor="pointer"
              colorScheme={activeIndex === 0 ? "yellow" : "gray"}
              _hover={{ borderColor: "white" }}
              onClick={() => handleClick(componentesCampanhasGrupos[0], 0)}
            >
              {titlesCompontesCampanhaGrupo[0]}
            </Button>
          </Box>
          <Box mb={3}>
            <Flex gap="10vw">
                <Box>
                  {[1, 2, 3, 4].map((index) => (
                   
                      <Button
                        
                        key={index}
                        fontSize="xs"
                        cursor="pointer"
                        borderRadius='0px'
                        borderRightRadius={index == 4 ?'10px':'0px'}
                        borderLeftRadius={index == 1 ?'10px':'0px'}
                        borderLeft={index !=1? "1px solid gray": '0px'}
                        colorScheme={activeIndex === index ? "yellow" : "gray"}
                        onClick={() => handleClick(componentesCampanhasGrupos[index], index)}
                      >
                        {titlesCompontesCampanhaGrupo[index]}
                      </Button>                        
                      
                    

                  ))}
                </Box>
                  <Box>
                    {[5,6,7].map((index) => (
                      <Button
                        key={index}
                        fontSize="xs"
                        cursor="pointer"
                        colorScheme={activeIndex === index ? "yellow" : "gray"}
                        _hover={{ borderColor: "white" }}
                        onClick={() => handleClick(componentesCampanhasGrupos[index], index)}
                      >
                        {titlesCompontesCampanhaGrupo[index]}
                      </Button>
                    ))}
                  </Box>
            </Flex>
          
          </Box>
          
        </Flex>
      </Box>
      <Box p={4}>
        {componenteAtual}	  
      </Box>
    </>
  );
}
