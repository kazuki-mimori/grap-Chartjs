import React from 'react';
import { Button, Col, Row } from 'antd';
import styles from './styles.module.scss';
import ArrowImg from 'assets/images/Arrow.svg';
import { useTranslation } from 'react-i18next';

export default function Header(props: any) {
  const { t } = useTranslation();
  const Card = {
    backgroundColor: props.backgroundColor,
    Icon: props.Icon,
    color: '#ffff',
    padding: '10px',
    height: '130px',
    borderRadius: '5px 5px 0 0',
  };

  const Cardbtn = {
    backgroundColor: props.btncoler,
    width: '100%',
    height: '35px',
    borderRadius: '0 0 5px 5px',
    border: 'none',
  };
  return (
    <div className={styles.maincard}>
      <div style={Card}>
        <p className={styles.companiesNumber}>{props.data}</p>
        <Row className={styles.companyIcon}>
          <Col span={8}>
            <div className={styles.company}>{props.title}</div>
          </Col>
          <Col span={7} offset={9}>
            <img className={styles.iconImg} alt="add" src={props.Icon} />
          </Col>
        </Row>
      </div>
      <Button style={Cardbtn}>
        {t('common.detail')}
        <img className={styles.ArrowImg} alt="add" src={ArrowImg} />
      </Button>
    </div>
  );
}
