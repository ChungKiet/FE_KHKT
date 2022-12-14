import httpStatus from "http-status";
import { useEffect, useState } from "react";
import { getDocument, getMaterial, getMenu } from "services";
import { Sidebar } from "../src/components";

function App() {
  const TEMP_NODE = [
    {
      name: "Tài liệu tham khảo",
      children: [
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
      ],
    },
    {
      name: "Hướng dẫn giải",
      children: [
        {
          id: "HYDROCACBON",
          name: "Hydrocacbon",
          children: [
            {
              id: "Anken",
              name: "Anken",
              children: [
                {
                  id: "Hex-1-ene",
                  name: "Hex-1-ene",
                  children: [
                    {
                      id: "NMR_13C",
                      name: "NMR_13C",
                      children: null,
                    },
                    {
                      id: "NMR_1H",
                      name: "NMR_1H",
                      children: null,
                    },
                    {
                      id: "NMR_IR",
                      name: "NMR_IR",
                      children: null,
                    },
                  ],
                },
                {
                  id: "Hex-1-ene",
                  name: "Hex-1-ene",
                  children: [
                    {
                      id: "NMR_13C",
                      name: "NMR_13C",
                      children: null,
                    },
                    {
                      id: "NMR_1H",
                      name: "NMR_1H",
                      children: null,
                    },
                    {
                      id: "NMR_IR",
                      name: "NMR_IR",
                      children: null,
                    },
                  ],
                },
                {
                  id: "Hex-1-ene",
                  name: "Hex-1-ene",
                  children: [
                    {
                      id: "NMR_13C",
                      name: "NMR_13C",
                      children: null,
                    },
                    {
                      id: "NMR_1H",
                      name: "NMR_1H",
                      children: null,
                    },
                    {
                      id: "NMR_IR",
                      name: "NMR_IR",
                      children: null,
                    },
                  ],
                },
                {
                  id: "Pent-1-ene",
                  name: "Pent-1-ene",
                  children: [
                    {
                      id: "NMR_13C",
                      name: "NMR_13C",
                      children: null,
                    },
                    {
                      id: "NMR_1H",
                      name: "NMR_1H",
                      children: null,
                    },
                    {
                      id: "IR",
                      name: "IR",
                      children: null,
                    },
                  ],
                },
                {
                  id: "Pent-1-ene",
                  name: "Pent-1-ene",
                  children: [
                    {
                      id: "NMR_13C",
                      name: "NMR_13C",
                      children: null,
                    },
                    {
                      id: "NMR_1H",
                      name: "NMR_1H",
                      children: null,
                    },
                    {
                      id: "IR",
                      name: "IR",
                      children: null,
                    },
                  ],
                },
                {
                  id: "Pent-1-ene",
                  name: "Pent-1-ene",
                  children: [
                    {
                      id: "NMR_13C",
                      name: "NMR_13C",
                      children: null,
                    },
                    {
                      id: "NMR_1H",
                      name: "NMR_1H",
                      children: null,
                    },
                    {
                      id: "IR",
                      name: "IR",
                      children: null,
                    },
                  ],
                },
                {
                  id: "Ethylen",
                  name: "Ethylen",
                  children: [
                    {
                      id: "MS",
                      name: "MS",
                      children: null,
                    },
                  ],
                },
                {
                  id: "Propylene",
                  name: "Propylene",
                  children: [
                    {
                      id: "MS",
                      name: "MS",
                      children: null,
                    },
                  ],
                },
              ],
            },
            {
              id: "Ankadien",
              name: "Ankadien",
              children: [
                {
                  id: "Hexa-1,3-diene",
                  name: "Hexa-1,3-diene",
                  children: [
                    {
                      id: "IR",
                      name: "IR",
                      children: null,
                    },
                  ],
                },
                {
                  id: "Penta-1,3-diene",
                  name: "Penta-1,3-diene",
                  children: [
                    {
                      id: "IR",
                      name: "IR",
                      children: null,
                    },
                  ],
                },
                {
                  id: "Octa-1,4-diene",
                  name: "Octa-1,4-diene",
                  children: [
                    {
                      id: "NMR_13C",
                      name: "NMR_13C",
                      children: null,
                    },
                  ],
                },
                {
                  id: "Hexa-1,5-diene",
                  name: "Hexa-1,5-diene",
                  children: [
                    {
                      id: "NMR_1H",
                      name: "NMR_1H",
                      children: null,
                    },
                  ],
                },
                {
                  id: "Nona-1,8-diene",
                  name: "Nona-1,8-diene",
                  children: [
                    {
                      id: "NMR_13C",
                      name: "NMR_13C",
                      children: null,
                    },
                  ],
                },
                {
                  id: "Propadiene",
                  name: "Propadiene",
                  children: [
                    {
                      id: "MS",
                      name: "MS",
                      children: null,
                    },
                  ],
                },
                {
                  id: "Buta-1,3-dien",
                  name: "Buta-1,3-dien",
                  children: [
                    {
                      id: "MS",
                      name: "MS",
                      children: null,
                    },
                  ],
                },
                {
                  id: "2-Methylbuta-1,3-diene",
                  name: "2-Methylbuta-1,3-diene",
                  children: [
                    {
                      id: "MS",
                      name: "MS",
                      children: null,
                    },
                  ],
                },
              ],
            },
            {
              id: "Aromatic Hydrocacbon",
              name: "Aromatic Hydrocacbon",
              children: [
                {
                  id: "Toluene",
                  name: "Toluene",
                  children: [
                    {
                      id: "MS",
                      name: "MS",
                      children: null,
                    },
                  ],
                },
              ],
            },
            {
              id: "Ankin",
              name: "Ankin",
              children: [
                {
                  id: "Hex-1-yne",
                  name: "Hex-1-yne",
                  children: [
                    {
                      id: "IR",
                      name: "IR",
                      children: null,
                    },
                    {
                      id: "NMR_13C",
                      name: "NMR_13C",
                      children: null,
                    },
                    {
                      id: "NMR_1H",
                      name: "NMR_1H",
                      children: null,
                    },
                  ],
                },
                {
                  id: "Hex-1-yne",
                  name: "Hex-1-yne",
                  children: [
                    {
                      id: "IR",
                      name: "IR",
                      children: null,
                    },
                    {
                      id: "NMR_13C",
                      name: "NMR_13C",
                      children: null,
                    },
                    {
                      id: "NMR_1H",
                      name: "NMR_1H",
                      children: null,
                    },
                  ],
                },
                {
                  id: "Hex-1-yne",
                  name: "Hex-1-yne",
                  children: [
                    {
                      id: "IR",
                      name: "IR",
                      children: null,
                    },
                    {
                      id: "NMR_13C",
                      name: "NMR_13C",
                      children: null,
                    },
                    {
                      id: "NMR_1H",
                      name: "NMR_1H",
                      children: null,
                    },
                  ],
                },
                {
                  id: "Pent-1-yne",
                  name: "Pent-1-yne",
                  children: [
                    {
                      id: "IR",
                      name: "IR",
                      children: null,
                    },
                    {
                      id: "NMR_13C",
                      name: "NMR_13C",
                      children: null,
                    },
                    {
                      id: "NMR_1H",
                      name: "NMR_1H",
                      children: null,
                    },
                  ],
                },
                {
                  id: "Pent-1-yne",
                  name: "Pent-1-yne",
                  children: [
                    {
                      id: "IR",
                      name: "IR",
                      children: null,
                    },
                    {
                      id: "NMR_13C",
                      name: "NMR_13C",
                      children: null,
                    },
                    {
                      id: "NMR_1H",
                      name: "NMR_1H",
                      children: null,
                    },
                  ],
                },
                {
                  id: "Pent-1-yne",
                  name: "Pent-1-yne",
                  children: [
                    {
                      id: "IR",
                      name: "IR",
                      children: null,
                    },
                    {
                      id: "NMR_13C",
                      name: "NMR_13C",
                      children: null,
                    },
                    {
                      id: "NMR_1H",
                      name: "NMR_1H",
                      children: null,
                    },
                  ],
                },
                {
                  id: "Acetylene",
                  name: "Acetylene",
                  children: [
                    {
                      id: "MS",
                      name: "MS",
                      children: null,
                    },
                  ],
                },
                {
                  id: "Propyne",
                  name: "Propyne",
                  children: [
                    {
                      id: "MS",
                      name: "MS",
                      children: null,
                    },
                  ],
                },
                {
                  id: "Butyne",
                  name: "Butyne",
                  children: [
                    {
                      id: "MS",
                      name: "MS",
                      children: null,
                    },
                  ],
                },
              ],
            },
            {
              id: "Ankan",
              name: "Ankan",
              children: [
                {
                  id: "Hexane",
                  name: "Hexane",
                  children: [
                    {
                      id: "NMR_13C",
                      name: "NMR_13C",
                      children: null,
                    },
                    {
                      id: "NMR_1H",
                      name: "NMR_1H",
                      children: null,
                    },
                    {
                      id: "IR",
                      name: "IR",
                      children: null,
                    },
                  ],
                },
                {
                  id: "Hexane",
                  name: "Hexane",
                  children: [
                    {
                      id: "NMR_13C",
                      name: "NMR_13C",
                      children: null,
                    },
                    {
                      id: "NMR_1H",
                      name: "NMR_1H",
                      children: null,
                    },
                    {
                      id: "IR",
                      name: "IR",
                      children: null,
                    },
                  ],
                },
                {
                  id: "Hexane",
                  name: "Hexane",
                  children: [
                    {
                      id: "NMR_13C",
                      name: "NMR_13C",
                      children: null,
                    },
                    {
                      id: "NMR_1H",
                      name: "NMR_1H",
                      children: null,
                    },
                    {
                      id: "IR",
                      name: "IR",
                      children: null,
                    },
                  ],
                },
                {
                  id: "Pentan",
                  name: "Pentan",
                  children: [
                    {
                      id: "NMR_13C",
                      name: "NMR_13C",
                      children: null,
                    },
                    {
                      id: "IR",
                      name: "IR",
                      children: null,
                    },
                    {
                      id: "NMR_1H",
                      name: "NMR_1H",
                      children: null,
                    },
                  ],
                },
                {
                  id: "Pentan",
                  name: "Pentan",
                  children: [
                    {
                      id: "NMR_13C",
                      name: "NMR_13C",
                      children: null,
                    },
                    {
                      id: "IR",
                      name: "IR",
                      children: null,
                    },
                    {
                      id: "NMR_1H",
                      name: "NMR_1H",
                      children: null,
                    },
                  ],
                },
                {
                  id: "Pentan",
                  name: "Pentan",
                  children: [
                    {
                      id: "NMR_13C",
                      name: "NMR_13C",
                      children: null,
                    },
                    {
                      id: "IR",
                      name: "IR",
                      children: null,
                    },
                    {
                      id: "NMR_1H",
                      name: "NMR_1H",
                      children: null,
                    },
                  ],
                },
                {
                  id: "Metan",
                  name: "Metan",
                  children: [
                    {
                      id: "MS",
                      name: "MS",
                      children: null,
                    },
                  ],
                },
                {
                  id: "Etan",
                  name: "Etan",
                  children: [
                    {
                      id: "MS",
                      name: "MS",
                      children: null,
                    },
                  ],
                },
                {
                  id: "Propan",
                  name: "Propan",
                  children: [
                    {
                      id: "MS",
                      name: "MS",
                      children: null,
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          id: "HYDROCACBON_DERIVATIVE",
          name: "Dẫn Xuất Hydrocacbon",
          children: [
            {
              id: "Aldehyde",
              name: "Aldehyde",
              children: [
                {
                  id: "Formaldehyde",
                  name: "Formaldehyde",
                  children: [
                    {
                      id: "MS",
                      name: "MS",
                      children: null,
                    },
                    {
                      id: "NMR_1H",
                      name: "NMR_1H",
                      children: null,
                    },
                  ],
                },
                {
                  id: "Acetaldehyde",
                  name: "Acetaldehyde",
                  children: [
                    {
                      id: "NMR_13C",
                      name: "NMR_13C",
                      children: null,
                    },
                    {
                      id: "NMR_1H",
                      name: "NMR_1H",
                      children: null,
                    },
                    {
                      id: "IR",
                      name: "IR",
                      children: null,
                    },
                  ],
                },
                {
                  id: "Acetaldehyde",
                  name: "Acetaldehyde",
                  children: [
                    {
                      id: "NMR_13C",
                      name: "NMR_13C",
                      children: null,
                    },
                    {
                      id: "NMR_1H",
                      name: "NMR_1H",
                      children: null,
                    },
                    {
                      id: "IR",
                      name: "IR",
                      children: null,
                    },
                  ],
                },
                {
                  id: "Acetaldehyde",
                  name: "Acetaldehyde",
                  children: [
                    {
                      id: "NMR_13C",
                      name: "NMR_13C",
                      children: null,
                    },
                    {
                      id: "NMR_1H",
                      name: "NMR_1H",
                      children: null,
                    },
                    {
                      id: "IR",
                      name: "IR",
                      children: null,
                    },
                  ],
                },
                {
                  id: "Acetone",
                  name: "Acetone",
                  children: [
                    {
                      id: "IR",
                      name: "IR",
                      children: null,
                    },
                    {
                      id: "NMR_13C",
                      name: "NMR_13C",
                      children: null,
                    },
                    {
                      id: "NMR_1H",
                      name: "NMR_1H",
                      children: null,
                    },
                  ],
                },
                {
                  id: "Acetone",
                  name: "Acetone",
                  children: [
                    {
                      id: "IR",
                      name: "IR",
                      children: null,
                    },
                    {
                      id: "NMR_13C",
                      name: "NMR_13C",
                      children: null,
                    },
                    {
                      id: "NMR_1H",
                      name: "NMR_1H",
                      children: null,
                    },
                  ],
                },
                {
                  id: "Acetone",
                  name: "Acetone",
                  children: [
                    {
                      id: "IR",
                      name: "IR",
                      children: null,
                    },
                    {
                      id: "NMR_13C",
                      name: "NMR_13C",
                      children: null,
                    },
                    {
                      id: "NMR_1H",
                      name: "NMR_1H",
                      children: null,
                    },
                  ],
                },
                {
                  id: "Formaldehyde",
                  name: "Formaldehyde",
                  children: [
                    {
                      id: "MS",
                      name: "MS",
                      children: null,
                    },
                    {
                      id: "NMR_1H",
                      name: "NMR_1H",
                      children: null,
                    },
                  ],
                },
                {
                  id: "Propionaldehyde",
                  name: "Propionaldehyde",
                  children: [
                    {
                      id: "NMR_1H",
                      name: "NMR_1H",
                      children: null,
                    },
                  ],
                },
              ],
            },
            {
              id: "Acid",
              name: "Acid",
              children: [
                {
                  id: "Acetic Acid",
                  name: "Acetic Acid",
                  children: [
                    {
                      id: "IR",
                      name: "IR",
                      children: null,
                    },
                    {
                      id: "NMR_1H",
                      name: "NMR_1H",
                      children: null,
                    },
                    {
                      id: "MS",
                      name: "MS",
                      children: null,
                    },
                  ],
                },
                {
                  id: "Acetic Acid",
                  name: "Acetic Acid",
                  children: [
                    {
                      id: "IR",
                      name: "IR",
                      children: null,
                    },
                    {
                      id: "NMR_1H",
                      name: "NMR_1H",
                      children: null,
                    },
                    {
                      id: "MS",
                      name: "MS",
                      children: null,
                    },
                  ],
                },
                {
                  id: "Propionic Acid",
                  name: "Propionic Acid",
                  children: [
                    {
                      id: "MS",
                      name: "MS",
                      children: null,
                    },
                  ],
                },
                {
                  id: "Acetic Acid",
                  name: "Acetic Acid",
                  children: [
                    {
                      id: "IR",
                      name: "IR",
                      children: null,
                    },
                    {
                      id: "NMR_1H",
                      name: "NMR_1H",
                      children: null,
                    },
                    {
                      id: "MS",
                      name: "MS",
                      children: null,
                    },
                  ],
                },
                {
                  id: "Carboxylic Acid",
                  name: "Carboxylic Acid",
                  children: [
                    {
                      id: "MS",
                      name: "MS",
                      children: null,
                    },
                    {
                      id: "NMR_13C",
                      name: "NMR_13C",
                      children: null,
                    },
                    {
                      id: "NMR_1H",
                      name: "NMR_1H",
                      children: null,
                    },
                    {
                      id: "IR",
                      name: "IR",
                      children: null,
                    },
                  ],
                },
                {
                  id: "Formic Acid",
                  name: "Formic Acid",
                  children: [
                    {
                      id: "NMR_1H",
                      name: "NMR_1H",
                      children: null,
                    },
                  ],
                },
                {
                  id: "Carboxylic Acid",
                  name: "Carboxylic Acid",
                  children: [
                    {
                      id: "MS",
                      name: "MS",
                      children: null,
                    },
                    {
                      id: "NMR_13C",
                      name: "NMR_13C",
                      children: null,
                    },
                    {
                      id: "NMR_1H",
                      name: "NMR_1H",
                      children: null,
                    },
                    {
                      id: "IR",
                      name: "IR",
                      children: null,
                    },
                  ],
                },
                {
                  id: "Carboxylic Acid",
                  name: "Carboxylic Acid",
                  children: [
                    {
                      id: "MS",
                      name: "MS",
                      children: null,
                    },
                    {
                      id: "NMR_13C",
                      name: "NMR_13C",
                      children: null,
                    },
                    {
                      id: "NMR_1H",
                      name: "NMR_1H",
                      children: null,
                    },
                    {
                      id: "IR",
                      name: "IR",
                      children: null,
                    },
                  ],
                },
                {
                  id: "Carboxylic Acid",
                  name: "Carboxylic Acid",
                  children: [
                    {
                      id: "MS",
                      name: "MS",
                      children: null,
                    },
                    {
                      id: "NMR_13C",
                      name: "NMR_13C",
                      children: null,
                    },
                    {
                      id: "NMR_1H",
                      name: "NMR_1H",
                      children: null,
                    },
                    {
                      id: "IR",
                      name: "IR",
                      children: null,
                    },
                  ],
                },
                {
                  id: "Hexaonic Acid",
                  name: "Hexaonic Acid",
                  children: [
                    {
                      id: "IR",
                      name: "IR",
                      children: null,
                    },
                  ],
                },
                {
                  id: "L-Alanine",
                  name: "L-Alanine",
                  children: [
                    {
                      id: "IR",
                      name: "IR",
                      children: null,
                    },
                  ],
                },
              ],
            },
            {
              id: "Amine",
              name: "Amine",
              children: [
                {
                  id: "Propylamine",
                  name: "Propylamine",
                  children: [
                    {
                      id: "NMR_1H",
                      name: "NMR_1H",
                      children: null,
                    },
                    {
                      id: "NMR_13C",
                      name: "NMR_13C",
                      children: null,
                    },
                  ],
                },
                {
                  id: "Butylamine",
                  name: "Butylamine",
                  children: [
                    {
                      id: "NMR_13C",
                      name: "NMR_13C",
                      children: null,
                    },
                    {
                      id: "MS",
                      name: "MS",
                      children: null,
                    },
                    {
                      id: "NMR_1H",
                      name: "NMR_1H",
                      children: null,
                    },
                  ],
                },
                {
                  id: "Butylamine",
                  name: "Butylamine",
                  children: [
                    {
                      id: "NMR_13C",
                      name: "NMR_13C",
                      children: null,
                    },
                    {
                      id: "MS",
                      name: "MS",
                      children: null,
                    },
                    {
                      id: "NMR_1H",
                      name: "NMR_1H",
                      children: null,
                    },
                  ],
                },
                {
                  id: "Butylamine",
                  name: "Butylamine",
                  children: [
                    {
                      id: "NMR_13C",
                      name: "NMR_13C",
                      children: null,
                    },
                    {
                      id: "MS",
                      name: "MS",
                      children: null,
                    },
                    {
                      id: "NMR_1H",
                      name: "NMR_1H",
                      children: null,
                    },
                  ],
                },
                {
                  id: "Dipropylamine",
                  name: "Dipropylamine",
                  children: [
                    {
                      id: "IR",
                      name: "IR",
                      children: null,
                    },
                  ],
                },
                {
                  id: "Ethylamine",
                  name: "Ethylamine",
                  children: [
                    {
                      id: "NMR_13C",
                      name: "NMR_13C",
                      children: null,
                    },
                  ],
                },
                {
                  id: "Methylamine",
                  name: "Methylamine",
                  children: [
                    {
                      id: "IR",
                      name: "IR",
                      children: null,
                    },
                  ],
                },
                {
                  id: "Propylamine",
                  name: "Propylamine",
                  children: [
                    {
                      id: "NMR_1H",
                      name: "NMR_1H",
                      children: null,
                    },
                    {
                      id: "NMR_13C",
                      name: "NMR_13C",
                      children: null,
                    },
                  ],
                },
              ],
            },
            {
              id: "Amino Acid",
              name: "Amino Acid",
              children: [
                {
                  id: "DL-Valine",
                  name: "DL-Valine",
                  children: [
                    {
                      id: "NMR_13C",
                      name: "NMR_13C",
                      children: null,
                    },
                    {
                      id: "NMR_1H",
                      name: "NMR_1H",
                      children: null,
                    },
                  ],
                },
                {
                  id: "Alanine",
                  name: "Alanine",
                  children: [
                    {
                      id: "MS",
                      name: "MS",
                      children: null,
                    },
                  ],
                },
                {
                  id: "Glycine",
                  name: "Glycine",
                  children: [
                    {
                      id: "MS",
                      name: "MS",
                      children: null,
                    },
                    {
                      id: "NMR_13C",
                      name: "NMR_13C",
                      children: null,
                    },
                    {
                      id: "NMR_1H",
                      name: "NMR_1H",
                      children: null,
                    },
                    {
                      id: "IR",
                      name: "IR",
                      children: null,
                    },
                  ],
                },
                {
                  id: "DL-Valine",
                  name: "DL-Valine",
                  children: [
                    {
                      id: "NMR_13C",
                      name: "NMR_13C",
                      children: null,
                    },
                    {
                      id: "NMR_1H",
                      name: "NMR_1H",
                      children: null,
                    },
                  ],
                },
                {
                  id: "Glycine",
                  name: "Glycine",
                  children: [
                    {
                      id: "MS",
                      name: "MS",
                      children: null,
                    },
                    {
                      id: "NMR_13C",
                      name: "NMR_13C",
                      children: null,
                    },
                    {
                      id: "NMR_1H",
                      name: "NMR_1H",
                      children: null,
                    },
                    {
                      id: "IR",
                      name: "IR",
                      children: null,
                    },
                  ],
                },
                {
                  id: "Glycine",
                  name: "Glycine",
                  children: [
                    {
                      id: "MS",
                      name: "MS",
                      children: null,
                    },
                    {
                      id: "NMR_13C",
                      name: "NMR_13C",
                      children: null,
                    },
                    {
                      id: "NMR_1H",
                      name: "NMR_1H",
                      children: null,
                    },
                    {
                      id: "IR",
                      name: "IR",
                      children: null,
                    },
                  ],
                },
                {
                  id: "Glycine",
                  name: "Glycine",
                  children: [
                    {
                      id: "MS",
                      name: "MS",
                      children: null,
                    },
                    {
                      id: "NMR_13C",
                      name: "NMR_13C",
                      children: null,
                    },
                    {
                      id: "NMR_1H",
                      name: "NMR_1H",
                      children: null,
                    },
                    {
                      id: "IR",
                      name: "IR",
                      children: null,
                    },
                  ],
                },
              ],
            },
            {
              id: "Este",
              name: "Este",
              children: [
                {
                  id: "Ethyl Acetate",
                  name: "Ethyl Acetate",
                  children: [
                    {
                      id: "NMR_13C",
                      name: "NMR_13C",
                      children: null,
                    },
                    {
                      id: "NMR_1H",
                      name: "NMR_1H",
                      children: null,
                    },
                    {
                      id: "IR",
                      name: "IR",
                      children: null,
                    },
                    {
                      id: "MS",
                      name: "MS",
                      children: null,
                    },
                  ],
                },
                {
                  id: "Ethyl Acetate",
                  name: "Ethyl Acetate",
                  children: [
                    {
                      id: "NMR_13C",
                      name: "NMR_13C",
                      children: null,
                    },
                    {
                      id: "NMR_1H",
                      name: "NMR_1H",
                      children: null,
                    },
                    {
                      id: "IR",
                      name: "IR",
                      children: null,
                    },
                    {
                      id: "MS",
                      name: "MS",
                      children: null,
                    },
                  ],
                },
                {
                  id: "Ethyl Acetate",
                  name: "Ethyl Acetate",
                  children: [
                    {
                      id: "NMR_13C",
                      name: "NMR_13C",
                      children: null,
                    },
                    {
                      id: "NMR_1H",
                      name: "NMR_1H",
                      children: null,
                    },
                    {
                      id: "IR",
                      name: "IR",
                      children: null,
                    },
                    {
                      id: "MS",
                      name: "MS",
                      children: null,
                    },
                  ],
                },
                {
                  id: "Ethyl Acetate",
                  name: "Ethyl Acetate",
                  children: [
                    {
                      id: "NMR_13C",
                      name: "NMR_13C",
                      children: null,
                    },
                    {
                      id: "NMR_1H",
                      name: "NMR_1H",
                      children: null,
                    },
                    {
                      id: "IR",
                      name: "IR",
                      children: null,
                    },
                    {
                      id: "MS",
                      name: "MS",
                      children: null,
                    },
                  ],
                },
                {
                  id: "Ethyl formate",
                  name: "Ethyl formate",
                  children: [
                    {
                      id: "MS",
                      name: "MS",
                      children: null,
                    },
                  ],
                },
                {
                  id: "Methyl formate",
                  name: "Methyl formate",
                  children: [
                    {
                      id: "NMR_13C",
                      name: "NMR_13C",
                      children: null,
                    },
                    {
                      id: "NMR_1H",
                      name: "NMR_1H",
                      children: null,
                    },
                    {
                      id: "IR",
                      name: "IR",
                      children: null,
                    },
                    {
                      id: "MS",
                      name: "MS",
                      children: null,
                    },
                  ],
                },
                {
                  id: "Methyl formate",
                  name: "Methyl formate",
                  children: [
                    {
                      id: "NMR_13C",
                      name: "NMR_13C",
                      children: null,
                    },
                    {
                      id: "NMR_1H",
                      name: "NMR_1H",
                      children: null,
                    },
                    {
                      id: "IR",
                      name: "IR",
                      children: null,
                    },
                    {
                      id: "MS",
                      name: "MS",
                      children: null,
                    },
                  ],
                },
                {
                  id: "Methyl formate",
                  name: "Methyl formate",
                  children: [
                    {
                      id: "NMR_13C",
                      name: "NMR_13C",
                      children: null,
                    },
                    {
                      id: "NMR_1H",
                      name: "NMR_1H",
                      children: null,
                    },
                    {
                      id: "IR",
                      name: "IR",
                      children: null,
                    },
                    {
                      id: "MS",
                      name: "MS",
                      children: null,
                    },
                  ],
                },
                {
                  id: "Methyl formate",
                  name: "Methyl formate",
                  children: [
                    {
                      id: "NMR_13C",
                      name: "NMR_13C",
                      children: null,
                    },
                    {
                      id: "NMR_1H",
                      name: "NMR_1H",
                      children: null,
                    },
                    {
                      id: "IR",
                      name: "IR",
                      children: null,
                    },
                    {
                      id: "MS",
                      name: "MS",
                      children: null,
                    },
                  ],
                },
              ],
            },
            {
              id: "Cacbohidrat",
              name: "Cacbohidrat",
              children: [
                {
                  id: "Fructozo",
                  name: "Fructozo",
                  children: [
                    {
                      id: "MS",
                      name: "MS",
                      children: null,
                    },
                  ],
                },
              ],
            },
            {
              id: "Ancol",
              name: "Ancol",
              children: [
                {
                  id: "Butan-1-ol",
                  name: "Butan-1-ol",
                  children: [
                    {
                      id: "IR",
                      name: "IR",
                      children: null,
                    },
                  ],
                },
                {
                  id: "Ethanol",
                  name: "Ethanol",
                  children: [
                    {
                      id: "MS",
                      name: "MS",
                      children: null,
                    },
                    {
                      id: "IR",
                      name: "IR",
                      children: null,
                    },
                    {
                      id: "NMR_1H",
                      name: "NMR_1H",
                      children: null,
                    },
                  ],
                },
                {
                  id: "Propanol",
                  name: "Propanol",
                  children: [
                    {
                      id: "MS",
                      name: "MS",
                      children: null,
                    },
                    {
                      id: "NMR_13C",
                      name: "NMR_13C",
                      children: null,
                    },
                  ],
                },
                {
                  id: "Propanol",
                  name: "Propanol",
                  children: [
                    {
                      id: "MS",
                      name: "MS",
                      children: null,
                    },
                    {
                      id: "NMR_13C",
                      name: "NMR_13C",
                      children: null,
                    },
                  ],
                },
                {
                  id: "Phenol",
                  name: "Phenol",
                  children: [
                    {
                      id: "IR",
                      name: "IR",
                      children: null,
                    },
                    {
                      id: "NMR_13C",
                      name: "NMR_13C",
                      children: null,
                    },
                    {
                      id: "NMR_1H",
                      name: "NMR_1H",
                      children: null,
                    },
                    {
                      id: "MS",
                      name: "MS",
                      children: null,
                    },
                  ],
                },
                {
                  id: "Ethanol",
                  name: "Ethanol",
                  children: [
                    {
                      id: "MS",
                      name: "MS",
                      children: null,
                    },
                    {
                      id: "IR",
                      name: "IR",
                      children: null,
                    },
                    {
                      id: "NMR_1H",
                      name: "NMR_1H",
                      children: null,
                    },
                  ],
                },
                {
                  id: "Ethanol",
                  name: "Ethanol",
                  children: [
                    {
                      id: "MS",
                      name: "MS",
                      children: null,
                    },
                    {
                      id: "IR",
                      name: "IR",
                      children: null,
                    },
                    {
                      id: "NMR_1H",
                      name: "NMR_1H",
                      children: null,
                    },
                  ],
                },
                {
                  id: "Phenol",
                  name: "Phenol",
                  children: [
                    {
                      id: "IR",
                      name: "IR",
                      children: null,
                    },
                    {
                      id: "NMR_13C",
                      name: "NMR_13C",
                      children: null,
                    },
                    {
                      id: "NMR_1H",
                      name: "NMR_1H",
                      children: null,
                    },
                    {
                      id: "MS",
                      name: "MS",
                      children: null,
                    },
                  ],
                },
                {
                  id: "Phenol",
                  name: "Phenol",
                  children: [
                    {
                      id: "IR",
                      name: "IR",
                      children: null,
                    },
                    {
                      id: "NMR_13C",
                      name: "NMR_13C",
                      children: null,
                    },
                    {
                      id: "NMR_1H",
                      name: "NMR_1H",
                      children: null,
                    },
                    {
                      id: "MS",
                      name: "MS",
                      children: null,
                    },
                  ],
                },
                {
                  id: "Phenol",
                  name: "Phenol",
                  children: [
                    {
                      id: "IR",
                      name: "IR",
                      children: null,
                    },
                    {
                      id: "NMR_13C",
                      name: "NMR_13C",
                      children: null,
                    },
                    {
                      id: "NMR_1H",
                      name: "NMR_1H",
                      children: null,
                    },
                    {
                      id: "MS",
                      name: "MS",
                      children: null,
                    },
                  ],
                },
              ],
            },
            {
              id: "Xeton",
              name: "Xeton",
              children: [
                {
                  id: "Heptan-2-one",
                  name: "Heptan-2-one",
                  children: [
                    {
                      id: "IR",
                      name: "IR",
                      children: null,
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  ];
  const CONTENT_TYPE = { theory: 1, video: 2 };
  const HTML_STRING = `<p>Cái bắt tay hợp tác của hai tập đoàn dẫn đầu trong lĩnh vực bất động sản và du lịch lữ hành sẽ mang lại nhiều lợi ích vượt trội cho cộng đồng khách hàng, cũng như nhân sự hai bên, nhằm đẩy mạnh tăng trưởng và đa dạng hóa hoạt động kinh doanh, kết nối khai thác trong hệ sinh thái của hai bên nhằm nâng cao sức cạnh tranh trên thị trường… </p>`;
  const [node, setNode] = useState(TEMP_NODE);
  const [contentType, setContentType] = useState(CONTENT_TYPE.theory);
  const [menu, setMenu] = useState([]);

  const fetchMenu = async () => {
    // if (isLoading) return null;
    // setIsLoading(true);
    const res = await getMenu();
    const res2 = await getMaterial();
    const res3 = await getDocument();
    console.log(res);
    if (res) {
      switch (res.status) {
        case httpStatus.OK: {
          const { data } = res;
          setMenu((pre) => [...pre, ...data.data]);
          break;
        }
        case httpStatus.NOT_FOUND: {
          break;
        }
        default:
          break;
      }
    }
    // setIsLoading(false);
    return null;
  };

  useEffect(() => {
    fetchMenu();
  }, []);
  return (
    <div className="flex pl-72 bg-slate-200">
      <Sidebar nodeList={node}></Sidebar>
      <div className="w-full p-5 min-h-screen">
        <div className="mx-auto max-w-5xl">
          <h1 className=" text-center font-black text-4xl">Nghiên cứu phổ</h1>
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
          <iframe
            className="w-full h-[calc(100vh-100px)] mt-4"
            src="https://khkt-video.s3.ap-southeast-1.amazonaws.com/Introduction_docs.pdf"
            title="Giới thiệu"
          />
          <video
            className="mt-4"
            controls
            src="https://khkt-video.s3.ap-southeast-1.amazonaws.com/1+-+hexyne+IR.mp4"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
