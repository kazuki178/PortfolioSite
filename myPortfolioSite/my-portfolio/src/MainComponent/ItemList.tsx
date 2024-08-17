import React from 'react';
import '../MainComponent/MainComponentsStyle/ItemList.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXTwitter, faGithub, faLinkedin, faQuora } from '@fortawesome/free-brands-svg-icons';

const ItemList = () => {
    return (
        <div className="item-list">
            <ul className='items'>
                <li><a href="https://x.com/178_c_m_" target='_blank'rel="noreferrer"><FontAwesomeIcon icon={faXTwitter} /></a></li>
                <li><a href='https://github.com/kazuki178' target='black'rel="noreferrer"><FontAwesomeIcon icon={faGithub} /></a></li>
                <li><a href='https://www.linkedin.com/in/%E5%92%8C%E6%A8%B9-%E7%9F%A2%E6%A9%8B-98b757301/' target='blank'rel="noreferrer"> <FontAwesomeIcon icon={faLinkedin} /></a></li>
                <li><a href='https://qiita.com/178_c_m' target='blank'rel="noreferrer"><FontAwesomeIcon icon={faQuora} /></a></li>
            </ul>
        </div>
    );
};

export default ItemList;