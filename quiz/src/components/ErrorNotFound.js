import React, {useEffect} from 'react'

const ErrorNotFound = () => {

    useEffect(() => {
        document.title = 'Error Page'
    },[document.title])

    return (
        <div>
            Error in this page
        </div>
    )
}

export default ErrorNotFound
