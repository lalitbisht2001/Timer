import { useEffect, useState } from "react"
import styles from "./Timer.module.css";
const Timer = () => {
    const [time, setTime] = useState(false);
    const [second, setSecond] = useState(null);
    const [input, setInput] = useState({
        hours: null,
        minute: null,
    })
    const handleTimer = (e) => {
        const { name, value } = e.target;
        setInput(prev => ({
            ...prev,
            [name]: value,
        }))
    }

    const startTimer = (e) => {
        e.preventDefault();
        setTime(true)
    }

    const stopTimer = (e) => {
        e.preventDefault();
        setTime(false)
    }

    const clearTimer = (e) => {
        e.preventDefault();
        setInput({
            hours: 0,
            minute: 0,
        })
        setSecond(60);
        setTime(false);
    }
    useEffect(() => {
        if (time) {
            const timer = setInterval(() => {
                if (second > 0) {
                    setSecond(prev => prev - 1);
                }
                else if (input.minute > 0) {
                    setSecond(59);
                    setInput((prev) => ({
                        ...prev,
                        minute: prev.minute - 1,
                    }))
                }
                else if (input.hours > 0) {
                    setInput(prev => ({
                        ...prev,
                        hours: prev.hours - 1,
                        minute: 59,
                    }))
                }
                else {
                    clearInterval(timer);
                    setTime(false);
                }
            }, 1000);

            return () => clearInterval(timer);
        }
    }, [input, time, second])






    // useEffect(() => {
    //     if (time > 0) {
    //         const timer = setTimeout(() => {
    //             setTime(time - 1);
    //         }, 1000);

    //         return () => clearTimeout(timer)
    //     }

    // }, [time])
    return (
        <div className={styles.main}>
            <div className={styles.heading}>
                timer
            </div>
            <div className={styles.inputs}>
                <input placeholder="hours" value={input.hours} name="hours" onChange={handleTimer} />
                <input placeholder="minutes" value={input.minute} name="minute" onChange={handleTimer} />
                <p>{second ? second : "second"}</p>
            </div>
            <div className={styles.btn}>
                <button onClick={startTimer}>Start</button>
                <button onClick={stopTimer}>Stop</button>
                <button onClick={clearTimer}>Clear</button>
            </div>
            <div className={styles.footer}>
                Copyright@ developed by <span>Lalit Bisht</span>
            </div>
        </div>
    )
}

export default Timer
