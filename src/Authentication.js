export const authorise = async () => {
    // const url = "https://login.microsoftonline.com/organizations/oauth2/v2.0/authorize";
    // const client_id = "95fc8847-a347-4b92-ab76-3cbafb32aa6a";
    // const response_type = "code";
    // const redirect_uri = "http://localhost:3000/";
    // const scope = "offline_access user.read mail.read";
    // const response_mode="query";

    const completeURL = "https://login.microsoftonline.com/organizations/oauth2/v2.0/authorize?client_id=95fc8847-a347-4b92-ab76-3cbafb32aa6a&response_type=code&redirct_uri=http://localhost:3000//&response_mode=query&scope=offline_access%20user.read%20mail.read";

    return fetch(completeURL,{
        method:"GET",
        headers:{
            "Access-Control-Allow-Origin":"*",
            "Access-Control-Allow-Methods":"GET, POST, PUT, DELETE, OPTIONS",
            "Access-Control-Allow-Headers": 'Content-Type'
        }

    }).then((response) => { 
        return response.text();
    }).catch((error) => {
        console.log(error);
    });
};


//  fetchApiWrapper = async (
//     url /*RequestInfo | URL*/,
//     options /*RequestInit*/,   
// ) => {
//     //const TIMEOUT_ERROR_CODE = 1028;
//     return new Promise<any>((resolve, reject) => {
//         // const controller = new AbortController();
        // const { signal } = controller;

        // const onFailure = (failureResp: FailureResponse) => {
        //     const shouldParseResponseBody =
        //         failureCallback &&
        //         failureResp.body &&
        //         failureResp.body.errorCodes?.length > 0 &&
        //         !(
        //             failureResp.body.errorCodes.length === 1 &&
        //             SERVICE_DEFAULT_ERRORS.includes(failureResp.body.errorCodes[0].code)
        //         );
        //     if (shouldParseResponseBody) {
        //         reject(failureCallback(failureResp.body));
        //     } else {
        //         reject(failureResp.code);
        //     }
        // };

        // const timeoutId = setTimeout(() => {
        //     controller.abort("NetworkService._fetchApiWrapper called abort due to a request timeout");
        //     reject(TIMEOUT_ERROR_CODE);
        // }, NetworkConstants.TIMEOUT_DURATION);

//         fetch(url, { ...options})
//             .then(async response => {
//                 const failure: FailureResponse = {
//                     code: response.status
//                 };
//                 try {
//                     if (response.ok) {
//                         if (parseResponse) {
//                             let resp = await response.json();
//                             resp = underscoreToCamelCase(resp);
//                             resolve(resolveCallback(resp));
//                         } else {
//                             resolve(resolveCallback(response.status));
//                         }
//                     } else {
//                         if (
//                             response.status >= 400 &&
//                             response.status < 500 &&
//                             response.headers.get("content-type")?.includes("ffcaddon")
//                         ) {
//                             const resp = await response.json();
//                             if (JSON.stringify(resp).length > 0) {
//                                 failure.body = underscoreToCamelCase(resp);
//                             }
//                         }
//                         onFailure(failure);
//                     }
//                 } catch (error) {
//                     onFailure(failure);
//                 }
//             })
//             .catch(err => {
//                 if (err.name === "AbortError") {
//                     reject(TIMEOUT_ERROR_CODE);
//                 } else {
//                     const error = underscoreToCamelCase(err);
//                     onFailure(error);
//                 }
//             })
//             .finally(() => {
//                 clearTimeout(timeoutId);
//             });
//     });
// };
