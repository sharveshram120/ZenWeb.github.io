document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('loginButton').addEventListener('click', login);
    document.getElementById('upcomingTab').addEventListener('click', function () { showTab('upcoming'); });
    document.getElementById('interestedTab').addEventListener('click', function () { showTab('interested'); });
    document.getElementById('leaderboardTab').addEventListener('click', function () { showTab('leaderboard'); });
    document.getElementById('calendarTab').addEventListener('click', function () { showTab('calendar'); });
});

function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Authenticate user (simplified)
    if (username === "Sharvesh" && password === "password") {
        document.getElementById("login").style.display = "none";
        document.getElementById("main-content").style.display = "block";
        document.getElementById("welcome").innerHTML = "Hello " + username + "!";
    } else {
        alert("Invalid username or password");
    }
}

function showTab(tabName) {
    var contentMap = {
        'upcoming': function () {
            var content = `
                <div class="event">
                    <p>BitNBuild by GDSC - View details</p>
                    <div class="buttons">
                        <button class="button" onclick="markInterested('BitNBuild')">Interested</button>
                        <button class="button" onclick="markNotInterested('BitNBuild')">Not Interested</button>
                    </div>
                </div>
                <div class="event">
                    <p>Impetus by IEEE - View details</p>
                    <div class="buttons">
                        <button class="button" onclick="markInterested('Impetus')">Interested</button>
                        <button class="button" onclick="markNotInterested('Impetus')">Not Interested</button>
                    </div>
                </div>
                <div class="event">
                    <p>Open day by MARVEL - View details</p>
                    <div class="buttons">
                        <button class="button" onclick="markInterested('Open day')">Interested</button>
                        <button class="button" onclick="markNotInterested('Open day')">Not Interested</button>
                    </div>
                </div>
            `;
            document.getElementById("content").innerHTML = content;
        },
        'interested': function () {
            var content = `
                <div class="event">
                    <p>BitNBuild by GDSC</p>
                    <div class="buttons">
                        <button class="button" onclick="register()">Register</button>
                        <button class="button" onclick="showOtherUsers()">View other interested users</button>
                    </div>
                </div>
            `;
            document.getElementById("content").innerHTML = content;
        },
        'leaderboard': function () {
            var leaderboardData = [
                { user: "Sharvesh", points: 300 },
                { user: "User 3", points: 200 },
                { user: "User 10", points: 100 }
            ];

            var leaderboardList = "";
            leaderboardData.forEach(function(item, index) {
                leaderboardList += `
                    <div class="user">
                        <p>${index + 1}. ${item.user} - Points: ${item.points}</p>
                    </div>
                `;
            });

            var content = `
                <h3>Leaderboard</h3>
                ${leaderboardList}
            `;
            document.getElementById("content").innerHTML = content;
        },
        'calendar': function () {
            var content = `
                <table class="table">
                    <tr>
                        <th>Event</th>
                        <th>Date</th>
                    </tr>
                    <tr>
                        <td>BitNBuild</td>
                        <td>10/02/24 (Today)</td>
                    </tr>
                    <tr>
                        <td>Impetus</td>
                        <td>15/03/24</td>
                    </tr>
                    <tr>
                        <td>Lab Externals</td>
                        <td>19/03/24</td>
                    </tr>
                </table>
            `;
            document.getElementById("content").innerHTML = content;
        }
    };

    var contentFunction = contentMap[tabName];
    if (contentFunction) {
        contentFunction();
    } else {
        // Handle the default case
    }
}

function markInterested(eventName) {
    alert(eventName + " marked as interested");
}

function markNotInterested(eventName) {
    alert(eventName + " marked as not interested");
}

function register() {
    alert("Registered for the event");
}

function showOtherUsers() {
    var otherUsers = ["User 2", "User 3", "User 4", "User 5"];

    var userList = "";
    otherUsers.forEach(function(user) {
        userList += `
            <div class="user">
                <p>${user}</p>
                <div class="buttons">
                    <button class="button" onclick="showProfile('${user}')">Show Profile</button>
                    <button class="button" onclick="sendTeamRequest('${user}')">Send Team Request</button>
                </div>
            </div>
        `;
    });

    var content = `
        <h3>Other Interested Users</h3>
        ${userList}
    `;

    document.getElementById("content").innerHTML = content;
}

function showProfile(user) {
    alert("Showing profile of " + user);
}

function sendTeamRequest(user) {
    alert("Sending team request to " + user);
}
