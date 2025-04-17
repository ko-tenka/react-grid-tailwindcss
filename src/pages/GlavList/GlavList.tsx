import { useNavigate } from 'react-router-dom';

export default function GlavList() {
    const navigate = useNavigate();

    const handleClick = () => {
      navigate('/work');
    };
  return (
    <div>
      <div className=' flex justify-center mt-20'>
      LIQN
      </div>
    <button className='mr-5 inline-flex justify-center items-center gap-1 px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg shadow-sm hover:bg-gray-50 focus:outline-none' onClick={handleClick}>
      Edit Dashboard
    </button>
  </div>
  )
}