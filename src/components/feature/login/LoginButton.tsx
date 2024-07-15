'use client'

import Keycloak from 'keycloak-js';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import logo from '@/assets/logo.svg';
import silverMedal from '@/assets/silverMedal.svg';

export default function LoginButton() {
  const [keycloak, setKeycloak] = useState<Keycloak | null>(null);
  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log('Initializing Keycloak...');
    const keycloakInstance = new Keycloak({
      url: 'https://test.udongrang.com:8443',
      realm: 'next_oauth_test',
      clientId: 'google'
    });

    keycloakInstance.init({
      onLoad: 'check-sso', // 변경: 자동 로그인을 막기 위해 'login-required'에서 'check-sso'로 변경
      checkLoginIframe: true,
      silentCheckSsoRedirectUri: window.location.origin + '/silent-check-sso.html',
      pkceMethod: 'S256'
    }).then(keycloakAuthenticated => {
      console.log('Keycloak initialized. Authenticated:', keycloakAuthenticated);
      setKeycloak(keycloakInstance);
      setAuthenticated(keycloakAuthenticated);

      if (keycloakAuthenticated) {
        console.log('User is authenticated. Setting up token refresh...');
        // Set up token refresh
        setInterval(() => {
          keycloakInstance.updateToken(70).then((refreshed) => {
            if (refreshed) {
              console.log('Token refreshed');
            } else {
              console.log('Token not refreshed');
              const tokenExp = keycloakInstance.tokenParsed?.exp;
              const timeSkew = keycloakInstance.timeSkew || 0;
              if (tokenExp) {
                const remainingTime = Math.round(tokenExp + timeSkew - new Date().getTime() / 1000);
                console.log('Token valid for remaining time (seconds):', remainingTime);
              } else {
                console.log('Token not refreshed, unable to calculate remaining time');
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
    if (keycloak) {
      console.log('Initiating login...');
      keycloak.login({ idpHint: 'google' });
    } else {
      console.log('Keycloak instance is null, cannot initiate login');
    }
  };

  const handleLogout = () => {
    if (keycloak) {
      console.log('Initiating logout...');
      keycloak.logout().then(() => {
        console.log('Logout successful. Updating state...');
        setAuthenticated(false);
        console.log('State updated. Authenticated:', false);
      }).catch(error => {
        console.error('Logout failed', error);
      });
    } else {
      console.log('Keycloak instance is null, cannot initiate logout');
    }
  };

  useEffect(() => {
    console.log('Rendering component. Authenticated:', authenticated);
  }, [authenticated]);

  if (loading) {
    return <div style={{ textAlign: 'center', marginTop: '30px' }}>Loading...</div>;
  }

  if (authenticated) {
    return (
      <div className="w-full h-screen flex items-center justify-center">
        <div className="relative flex flex-col items-center w-full min-h-screen bg-brand-primary-100">
          <div className="bg-brand-primary-400 rounded-full absolute top-[-400px] w-[1000px] h-[1000px] flex flex-col items-center gap-16">
            <div className="flex flex-col items-center mt-[530px]">
              <Image src={silverMedal} width={70} height={70} alt="silverMedal icon" />
              <Image src={logo} width={300} height={300} alt="matchmate logo" />
            </div>
            <div className="text-center mt-4">
              <div>로그인됨</div>
              <button onClick={handleLogout} className="bg-red-500 text-white p-2 rounded">로그아웃</button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="relative flex flex-col items-center w-full min-h-screen bg-brand-primary-100">
        <div className="bg-brand-primary-400 rounded-full absolute top-[-400px] w-[1000px] h-[1000px] flex flex-col items-center gap-16">
          <div className="flex flex-col items-center mt-[530px]">
            <Image src={silverMedal} width={70} height={70} alt="silverMedal icon" />
            <Image src={logo} width={300} height={300} alt="matchmate logo" />
          </div>
          <div className="text-center mt-4">
            <button onClick={handleLogin} className="bg-yellow-400 text-black p-2 rounded-full flex items-center gap-2">
              <Image src="/kakao.svg" width={20} height={20} alt="kakao icon" />
              카카오 회원가입
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
