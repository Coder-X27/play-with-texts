import React from "react";

export default function Alert(props) {
    return (
        props.alert && <div className={`alert alert-${props.alert.type} container`} role="alert">
            <strong>{props.alert.code}</strong>{props.alert.message}
        </div>
    );
}
