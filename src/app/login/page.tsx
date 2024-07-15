import dynamic from 'next/dynamic';

const LoginButton = dynamic(() => import('../../components/feature/login/LoginButton'), { ssr: false });

export default function LoginPage() {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>로그인 페이지</h1>
      <LoginButton />
    </div>
  );
}
