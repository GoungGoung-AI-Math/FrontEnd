import { UserProfile } from '@/api/profile/UserProfile';

interface ActivityInfoProps {
  user: UserProfile;
}

function ActivityInfo({ user }: ActivityInfoProps) {
  return (
    <div className="bg-gray-50 shadow-md rounded-lg overflow-hidden p-6 mb-4 h-full">
      <h2 className="text-xl font-bold mb-4">활동 정보</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex flex-col items-center">
          <img className="w-16 h-16 rounded-full mb-2" src="https://avatars.githubusercontent.com/u/111480377?s=400&u=c4eeeef44614035792263f9bf89d0fb2c48a8f7a&v=4" alt="Tier 이미지" />
          <p className="font-bold text-lg">{user.tier}</p>
          <p className="text-gray-600">rating: {user.rating}</p>
        </div>
        <ul className="list-none space-y-2">
          <li>해결한 문제 수: {user.solvedProblems}</li>
          <li>작성한 질문 수: {user.questions}</li>
          <li>작성한 답변 수: {user.answers}</li>
          <li>받은 좋아요 수: {user.likes}</li>
        </ul>
      </div>
    </div>
  );
}

export default ActivityInfo;
