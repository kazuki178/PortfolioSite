import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../MainComponent/MainComponentsStyle/Header.css';

interface HeaderProps {
    onAboutMeClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onAboutMeClick }) => {

    //コンポーネントがマウントされたときに実行
    useEffect(() => {
        const hamburgerMenu = document.querySelector('.hamburger-menu') as HTMLButtonElement;
        const headerSection = document.querySelector('.header-section') as HTMLElement;
        const menuItems = document.querySelectorAll('.header-section ul li a') as NodeListOf<HTMLAnchorElement>;
        
        // ハンバーガーメニューをクリックしたときの処理
        //openを含むとき、つまり開いてる状態のときclosingを追加する(要素がcssでslideアップされる)
        const toggleMenu = () => {
            if (headerSection.classList.contains('open')) {
                headerSection.classList.add('closing');
                headerSection.addEventListener('animationend', () => {
                    headerSection.classList.remove('closing');
                    headerSection.classList.remove('open');
                }, { once: true });
            } else {
                headerSection.classList.add('open');
            }
        };
        const closeMenu = () => {
            if (headerSection.classList.contains('open')) {
                headerSection.classList.add('closing');
                headerSection.addEventListener('animationend', () => {
                    headerSection.classList.remove('closing');
                    headerSection.classList.remove('open');
                }, { once: true });
            }
        };
        //ウィンドウリサイズのハンドリング
        const handleResize = () => {
            if (window.innerWidth > 515) {
                headerSection.classList.remove('open');
                headerSection.classList.remove('closing');
            }
        };
        //ハンバーガーメニューのクリック時、メニューの開閉を切り替える
        if (hamburgerMenu && headerSection) {
            hamburgerMenu.addEventListener('click', toggleMenu);
            menuItems.forEach(item => {
                item.addEventListener('click', closeMenu);
            });
            window.addEventListener('resize', handleResize);

            // クリーンアップ関数を返してイベントリスナーを削除
            return () => {
                hamburgerMenu.removeEventListener('click', toggleMenu);
                menuItems.forEach(item => {
                    item.removeEventListener('click', closeMenu);
                });
                window.removeEventListener('resize', handleResize);
            };
        }
    }, []);

    return (
        <div className='header-section'>
            <button className="hamburger-menu no-underline" aria-label="Menu">
                <span></span>
                <span></span>
                <span></span>
            </button>
            <ul>
                <li><Link to="/about">AboutMe</Link></li>
                <li><Link to="/">Product</Link></li>
                <li><Link to="/">Contact</Link></li>
            </ul>
        </div>
    );
};

export default Header;