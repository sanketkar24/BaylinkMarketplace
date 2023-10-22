'use client'
import React, {useState} from 'react'
import './page.css'
import tncImage from '../../../public/assets/tncImage.png'
import Image from 'next/image'
import { Button, Modal, Typography } from 'antd'
const { Title } = Typography;

import { createStyles, useTheme } from 'antd-style';
const useStyle = createStyles(({ token }) => ({
    'my-modal-body': {
        background: token['blue-1'],
        padding: token.paddingSM,
    },
    'my-modal-mask': {
        boxShadow: `inset 0 0 15px #fff`,
    },
    'my-modal-header': {
        borderBottom: `1px dotted ${token.colorPrimary}`,
    },
    'my-modal-footer': {
        color: token.colorPrimary,
    },
    'my-modal-content': {
        border: '1px solid #333',
    },
}));
function tncPage() {
    const [isModalOpen, setIsModalOpen] = useState([false, false]);
    const { styles } = useStyle();
    const token = useTheme();
    const toggleModal = (idx, target) => {
        setIsModalOpen((p) => {
            p[idx] = target;
            return [...p];
        });
    };
    const modalStyles = {
        header: {
            borderLeft: `5px solid ${token.colorPrimary}`,
            borderRadius: 0,
            paddingInlineStart: 5,
        },
        body: {
            boxShadow: 'inset 0 0 5px #999',
            borderRadius: 5,
        },
        mask: {
            backdropFilter: isModalOpen[0] ? 'blur(10px)' : 'none', // Apply backdropFilter only when the modal is open
        },
        footer: {
            borderTop: '1px solid #333',
        },
        content: {
            boxShadow: '0 0 30px #999',
        },
    };
    const classNames = {
        body: styles['my-modal-body'],
        mask: styles['my-modal-mask'],
        header: styles['my-modal-header'],
        footer: styles['my-modal-footer'],
        content: styles['my-modal-content'],
    };

    return (
        <div className='tnc h-[75vh] bg-white'>
            <div className='tnc-content bg-yellow-50 h-[80%] '>
                <div className='tnc-content-left'>
                    <div className='tnc-Heading text-center my-9'>
                        Terms and Conditions
                    </div>
                    <div className='tnc-para'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
                        <br />
                        <Button type='primary' size='large' style={{ 'background': "#22B2E6", marginTop: '4rem', borderRadius: '125px' }}
                            onClick={() => toggleModal(0, true)}>
                            Learn More
                        </Button>
                    </div>
                </div>
                <div className='tnc-content-right'>
                    <Image src={tncImage} alt='tncImage' className='tncImage' />
                </div>
                <Modal
                    title={<Title level={2}>Terms and Conditions</Title>}
                    open={isModalOpen[0]}
                    onOk={() => toggleModal(0, false)}
                    onCancel={() => toggleModal(0, false)}
                    footer={
                    <Button style={{background: '#747474', color: 'white'}} onClick={() => toggleModal(0,false)}>
                        Close
                    </Button>}
                    classNames={classNames}
                    styles={modalStyles}
                    width={'65vw'}
                >
                    <div className='modalContent'>
                        <div className='modalContentTitle'>1. Lorem ipsum</div>
                        <div className='modalContentBody'>1.1 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</div>
                        <div className='modalContentBody'>1.2 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</div>
                        <div className='modalContentBody'>1.2 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</div>
                        <div className='modalContentBody'>1.2 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</div>
                        <div className='modalContentBody'>1.2 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</div>
                        <div className='modalContentBody'>1.2 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</div>
                        <div className='modalContentBody'>1.2 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</div>
                        <div className='modalContentBody'>1.2 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</div>
                        <div className='modalContentBody'>1.2 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</div>
                        <div className='modalContentBody'>1.2 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</div>
                        <div className='modalContentBody'>1.2 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</div>
                        <div className='modalContentBody'>1.2 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</div>

                    </div>
                </Modal>
            </div>
        </div>
    )
}

export default tncPage