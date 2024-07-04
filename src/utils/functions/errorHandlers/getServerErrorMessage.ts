import { SerializedError } from "@reduxjs/toolkit"
import { FetchBaseQueryError } from "@reduxjs/toolkit/query"

export default function getErrorMessage(error:FetchBaseQueryError | SerializedError):string {

    if('status' in error) {
      return `Error with status ${error.status}`
    } else if('message' in error) {
      return `Error - ${error.message}`
    } else {
      return 'An unknown error occurred'
    }

}