
import request from "../axios/axios";

export default {
    /* 获取验证码 */
    async getCode(data){
        const result = await request.post(`/user/get_login_phone_code`,data)
        return result
    },

  
}
