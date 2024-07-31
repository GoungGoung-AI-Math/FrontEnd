export interface ProblemResponse {
  id: number;
  name: string;
  imgUrl: string;
  difficulty: string;
  createDate: string;
  tags: string[];
  totalSolved: number;
  correctRate: number;
}

export const fetchTop3Problems = async (): Promise<ProblemResponse[]> => {
  const response = await fetch('https://test.udongrang.com:7070/problem/main-top3');
  if (!response.ok) {
    throw new Error('Failed to fetch data');
  }
  const data: ProblemResponse[] = await response.json();
  return data;
}
