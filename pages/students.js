import styled from 'styled-components'
import { Head } from 'next/document'
import tw from 'twin.macro'
import Layout from '../components/layout'
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Label, RadialBarChart, RadialBar, Legend
} from 'recharts';


const data = [
  {
    name: '120-130', number: 2
  },
  {
    name: '130-140', number: 5
  },
  {
    name: '140-150', number: 3
  },
  {
    name: '150-160', number: 2
  },
  {
    name: '160-170', number: 1
  },
  {
    name: '170-180', number: 1
  }
];

const Heading = styled.h1`
 ${tw `text-black text-6xl font-semibold`}
`
const Content = styled.div`
 ${tw`border border-red-700 flex flex-col`}
`
const StyledArea = styled(AreaChart).attrs(() => ({height: 400, width:600})) `
 ${tw`border self-center m-4 w-1/2 flex justify-center items-center p-12`}
`
const SRadialBarChart = styled(RadialBarChart)`${tw `border`}`
const CustomizedLabel = ({children}) => (
  <text fontSize={10} textAnchor="middle">{children}</text>
)
const style = {
  top: 0,
  left: 350,
  lineHeight: '24px',
};

export default function Home() {
  return (
    <Layout navTo="teachers">
      <Content>
        <Heading>student-stats</Heading>
        <SRadialBarChart width={500} height={300} cx={150} cy={150} innerRadius={20} outerRadius={150} barSize={30} data={data}>
          <RadialBar minAngle={15} label={{ position: 'end', fill: '#999' }} background clockWise dataKey="number" />
          <Legend iconSize={10} width={120} height={140} layout="vertical" verticalAlign="middle" wrapperStyle={style} />
        </SRadialBarChart>
        {/* <StyledArea

          data={data}
          margin={{
            top: 10, right: 30, left: 0, bottom: 0
          }}
        >
          <CartesianGrid vertical={false} />
          <XAxis dataKey="name" type="number" tickCount={6} domain={[130,180]} interval={0}>
            <Label value="Height in cm" position="bottom" offset={0}/>
          </XAxis>
          <YAxis label={{ value: 'Number of students', angle: -90, position: 'insideLeft'}}>
          </YAxis>
          <Tooltip/>
          <Area type="monotone" dataKey="number" stroke="#d69e2e" fill="#f6e05e" isAnimationActive />
        </StyledArea> */}


      </Content>
      
    </Layout>
    
  )
}


// import Head from 'next/head'

// export default function Home() {
//   return (
//     <div className="container">
//       <Head>
//         <title>Create Next App</title>
//         <link rel="icon" href="/favicon.ico" />
//       </Head>

//       <main>
//         <h1 className="title">
//           Welcome to <a href="https://nextjs.org">Next.js!</a>
//         </h1>

//         <p className="description">
//           Get started by editing <code>pages/index.js</code>
//         </p>

//         <div className="grid">
//           <a href="https://nextjs.org/docs" className="card">
//             <h3>Documentation &rarr;</h3>
//             <p>Find in-depth information about Next.js features and API.</p>
//           </a>

//           <a href="https://nextjs.org/learn" className="card">
//             <h3>Learn &rarr;</h3>
//             <p>Learn about Next.js in an interactive course with quizzes!</p>
//           </a>

//           <a
//             href="https://github.com/vercel/next.js/tree/master/examples"
//             className="card"
//           >
//             <h3>Examples &rarr;</h3>
//             <p>Discover and deploy boilerplate example Next.js projects.</p>
//           </a>

//           <a
//             href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
//             className="card"
//           >
//             <h3>Deploy &rarr;</h3>
//             <p>
//               Instantly deploy your Next.js site to a public URL with Vercel.
//             </p>
//           </a>
//         </div>
//       </main>

//       <footer>
//         <a
//           href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Powered by{' '}
//           <img src="/vercel.svg" alt="Vercel Logo" className="logo" />
//         </a>
//       </footer>

//       <style jsx>{`
//         .container {
//           min-height: 100vh;
//           padding: 0 0.5rem;
//           display: flex;
//           flex-direction: column;
//           justify-content: center;
//           align-items: center;
//         }

//         main {
//           padding: 5rem 0;
//           flex: 1;
//           display: flex;
//           flex-direction: column;
//           justify-content: center;
//           align-items: center;
//         }

//         footer {
//           width: 100%;
//           height: 100px;
//           border-top: 1px solid #eaeaea;
//           display: flex;
//           justify-content: center;
//           align-items: center;
//         }

//         footer img {
//           margin-left: 0.5rem;
//         }

//         footer a {
//           display: flex;
//           justify-content: center;
//           align-items: center;
//         }

//         a {
//           color: inherit;
//           text-decoration: none;
//         }

//         .title a {
//           color: #0070f3;
//           text-decoration: none;
//         }

//         .title a:hover,
//         .title a:focus,
//         .title a:active {
//           text-decoration: underline;
//         }

//         .title {
//           margin: 0;
//           line-height: 1.15;
//           font-size: 4rem;
//         }

//         .title,
//         .description {
//           text-align: center;
//         }

//         .description {
//           line-height: 1.5;
//           font-size: 1.5rem;
//         }

//         code {
//           background: #fafafa;
//           border-radius: 5px;
//           padding: 0.75rem;
//           font-size: 1.1rem;
//           font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
//             DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
//         }

//         .grid {
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           flex-wrap: wrap;

//           max-width: 800px;
//           margin-top: 3rem;
//         }

//         .card {
//           margin: 1rem;
//           flex-basis: 45%;
//           padding: 1.5rem;
//           text-align: left;
//           color: inherit;
//           text-decoration: none;
//           border: 1px solid #eaeaea;
//           border-radius: 10px;
//           transition: color 0.15s ease, border-color 0.15s ease;
//         }

//         .card:hover,
//         .card:focus,
//         .card:active {
//           color: #0070f3;
//           border-color: #0070f3;
//         }

//         .card h3 {
//           margin: 0 0 1rem 0;
//           font-size: 1.5rem;
//         }

//         .card p {
//           margin: 0;
//           font-size: 1.25rem;
//           line-height: 1.5;
//         }

//         .logo {
//           height: 1em;
//         }

//         @media (max-width: 600px) {
//           .grid {
//             width: 100%;
//             flex-direction: column;
//           }
//         }
//       `}</style>

//       <style jsx global>{`
//         html,
//         body {
//           padding: 0;
//           margin: 0;
//           font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
//             Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
//             sans-serif;
//         }

//         * {
//           box-sizing: border-box;
//         }
//       `}</style>
//     </div>
//   )
// }
