import { Interceptor, InterceptorInterface, Action } from "routing-controllers";
import { msg } from "../configs/messages";

@Interceptor()
export class ResponseHandlerInterceptor implements InterceptorInterface {
  intercept(action: Action, content: object) {
    if (content) {
      transformObjectId(content);
    }
    return {
      result: content,
      message: msg.success
    };
  }
}

const transformObjectId = (data: any) => {
  if (Array.isArray(data)) {
    for (let val of data) {
      val._id = val._id && val._id.toString();
    }
  }
  else {
    data._id = data._id && data._id.toString();
  }
}