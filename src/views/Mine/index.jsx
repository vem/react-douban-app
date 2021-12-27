import LeftMenu from '../../components/leftmenu';
import TabBar from '../../components/tabbar';
import { Avatar } from 'antd';
import { BiMale } from 'react-icons/bi';
import { AiOutlineMail } from 'react-icons/ai';
import { BsChevronDown } from 'react-icons/bs';
import { Badge, Image } from 'antd-mobile';

const Fn = () => {
    return (
        <>
            <div className="w-full h-72 overflow-hidden relative">
                <div className="absolute w-full h-full flex items-center">
                    <Image
                        src="https://picsum.photos/200"
                        className="w-full blur-md scale-125"
                    />
                </div>
                <div className="fixed z-20 w-full h-12 text-gray-400 flex justify-between items-center px-4">
                    <LeftMenu />
                    <Badge content="3">
                        <AiOutlineMail
                            style={{ fontSize: '20px' }}
                            className="text-gray-400"
                        />
                    </Badge>
                </div>
                <div className="z-10 text-center">
                    <Avatar
                        src="https://picsum.photos/200"
                        className="mt-16 w-20 h-20 rounded-full border-2 border-solid border-white"
                    />
                </div>
                <div className="absolute mt-9 px-4 text-xl text-white flex items-center">
                    Tars <BiMale className="w-4" />
                </div>
                <div className="absolute mt-16 px-4 text-xs text-white">
                    ID: tarszhou / 上海
                </div>
                <div className="absolute w-full mt-24 px-4 text-base text-white font-thin flex justify-between">
                    Hello React
                    <div className="text-xs bg-gray-500 rounded-md px-2 py-1 flex items-center">
                        关于我 <BsChevronDown className="ml-1 w-3" />
                    </div>
                </div>
            </div>

            <TabBar />
        </>
    );
};

export default Fn;
