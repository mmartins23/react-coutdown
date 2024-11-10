# React Countdown Hook ⏳

A simple and reusable countdown hook in React, allowing you to set a target date and receive a countdown in days, hours, minutes, and seconds that updates in real time.

## 🛠 Usage

Import `useCountdown` into your component and provide a target date to start the countdown.

### Installation

No installation required for the hook itself—simply copy it into your project or package it for custom usage.

### Example Usage

```jsx
import React from "react";
import useCountdown from "./useCountdown";

export default function CountdownComponent() {
    const [days, hours, minutes, seconds] = useCountdown("2024-12-31T23:59:59");

    return (
        <div>
            <h1>Countdown to New Year:</h1>
            <p>
                {days} Days {hours} Hours {minutes} Minutes {seconds} Seconds
            </p>
        </div>
    );
}
```

### Hook Code

```javascript
import { useState } from "react";

export default function useCountdown(date) {
    const [day, setDay] = useState();
    const [hour, setHour] = useState();
    const [minute, setMinute] = useState();
    const [second, setSecond] = useState();

    function countdown() {
        const countDate = new Date(date).getTime();
        const todayDate = new Date().getTime();

        const interval = countDate - todayDate;

        const second = 1000;
        const minute = second * 60;
        const hour = minute * 60;
        const day = hour * 24;

        const dayNumber = Math.floor(interval / day);
        const hourNumber = Math.floor((interval % day) / hour);
        const minuteNumber = Math.floor((interval % hour) / minute);
        const secondNumber = Math.floor((interval % minute) / second);

        setDay(dayNumber);
        setHour(hourNumber);
        setMinute(minuteNumber);
        setSecond(secondNumber);
    }

    setInterval(countdown, 1000);

    return [day, hour, minute, second];
}
```

## 📝 Description

This `useCountdown` hook calculates the time remaining between the current date and a specified target date. It returns the remaining time in days, hours, minutes, and seconds. The countdown updates every second, making it ideal for real-time applications.

## ⚠️ Important Notes

- **setInterval Warning**: The `setInterval` function currently runs indefinitely without cleanup, which may lead to memory leaks. Consider using `useEffect` with cleanup for more optimized performance.
  
## 🔧 Customization

Feel free to modify this code to suit your specific needs, such as adjusting the update interval or formatting the output.

---
