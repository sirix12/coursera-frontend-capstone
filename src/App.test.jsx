import { test, expect, vi, beforeEach } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App.jsx";
import BookingForm from "./Components/BookingForm.jsx";
import { BrowserRouter } from "react-router-dom";

// Mock the global API functions provided by the capstone script
const mockFetchAPI = vi.fn(() => ["17:00", "18:00", "19:00"]);
const mockSubmitAPI = vi.fn(() => true);

global.fetchAPI = mockFetchAPI;
global.submitAPI = mockSubmitAPI;
window.fetchAPI = mockFetchAPI;
window.submitAPI = mockSubmitAPI;

beforeEach(() => {
    mockFetchAPI.mockClear();
    mockSubmitAPI.mockClear();
});

test("Renders the BookingPage component successfully", () => {
    render(<App />);
    const reserveButton = screen.getByRole('button', { name: /Reserve/i });
    fireEvent.click(reserveButton);

    const headingElement = screen.getByText(/Choose date/i);
    expect(headingElement).toBeInTheDocument();
});

test("Submit button is disabled by default due to empty date", () => {
    render(
        <BrowserRouter>
            <BookingForm />
        </BrowserRouter>
    );
    const submitButton = screen.getByRole('button', { name: /Make Your reservation/i });
    expect(submitButton).toBeDisabled();
});

test("Submit button is enabled when form is filled correctly", () => {
    render(
        <BrowserRouter>
            <BookingForm />
        </BrowserRouter>
    );
    
    const dateInput = screen.getByLabelText(/Choose date/i);
    fireEvent.change(dateInput, { target: { value: '2023-10-25' } });
    
    const submitButton = screen.getByRole('button', { name: /Make Your reservation/i });
    expect(submitButton).toBeEnabled();
});

test("Form submission calls submitAPI", () => {
    render(
        <BrowserRouter>
            <BookingForm />
        </BrowserRouter>
    );
    
    const dateInput = screen.getByLabelText(/Choose date/i);
    fireEvent.change(dateInput, { target: { value: '2023-10-25' } });

    const submitButton = screen.getByRole('button', { name: /Make Your reservation/i });
    fireEvent.click(submitButton);

    expect(mockSubmitAPI).toHaveBeenCalled();
});