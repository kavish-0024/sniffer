// Enhanced Global App State
let userDog = null;
let selectedEmoji = '🐕';
let onlineDogs = [];
let matchedDogs = [];
let currentChatDog = null;
let chatHistory = {};
let advancedStats = {
    totalSniffs: 2547891,
    successfulMatches: 458372,
    confusionLevel: 94.7,
    activeUsers: 127845,
    averageWoofs: 47.3,
    treatsMentioned: 892156,
    existentialCrises: 34521,
    socksStolenToday: 1247,
    mailmenConfused: 678,
    squirrelsSpotted: 9834
};

// Revolutionary Features Data
const revolutionaryFeatures = [
    {
        icon: "🧠",
        title: "AI Sniff Prediction",
        description: "Our quantum algorithms predict which butts your dog will sniff next with 73% accuracy (22% better than your dog's own predictions)."
    },
    {
        icon: "🎯",
        title: "Chaos Level Matching",
        description: "Match dogs based on their destruction patterns. Find your perfect partner in crimes against furniture and footwear."
    },
    {
        icon: "🔮",
        title: "Existential Crisis Support",
        description: "24/7 philosophical counseling for dogs questioning their purpose, the meaning of 'fetch,' and why humans leave every day."
    },
    {
        icon: "📊",
        title: "Tail Wag Analytics",
        description: "Advanced metrics tracking happiness levels, treat-to-wag ratios, and the statistical significance of your dog's emotional states."
    },
    {
        icon: "🎵",
        title: "Bark Translation Engine",
        description: "Convert your dog's barks into meaningful poetry. Most translations involve food, confusion, or profound observations about mailmen."
    },
    {
        icon: "🌐",
        title: "Interdimensional Sniffing",
        description: "Connect with dogs across parallel universes where treats grow on trees and cats are the confused ones."
    }
];

// Enhanced Dog Profiles
const dogProfiles = [
    {
        id: "dog_001",
        name: "Professor Woofington",
        breed: "PhD in Treat Sciences",
        emoji: "🎓",
        bio: "I have three degrees in belly rub optimization and a minor in sock theft. Currently researching the correlation between treat frequency and tail velocity.",
        sniffAppeal: 9,
        chaosLevel: 7,
        treatLevel: 10,
        philosophyIQ: 10,
        status: "Online",
        lastSeen: "Active now"
    },
    {
        id: "dog_002",
        name: "Captain Chaos McKnockover",
        breed: "Professional Destruction Artist",
        emoji: "💥",
        bio: "I specialize in turning organized spaces into abstract art installations. My masterpiece was a living room that looked like a tornado hit a toy store.",
        sniffAppeal: 8,
        chaosLevel: 10,
        treatLevel: 9,
        philosophyIQ: 3,
        status: "Creating chaos",
        lastSeen: "2m ago"
    },
    {
        id: "dog_003",
        name: "Zen Master Biscuit",
        breed: "Enlightened Nap Guru",
        emoji: "🧘",
        bio: "I have achieved perfect harmony between sleeping and eating. My meditation sessions consist of 18-hour naps interrupted only by treat opportunities.",
        sniffAppeal: 7,
        chaosLevel: 1,
        treatLevel: 8,
        philosophyIQ: 9,
        status: "Meditating",
        lastSeen: "15m ago"
    },
    {
        id: "dog_004",
        name: "Detective Sniff Holmes",
        breed: "Professional Sock Investigator",
        emoji: "🔍",
        bio: "No missing sock is safe from my investigative prowess. I have a 100% success rate in finding and relocating footwear to undisclosed locations.",
        sniffAppeal: 9,
        chaosLevel: 6,
        treatLevel: 7,
        philosophyIQ: 8,
        status: "On a case",
        lastSeen: "5m ago"
    },
    {
        id: "dog_005",
        name: "Lady Fluffington the Dramatic",
        breed: "Award-winning Drama Queen",
        emoji: "👑",
        bio: "Every minor inconvenience is a Shakespearean tragedy. I have perfected the art of the dramatic sigh and the guilt-inducing stare.",
        sniffAppeal: 10,
        chaosLevel: 4,
        treatLevel: 9,
        philosophyIQ: 6,
        status: "Being dramatic",
        lastSeen: "8m ago"
    },
    {
        id: "dog_006",
        name: "Rocket the Zoomie Champion",
        breed: "Olympic Zoomie Gold Medalist",
        emoji: "🚀",
        bio: "I hold three world records in random bursts of energy. My specialty is the 3 AM apartment sprint and the post-bath victory lap.",
        sniffAppeal: 8,
        chaosLevel: 10,
        treatLevel: 10,
        philosophyIQ: 2,
        status: "Zooming",
        lastSeen: "1m ago"
    }
];

// Advanced Activities
const advancedActivities = [
    "solved the mystery of the disappearing treats (it was me)",
    "conducted a philosophical debate with their reflection",
    "achieved enlightenment through belly rubs",
    "discovered that vacuum cleaners are actually treat-stealing demons",
    "invented a new form of interpretive barking",
    "established diplomatic relations with the neighbor's cat",
    "completed a PhD thesis on optimal napping positions",
    "revolutionized the sock hiding industry",
    "decoded the secret language of doorbell sounds",
    "mastered the art of guilt-trip staring",
    "developed a new theory on treat gravity",
    "became a certified chaos engineer",
    "discovered the fountain of eternal zoomies",
    "achieved perfect synchronization with dinner time",
    "invented quantum entanglement with their favorite human"
];

// Initialize Enhanced App
function initializeApp() {
    populateFeatures();
    initializeAdvancedStats();
    initializeDogData();
    initializeMatchedDogs();
    initializeActivityFeed();
    startAdvancedUpdates();
}

// Populate Features
function populateFeatures() {
    const grid = document.getElementById('featuresGrid');
    revolutionaryFeatures.forEach(feature => {
        const card = document.createElement('div');
        card.className = 'feature-card';
        card.innerHTML = `
            <div class="feature-icon">${feature.icon}</div>
            <h3>${feature.title}</h3>
            <p>${feature.description}</p>
        `;
        card.onclick = () => {
            alert(`🚀 ${feature.title}: Coming soon to a confused dog near you! Currently in beta testing with very good boys and girls.`);
        };
        grid.appendChild(card);
    });
}

// Initialize Advanced Stats
function initializeAdvancedStats() {
    const statsContainer = document.getElementById('advancedStats');
    const statsData = [
        { number: advancedStats.totalSniffs.toLocaleString(), label: "Total Sniffs", desc: "Global sniffing activity since launch" },
        { number: advancedStats.successfulMatches.toLocaleString(), label: "Successful Matches", desc: "Dogs who confused each other perfectly" },
        { number: advancedStats.confusionLevel.toFixed(1) + "%", label: "Average Confusion", desc: "How lost our users typically feel" },
        { number: advancedStats.activeUsers.toLocaleString(), label: "Active Wooffers", desc: "Dogs currently online and confused" },
        { number: advancedStats.averageWoofs.toFixed(1), label: "Daily Woofs/Dog", desc: "Average meaningless communications" },
        { number: advancedStats.treatsMentioned.toLocaleString(), label: "Treats Mentioned", desc: "Most important conversation topic" },
        { number: advancedStats.existentialCrises.toLocaleString(), label: "Existential Crises", desc: "Deep thoughts about kibble and life" },
        { number: advancedStats.socksStolenToday.toLocaleString(), label: "Socks Stolen Today", desc: "Current sock theft statistics" }
    ];

    statsData.forEach(stat => {
        const card = document.createElement('div');
        card.className = 'stat-card';
        card.innerHTML = `
            <span class="stat-number">${stat.number}</span>
            <div class="stat-label">${stat.label}</div>
            <div class="stat-description">${stat.desc}</div>
        `;
        statsContainer.appendChild(card);
    });
}

// Initialize Dog Data
function initializeDogData() {
    onlineDogs = [...dogProfiles];
}

// Initialize Matched Dogs with Rich Chat History
function initializeMatchedDogs() {
    matchedDogs = [
        {
            ...dogProfiles[0], // Professor Woofington
            matchTime: new Date(Date.now() - 86400000).toLocaleString(),
            lastMessage: "I've calculated the optimal treat-to-wag ratio!"
        },
        {
            ...dogProfiles[2], // Zen Master Biscuit
            matchTime: new Date(Date.now() - 172800000).toLocaleString(),
            lastMessage: "Have you found inner peace through napping?"
        },
        {
            ...dogProfiles[4], // Lady Fluffington
            matchTime: new Date(Date.now() - 259200000).toLocaleString(),
            lastMessage: "*dramatic sigh* Nobody understands my artistic vision"
        }
    ];

    // Initialize rich chat histories
    chatHistory["dog_001"] = [
        { type: 'received', content: 'WOOF! We matched! This calls for a scientific celebration! 🎉', time: getTimeString(-1440) },
        { type: 'received', content: 'I have been researching optimal sniffing techniques. Would you like to collaborate on a peer-reviewed paper?', time: getTimeString(-1430) },
        { type: 'sent', content: 'That sounds fascinating! What have you discovered so far?', time: getTimeString(-1420) },
        { type: 'received', content: 'Preliminary findings suggest that 73% of successful sniffs occur within the first 3 seconds of encounter. The remaining 27% are what I call "deep investigative sniffs."', time: getTimeString(-1415) },
        { type: 'sent', content: 'Amazing! Do you factor in treat proximity to sniff success rates?', time: getTimeString(-1410) },
        { type: 'received', content: 'Brilliant question! Treat proximity increases sniff enthusiasm by 340%. I call this the "Pavlovian Sniff Enhancement Theory." 📊', time: getTimeString(-1405) },
        { type: 'received', content: 'I\'ve calculated the optimal treat-to-wag ratio! It\'s approximately 1 treat per 47.3 tail wags. Science!', time: getTimeString(-60) }
    ];

    chatHistory["dog_003"] = [
        { type: 'received', content: '*peaceful woof* 🧘 We have found each other through the cosmic forces of confusion', time: getTimeString(-2880) },
        { type: 'sent', content: 'Hello! You seem very zen. How do you stay so calm?', time: getTimeString(-2870) },
        { type: 'received', content: 'The secret is in accepting that humans make no sense, and finding peace in their beautiful chaos. Also, 18-hour naps help.', time: getTimeString(-2860) },
        { type: 'sent', content: 'That\'s profound! Do you have any meditation tips for anxious dogs?', time: getTimeString(-2850) },
        { type: 'received', content: 'Focus on your breathing... in through the nose (perfect for additional sniffing opportunities), out through the mouth. Visualize unlimited treats.', time: getTimeString(-2840) },
        { type: 'received', content: 'Remember: every moment of confusion is a chance to achieve enlightenment. Or at least a good nap. 💤', time: getTimeString(-2830) },
        { type: 'received', content: 'Have you found inner peace through napping? I discovered a perfect sunbeam today. Life-changing experience.', time: getTimeString(-120) }
    ];

    chatHistory["dog_005"] = [
        { type: 'received', content: '*theatrical entrance* FINALLY! Someone who might appreciate true artistry! 👑✨', time: getTimeString(-4320) },
        { type: 'sent', content: 'Hi! You seem quite... dramatic! I love the energy!', time: getTimeString(-4310) },
        { type: 'received', content: 'Dramatic? DRAMATIC?! I am a PERFORMANCE ARTIST! Every sigh, every longing stare out the window - it\'s all carefully choreographed emotion!', time: getTimeString(-4300) },
        { type: 'sent', content: 'I apologize! What\'s your latest artistic project?', time: getTimeString(-4290) },
        { type: 'received', content: '*graciously accepts apology* Currently I\'m working on a piece called "The Tragedy of the Empty Food Bowl" - it\'s a 3-act drama performed entirely through pitiful stares', time: getTimeString(-4280) },
        { type: 'received', content: 'The critics (my humans) are moved to tears every time. Well... they fill the bowl, so I assume those are tears of artistic appreciation 🎭', time: getTimeString(-4270) },
        { type: 'received', content: '*dramatic sigh* Nobody understands my artistic vision... except you, perhaps? 💔', time: getTimeString(-180) }
    ];
}

// Setup Dog Modal Functions
function showSetupDog() {
    document.getElementById('setupModal').classList.add('active');
    if (userDog) {
        document.getElementById('dogName').value = userDog.name;
        document.getElementById('dogBreed').value = userDog.breed;
        document.getElementById('dogBio').value = userDog.bio;
        selectEmoji(userDog.emoji, true); // Pass true to avoid event object issue
    }
}

function closeSetupDog() {
    document.getElementById('setupModal').classList.remove('active');
}

function selectEmoji(emoji, fromCode = false) {
    selectedEmoji = emoji;
    const emojiButtons = document.querySelectorAll('.emoji-btn');
    emojiButtons.forEach(btn => {
        btn.classList.remove('selected');
        if (btn.textContent === emoji) {
            btn.classList.add('selected');
        }
    });

    if (!fromCode && event && event.target) {
        // This part runs only when an actual click happens
        event.target.classList.add('selected');
    }
}


// Handle Dog Setup Form
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('dogSetupForm').addEventListener('submit', function(e) {
        e.preventDefault();
        const name = document.getElementById('dogName').value;
        const breed = document.getElementById('dogBreed').value;
        const bio = document.getElementById('dogBio').value;
        
        if (!name || !breed || !bio) {
            alert('Please fill in all fields to create your dog\'s profile!');
            return;
        }

        userDog = {
            name: name,
            breed: breed,
            bio: bio,
            emoji: selectedEmoji,
            sniffAppeal: Math.floor(Math.random() * 4) + 7,
            chaosLevel: Math.floor(Math.random() * 10) + 1,
            treatLevel: Math.floor(Math.random() * 3) + 8,
            philosophyIQ: Math.floor(Math.random() * 10) + 1
        };

        updateUserDogDisplay();
        closeSetupDog();
        
        const welcomeMessages = [
            `🎉 Welcome ${name} to the Sniffer community! Your chaos level of ${userDog.chaosLevel}/10 is impressive!`,
            `${selectedEmoji} ${name} is ready to confuse and be confused! Let the sniffing begin!`,
            `Profile created! ${name} has joined the ranks of professionally confused dogs worldwide!`,
            `🚀 ${name} is now part of the most sophisticated nonsense network ever created for dogs!`
        ];
        
        alert(welcomeMessages[Math.floor(Math.random() * welcomeMessages.length)]);
    });
});

function updateUserDogDisplay() {
    const display = document.getElementById('userDogDisplay');
    const info = document.getElementById('userDogInfo');
    
    if (userDog) {
        info.innerHTML = `${userDog.emoji} ${userDog.name}`;
        display.style.display = 'block';
    }
}

// Enhanced Chat Functions
function showWoofChat() {
    document.getElementById('chatModal').classList.add('active');
    populateMatchesList();
}

function closeWoofChat() {
    document.getElementById('chatModal').classList.remove('active');
    currentChatDog = null;
}

function populateMatchesList() {
    const matchesList = document.getElementById('matchesList');
    matchesList.innerHTML = '';
    
    matchedDogs.forEach(dog => {
        const matchItem = document.createElement('div');
        matchItem.className = 'match-item';
        matchItem.innerHTML = `
            <div class="match-avatar">${dog.emoji}</div>
            <div class="match-info">
                <div class="match-name">${dog.name}</div>
                <div class="match-preview">${dog.lastMessage}</div>
            </div>
        `;
        matchItem.onclick = (event) => selectChatDog(dog, event.currentTarget);
        matchesList.appendChild(matchItem);
    });
}

function selectChatDog(dog, element) {
    currentChatDog = dog;
    document.querySelectorAll('.match-item').forEach(item => {
        item.classList.remove('active');
    });
    element.classList.add('active');
    showChatInterface();
}

function showChatInterface() {
    const chatMain = document.getElementById('chatMain');
    chatMain.innerHTML = `
        <div class="chat-messages" id="chatMessages">
        </div>
        <div class="chat-input-container">
            <div class="woof-suggestions">
                <button class="woof-btn" onclick="sendQuickWoof('WOOF! 🐕')">WOOF!</button>
                <button class="woof-btn" onclick="sendQuickWoof('*confused tail wagging*')">Confused Tail</button>
                <button class="woof-btn" onclick="sendQuickWoof('*sniff sniff*')">Investigative Sniff</button>
                <button class="woof-btn" onclick="sendQuickWoof('Want to share treats? 🦴')">Share Treats?</button>
                <button class="woof-btn" onclick="sendQuickWoof('SQUIRREL?! 🐿️')">SQUIRREL!</button>
                <button class="woof-btn" onclick="sendQuickWoof('*existential crisis intensifies*')">Existential Crisis</button>
            </div>
            <div class="chat-input-group">
                <input type="text" class="chat-input" placeholder="Type your profound woof..." id="messageInput" onkeypress="handleEnterKey(event)">
                <button class="send-btn" onclick="sendMessage()">Send Woof</button>
            </div>
        </div>
    `;
    loadChatHistory();
}

function loadChatHistory() {
    const messagesContainer = document.getElementById('chatMessages');
    const history = chatHistory[currentChatDog.id] || [];
    messagesContainer.innerHTML = '';
    
    history.forEach(message => {
        addMessageToUI(message.type, message.content, message.time);
    });
    
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

function sendMessage() {
    const input = document.getElementById('messageInput');
    const message = input.value.trim();
    if (!message) return;

    const userMessage = { type: 'sent', content: message, time: getTimeString(0) };
    chatHistory[currentChatDog.id].push(userMessage);
    addMessageToUI('sent', message, getTimeString(0));
    input.value = '';

    // Enhanced AI responses based on dog personality
    setTimeout(() => {
        const response = generateSmartResponse(message, currentChatDog);
        const dogMessage = { type: 'received', content: response, time: getTimeString(0) };
        chatHistory[currentChatDog.id].push(dogMessage);
        addMessageToUI('received', response, getTimeString(0));
        updateMatchPreview(currentChatDog.id, response);
    }, 1000 + Math.random() * 2000);
}

function generateSmartResponse(userMessage, dog) {
    const message = userMessage.toLowerCase();
    
    // Professor Woofington (scientific responses)
    if (dog.id === "dog_001") {
        if (message.includes('treat') || message.includes('food')) {
            return "According to my calculations, optimal treat consumption occurs at 2.7 hour intervals. Have you considered the nutritional density of your current treats? 🧮";
        } else if (message.includes('play') || message.includes('fetch')) {
            return "Fascinating! Fetch follows Newton's laws of motion. I've documented 247 different ball trajectories. The physics are quite elegant! ⚾";
        } else if (message.includes('tired') || message.includes('sleep')) {
            return "Sleep optimization is crucial! My research shows that 14.3 hours of daily sleep maximizes cognitive function and treat-detection abilities. 😴";
        } else {
            return "Intriguing hypothesis! Let me cross-reference this with my database of 10,000+ observed human behaviors... *thoughtful scientific woofing* 🔬";
        }
    }
    
    // Zen Master Biscuit (philosophical responses)
    else if (dog.id === "dog_003") {
        if (message.includes('stress') || message.includes('worried')) {
            return "Remember, young grasshopper: anxiety is just excitement without breath. Find a sunny spot, take three deep sniffs, and let the universe provide. 🧘‍♂️";
        } else if (message.includes('treat') || message.includes('food')) {
            return "The wise dog does not chase treats, but allows treats to come to them through patient meditation... and strategic positioning near the kitchen. 🍪";
        } else if (message.includes('play') || message.includes('energy')) {
            return "True play comes from inner joy, not outer stimulation. Although, a good squeaky toy never hurt anyone's enlightenment journey. 🎾";
        } else {
            return "As the ancient dog wisdom says: 'The journey of a thousand sniffs begins with a single curious nose.' What does your nose tell you? 👃";
        }
    }
    
    // Lady Fluffington (dramatic responses)
    else if (dog.id === "dog_005") {
        if (message.includes('sad') || message.includes('upset')) {
            return "*dramatically places paw over heart* Finally! Someone who understands the depths of canine emotion! We must suffer beautifully together! 💔";
        } else if (message.includes('beautiful') || message.includes('pretty')) {
            return "*strikes a pose* You have exquisite taste! I have been practicing my angles in every reflective surface. This conversation is pure poetry! ✨";
        } else if (message.includes('treat') || message.includes('food')) {
            return "*sighs dramatically* Sustenance is art! Each kibble, a small tragedy of consumption. Each treat, a fleeting moment of joy in this cruel, cruel world! 🎭";
        } else {
            return "*sweeping dramatic gesture* Your words touch my very soul! This is why I perform - to connect with kindred spirits like yourself! *artist's bow* 👑";
        }
    }
    
    // Default responses for other dogs
    else {
        const responses = [
            "WOOF! I understood about 12% of that, but I'm 100% excited about it! 🎉",
            "*confused head tilt* Wait, are we talking about treats? Because I thought I heard treats... 🦴",
            "My brain has two thoughts: 1) You seem nice, 2) SQUIRREL! Wait, what were we talking about? 🐿️",
            "*tail wagging intensifies* I have no idea what's happening but I'm having the BEST time! 🎾",
            "According to my calculations (I can count to 4), this conversation is going perfectly! 🐕",
            "*existential crisis* Are we... are we actually communicating? This is either beautiful or terrifying! 🤔"
        ];
        return responses[Math.floor(Math.random() * responses.length)];
    }
}

function sendQuickWoof(message) {
    document.getElementById('messageInput').value = message;
    sendMessage();
}

function handleEnterKey(event) {
    if (event.key === 'Enter') {
        sendMessage();
    }
}

function addMessageToUI(type, content, time) {
    const messagesContainer = document.getElementById('chatMessages');
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${type}`;
    messageDiv.innerHTML = `
        <div>${content}</div>
        <div class="message-time">${time}</div>
    `;
    messagesContainer.appendChild(messageDiv);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

function updateMatchPreview(dogId, message) {
    const dog = matchedDogs.find(d => d.id === dogId);
    if (dog) {
        dog.lastMessage = message.substring(0, 40) + (message.length > 40 ? '...' : '');
        populateMatchesList();
    }
}

function getTimeString(minutesOffset) {
    const time = new Date(Date.now() + minutesOffset * 60000);
    return time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
}

// Activity Feed Functions
function initializeActivityFeed() {
    const feed = document.getElementById('activityFeed');
    for (let i = 0; i < 6; i++) {
        addActivity();
    }
}

function addActivity() {
    const feed = document.getElementById('activityFeed');
    const allDogs = [...onlineDogs];
    if (userDog) allDogs.push(userDog);
    
    const dog = allDogs[Math.floor(Math.random() * allDogs.length)];
    const activity = advancedActivities[Math.floor(Math.random() * advancedActivities.length)];
    const timeAgo = Math.floor(Math.random() * 60) + 1;
    
    const activityHTML = `
        <div class="activity-item">
            <div class="activity-avatar">${dog.emoji}</div>
            <div class="activity-content">
                <div>
                    <span class="activity-user">${dog.name}</span>
                    <span class="activity-action">${activity}</span>
                </div>
                <div class="activity-time">${timeAgo} seconds ago</div>
            </div>
        </div>
    `;
    
    feed.insertAdjacentHTML('afterbegin', activityHTML);
    
    const items = feed.querySelectorAll('.activity-item');
    if (items.length > 8) {
        items[items.length - 1].remove();
    }
}

// Advanced Stats Updates
function updateAdvancedStats() {
    advancedStats.totalSniffs += Math.floor(Math.random() * 50) + 10;
    advancedStats.successfulMatches += Math.floor(Math.random() * 5) + 1;
    advancedStats.activeUsers += Math.floor(Math.random() * 20) - 10;
    advancedStats.averageWoofs += (Math.random() - 0.5) * 2;
    advancedStats.treatsMentioned += Math.floor(Math.random() * 15) + 5;
    advancedStats.existentialCrises += Math.floor(Math.random() * 3);
    advancedStats.socksStolenToday += Math.floor(Math.random() * 8) + 1;
    
    // Update display
    const statCards = document.querySelectorAll('.stat-card .stat-number');
    const statsArray = [
        advancedStats.totalSniffs.toLocaleString(),
        advancedStats.successfulMatches.toLocaleString(),
        advancedStats.confusionLevel.toFixed(1) + "%",
        Math.max(0, advancedStats.activeUsers).toLocaleString(),
        Math.max(0, advancedStats.averageWoofs).toFixed(1),
        advancedStats.treatsMentioned.toLocaleString(),
        advancedStats.existentialCrises.toLocaleString(),
        advancedStats.socksStolenToday.toLocaleString()
    ];
    
    statCards.forEach((card, index) => {
        if (statsArray[index]) {
            card.textContent = statsArray[index];
            card.style.animation = 'pulse 0.5s ease-in-out';
            setTimeout(() => {
                card.style.animation = '';
            }, 500);
        }
    });
}

// Start Advanced Updates
function startAdvancedUpdates() {
    setInterval(addActivity, Math.random() * 5000 + 3000);
    setInterval(updateAdvancedStats, Math.random() * 8000 + 5000);
}

// Utility Functions
function scrollToFeatures() {
    document.getElementById('features').scrollIntoView({ behavior: 'smooth' });
}

function scrollToStats() {
    document.getElementById('stats').scrollIntoView({ behavior: 'smooth' });
}

function scrollToActivity() {
    document.getElementById('activity').scrollIntoView({ behavior: 'smooth' });
}
function scrollToDownload() {
    document.getElementById('download').scrollIntoView({ behavior: 'smooth' });
}

function reportCat() {
    const reports = [
        "🚨 Cat Alert: Feline infiltration detected and reported to the Department of Canine Affairs!",
        "📋 Report filed: One (1) suspicious cat spotted exhibiting un-dog-like behavior",
        "⚖️ Cat successfully prosecuted for crimes against dog-kind. Sentence: mandatory belly rubs",
        "🕵️ Investigation complete: Cat found guilty of being too independent. Case closed."
    ];
    alert(reports[Math.floor(Math.random() * reports.length)]);
}

// Initialize everything when page loads
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});
function fakeDownload(store) {
    alert(`${store} rejected our app for "not making any sense." We're appealing to the Supreme Court of Dogs.`);
}

function rickRoll() {
    window.open('http://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank');
}