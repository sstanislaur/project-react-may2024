import React from 'react';

const AboutPage = () => {
    return (
        <div className="about-page">
            <h1>About Us</h1>
            <p>
                Welcome to <strong>HD Film</strong>, your ultimate destination for discovering and enjoying the
                world of cinema.
                Our platform offers a vast collection of movies across genres, ensuring high-quality visuals and an
                unforgettable viewing experience.
                Whether you're seeking the latest blockbusters, timeless classics, or hidden gems, <strong>HD
                Film</strong> makes it easy
                to explore and find your next favorite film. Join us and dive into the magic of movies today!
            </p>

            <footer className="footer">
                <p>
                    Have a question? Call us at <a href="tel:0800-509-416">0800-509-416</a>
                </p>
                <div className="footer-columns">
                    <div className="footer-column">
                        <a href="#">FAQ</a>
                        <a href="#">Investor Relations</a>
                        <a href="#">Privacy Policy</a>
                        <a href="#">Speed Test</a>
                    </div>
                    <div className="footer-column">
                        <a href="#">Help Center</a>
                        <a href="#">Careers</a>
                        <a href="#">Cookie Preferences</a>
                        <a href="#">Legal Notices</a>
                    </div>
                    <div className="footer-column">
                        <a href="#">Account</a>
                        <a href="#">Ways to Watch</a>
                        <a href="#">Corporate Information</a>
                        <a href="#">Only on HD Film</a>
                    </div>
                </div>
                <div className="footer-language-selector">
                    <label>
                        <select>
                            <option>English</option>
                            <option>Українська</option>
                            <option>Русский</option>
                        </select>
                    </label>
                </div>
                <p>HD Film International</p>
            </footer>
        </div>
    );
};

export default AboutPage;
