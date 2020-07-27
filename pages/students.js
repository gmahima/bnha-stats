import styled, {css} from 'styled-components'
import { Head } from 'next/document'
import tw from 'twin.macro'
import Layout from '../components/layout'
import {students, champions} from '../data/students'
import {
  RadialBarChart, RadialBar, BarChart, Bar, XAxis, YAxis, Legend, Tooltip, ResponsiveContainer,
  Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Label, LabelList,PieChart, Pie, Sector, Cell
} from 'recharts';
import {ChartWrapper, ChartHeading, Content,  Heading} from '../components/commonStyled'

const Stats = styled.div`
${tw ` flex flex-col sm:flex-row flex-wrap justify-center`}
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
  ${tw `mb-4 flex flex-wrap sm:flex-row flex-col`}
}
span {
  ${tw `rounded bg-yellow-700 text-yellow-200 p-1 mr-2 shadow-sm text-xs mb-2 sm:mb-0` }
}
`
const HR = styled.hr`
${tw `my-8`}
`
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
let championNames = []
champions.ids.forEach(c => {
  students.forEach(s => {
    if(s.id === c) {
      championNames.push(s.name)
      console.log(championNames)
    }
  })
});

const style = {
  lineHeight: '15px',
  fontSize: '8px',
  fontWeight: 'bold'

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
          <Radar name={'#3 '+championNames[2]} dataKey="third" stroke="#ecc94b" fill="#ecc94b" fillOpacity={0.6}/>
          <Radar name={"#2 "+championNames[1]} dataKey="second" stroke="#d69e2e" fill="#d69e2e" fillOpacity={0.6}/>
          <Radar name={"#1 "+championNames[0]} dataKey="first" stroke="#744210" fill="#744210" fillOpacity={0.6}/>
          <Legend wrapperStyle={{fontSize: '12px', fontWeight:'bold', padding: 5}}/>
          <Tooltip wrapperStyle={{fontSize: '3px', fontWeight: 'bold',height:20, opacity:0.9}}/>
          
        </RadarChart>
          </ResponsiveContainer> 
          <ChartHeading champions>Sports Festival Champions</ChartHeading>
        </ChartWrapper>
        <ChampionDesc><h1>The UA sports festival</h1>
        <h2>Winners</h2>
                      <div>
                      
                      <span>1. {championNames[0]}</span>
                      <span>2. {championNames[1]}</span>
                      <span>3. {championNames[2]}</span>
                      </div>
        <p>The massive event had millions of people awestruck this year as well! Our students fought with all their might and showed people around the world that no villain could stand up against them</p>
        <p>This year's winners were awarded by the no.1 Hero All Might himself! </p>
                      
        </ChampionDesc>
        </ChampionDiv>
        <HR/>
        <Stats>
        <ChartWrapper>
          
          <ResponsiveContainer  width="100%" height={300} wrapperStyle={{left:2, right:2}}>
            <RadialBarChart width={500} height={300} innerRadius={20} outerRadius={130} barSize={10} data={heightData}>
              <RadialBar label={{ position: 'end', fill: '#000',  fontSize: '12px', fontWeight: 'bold'}} background clockWise dataKey="number" />
              <Legend iconSize={6} layout="horizontal" wrapperStyle={style} />
            </RadialBarChart>
          </ResponsiveContainer> 
          <ChartHeading>Student Heights in cm</ChartHeading>
        </ChartWrapper>
        <ChartWrapper>
          
          <ResponsiveContainer  width="100%" height={300} wrapperStyle={{left:2, right:2}}>
           
            <PieChart width={500} height={300}>
              <Legend wrapperStyle={{fontSize: 12, fontWeight: "bold"}}/>
              <Pie data={bloodData} dataKey="number" nameKey="name" cx="50%" cy="50%" outerRadius={100} fill="#8884d8" label={{fontWeight: 'bold', fontSize: '12px'}} labelLine={false}/>

            </PieChart>

          </ResponsiveContainer> 
          <ChartHeading>Student Blood Group</ChartHeading>
        </ChartWrapper>

        <ChartWrapper >
          <ResponsiveContainer  width="100%" height={300} >
            <BarChart width={700} height={300} data={attackData} barCategoryGap='20%' margin={{ top: 30, right: 0, left: 0, bottom: 20 }}>
              <Bar dataKey="number">
                <LabelList dataKey="number" position="top"/>
              </Bar>
              <XAxis dataKey="name" interval={0} fontSize='12px' tickLine={false} angle={-20} textAnchor="end"/>
              <YAxis />
            </BarChart>
            
          </ResponsiveContainer> 
          <ChartHeading>Student Combat Styles</ChartHeading>
        </ChartWrapper>
        </Stats>
      </Content>
      
    </Layout>
    
  )
}

