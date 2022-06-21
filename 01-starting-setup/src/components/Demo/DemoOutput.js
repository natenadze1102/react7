import React from "react"
const DemoOutput = (props) => {
    // console.log('123')
    return <p>{props.show ? 'This is new!' : ''}</p>
}

export default React.memo(DemoOutput)