import React from 'react'

import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';

function BootstrapDemo() {
  return (
    <div>
       {/* Buttons */}
       <Button variant="primary">Primary</Button> 

       {/* Alert */}
      <Alert variant="success">
        This is a  alert—check it out!
      </Alert>
    </div>
  )
}

export default BootstrapDemo
