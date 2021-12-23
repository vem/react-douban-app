import {
    HomeFilled,
    BookOutlined,
    GroupOutlined,
    ShopOutlined,
    UserOutlined,
} from '@ant-design/icons';

const iconSize = '20px';

const fn = () => {
    return (
        <>
            <div className="fixed z-20 bottom-0 w-full h-20 bg-gray-800 text-gray-400 flex justify-between items-center px-8 pb-5 text-xs">
                <div className="flex flex-col items-center">
                    <HomeFilled style={{ fontSize: iconSize }} />
                    <div className="mt-1">首页</div>
                </div>
                <div className="flex flex-col items-center">
                    <BookOutlined style={{ fontSize: iconSize }} />
                    <div className="mt-1">书影音</div>
                </div>
                <div className="flex flex-col items-center">
                    <GroupOutlined style={{ fontSize: iconSize }} />
                    <div className="mt-1">小组</div>
                </div>
                <div className="flex flex-col items-center">
                    <ShopOutlined style={{ fontSize: iconSize }} />
                    <div className="mt-1">市集</div>
                </div>
                <div className="flex flex-col items-center">
                    <UserOutlined style={{ fontSize: iconSize }} />
                    <div className="mt-1">我</div>
                </div>
            </div>
            <div className="h-20"></div>
        </>
    );
};

export default fn;
