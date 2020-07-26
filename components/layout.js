import styled from 'styled-components'
import tw from 'twin.macro'
import Link from 'next/link'
import Head from 'next/head'
const Header = styled.div `
background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='42' height='58' viewBox='0 0 42 58'%3E%3Cg fill='%2367665d' fill-opacity='0.10'%3E%3Cpath fill-rule='evenodd' d='M12 18h12v18h6v4H18V22h-6v-4zm-6-2v-4H0V0h36v6h6v36h-6v4h6v12H6v-6H0V16h6zM34 2H2v8h24v24h8V2zM6 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm8 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm8 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm8 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm0 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm0 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm0 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4zM2 50h32v-8H10V18H2v32zm28-6a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm0-8a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm0-8a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm0-8a2 2 0 1 0 0 4 2 2 0 0 0 0-4z'/%3E%3C/g%3E%3C/svg%3E")
,linear-gradient(110deg, #ed8936, #7b341e);
${tw`
 text-yellow-300  shadow-inner h-10 flex justify-between sm:fixed w-full
`}
`
const Title = styled.a`
${tw`font-semibold sm:text-xl  flex items-center sm:px-4 rounded-r cursor-pointer sm:mx-16`}
`
const A = styled.a`
${tw`capitalize text-sm font-thin flex items-center cursor-pointer  border-yellow-600 border-l-2 py-2 px-2 self-center rounded hover:bg-yellow-700`}
`
const Container = styled.div`
    ${tw`w-full min-h-screen h-full bg-white flex flex-col`}
`
const Div = styled.div`
    ${tw`mt-16 border mx-8 text-left`}
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
