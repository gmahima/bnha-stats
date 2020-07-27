import styled from 'styled-components'
import { Head } from 'next/document'
import tw from 'twin.macro'
import Layout from '../components/layout'
import {ChartWrapper, ChartHeading, Content,  Heading} from '../components/commonStyled'
import {
  ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
} from 'recharts';

const data = [
  { x: 100, y: 200, z: 200 },
  { x: 120, y: 100, z: 260 },
  { x: 170, y: 300, z: 400 },
  { x: 140, y: 250, z: 280 },
  { x: 150, y: 400, z: 500 },
  { x: 110, y: 280, z: 200 },
];

const StyledChartWrapper = styled(ChartWrapper) `
  ${tw`shadow-2xl sm:w-1/2 border-yellow-700`}



`
const StyledChartHeading = styled(ChartHeading) `
 ${tw `bg-yellow-700`}
`

export default function Home() {
  return (
    <Layout navTo="students">
      <Content>
        <Heading>UA Teachers</Heading>
        <StyledChartWrapper>
        <ResponsiveContainer  width="100%" height={300} wrapperStyle={{left:2, right:2}}>
        <ScatterChart
        width={400}
        height={400}
        margin={{
          top: 20, right: 20, bottom: 20, left: 20,
        }}
      >
        <CartesianGrid />
        <XAxis type="number" dataKey="x" name="stature" unit="cm" />
        <YAxis type="number" dataKey="y" name="weight" unit="kg" />
        <Tooltip cursor={{ strokeDasharray: '3 3' }} />
        <Scatter name="A school" data={data} fill="#8884d8" />
      </ScatterChart>
          
          </ResponsiveContainer>
          <StyledChartHeading>Teachers Height / Weight</StyledChartHeading>
        </StyledChartWrapper>


      </Content>
    </Layout>
    
  )
}
