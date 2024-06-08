// 获取配置列表
import request from "@/api/request";

export function getConfigList() {
    return request.get('/aaa/config/center/groups');
}

// 创建组
export function createGroup(params) {
    return request.post('/aaa/config/center/create_group', params);
}