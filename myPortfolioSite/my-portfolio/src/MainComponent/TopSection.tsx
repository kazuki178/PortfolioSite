import React from 'react';
import '../MainComponent/MainComponentsStyle/TopSection.css';
const TopSection = () => {
    return (
        <>

                <div className="top-section">
                    <div className="top-section-img">
                        <img src="../images/top-section-img/me.jpg" alt="プロフィール画像" className='top-section-img' />
                    </div>

                    <div className="user-info">
                        <h2 className="my-name-r"><span className='name-span'>Kazu</span>ki&nbsp;Yahashi</h2>
                        <h1 className="my-name-j">矢橋&nbsp;<span className='name-span'>和</span>樹</h1>
                        {/* <p className='license'><span className='licenseSpan'>応</span>用情報技術者</p> */}
                    </div>
                </div>
            
        </>

    );
};

export default TopSection;