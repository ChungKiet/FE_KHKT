import { useState } from "react";
import { Sidebar } from "../src/components";

function App() {
  const TEMPNODE = [
    {
      id: "Tài liệu tham khảo",
      children: [
        {
          id: "Phổ A",
          children: [
            { id: "Hydrocarbon no", children: [] },
            { id: "Hydrocarbon không no", children: [] },
          ],
        },
        {
          id: "Phổ B",
          children: [
            { id: "Hydrocarbon no", children: [] },
            { id: "Hydrocarbon không no", children: [] },
          ],
        },
        {
          id: "Phổ C",
          children: [
            { id: "Hydrocarbon no", children: [] },
            { id: "Hydrocarbon không no", children: [] },
          ],
        },
      ],
    },
    {
      id: "Hướng dẫn giải",
      children: [
        {
          id: "Phổ A",
          children: [
            { id: "Hydrocarbon no", children: [] },
            { id: "Hydrocarbon không no", children: [] },
          ],
        },
        {
          id: "Phổ B",
          children: [
            { id: "Hydrocarbon no", children: [] },
            { id: "Hydrocarbon không no", children: [] },
          ],
        },
        {
          id: "Phổ C",
          children: [
            { id: "Hydrocarbon no", children: [] },
            { id: "Hydrocarbon không no", children: [] },
          ],
        },
      ],
    },
  ];
  const [node, setNode] = useState(TEMPNODE);
  return (
    <div className="flex pl-72">
      <Sidebar nodeList={node}></Sidebar>
      <div>
        <h1>Nghiên cứu phổ</h1>
        <div>
          <p>
            Sunt anim nulla mollit culpa ut ea culpa velit tempor voluptate non
            do. Et irure dolore amet Lorem enim in qui est laboris minim elit.
            Laborum ullamco ad velit sit aliqua.
          </p>
          <p>
            Sunt anim nulla mollit culpa ut ea culpa velit tempor voluptate non
            do. Et irure dolore amet Lorem enim in qui est laboris minim elit.
            Laborum ullamco ad velit sit aliqua.
          </p>
          <p>
            Sunt anim nulla mollit culpa ut ea culpa velit tempor voluptate non
            do. Et irure dolore amet Lorem enim in qui est laboris minim elit.
            Laborum ullamco ad velit sit aliqua.
          </p>
          <p>
            Sunt anim nulla mollit culpa ut ea culpa velit tempor voluptate non
            do. Et irure dolore amet Lorem enim in qui est laboris minim elit.
            Laborum ullamco ad velit sit aliqua.
          </p>
          <p>
            Sunt anim nulla mollit culpa ut ea culpa velit tempor voluptate non
            do. Et irure dolore amet Lorem enim in qui est laboris minim elit.
            Laborum ullamco ad velit sit aliqua.
          </p>
          <p>
            Sunt anim nulla mollit culpa ut ea culpa velit tempor voluptate non
            do. Et irure dolore amet Lorem enim in qui est laboris minim elit.
            Laborum ullamco ad velit sit aliqua.
          </p>
          <p>
            Sunt anim nulla mollit culpa ut ea culpa velit tempor voluptate non
            do. Et irure dolore amet Lorem enim in qui est laboris minim elit.
            Laborum ullamco ad velit sit aliqua.
          </p>
          <p>
            Sunt anim nulla mollit culpa ut ea culpa velit tempor voluptate non
            do. Et irure dolore amet Lorem enim in qui est laboris minim elit.
            Laborum ullamco ad velit sit aliqua.
          </p>
          <p>
            Sunt anim nulla mollit culpa ut ea culpa velit tempor voluptate non
            do. Et irure dolore amet Lorem enim in qui est laboris minim elit.
            Laborum ullamco ad velit sit aliqua.
          </p>
          <p>
            Sunt anim nulla mollit culpa ut ea culpa velit tempor voluptate non
            do. Et irure dolore amet Lorem enim in qui est laboris minim elit.
            Laborum ullamco ad velit sit aliqua.
          </p>
          <p>
            Sunt anim nulla mollit culpa ut ea culpa velit tempor voluptate non
            do. Et irure dolore amet Lorem enim in qui est laboris minim elit.
            Laborum ullamco ad velit sit aliqua.
          </p>{" "}
          <p>
            Sunt anim nulla mollit culpa ut ea culpa velit tempor voluptate non
            do. Et irure dolore amet Lorem enim in qui est laboris minim elit.
            Laborum ullamco ad velit sit aliqua.
          </p>
          <p>
            Sunt anim nulla mollit culpa ut ea culpa velit tempor voluptate non
            do. Et irure dolore amet Lorem enim in qui est laboris minim elit.
            Laborum ullamco ad velit sit aliqua.
          </p>
          <p>
            Sunt anim nulla mollit culpa ut ea culpa velit tempor voluptate non
            do. Et irure dolore amet Lorem enim in qui est laboris minim elit.
            Laborum ullamco ad velit sit aliqua.
          </p>
          <p>
            Sunt anim nulla mollit culpa ut ea culpa velit tempor voluptate non
            do. Et irure dolore amet Lorem enim in qui est laboris minim elit.
            Laborum ullamco ad velit sit aliqua.
          </p>
          <p>
            Sunt anim nulla mollit culpa ut ea culpa velit tempor voluptate non
            do. Et irure dolore amet Lorem enim in qui est laboris minim elit.
            Laborum ullamco ad velit sit aliqua.
          </p>
          <p>
            Sunt anim nulla mollit culpa ut ea culpa velit tempor voluptate non
            do. Et irure dolore amet Lorem enim in qui est laboris minim elit.
            Laborum ullamco ad velit sit aliqua.
          </p>
          <p>
            Sunt anim nulla mollit culpa ut ea culpa velit tempor voluptate non
            do. Et irure dolore amet Lorem enim in qui est laboris minim elit.
            Laborum ullamco ad velit sit aliqua.
          </p>
          <p>
            Sunt anim nulla mollit culpa ut ea culpa velit tempor voluptate non
            do. Et irure dolore amet Lorem enim in qui est laboris minim elit.
            Laborum ullamco ad velit sit aliqua.
          </p>
          <p>
            Sunt anim nulla mollit culpa ut ea culpa velit tempor voluptate non
            do. Et irure dolore amet Lorem enim in qui est laboris minim elit.
            Laborum ullamco ad velit sit aliqua.
          </p>
          <p>
            Sunt anim nulla mollit culpa ut ea culpa velit tempor voluptate non
            do. Et irure dolore amet Lorem enim in qui est laboris minim elit.
            Laborum ullamco ad velit sit aliqua.
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
