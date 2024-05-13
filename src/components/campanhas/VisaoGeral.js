import { Box, Flex, Spacer, Text,Switch, Input, Button } from '@chakra-ui/react';
import Card from 'components/Card/Card';
import { BiLogIn,BiLogOut,BiCategoryAlt,BiPencil,BiPaperclip,BiPaperPlane} from "react-icons/bi";
export default function VisaoGeral(){
    return(
        (
            <>
            <Box>
            <Flex alignItems="center" justifyContent="center" direction="column" gap="2vw">
              <Flex direction="row" gap="1%" w="70%">
                <Card>
                  <Box>
                    <Flex>
                      <Text fontSize="lg" color="#fff">Quantidade de Clicks</Text>
                      <Spacer/>
                      <Text color={'white'} fontSize="3xl"><BiCategoryAlt/></Text>
                    </Flex>
                  </Box>
                  <Box>
                    <Flex gap={1} >
                      <Text fontSize="lg" color="#fff">0</Text>
                      <Text fontSize="lg" color="gray.500">clicks</Text>
                    </Flex>
                  </Box>
                </Card>
                <Card>
                  <Box>
                    <Flex>                
                      <Text fontSize="lg" color="#fff">Entrada de Participantes</Text>
                      <Spacer/>
                      <Text color={'white'} fontSize="3xl"><BiLogIn/></Text>
                    </Flex>
                  </Box>
                  <Box>
                    <Flex gap={1} >
                      <Text fontSize="lg" color="#fff">0</Text>
                      <Text fontSize="lg" color="gray.500">participantes</Text>
                    </Flex>
                  </Box>
                </Card>
                <Card >
                  <Box>
                    <Flex>
                      <Text fontSize="lg" color="#fff">Saída de Participantes</Text>
                      <Spacer/>
                      <Text color={'white'} fontSize="3xl"><BiLogOut/></Text>
                    </Flex>
                  </Box>
                  <Box>
                    <Flex gap={1} >
                      <Text fontSize="lg" color="#fff">0</Text>
                      <Text fontSize="lg" color="gray.500">participantes</Text>
                    </Flex>
                  </Box>
                </Card>
              </Flex>

            <Flex direction="row" gap="1%" w="100%">
                <Card>
                  <Box>
                    <Flex>
                      <Text fontSize="lg" color="#fff">Cookies de Redirecionamento</Text>
                      <Spacer/>
                      <Text color={'white'} fontSize="2xl"><BiPaperPlane/></Text>
                    </Flex>
                  </Box>
                  <Box>
                    <Flex gap={1} py={3}>
                      <Text fontSize="xs" color="gray">Redireciona o lead para o primeiro grupo que ele tentou entrar evitando que ele entre em mais de um grupo</Text>
                      <Spacer/>
                      <Box  alignSelf="center">
                        <Switch size='md' />
                      </Box>
                    </Flex>
                  </Box>
                </Card>
                <Card>
                  <Box>
                    <Flex>                
                      <Text fontSize="lg" color="#fff">Link de Convite</Text>
                      <Spacer/>
                      <Text color={'white'} fontSize="2xl"><BiPencil/></Text>
                    </Flex>
                  </Box>
                  <Box>
                    <Flex gap={1} py={3}>
                    <Input variant='flushed' placeholder='teste_link.com.br' isReadOnly />
                    <Spacer/>
                      <Box  alignSelf="center">
                      <Button colorScheme='yellow'>Copiar</Button>
                      </Box>
                    </Flex>
                  </Box>
                </Card>
                <Card >
                  <Box>
                    <Flex>
                      <Text fontSize="lg" color="#fff">Deep Linking</Text>
                      <Spacer/>
                      <Text color={'white'} fontSize="3xl"><BiPaperclip/></Text>
                    </Flex>
                  </Box>
                  <Box>
                    <Flex gap={1} py={3}>
                      <Text fontSize="xs" color="gray">Elimina a necessidade do lead clicar em "Entrar na conversa" no site do WhatsApp</Text>
                      <Spacer/>
                      <Box  alignSelf="center">
                        <Switch size='md' />
                      </Box>
                    </Flex>
                  </Box>
                </Card>
              </Flex>
            </Flex>
            </Box>


          </>
        )
    );
}