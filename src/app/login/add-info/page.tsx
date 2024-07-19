import AddInfoForm from '@/components/feature/login/AddInfoForm';

export default function AddInfoPage() {
  return (
    <div className="max-w-md mx-auto mt-10 p-4 border border-gray-300 rounded-md shadow-md">
      <h2 className="text-2xl font-bold mb-4">추가 정보 입력</h2>
      <AddInfoForm />
    </div>
  );
}