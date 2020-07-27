import styled, {css} from 'styled-components'
import { Head } from 'next/document'
import tw from 'twin.macro'
import Layout from '../components/layout'
import {students, champions} from '../data/students'
import {
  RadialBarChart, RadialBar, Legend, Tooltip, ResponsiveContainer,
  Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Label
} from 'recharts';


const data = [
  {
    name: '< 140', number: 0, fill:'#7b341e'
  },
  {
    name: '140-150', number: 0, fill:'#c05621'
  },
  {
    name: '150-160', number: 0, fill:'#dd6b20'
  },
  {
    name: '160-170', number: 0, fill:'#ed8936'
  },
  {
    name: '170-180', number: 0, fill:'#f6ad55'
  }
];



students.forEach(s => {
  console.log(s.height)
  const h = s.height;
  if(h<140) {
    data[0].number++
  }
  else if (h<=150) {
    data[1].number++
  }
  else if (h<=160) {
    data[2].number++
  }
  else if (h<=170) {
    data[3].number++
  }
  else {
    data[4].number++
  }
})

const Heading = styled.h1`
 ${tw `text-yellow-700 text-3xl sm:text-6xl font-semibold sm:mb-16 border-b-2 mx-2 border-yellow-700`}
`
const Content = styled.div`
 ${tw`border border-red-700 flex flex-col p-0`}
`
const Stats = styled.div`
${tw `border border-pink-400 flex flex-col sm:flex-row flex-wrap justify-around`}
`

const ChartWrapper = styled.div`${tw `border border-2 border-orange-700 shadow-lg rounded-lg  flex flex-col my-2 sm:m-4 w-full sm:w-1/3 sm:self-center`}
${props => {
  if(props.champions) {
    return tw`shadow-2xl sm:w-2/3 sm:ml-16`
  }
}}

`
const ChampionDiv = styled.div`${tw`flex flex-col sm:flex-row justify-center `}`
const ChampionDesc = styled.div`${tw`bg-yellow-400 self-center m-8 rounded-lg p-4 shadow-2xl border text-yellow-600`}
h1 {
  ${tw `text-yellow-700 text-3xl font-bold `}
}
h2 {
  ${tw `text-yellow-700 font-semibold text-lg`}
}
p {
  ${tw `text-sm`}
}
div {
  ${tw `mb-4 flex flex-wrap`}
}
span {
  ${tw `rounded bg-yellow-700 text-yellow-200 p-1 mr-2 shadow-sm text-xs` }
}
`

const ChartHeading = styled.h1`${tw`font-semibold text-lg text-center p-4 bg-orange-700 text-white`}
${props => {
  if(props.champions) {
    return `background-image: linear-gradient(to bottom right, orange, yellow); color:black`
  }
}}
`
const style = {
  top: 10,
  right: 5,
  lineHeight: '15px',
  fontSize: '12px',
  background: '#eee',
  padding: 5

};

export default function Home() {
  return (
    <Layout navTo="teachers">
      <Content>
        <Heading>UA Students</Heading>
        <ChampionDiv>
        <ChartWrapper champions>
          <ResponsiveContainer  width="100%" height={400} wrapperStyle={{left:2, right:2}}>
          <RadarChart width={500} height={300} data={champions.stats} outerRadius={120}>
          <PolarGrid stroke="#b7791f"/>
          <PolarAngleAxis dataKey="field" tick={{fontSize: '10px', fontWeight: 'bold'}} />
          <Radar name="#3 Tokoyami Fumikage" dataKey="third" stroke="#ecc94b" fill="#ecc94b" fillOpacity={0.6}/>
          <Radar name="#2 Todoroki Shouto" dataKey="second" stroke="#d69e2e" fill="#d69e2e" fillOpacity={0.6}/>
          <Radar name="#1 Bakugo Katsuki" dataKey="first" stroke="#744210" fill="#744210" fillOpacity={0.6}/>
          <Legend wrapperStyle={{fontSize: '12px', fontWeight:'bold', backgroundColor: ' #edf2f7', padding: 5}}/>
          <Tooltip wrapperStyle={{fontSize: '3px', fontWeight: 'bold',height:20, opacity:0.9}}/>
          
        </RadarChart>
          </ResponsiveContainer> 
          <ChartHeading champions>Sports Festival Champions</ChartHeading>
        </ChartWrapper>
        <ChampionDesc><h1>The UA sports festival</h1>
        <h2>Winners</h2>
                      <div>
                      
                      <span>1. Bakugo Katsuki</span>
                      <span>2. Todoroki Shoto</span>
                      <span>3. Tokoyami Fumikage</span>
                      </div>
        <p>The massive event had millions of people awestruck this year as well! Our students fought with all their might and showed people around the world that no villain could stand up against them</p>
        <p>This year's winners were awarded by the no.1 Hero All Might himself! </p>
                      
        </ChampionDesc>
        </ChampionDiv>
        <Stats>
        <ChartWrapper>
          
          <ResponsiveContainer  width="100%" height={300} wrapperStyle={{left:2, right:2}}>
            <RadialBarChart width={500} height={300} innerRadius={20} outerRadius={150} barSize={10} data={data}>
              <RadialBar label={{ position: 'end', fill: '#000' }} background clockWise dataKey="number" />
              <Legend iconSize={6} width={80} height={100} layout="vertical" verticalAlign="middle" wrapperStyle={style} />
            </RadialBarChart>
          </ResponsiveContainer> 
          <ChartHeading>Student Heights in cm</ChartHeading>
        </ChartWrapper>
        <ChartWrapper>
          
          <ResponsiveContainer  width="100%" height={300} wrapperStyle={{left:2, right:2}}>
            <RadialBarChart width={500} height={300} innerRadius={20} outerRadius={150} barSize={10} data={data}>
              <RadialBar label={{ position: 'end', fill: '#000' }} background clockWise dataKey="number" />
              <Legend iconSize={6} width={80} height={100} layout="vertical" verticalAlign="middle" wrapperStyle={style} />
            </RadialBarChart>
          </ResponsiveContainer> 
          <ChartHeading>Student Heights in cm</ChartHeading>
        </ChartWrapper>
        </Stats>
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
