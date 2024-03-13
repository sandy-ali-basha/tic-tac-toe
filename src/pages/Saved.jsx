import { Container, Spinner } from "reactstrap";

import DeleteDialog from "../components/DeleteGame";
import { useBoards } from "hooks/useBoards";
import { Link } from "react-router-dom";

function Saved() {
  const { data } = useBoards();

  function convertStringToArray(str) {
    return str.split("").map((char) => {
      if (char === "1") return "X";
      if (char === "2") return "O";
      if (char === "0") return " ";

      return null;
    });
  }
  function DrowBoard(boardData) {
    return (
      <div className="border rounded p-2 boardGrid">
        {convertStringToArray(boardData).map((item, index) => (
          <div key={index}>{item}</div>
        ))}
      </div>
    );
  }

  return (
    <Container className="vh-100">
      {data ? (
        <div className=" d-flex flex-wrap">
          {data?.map((item, index) => {
            return (
              <div className="game m-2" key={index}>
                <h2>{item.name}</h2>
                {DrowBoard(item.board)}
                <DeleteDialog id={item.id} />
                <Link to={`/Saved/${item.id}`}>Load Game</Link>
              </div>
            );
          })}
        </div>
      ) : (
        <Spinner color="white" />
      )}
    </Container>
  );
}
export default Saved;
