import logo from './assets/logo.svg';
import styles from './App.module.scss';
import { HotelCard } from './components/HotelCard';

function App() {
    return (
        <div>
            Hello world
            <div className="hotel-list">
                <HotelCard />
                <HotelCard />
            </div>
        </div>
    );
}

export default App;
