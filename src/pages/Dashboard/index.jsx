import Breadcrumb from '@/components/Breadcrumb';
import DefaultLayout from '@/layout/DefaultLayout';

const Dashbaord = () => {
  return (
    <DefaultLayout>
        <Breadcrumb/>
        <div className="container">
            <h2 className='bg-white text-center py-8'>Welcome to Kabah Travel 🎊</h2>
        </div>
    </DefaultLayout>
  );
};

export default Dashbaord;
