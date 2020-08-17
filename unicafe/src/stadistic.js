import React from "react"

function Statistic({ text, value }) {
    return (
        <tr>
            <td>
                {text}:
            </td>
            <td>
                {value}{text === "positive" ? "%" : ""}
            </td>
        </tr>
    )
}

export default function Statistics({ good, neutral, bad }) {

    return (
        <div>
            {
                good !== 0
                    ?
                    <div>
                        <p>
                            <Statistic text="good" value={good} />
                            <Statistic text="neutral" value={neutral} />
                            <Statistic text="bad" value={bad} />
                            <Statistic text="all" value={good + bad + neutral} />
                            <Statistic text="average" value={((good * 1) + (bad * -1)) / (good + bad + neutral)} />
                            <Statistic text="positive" value={((good) / (good + bad + neutral) * 100)} />
                        </p>
                    </div>
                    :
                    <p>
                        No feedback given
                    </p>

            }

        </div>
    )
}