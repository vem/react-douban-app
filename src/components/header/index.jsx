import { useState } from 'react';
import {
    MenuOutlined,
    MailOutlined,
    CloseOutlined,
    ScanOutlined,
    RightOutlined,
    UserOutlined,
    BookOutlined,
    AimOutlined,
    HistoryOutlined,
    LockOutlined,
    SettingOutlined,
    QuestionCircleOutlined,
    FileProtectOutlined,
    AccountBookOutlined,
    ShoppingCartOutlined,
    WalletOutlined,
    FieldTimeOutlined,
    ReadOutlined,
    AudioOutlined,
} from '@ant-design/icons';
import { Avatar } from 'antd';
import { Badge, Popup, Space } from 'antd-mobile';

const Fn = () => {
    const [leftmenu, setLeftmenu] = useState(false);

    return (
        <>
            <div className="fixed z-20 w-full h-12 bg-gray-800 text-gray-400 flex justify-between items-center px-4">
                <MenuOutlined
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
                    <MailOutlined
                        style={{ fontSize: '20px' }}
                        className="text-gray-400"
                    />
                </Badge>
            </div>
            <div className="h-12"></div>

            <Popup
                visible={leftmenu}
                onMaskClick={() => {
                    setLeftmenu(false);
                }}
                position="left"
            >
                <div className="bg-gray-800 text-white w-72 h-full px-4 overflow-hidden">
                    <div className="mt-4 flex justify-between">
                        <CloseOutlined
                            style={{ fontSize: '20px' }}
                            onClick={() => setLeftmenu(false)}
                        />
                        <ScanOutlined
                            style={{ fontSize: '20px' }}
                            onClick={() => alert('敬请期待')}
                        />
                    </div>
                    <div className="mt-8 flex">
                        <Avatar
                            icon={<UserOutlined />}
                            src="https://picsum.photos/50"
                            size={40}
                        />
                        <div className="ml-2">
                            <div className="text-base">Tars</div>
                            <div className="text-gray-500 text-xs">
                                资料与账号
                                <RightOutlined style={{ fontSize: '10px' }} />
                            </div>
                        </div>
                    </div>
                    <div className="mt-8 grid grid-cols-1 gap-3">
                        <Space style={{ '--gap': '12px' }}>
                            <BookOutlined className="text-gray-400" />
                            我的收藏
                        </Space>
                        <Space style={{ '--gap': '12px' }}>
                            <AimOutlined className="text-gray-400" />
                            我的关注
                        </Space>
                        <Space style={{ '--gap': '12px' }}>
                            <HistoryOutlined className="text-gray-400" />
                            浏览历史
                        </Space>
                        <div className="border-t border-gray-700"></div>
                        <Space style={{ '--gap': '12px' }}>
                            <LockOutlined className="text-gray-400" />
                            青少年模式
                        </Space>
                        <Space style={{ '--gap': '12px' }}>
                            <SettingOutlined className="text-gray-400" />
                            设置
                        </Space>
                        <Space style={{ '--gap': '12px' }}>
                            <QuestionCircleOutlined className="text-gray-400" />
                            浏览历史
                        </Space>
                    </div>

                    <div className="absolute bottom-16 rounded-lg bg-gray-700 grid grid-cols-3 gap-y-4 w-64 py-4 text-gray-400">
                        <div className="flex flex-col items-center gap-y-1">
                            <AccountBookOutlined style={{ fontSize: '20px' }} />
                            订单
                        </div>
                        <div className="flex flex-col items-center gap-y-1">
                            <ShoppingCartOutlined
                                style={{ fontSize: '20px' }}
                            />
                            购物车
                        </div>
                        <div className="flex flex-col items-center gap-y-1">
                            <WalletOutlined style={{ fontSize: '20px' }} /> 钱包
                        </div>
                        <div className="flex flex-col items-center gap-y-1">
                            <FieldTimeOutlined style={{ fontSize: '20px' }} />
                            豆瓣时间
                        </div>
                        <div className="flex flex-col items-center gap-y-1">
                            <ReadOutlined style={{ fontSize: '20px' }} />
                            豆瓣阅读书架
                        </div>
                        <div className="flex flex-col items-center gap-y-1">
                            <AudioOutlined style={{ fontSize: '20px' }} />
                            豆瓣FM
                        </div>
                    </div>
                    <div className="absolute bottom-9 w-64 flex justify-center items-center gap-1 text-gray-500">
                        <FileProtectOutlined /> 证照信息
                        <RightOutlined style={{ fontSize: '10px' }} />
                    </div>
                </div>
            </Popup>
        </>
    );
};

export default Fn;
