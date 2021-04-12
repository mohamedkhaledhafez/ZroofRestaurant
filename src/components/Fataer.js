import React, { Component } from "react";
import ConafaItem from "./ConafaItem";

const Fataer = (props) => {
  const fataerData = [
    {
      src: "https://i.imgur.com/MRqahSI.jpg",
      name: "شعيبيات بالقشطة",
      desc: "عجين عربي محشية بالقشطة ومخبوزة بالفرن",
      price: 3.5,
    },
    {
      src: "https://i.imgur.com/xlhDJLt.jpg",
      name: "شعيبيات بالجوز",
      desc: "عجين عربي محشية بالجوز ومخبوزة بالفرن",
      price: 3.5,
    },
    {
      src: "https://i.imgur.com/e5iz019.jpg",
      name: "تمرية بالقشطة",
      desc: "عجين عربي محشية بالقشطة ومقلية",
      price: 6,
    },
    {
      src: "https://i.imgur.com/IWCBhee.jpg",
      name: "تمرية سادة",
      desc: "عجين عربي مقلي مضاف له القطر",
      price: 4,
    },
    {
      src: "https://i.imgur.com/EPu9291.jpg",
      name: "قطايف",
      desc: "قطايف مقلية محشية بالجبنة أو القشطة",
      price: 58,
    },
    {
      src: "https://i.imgur.com/0yNImFr.jpg",
      name: "عصافرية",
      desc: "قطايف محشية بالقشطة البلدية ومزينة بالفستق",
      price: 58,
    },
    {
      src: "https://i.imgur.com/Ebe2gKq.jpg",
      name: "مشبك",
      desc: "",
      price: 35,
    },
    {
      src: "https://i.imgur.com/jhz6IKa.jpg",
      name: "فواشات",
      desc: "",
      price: 35,
    },
    {
      src: "https://i.imgur.com/8OYzvfQ.jpg",
      name: "كلير",
      desc: "",
      price: 3.5,
    }
  ];

return (
    <>
      <div className="conafat">
        {fataerData.map(({ src, name, desc, price }) => (
          <ConafaItem
            src={src}
            name={name}
            desc={desc}
            price={price}
            setTotalCount={props.setTotalCount}
          />
        ))}
      </div>
    </>
  );
}

export default Fataer;