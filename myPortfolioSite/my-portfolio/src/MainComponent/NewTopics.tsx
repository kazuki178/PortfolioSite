import React, { useEffect, useState } from 'react';
import '../MainComponent/MainComponentsStyle/NewTopics.css';

interface Architect {
    id: number;
    day: string;
    title: string;

}

const NewTopics: React.FC = () => {
    const [architects, setArchitects] = useState<Architect[]>([]);

    useEffect(() => {
        fetch('http://localhost:8080/api/architects')
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                // 日付フィールドをDate型に変換
                const architectsWithDate = data.map((item: any) => ({
                    //スプレッド構文でitemをこぴーして、dayフィールドだけDate型に変換
                    ...item,
                    day: new Date(item.day)
                }));
                setArchitects(architectsWithDate);
            })
            .catch(error => console.error('Error fetching architects:', error));
    }, []);
    return (
        <>

            <div className="news">
                <div className="news-section">
                    <h2 >News</h2>
                    <div className="topics">
                        {/* バックエンド実装終わったら消す */}
                        <div className="test">
                            <p>バックエンド実装中</p>
                            {architects.length>0 ? (
                                architects.map((architect) => (
                                    <div key={architect.id}>
                                        <p>{architect.day.toString()}</p>
                                        <h3>{architect.title}</h3>
                                    </div>
                                ))
                            ) : (
                                <p style={{color:"red"}}>error...</p>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default NewTopics;