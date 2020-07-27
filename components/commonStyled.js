import styled, {css} from 'styled-components'
import tw from 'twin.macro'


const Heading = styled.h1`
 ${tw `text-yellow-700 text-3xl sm:text-6xl font-semibold sm:mb-16 border-b-2 mx-2 border-yellow-700`}
`
const Content = styled.div`
 ${tw` flex flex-col p-0 `}
`


const ChartWrapper = styled.div`${tw ` bg-white shadow-xl border border-gray-300 rounded-lg  flex flex-col my-2 sm:m-4 w-full sm:w-1/3 sm:self-center`}
${props => {
  if(props.champions) {
    return tw`shadow-2xl sm:w-2/3 sm:ml-16  border-yellow-700 border border-2`
  }
}}


`


const ChartHeading = styled.h1`${tw`font-semibold text-lg text-center p-4 bg-orange-600 text-white rounded-b-lg`}
${props => {
  if(props.champions) {
    return `background-image: linear-gradient(to bottom right, orange, yellow)`
  }
}}
`

export {ChartWrapper, ChartHeading, Content,  Heading}