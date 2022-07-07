import React from 'react';
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  Title,
  Legend,
  BarElement,
  BarController,
} from 'chart.js';
import { Chart } from 'react-chartjs-2';
import styles from './styles.module.scss';
import { Col, Row, Typography } from 'antd';
import { useTranslation } from 'react-i18next';
import { BorderOuterOutlined } from '@ant-design/icons';
const { Link } = Typography;

interface IProps {
  dataLine?: any;
  dataGrap?: any;
}

export default function Graph(props: IProps) {
  ChartJS.register(BarController, LineElement, PointElement, BarElement, LinearScale, Title, Legend);
  const { t } = useTranslation();
  let LineData: number[] = [];
  for (let i = 1; i <= 9; i += 1) {
    const value = props.dataLine?.[`phase_${i}`] ?? 0;
    LineData.push(value);
  }
  const NameData: String[] = [];
  for (let i = 0; i <= 8; i += 1) {
    const value = props.dataGrap?.data[`${i}`]?.name ?? 0;
    NameData.push(value);
  }
  const staffData: number[] = [];
  for (let i = 0; i <= 8; i += 1) {
    const value = props.dataGrap?.data[`${i}`]?.staffs ?? 0;
    staffData.push(value);
  }
  const managerData: number[] = [];
  for (let i = 0; i <= 8; i += 1) {
    const value = props.dataGrap?.data[`${i}`]?.managers ?? 0;
    managerData.push(value);
  }
  const adminData: number[] = [];
  for (let i = 0; i <= 8; i += 1) {
    const value = props.dataGrap?.data[`${i}`]?.admins ?? 0;
    adminData.push(value);
  }

  const data: any = {
    labels: NameData,
    datasets: [
      {
        type: 'line',
        label: `${t('common.matterNumber')}`,
        borderColor: '#343131',
        pointBackgroundColor: '#343131',
        radius: 4,
        data: LineData,
      },
      {
        type: 'bar',
        label: `${t('common.staff')}`,
        data: staffData,
        backgroundColor: '#2C7CFF',
        borderWidth: 1,
        borderColor: '#2C7CFF',
        yAxisID: 'yAxes1',
      },
      {
        type: 'bar',
        label: `${t('common.managers')}`,
        data: managerData,
        backgroundColor: '#F9A825',
        borderColor: '#F9A825',
        borderWidth: 1,

        yAxisID: 'yAxes1',
      },
      {
        type: 'bar',
        label: `${t('common.admin')}`,
        data: adminData,
        backgroundColor: '#EF5533',
        borderColor: '#EF5533',
        borderWidth: 1,
        yAxisID: 'yAxes1',
      },
    ],
  };

  const options: any = {
    type: 'scatter',
    plugins: {
      legend: {
        display: false,
        labels: {
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
    labels: {
      display: true,
    },
    scales: {
      xAxes: {
        barPercentage: 10,
        categoryPercentage: 0.4,
        stacked: true,
        gridLines: {},
        grid: {
          color: '#fff',
          borderColor: '#E0E0E0',
        },
      },
      yAxes1: {
        display: true,
        type: 'linear',
        position: 'left',
        min: 0,
        max: 200,
        stacked: true,
        grid: {
          color: '#fff',
          borderColor: '#fff',
        },
      },
      yAxes: {
        stacked: true,
        position: 'right',
        min: 0,
        max: 500,
        grid: {
          color: '#fff',
          borderColor: '#fff',
        },
      },
    },
  };
  const type: any = {};
  return (
    <>
      <div className={styles.Graph}>
        <section className={styles.firstSection}>
          <Row>
            <Col span={12}>
              <h3>{t('common.Salesranking')}</h3>
            </Col>
            <Col span={2} offset={10}>
              <Link href="#">{t('common.detail')}</Link>
            </Col>
          </Row>
          <div className={styles.Explanation}>
            <div className={styles.firstExplanation}>
              <BorderOuterOutlined
                style={{
                  fontSize: '15px',
                  background: '#4486C6',
                  color: '#4486C6',
                  marginRight: 7,
                  borderRadius: '5px',
                }}
              />
              {t('common.staff')}
            </div>
            <div className={styles.firstExplanation}>
              <BorderOuterOutlined
                style={{
                  fontSize: '15px',
                  background: '#FFD700',
                  color: '#FFD700',
                  marginRight: 7,
                  borderRadius: '5px',
                }}
              />
              {t('common.managers')}
            </div>
            <div className={styles.firstExplanation}>
              <BorderOuterOutlined
                style={{
                  fontSize: '15px',
                  background: '#EF5533',
                  color: '#EF5533',
                  marginRight: 7,
                  borderRadius: '5px',
                }}
              />
              {t('common.admin')}
            </div>
            <div>
              <BorderOuterOutlined
                style={{
                  fontSize: '15px',
                  background: '#343131',
                  color: '#343131',
                  marginRight: 7,
                  borderRadius: '5px',
                }}
              />
              {t('common.matterNumber')}
            </div>
          </div>
        </section>
        <Row>
          <Col span={10}>
            <p style={{ fontSize: '13px' }}>{t('common.employeeMember')}</p>
          </Col>
          <Col span={2} offset={12}>
            <p style={{ fontSize: '13px' }}>{t('common.matterNumber')}</p>
          </Col>
        </Row>
        <div className={styles.graph}>
          <Chart type={type} data={data} options={options} height={150} />
        </div>
      </div>
    </>
  );
}
