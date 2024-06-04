import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import App from '../App';
import CallBooking from '../pages/callbooking';
import '../index.css'


function RouterSetup() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/booking" element={<CallBooking />} />
            </Routes>
        </Router>
    );
}
  
export default RouterSetup;
