import {isRouteErrorResponse, useRouteError} from "react-router-dom";

export function Error() {
    const err  = useRouteError()
    console.log(err)
    if (isRouteErrorResponse(err)) {
        return (
            <div id="error-page">
                <h1>Oops!</h1>
                <p>Sorry, an unexpected error has occurred.</p>
                <p>
                    <i>{err.statusText || err.status}</i>
                </p>
            </div>
        )
    } else {
        return (
            <div id="error-page">unknown error</div>
        )
    }

}