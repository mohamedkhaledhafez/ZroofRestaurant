import React, { Component } from "react";
import ConafaItem from "./ConafaItem";

const Conafa = (props) => {
  const conafaData = [
    {
      src: "https://i.imgur.com/tw1w13Y.jpg",
      name: "فيصليات",
      desc: "مثلثات من الكنافة المحمصة محشية بالفستق الحلبي الأخضر",
      price: 58,
    },
    {
      src: "https://i.imgur.com/qr1zZIK.jpg",
      name: "(كنافة على البارد (عثملية",
      desc: "كنافة خشنة محشية بطبقة من القشطة العربية على البارد",
      price: 65,
    },
    {
      src: "https://k.top4top.io/p_1874cgmgr1.jpeg",
      name: "كنافة 8 نجوم ناعمة",
      desc: "كنافة ناعمة محشية بطبقة من الفستق وطبقة من القشطة",
      price: 65,
    },
    {
      src: "https://i.imgur.com/S8PCyki.jpg",
      name: "كنافة 8 نجوم خشنة",
      desc: "كنافة خشنة محشية بطبقة من الفستق وطبقة من القشطة",
      price: 65,
    },
    {
      src: "https://i.imgur.com/tw1w13Y.jpg",
      name: "كنافة ناعمة بالقشطة",
      desc: "كنافة ناعمة محشية بطبقة من القشطة",
      price: 52,
    },
    {
      src: "https://i.imgur.com/lcZ3JeZ.jpg",
      name: "كنافة خشنة بالقشطة",
      desc: "كنافة خشنة محشية بطبقة من القشطة",
      price: 52,
    },
    {
      src: "https://i.imgur.com/PlO9fpZ.jpg",
      name: "نابلسية بالجبنة",
      desc: "كنافة ناعمة محشية بالجبن",
      price: 52,
    },
  ];

  return (
    <>
      <div className="conafat">
        {conafaData.map(({ src, name, desc, price }) => (
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
};

export default Conafa;
