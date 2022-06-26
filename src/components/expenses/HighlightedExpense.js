import styled from "styled-components";

const HighlightedExpense = (props) => {
  return (
    <Figure>
      <p>{props.text}</p>
      <figcaption>${props.price}</figcaption>
      <figcaption> {props.date}</figcaption>
    </Figure>
  );
};
export default HighlightedExpense;

const Figure = styled.figure`
  background-color: #a892ee;
  color: white;
  border-radius: 6px;
  padding: 3rem;
  margin: 3rem auto;
  width: 90%;
  max-width: 40rem;

  p {
    font-size: 2.5rem;
  }

  figcaption {
    font-style: italic;
    font-size: 1.5rem;
    text-align: right;
    color: #a1e0e0;
  }
`;
