import React from 'react';
import '../MainComponent/MainComponentsStyle/NewTopics.css';
const NewTopics: React.FC = () => {
    return (
        <>

            <div className="news">
                <div className="news-section">
                    <h2 >News</h2>
                    <div className="topics">
                        {/* バックエンド実装終わったら消す */}
                        <div className="test">
                            <p>バックエンド実装中</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default NewTopics;