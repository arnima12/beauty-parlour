import banner from "../../../asset/hero.jpg";
import { DayPicker } from 'react-day-picker';

const AppointmentBanner = ({ selectedDate, setSelectedDate }) => {

    return (
        <header>
            <div className="hero ">
                <div className="hero-content flex-col lg:flex-row-reverse gap-16">
                    <img src={banner} alt="dentist chair" className="max-w-sm rounded-lg shadow-2xl" />
                    <div className="">
                        <DayPicker mode='single' selected={selectedDate}
                            onSelect={setSelectedDate} />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default AppointmentBanner;