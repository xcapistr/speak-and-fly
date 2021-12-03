import { useMemo } from 'react'
import { CertificationRow } from '../components'

const Certification = (props) => {
  const items = useMemo(() => {
    const result = []
    let right = false
    props.items.forEach((c, i) => {
      const sameYear = c.year === props.items[i - 1]?.year
      if (!sameYear) right = !right
      result.push({
        ...c,
        year: sameYear ? null : c.year,
        right,
      })
    })
    return result;
  }, [props.items])

  return (
    <section id="certification" className="certification-section">
      <h2>{props.title.sk}</h2>
      <div className="certification-list">
        {items.map((c) => (
          <CertificationRow
            key={c._key}
            name={c.name?.sk}
            institution={c.institution?.sk}
            year={c.year}
            right={c.right}
          />
        ))}
      </div>
      <style jsx>{`
        .certification-list {
          max-width: 1000px;
          margin: 0 auto;
          position: relative;
        }
        .certification-list:before {
          content: '';
          position: absolute;
          left: 66px;
          width: 2px;
          transform: translate(-0.5px);
          height: 100%;
          background-color: #e45d73;
          z-index: -1;
        }
        @media only screen and (min-width: 568px) {
          .certification-list:before {
            left: 50%;
          }
        }
      `}</style>
    </section>
  )
}

export default Certification
