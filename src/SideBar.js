import { BsPlus, BsFillLightningFill, BsGearFill } from 'react-icons/bs';
import { FaFire } from 'react-icons/fa';

const SideBar = () => {
    return (
        <div className="fixed top-0 left-0 h-screen w-16 m-0
                        flex flex-col
                        bg-white text-gray-50 shadow-lg
                        dark:bg-gray-900 dark:text-white">
            <SideBarIcon icon={<FaFire size="28" />} />
            <Divider />
            <SideBarIcon icon={<BsFillLightningFill size="20" />} />
            <Divider />
            <SideBarIcon icon={<BsPlus size="32" />} />
            <Divider />
            <SideBarIcon icon={<BsGearFill size="22" />} />
        </div>   
    );
};

const SideBarIcon = ({ icon, text = 'tooltip!' }) => {
    return ( // must return I guess
    <div className="sidebar-icon group">
        {icon}

        <span class="sidebar-tooltip group-hover:scale-100">
            {text}
        </span>
    </div>
    );
};

const Divider = () => <hr className='sidebar-hr' />;

export default SideBar;