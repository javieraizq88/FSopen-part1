import React from "react"
import Part from "./part"

export default function Content({course}) {
    return (
        <>
            <Part
                part={course.parts[0]} 
            />
            <Part
                part={course.parts[1]} 
            />
            <Part
                part={course.parts[2]} 
            />
        </>
      )
}