'use client'

import Keycloak from 'keycloak-js';
import { useEffect, useState } from 'react';

export default function LoginButton() {
  const [keycloak, setKeycloak] = useState<Keycloak | null>(null);
  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log("Component mounted");

    const keycloakInstance = new Keycloak({
      url: 'https://test.udongrang.com:8443',
      realm: 'next_oauth_test',
      clientId: 'google'
    });

    keycloakInstance.init({
      onLoad: 'login-required',
      checkLoginIframe: false,
      pkceMethod: 'S256'
    }).then(keycloakAuthenticated => {
      console.log("Keycloak initialized, authenticated:", keycloakAuthenticated);
      setKeycloak(keycloakInstance);
      setAuthenticated(keycloakAuthenticated);

      if (keycloakAuthenticated) {
        // Set up token refresh
        setInterval(() => {
          keycloakInstance.updateToken(70).then((refreshed) => {
            if (refreshed) {
              console.log('Token refreshed');
            } else {
              const tokenExp = keycloakInstance.tokenParsed?.exp;
              const timeSkew = keycloakInstance.timeSkew || 0;
              if (tokenExp) {
                const remainingTime = Math.round(tokenExp + timeSkew - new Date().getTime() / 1000);
                console.log(`Token not refreshed, valid for ${remainingTime} seconds`);
              } else {
                console.log('Token not refreshed, but unable to calculate remaining time');
              }
            }
          }).catch(() => {
            console.error('Failed to refresh token');
          });
        }, 60000);
      }
      setLoading(false);
    }).catch(error => {
      console.error('Keycloak initialization failed', error);
      setLoading(false);
    });
  }, []);

  const handleLogin = () => {
    console.log("Login button clicked");
    if (keycloak) {
      keycloak.login({ idpHint: 'google' });
    }
  };

  const handleLogout = () => {
    console.log("Logout button clicked");
    if (keycloak) {
      setAuthenticated(false);
      keycloak.logout();
    }
  };

  if (loading) {
    return <div style={{ textAlign: 'center', marginTop: '30px' }}>Loading...</div>;
  }

  if (authenticated) {
    return (
      <div style={{ textAlign: 'center', marginTop: '40px' }}>
        <div>로그인됨</div>
        <button onClick={handleLogout}>로그아웃</button>
      </div>
    );
  }

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <button onClick={handleLogin}>Google로 로그인하기</button>
    </div>
  );
}
