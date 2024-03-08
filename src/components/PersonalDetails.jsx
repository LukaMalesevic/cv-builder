import PropTypes from 'prop-types';

PersonalDetails.propTypes = {
    currentName: PropTypes.string.isRequired,
    nextName: PropTypes.func.isRequired,
    currentEmail: PropTypes.string.isRequired,
    nextEmail: PropTypes.func.isRequired,
    currentAddress: PropTypes.string.isRequired,
    nextAddress: PropTypes.func.isRequired,
    currentPhone: PropTypes.string.isRequired,
    nextPhone: PropTypes.func.isRequired
}

export default function PersonalDetails(props)
{
    return (
        <div className="personal-details-container">
            <h1>Personal Details</h1>
            <div className="input-container">
                <label htmlFor="text">Full name</label>
                <input value={props.currentName} onChange={(event) => props.nextName(event.target.value)} type="text" placeholder="First and last name"/>
            </div>
            <div className="input-container">
                <label htmlFor="text">Email</label><label className="recommended" htmlFor="text">recommended</label>
                <input value={props.currentEmail} onChange={(event) => props.nextEmail(event.target.value)} type="email" placeholder="Enter email" />
            </div>
            <div className="input-container">
                <label htmlFor="text">Phone number</label><label className="recommended" htmlFor="text">recommended</label>
                <input value={props.currentPhone} onChange={(event) => props.nextPhone(event.target.value)}  type="tel" placeholder="Enter phone number" />
            </div>
            <div className="input-container">
                <label htmlFor="text">Address</label><label className="recommended" htmlFor="text">recommended</label>
                <input value={props.currentAddress} onChange={(event) => props.nextAddress(event.target.value)}  type="text" placeholder="City, Country"/>
            </div>
        </div>
    );
}