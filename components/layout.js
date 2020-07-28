import styled from 'styled-components'
import tw from 'twin.macro'
import Link from 'next/link'
import Head from 'next/head'
const Header = styled.div `
${tw`
 shadow-inner h-10 flex justify-between sm:fixed w-full z-50 bg-gray-200
`}
`
const Title = styled.a`
${tw`ml-2 font-semibold sm:text-xl  flex items-center sm:px-4 cursor-pointer sm:mx-16 text-gray-700 `}
`
const A = styled.a`
${tw`capitalize text-sm font-thin flex items-center cursor-pointer  border-gray-600 border-l-2 py-2 px-2 self-center hover:bg-gray-300 text-gray-700`}
`
const Container = styled.div`
    ${tw`w-full min-h-screen h-full flex flex-col `}
`
const Div = styled.div`
    ${tw`mt-16 mx-8 text-left`}
`

const Layout = (props) => (
    <Container>
        <Head>
        <title>UA Records</title>
      </Head>
        <Header>
            <Link href={`/`}><Title>UA Records</Title></Link>
            <Link href={`/${props.navTo}`}><A>{`Go To ${props.navTo}`}</A></Link>
        </Header>
        

        <Div>
            {props.children}
        </Div>
    </Container>
    
)
export default Layout
