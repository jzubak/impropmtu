
import Auth0 from 'react-native-auth0';
const auth0 = new Auth0({ domain: 'dev-jkjtdl4i.auth0.com', clientId: 'HvqKuNltcbKAWdvhLySMnr96nosn20ZO' });
auth0
    .webAuth
    .authorize({scope: 'openid profile email', audience: 'https://dev-jkjtdl4i.auth0.com/userinfo'})
    .then(credentials =>
      console.log(credentials)
      // Successfully authenticated
      // Store the accessToken
    )
    .catch(error => console.log(error));