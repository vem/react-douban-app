import './style.scss';
import Header from '../../components/header';
import TabBar from '../../components/tabbar';
import HomeTimeLine from '../../components/home/timeline';
import { Tabs } from 'antd';
const { TabPane } = Tabs;

const fn = () => {
    return (
        <>
            <Header />
            <div className="pt-5 bg-gray-800">
                <Tabs
                    defaultActiveKey="1"
                    size="large"
                    className="text-gray-400"
                >
                    <TabPane tab="动态" key="1">
                        <HomeTimeLine avatar="https://picsum.photos/50?random=9" nickname="React" />
                        <HomeTimeLine avatar="https://picsum.photos/50?random=1" nickname="Tars" />
                        <HomeTimeLine avatar="https://picsum.photos/50?random=2" nickname="JayChow" />
                        <HomeTimeLine nickname="王丽坤" />
                        <HomeTimeLine avatar="https://picsum.photos/50?random=4" nickname="Jack Chan" />
                        <HomeTimeLine avatar="https://picsum.photos/50?random=5" nickname="斯皮尔伯格" />
                        <HomeTimeLine avatar="https://picsum.photos/50?random=6" nickname="刘在石" />
                        <HomeTimeLine avatar="https://picsum.photos/50?random=7" nickname="请回答1988" />
                        <HomeTimeLine avatar="https://picsum.photos/50?random=8" nickname="爱新觉罗.玄烨" />
                    </TabPane>
                    <TabPane tab="推荐" key="2">
                        Content of Tab Pane 2
                    </TabPane>
                </Tabs>
            </div>
            <TabBar />
        </>
    );
};

export default fn;
