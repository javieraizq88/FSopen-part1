import React from "react"

export default function MostVotes({ points, anecdotes }) {
    const indexOfMaxValue = points.indexOf(Math.max(...points));
    return (
        <>
            {
                points[indexOfMaxValue] === 0 ?
                    "vote!"
                    :
                    <>
                        <h1>Anecdote with most votes</h1>
                        <div>
                            {anecdotes[indexOfMaxValue]}
                        </div>
                        <div>
                            has {points[indexOfMaxValue]} votes
                        </div>
                    </>
            }
        </>
    )
}
