import React from "react";

const CommitItem = props => {
    return <li key={props.commit.id.toString()}>{props.commit.message}</li>
};

export default CommitItem;