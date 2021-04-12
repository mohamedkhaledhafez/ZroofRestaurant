import React, { Component } from "react";
import "./Categories.css";

const Categories = (props) => {
  const categs = [
    {
      img: "https://i.imgur.com/4QYYGTR.jpg",
      name: "كنافات",
      id: 1,
    },
    {
      img: "https://i.imgur.com/UkdyIKm.jpg",
      name: "حلاوة الجبن",
      id: 2,
    },
    {
      img: "https://i.imgur.com/J6EblwN.jpg",
      name: "فطائر وشعيبيات",
      id: 3,
    },
    {
      img: "https://i.imgur.com/CCdjTk6.jpg",
      name: "صفائح ومعجنات",
      id: 4,
    },
    {
      img: "https://i.imgur.com/y4F9J7d.jpg",
      name: "حلويات شرقية",
      id: 5,
    },
    {
      img: "https://i.imgur.com/CY9tiUs.jpg",
      name: "نواشف",
      id: 6,
    },
    {
      img: "https://l.top4top.io/p_1874beccv1.jpg",
      name: "عروض اليوم",
      id: 7,
    },
  ];

  return (
    <div className="categ">
      {categs.map((cat) => (
        <div onClick={() => props.setCatId(cat.id)} className="CategsContainer">
          <img src={cat.img} />
          <h4>{cat.name}</h4>
        </div>
      ))}
    </div>
  );
};

export default Categories;
