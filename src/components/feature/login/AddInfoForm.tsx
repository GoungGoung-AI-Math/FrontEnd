'use client'

import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

import { Button } from '@/components/ui/button';

export default function AddInfoForm() {
  const [email, setEmail] = useState(''); // Email state 추가
  const [nickName, setNickName] = useState('');
  const [schoolName, setSchoolName] = useState('');
  const router = useRouter();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    try {
      const token = Cookies.get('access_token');
      if (!token) {
        console.error('No access token found');
        router.push('/login');
        return;
      }

      // Create DTO object
      const addInfoUserProfileRequest = {
        email,
        nickName,
        schoolName,
      };

      console.log("Sending data:", addInfoUserProfileRequest); // 디버그를 위해 데이터 로그 출력

      const response = await fetch('http://localhost:8080/user-profile/add-info', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify(addInfoUserProfileRequest),
      });

      if (response.ok) {
        console.log('추가 정보 등록 완료');
        router.push('/dashboard');
      } else {
        const errorResponse = await response.json();
        console.error('추가 정보 등록 실패', errorResponse.message);
        // 오류 처리 로직 추가
      }
    } catch (error) {
      console.error('Error submitting additional info:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/*<div className="mb-4">*/}
      {/*  <label htmlFor="email" className="block text-sm font-medium text-gray-700">이메일 *</label>*/}
      {/*  <input*/}
      {/*    id="email"*/}
      {/*    type="email"*/}
      {/*    required*/}
      {/*    value={email}*/}
      {/*    onChange={(e) => setEmail(e.target.value)}*/}
      {/*    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"*/}
      {/*  />*/}
      {/*</div>*/}
      <div className="mb-4">
        <label htmlFor="nickName" className="block text-sm font-medium text-gray-700">닉네임 *</label>
        <input
          id="nickName"
          type="text"
          required
          value={nickName}
          onChange={(e) => setNickName(e.target.value)}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="schoolName" className="block text-sm font-medium text-gray-700">학교 이름 *</label>
        <input
          id="schoolName"
          type="text"
          required
          value={schoolName}
          onChange={(e) => setSchoolName(e.target.value)}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>
      <Button type="submit" className="w-full">제출</Button>
    </form>
  );
}
