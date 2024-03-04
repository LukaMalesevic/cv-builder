export default function PersonalDetails()
{
    return (
        <div className="personal-details-container">
            <h1>Personal Details</h1>
            <div className="input-container">
                <label htmlFor="text">Full name</label>
                <input type="text" placeholder="First and last name"/>
            </div>
            <div className="input-container">
                <label htmlFor="text">Email</label><label className="recommended" htmlFor="text">recommended</label>
                <input type="email" placeholder="Enter email" />
            </div>
            <div className="input-container">
                <label htmlFor="text">Phone number</label><label className="recommended" htmlFor="text">recommended</label>
                <input type="tel" placeholder="Enter phone number" />
            </div>
            <div className="input-container">
                <label htmlFor="text">Address</label><label className="recommended" htmlFor="text">recommended</label>
                <input type="text" placeholder="City, Country"/>
            </div>
        </div>
    );
}