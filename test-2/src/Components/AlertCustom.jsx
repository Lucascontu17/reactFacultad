import { Alert } from "react-bootstrap";
import React,{Component} from 'react';

function AlertCustom({variant,text}) {
    return(
        <Alert key={variant} variant={variant}>{text}</Alert>
    )
}

export default AlertCustom