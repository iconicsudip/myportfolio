import * as React from 'react';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';

export default function IconAlerts(props) {
  return (
    <div style={{"position": "fixed","top": "0","width": "100%","left": "0","zIndex": "2"}}>
    <Alert severity="success" >
        <AlertTitle>Success</AlertTitle>
        <strong>{props.data}</strong>
      </Alert>
    </div>
  );
}