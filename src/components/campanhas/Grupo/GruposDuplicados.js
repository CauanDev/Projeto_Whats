import { tablesTableData } from "variables/general"
import CardGrupo from "./CardGrupo"
import Card from "components/Card/Card"
export default function GruposDuplicados(props){
    const {
        id
    } = props
    return(
        <>
            {tablesTableData.map((item,index)=>{
                return(
                <CardGrupo
                key={index}
                name = {item.name}
                avatar = {item.logo}
                cliquesAlcançados = {3}
                cliquesMeta = {30}
                cliquesReais = {15}
                participantes = {6}
                link ={ "teste.url"}
                data ={ Date()}
                tipoGrupo={"Normal"}
                cheio = {true}
                first = {index==0 ? true : false}
                end = {index==tablesTableData.length-1? true : false}
                /> )  
            })}
           
            
                     
        </>
    )
}