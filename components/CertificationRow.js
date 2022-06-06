import Image from 'next/image'

const CertificationRow = (props) => {
  const desktopClasses = [
    'certification-row',
    props.right ? 'right' : 'left',
  ].join(' ')

  return (
    <>
      <div className={desktopClasses}>
        <div>
          {props.year && (
            <div className="year">
              {props.year.split(' ').map((y) => (
                <>
                  {y}
                  <br />
                </>
              ))}
            </div>
          )}
        </div>
        <div>{props.year && <div className="timeline-point"></div>}</div>
        <div>
          <div className="certification-item">
            <Image
              className="certification-icon"
              src="/certificateicon-color.svg"
              width="40"
              height="40"
              alt="certification"
            />
            <div className="text-wrapper">
              <p className="title">{props.name}</p>
              {props.institution && (
                <p className="description">{props.institution}</p>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="certification-row-mobile">
        {props.year && (
          <div className="year-wrapper">
            <div className="timeline-point"></div>
            <div className="year">
              {props.year.split(' ').map((y) => (
                <>
                  {y}
                  <br />
                </>
              ))}
            </div>
          </div>
        )}
        <div className="certification-item">
          <Image
            className="certification-icon"
            src="/certificateicon-color.svg"
            width="40"
            height="40"
            alt="certification"
          />
          <div className="text-wrapper">
            <p className="title">{props.name}</p>
            {props.institution && (
              <p className="description">{props.institution}</p>
            )}
          </div>
        </div>
      </div>
      <style jsx>{`
        .certification-row {
          display: none;
          align-items: center;
          margin: 20px 0;
        }
        .certification-row.right {
          flex-direction: row-reverse;
        }
        .certification-row > div:first-child,
        .certification-row > div:last-child {
          flex: 1;
          padding: 0 20px;
        }
        .certification-row > div:nth-child(2) {
          width: 15px;
        }
        .year {
          background-color: rgb(36, 62, 120);
          color: #fff;
          padding: 10px 20px;
          float: right;
          position: relative;
          border-radius: 10px;
        }
        .certification-row.right .year {
          float: left;
        }
        .year:after {
          content: ' ';
          background-color: rgb(36, 62, 120);
          width: 15px;
          height: 15px;
          transform: rotate(45deg);
          position: absolute;
          right: -7px;
          top: calc(50% - 8px);
          border-radius: 0 3px 0 3px;
        }
        .certification-row.right .year:after {
          left: -7px;
        }
        .certification-item {
          background-color: #eee;
          display: flex;
          align-items: center;
          border-radius: 10px;
          padding: 20px;
          position: relative;
          float: left;
          width: 100%;
        }
        .certification-row.right .certification-item {
          float: right;
        }
        .certification-item:after {
          content: ' ';
          background-color: #eee;
          width: 20px;
          height: 20px;
          transform: rotate(45deg);
          position: absolute;
          border-radius: 0 3px 0 3px;
        }
        .certification-row.left .certification-item:after {
          left: -9px;
        }
        .certification-row.right .certification-item:after {
          right: -9px;
        }
        .text-wrapper {
          flex: 1;
        }
        .text-wrapper > p {
          margin: 0 0 0 20px;
        }
        .timeline-point {
          width: 13px;
          height: 13px;
          background-color: #e45d73;
          border-radius: 50%;
          border: 2px solid #fff;
          margin: 0 auto;
        }

        .certification-row-mobile {
          display: flex;
          flex-direction: column;
          padding: 0 20px;
        }

        .certification-row-mobile .certification-item {
          margin-top: 20px;
        }

        .certification-row-mobile .certification-item:after {
          display: none;
        }

        .year-wrapper {
          display: flex;
          align-items: center;
          justify-content: flex-start;
          margin-top: 40px;
        }

        .year-wrapper > .timeline-point {
          margin: 0 20px 0 40px;
        }

        .year-wrapper .year:after {
          left: -7px;
        }

        @media only screen and (min-width: 568px) {
          .certification-row {
            display: flex;
          }
          .certification-row-mobile {
            display: none;
          }
        }
      `}</style>
    </>
  )
}

export default CertificationRow
