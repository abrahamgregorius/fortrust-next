import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function Cookie() {
    return (
        <>
            <Navbar></Navbar>

            <main>
                <section className="page-header">
                    <div className="container">
                        <h1>Cookie Policy</h1>
                        <p>Understanding how we use cookies to improve your experience.</p>
                    </div>
                </section>

                <section className="policy-content">
                    <div className="container">
                        <h2>What Are Cookies?</h2>
                        <p>
                            A cookie is a small data file sent to your computer to uniquely
                            identify your browser or to store information or settings in your
                            browser. This helps us to provide you with a good experience when
                            you browse our website and also allows us to improve our site.
                        </p>

                        <h2>How We Use Cookies</h2>
                        <p>We use cookies for several purposes, including:</p>
                        <ul>
                            <li>
                                <strong>Essential Cookies:</strong> These are required for the
                                operation of our website. They include, for example, cookies that
                                enable you to log into secure areas of our website.
                            </li>
                            <li>
                                <strong>Analytical/Performance Cookies:</strong> They allow us to
                                recognize and count the number of visitors and to see how visitors
                                move around our website when they are using it. This helps us to
                                improve the way our website works.
                            </li>
                            <li>
                                <strong>Functionality Cookies:</strong> These are used to
                                recognize you when you return to our website. This enables us to
                                personalize our content for you and remember your preferences.
                            </li>
                            <li>
                                <strong>Targeting Cookies:</strong> These cookies record your
                                visit to our website, the pages you have visited and the links you
                                have followed. We will use this information to make our website
                                and the advertising displayed on it more relevant to your
                                interests.
                            </li>
                        </ul>

                        <h2>Your Choices</h2>
                        <p>
                            You can reset your web browser to refuse all cookies or to indicate
                            when a cookie is being sent. However, some features of the website
                            may not function properly if the ability to accept cookies is
                            disabled. To learn more about how to manage cookies, follow your web
                            browser’s directions.
                        </p>

                        <h2>Changes to Our Cookie Policy</h2>
                        <p>
                            We may update this Cookie Policy from time to time. We will notify
                            you of any changes by posting the new Cookie Policy on this page.
                        </p>

                        <h2>Contact Us</h2>
                        <p>
                            If you have any questions about our use of cookies, please contact
                            us at info@fortrust.com.
                        </p>
                    </div>
                </section>
            </main>

            <Footer></Footer>
        </>
    );
}