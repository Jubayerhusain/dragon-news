import profilepic from './../assets/user.png'
import { Link } from 'react-router-dom';
function Navber() {
    return (
        <div className='flex justify-between items-center'>
            <div className='text-2xl font-bold text-gray-900'>Dynamic User Name</div>
            <div className='flex space-x-2 items-center'>
                <img src={profilepic} alt="" />
                <Link className='btn text-white bg-slate-700 text-xl font-bold'>Login</Link>
            </div>
        </div>

    )
}

export default Navber
