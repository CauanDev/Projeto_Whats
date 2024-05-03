import { Text } from "@chakra-ui/react"

export default function Opcoes(props){

    const {
        name,
        index
    } = props
    return (
        <Text fontSize='sm' color='#fff' fontWeight='normal'> 
        Detalhes do {name} posicao {index}
        </Text>
    )
}