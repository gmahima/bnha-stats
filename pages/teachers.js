import styled from 'styled-components'
import { Head } from 'next/document'
import tw from 'twin.macro'
import Layout from '../components/layout'
import {ChartWrapper, ChartHeading, Content,  Heading} from '../components/commonStyled'

const StyledChartWrapper = styled(ChartWrapper) `
  ${tw`shadow-2xl sm:w-2/3 sm:ml-16`}
  
`

export default function Home() {
  return (
    <Layout navTo="students">
      <Content>
        <Heading>UA Teachers</Heading>


      </Content>
    </Layout>
    
  )
}
