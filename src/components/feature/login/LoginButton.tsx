'use client'

import Cookies from 'js-cookie'
import Keycloak from 'keycloak-js'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

import AppleLogo from '@/assets/apple.svg'
import FacebookLogo from '@/assets/facebook.svg'
import GoogleLogo from '@/assets/google.svg'
import { Button } from '@/components/ui/button'

export default function LoginButton() {
  const [keycloak, setKeycloak] = useState<Keycloak | null>(null)
  const [authenticated, setAuthenticated] = useState(false)
  const [loading, setLoading] = useState(true)
  const router = useRouter() // useRouter 훅 사용

  useEffect(() => {
    const keycloakInstance = new Keycloak({
      url: 'https://test.udongrang.com:8443',
      realm: 'next_oauth_test',
      clientId: 'google',
    })

    keycloakInstance
      .init({
        onLoad: 'check-sso',
        checkLoginIframe: true,
        silentCheckSsoRedirectUri:
          window.location.origin + '/silent-check-sso.html',
        pkceMethod: 'S256',
      })
      .then((keycloakAuthenticated) => {
        setKeycloak(keycloakInstance)
        setAuthenticated(keycloakAuthenticated)

        if (keycloakAuthenticated) {
          // Set up token refresh
          setInterval(() => {
            keycloakInstance
              .updateToken(70)
              .then((refreshed) => {
                if (refreshed) {
                  if (keycloakInstance.token) {
                    Cookies.set('access_token', keycloakInstance.token, {
                      expires: 1,
                    }) // 1일 후 만료
                  }
                  if (keycloakInstance.refreshToken) {
                    Cookies.set(
                      'refresh_token',
                      keycloakInstance.refreshToken,
                      { expires: 7 },
                    ) // 7일 후 만료
                  }
                }
              })
              .catch(() => {
                console.error('Failed to refresh token')
              })
          }, 60000)

          // 초기 토큰을 쿠키에 저장
          if (keycloakInstance.token) {
            Cookies.set('access_token', keycloakInstance.token, { expires: 1 }) // 1일 후 만료
          }
          if (keycloakInstance.refreshToken) {
            Cookies.set('refresh_token', keycloakInstance.refreshToken, {
              expires: 7,
            }) // 7일 후 만료
          }

          // 유저 등록
          registerUser()

          // 로그인 성공 시 리다이렉션
          router.push('/login/add-info')
        }
        setLoading(false)
      })
      .catch((error) => {
        console.error('Keycloak initialization failed', error)
        setLoading(false)
      })
  }, [router])

  const handleLogin = (idpHint: string) => {
    if (keycloak) {
      keycloak.login({ idpHint })
    }
  }

  const handleLogout = () => {
    if (keycloak) {
      keycloak
        .logout()
        .then(() => {
          setAuthenticated(false)
          Cookies.remove('access_token')
          Cookies.remove('refresh_token')
        })
        .catch((error) => {
          console.error('Logout failed', error)
        })
    }
  }

  const registerUser = () => {
    const token = Cookies.get('access_token')
    console.log(token)
    if (token) {
      fetch('http://localhost:8080/user/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      })
        .then((response) => response.json())
        .then((data) => {
          console.log('User registered:', data)
        })
        .catch((error) => {
          console.error('Error registering user:', error)
        })
    } else {
      console.error('No access token found')
    }
  }

  if (loading) {
    return (
      <div style={{ textAlign: 'center', marginTop: '30px' }}>로딩 중...</div>
    )
  }

  if (authenticated) {
    return (
      <div className='text-center mt-4'>
        <div>로그인됨</div>
        <Button variant='outline' className='w-20' onClick={handleLogout}>
          로그아웃
        </Button>
      </div>
    )
  }

  return (
    <div>
      <Button
        variant='outline'
        className='w-full mb-2 flex items-center gap-2'
        onClick={() => handleLogin('google')}
      >
        <GoogleLogo className='inline w-7 h-7' />
        Google로 로그인
      </Button>
      <Button
        variant='outline'
        className='w-full mb-2 flex items-center gap-2'
        onClick={() => handleLogin('facebook')}
      >
        <FacebookLogo className='inline' />
        Facebook으로 로그인
      </Button>
      <Button
        variant='outline'
        className='w-full flex items-center gap-2'
        onClick={() => handleLogin('apple')}
      >
        <AppleLogo className='inline' />
        Apple로 로그인
      </Button>
      <form>
        <div className='mb-4'>
          <label
            htmlFor='email'
            className='block text-sm font-medium text-gray-700'
          >
            이메일 또는 사용자 이름 *
          </label>
          <input
            id='email'
            type='email'
            required
            className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
          />
        </div>
        <div className='mb-4'>
          <label
            htmlFor='password'
            className='block text-sm font-medium text-gray-700'
          >
            비밀번호 *
          </label>
          <input
            id='password'
            type='password'
            required
            className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
          />
        </div>
        <div className='mb-4 text-right'>
          <a href='#' className='text-sm text-blue-500'>
            비밀번호를 잊어버리셨나요?
          </a>
        </div>
        <Button type='submit' className='w-full'>
          로그인
        </Button>
      </form>
      <div className='mt-4 text-sm'>
        <p>
          계정이 필요하세요?{' '}
          <a href='#' className='text-blue-500 underline'>
            계정을 만드세요
          </a>
        </p>
      </div>
    </div>
  )
}
