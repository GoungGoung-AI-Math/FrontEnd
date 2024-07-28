import { UserProfile } from '@/api/profile/userProfile';

interface ProfileCardProps {
  user: UserProfile;
}

function ProfileCard({ user }: ProfileCardProps) {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg p-6 bg-white">
      <div className="flex items-center">
        <img className="w-20 h-20 rounded-full mr-4" src={user.profileImageUrl} alt={`${user.nickName}의 프로필 사진`} />
        <div className="text-lg">
          <p className="font-bold">{user.nickName}</p>
          <p className="text-gray-600">#{user.school}</p>
        </div>
      </div>
      <div className="mt-4">
        <p className="text-sm text-gray-600">학생</p>
        <p className="text-sm text-gray-600">가입일: {new Date(user.createAt).toLocaleDateString()}</p>
      </div>
    </div>
  );
}

export default ProfileCard;
