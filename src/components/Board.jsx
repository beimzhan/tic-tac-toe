import PropTypes from 'prop-types';
import { Square } from './Square';

export const Board = ({board, updateGame}) => {
  return (
    <div className='grid grid-cols-3'>
      {board.map((row, rowIndex) => (
        row.map((square, colIndex) => (
          <Square
            key={`${rowIndex}-${colIndex}`}
            square={square}
            updateGame={() => updateGame(rowIndex, colIndex)}
          />
        ))
      ))}
    </div>
  )
}

Board.propTypes = {
  board: PropTypes.array.isRequired,
  updateGame: PropTypes.func.isRequired
};
