import {isRouteErrorResponse, useRouteError} from "react-router-dom";
import styles from './Error.module.css'

export function Error() {
    const err  = useRouteError()
    console.log(err)
    if (isRouteErrorResponse(err)) {
        return (
            <div className={styles.errorContainer}>
                <h1 className={styles.h1}>Oops!</h1>
                <p>Sorry, an unexpected error has occurred.</p>
                <p>
                    <i>{err.statusText || err.status}</i>
                </p>
            </div>
        )
    } else {
        return (
            <div className={styles.errorContainer}>unknown error</div>
        )
    }

}