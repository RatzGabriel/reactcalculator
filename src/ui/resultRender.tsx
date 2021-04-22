export interface ResultRendererProps {
  saveResult: any;
}

const ResultRenderer: React.FC<ResultRendererProps> = (props) => {
  return <div>{props.saveResult}</div>;
};

export default ResultRenderer;
