import { AiOutlineMail } from 'react-icons/ai';
import { Badge } from 'antd-mobile';
import LeftMenu from '../../components/leftmenu';

const Fn = () => {
    return (
        <>
            <div className="fixed z-20 w-full h-12 bg-gray-800 text-gray-400 flex justify-between items-center px-4">
                <LeftMenu />
                <input
                    type="text"
                    className="rounded-lg h-8 w-4/5 bg-gray-600 text-center text-base"
                    placeholder="宇宙"
                />
                <Badge content="3">
                    <AiOutlineMail
                        style={{ fontSize: '20px' }}
                        className="text-gray-400"
                    />
                </Badge>
            </div>
            <div className="h-12"></div>
        </>
    );
};

export default Fn;
