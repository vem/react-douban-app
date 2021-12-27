import { useState } from 'react';
import {
    AiOutlineMenu,
    AiOutlineMail,
    AiOutlineClose,
    AiOutlineScan,
    AiOutlineRight,
    AiOutlineUser,
    AiOutlineBook,
    AiOutlineAim,
    AiOutlineHistory,
    AiOutlineLock,
    AiOutlineSetting,
    AiOutlineQuestionCircle,
    AiOutlineFileProtect,
    AiOutlineAccountBook,
    AiOutlineShoppingCart,
    AiOutlineWallet,
    AiOutlineFieldTime,
    AiOutlineRead,
} from 'react-icons/ai';
import { BiRadio } from 'react-icons/bi';
import { Avatar } from 'antd';
import { Badge, Popup } from 'antd-mobile';

const Fn = () => {
    const [leftmenu, setLeftmenu] = useState(false);

    return (
        <>
            <div className="fixed z-20 w-full h-12 bg-gray-800 text-gray-400 flex justify-between items-center px-4">
                <AiOutlineMenu
                    style={{ fontSize: '20px' }}
                    onClick={() => {
                        setLeftmenu(true);
                    }}
                />
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

            <Popup
                visible={leftmenu}
                onMaskClick={() => setLeftmenu(false)}
                position="left"
            >
                <div className="bg-gray-800 text-white w-72 h-full px-4 overflow-hidden">
                    <div className="mt-4 flex justify-between">
                        <AiOutlineClose
                            style={{ fontSize: '20px' }}
                            onClick={() => setLeftmenu(false)}
                        />
                        <AiOutlineScan
                            style={{ fontSize: '20px' }}
                            onClick={() => alert('敬请期待')}
                        />
                    </div>
                    <div className="mt-8 flex">
                        <Avatar
                            icon={<AiOutlineUser />}
                            src="https://picsum.photos/50"
                            size={40}
                        />
                        <div className="ml-2">
                            <div className="text-base">Tars</div>
                            <div className="text-gray-500 text-xs">
                                资料与账号
                                <AiOutlineRight
                                    style={{ fontSize: '10px' }}
                                    className="inline"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="mt-8 grid grid-cols-1 gap-3">
                        <div className="flex items-center gap-x-3">
                            <AiOutlineBook className="text-gray-400" />
                            我的收藏
                        </div>
                        <div className="flex items-center gap-x-3">
                            <AiOutlineAim className="text-gray-400" />
                            我的关注
                        </div>
                        <div className="flex items-center gap-x-3">
                            <AiOutlineHistory className="text-gray-400" />
                            浏览历史
                        </div>
                        <div className="border-t border-gray-700"></div>
                        <div className="flex items-center gap-x-3">
                            <AiOutlineLock className="text-gray-400" />
                            青少年模式
                        </div>
                        <div className="flex items-center gap-x-3">
                            <AiOutlineSetting className="text-gray-400" />
                            设置
                        </div>
                        <div className="flex items-center gap-x-3">
                            <AiOutlineQuestionCircle className="text-gray-400" />
                            帮助与反馈
                        </div>
                    </div>

                    <div className="absolute bottom-16 rounded-lg bg-gray-700 grid grid-cols-3 gap-y-4 w-64 py-4 text-gray-400">
                        <div className="flex flex-col items-center gap-y-1">
                            <AiOutlineAccountBook
                                style={{ fontSize: '20px' }}
                            />
                            订单
                        </div>
                        <div className="flex flex-col items-center gap-y-1">
                            <AiOutlineShoppingCart
                                style={{ fontSize: '20px' }}
                            />
                            购物车
                        </div>
                        <div className="flex flex-col items-center gap-y-1">
                            <AiOutlineWallet style={{ fontSize: '20px' }} />{' '}
                            钱包
                        </div>
                        <div className="flex flex-col items-center gap-y-1">
                            <AiOutlineFieldTime style={{ fontSize: '20px' }} />
                            豆瓣时间
                        </div>
                        <div className="flex flex-col items-center gap-y-1">
                            <AiOutlineRead style={{ fontSize: '20px' }} />
                            豆瓣阅读书架
                        </div>
                        <div className="flex flex-col items-center gap-y-1">
                            <BiRadio style={{ fontSize: '20px' }} />
                            豆瓣FM
                        </div>
                    </div>
                    <div className="absolute bottom-9 w-64 flex justify-center items-center gap-1 text-gray-500">
                        <AiOutlineFileProtect /> 证照信息
                        <AiOutlineRight style={{ fontSize: '10px' }} />
                    </div>
                </div>
            </Popup>
        </>
    );
};

export default Fn;
