import {
    AiOutlineEllipsis,
    AiOutlineComment,
    AiOutlineRetweet,
    AiOutlineCheckCircle,
    AiOutlineUser,
    AiOutlineLike,
} from 'react-icons/ai';
import { Avatar, Button, Rate } from 'antd';
import { Image } from 'antd-mobile';
import _ from 'lodash';
import './style.scss';

const Fn = (props) => {
    const movieNames = [
        '肖申克的救赎',
        '霸王别姬',
        '这个杀手不太冷',
        '阿甘正传',
        '美丽人生',
        '泰坦尼克号',
        '千与千寻',
        '阿凡达',
        '罗马假日',
        '楚门的世界',
        '盗梦空间',
    ];

    return (
        <>
            <div className="w-full flex justify-between items-start px-4 pt-4">
                <div className="flex">
                    <Avatar
                        icon={<AiOutlineUser className="mx-auto" />}
                        src={props.avatar}
                        className="flex items-center"
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
                    <AiOutlineEllipsis
                        className="ml-2"
                        style={{ fontSize: '20px' }}
                    />
                </div>
            </div>
            <Rate
                className="px-4 mt-2"
                disabled
                defaultValue={_.random(1, 5)}
                style={{ fontSize: '15px' }}
            />
            <div className="bg-gray-700 mx-4 my-2 p-2 rounded-md flex relative overflow-hidden">
                <Image
                    src={`https://picsum.photos/80/110?random=${_.random(
                        1,
                        9
                    )}`}
                    width={80}
                    height={110}
                    className="rounded-md"
                />
                <div className="ml-2 z-10">
                    <div className="text-white text-xl font-bold">
                        {movieNames[_.random(0, movieNames.length - 1)]}
                    </div>
                    <div>
                        <Rate
                            disabled
                            defaultValue={_.random(1, 5)}
                            style={{ fontSize: '15px' }}
                        />
                        <div className="text-yellow-400 inline ml-1">
                            {_.random(0.1, 9.9).toFixed(1)}
                        </div>
                    </div>
                    <div>
                        {_.random(1950, 2022)} / 美国 / 剧情 传记 历史 /
                        斯皮尔伯格 ...
                    </div>
                </div>
                <AiOutlineCheckCircle
                    className="absolute right-0 text-gray-600"
                    style={{ fontSize: '150px' }}
                />
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
