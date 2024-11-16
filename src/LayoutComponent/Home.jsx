import { Outlet } from 'react-router-dom';
import LeftAside from './LeftAside';
import RightAside from './RightAside';
function Home() {
    return (
        <div className="grid grid-cols-12 gap-5 my-20">
            <div className="col-span-3">
                <h1 className='text-2xl font-bold text-gray-700'>All Category</h1>
                <LeftAside></LeftAside>
            </div>
            <div className="col-span-6">
                <h1 className='text-2xl font-bold text-gray-700'>Dragon News Home</h1>
                <Outlet />
            </div>
            <div className="col-span-3">
                <h1 className='text-2xl font-bold text-gray-700'>Login With</h1>
                <RightAside></RightAside>
            </div>
        </div>
    )
}

export default Home;
