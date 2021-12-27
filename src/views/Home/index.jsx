// TODO
// timeline, recommend 数据通过 mock 数据模拟 props 传入

import './style.scss';
import Header from '../../components/header';
import TabBar from '../../components/tabbar';
import HomeTimeLine from '../../components/home/timeline';
import HomeRecommend from '../../components/home/recommend';
import { Tabs } from 'antd';

const { TabPane } = Tabs;

const Fn = () => {
    return (
        <>
            <Header />
            <div className="pt-5 bg-gray-800">
                <Tabs
                    defaultActiveKey="timeline"
                    size="large"
                    className="text-gray-400"
                    animated={{ inkBar: true, tabPane: true }}
                >
                    <TabPane tab="动态" key="timeline">
                        <HomeTimeLine
                            avatar="https://picsum.photos/50?random=9"
                            nickname="React"
                        />
                        <HomeTimeLine
                            avatar="https://picsum.photos/50?random=1"
                            nickname="Tars"
                        />
                        <HomeTimeLine
                            avatar="https://picsum.photos/50?random=2"
                            nickname="JayChow"
                        />
                        <HomeTimeLine nickname="王丽坤" />
                        <HomeTimeLine
                            avatar="https://picsum.photos/50?random=4"
                            nickname="Jack Chan"
                        />
                        <HomeTimeLine
                            avatar="https://picsum.photos/50?random=5"
                            nickname="斯皮尔伯格"
                        />
                        <HomeTimeLine
                            avatar="https://picsum.photos/50?random=6"
                            nickname="刘在石"
                        />
                        <HomeTimeLine
                            avatar="https://picsum.photos/50?random=7"
                            nickname="请回答1988"
                        />
                        <HomeTimeLine
                            avatar="https://picsum.photos/50?random=8"
                            nickname="爱新觉罗.玄烨"
                        />
                    </TabPane>
                    <TabPane tab="推荐" key="recommend">
                        <HomeRecommend nickname="React" />
                        <HomeRecommend
                            avatar="https://picsum.photos/50?random=9"
                            nickname="Tars"
                        />
                        <HomeRecommend
                            avatar="https://picsum.photos/50?random=1"
                            nickname="JayChow"
                        />
                        <HomeRecommend
                            avatar="https://picsum.photos/50?random=2"
                            nickname="王丽坤"
                        />
                        <HomeRecommend
                            avatar="https://picsum.photos/50?random=4"
                            nickname="Jack Chan"
                        />
                        <HomeRecommend
                            avatar="https://picsum.photos/50?random=5"
                            nickname="斯皮尔伯格"
                        />
                        <HomeRecommend
                            avatar="https://picsum.photos/50?random=6"
                            nickname="刘在石"
                        />
                        <HomeRecommend
                            avatar="https://picsum.photos/50?random=7"
                            nickname="请回答1988"
                        />
                        <HomeRecommend
                            avatar="https://picsum.photos/50?random=8"
                            nickname="爱新觉罗.玄烨"
                        />
                    </TabPane>
                </Tabs>
            </div>
            <TabBar />
        </>
    );
};

export default Fn;
