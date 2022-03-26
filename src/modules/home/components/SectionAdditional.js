import React from 'react'

const SectionAdditional = ({data}) => {
  return (
    <section className="section section__additional">
      <div className="grid__layout">
        {data.map((item) => {
          const {id, image, title} = item;
          return(
            <article key={id} className="card__item card__item--additional">
              <div>{image}</div>
              <h4 className="title title__additional">{title}</h4>
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default SectionAdditional