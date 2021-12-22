import {
    HomeFilled,
    BookOutlined,
    GroupOutlined,
    ShopOutlined,
    UserOutlined,
} from '@ant-design/icons';

const fn = () => {
    return (
        <>
            <div className="fixed z-20 bottom-0 w-full h-20 bg-gray-800 text-gray-400 flex justify-between items-center px-8">
                <div className="flex flex-col items-center">
                    <HomeFilled style={{ fontSize: '20px' }} />
                    首页
                </div>
                <div className="flex flex-col items-center">
                    <BookOutlined style={{ fontSize: '20px' }} />
                    书影音
                </div>
                <div className="flex flex-col items-center">
                    <GroupOutlined style={{ fontSize: '20px' }} />
                    小组
                </div>
                <div className="flex flex-col items-center">
                    <ShopOutlined style={{ fontSize: '20px' }} />
                    市集
                </div>
                <div className="flex flex-col items-center">
                    <UserOutlined style={{ fontSize: '20px' }} />我
                </div>
            </div>
            <div className="h-20"></div>
        </>
    );
};

export default fn;
