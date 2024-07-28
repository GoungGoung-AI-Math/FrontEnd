import { UserProfile } from '@/api/profile/UserProfile';

interface ProfileHeaderProps {
  user: UserProfile;
}

function ProfileHeader({ user }: ProfileHeaderProps) {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden p-6 mb-4 w-full">
      <div className="flex items-center">
        <img className="w-24 h-24 rounded-full mr-6" src="https://avatars.githubusercontent.com/u/111480377?s=400&u=c4eeeef44614035792263f9bf89d0fb2c48a8f7a&v=4" alt={`${user.nickName}의 프로필 사진`} />
        <div className="text-lg">
          <p className="font-bold text-2xl">{user.nickName}</p>
          <p className="text-gray-600 text-xl">{user.school}</p>
          <p className="text-gray-600">가입일: {new Date(user.createAt).toLocaleDateString()}</p>
        </div>
      </div>
    </div>
  );
}

export default ProfileHeader;
