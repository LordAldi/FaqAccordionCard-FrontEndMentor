import React, { useState } from "react";
import styled from "styled-components";

const Collapsible = ({ faq }) => {
  const [open, setOpen] = useState(false);
  return (
    <Collaps
      onClick={() => {
        setOpen(!open);
      }}
    >
      <div className={`question`}>
        <h4 className={`${open ? "bold" : ""}`}>{faq.question}</h4>
        <span className={`${open ? "flip" : ""}`}>
          <img src="/assets/images/icon-arrow-down.svg" alt=">" />
        </span>
      </div>
      <p className={`answer ${!open ? "hidden" : ""}`}>{faq.answer}</p>
      <div className="line"></div>
    </Collaps>
  );
};
const Collaps = styled.div`
  font-size: 0.9rem;
  width: 100%;
  cursor: pointer;
  .question {
    display: flex;
    align-items: center;
    h4 {
      flex: 1;
      font-weight: 400;
      padding: 0;
      color: hsl(238, 29%, 16%);
      transition: all 0.2s ease-in;
    }
    span {
      transition: all 0.2s ease-in;
    }
    .flip {
      transform: rotate(180deg);
    }
  }
  .bold {
    font-weight: 700 !important;
  }
  .answer {
    display: block;
    opacity: 1;
    color: hsl(240, 6%, 50%);
    margin-top: 0;
    transition: all 0.25s ease-in;
  }
  .hidden {
    height: 0;
    overflow: hidden;
    opacity: 0;
    transform: translateY(-10px);
    margin: 0;
  }
  .line {
    border-bottom: 1px solid hsl(240, 5%, 91%);
  }
`;
export default Collapsible;
