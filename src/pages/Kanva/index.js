import React from "react";
import { Stage, Layer, Text } from "react-konva";

export default function Kanva() {
  //   const state = {
  //     isDragging: false,
  //     x: 50,
  //     y: 50,
  //   };

  return (
    <Stage
      style={{ background: "rgb(222, 131, 196)" }}
      width={window.innerWidth}
      height={window.innerHeight}
    >
      <Layer>
        <Text fontSize="32" text="🍆" x={50} y={50} draggable fill="#000" />
        <Text fontSize="32" text="🍆" x={50} y={50} draggable fill="#000" />
        <Text fontSize="32" text="🍆" x={50} y={50} draggable fill="#000" />
        <Text fontSize="32" text="🍆" x={50} y={50} draggable fill="#000" />
        <Text fontSize="32" text="🍆" x={50} y={50} draggable fill="#000" />
      </Layer>
      <Layer>
        <Text fontSize="32" text="🍑" x={90} y={50} draggable fill="#000" />
        <Text fontSize="32" text="🍑" x={90} y={50} draggable fill="#000" />
        <Text fontSize="32" text="🍑" x={90} y={50} draggable fill="#000" />
        <Text fontSize="32" text="🍑" x={90} y={50} draggable fill="#000" />
        <Text fontSize="32" text="🍑" x={90} y={50} draggable fill="#000" />
      </Layer>
      <Layer>
        <Text fontSize="32" text="❤️" x={130} y={50} draggable fill="#000" />
        <Text fontSize="32" text="❤️" x={130} y={50} draggable fill="#000" />
        <Text fontSize="32" text="❤️" x={130} y={50} draggable fill="#000" />
        <Text fontSize="32" text="❤️" x={130} y={50} draggable fill="#000" />
        <Text fontSize="32" text="❤️" x={130} y={50} draggable fill="#000" />
      </Layer>
      <Layer>
        <Text fontSize="32" text="😈" x={170} y={50} draggable fill="#000" />
        <Text fontSize="32" text="😈" x={170} y={50} draggable fill="#000" />
        <Text fontSize="32" text="😈" x={170} y={50} draggable fill="#000" />
        <Text fontSize="32" text="😈" x={170} y={50} draggable fill="#000" />
        <Text fontSize="32" text="😈" x={170} y={50} draggable fill="#000" />
      </Layer>
      <Layer>
        <Text fontSize="32" text="💦" x={210} y={50} draggable fill="#000" />
        <Text fontSize="32" text="💦" x={210} y={50} draggable fill="#000" />
        <Text fontSize="32" text="💦" x={210} y={50} draggable fill="#000" />
        <Text fontSize="32" text="💦" x={210} y={50} draggable fill="#000" />
        <Text fontSize="32" text="💦" x={210} y={50} draggable fill="#000" />
      </Layer>
      <Layer>
        <Text fontSize="32" text="🥵" x={250} y={50} draggable fill="#000" />
        <Text fontSize="32" text="🥵" x={250} y={50} draggable fill="#000" />
        <Text fontSize="32" text="🥵" x={250} y={50} draggable fill="#000" />
        <Text fontSize="32" text="🥵" x={250} y={50} draggable fill="#000" />
        <Text fontSize="32" text="🥵" x={250} y={50} draggable fill="#000" />
      </Layer>
    </Stage>
  );
}
