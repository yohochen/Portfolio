const GITHUB_TOKEN = 'token ' + process.env.REACT_APP_GITHUB_ACESS_TOKEN
const header_github_personal_access_token = {
    'Authorization': GITHUB_TOKEN
}

const http_option_with_header = {
    headers: header_github_personal_access_token,
}


export default http_option_with_header
