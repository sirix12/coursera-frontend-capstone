import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function BookingForm() {
    const navigate = useNavigate();
    const [availableTimes, setAvailableTimes] = useState(fetchAPI(new Date()));
    const [formContent, setFormContent] = useState({
        "res-date": '',
        "res-time": '',
        "guests": 1,
        "occasion": 'Birthday'
    })

    // Fetch new times when the date changes
    useEffect(() => {
        if (formContent["res-date"]) {
            const newTimes = fetchAPI(new Date(formContent["res-date"]));
            setAvailableTimes(newTimes);

            // Also reset selected time if it's no longer available
            setFormContent(prev => ({
                ...prev,
                "res-time": newTimes[0] || ''
            }));
        }
    }, [formContent["res-date"]]);

    const actualTime = availableTimes.includes(formContent["res-time"])
        ? formContent["res-time"]
        : (availableTimes[0] || '');

    const isFormValid = () => {
        return formContent["res-date"] !== '' &&
               formContent["res-time"] !== '' &&
               formContent["guests"] >= 1 &&
               formContent["guests"] <= 10 &&
               formContent["occasion"] !== '';
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        // Simulated server-side validation
        if (!formContent["res-date"] || formContent["guests"] < 1 || formContent["guests"] > 10) {
            alert("Server Error: Invalid data provided. Request rejected.");
            return;
        }

        const finalSubmission = { ...formContent, "res-time": actualTime };
        console.log("Submitting:", finalSubmission);

        // Use the submitAPI function provided by the script
        const isSuccess = submitAPI(finalSubmission);
        if (isSuccess) {
            navigate("/booking/confirmed");
            // Optionally, reset the form here
        } else {
            alert("Reservation failed!");
        }
    }

    const handleChange = (event) => {
        setFormContent((prev) => {
            return { ...prev, [event.target.id]: event.target.value }
        })
    }

    return (
        <>
            <form onSubmit={handleSubmit} style={{ display: "grid", maxWidth: "200px", gap: "20px" }} aria-label="Make your reservation">
                <label htmlFor="res-date">Choose date</label>
                <input required onChange={handleChange} value={formContent["res-date"]} type="date" id="res-date" aria-required="true" aria-invalid={!formContent["res-date"]} />
                
                <label htmlFor="res-time">Choose time</label>
                <select required id="res-time" onChange={handleChange} value={actualTime} aria-required="true" aria-invalid={!actualTime}>
                    {availableTimes.map((time) => {
                        return (
                            <option key={time.toString()}>{time}</option>
                        )
                    })}
                </select>
                
                <label htmlFor="guests">Number of guests</label>
                <input required onChange={handleChange} value={formContent["guests"]} type="number" placeholder="1" min="1" max="10" id="guests" aria-required="true" aria-invalid={formContent["guests"] < 1 || formContent["guests"] > 10} />
                
                <label htmlFor="occasion">Occasion</label>
                <select required onChange={handleChange} value={formContent["occasion"]} id="occasion" aria-required="true" aria-invalid={!formContent["occasion"]}>
                    <option>Birthday</option>
                    <option>Anniversary</option>
                </select>
                
                <input type="submit" disabled={!isFormValid()} value="Make Your reservation" aria-label="Submit reservation form" />
            </form>
        </>
    );
}