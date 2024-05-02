/*!

=========================================================
* Vision UI Free Chakra - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/vision-ui-free-chakra
* Copyright 2021 Creative Tim (https://www.creative-tim.com/)
* Licensed under MIT (https://github.com/creativetimofficial/vision-ui-free-chakra/blob/master LICENSE.md)

* Design and Coded by Simmmple & Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
// Chakra imports
import {
	Box,
	Button,
	CircularProgress,
	CircularProgressLabel,
	Flex,
	Grid,
	Icon,
	Progress,
	SimpleGrid,
	Spacer,
	Stack,
	Stat,
	StatHelpText,
	StatLabel,
	StatNumber,
	Table,
	Tbody,
	Text,
	Th,
	Thead,
	Tr 
} from '@chakra-ui/react';

import {PlusSquareIcon} from '@chakra-ui/icons'
// Styles for the circular progressbar
import medusa from 'assets/img/cardimgfree.png';
// Custom components
import Card from 'components/Card/Card.js';
import CardBody from 'components/Card/CardBody.js';
import CardHeader from 'components/Card/CardHeader.js';
import BarChart from 'components/Charts/BarChart';
import LineChart from 'components/Charts/LineChart';
import IconBox from 'components/Icons/IconBox';
import Contas from 'components/Contas/contas';
import Campanha from "components/Campanhas/campanhas"
// Icons
import { CartIcon, DocumentIcon, GlobeIcon, RocketIcon, StatsIcon, WalletIcon } from 'components/Icons/Icons.js';
import DashboardTableRow from 'components/Tables/DashboardTableRow';
import TimelineRow from 'components/Tables/TimelineRow';
import {React,useState,useEffect} from 'react';
import { AiFillCheckCircle } from 'react-icons/ai';
import { BiHappy, BiRefresh } from 'react-icons/bi';
import { BsArrowRight } from 'react-icons/bs';
import { IoCheckmarkDoneCircleSharp, IoEllipsisHorizontal } from 'react-icons/io5';
// Data
import {
	barChartDataDashboard,
	barChartOptionsDashboard,
	lineChartDataDashboard,
	lineChartOptionsDashboard
} from 'variables/charts';
import { dashboardTableData, timelineData } from 'variables/general';
import { tablesTableData } from 'variables/general';
export default function Dashboard() {


	const [contas, setContas] = useState([]);
	const [campanhas, setCampanhas] = useState([]);

function generateContas() {
    return tablesTableData;
}

function generateCampanhas() {
    return tablesTableData;
}

useEffect(() => {
    handleClick();
}, []);

function handleClick() {
    const newContas = generateContas();
    const newCampanhas = generateCampanhas();
    setContas(newContas);
    setCampanhas(newCampanhas);
}
	
	return (
		
		<Flex flexDirection='column' pt={{ base: '120px', md: '150px' }}>
		<Flex gap={'2%'}>
			<Text fontSize='lg' color='#fff' fontWeight='bold'>
				Suas Atividades
			</Text>
			<Text fontSize='3xl' color='#fff' fontWeight='bold'>
				<BiRefresh
				cursor={"pointer"}
				onClick={handleClick}/>
			</Text>
		</Flex>	
			<Grid
				templateColumns='repeat(3, 1fr)'				
				gap='10px'
				mb='24px'>			
				
					<Card p='15px 0px 0px 0px' height="500px">
					<CardHeader  ps='20px' width="100%">
						<Flex gap='130%' >
							<Box p='2'>
								<Text fontSize='lg' color='#fff' fontWeight='bold' >
									Contas
								</Text>
							</Box>
							
							<Spacer/>
							<Box>
							<Text fontSize='2xl' color='#fff' fontWeight='bold' >
							<PlusSquareIcon></PlusSquareIcon>
							</Text>
							</Box>
						</Flex>
					</CardHeader>
					<CardBody p='20px'flexDirection='column' gap="10px" overflowY="auto" maxHeight="calc(100% - 64px)">
					{contas.map((row,index)=>{
						return(
							<Contas
							name={row.name}
							logo={row.logo}
							telefone={row.email}
							status={row.status}
							index = {index}  
							/>	
						);
					})}
					</CardBody>
				</Card>

				<Card p='15px 0px 0px 0px' height="500px">
				<CardHeader  ps='20px' width="100%">
						<Flex gap='80%' >
							<Box p='2'>
								<Text fontSize='lg' color='#fff' fontWeight='bold' >
									Campanhas
								</Text>
							</Box>
							
							<Spacer/>
							<Box>
							<Text fontSize='2xl' color='#fff' fontWeight='bold' >
							<PlusSquareIcon></PlusSquareIcon>
							</Text>
							</Box>
						</Flex>
					</CardHeader>
					<CardBody p='20px'flexDirection='column' gap="10px" overflowY="auto" maxHeight="calc(100% - 64px)">
					{campanhas.map((row,index)=>{
						return(
							<Campanha
							name={row.name}
							logo={row.logo}
							index = {index}  
							/>	
						);
					})}


					</CardBody>
				</Card>


					<Card p='15px 0px 0px 0px'>
					<CardHeader mb='20px' ps='22px' width="100%">
						<Flex gap='88%' >
							<Box p='2'>
								<Text fontSize='lg' color='#fff' fontWeight='bold' >
									Webhooks
								</Text>
							</Box>
							
							<Spacer/>
							<Box>
							<Text fontSize='2xl' color='#fff' fontWeight='bold' >
							<PlusSquareIcon></PlusSquareIcon>
							</Text>
							</Box>
						</Flex>
					</CardHeader>
					<CardBody >
						<Text fontSize='md' p={20} color='#fff' fontWeight='bold' >
								Nenhum WebHook encontrado!
						</Text>

					</CardBody>
				</Card>
			</Grid>
	
		</Flex>
	);
}
