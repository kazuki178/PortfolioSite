import ItemList from "./ItemList";
import AboutMe from "./AboutMe";

const HomePage: React.FC = () => {
    return (
        <div>
            <ItemList />
            <AboutMe />
        </div>
    );
};

export default HomePage;