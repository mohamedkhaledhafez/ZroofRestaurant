import React, { Component } from "react";
import ConafaItem from "./ConafaItem";

const Halawa = (props) => {
  const halawaData = [
    {
      src: "https://i.imgur.com/UkdyIKm.jpg",
      name: "صحن حلاوة الجبن",
      desc: "حلاوة الجبن محشية بالقشطة العربية",
      price: 58,
    },
    {
      src: "https://i.imgur.com/jrmDWzB.jpg",
      name: "حلاوة رزية",
      desc: "حلاوة الرز مضاف لها الجبنة",
      price: 30
    },
    {
      src: "https://i.imgur.com/KnwcvRE.jpg",
      name: "معجوقة",
      desc: "طبقة من حلاوة الجبن مغطاة بالقشطة البلدية والمكسراتت",
      price: 70,
    },
    {
      src: "https://i.imgur.com/DUrOqUj.jpg",
      name: "مدلوقة",
      desc: "كنافة محمصة مغطاة بطبقة من القشطة البلدية والمكسرات",
      price: 70,
    }
  ];

return (
    <>
      <div className="conafat">
        {halawaData.map(({ src, name, desc, price }) => (
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

export default Halawa;