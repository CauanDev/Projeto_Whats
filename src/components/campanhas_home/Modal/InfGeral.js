import { Text } from "@chakra-ui/react";

export default function Info(props){
    const {
        name,
        index
    } = props

    return (
        <Text fontSize='sm' color='#fff' fontWeight='normal'> 
        Informações do {name} posicao {index}
        </Text>
    );
}