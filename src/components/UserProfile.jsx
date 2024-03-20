import React from "react";
import "../styles/userprofile.css"; // Import CSS file for styling

function UserProfile() {
    const user = {
        username: "johndoe",
        email: "johndoe@example.com",
        profilePicture: "https://via.placeholder.com/150", // Placeholder image URL
        // Add more user data as needed
    };

    return (
        <div className="user-profile">
            <h2>User Profile</h2>
            <div className="profile-info">
                <div className="profile-picture">
                    <img src={user.profilePicture} alt={user.username} />
                </div>
                <div className="user-details">
                    <p>
                        <strong>Username:</strong> {user.username}
                    </p>
                    <p>
                        <strong>Email:</strong> {user.email}
                    </p>
                    {/* Add more user details here */}
                </div>
            </div>
        </div>
    );
}

export default UserProfile;
