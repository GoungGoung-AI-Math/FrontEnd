export interface UserProfile {
  school: string;
  nickName: string;
  profileImageUrl: string;
  createAt: string;
  tier: string;
  rating: number;
  solvedProblems: number;
  questions: number;
  answers: number;
  likes: number;
}

export const getUserProfile = async (userId: number): Promise<UserProfile> => {
  const response = await fetch(`https://www.udongrang.com:6060/user-profile/get-profile/${userId}`);
  if (!response.ok) {
    throw new Error('Failed to fetch user profile');
  }
  const data: UserProfile = await response.json();
  return data;
};
