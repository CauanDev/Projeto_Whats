import { Text } from "@chakra-ui/react"

export default function Automacao(props){

    const {
        name,
        index
    } = props
    return (
        <Text fontSize='sm' color='#fff' fontWeight='normal'> 
        Criacao Automatica de Grupos do {name} posicao {index}
        </Text>
    )
}