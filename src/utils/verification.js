/*
 * @Author: yangjiajia 
 * @Date: 2020-11-27 10:39:50 
 * @Last Modified by: yangjiajia
 * @Last Modified time: 2020-11-30 10:20:51
 */

/**
 * 
 * @param {*} value 手机号验证
 */
export function checkPhone(value){
    let regPhone = /^1[3456789]\d{9}$/;
    return regPhone.test(value)
}

/**
 * 1.密码必须由字母、数字、特殊符号组成，区分大小写
 * 2.特殊符号包含（. _ ~ ! @ # $ ^ & *）
 *3.密码长度为8-20位
*/
export function checkPassword (value) {
    let regPassword = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[._~!@#$^&*])[A-Za-z0-9._~!@#$^&*]{8,20}$/;
    return regPassword.test(value);
}