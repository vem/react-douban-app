import {
    EllipsisOutlined,
    UserOutlined,
    LikeOutlined,
    CommentOutlined,
    RetweetOutlined,
    BulbOutlined,
} from '@ant-design/icons';
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
                        icon={<UserOutlined />}
                        src={props.avatar}
                        size={35}
                    />
                    <div className="ml-2 text-white text-xl">
                        {props.nickname}
                    </div>
                </div>
                <EllipsisOutlined
                    className="ml-2 text-gray-600"
                    style={{ fontSize: '20px' }}
                />
            </div>

            <div className="px-4">
                <div className="mt-2 rounded-2xl bg-gray-700 text-green-400 text-xs px-2 py-1 inline-block">
                    <BulbOutlined />
                    <span className="ml-1">我的2021观影报告</span>
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
                    icon={<LikeOutlined style={{ fontSize: '18px' }} />}
                    className="text-gray-600"
                >
                    赞
                </Button>
                <Button
                    type="text"
                    size="large"
                    icon={<CommentOutlined style={{ fontSize: '18px' }} />}
                    className="text-gray-600"
                >
                    回复
                </Button>
                <Button
                    type="text"
                    size="large"
                    icon={<RetweetOutlined style={{ fontSize: '18px' }} />}
                    className="text-gray-600"
                >
                    转发
                </Button>
            </div>
            <div className="h-3 bg-gray-900"></div>
        </>
    );
};

export default Fn;
