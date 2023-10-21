import React from 'react'
import styled from 'styled-components'
import lady from "../assets/old-lady.jpg"
function CompletedTask() {
  return (
    <DIV>

    <div>
        <div className='navbar-p'>

      
        <div className='sub-nav'>
            <div className='search-bar'>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M10.875 18.75C15.2242 18.75 18.75 15.2242 18.75 10.875C18.75 6.52576 15.2242 3 10.875 3C6.52576 3 3 6.52576 3 10.875C3 15.2242 6.52576 18.75 10.875 18.75Z" stroke="#7E7E7E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M16.4453 16.4453L21.0013 21.0013" stroke="#7E7E7E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
<input type="text" placeholder='Search' />
            </div>
            <div className='search-bar'>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M19 4H5C3.89543 4 3 4.89543 3 6V20C3 21.1046 3.89543 22 5 22H19C20.1046 22 21 21.1046 21 20V6C21 4.89543 20.1046 4 19 4Z" stroke="#04095A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M16 2V6M8 2V6M3 10H21M8 14H8.01M12 14H12.01M16 14H16.01M8 18H8.01M12 18H12.01M16 18H16.01" stroke="#04095A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
<input type="date" />
            </div>
            <p style={{lineHeight:"40px"}}>To</p>
            <div className='search-bar'>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M19 4H5C3.89543 4 3 4.89543 3 6V20C3 21.1046 3.89543 22 5 22H19C20.1046 22 21 21.1046 21 20V6C21 4.89543 20.1046 4 19 4Z" stroke="#04095A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M16 2V6M8 2V6M3 10H21M8 14H8.01M12 14H12.01M16 14H16.01M8 18H8.01M12 18H12.01M16 18H16.01" stroke="#04095A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
<input type="date" />
            </div>
        <button className='apply-btn'>Apply</button>
        <button className='reset-btn'>Reset</button>
        
        </div>  

            <button className='filter-btn'>
            <svg xmlns="http://www.w3.org/2000/svg" width="13" height="11" viewBox="0 0 13 11" fill="none">
  <path d="M7.36667 6.18324V10.956H4.7V6.18324L0 0.046875H12.0667L7.36667 6.18324ZM6.03333 5.70597L9.33333 1.41051H2.73333L6.03333 5.70597Z" fill="#04095A"/>
</svg>
Filter
            </button>

        </div>
        <div className='clintes'>
            <div className='client-div'>
                <img src={lady} alt="" />
                <div>
                    <div className='info-div'>
                        <div>
                            <h3>Malenie Laurent</h3>
                            <p>Appontment id: 324424</p>
                            <div className='blue-text'>Intake Comprehensive Assessment</div>
                        </div>
                        <div>
                            <p>Task ID:</p>
                            <p>Date :</p>
                            <p>Duration:</p>
                        </div>
                        <div style={{color:"black"}}>
                            <div>2323232</div>
                            <div>December 22, 2022  10:30 AM</div>
                            <div>1 hour</div>
                        </div>
                    </div>
                    <div>
                        
                        <button className='assessment-btn'>View Assessment</button>
                    </div>
                </div>
            </div>
            <div className='client-div'>
                <img src={lady} alt="" />
                <div>
                    <div className='info-div'>
                        <div>
                            <h3>Malenie Laurent</h3>
                            <p>Appontment id: 324424</p>
                            <div className='blue-text'>Physiotherapy Appointment</div>
                        </div>
                        <div>
                            <p>Task ID:</p>
                            <p>Date :</p>
                            <p>Duration:</p>
                        </div>
                        <div style={{color:"black"}}>
                            <div>2323232</div>
                            <div>December 22, 2022  10:30 AM</div>
                            <div>1 hour</div>
                        </div>
                    </div>
                    <div>
                        
                        <button className='assessment-btn'>View Assessment</button>
                    </div>
                </div>
            </div>
            <div className='client-div'>
                <img src={lady} alt="" />
                <div>
                    <div className='info-div'>
                        <div>
                            <h3>Malenie Laurent</h3>
                            <p>Appontment id: 324424</p>
                            <div className='blue-text'>Intake Comprehensive Assessment</div>
                        </div>
                        <div>
                            <p>Task ID:</p>
                            <p>Date :</p>
                            <p>Duration:</p>
                        </div>
                        <div style={{color:"black"}}>
                            <div>2323232</div>
                            <div>December 22, 2022  10:30 AM</div>
                            <div>1 hour</div>
                        </div>
                    </div>
                    <div>
                        
                        <button className='assessment-btn'>View Assessment</button>
                    </div>
                </div>
            </div>
            <div className='client-div'>
                <img src={lady} alt="" />
                <div>
                    <div className='info-div'>
                        <div>
                            <h3>Malenie Laurent</h3>
                            <p>Appontment id: 324424</p>
                            <div className='blue-text'>Intake Comprehensive Assessment</div>
                        </div>
                        <div>
                            <p>Task ID:</p>
                            <p>Date :</p>
                            <p>Duration:</p>
                        </div>
                        <div style={{color:"black"}}>
                            <div>2323232</div>
                            <div>December 22, 2022  10:30 AM</div>
                            <div>1 hour</div>
                        </div>
                    </div>
                    <div>
                        
                        <button className='assessment-btn'>View Assessment</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </DIV>
  )
}

const DIV = styled.div`

    background-color: white;
    padding: 10px;

.sub-nav{
    display: flex;
    gap: 10px;
}
.navbar-p{
    display: flex;
    /* border: 1px solid black; */
    justify-content: space-between;
    width: 100%;
    /* gap: 100px; */
}
    .search-bar{
        display: flex;
        border: 1px solid #CECECE;
        color: #CECECE;
        padding: 3px;
        border-radius: 10px;
    }
    .search-bar > input{
        border: none;
        margin-top: -2px ;
        /* height: 25px; */
        margin-left: 10px;
        /* font-size: large; */
    }
    input:focus {
  border: none;
  outline: none;
}
input[type="date"]::-webkit-inner-spin-button,
input[type="date"]::-webkit-calendar-picker-indicator {
    display: none;
    -webkit-appearance: none;
}
.apply-btn{
    border-radius: 20px;
background: #04095A;
color: #FFF;
border: none;
padding: 5px 25px;
}
.reset-btn{
    border-radius: 20px;
color:  #377BFF;
border: 1px solid  #377BFF;
padding: 5px 25px;
}
.filter-btn{
    padding: 5px 20px;
    border: solid #04095A 1px;
    color: #04095A;
    border-radius: 10px;
}
    .client-div{
        display: flex;
        width: 100%;
        gap: 10px;
        box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
        padding: 5px;
        border-radius: 5px;
        margin-top: 5px;
    }
    .client-div > div {
        display: flex;
        margin-top: 5px;
        width: 100%;
        justify-content: space-between;
    }
    .client-div > img{
        height: 75px;
        width: 80px;
        border-radius: 50%;
        /* overflow: hidden; */
    }
    .blue-text{
        color: #377BFFE5;
        margin-top: 25px;
        font-size: small;
    }
    .clintes{
        margin-top: 10px;
        display: grid;
        gap: 10px;
    }
    .info-div{
        display: flex;
        gap: 20px;
        font-size: small;
    }
    .info-div  p {
        color: #7E7E7E
    }
    .assessment-btn{
        padding: 10px;
        font-size: small;
        margin-top: 30px;
        border-radius: 6px;
background: #04095A;
        color: white;
        border: none;
        cursor: pointer;
    }
`
export default CompletedTask
