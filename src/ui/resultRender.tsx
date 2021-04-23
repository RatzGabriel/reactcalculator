import styled from "styled-components";

const Result = styled.div`
  width: 100%;
  text-align: right;
`;

export interface ResultRendererProps {
  saveResult: any;
}

const ResultRenderer: React.FC<ResultRendererProps> = (props) => {
  return <Result>{props.saveResult}</Result>;
};

export default ResultRenderer;
