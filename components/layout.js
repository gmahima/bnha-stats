import styled from 'styled-components'
import tw from 'twin.macro'
import Link from 'next/link'

const Header = styled.div `
background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='42' height='58' viewBox='0 0 42 58'%3E%3Cg fill='%2367665d' fill-opacity='0.10'%3E%3Cpath fill-rule='evenodd' d='M12 18h12v18h6v4H18V22h-6v-4zm-6-2v-4H0V0h36v6h6v36h-6v4h6v12H6v-6H0V16h6zM34 2H2v8h24v24h8V2zM6 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm8 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm8 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm8 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm0 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm0 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm0 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4zM2 50h32v-8H10V18H2v32zm28-6a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm0-8a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm0-8a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm0-8a2 2 0 1 0 0 4 2 2 0 0 0 0-4z'/%3E%3C/g%3E%3C/svg%3E")
,linear-gradient(110deg, orange, brown);
${tw`
 text-yellow-300  shadow-inner h-16 flex justify-between sm:fixed w-full
`}
`
const Title = styled.a`
${tw`bg-black font-black text-2xl mx-2 my-2 flex items-center px-4 rounded-lg cursor-pointer bg-opacity-25 border-4 shadow-2xl border-yellow-700`}
`
const A = styled.a`
${tw`capitalize text-lg font-thin mx-8 my-2 flex items-center cursor-pointer  border-yellow-600 border-2 py-1 px-2 self-center rounded`}
`
const Container = styled.div`
    ${tw`w-full min-h-screen h-full `}
`

const Layout = (props) => (
    <Container>
        <Header>
            <Link href="/"><Title>UA HIGH</Title></Link>
            <Link href="/"><A>Go To Teachers</A></Link>
        </Header>
        <div>
            {props.children}
        </div>
    </Container>
    
)
export default Layout
