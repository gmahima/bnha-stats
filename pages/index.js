import styled from 'styled-components'
import tw from 'twin.macro'
import Link from 'next/link'
import Head from 'next/head'
const Content = styled.div`
  ${tw` px-16 flex flex-col justify-center items-center bg-opacity-75  `}
  p {
    ${tw`text-sm sm:text-xl text-orange-200`}
  }
`
const Links = styled.div`${tw`mt-16 flex flex-col sm:flex-row`}`
const A = styled.a`
${tw`text-yellow-200 bg-yellow-400 hover:shadow-sm shadow-lg bg-opacity-25 cursor-pointer mx-4 my-1 rounded-lg py-2 px-4 sm:py-4 sm:px-8 `}
`

const Heading = styled.h1`
${tw `font-semibold text-2xl mb-4 sm:text-4xl sm:font-bold sm:mb-8`}
`
const Container = styled.div `
background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='42' height='58' viewBox='0 0 42 58'%3E%3Cg fill='%2367665d' fill-opacity='0.10'%3E%3Cpath fill-rule='evenodd' d='M12 18h12v18h6v4H18V22h-6v-4zm-6-2v-4H0V0h36v6h6v36h-6v4h6v12H6v-6H0V16h6zM34 2H2v8h24v24h8V2zM6 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm8 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm8 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm8 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm0 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm0 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm0 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4zM2 50h32v-8H10V18H2v32zm28-6a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm0-8a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm0-8a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm0-8a2 2 0 1 0 0 4 2 2 0 0 0 0-4z'/%3E%3C/g%3E%3C/svg%3E")
,linear-gradient(110deg, #ed8936, #7b341e);
${tw`
 text-yellow-300 h-screen flex flex-col justify-center items-center 
`}
`
// const Title = styled.a`
// ${tw`bg-black font-black text-2xl mx-2 my-2 flex items-center px-4 rounded-lg cursor-pointer bg-opacity-25 border-4 shadow-2xl border-yellow-700`}
// `
// const A = styled.a`
// ${tw`capitalize text-lg font-thin mx-8 my-2 flex items-center cursor-pointer  border-yellow-600 border-2 py-1 px-2 self-center rounded`}
// `

const Span=styled.span`
width: 400px;
height: 20px;
${tw `text-gray-700 absolute bottom-0 left-0 bg-gray-400 p-1 text-xs`}
`

export default function Home() {
  return (
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
    
    
    
  )
}
