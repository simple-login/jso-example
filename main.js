let client = new jso.JSO({
  client_id: "client-id",
  redirect_uri: "http://localhost:8000/",
  authorization: "https://app.simplelogin.io/oauth2/authorize",
});

// Handle redirection after user's approval
client.callback();

let token = client.checkToken();
if (token !== null) {
  if (token.access_token !== undefined)
    getUserData(token);
}

function login() {
  client.getToken()
    .then((token) => {
      // user is already logged in
      getUserData(token);
    })
}

function reset() {
  localStorage.clear();
  sessionStorage.clear();
  client.wipeTokens();
  alert("reset successfully");
}

function getUserData(token) {
  fetch('https://app.simplelogin.io/oauth2/userinfo/?access_token=' + token.access_token)
    .then(response => response.json())
    .then(res => {
      alert(JSON.stringify(res));
    })
}