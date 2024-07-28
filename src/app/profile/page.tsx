import { getUserProfile, UserProfile } from '@/api/profile/UserProfile';
import ActivityInfo from '@/components/feature/profile/ActivityInfo';
import ProfileHeader from '@/components/feature/profile/ProfileHeader';
import RecentAttempt from '@/components/feature/profile/RecentAttempt';

export default async function ProfilePage() {
  const userId = 1; // 항상 ID 1을 사용

  let user: UserProfile | null = null;

  try {
    user = await getUserProfile(userId);
  } catch (error) {
    return <div>Failed to fetch user profile</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100 pt-20 flex flex-col items-center">
      <div className="w-full max-w-screen-xl">
        <ProfileHeader user={user} />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <ActivityInfo user={user} />
          <RecentAttempt />
        </div>
      </div>
    </div>
  );
}
