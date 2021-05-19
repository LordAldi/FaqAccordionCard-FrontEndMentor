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
            <img
              src="/assets/images/illustration-woman-online-mobile.svg"
              alt="woman"
            />
          </div>
          <div className="pattern">
            <img src="/assets/images/bg-pattern-mobile.svg" alt="pattern" />
          </div>
        </Hero>
        <Title>FAQ</Title>
        <div className="faq">
          {faqs.map((faq, i) => (
            <Collapsible key={i} faq={faq} />
          ))}
        </div>
      </Card>
    </Container>
  );
};
const Container = styled.div`
  min-height: 100vh;
  position: relative;
  overflow: hidden;

  padding: 10em 1em;
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
`;

const Card = styled.div`
  background-color: white;
  width: 100%;
  max-width: 1100px;
  border-radius: 25px;
  padding: 1em;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  .faq {
    width: 100%;
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
  }
  .pattern {
    position: relative;
    top: 110px;
    left: 15px;
  }
`;

const Title = styled.h1`
  font-size: 2rem;
`;
export default Accordion;
