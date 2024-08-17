import ItemList from "./ItemList";
import NewTopics from "./NewTopics";
const HomePage: React.FC = () => {
    return (
        <div>
            <ItemList />
            <NewTopics />
        </div>
    );
};

export default HomePage;