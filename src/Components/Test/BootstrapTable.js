import React from 'react'

function BootstrapTable() {
  return (
    <div><table class="table table-dark">
    <thead>
      <tr>
        <th scope="col">Team</th>
        <th scope="col">Played</th>
        <th scope="col">Won</th>
        <th scope="col">Lost</th>
        <th scope="col">N/R</th>
        <th scope="col">NET RR</th>
        <th scope="col">POINTS</th>
        
      </tr>
    </thead>
    <tbody>
      <tr>
        {/* <th scope="row">1</th> */}
        <td><img src="images/GT.jpg" style={{width:"50px",height:"25px"}}/>GUJARAT TITANS</td>
        <td>14</td>
        <td>10</td>
        <td>4</td>
        <td>0</td>
        <td>+0.316</td>
        <td>20</td>
        </tr>
        <tr>
        {/* <th scope="row">1</th> */}
        <td><img src="images/RR.png" style={{width:"50px",height:"25px"}}/>Rajasthan Royals</td>
        <td>14</td>
        <td>10</td>
        <td>4</td>
        <td>0</td>
        <td>+0.316</td>
        <td>20</td>
        </tr>
        <tr>
        {/* <th scope="row">1</th> */}
        <td><img src="images/LSG.jpg" style={{width:"50px",height:"25px"}}/>Lucknow Super Giants</td>
        <td>14</td>
        <td>10</td>
        <td>4</td>
        <td>0</td>
        <td>+0.316</td>
        <td>20</td>
        </tr>
        <tr>
        {/* <th scope="row">1</th> */}
        <td><img src="images/RR.png" style={{width:"50px",height:"25px"}}/>Royal Challengers Bangalore</td>
        <td>14</td>
        <td>10</td>
        <td>4</td>
        <td>0</td>
        <td>+0.316</td>
        <td>20</td>
        </tr>
        <tr>
        {/* <th scope="row">1</th> */}
        <td><img src="images/DC.jpg" style={{width:"50px",height:"25px"}}/>Delhi Capitals</td>
        <td>14</td>
        <td>10</td>
        <td>4</td>
        <td>0</td>
        <td>+0.316</td>
        <td>20</td>
        </tr>
    </tbody>
  </table></div>
  )
}

export default BootstrapTable