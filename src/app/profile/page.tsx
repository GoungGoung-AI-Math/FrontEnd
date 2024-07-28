import { getUserProfile, UserProfile } from '@/api/profile/userProfile';
import ProfileCard from '@/components/feature/profile/ProfileCard';

export default async function ProfilePage() {
  const userId = 1; // 항상 ID 1을 사용

  let user: UserProfile | null = null;

  try {
    user = await getUserProfile(userId);
  } catch (error) {
    return <div>Failed to fetch user profile</div>;
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      {user ? <ProfileCard user={user} /> : <div>Loading...</div>}
    </div>
  );
}
