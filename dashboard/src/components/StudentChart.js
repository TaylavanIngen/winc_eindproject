import React from "react";
import {
  VictoryBar,
  VictoryChart,
  VictoryAxis,
  VictoryTooltip,
  VictoryLine,
  VictoryLegend,
  VictoryGroup
} from "victory";


const wincTheme = {
  area: {
    style: {
      data: {
        fill: "#212121"
      },
      labels: {
        fontFamily: "'Roboto', 'Helvetica Neue', Helvetica, sans-serif",
        fontSize: 12,
        letterSpacing: "normal",
        padding: 8,
        fill: "#455A64",
        stroke: "transparent",
        strokeWidth: 0
      }
    },
    width: 350,
    height: 350,
    padding: 50
  },
  axis: {
    style: {
      axis: {
        fill: "transparent",
        stroke: "#90A4AE",
        strokeWidth: 2,
        strokeLinecap: "round",
        strokeLinejoin: "round"
      },
      axisLabel: {
        textAnchor: "middle",
        fontFamily: "'Roboto', 'Helvetica Neue', Helvetica, sans-serif",
        fontSize: 12,
        letterSpacing: "normal",
        padding: 8,
        fill: "#455A64",
        stroke: "transparent",
        strokeWidth: 0
      },
      grid: {
        fill: "none",
        stroke: "none"
      },
      ticks: {
        fill: "transparent",
        size: 5,
        stroke: "#90A4AE",
        strokeWidth: 1,
        strokeLinecap: "round",
        strokeLinejoin: "round"
      },
      tickLabels: {
        fontFamily: "'Roboto', 'Helvetica Neue', Helvetica, sans-serif",
        fontSize: 12,
        letterSpacing: "normal",
        padding: 8,
        fill: "#455A64",
        stroke: "transparent",
        strokeWidth: 0
      }
    },
    width: 350,
    height: 350,
    padding: 50
  },
  bar: {
    style: {
      data: {
        fill: "#4a90e2",
        padding: 0,
        strokeWidth: 0
      },
      labels: {
        fontFamily: "'Roboto', 'Helvetica Neue', Helvetica, sans-serif",
        fontSize: 8,
        letterSpacing: "normal",
        padding: 8,
        fill: "#455A64",
        stroke: "transparent",
        strokeWidth: 0
      }
    },
    width: 350,
    height: 350,
    padding: 20
  },
  boxplot: {
    style: {
      max: {
        padding: 8,
        stroke: "#455A64",
        strokeWidth: 1
      },
      maxLabels: {
        fontFamily: "'Roboto', 'Helvetica Neue', Helvetica, sans-serif",
        fontSize: 12,
        letterSpacing: "normal",
        padding: 8,
        fill: "#455A64",
        stroke: "transparent",
        strokeWidth: 0
      },
      median: {
        padding: 8,
        stroke: "#455A64",
        strokeWidth: 1
      },
      medianLabels: {
        fontFamily: "'Roboto', 'Helvetica Neue', Helvetica, sans-serif",
        fontSize: 12,
        letterSpacing: "normal",
        padding: 8,
        fill: "#455A64",
        stroke: "transparent",
        strokeWidth: 0
      },
      min: {
        padding: 8,
        stroke: "#455A64",
        strokeWidth: 1
      },
      minLabels: {
        fontFamily: "'Roboto', 'Helvetica Neue', Helvetica, sans-serif",
        fontSize: 12,
        letterSpacing: "normal",
        padding: 8,
        fill: "#455A64",
        stroke: "transparent",
        strokeWidth: 0
      },
      q1: {
        padding: 8,
        fill: "#455A64"
      },
      q1Labels: {
        fontFamily: "'Roboto', 'Helvetica Neue', Helvetica, sans-serif",
        fontSize: 12,
        letterSpacing: "normal",
        padding: 8,
        fill: "#455A64",
        stroke: "transparent",
        strokeWidth: 0
      },
      q3: {
        padding: 8,
        fill: "#455A64"
      },
      q3Labels: {
        fontFamily: "'Roboto', 'Helvetica Neue', Helvetica, sans-serif",
        fontSize: 12,
        letterSpacing: "normal",
        padding: 8,
        fill: "#455A64",
        stroke: "transparent",
        strokeWidth: 0
      }
    },
    boxWidth: 20,
    width: 350,
    height: 350,
    padding: 50
  },
  candlestick: {
    style: {
      data: {
        stroke: "#455A64"
      },
      labels: {
        fontFamily: "'Roboto', 'Helvetica Neue', Helvetica, sans-serif",
        fontSize: 12,
        letterSpacing: "normal",
        padding: 8,
        fill: "#455A64",
        stroke: "transparent",
        strokeWidth: 0
      }
    },
    candleColors: {
      positive: "#ffffff",
      negative: "#455A64"
    },
    width: 350,
    height: 350,
    padding: 50
  },
  chart: {
    width: 800,
    height: 300,
    padding: 50
  },
  errorbar: {
    borderWidth: 8,
    style: {
      data: {
        fill: "transparent",
        opacity: 1,
        stroke: "#455A64",
        strokeWidth: 2
      },
      labels: {
        fontFamily: "'Roboto', 'Helvetica Neue', Helvetica, sans-serif",
        fontSize: 12,
        letterSpacing: "normal",
        padding: 8,
        fill: "#455A64",
        stroke: "transparent",
        strokeWidth: 0
      }
    },
    width: 350,
    height: 350,
    padding: 50
  },
  group: {
    colorScale: [
      "#F4511E",
      "#FFF59D",
      "#DCE775",
      "#8BC34A",
      "#00796B",
      "#006064"
    ],
    width: 350,
    height: 350,
    padding: 50
  },
  legend: {
    colorScale: [
      "#F4511E",
      "#FFF59D",
      "#DCE775",
      "#8BC34A",
      "#00796B",
      "#006064"
    ],
    gutter: 10,
    orientation: "vertical",
    titleOrientation: "top",
    style: {
      data: {
        type: "circle"
      },
      labels: {
        fontFamily: "'Roboto', 'Helvetica Neue', Helvetica, sans-serif",
        fontSize: 12,
        letterSpacing: "normal",
        padding: 8,
        fill: "#455A64",
        stroke: "transparent",
        strokeWidth: 0
      },
      title: {
        fontFamily: "'Roboto', 'Helvetica Neue', Helvetica, sans-serif",
        fontSize: 12,
        letterSpacing: "normal",
        padding: 5,
        fill: "#455A64",
        stroke: "transparent",
        strokeWidth: 0
      }
    }
  },
  line: {
    style: {
      data: {
        fill: "transparent",
        opacity: 1,
        stroke: "#455A64",
        strokeWidth: 2
      },
      labels: {
        fontFamily: "'Roboto', 'Helvetica Neue', Helvetica, sans-serif",
        fontSize: 12,
        letterSpacing: "normal",
        padding: 8,
        fill: "#455A64",
        stroke: "transparent",
        strokeWidth: 0
      }
    },
    width: 350,
    height: 350,
    padding: 50
  },
  pie: {
    colorScale: [
      "#F4511E",
      "#FFF59D",
      "#DCE775",
      "#8BC34A",
      "#00796B",
      "#006064"
    ],
    style: {
      data: {
        padding: 8,
        stroke: "#ECEFF1",
        strokeWidth: 1
      },
      labels: {
        fontFamily: "'Roboto', 'Helvetica Neue', Helvetica, sans-serif",
        fontSize: 12,
        letterSpacing: "normal",
        padding: 20,
        fill: "#455A64",
        stroke: "transparent",
        strokeWidth: 0
      }
    },
    width: 350,
    height: 350,
    padding: 50
  },
  scatter: {
    style: {
      data: {
        fill: "#455A64",
        opacity: 1,
        stroke: "transparent",
        strokeWidth: 0
      },
      labels: {
        fontFamily: "'Roboto', 'Helvetica Neue', Helvetica, sans-serif",
        fontSize: 12,
        letterSpacing: "normal",
        padding: 8,
        fill: "#455A64",
        stroke: "transparent",
        strokeWidth: 0
      }
    },
    width: 350,
    height: 350,
    padding: 50
  },
  stack: {
    colorScale: [
      "#F4511E",
      "#FFF59D",
      "#DCE775",
      "#8BC34A",
      "#00796B",
      "#006064"
    ],
    width: 350,
    height: 350,
    padding: 50
  },
  tooltip: {
    style: {
      fontFamily: "'Roboto', 'Helvetica Neue', Helvetica, sans-serif",
      fontSize: 12,
      letterSpacing: "normal",
      padding: 5,
      fill: "#455A64",
      stroke: "transparent",
      strokeWidth: 0,
      pointerEvents: "none"
    },
    flyoutStyle: {
      stroke: "#212121",
      strokeWidth: 1,
      fill: "#f0f0f0",
      pointerEvents: "none"
    },
    cornerRadius: 5,
    pointerLength: 10
  },
  voronoi: {
    style: {
      data: {
        fill: "transparent",
        stroke: "transparent",
        strokeWidth: 0
      },
      labels: {
        fontFamily: "'Roboto', 'Helvetica Neue', Helvetica, sans-serif",
        fontSize: 12,
        letterSpacing: "normal",
        padding: 5,
        fill: "#455A64",
        stroke: "transparent",
        strokeWidth: 0,
        pointerEvents: "none"
      },
      flyout: {
        stroke: "#212121",
        strokeWidth: 1,
        fill: "#f0f0f0",
        pointerEvents: "none"
      }
    },
    width: 350,
    height: 350,
    padding: 50
  }
};







const StudentChart = function(props) {

  const moeilijkheidPerPersoonPerOpdracht= (studentId)=>{
    const alleReviewsPersoon= props.state.reviews.filter(review=>review.studentId === studentId)
    const perPersoonMoeilijkheid= alleReviewsPersoon.map(item=> item.moeilijkheid)
    return perPersoonMoeilijkheid
  }

  const leukheidPerPersoonPerOpdracht= (studentId)=>{
    const alleReviewsPersoon= props.state.reviews.filter(review=>review.studentId === studentId)
    const perPersoonLeukheid= alleReviewsPersoon.map(item=> item.leukheid)
    return perPersoonLeukheid
  }
  const datasetPersoon= props.state.opdrachten.map(opdracht=>{
  const moeilijkheid=  moeilijkheidPerPersoonPerOpdracht(props.student)
  const leukheid= leukheidPerPersoonPerOpdracht(props.student)
  return({id:opdracht.id, opdracht:opdracht.name, moeilijkheid: moeilijkheid, leukheid:leukheid})
  })

  // Add label
  const assignmentRatingAverageWithLabels = datasetPersoon.map(avg => ({
    opdracht: avg.opdracht,
    moeilijkheid: avg.moeilijkheid,
    leukheid: avg.leukheid,
    label: `Opdracht ${
      avg.opdracht
    }, moeilijkheid: ${avg.moeilijkheid.toFixed(
      1
    )}, leukheid: ${avg.leukheid.toFixed(1)}`
  }));

  return(
    <>
    <VictoryChart domainPadding={15} theme={wincTheme}>
    <VictoryLegend x={125} y={50}
  title="Legend"
  centerTitle
  orientation="horizontal"
  gutter={20}
  style={{ border: { stroke: "black" }, title: {fontSize: 20 } }}
  data={[
    { name: "leukheid", symbol:{fill: "#FFF59D", type:"square"}},
    { name: "moeilijkheid", symbol:{fill: "#F4511E", type:"square"}},
  ]}
/>
      <VictoryGroup offset={20}>

        <VictoryBar
          labelComponent={<VictoryTooltip constrainToVisibleArea/>}
          data={assignmentRatingAverageWithLabels}
          x="opdracht"
          y="moeilijkheid"
          tickValues={[1, 2, 3, 4, 5]}
          tickFormat={assignmentRatingAverageWithLabels.map(
            avg => avg.opdracht
          )}
        />
        <VictoryBar
          labelComponent={<VictoryTooltip constrainToVisibleArea/>}
          data={assignmentRatingAverageWithLabels}
          x="opdracht"
          y="leukheid"
          tickValues={[1, 2, 3, 4, 5]}
          tickFormat={assignmentRatingAverageWithLabels.map(
            avg => avg.opdracht
          )}
        />
      </VictoryGroup>
      <VictoryAxis
        // tickValues specifies both the number of ticks and where
        // they are placed on the axis
        tickValues={[1, 2, 3, 4, 5]}
        tickFormat={assignmentRatingAverageWithLabels.map(
          avg => avg.opdracht
        )}
      />
      <VictoryAxis dependentAxis />
    </VictoryChart>
    </>

  //   <VictoryChart domainPadding={15} theme={wincTheme}>
  //     <VictoryLine
  //       style={{
  //         data: { stroke: "#c43a31" },
  //         parent: { border: "1px solid #ccc" }
  //       }}
  //       data={assignmentRatingAverage}
  //       x="assignment"
  //       y="difficultyRating"
  //     />
  //     <VictoryLine
  //       style={{
  //         data: { stroke: "#ff00ff" },
  //         parent: { border: "1px solid #ccc" }
  //       }}
  //       data={assignmentRatingAverage}
  //       x="assignment"
  //       y="enjoymentRating"
  //     />
  //     <VictoryAxis
  //       // tickValues specifies both the number of ticks and where
  //       // they are placed on the axis
  //       tickValues={[1, 2, 3, 4, 5]}
  //       tickFormat={assignmentRatingAverage.map(avg => avg.assignment)}
  //     />
  //     <VictoryAxis dependentAxis />
  //   </VictoryChart>
  // </>
)};
// export default chartExample;

export default StudentChart
