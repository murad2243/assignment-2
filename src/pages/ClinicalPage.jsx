import React from 'react'
import Sidebar from '../components/Sidebar'
import styled from 'styled-components'
import { NavLink, Routes, Route } from 'react-router-dom'
import UpcomingTask from '../components/UpcomingTask'
import CompletedTask from '../components/CompletedTask'
function ClinicalPage() {
  return (
    <DIV>
        <Sidebar />
        <div className='main-container'>
            <div style={{padding:"20px"}}>
                <h2>Tasks</h2>
                <p style={{fontSize:"smaller", color:"#7E7E7E"}}>Clinical > Tasks</p>
            </div>
            <nav style={{paddingLeft:"20px"}} id='sidebar'>
                <NavLink
                 to="/"
                 className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "active" : ""
             }
            >
                Upcoming Task
                </NavLink>
                <NavLink
                 to="/completed"
                 className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "active" : ""
             }
            >
                Completed Tasks
                </NavLink>

            </nav>
            <div className='data-div'>

            <Routes >
                <Route path="/" element= {<UpcomingTask/>} />
                <Route path="/completed" element= {<CompletedTask/>} />
            </Routes>
            </div>

        </div>

    </DIV>
  )
}
const DIV = styled.div`

    display: flex;
    width: 100%;
    .main-container{
        /* padding: 20px; */
        width: 100%;
    }
    /* .main-container  p{
        color: #7E7E7E;
    } */
    #sidebar a.active {
        color: #04095A;
        border-bottom: #04095A solid 2px;
        padding-bottom: 10px;

    }
    #sidebar > a {
        color: #7E7E7E;
        margin-right: 20px ;
        font-weight: 600;
        font-size: small;
        text-decoration: none;
    }
    #sidebar{
        margin-bottom: 20px;
        margin-top: 20px;
    }
    .data-div{
        background-color: #f4f4f4;
        padding: 20px;
    }
`
export default ClinicalPage