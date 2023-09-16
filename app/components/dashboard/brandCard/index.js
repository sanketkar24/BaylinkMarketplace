'use client'
import React from 'react'
import { Avatar, Card, Space } from 'antd';
import { Col, Row } from 'antd';
import './index.css';
const { Meta } = Card;

function BrandCard() {
    return (
        <div className='BrandCard'>
            <Card
                style={{
                    width: 275,
                    height: 175,
                    fontFamily: 'General Sans Regular'
                }}
            >
                <Meta
                    avatar={<Avatar src="https://s3-alpha-sig.figma.com/img/a53e/258b/92b4dddbe723d6c25948b94a6736396d?Expires=1694995200&Signature=QRDCkKoue8hyB41A9m3P7qaEoKR1o0jI4XqoilQOY~pPucM8kibZiG33019AnOWocmlt6eOL5Gz5c~GDtLJ9v5FQqoIgL4Ev~-8RJtRBS40CrehbHkwTmM5u~prB3VJ5X~jivJ4H9dOOv7eFehuMtMliGYorruc5YZUSetl4S69f9KfIBfAYInXgPltPH11ppkuTmK9dGqoB6A2VxAtbaQxrH~uAzy263hf9V1MCyO4Js1eJj0p-6sRIsbxt1lP~GQoXO3QcAs~SqBVfCiekQxddkyeVL8i1nz8qBomUzOn5InPrGzl3KTLkjuVDurfWqCYkfvCzMZPbXjav3qmXhw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" size={65} />}
                    title="Brand Name"
                    description="brand id"
                />
                <Row className='pt-5 brandDescription' >
                        <Col span={12}>
                            <div>Number of Current Stores:</div>
                        </Col>
                        <Col span={12}>
                            <div className='boldText'>3</div>
                        </Col>
                </Row>
            </Card>
        </div>
    )
}

export default BrandCard