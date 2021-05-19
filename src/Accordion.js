import React from "react";
import styled from "styled-components";
import Collapsible from "./Collapsible";
const faqs = [
  {
    question: "How many team members can I invite?",
    answer:
      "You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan.",
  },
  {
    question: "What is the maximum file upload size?",
    answer:
      "No more than 2GB. All files in your account must fit your allotted storage space.",
  },
  {
    question: "How do I reset my password?",
    answer:
      "Click “Forgot password” from the login page or “Change password” from your profile page.",
  },
  {
    question: "Can I cancel my subscription?",
    answer:
      "Yes! Send us a message and we’ll process your request no questions asked.",
  },
  {
    question: "Do you provide additional support?",
    answer:
      "Chat and email support is available 24/7. Phone lines are open during normal business hours.",
  },
  {
    question: "Do you provide additional support?",
    answer:
      "Chat and email support is available 24/7. Phone lines are open during normal business hours.",
  },
];
const Accordion = () => {
  return (
    <Container>
      <Card>
        <Hero>
          <div className="hero">
            <picture>
              <source
                media="(min-width:768px)"
                srcSet="/assets/images/illustration-woman-online-desktop.svg"
              />
              <img
                src="/assets/images/illustration-woman-online-mobile.svg"
                alt="Hero"
              />
            </picture>
            <div className="pattern">
              <picture>
                <source
                  media="(min-width:768px)"
                  srcSet="/assets/images/bg-pattern-desktop.svg"
                />
                <img src="/assets/images/bg-pattern-mobile.svg" alt="pattern" />
              </picture>
            </div>
            <div className="box">
              <img
                src="/assets/images/illustration-box-desktop.svg"
                alt="pattern"
              />
            </div>
          </div>
        </Hero>
        <div className="card-content">
          <Title>FAQ</Title>
          <div className="faq">
            {faqs.map((faq, i) => (
              <Collapsible key={i} faq={faq} />
            ))}
          </div>
        </div>
      </Card>
    </Container>
  );
};
const Container = styled.div`
  min-height: 100vh;
  position: relative;
  overflow: hidden;

  padding: 10em 1em 0;
  display: flex;
  justify-content: center;
  /* align-items: center; */
  &:before {
    background: linear-gradient(
      180deg,
      hsl(273, 75%, 66%) 0%,
      hsl(240, 73%, 65%) 70%
    );
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
  }
  @media (min-width: 768px) {
    padding: 5em 1em 0;
  }
`;

const Card = styled.div`
  background-color: white;
  width: 100%;
  max-width: 950px;
  border-radius: 25px;
  padding: 1em;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  .faq {
    width: 100%;
  }
  @media (min-width: 768px) {
    flex-direction: row;
    padding: 5em;
    .card-content {
      width: 80%;
    }
  }
`;
const Hero = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  bottom: 120px;
  right: 15px;
  .hero {
    position: absolute;
    height: 100%;
  }
  .pattern {
    position: relative;
    bottom: 100px;
    left: 25px;
  }
  .box {
    display: none;
  }
  @media (min-width: 768px) {
    @keyframes updown {
      from {
        transform: translateY(0);
      }
      to {
        transform: translateY(-20px);
      }
    }
    width: 50%;
    .hero {
      position: relative;
      right: 150px;
      top: 100px;
    }
    .pattern {
      position: absolute;
      bottom: -50px;
      left: 0px;
      img {
        width: 472px;
        object-fit: contain;
      }
    }
    .box {
      display: block;
      position: absolute;
      bottom: 60px;
      left: -10px;
      animation-duration: 1s;
      animation-name: updown;
      animation-iteration-count: infinite;
      animation-direction: alternate;
      img {
        width: 180px;
      }
    }
  }
`;

const Title = styled.h1`
  font-size: 2rem;
  text-align: center;
  @media (min-width: 768px) {
    font-size: 2.4rem;
    text-align: left;
  }
`;
export default Accordion;
