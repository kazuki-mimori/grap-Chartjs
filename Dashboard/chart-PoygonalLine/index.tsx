import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  BarController,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import styles from './styles.module.scss';
import { Col, Row, Typography } from 'antd';
import { useTranslation } from 'react-i18next';

const { Text, Link } = Typography;
export default function PolygonalLine() {
  ChartJS.register(BarController, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);
  const { t } = useTranslation();
  const options: any = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
        labels: {
          // This more specific font property overrides the global property
          font: {
            size: 20,
          },
        },
      },
      title: {
        display: false,
        text: 'Chart.js Bar Chart',
      },
    },
    scales: {
      x: {
        drawBorder: false,
        ticks: {
          display: true,
        },
        grid: {
          color: '#fff',
          borderColor: '#E0E0E0',
          tickColor: '#E0E0E0',
        },
      },
      y: {
        grid: {
          color: '#fff',
          borderColor: '#fff',
        },
        suggestedMin: 0,
        suggestedMax: 200,
      },
    },
  };
  const labels = ['フェーズ１', 'フェーズ2', 'フェーズ3', 'フェーズ4', 'フェーズ5', 'フェーズ6'];
  const data: any = {
    labels: labels,
    datasets: [
      {
        label: '就業者数',
        data: [150, 190, 100, 110, 160, 150, 120],
        borderColor: '#398FF2',
      },
    ],
  };
  return (
    <>
      <div className={styles.PolygonalLine}>
        <section className={styles.fristSction}>
          <Row>
            <Col span={12}>
              <h3>段階的なプロジェクト管理</h3>
            </Col>
            <Col span={2} offset={10}>
              <Link href="#">{t('common.detail')}</Link>
            </Col>
          </Row>
          <Row gutter={18}>
            <Col span={17}>
              <div className={styles.ProbabilityDeals}>
                <label className={styles.label} htmlFor="">
                  案件
                </label>
                <p className={styles.matter}>820</p>
                <div className={styles.probability}>
                  <p style={{ fontSize: '7px', color: '#00A19D', marginRight: 15 }}>↑ 12.5%</p>
                </div>
                <p style={{ fontSize: '7px', color: '#999999' }}>Since last week</p>
              </div>
            </Col>
            <Col span={0}></Col>
          </Row>
        </section>
        <div className={styles.graph}>
          <Line options={options} data={data} height={150} />
        </div>
      </div>
    </>
  );
}
