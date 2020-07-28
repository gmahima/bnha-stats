import styled from 'styled-components'
import tw from 'twin.macro'
import Link from 'next/link'
import Head from 'next/head'
const Content = styled.div`
  ${tw` px-16 flex flex-col justify-center items-center mt-auto`}
  p {
    ${tw`text-sm sm:text-xl text-gray-500`}
  }
`
const Links = styled.div`${tw`mt-16 flex flex-col sm:flex-row`}`
const A = styled.a`
${tw`hover:bg-gray-300 text-gray-600 bg-gray-200 shadow-xl cursor-pointer mx-2 my-1  py-2 px-4 sm:py-4 sm:px-8 `}
`

const Heading = styled.h1`
${tw `text-gray-700 font-semibold text-2xl mb-4 sm:text-4xl sm:font-bold sm:mb-8`}
`
const Container = styled.div `
${tw`
 h-screen flex flex-col justify-center items-center bg-white
`}
`
// const Title = styled.a`
// ${tw`bg-black font-black text-2xl mx-2 my-2 flex items-center px-4 rounded-lg cursor-pointer bg-opacity-25 border-4 shadow-2xl border-yellow-700`}
// `
// const A = styled.a`
// ${tw`capitalize text-lg font-thin mx-8 my-2 flex items-center cursor-pointer  border-yellow-600 border-2 py-1 px-2 self-center rounded`}
// `

const Span=styled.span`
${tw `text-gray-500 text-xs mt-auto`}
`
const Div = styled.div`${tw`bg-black h-screen `}`
export default function Home() {
  return (
    <>
    
    <Container>
      <Head>
        <title>UA Records</title>
      </Head>
      <Content>
      <Heading>UA High:Records</Heading>
      <p>We here at UA train our students to become the best superheroes and save the world</p>
      <Links><Link href="/teachers"><A>Check out Teacher Stats</A></Link><Link href="/students"><A>Check out Student stats</A></Link></Links>
      </Content>
      <Span>data reference: <a href="https://bokunoheroacademia.fandom.com/wiki/Class_1-A">https://bokunoheroacademia.fandom.com/wiki/Class_1-A</a></Span>
    </Container>
    
    </>
    
    
    
  )
}
