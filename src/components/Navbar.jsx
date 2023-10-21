import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'



function Navbar() {
  return (
    
    <DIV>
        <div className='navbar'>

        
        <h1>LOGO</h1>
        <div className='nav-option'>
            <Link>Dashboard</Link>
            <Link>Patients</Link>
            <Link>Human Resources</Link>
            <p className='selected-option'>Clinical</p>
            <Link>Compliance</Link>
            <Link>Billing</Link>
            <Link>Reports</Link>
        </div>
        <div className='profile-section'>
            <div className='clock'>
            <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
             <path d="M7.94702 13.2818L11.228 10.0007L7.94702 6.71875" stroke="#04095A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
             <path d="M2.47913 10H11.2268" stroke="#04095A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
             <path d="M11.2269 3.125H15.6008C15.7665 3.125 15.9254 3.19085 16.0426 3.30806C16.1598 3.42527 16.2256 3.58424 16.2256 3.75V16.25C16.2256 16.4158 16.1598 16.5747 16.0426 16.6919C15.9254 16.8092 15.7665 16.875 15.6008 16.875H11.2269" stroke="#04095A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <p>Clocked-In</p>

            </div>
            <svg className='nav-icons' xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
  <path d="M12.5602 21C17.5294 21 21.5578 16.9706 21.5578 12C21.5578 7.02944 17.5294 3 12.5602 3C7.59089 3 3.5625 7.02944 3.5625 12C3.5625 16.9706 7.59089 21 12.5602 21Z" stroke="#7E7E7E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M12.5604 18C13.1817 18 13.6854 17.4963 13.6854 16.875C13.6854 16.2537 13.1817 15.75 12.5604 15.75C11.9391 15.75 11.4354 16.2537 11.4354 16.875C11.4354 17.4963 11.9391 18 12.5604 18Z" fill="#7E7E7E"/>
  <path d="M12.5601 13.5V12.75C13.0791 12.75 13.5865 12.5961 14.0181 12.3076C14.4497 12.0192 14.786 11.6092 14.9847 11.1295C15.1833 10.6499 15.2353 10.1221 15.134 9.61289C15.0327 9.10369 14.7828 8.63596 14.4158 8.26885C14.0488 7.90173 13.5812 7.65173 13.0721 7.55044C12.563 7.44915 12.0354 7.50114 11.5558 7.69982C11.0763 7.8985 10.6664 8.23495 10.3781 8.66663C10.0897 9.09831 9.93579 9.60583 9.93579 10.125" stroke="#7E7E7E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
<svg className='nav-icons' xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
  <path d="M5.81835 9.75072C5.81459 8.86073 5.98729 7.97884 6.32646 7.15605C6.66562 6.33326 7.16453 5.5859 7.79432 4.95721C8.4241 4.32853 9.17226 3.83099 9.99552 3.49339C10.8188 3.15578 11.7008 2.98481 12.5905 2.99037C13.4803 2.99592 14.3601 3.17788 15.1791 3.52574C15.998 3.87359 16.7399 4.38043 17.3618 5.01693C17.9837 5.65342 18.4733 6.40695 18.8022 7.23391C19.131 8.06087 19.2927 8.94485 19.2778 9.83472V10.5017C19.1545 12.7057 19.6102 14.9035 20.5995 16.8767C20.6652 16.9906 20.6999 17.1198 20.7 17.2513C20.7 17.3829 20.6655 17.5121 20.5999 17.6261C20.5343 17.74 20.4398 17.8347 20.326 17.9007C20.2123 17.9666 20.0832 18.0014 19.9517 18.0017H5.14353C5.01212 18.0013 4.88314 17.9663 4.76951 17.9003C4.65587 17.8343 4.56158 17.7396 4.49606 17.6256C4.43055 17.5117 4.39613 17.3825 4.39624 17.2511C4.39635 17.1196 4.43099 16.9905 4.4967 16.8767C5.48603 14.9035 5.94169 12.7057 5.81835 10.5017V9.75072Z" stroke="#7E7E7E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M9.54822 18V18.75C9.54822 19.5456 9.8642 20.3087 10.4267 20.8713C10.9891 21.4339 11.752 21.75 12.5474 21.75C13.3429 21.75 14.1057 21.4339 14.6682 20.8713C15.2307 20.3087 15.5467 19.5456 15.5467 18.75V18" stroke="#7E7E7E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

<div className='user-name'>
    MA
</div>


    <p className='nav-icons'>Account</p>

        </div>
        </div>
    </DIV>
  )
}

export default Navbar

const DIV = styled.div`
    .navbar{
        display: flex;
        padding: 10px 10px 0 10px;
        box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
        justify-content: space-between;
    }
    .profile-section{
        display: flex;
        gap: 10px;
    }
    button{
  cursor: pointer;
}
    .user-name{
        font-size: small;
        font-weight: 600;
        border: 1px solid #00E9D1;
        border-radius: 50%;
        padding: 8px 5px;
        margin-top: -8px;
        display: flex;
        background-color: #e5fdfb;
        justify-content: center;
        align-self: center;
    }
    .nav-option{
        display: flex;
        gap: 20px;
        margin: 10px;
    }
    .nav-option > a{
        color: #7E7E7E;
font-family: Outfit;
font-size: 16px;
/* font-weight: 400; */
        text-decoration: none;
    }
    

    .selected-option {
        /* font-weight: 600; */
        text-decoration: 1px solid  #04095A;
        color: #04095A;
        padding-bottom: 20px;
        margin-bottom: -10px;
        border-bottom: 2px #04095A solid;
    }
    .clock{
        border: 1px solid #04095A;
        /* line-height: 0px; */
        height: fit-content;
        padding: 8px;
        margin-top: 3px;
        display: flex;
        border-radius: 8px;

    }
    .nav-icons{
        margin-top: 10px;
    }
`