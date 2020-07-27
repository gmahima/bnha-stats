import styled, {css} from 'styled-components'
import { Head } from 'next/document'
import tw from 'twin.macro'
import Layout from '../components/layout'
import {students, champions} from '../data/students'
import {
  RadialBarChart, RadialBar, BarChart, Bar, XAxis, YAxis, Legend, Tooltip, ResponsiveContainer,
  Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Label, LabelList
} from 'recharts';


const heightData = [
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
    heightData[0].number++
  }
  else if (h<=150) {
    heightData[1].number++
  }
  else if (h<=160) {
    heightData[2].number++
  }
  else if (h<=170) {
    heightData[3].number++
  }
  else {
    heightData[4].number++
  }
})
// blood data
const bloodData = [
  {
    name: 'A', number: 0, fill:'#7b341e'
  },
  {
    name: 'B', number: 0, fill:'#c05621'
  },
  {
    name: 'AB', number: 0, fill:'#dd6b20'
  },
  {
    name: 'O', number: 0, fill:'#f6ad55'
  }
];

students.forEach(s => {
  const b = s.blood;
  if(b=='a') {
    bloodData[0].number++
  }
  else if (b == 'b') {
    bloodData[1].number++
  }
  else if (b == 'ab') {
    bloodData[2].number++
  }
  else {
    bloodData[3].number++
  }
})

//attack data 
const attackData = [
  {
    name: 'ranged', number: 0, fill:'#c05621'
  },
  {
    name: 'melee', number: 0, fill:'#7b341e'
  },
  {
    name: 'long-ranged', number: 0, fill:'#f6ad55'
  },
  {
    name: 'medium-ranged', number: 0, fill:'#f6ad55'
  },
  {
    name: 'support', number: 0, fill:'#dd6b20'
  },
];
students.forEach(s => {
  const a = s.style;
  if(a.includes('ranged')) {
    attackData[0].number++
  }
  if (a.includes('melee')) {
    attackData[1].number++
  }
  if (a.includes('long-ranged')) {
    attackData[2].number++
  }
  if (a.includes('medium-ranged')){
    attackData[3].number++
  }
  if (a.includes('support')){
    attackData[4].number++
  }
})
const HR = styled.hr`
${tw `my-8`}
`
const Heading = styled.h1`
 ${tw `text-yellow-700 text-3xl sm:text-6xl font-semibold sm:mb-16 border-b-2 mx-2 border-yellow-700`}
`
const Content = styled.div`
 ${tw` flex flex-col p-0`}
`
const Stats = styled.div`
${tw ` flex flex-col sm:flex-row flex-wrap justify-center`}
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
        <HR/>
        <Stats>
        <ChartWrapper>
          
          <ResponsiveContainer  width="100%" height={300} wrapperStyle={{left:2, right:2}}>
            <RadialBarChart width={500} height={300} innerRadius={20} outerRadius={150} barSize={10} data={heightData}>
              <RadialBar label={{ position: 'end', fill: '#000' }} background clockWise dataKey="number" />
              <Legend iconSize={6} width={80} height={100} layout="vertical" verticalAlign="middle" wrapperStyle={style} />
            </RadialBarChart>
          </ResponsiveContainer> 
          <ChartHeading>Student Heights in cm</ChartHeading>
        </ChartWrapper>
        <ChartWrapper>
          
          <ResponsiveContainer  width="100%" height={300} >
            <BarChart width={400} height={300}  data={bloodData} margin={{ top: 30, right: 45, left: 10, bottom: 5 }}  barSize={30}>
              <Bar dataKey="number" ><LabelList dataKey="number" position="top"/></Bar>
              <XAxis dataKey="name" tickLine={false} padding={{ left: 0 }}/>
              <YAxis/>
            </BarChart>

          </ResponsiveContainer> 
          <ChartHeading>Student Blood Group</ChartHeading>
        </ChartWrapper>

        <ChartWrapper >
          <ResponsiveContainer  width="100%" height={300} >
            <BarChart width={700} height={300} data={attackData} barCategoryGap='20%' margin={{ top: 30, right: 0, left: 0, bottom: 5 }}>
              <Bar dataKey="number">
                <LabelList dataKey="number" position="top"/>
              </Bar>
              <XAxis dataKey="name" interval={0} fontSize='12px' tickLine={false}/>
              <YAxis />
            </BarChart>
            
          </ResponsiveContainer> 
          <ChartHeading>Student Attack Styles</ChartHeading>
        </ChartWrapper>
        </Stats>
      </Content>
      
    </Layout>
    
  )
}

