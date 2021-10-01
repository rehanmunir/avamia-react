import * as Request from 'utils/Request'

export const login = async (body) => {
    const url = `${Request.baseUrl}/user/sign_in`
    const res = await Request.POST(url, body)
    return res
}

export const createRegistration = async (body) => {
    const url = `${Request.baseUrl}/user/sign_up`
    const res = await Request.POST(url, body)
    return res
}

export const signout = async () => {
    const url = `${Request.baseUrl}/user/sign_out`
    const res = await Request.DELETE(url)
    return res
}