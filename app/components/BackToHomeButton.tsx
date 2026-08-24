import { Link } from 'react-router';

const BackToHomeButton = () => {
  return (
    <Link to='/' className='mb-8 inline-flex items-center gap-2 text-sm font-medium text-gray-500 transition hover:text-gray-900'>
      ← Back to Home
    </Link>
  );
};

export default BackToHomeButton;
