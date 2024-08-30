import { useNavigate } from 'react-router-dom';

const AboutMe = () => {
    const navigate = useNavigate();

    const handleBackClick = () => {
        navigate('/');
    };

    return (
        <>
            <div className="about-section-parent">
                <div className="about-section">
                    <h1>aboutMe</h1>
                    <p>高校時代にプログラムに触れてから情報技術の学習にのめり込む。
                        情報だけではなく経営や組織マネジメントの知識を備えた技術者を目指すべく、
                        産業能率大学&nbsp;情報マネジメント学部に進学。
                        大学で経営戦略や組織マネジメントを学び、同時にフロントエンドからバックエンドまで一貫して技術に触れる日々。
                        情報教育や国家試験の解説記事の執筆なども行っている。</p>
                    <ul className="license">
                        <h2>取得資格</h2>
                        <li>応用情報技術者</li>
                        <li>基本情報技術者</li>
                        <li>Oracle Certified Java Programmer, Silver SE 11</li>
                    </ul>

                    <div className="skills">
                        <h2>mainSkill</h2>
                        <ul className="skill-item">
                            <li><img src="../../images/tecItem/java.png" alt="" className='tec-img'/></li>
                            <li><img src="../../images/tecItem/spring.png" alt="" className='tec-img'/></li>
                            <li><img src="../../images/tecItem/typescript.png" alt="" className='tec-img'/></li>
                            <li><img src="../../images/tecItem/react.png" alt="" className='tec-img'/></li>
                            <li><img src="../../images/tecItem/html.png" alt="" className='tec-img'/></li>
                            <li><img src="../../images/tecItem/scss.png" alt="" className='tec-img'/></li>
                        </ul>
                    </div>


                    <button onClick={handleBackClick} className='back'>戻る</button>
                </div>
            </div>
        </>



    );
};

export default AboutMe;