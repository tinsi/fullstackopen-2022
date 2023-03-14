import React from "react";

const StatisticLine = ({ text, value }) => {
    return (
      <div>
        <p>{text}: {value} </p>
      </div>
    )
    }

const Statistics = (props) => {
    if(props.all === 0) {
    return (
    <div>
      <p>No feedbacks given</p>
    </div>
    )
    } else {
      return (
        <div>
          <StatisticLine text='good' value={props.good}/>
          <StatisticLine text='neutral' value={props.neutral}/>
          <StatisticLine text='bad' value={props.bad}/>
          <StatisticLine text='all' value={props.all}/>
          <StatisticLine text='percentage' value={`${props.percentage} %`}/>
        </div>
        )
    }
  }

  export default Statistics;