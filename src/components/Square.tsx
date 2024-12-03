import { Button } from "react-bootstrap";


const Square = ({value, onSquareClick}: any  ) => {
  return (
    <div>
      <Button className="square" onClick={onSquareClick}>{value}</Button>
    </div>
  );
};

export default Square;
