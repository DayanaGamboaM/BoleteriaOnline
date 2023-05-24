import React from 'react'
import ToggleButton from './ToggleButton'

const SendEmail = () => {
  return (
    <div>
        <div className='send-email'>
            <h5 id='send'>Envío de Email</h5>
            <h5 id='deactive'>Desactivar</h5>
            <div className='togglebutton'>
                <ToggleButton/>
            </div>
            <h5 id='activate'>Activar</h5>
        </div>
    </div>
  )
}

export default SendEmail