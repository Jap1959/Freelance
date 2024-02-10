import React from "react";
import { userContext } from "../Navigation";


function Protected({ children }) {
    const { state } = React.useContext(userContext);
    if (state.login === true) {
        return children;
    } else {
        window.location.href = '/';
    }
}
export default Protected;