import React from "react"

interface Props {
  title: string,
  context: string
  img: string
}

const ColInner: React.FC<Props> = ({ title, img, context }) => {
  return (
    <div className="col-inner">
      <img src={img} alt={title} className="col-inner__img" width={'60px'} height={'60px'}/>
      <div className="col-inner__left-content">
        <strong>{title}</strong>
        <p>{context}</p>
      </div>
    </div>
  )
}

export default ColInner