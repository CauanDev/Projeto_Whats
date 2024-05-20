import Card from "components/Card/Card"

export default function Exportar(props){
    const {
        id
    } = props
    return(
        <>
          <Card color={'white'}>
            <Input variant='flushed' placeholder='Digite Nome do Grupo' />
        </Card>
        </>
    )
}