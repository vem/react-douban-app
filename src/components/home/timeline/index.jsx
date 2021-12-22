import {
    MoreOutlined,
    UserOutlined,
    StarFilled,
    StarOutlined,
    LikeOutlined,
    CommentOutlined,
    RetweetOutlined,
    CheckCircleOutlined,
} from '@ant-design/icons';
import { Avatar, Button, Image } from 'antd';

const fn = (props) => {
    return (
        <>
            <div className="w-full flex justify-between items-start px-4 pt-4">
                <div className="flex">
                    <Avatar
                        icon={<UserOutlined />}
                        src={props.avatar}
                        size={45}
                    />
                    <div className="ml-2">
                        <div className="text-white text-md">
                            {props.nickname}
                        </div>
                        <div className="text-gray-500">看过这部电影</div>
                    </div>
                </div>
                <div className="flex flex-nowarp items-center text-gray-600">
                    <div>12-08</div>
                    <MoreOutlined
                        rotate="90"
                        className="ml-2"
                        style={{ fontSize: '20px' }}
                    />
                </div>
            </div>
            <div className="px-4 mt-2">
                <StarFilled />
                <StarFilled />
                <StarFilled />
                <StarFilled />
                <StarOutlined />
            </div>
            <div className="bg-gray-700 mx-4 my-2 p-2 rounded-md flex relative overflow-hidden">
                <div>
                    <Image
                        src="https://picsum.photos/80/110?random=1"
                        width={80}
                        height={110}
                        className="rounded-md"
                    />
                </div>
                <div className="ml-2 z-10">
                    <div className="text-white text-xl font-bold">
                        movie name
                    </div>
                    <div>
                        <StarFilled style={{ color: 'yellow' }} />
                        <StarFilled style={{ color: 'yellow' }} />
                        <StarFilled style={{ color: 'yellow' }} />
                        <StarFilled style={{ color: 'yellow' }} />
                        <StarOutlined style={{ color: 'yellow' }} />
                        <div className="text-yellow-400 inline ml-1">8.3</div>
                    </div>
                    <div>2011 / 美国 / 剧情 传记 历史 / 斯皮尔伯格 ...</div>
                </div>
                <CheckCircleOutlined
                    className="absolute right-0 text-gray-600"
                    style={{ fontSize: '150px' }}
                />
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

export default fn;
