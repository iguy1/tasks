import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function CycleHoliday(): React.JSX.Element {
    const [holiday, setHoliday] = useState<string>("Christmas: 🎄");

    const holidays: string[] = [
        "Christmas: 🎄",
        "St Patrick's Day: 🍀",
        "Easter: 🐰",
        "Halloween: 👻",
        "Thanksgiving: 🦃",
    ];

    const HolidayAlphabet: Record<string, string> = {
        "Christmas: 🎄": "St Patrick's Day: 🍀",
        "Easter: 🐰": "Halloween: 👻",
        "Thanksgiving: 🦃": "Christmas: 🎄",
        "St Patrick's Day: 🍀": "Easter: 🐰",
        "Halloween: 👻": "Thanksgiving: 🦃",
    };

    function holidayYear(): void {
        const index = holidays.indexOf(holiday);
        const nextIndex = (index + 1) % holidays.length;
        setHoliday(holidays[nextIndex]);
    }

    return (
        <div>
            <p>Holiday: {holiday}</p>
             <Button
                onClick={() => {
                    setHoliday(HolidayAlphabet[holiday]);
                }}
            >
                Advance by Alphabet
            </Button>
            <Button onClick={holidayYear}>Advance by Year</Button>
        </div>
    );
}
