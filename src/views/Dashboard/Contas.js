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

import React from "react";

// Chakra imports
import {
  Flex,
  Table,
  Tbody,
  Icon,
  Text,
  Th,
  Thead,
  Tr,
  Box,
  Spacer
} from "@chakra-ui/react";
import {PlusSquareIcon,SettingsIcon,SupportIcon,StatsIcon} from '@chakra-ui/icons'

// Custom components
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
// Table Components
import TablesProjectRow from "components/Tables/TablesProjectRow";
import TablesTableRow from "components/Tables/TablesTableRow";
// Data
import { tablesProjectData, tablesTableData } from "variables/general";

// Icons
import { AiFillCheckCircle } from "react-icons/ai";

function Tables() {
  return (
    <Flex direction='column' alignItems='center' pt={{ base: "120px", md: "75px" }}>
      <Card overflowX={"hidden"} pb='0px' minWidth={"45%"}>
        <CardHeader p='6px 0px 2px 0px'>
        <Flex gap='400%' >
								<Text fontSize='3xl' color='#fff' fontWeight='bold' >
									Contas
								</Text>
							
							<Spacer/>
							<Box>
							<Text fontSize='2xl' color='#fff' fontWeight='bold' >
							<PlusSquareIcon/>
							</Text>
							</Box>
						</Flex>
        </CardHeader>
        <CardBody >
          <Table variant='simple' color='#fff' >
            <Thead>
              <Tr my='.8rem' ps='0px' color='gray.400'>
                <Th
                 
                  ps='0px'
                  color='gray.400'
                  fontFamily='Plus Jakarta Display'
                  borderBottomColor='#56577A'>
                  Usuários
                </Th>
                <Th
                  
                  color='gray.400'
                  fontFamily='Plus Jakarta Display'
                  borderBottomColor='#56577A'>
                  Status
                </Th>
                <Th
                  
                  color='gray.400'
                  fontFamily='Plus Jakarta Display'
                  borderBottomColor='#56577A'>
                  Inseridos
                </Th>
                <Th borderBottomColor='#56577A'></Th>
              </Tr>
            </Thead>
            <Tbody>
              {tablesTableData.map((row, index, arr) => {
                return (
                  <TablesTableRow
                    name={row.name}
                    logo={row.logo}
                    email={row.email}
                    status={row.status}
                    index = {index}                  
                    date={row.date}
                    lastItem={index === arr.length - 1 ? true : false}                  
                    statusFunc={()=>{
                       
                      tablesTableData[index].status = (row.status === "Online" ? "Offline" : "Online");     
                      console.log(tablesTableData[index].status + " " + index)       
                    }}
                  />
                );
              })} 
            </Tbody>
          </Table>
        </CardBody>
      </Card>     
    </Flex>
  );
}

export default Tables;
