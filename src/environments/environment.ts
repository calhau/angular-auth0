import { clientId, domain } from "../../auth_config.json";

export const environment = {
  production: false,
  auth: {
    clientId,
    domain,
    //Informa o Auth0 a pagina q sera redirecionada quando logar .
    redirectUri: window.location.origin

  }
};
