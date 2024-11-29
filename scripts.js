// Open Login Modal
function openLoginModal() {
    document.getElementById('login-modal').style.display = "block";
}

// Open Register Modal
function openRegisterModal() {
    document.getElementById('register-modal').style.display = "block";
}

// Close Login Modal
document.getElementById('close-login').onclick = function() {
    document.getElementById('login-modal').style.display = "none";
}

// Close Register Modal
document.getElementById('close-register').onclick = function() {
    document.getElementById('register-modal').style.display = "none";
}

// Open Device Info
function openDeviceInfo(deviceId) {
    var popup = document.getElementById("device-popup");
    var title = document.getElementById("device-title");
    var description = document.getElementById("device-description");
    var img = document.getElementById("device-img");
    var specs = document.getElementById("device-specs");
    var rating = document.getElementById("device-rating");

    if (deviceId === "meta-quest-2") {
        title.innerText = "Meta Quest 2";
        description.innerText = "Meta Quest 2 offers immersive VR gaming experiences with improved performance and battery life. It comes with a powerful processor and a wide range of compatible games. Perfect for gamers looking for an affordable yet powerful VR system.";
        // img.src = "/assets/quest2.png";
        specs.innerHTML = `
            <tr><td>Display</td><td>1832 x 1920 pixels per eye</td></tr>
            <tr><td>Processor</td><td>Qualcomm Snapdragon XR2</td></tr>
            <tr><td>Battery</td><td>Up to 2-3 hours</td></tr>
            <tr><td>Weight</td><td>503g</td></tr>
        `;
        rating.innerHTML = '⭐ ⭐ ⭐ ⭐ ⭐';
    } else if (deviceId === "meta-quest-3") {
        title.innerText = "Meta Quest 3";
        description.innerText = "Meta Quest 3 builds on the success of Quest 2 with enhanced graphics, a larger screen, and better performance. Ideal for both gaming and virtual experiences.";
        // img.src = "/assets/quest3.png";
        specs.innerHTML = `
            <tr><td>Display</td><td>2064 x 2208 pixels per eye</td></tr>
            <tr><td>Processor</td><td>Snapdragon XR2 Gen 2</td></tr>
            <tr><td>Battery</td><td>Up to 3 hours</td></tr>
            <tr><td>Weight</td><td>503g</td></tr>
        `;
        rating.innerHTML = '⭐ ⭐ ⭐ ⭐';
    } else if (deviceId === "htc-vive-pro") {
        title.innerText = "HTC Vive Pro";
        description.innerText = "HTC Vive Pro is known for its premium VR experience, offering high-quality visuals, immersive sound, and room-scale tracking. Perfect for advanced VR users and developers.";
        // img.src = "/assets/holo";
        specs.innerHTML = `
            <tr><td>Display</td><td>2880 x 1600 pixels</td></tr>
            <tr><td>Processor</td><td>Vive Port</td></tr>
            <tr><td>Battery</td><td>External</td></tr>
            <tr><td>Weight</td><td>550g</td></tr>
        `;
        rating.innerHTML = '⭐ ⭐ ⭐ ⭐ ⭐';
    }
    popup.style.display = "flex";
}

// Open Device Selection Popup
function openChooseDevicePopup() {
    document.getElementById('device-popup').style.display = 'block';
}

// Open Rental Plan Popup
function openRentalPlanPopup() {
    document.getElementById('plan-popup').style.display = 'block';
}

// Open Calendar Popup
function openCalendarPopup(plan) {
    document.getElementById('plan-popup').style.display = 'none';
    document.getElementById('calendar-popup').style.display = 'block';
    document.getElementById('selected-plan').textContent = `You selected the ${plan} plan.`;
    window.selectedPlan = plan;
}

// Close Any Popup
function closePopup(popupId) {
    document.getElementById(popupId).style.display = 'none';
}

// Set End Date Based on Start Date and Plan
function setEndDate() {
    const startDate = new Date(document.getElementById('start-date').value);
    let endDate = new Date(startDate);
    
    if (window.selectedPlan === '3-day') {
        endDate.setDate(startDate.getDate() + 3);
    } else if (window.selectedPlan === '5-day') {
        endDate.setDate(startDate.getDate() + 5);
    } else if (window.selectedPlan === '10-day') {
        endDate.setDate(startDate.getDate() + 10);
    }
    
    const formattedDate = endDate.toISOString().split('T')[0];
    document.getElementById('end-date').value = formattedDate;
}

// Confirm Rental
function confirmRental() {
    const startDate = document.getElementById('start-date').value;
    const endDate = document.getElementById('end-date').value;

    if (!startDate || !endDate) {
        alert('Please select both start and end dates!');
    } else {
        alert(`Your rental from ${startDate} to ${endDate} has been confirmed.`);
        closePopup('calendar-popup');
        window.location.href = 'booking.html'; 
    }
}

// Open VR Detail Popup
function openVRDetail(experience) {
    document.getElementById('vr-detail-popup').style.display = 'block';

    const title = document.getElementById('vr-popup-title');
    const body = document.getElementById('vr-popup-body');

    if (experience === 'beat-saber') {
        title.textContent = 'Beat Saber - VR Rhythm Game';
        body.innerHTML = `
            <p><strong>Beat Saber</strong> is one of the most popular VR rhythm games. In this game, you use lightsabers to slice through blocks in sync with music.</p>
            <ul>
                <li><strong>Genre:</strong> Rhythm</li>
                <li><strong>Platform:</strong> Oculus Rift, HTC Vive, PSVR</li>
                <li><strong>Gameplay:</strong> Slice blocks to the beat of the music</li>
            </ul>
            
            <iframe width="560" height="315" src="https://www.youtube.com/embed/WVueKYbwZrs?si=cq0MQ0sWv5eb3deX" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            
        `;
    } else if (experience === 'resident-evil') {
        title.textContent = 'Resident Evil 7 - Biohazard VR';
        body.innerHTML = `
            <p><strong>Resident Evil 7</strong> is a survival horror game that immerses you into a terrifying experience with its VR mode.</p>
            <ul>
                <li><strong>Genre:</strong> Survival Horror</li>
                <li><strong>Platform:</strong> PSVR, HTC Vive, Oculus Rift</li>
                <li><strong>Gameplay:</strong> Survive a haunted mansion with limited resources</li>
            </ul>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/fcLl-DZGLZ8?si=1S5gBDjHC82JMgMW" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        `;
    } else if (experience === 'ib-cricket') {
        title.textContent = 'IB Cricket VR';
        body.innerHTML = `
            <p><strong>IB Cricket</strong> is a VR cricket game that lets you play cricket in a virtual environment, offering various modes and challenges.</p>
            <ul>
                <li><strong>Genre:</strong> Sports</li>
                <li><strong>Platform:</strong> Oculus Quest, HTC Vive</li>
                <li><strong>Gameplay:</strong> Play cricket as a batsman, bowler, or fielder</li>
            </ul>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/3jb1l68Id10?si=kbsbk-v3SrRNCL6g" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        `;
    } else if (experience === 'imax-vr') {
        title.textContent = 'IMAX VR';
        body.innerHTML = `
            <p><strong>IMAX VR</strong> offers a cinematic virtual reality experience with stunning visuals and immersive sound.</p>
            <ul>
                <li><strong>Genre:</strong> Movies</li>
                <li><strong>Platform:</strong> IMAX VR Centers</li>
                <li><strong>Experience:</strong> Watch movies in a virtual IMAX theater</li>
            </ul>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/v8F_9T8hnPw?si=ls1fx2Dz8zJuYi4T" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        `;
    } else if (experience === 'bigscreen-vr') {
        title.textContent = 'Bigscreen VR';
        body.innerHTML = `
            <p><strong>Bigscreen VR</strong> lets you watch movies, play games, and hang out with friends in a virtual theater.</p>
            <ul>
                <li><strong>Genre:</strong> Movies</li>
                <li><strong>Platform:</strong> Oculus Rift, HTC Vive, Windows MR</li>
                <li><strong>Experience:</strong> Shared virtual movie-watching experience</li>
            </ul>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/mlECDx8-Z_4?si=o5SMD95JPTUqs6Zp" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        `;
    } else if (experience === 'veer-vr') {
        title.textContent = 'VeeR VR';
        body.innerHTML = `
            <p><strong>VeeR VR</strong> offers a wide range of 360-degree videos and VR movies from creators worldwide.</p>
            <ul>
                <li><strong>Genre:</strong> Movies</li>
                <li><strong>Platform:</strong> Oculus Go, HTC Vive, Gear VR</li>
                <li><strong>Experience:</strong> Explore 360-degree videos</li>
            </ul>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/XenP39PxdQk?si=uI7rzmaYOvTrlq0j" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        `;
    } else if (experience === 'louvre') {
        title.textContent = 'The Louvre Virtual Tour';
        body.innerHTML = `
            <p><strong>The Louvre</strong> offers a virtual tour of its iconic art collection and exhibits, all from the comfort of your home.</p>
            <ul>
                <li><strong>Genre:</strong> Virtual Tour</li>
                <li><strong>Platform:</strong> Web, VR Headsets</li>
                <li><strong>Experience:</strong> Explore the Louvre Museum virtually</li>
            </ul>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/PwBhj7apSmE?si=rVpA5UHNZ9-k-0a8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        `;
    } else if (experience === 'great-wall') {
        title.textContent = 'Great Wall of China Virtual Tour';
        body.innerHTML = `
            <p><strong>Great Wall of China</strong> Virtual Tour lets you experience one of the world's greatest wonders in 360-degree VR.</p>
            <ul>
                <li><strong>Genre:</strong> Virtual Tour</li>
                <li><strong>Platform:</strong> Web, VR Headsets</li>
                <li><strong>Experience:</strong> Walk along the Great Wall virtually</li>
            </ul>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/nTL_Gngj-nU?si=5Vo8dRtL3OYmob9t" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        `;
    } else if (experience === 'mars-rover') {
        title.textContent = 'Mars Rover VR Experience';
        body.innerHTML = `
            <p><strong>Mars Rover</strong> VR Experience takes you on a journey to Mars, where you can explore the planet alongside a rover.</p>
            <ul>
                <li><strong>Genre:</strong> Virtual Tour</li>
                <li><strong>Platform:</strong> Web, VR Headsets</li>
                <li><strong>Experience:</strong> Explore Mars virtually</li>
            </ul>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/l9GHJ4armrU?si=DvJTgLLgo2sI3zXW" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        `;
    }

    // JavaScript Function to Close Popups
function closePopup(popupId) {
    var popup = document.getElementById(popupId);
    popup.style.display = 'none'; // Hide the popup
}

// JavaScript Function to Open Popups
function openChooseDevicePopup() {
    var popup = document.getElementById('device-popup');
    popup.style.display = 'block'; // Show the popup
}

function openRentalPlanPopup() {
    var popup = document.getElementById('plan-popup');
    popup.style.display = 'block'; // Show the popup
}

function openCalendarPopup(plan) {
    var popup = document.getElementById('calendar-popup');
    popup.style.display = 'block'; // Show the popup
    document.getElementById('selected-plan').innerText = plan + ' rental selected';
}

// Confirm Rental Function
function confirmRental() {
    alert('Rental confirmed!');
    closePopup('calendar-popup');
}

}

