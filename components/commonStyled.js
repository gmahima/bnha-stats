import styled, {css} from 'styled-components'
import tw from 'twin.macro'


const Heading = styled.h1`
 ${tw `text-gray-700 text-3xl sm:text-6xl font-semibold sm:mb-16 sm:border-b-2 mx-2 sm:border-gray-700`}
`
const Content = styled.div`
 ${tw` flex flex-col p-0 `}
`


const ChartWrapper = styled.div`${tw ` bg-white shadow-xl border border-gray-300 rounded-lg  flex flex-col mx-0 my-2 sm:m-4 w-full sm:w-1/3 sm:self-center`}
${props => {
  if(props.champions) {
    return tw`sm:ml-16  shadow-none rounded-none  shadow-sm flex-grow sm:border-gray-400 sm:border-4`
  }
}}


`


const ChartHeading = styled.h1`${tw`font-semibold text-lg text-center p-4 bg-gray-600 text-white rounded-b-lg`}
`

export {ChartWrapper, ChartHeading, Content,  Heading}