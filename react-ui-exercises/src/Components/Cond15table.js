import "./Cond15table.css"

export default function Cond15Table(){
 return(
  <div className="table-container">
   <table>
   <thead>
    <tr>
     <th>TYPES</th>
     <th>i5</th>
     <th>i7</th>
     <th>i9</th>
    </tr>
   </thead>
   <tbody>
    <tr>
     <td><b>8 RAM</b></td>
     <td>U$D 800</td>
     <td>U$D 900</td>
     <td>U$D 1200</td>
    </tr>
    <tr>
     <td><b>16 RAM</b></td>
     <td>U$D 900</td>
     <td>U$D 1000</td>
     <td>U$D 1400</td>
    </tr>
    <tr>
     <td><b>32 RAM</b></td>
     <td>U$D 1000</td>
     <td>U$D 1400</td>
     <td>U$D 2000</td>
    </tr>
   </tbody>
   </table>
  </div>
 )
}