class Api {
  constructor({baseUrl, token}) {
    this._baseUrl = baseUrl;
    this._token = token;
  }

  _getHeaders(){
    return {
        'content-type': 'application/json',
    }
  }
  
  getPhoto() {
    return fetch(`${this._baseUrl}&access_token=${this._token}`, {
      method: 'GET',
      // headers: this._getHeaders()
    })
    .then(this._getJsonOrError)
  }

  _getJsonOrError(res){
    if (res.ok){
        return res.json();
    }
    return Promise.reject({status: res.status})
  }
  
}


const InstaApi = 
new Api(
  {
    baseUrl: 'https://graph.instagram.com/me/media?fields=id,media_type,media_url,caption,timestamp,thumbnail_url,permalink',
    token: 'IGQVJVb24zc0NPcFdnM3ZAlZA21WVHJTa3JIaG5yTFpHVGN0bUZABbWFERmN1cWtfYmtWNktiZAmozN3ZAHRm5hYWNGVjRPbWZAzRmd5NXFtZAnFPb1k0cGduZAjMxcDM1RklEb1dKNlkyR2xiWFJFUkVJMEtwWQZDZD'
  }
)

export default InstaApi;

// 'https://api.instagram.com/v1/users/self/media/recent/?access_token=ACCESS_TOKEN'
// id = 6016571438392691
// &limit=50
// https://graph.instagram.com/me/media?fields=id,media_type,media_url,caption,timestamp,thumbnail_url,permalink&access_token=IGQVJVb24zc0NPcFdnM3ZAlZA21WVHJTa3JIaG5yTFpHVGN0bUZABbWFERmN1cWtfYmtWNktiZAmozN3ZAHRm5hYWNGVjRPbWZAzRmd5NXFtZAnFPb1k0cGduZAjMxcDM1RklEb1dKNlkyR2xiWFJFUkVJMEtwWQZDZD








  



