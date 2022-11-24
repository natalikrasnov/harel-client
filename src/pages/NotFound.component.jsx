import { useRouteError } from "react-router-dom"

export function NotFound({ errorMessage}) {
    const error = errorMessage || null
    return (
        <div className="not-found">
            <h1>{error?.status || "404" }</h1>
            <h2>{error?.statusText || "page not found"}</h2>
        </div>
    )
}