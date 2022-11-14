import React, { useState } from "react";
import logo from "logo.svg";

const File = (props) => {
  const { node, ...rest } = props;
  const [showChildren, setShowChildren] = useState(false);
  return (
    <div className={`w-full hover:shadow-lg rounded transition-shadow`}>
      <div
        className={`bg-blue-500 hover:bg-blue-700 p-3 rounded cursor-pointer flex items-center transition-colors ${
          !node?.children?.length ? "justify-center" : "justify-between"
        }`}
        onClick={() =>
          node?.children?.length ? setShowChildren(!showChildren) : ""
        }
      >
        {node?.id}
        {!!node?.children?.length && (
          <i
            className={`fa-solid fa-chevron-down transition-transform ${
              !showChildren ? " rotate-90" : ""
            }`}
          ></i>
        )}
      </div>
      {!!node?.children?.length && (
        <div
          className={`${
            showChildren
              ? "m-3 h-auto max-h-[999px]"
              : " max-h-[0] overflow-hidden"
          } gap-3 flex flex-col transition-[all_0.5s_cubic-bezier(0.4,_0,_0.2,_1)] duration-300`}
        >
          {node?.children?.map((item, index) => (
            <File node={item}></File>
          ))}
        </div>
      )}
    </div>
  );
};

const Sidebar = (props) => {
  const { nodeList, ...rest } = props;

  return (
    <div className="fixed top-0 left-0 w-72 h-screen shrink-0 flex flex-col gap-3 p-3 overflow-auto text-white bg-slate-300">
      <img
        src={logo}
        className="w-14 h-auto shrink-0 animate-[App-logo-spin_infinite_20s_linear]"
        alt="logo"
      />
      <div className="w-full flex flex-col gap-3">
        {nodeList.map((item, index) => (
          <File node={item}></File>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
