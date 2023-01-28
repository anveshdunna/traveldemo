import { HotelCard } from './components/HotelCard';

function App() {
    return (
        <div className="p-4">
            Hello world
            <div className="flex-row gap-3 p-0">
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
