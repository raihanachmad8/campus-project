import { useEffect, useState } from "react";
import { useLocation} from "react-router-dom";

const Navigation: React.FC = () => {

    const location = useLocation();
    const [stateActive, setStateActive] = useState('Home');
    useEffect(() => {
        const handleScroll = () => {
            console.log(window.scrollY);
            const newY = window.scrollY;
            if (newY > 20) {
                document.querySelector('nav')?.classList.add('bg-white');
            } else {
                document.querySelector('nav')?.classList.remove('bg-white');
            }

            if (newY > 1830) {
                setStateActive('Showcase');
            } else if (newY > 900) {
                setStateActive('About');
            } else {
                setStateActive('Home');
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [location.pathname]);
    return (
        <nav className="fixed z-[99] w-full bg-gray-project drop-shadow-xl">
            <div className="flex justify-between items-center max-w-7xl w-full mx-auto py-4">
                <h1 className="text-2xl font-semibold text-center select-none">Campus-Project<span className="text-indigo-700 text-base">.cloud</span></h1>
                <ul className="flex items-center justify-center gap-4 self-center">
                    <li className={`font-semibold text-md select-none ${stateActive == 'Home' ? 'text-indigo-500' : 'text-gray-500'}`}>
                        <a draggable={false} href="/#jumbotron">Home</a>
                    </li>
                    <li className={`font-semibold text-md select-none ${stateActive == 'About' ? 'text-indigo-500' : 'text-gray-500'}`}>
                        <a draggable={false} href="/#about">About</a>
                    </li>
                    <li className={`font-semibold text-md select-none text-gray-500 ${stateActive == 'Showcase' ? 'text-indigo-500' : 'text-gray-500'}`}>
                        <a draggable={false} href="/#showcase">Showcase</a>
                    </li>
                    <li className={`font-semibold text-md select-none text-gray-500`}>
                        <a href="https://stats.uptimerobot.com/vXneDveFtX" target="_blank" rel="noopener">Diagnostic</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navigation;