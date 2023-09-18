import { useRouter } from 'next/router';

const PythonExplorationPage: React.FC = () => {
  const router = useRouter();
  const { page } = router.query;

  return (
    <div>
      <h1>{page}</h1>
      <p>Content for {page} goes here.</p>
    </div>
  );
}

export default PythonExplorationPage;
