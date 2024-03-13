const { Button } = require("reactstrap");

function Square({ value, onClick }) {
  return (
    <Button className="square" onClick={onClick}>
      {value}
    </Button>
  );
}
export default Square;
