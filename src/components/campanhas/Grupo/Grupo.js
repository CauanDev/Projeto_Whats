import { Box, Flex, Text, Button, Input } from '@chakra-ui/react';
import { useState } from 'react';
import { componentesCampanhasGrupos } from 'variables/icons/components';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { tablesTableData } from "variables/general";
import { titlesCompontesCampanhaGrupo } from 'variables/icons/components';
import { BiRefresh } from 'react-icons/bi';
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
      <Box borderBottom="1px" pb={6} borderColor="gray.500">
        <Flex gap={3} ml={6} direction={"column"}>
          <Box mb={3}>
            <Flex >
                <Box       w="full" 
      display="flex" 
      justifyContent="center" 
      alignItems="center" >
                  {titlesCompontesCampanhaGrupo.map((item,index) => (
                   
                      <Button                        
                        key={index}
                        fontSize="xs"
                        cursor="pointer"
                        borderRadius='0px'
                        borderRightRadius={index == 7 ?'10px':'0px'}
                        borderLeftRadius={index == 0 ?'10px':'0px'}
                        borderLeft={index !=0? "1px solid gray": '0px'}
                        colorScheme={activeIndex === index ? "yellow" : "gray"}
                        onClick={() => handleClick(componentesCampanhasGrupos[index], index)}
                      >
                        {item}
                      </Button>                        
                      
                    

                  ))}
                </Box>
            </Flex>
          
          </Box>
          
        </Flex>
        <Box 
      w="full" 
      display="flex" 
      justifyContent="center" 
      alignItems="center" 
      pt={5}
      gap={2}
    >
      <Input 
        w="40%" 
        textColor="white" 
        placeholder="Buscar usando nome,link de convite ou tipo de grupo" 
      />
      <Text fontSize={'4xl'} textColor={'white'}>
        <BiRefresh/>        
      </Text>

    </Box>

      </Box>

      <Box p={4}>
        {componenteAtual}	  
      </Box>
    </>
  );
}
