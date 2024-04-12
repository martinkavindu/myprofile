import React from 'react'
import "../../style/floating.css"
import whatsapp from '../../assets/images/whatsapp.png'
const Floatingbutton = () => {
  return (
    <div className="flaoting_parent">

<a
 href="https://wa.me/254741934896" target='_blank'  rel="noreferrer">
<img src={whatsapp} alt='' style={{ height: '50px', width: '50px', borderRadius: '50%' }} />
 </a>


 </div>
  )
}

export default Floatingbutton