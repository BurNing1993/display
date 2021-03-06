import React, { CSSProperties } from "react";
import { Card } from "antd";

const colors = [
  "#eccc68",
  "#ffa502",
  "#7bed9f",
  "#2ed573",
  "#ff7f50",
  "#ff6348",
  "#70a1ff",
  "#1e90ff",
  "#ff6b81",
];

interface Props {
  containerStyle: CSSProperties;
  itemStyle: CSSProperties[];
  selected: number;
  setSelected: (index: number) => void;
}

const GridContainer = ({
  containerStyle,
  itemStyle,
  selected,
  setSelected,
}: Props) => {
  return (
    <Card
      title="GridContainer"
      extra={
        <a
          href="http://www.ruanyifeng.com/blog/2019/03/grid-layout-tutorial.html"
          target="blank"
        >
          GridLayout
        </a>
      }
    >
      <div className="container grid-container" style={containerStyle}>
        {colors.map((color, index) =>
          React.createElement(
            "div",
            {
              style: {
                backgroundColor: color,
                ...itemStyle[index],
              },
              className: `item item-${index} ${
                selected === index ? "selected" : ""
              }`,
              key: index,
              onClick: () => setSelected(index),
            },
            index + 1
          )
        )}
      </div>
    </Card>
  );
};
export default GridContainer;
