import React from "react"
export default function EmployeeDetail({params}){
    const {id} = React.use(params)
    return (
        <div>
            {id}
        </div>
    )
}