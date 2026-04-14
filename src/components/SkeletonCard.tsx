const SkeletonCard = () => {
  return (
    <div className='animate-pulse bg-white rounded-xl shadow p-4'>
      <div className='h-40 bg-gray-200 rounded mb-4' />
      <div className='h-3 bg-gray-200 w-1/3 mb-2 rounded' />
      <div className='h-4 bg-gray-200 w-full mb-2 rounded' />
      <div className='h-4 bg-gray-200 w-3/4 rounded' />
    </div>
  );
};

export default SkeletonCard;
