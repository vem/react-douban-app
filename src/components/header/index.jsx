import { MenuOutlined, MailOutlined } from '@ant-design/icons';
import { Badge } from 'antd';

const fn = () => {
    return (
        <>
            <div className="fixed z-20 w-full h-12 bg-gray-800 text-gray-400 flex justify-between items-center px-4">
                <MenuOutlined style={{ fontSize: '20px' }} />
                <input
                    type="text"
                    className="rounded-lg h-8 w-4/5 bg-gray-600 text-center text-base"
                    placeholder="宇宙"
                />
                <Badge count={5} size="small">
                    <MailOutlined
                        style={{ fontSize: '20px' }}
                        className="text-gray-400"
                    />
                </Badge>
            </div>
            <div className="h-12"></div>
        </>
    );
};

export default fn;
