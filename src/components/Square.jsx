import PropTypes from 'prop-types';

export const Square = ({ square, updateGame }) => {
  return (
    <div
      className='bg-blue-400 w-24 h-24 m-1 flex items-center justify-center cursor-pointer'
      onClick={updateGame}
    >
      <span className='text-white text-4xl select-none'>{square}</span>
    </div>
  )
}

Square.propTypes = {
  square: PropTypes.string.isRequired,
  updateGame: PropTypes.func.isRequired
}
