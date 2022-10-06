import * as React from 'react';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
export default function IconAlerts(props) {
  return (
    <div style={{"position": "fixed","top": "0","width": "100%","left": "0","zIndex": "2"}}>
    <Alert severity={props.type} >
        <AlertTitle>{capitalize(props.type)}</AlertTitle>
        <strong>{props.data}</strong>
      </Alert>
    </div>
  );
}