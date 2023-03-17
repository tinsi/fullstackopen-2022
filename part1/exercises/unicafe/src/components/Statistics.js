import React from "react";

/// 1.10 asti
const StatisticLine = ({ text, value }) => {
    return (
      <div>
        <p>{text}: {value} </p>
      </div>
    )
    }

// const Statistics = (stats) => {
//     if(stats.all === 0) {
//     return (
//     <div>
//       <p>No feedbacks given</p>
//     </div>
//     )
//     } else {
//       return (
//         <div>
//           <StatisticLine text='good' value={stats.good}/>
//           <StatisticLine text='neutral' value={stats.neutral}/>
//           <StatisticLine text='bad' value={stats.bad}/>
//           <StatisticLine text='all' value={stats.all}/>
//           <StatisticLine text='percentage' value={`${stats.percentage} %`}/>
//         </div>
//         )
//     }
//   }


// 1.11 

const Statistics = (stats) => {
    if(stats.all === 0) {
        return (
        <div>
        <p>No feedbacks given</p>
        </div>
    )
    } else {
        return (
            <table>
                <tbody>
                <tr>
                    <td>Good</td>
                    <td>{stats.good}</td>
                </tr>
                <tr>
                    <td>Neutral</td>
                    <td>{stats.neutral}</td>
                </tr>
                <tr>
                    <td>Bad</td>
                    <td>{stats.bad}</td>
                </tr>
                <tr>
                    <td>Total</td>
                    <td>{stats.all}</td>
                </tr>
                <tr>
                    <td>Percentage</td>
                    <td>{`${stats.percentage} %`}</td>
                </tr>
                </tbody>
            </table>
        )
    }
}

  export default Statistics;