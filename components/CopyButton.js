import {useState} from 'react'

const CopyButton = ({text}) => {
    const [isClicked, setIsClicked] = useState(false)
  return (
    <>
      <button
        className={isClicked ? 'clicked' : ''}
        onClick={async () => {
          setIsClicked(true)
          navigator.clipboard.writeText(text)
          setTimeout(()=>{
              setIsClicked(false)
          }, 300)
        }}
      >
        <img src="/copy-outline.svg" alt="copy" />
      </button>
      <style jsx>{`
        button {
          border: none;
          background: transparent;
          cursor: pointer;
          padding: 5px;
          margin-left: 5px;
          border-radius: 3px;
        }
        button:hover > img {
          opacity: 1;
        }
        @keyframes clicked {
          0% { transform: scale(1); }
          50% { transform: scale(1.4); }
          100% { transform: scale(1); }
        }
        button.clicked {
          animation-duration: .3s;
          animation-name: clicked;
          animation-iteration-count: 1;
          animation-timing-function: ease-out;
        }
        button > img {
          width: 20px;
          height: 20px;
          transform: translateY(4px);
          opacity: 0.7;
        }
       `}</style>
    </>
  )
}

export default CopyButton
