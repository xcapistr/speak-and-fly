const Spinner = ({ done }) => {
  return (
    <>
      <img
        className={done ? 'spinner' : ['spinner','animate'].join(' ')}
        src={done ? '/check.svg' : '/spinner.svg'}
        alt="spinner"
      />
      <style jsx>{`
        @keyframes rotate {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
        .spinner {
          width: 25px;
          height: 25px;
          margin: -2px 0 -6px;
        }
        .spinner.animate {
            animation: rotate 1s linear infinite;
        }
      `}</style>
    </>
  )
}

export default Spinner
