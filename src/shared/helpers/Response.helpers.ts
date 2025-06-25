import { ResponseDataErrorHelpers, ResponseDataHelpers } from "src/core/interfaces/Response.interfaces";

export const ResponseData = (message:string, data?:object | object[] ):ResponseDataHelpers=>{
 const responseData:ResponseDataHelpers={
  flag:1,
  message:message,
  data:data
 }
 return responseData;
};

export const ResponseDataError = (message:string, data?:object)=>{
 const responseDataError:ResponseDataErrorHelpers = {
 flag:0,
 message:message,
 error:data
 }
 return responseDataError;
};