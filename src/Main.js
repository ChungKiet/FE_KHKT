import httpStatus from "http-status";
import { useEffect, useState } from "react";
import { getDocument, getMaterial, getMenu } from "services";
import { AppStore, useAppStore } from "stores";
import { Sidebar } from "../src/components";

function Main() {
  const PDF_DOCUMENT = [
    {
      name: "Giới thiệu",
      type: "INTRODUCTION",
      url: "https://khkt-video.s3.ap-southeast-1.amazonaws.com/Introduction_docs.pdf",
    },
    {
      name: "Phổ IR",
      type: "IR",
      url: "https://khkt-video.s3.ap-southeast-1.amazonaws.com/IR_docs.pdf",
    },
    {
      name: "Phổ MS",
      type: "MS",
      url: "https://khkt-video.s3.ap-southeast-1.amazonaws.com/MS_docs.pdf",
    },
    {
      name: "Phổ NMR (13C)",
      type: "NMR_13C",
      url: "https://khkt-video.s3.ap-southeast-1.amazonaws.com/NMR_13C_docs.pdf",
    },
    {
      name: "Phổ NMR (1H)",
      type: "NMR_1H",
      url: "https://khkt-video.s3.ap-southeast-1.amazonaws.com/NMR_H_docs.pdf",
    },
  ];
  const [appStore, updateAppStore] = useAppStore();
  const [menu, setMenu] = useState([]);
  const [material, setMaterial] = useState([]);
  const [content, setContent] = useState({});

  const fetchMenu = async () => {
    const res = await getMenu();
    if (res) {
      switch (res.status) {
        case httpStatus.OK: {
          const { data } = res;
          setMenu([
            {
              name: "Tài liệu tham khảo",
              id: "document",
              children: PDF_DOCUMENT,
            },
            {
              name: "Hướng dẫn giải",
              id: "guide",
              children: data,
            },
          ]);
          break;
        }
        case httpStatus.NOT_FOUND: {
          break;
        }
        default:
          break;
      }
    }
    return null;
  };
  const fetchMaterial = async () => {
    const res = await getMaterial();
    if (res) {
      switch (res.status) {
        case httpStatus.OK: {
          const { data } = res;
          setMaterial(data);
          break;
        }
        case httpStatus.NOT_FOUND: {
          break;
        }
        default:
          break;
      }
    }
    return null;
  };
  const fetchDocument = async () => {
    const res = await getDocument();
    if (res) {
      switch (res.status) {
        case httpStatus.OK: {
          const { data } = res;
          break;
        }
        case httpStatus.NOT_FOUND: {
          break;
        }
        default:
          break;
      }
    }
    return null;
  };
  useEffect(() => {
    fetchMenu();
    // return () => {};
  }, []);

  useEffect(() => {
    fetchMaterial();
    // return () => {};
  }, []);
  useEffect(() => {
    setContent(appStore.document);
  }, [appStore.document]);

  useEffect(() => {
    // let path = appStore.parentPath;
    // path?.shift();
    // updateAppStore((draft) => {
    //   draft.material.parentPath = path;
    // });
    setContent(
      material
        .filter(
          (item) =>
            item.typeChemical === appStore.material.typeChemical &&
            item.groupName === appStore.material.groupName &&
            item.chemical === appStore.material.chemical &&
            item.typeSpectrum === appStore.material.typeSpectrum
        )
        .shift()
    );
  }, [appStore.material]);

  return (
    <div className="flex pl-72 bg-slate-200">
      <Sidebar nodeList={menu} />
      <div className="w-full p-5 min-h-screen">
        <div className="mx-auto max-w-5xl">
          <h1 className=" text-center font-black text-4xl uppercase">
            Nghiên cứu ứng dụng chuyển đổi số trong môn Hóa học
          </h1>
          <br />
          {/* <div className="mt-6 w-full flex gap-6">
            <button
              className={`w-full h-12 text-gray-800 text-xl font-bold shadow hover:shadow-xl rounded-lg transition-all ${
                contentType === CONTENT_TYPE.theory
                  ? " bg-slate-400 text-gray-900"
                  : "bg-white text-gray-700"
              }`}
              onClick={() => setContentType(CONTENT_TYPE.theory)}
            >
              Lý thuyết
            </button>
            <button
              className={`w-full h-12 text-gray-800 text-xl font-bold shadow hover:shadow-xl rounded-lg transition-all ${
                contentType === CONTENT_TYPE.video
                  ? " bg-slate-400 text-gray-900"
                  : "bg-white text-gray-700"
              }`}
              onClick={() => setContentType(CONTENT_TYPE.video)}
            >
              Video hướng dẫn
            </button>
          </div> */}
          {/* <div className="mt-6 p-5 rounded-md bg-white shadow-lg">
            <div dangerouslySetInnerHTML={{ __html: `${HTML_STRING}` }} />
          </div> */}
          {!!content?.url ? (
            <>
              <h4 className=" text-left font-black text-3xl">
                {content?.name}
              </h4>
              <iframe
                className="w-full h-[calc(100vh-100px)] mt-4"
                src={content?.url}
                title="Giới thiệu"
              />
            </>
          ) : null}
          {!!content?.videoUrl ? (
            <>
              <h4 className=" text-left font-black text-3xl">
                {appStore?.material?.parentPath.join(">")}
              </h4>
              <video className="mt-4" controls src={content?.videoUrl} />
            </>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default Main;
