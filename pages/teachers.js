import styled from 'styled-components'
import { Head } from 'next/document'
import tw from 'twin.macro'
import Layout from '../components/layout'
import {ChartWrapper, ChartHeading, Content,  Heading} from '../components/commonStyled'
import {
  BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';
import Teachers from '../data/teachers'

const data = [
  { x: 100, y: 200, z: 200 },
  { x: 120, y: 100, z: 260 },
  { x: 170, y: 300, z: 400 },
  { x: 140, y: 250, z: 280 },
  { x: 150, y: 400, z: 500 },
  { x: 110, y: 280, z: 200 },
];

const StyledChartWrapper = styled(ChartWrapper) `
  ${tw`shadow-2xl sm:w-4/5 border-yellow-400 border-4`}



`
const StyledChartHeading = styled(ChartHeading) `
 ${tw `bg-yellow-400 text-yellow-700`}
`

export default function Home() {
  return (
    <Layout navTo="students">
      <Content>
        <Heading>UA Teachers</Heading>
        <StyledChartWrapper>
        <ResponsiveContainer  width="100%" height={500} wrapperStyle={{left:2, right:2}}>
          <BarChart
              width={500}
              height={300}
              data={Teachers}
              margin={{
                top: 150, right: 30, left: 20, bottom: 50,
              }}
            >
            <XAxis dataKey="name" tickLine={false} fontWeight="bold" interval ={0} fontSize='10px' angle={-20}  textAnchor="end"/>
            <YAxis domain={[0, 10]}/>
            <Tooltip />
            <Legend wrapperStyle={{top: 50, fontWeight: 'bold', fontSize: 12}}/>
            <Bar dataKey="leadership" fill="#744210" />
            <Bar dataKey="cooperation" fill="#b7791f" />
            <Bar dataKey="wit" fill="#ecc94b"/>
            <Bar dataKey="responsibility" fill="#ed8936"/>
            <Bar dataKey="combat"  fill="#c05621"/>
          </BarChart>
          
          </ResponsiveContainer>
          <StyledChartHeading>Teacher Stats</StyledChartHeading>
        </StyledChartWrapper>


      </Content>
    </Layout>
    
  )
}
