import React from 'react';
import { Col, Row, Spin, Tabs } from 'antd';
import styles from './styles.module.scss';
import { useTranslation } from 'react-i18next';
import Graph from './chart-graph/graph';
import PolygonalLine from './charts-PolygonalLine/PolygonalLine';
import realEstateImg from 'assets/images/realEstateIcon.svg';
import CustomerImg from 'assets/images/Customer.svg';
import barGraphImg from 'assets/images/barGraphIcon.svg';
import pieChart from 'assets/images/pieChart.svg';
import { useDashboard, useDetailCompany } from 'hooks/useDashboard';
import Header from './compornent/header';
import { useQuery } from 'react-query';
import { getOverviewStatistic } from 'api/dashboard';

export default function Dashboard() {
  const { t } = useTranslation();
  const style = { padding: '8px' };
  const { TabPane } = Tabs;
  const { data, isLoading } = useQuery(['get_overview_statistic'], () => getOverviewStatistic());
  const dataOverview = data?.data;
  const company = dataOverview?.total_company ?? 0;
  const customer = dataOverview?.total_customers ?? 0;
  const project = dataOverview?.total_project ?? 0;
  const propert = dataOverview?.total_property ?? 0;
  const Grap = useDetailCompany([]);
  const LineGrap = useDashboard([]);
  const dataLine = LineGrap?.data?.data;
  const dataGrap = Grap?.data;

  return (
    <div className={styles.Dashboard}>
      <>
        <section className={styles.firstSection}>
          <div className="flex-center">
            <label className={styles.label}>{t('common.Dashboard')}</label>
          </div>
          <Tabs defaultActiveKey="1" className="flex-center">
            <TabPane tab="ホームページ" key="1"></TabPane>
            <TabPane key="3" disabled tab="/"></TabPane>
            <TabPane tab="ダッシュボード" key="2"></TabPane>
          </Tabs>
        </section>
        <section className={styles.secondSection}>
          <div className={styles.cordArea}>
            <Row gutter={16}>
              <Col span={6} className={styles.cord}>
                <Spin spinning={isLoading}>
                  <Header
                    title={t('common.companyNames')}
                    data={company}
                    backgroundColor="#3399cc"
                    Icon={barGraphImg}
                    btncoler="#0066cc"
                  />
                </Spin>
              </Col>
              <Col span={6} className={styles.cord}>
                <Spin spinning={isLoading}>
                  <Header
                    title={t('common.realEstate')}
                    data={propert}
                    backgroundColor="#007700"
                    Icon={realEstateImg}
                    btncoler="#006600"
                  />
                </Spin>
              </Col>
              <Col span={6} className={styles.cord}>
                <Spin spinning={isLoading}>
                  <Header
                    title={t('common.customer')}
                    data={customer}
                    backgroundColor="#ffcc33"
                    Icon={CustomerImg}
                    btncoler="#cc9900"
                  />
                </Spin>
              </Col>
              <Col span={6} className={styles.cord}>
                <Spin spinning={isLoading}>
                  <Header
                    title={t('common.matter')}
                    data={project}
                    backgroundColor="#ff0033"
                    Icon={pieChart}
                    btncoler="#cc0000"
                  />
                </Spin>
              </Col>
            </Row>
          </div>
          <section className={styles.secondSection}>
            <Row>
              <Col style={style} span={12}>
                <Spin spinning={isLoading}>
                  <PolygonalLine />
                </Spin>
              </Col>
              <Col style={style} span={12}>
                <Spin spinning={isLoading}>
                  <Graph dataLine={dataLine} dataGrap={dataGrap} />
                </Spin>
              </Col>
            </Row>
          </section>
        </section>
      </>
    </div>
  );
}
