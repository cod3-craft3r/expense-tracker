import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = (props) => {
  const values = props.dataPoints.map(dataPoint => dataPoint.value);
  const totalMax = Math.max(...values);

  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label  /*assuming that each chartbar will have a unique title always*/}
          value={dataPoint.value}
          maxValue={totalMax}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
// one reason why we're using a dataPoints ka object is because of code re-usability ki habit will be helpful in the long run. isi component ko kahi aur bhi use kia ja sakega varna it'll be clinging to just the number of months.