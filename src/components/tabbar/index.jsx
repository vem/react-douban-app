import {
    AiFillHome,
    AiOutlineHome,
    AiOutlineShop,
    AiFillShop,
} from 'react-icons/ai';
import { BsBook, BsBookFill } from 'react-icons/bs';
import { TiGroupOutline, TiGroup } from 'react-icons/ti';
import { RiUser3Fill, RiUser3Line } from 'react-icons/ri';
import { TabBar } from 'antd-mobile';

const Fn = () => {
    const tabs = [
        {
            key: 'home',
            title: '首页',
            icon: (active) => (active ? <AiFillHome /> : <AiOutlineHome />),
        },
        {
            key: 'bookMovieMusic',
            title: '书影音',
            icon: (active) => (active ? <BsBookFill /> : <BsBook />),
        },
        {
            key: 'group',
            title: '小组',
            icon: (active) => (active ? <TiGroup /> : <TiGroupOutline />),
        },
        {
            key: 'market',
            title: '市集',
            icon: (active) => (active ? <AiFillShop /> : <AiOutlineShop />),
        },
        {
            key: 'personalCenter',
            title: '我',
            icon: (active) => (active ? <RiUser3Fill /> : <RiUser3Line />),
        },
    ];

    return (
        <>
            <TabBar className="fixed z-20 bottom-0 w-full h-20 bg-gray-800 text-gray-400 pb-6">
                {tabs.map((item) => (
                    <TabBar.Item
                        key={item.key}
                        icon={item.icon}
                        title={item.title}
                    />
                ))}
            </TabBar>
            <div className="w-full h-20"></div>
        </>
    );
};

export default Fn;
