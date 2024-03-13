import React from "react";

//* components
import { _Board } from "api/home/_Board";
import Board from "components/Board";

//* Third Party components
import { useParams } from "react-router-dom";

//* store
import { SquaresStore } from "store/Squares";
import { useQuery } from "react-query";
import { Button } from "reactstrap";

function OldGame() {
  const params = useParams();
  const [squares, setSquares] = SquaresStore((state) => [
    state.squares,
    state.setSquares,
  ]);

  const { data } = useQuery(["board"], () =>
    _Board.board(params.id).then((res) => {
      setSquares(convertStringToArray(res.board));
      return res;
    })
  );

  function convertArrayToString(array) {
    return array
      .map((item) => {
        if (item === "X") return "1";
        if (item === "O") return "2";
        return "0";
      })
      .join("");
  }
  function convertStringToArray(str) {
    return str.split("").map((char) => {
      if (char === "1") return "X";
      if (char === "2") return "O";
      if (char === "0") return null;
      return null;
    });
  }

  const UpdateOldGame = () => {
    var NewData = {
      board: convertArrayToString(squares),
      name: data?.name,
    };
    _Board.update(params.id, NewData);
  };

  return (
    <div className="vh-100">
      {data && (
        <>
          <h2 className="text-white">{data?.name}</h2>
          <Board />
          <Button className="outlined mt-3" onClick={() => UpdateOldGame()}>
            Save
          </Button>
        </>
      )}
    </div>
  );
}

export default OldGame;
