import {
    AiOutlineEllipsis,
    AiOutlineComment,
    AiOutlineRetweet,
    AiOutlineUser,
    AiOutlineLike,
} from 'react-icons/ai';
import { HiOutlineHashtag } from 'react-icons/hi';
import { Avatar, Button } from 'antd';
import { Image } from 'antd-mobile';
import _ from 'lodash';

const Fn = (props) => {
    const imageNumber = _.random(1, 9);
    const imageArray = () => {
        const array = [];
        for (let i = 0; i < imageNumber; i++)
            array.push(
                <Image
                    src={`https://picsum.photos/200?random=${_.random(
                        1,
                        1000
                    )}`}
                    key={i}
                />
            );
        return array;
    };

    return (
        <>
            <div className="w-full flex justify-between items-start px-4 pt-4">
                <div className="flex items-center">
                    <Avatar
                        icon={<AiOutlineUser className="mx-auto" />}
                        src={props.avatar}
                        className="flex items-center"
                        size={35}
                    />
                    <div className="ml-2 text-white text-xl">
                        {props.nickname}
                    </div>
                </div>
                <AiOutlineEllipsis
                    className="ml-2 text-gray-600"
                    style={{ fontSize: '20px' }}
                />
            </div>

            <div className="px-4">
                <div className="mt-2 rounded-2xl bg-gray-700 text-green-400 text-xs px-2 py-1 inline-flex items-center">
                    <HiOutlineHashtag />
                    <span>我的2021观影报告</span>
                    <HiOutlineHashtag />
                </div>
                <div className="mt-2 text-base">
                    年度目标 "观影数量3600" 提前大成! 年度目标 "观影数量3600"
                    提前大成! 年度目标 "观影数量3600" 提前大成!
                </div>
                <div className="mt-2 grid grid-cols-3 gap-2">
                    {imageArray()}
                </div>
            </div>

            <div className="flex justify-between px-10 py-2">
                <Button
                    type="text"
                    size="large"
                    icon={<AiOutlineLike style={{ fontSize: '18px' }} />}
                    className="text-gray-600 flex items-center gap-x-1"
                >
                    赞
                </Button>
                <Button
                    type="text"
                    size="large"
                    icon={<AiOutlineComment style={{ fontSize: '18px' }} />}
                    className="text-gray-600 flex items-center gap-x-1"
                >
                    回复
                </Button>
                <Button
                    type="text"
                    size="large"
                    icon={<AiOutlineRetweet style={{ fontSize: '18px' }} />}
                    className="text-gray-600 flex items-center gap-x-1"
                >
                    转发
                </Button>
            </div>
            <div className="h-3 bg-gray-900"></div>
        </>
    );
};

export default Fn;
