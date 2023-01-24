import logo from './assets/logo.svg';
import styles from './App.module.scss';
import { HotelCard } from './components/HotelCard';

function App() {
    return (
        <div>
            Hello world
            <div className="hotel-list">
                {Array(20)
                    .fill('')
                    .map(function () {
                        return <HotelCard />;
                    })}
            </div>
        </div>
    );
}

export default App;
