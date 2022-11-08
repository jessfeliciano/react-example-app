const errorMessage400s = "Invalid request.Please check you rinput ids and values.";
const errorMessage409 = "This resource already exists.";
const errorMessage500 = "Error: There was a problem connecting to the database.";

export class HttpResponseError extends Error {
    source;

    statusCode;

    constructor(message, responseStatusCode, source){
        super(message);

        this.source = source; 
        this.statusCode = responseStatusCode;
    }
}

export default function formatError(response, sourceName) {
    const statusCode = response.status;
    if (statusCode === 409) {
        return new HttpResponseError(errorMessage409, statusCode, sourceName);
    }
    if (statusCode >= 400 && statusCode < 500) {
        return new HttpResponseError(errorMessage400s, statusCode, sourceName);
    }
    if (statusCode >= 500) {
        return new HttpResponseError(errorMessage500, statusCode, sourceName);
    }
    return new Error("Unspecified error.");
}