import * as Request from 'utils/Request'

export const getCompanies = async () => {
    const url = `${Request.baseUrl}/companies`
    const res = await Request.GET(url)
    return res
}

export const searchCompanies = async (body) => {
    const url = `${Request.baseUrl}/companies/search`
    const res = await Request.POST(url, body)
    return res
}