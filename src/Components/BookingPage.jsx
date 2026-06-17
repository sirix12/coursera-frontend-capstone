import BookingForm from "./BookingForm";

export default function BookingPage(props) {
    return (
        <>
            <h1 style={{ textAlign: "center" }}>Book a Table</h1>
            <section style={{
                padding: "5% 20% 10% 20%", display: "flex", justifyContent: "center", alignItems: "center"
            }}>
                <BookingForm availableTimes={props.availableTimes} setAvailableTimes={props.setAvailableTimes} />
            </section >
        </>
    );
}