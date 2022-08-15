import React, { useState, useEffect } from 'react'
import { FaAngleDoubleRight } from 'react-icons/fa'

const url = 'https://course-api.com/react-tabs-project'
function App() {
  const [loading,setLoading] =useState(true)
  const [tabs,setTabs] =useState([])
  const [value,setValue]= useState(0)
  const getData = async()=>{
    const response = await fetch(url)
    const data = await response.json()
    setTabs(data)
    setLoading(false)
  }
  useEffect(()=>{
    getData()
  },[])
  console.table(tabs);
  if(loading){
    return(<section className='section loading'> 
    <h1>Loading...</h1></section>)
  }
  const { company, dates, duties, title } = tabs[value];
  return(
    <section className="section">
      <div className="title">
        <h2>experience</h2>
        <div className="underline"></div>
        </div>
        <div className="jobs-center">
          <div className="btn-container">
            {tabs.map((item,index)=>{
              return <button className={`job-btn ${index === value && 'active-btn'}`} key={item.id} onClick={()=>{setValue(index)}}>{item.company}</button>
            })}
          </div>
        <article className="job-info">
          <h3>{title}</h3>
          <h4>{company}</h4>
          <p className="job-date">{dates}</p>
          {duties.map((duty,index)=>{
            return (<div className="job-desc" key={index}>
              <FaAngleDoubleRight className='job-icon'/>
              <p>{duty}</p>
            </div>
            )
          })}
        </article>
        </div>
  
    </section>
  )
}

export default App
