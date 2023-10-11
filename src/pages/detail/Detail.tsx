import {useLoaderData} from "react-router-dom";
import React from "react";
import {MarkdownRender} from "../../component/MarkdownRender";

export function Detail() {
    const loaderData = useLoaderData() as string;

    return (
        <div>
            <MarkdownRender source={loaderData} />
        </div>
    )
}
