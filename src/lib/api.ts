export const BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://192.168.0.242:8013';

export const API_URL = {
    ABOUT_US: {
        ALL: `${BASE_URL}/about/api/v1/about/all/?page=1&size=15`
    },
    NOTICE: {
        ALL: `${BASE_URL}/notice/api/v1/notice/all`
    },
    TEAM: {
        ALL: `${BASE_URL}/team/api/v1/team/all/?page=1&size=500`,
    }

}