// Sniff Match functionality
const dogProfiles = [
  {
    "name": "Sheru, the CEO of Barks",
    "breed": "Chief Barketing Officer",
    "emoji": "😎",
    "bio": "I'm in charge of loud negotiations with the mail carrier and strategic nap placement. My barks have an ROI of 'Guaranteed Snacks.'",
    "sniffAppeal": 8,
    "chaosLevel": 9,
    "treatLevel": 10,
    "philosophyIQ": 6
  },
  {
    "name": "Swami Zoom-ananda",
    "breed": "Quantum Zoomie Specialist",
    "emoji": "💨",
    "bio": "I can exist in multiple places at once, primarily the kitchen and wherever you just opened a bag of chips. I am the reason we have nice things in shreds.",
    "sniffAppeal": 7,
    "chaosLevel": 10,
    "treatLevel": 9,
    "philosophyIQ": 4
  },
  {
    "name": "The Paneer Inspector",
    "breed": "Slobbery Tithe Hound",
    "emoji": "🧀",
    "bio": "I possess a sixth sense for the crinkle of a cheese wrapper from three rooms away. You are legally and morally obligated to pay the tax. It's the law.",
    "sniffAppeal": 6,
    "chaosLevel": 3,
    "treatLevel": 10,
    "philosophyIQ": 5
  },
  {
    "name": "Chowkidar Charan",
    "breed": "Head of Neighborhood Watch",
    "emoji": "📢",
    "bio": "A leaf fell two blocks away. A cat thought about crossing the street. The wind blew. I've reported all incidents. You're welcome.",
    "sniffAppeal": 5,
    "chaosLevel": 8,
    "treatLevel": 7,
    "philosophyIQ": 2
  },
  {
    "name": "Moti Maharaj",
    "breed": "Professional Loaf of Bread",
    "emoji": "🍞",
    "bio": "My legs are short, which makes my dramatic sploots even more impressive. My hobbies include judging you and demanding passage via belly rubs.",
    "sniffAppeal": 9,
    "chaosLevel": 2,
    "treatLevel": 8,
    "philosophyIQ": 7
  },
  {
    "name": "Toofan Express",
    "breed": "Unsupervised Intern Retriever",
    "emoji": "💥",
    "bio": "My two brain cells are competing for third place. I specialize in running into walls with grace and looking surprised by my own feet.",
    "sniffAppeal": 10,
    "chaosLevel": 10,
    "treatLevel": 10,
    "philosophyIQ": 1
  },
  {
    "name": "Joota Chor",
    "breed": "Long-Bodied Sock Gremlin",
    "emoji": "🧦",
    "bio": "Your socks are my treasure. My hoard is legendary and slightly damp. I will trade one (1) chewed sock for three (3) treats. Non-negotiable.",
    "sniffAppeal": 7,
    "chaosLevel": 9,
    "treatLevel": 9,
    "philosophyIQ": 3
  },
  {
    "name": "Nawab of Naps",
    "breed": "Professional Sunbeam Inspector",
    "emoji": "😴",
    "bio": "My ears are long, my motivation is short. My day is booked solid with naps, followed by strategic repositioning for more naps. Do not disturb the king.",
    "sniffAppeal": 6,
    "chaosLevel": 1,
    "treatLevel": 5,
    "philosophyIQ": 8
  },
  {
    "name": "Begum Baddimaash",
    "breed": "Professional Lap Warmer",
    "emoji": "👑",
    "bio": "I'm not allowed on the couch, which is why I'm always on the couch. I am 98% fluff, 2% spite. I require constant adoration and zero personal space.",
    "sniffAppeal": 9,
    "chaosLevel": 3,
    "treatLevel": 6,
    "philosophyIQ": 7
  },
  {
    "name": "Guruji of Ghar-Ghar",
    "breed": "Wrinkled Gremlin of Joy",
    "emoji": "🧙",
    "bio": "I breathe like a freight train and run like a bowling ball. My face has more folds than your laundry. Seeking someone who appreciates the symphony of my snores.",
    "sniffAppeal": 8,
    "chaosLevel": 7,
    "treatLevel": 9,
    "philosophyIQ": 4
  },
  {
    "name": "Kichad Khan",
    "breed": "Dirt Worshipping Doodle",
    "emoji": " M",
    "bio": "Just had a bath, so it's time to find the nearest puddle. I believe true beauty is a fresh coat of mud. My art is temporary and usually on the white carpet.",
    "sniffAppeal": 6,
    "chaosLevel": 9,
    "treatLevel": 8,
    "philosophyIQ": 3
  },
  {
    "name": "Badshah of Bhonk",
    "breed": "Operatic Fluff Dragon",
    "emoji": "🎤",
    "bio": "A-WOO! I sing the song of my people, especially when you're on a Zoom call or trying to sleep. I contain multitudes, and all of them are loud.",
    "sniffAppeal": 8,
    "chaosLevel": 8,
    "treatLevel": 6,
    "philosophyIQ": 5
  },
  {
    "name": "Bhukkad Singh",
    "breed": "Mobile Garbage Disposal Unit",
    "emoji": "🗑️",
    "bio": "If you drop it, I will eat it. If you don't drop it, I will stare with profound sadness until you do. My stomach is a bottomless pit of optimism.",
    "sniffAppeal": 9,
    "chaosLevel": 5,
    "treatLevel": 10,
    "philosophyIQ": 1
  },
  {
    "name": "Cheeku the Destroyer",
    "breed": "Unexploded Fluff Bomb",
    "emoji": "🎯",
    "bio": "My mission is to find the squeaker in every toy and silence it. Permanently. I operate with speed, fury, and a complete disregard for stuffing.",
    "sniffAppeal": 7,
    "chaosLevel": 10,
    "treatLevel": 8,
    "philosophyIQ": 2
  },
  {
    "name": "Raju Ras-tapka",
    "breed": "Emotionally Damp Mastiff",
    "emoji": "🤤",
    "bio": "My love language is leaving a trail of slobber on your clean pants. I'm a gentle giant whose primary export is drool. It's how I show affection.",
    "sniffAppeal": 4,
    "chaosLevel": 2,
    "treatLevel": 9,
    "philosophyIQ": 6
  }
];

let currentDogIndex = 0;
let isDragging = false;
let startX = 0;
let currentX = 0;

function showSniffMatch() {
    document.getElementById('sniffModal').classList.add('active');
    loadNewDog();
}

function closeSniffMatch() {
    document.getElementById('sniffModal').classList.remove('active');
}

function loadNewDog() {
    const dog = dogProfiles[currentDogIndex % dogProfiles.length];
    const card = document.getElementById('dogCard');
    const sniffIndicator = document.getElementById('sniffIndicator');
    const passIndicator = document.getElementById('passIndicator');
    card.className = 'dog-card';
    card.style.cssText = '';
    sniffIndicator.classList.remove('show');
    passIndicator.classList.remove('show');
    document.getElementById('dogPhoto').textContent = dog.emoji;
    document.getElementById('dogName').textContent = dog.name;
    document.getElementById('dogBreed').textContent = dog.breed;
    document.getElementById('dogBio').textContent = dog.bio;
    document.getElementById('sniffAppeal').textContent = dog.sniffAppeal + '/10';
    document.getElementById('chaosLevel').textContent = dog.chaosLevel + '/10';
    document.getElementById('treatLevel').textContent = dog.treatLevel + '/10';
    document.getElementById('philosophyIQ').textContent = dog.philosophyIQ + '/10';
    currentDogIndex++;
}

// Global app state
let onlineDogs = [];
let matchedDogs = [];
let currentChatDog = null;
let chatHistory = {};

// Initialize online dogs and matches
function initializeDogData() {
    onlineDogs = [...dogProfiles].map((dog, index) => ({
        ...dog,
        id: `dog_${index}`,
        status: Math.random() > 0.3 ? 'Online' : 'Sniffing around',
        lastSeen: Math.random() > 0.5 ? 'Active now' : `${Math.floor(Math.random() * 30) + 1}m ago`
    }));
    matchedDogs = [
        {
            ...dogProfiles[0],
            id: 'dog_0',
            matchTime: new Date(Date.now() - Math.random() * 86400000).toLocaleString(),
            lastMessage: "Woof woof! *confused tail wagging*"
        },
        {
            ...dogProfiles[2],
            id: 'dog_2',
            matchTime: new Date(Date.now() - Math.random() * 86400000).toLocaleString(),
            lastMessage: "I've discovered the meaning of 'fetch'... it's existential."
        },
        {
            ...dogProfiles[4],
            id: 'dog_4',
            matchTime: new Date(Date.now() - Math.random() * 86400000).toLocaleString(),
            lastMessage: "WOOF WOOF WOOF! *aggressive small dog energy*"
        }
    ];
    matchedDogs.forEach(dog => {
        if (!chatHistory[dog.id]) {
            chatHistory[dog.id] = [];
        }
    });
}

// Dog Profiles functionality
function showDogProfiles() {
    document.getElementById('profilesModal').classList.add('active');
    populateProfilesGrid();
}

function closeDogProfiles() {
    document.getElementById('profilesModal').classList.remove('active');
}

function populateProfilesGrid() {
    const grid = document.getElementById('profilesGrid');
    grid.innerHTML = '';
    onlineDogs.forEach(dog => {
        const profileCard = document.createElement('div');
        profileCard.className = 'profile-mini-card';
        profileCard.innerHTML = `
            <div class="mini-photo">${dog.emoji}</div>
            <div class="mini-name">${dog.name}</div>
            <div class="mini-breed">${dog.breed}</div>
            <div class="mini-status">${dog.status}</div>
            <div style="font-size: 0.8rem; color: #666; margin-top: 5px;">${dog.lastSeen}</div>
        `;
        profileCard.onclick = () => {
            const messages = [
                "This dog is too busy contemplating existence to notice your interest.",
                "Profile viewed! The dog now knows you were here. Awkward.",
                "You've been detected. The dog is now hiding behind a fire hydrant.",
                "This dog's privacy settings are set to 'Maximum Confusion'.",
                "You cannot view this profile. The dog is in witness protection."
            ];
            alert(messages[Math.floor(Math.random() * messages.length)]);
        };
        grid.appendChild(profileCard);
    });
}

// Woof Chat functionality
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
        matchItem.onclick = () => selectChatDog(dog);
        matchesList.appendChild(matchItem);
    });
}

function selectChatDog(dog) {
    currentChatDog = dog;
    document.querySelectorAll('.match-item').forEach(item => {
        item.classList.remove('active');
    });
    event.currentTarget.classList.add('active');
    showChatInterface();
}

function showChatInterface() {
    const chatContent = document.getElementById('chatContent');
    chatContent.className = 'chat-main';
    chatContent.innerHTML = `
        <div class="chat-messages" id="chatMessages">
        </div>
        <div class="chat-input-container">
            <div class="woof-suggestions">
                <button class="woof-btn" onclick="sendQuickWoof('WOOF! 🐕')">WOOF!</button>
                <button class="woof-btn" onclick="sendQuickWoof('*confused tail wagging*')">Confused Tail</button>
                <button class="woof-btn" onclick="sendQuickWoof('*sniff sniff*')">Investigative Sniff</button>
                <button class="woof-btn" onclick="sendQuickWoof('*existential crisis*')">Existential Crisis</button>
                <button class="woof-btn" onclick="sendQuickWoof('SQUIRREL?! 🐿️')">SQUIRREL!</button>
            </div>
            <div class="chat-input-group">
                <input type="text" class="chat-input" placeholder="Type your woof..." id="messageInput" onkeypress="handleEnterKey(event)">
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
    if (history.length === 0) {
        const initialMessages = [
            { type: 'received', content: 'WOOF! We matched! *confused tail wagging*', time: getTimeString(-10) },
            { type: 'received', content: 'I have no idea what to do now... do you?', time: getTimeString(-8) }
        ];
        chatHistory[currentChatDog.id] = initialMessages;
    }
    chatHistory[currentChatDog.id].forEach(message => {
        addMessageToUI(message.type, message.content, message.time);
    });
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

function sendMessage() {
    const input = document.getElementById('messageInput');
    const message = input.value.trim();
    if (message) {
        const userMessage = { type: 'sent', content: message, time: getTimeString(0) };
        chatHistory[currentChatDog.id].push(userMessage);
        addMessageToUI('sent', message, getTimeString(0));
        input.value = '';
        setTimeout(() => {
            const responses = [
                "WOOF WOOF! *I have no idea what you just said*",
                "*confused head tilt* Did you just... communicate?",
                "I understood 'treat' and nothing else. TREAT?!",
                "*tail wagging intensifies* Yes! Wait, what did you say?",
                "My response: WOOF! *nailed it*",
                "*existential crisis* Are we... having a conversation?",
                "SQUIRREL! Oh wait, you're still here. WOOF!",
                "*sniff sniff* You smell like... confusion?",
                "I'm just going to bark and hope for the best. WOOF!",
                "*profound stare* The treats you seek are within you."
            ];
            const response = responses[Math.floor(Math.random() * responses.length)];
            const dogMessage = { type: 'received', content: response, time: getTimeString(0) };
            chatHistory[currentChatDog.id].push(dogMessage);
            addMessageToUI('received', response, getTimeString(0));
            updateMatchPreview(currentChatDog.id, response);
        }, 1000 + Math.random() * 2000);
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
    const matchItems = document.querySelectorAll('.match-item');
    matchItems.forEach(item => {
        const dog = matchedDogs.find(d => d.id === dogId);
        if (dog && item.querySelector('.match-name').textContent === dog.name) {
            item.querySelector('.match-preview').textContent = message.substring(0, 40) + (message.length > 40 ? '...' : '');
        }
    });
}

function getTimeString(minutesOffset) {
    const time = new Date(Date.now() + minutesOffset * 60000);
    return time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
}

function showMatch() {
    const notification = document.getElementById('matchNotification');
    notification.style.display = 'block';
    const currentDog = dogProfiles[(currentDogIndex - 1) % dogProfiles.length];
    const dogWithId = { ...currentDog, id: `dog_${currentDogIndex - 1}`, matchTime: new Date().toLocaleString(), lastMessage: "We matched! *confused excitement*" };
    if (!matchedDogs.find(d => d.id === dogWithId.id)) {
        matchedDogs.push(dogWithId);
        chatHistory[dogWithId.id] = [];
    }
    setTimeout(() => {
        notification.style.display = 'none';
        setTimeout(() => {
            alert("Congratulations! You matched! Check your Woof Chat to start the most confusing conversation of your life.");
            loadNewDog();
        }, 100);
    }, 2000);
}

function showBeautifulMessage(type, title, message, icon) {
    const overlay = document.getElementById('messageOverlay');
    const messageIcon = document.getElementById('messageIcon');
    const messageTitle = document.getElementById('messageTitle');
    const messageText = document.getElementById('messageText');
    const heartsContainer = document.getElementById('floatingHearts');
    messageIcon.textContent = icon;
    messageTitle.textContent = title;
    messageText.textContent = message;
    heartsContainer.innerHTML = '';
    overlay.classList.add('show');
    createFloatingSymbols(type);
}

function closeMessageOverlay() {
    const overlay = document.getElementById('messageOverlay');
    overlay.classList.remove('show');
    loadNewDog();
}

function createFloatingSymbols(type) {
    const heartsContainer = document.getElementById('floatingHearts');
    const symbols = type === 'sniff' ? ['💚', '👃', '✨', '💫'] : ['💔', '😢', '👎', '🚫'];
    for (let i = 0; i < 8; i++) {
        setTimeout(() => {
            const symbol = document.createElement('div');
            symbol.className = `heart ${type}`;
            symbol.textContent = symbols[Math.floor(Math.random() * symbols.length)];
            symbol.style.left = Math.random() * 100 + '%';
            symbol.style.animationDelay = Math.random() * 0.5 + 's';
            heartsContainer.appendChild(symbol);
            setTimeout(() => {
                if (symbol.parentNode) {
                    symbol.parentNode.removeChild(symbol);
                }
            }, 3000);
        }, i * 200);
    }
}

function passDog() {
    const card = document.getElementById('dogCard');
    const passIndicator = document.getElementById('passIndicator');
    passIndicator.classList.add('show');
    card.classList.add('swiped-left');
    setTimeout(() => {
        const messages = [
            {
                title: "Heartbreak Hotel 💔",
                message: "You passed on true love. The dog is now crying into their kibble and writing sad poetry about rejection.",
                icon: "😢"
            },
            {
                title: "Missed Connection 🎭",
                message: "Plot twist: That dog was actually Elon Mutt in disguise. You just rejected a tech billionaire. Oops!",
                icon: "🤦‍♂️"
            },
            {
                title: "Revenge Arc Activated ⚡",
                message: "The dog you rejected just invented time travel out of spite. They're coming back to un-meet you.",
                icon: "⏰"
            },
            {
                title: "Soulmate Status: DENIED 💫",
                message: "Congratulations! You just passed your soulmate. They're now dating your neighbor's cat.",
                icon: "😱"
            },
            {
                title: "Poet Doggo Activated 📝",
                message: "The dog is now a professional sad poetry writer. Their first book: 'Swipes I Never Got' is already a bestseller.",
                icon: "📚"
            }
        ];
        const randomMessage = messages[Math.floor(Math.random() * messages.length)];
        setTimeout(() => {
            showBeautifulMessage('pass', randomMessage.title, randomMessage.message, randomMessage.icon);
        }, 200);
    }, 500);
}

function sniffDog() {
    const card = document.getElementById('dogCard');
    const sniffIndicator = document.getElementById('sniffIndicator');
    sniffIndicator.classList.add('show');
    card.classList.add('swiped-right');
    setTimeout(() => {
        if (Math.random() < 0.3) {
            setTimeout(() => {
                showMatch();
            }, 200);
        } else {
            const rejectionMessages = [
                {
                    title: "Sniff Rejected! 👃💔",
                    message: "They sniffed you back... took one whiff... and immediately ran away. Your aura needs work.",
                    icon: "🏃‍♂️"
                },
                {
                    title: "False Hope Detected 🎪",
                    message: "Mutual sniff detected! Just kidding, they blocked you and moved to another dimension.",
                    icon: "🚫"
                },
                {
                    title: "Species Preference 🐱",
                    message: "The dog is not interested. They prefer cats. Yes, you read that right. A dog. Prefers. CATS.",
                    icon: "😾"
                },
                {
                    title: "Aroma Assessment Failed 🧪",
                    message: "Sniff rejected. Professional analysis: You smell weird. Consider a career in perfume testing.",
                    icon: "🧴"
                },
                {
                    title: "Counter-Intelligence 🕵️",
                    message: "The dog counter-sniffed and found you lacking in mysterious dog qualities. Try being more... doggish?",
                    icon: "🔍"
                },
                {
                    title: "Nose Washing Protocol 🧼",
                    message: "They're washing their nose after sniffing you. With soap. Twice. The betrayal is real.",
                    icon: "🛁"
                }
            ];
            const randomMessage = rejectionMessages[Math.floor(Math.random() * rejectionMessages.length)];
            setTimeout(() => {
                showBeautifulMessage('pass', randomMessage.title, randomMessage.message, randomMessage.icon);
            }, 200);
        }
    }, 500);
}

function showMatch() {
    const notification = document.getElementById('matchNotification');
    notification.style.display = 'block';
    setTimeout(() => {
        notification.style.display = 'none';
        setTimeout(() => {
            alert("Congratulations! You matched! Now what? Nobody knows. The app doesn't have messaging because that would make too much sense.");
            loadNewDog();
        }, 100);
    }, 2000);
}

// Touch/drag functionality for mobile-style swiping
function initializeSwipeEvents() {
    const card = document.getElementById('dogCard');
    card.addEventListener('mousedown', startDrag);
    document.addEventListener('mousemove', drag);
    document.addEventListener('mouseup', endDrag);
    card.addEventListener('touchstart', startDrag);
    document.addEventListener('touchmove', drag);
    document.addEventListener('touchend', endDrag);
}

function startDrag(e) {
    isDragging = true;
    startX = e.type.includes('touch') ? e.touches[0].clientX : e.clientX;
    currentX = startX;
}

function drag(e) {
    if (!isDragging) return;
    e.preventDefault();
    currentX = e.type.includes('touch') ? e.touches[0].clientX : e.clientX;
    const deltaX = currentX - startX;
    const rotation = deltaX * 0.1;
    const card = document.getElementById('dogCard');
    const sniffIndicator = document.getElementById('sniffIndicator');
    const passIndicator = document.getElementById('passIndicator');
    card.style.transform = `translateX(${deltaX}px) rotate(${rotation}deg)`;
    card.style.opacity = 1 - Math.abs(deltaX) / 300;
    if (deltaX > 50) {
        sniffIndicator.classList.add('show');
        passIndicator.classList.remove('show');
    } else if (deltaX < -50) {
        passIndicator.classList.add('show');
        sniffIndicator.classList.remove('show');
    } else {
        sniffIndicator.classList.remove('show');
        passIndicator.classList.remove('show');
    }
}

function endDrag() {
    if (!isDragging) return;
    isDragging = false;
    const deltaX = currentX - startX;
    const card = document.getElementById('dogCard');
    const sniffIndicator = document.getElementById('sniffIndicator');
    const passIndicator = document.getElementById('passIndicator');
    if (Math.abs(deltaX) > 100) {
        if (deltaX > 0) {
            sniffDog();
        } else {
            passDog();
        }
    } else {
        card.style.cssText = '';
        sniffIndicator.classList.remove('show');
        passIndicator.classList.remove('show');
    }
}

document.getElementById('sniffModal').addEventListener('click', function(e) {
    if (e.target === this) {
        closeSniffMatch();
    }
});

// Synthetic data for live activity
const dogNames = [
    "Sir Barkington", "Professor Woofles", "Captain Sniffmaster", "Duke Pawsalot",
    "Lady Tailwagger", "Baron von Fetch", "Princess Squeaktoy", "General Goodboy",
    "Dr. Biscuit", "Admiral Bellyrub", "Count Droolula", "Sergeant Snuggles",
    "Rex Pawsome", "Bella Barksworth", "Max Sniffalicious", "Luna Woofington"
];

const activities = [
    "checked their pee-mail on a very important lamp post",
    "audited the kitchen floor for dropped snacks",
    "ran a full marathon in their sleep",
    "performed critical surgery to remove a squeaker",
    "negotiated a peace treaty for a small piece of chapati",
    "held a shareholder meeting about the treat distribution policy",
    "practiced hypnosis to acquire more belly rubs",
    "debated the philosophical implications of a squeaky toy",
    "discovered that their tail is, in fact, attached to them",
    "filed a formal complaint against the cat for trespassing",
    "attempted to pay for a walk with a slobbery tennis ball",
    "rearranged the couch cushions for optimal nap feng shui",
    "sang the ancient song of their people at a passing ambulance",
    "conducted a thorough security sweep of the backyard",
    "calculated the exact velocity of a falling piece of roti",
    "realized the dog in the mirror is a handsome imposter",
    "tried to bury a bone in the couch cushions for later",
    "experienced a moment of pure zen while chewing a slipper",
    "warned the family about a dangerous-looking plastic bag",
    "protected the house from the treacherous vacuum cleaner",
    "gave a lengthy lecture to a squirrel on property rights",
    "achieved a new personal best in 'underfoot' navigation",
    "investigated the mysterious red dot that cannot be caught",
    "became a connoisseur of different types of mud",
    "pondered why the human leaves every day in the 'car monster'",
    "mistook their own fart for an intruder",
    "engaged in a philosophical debate with a stray cow",
    "found the squeaker, which was the meaning of life all along",
    "used Jedi mind tricks to get an extra biscuit",
    "wondered if they, too, are a 'good boy'"
];

const dogEmojis = ["🐕", "🐶", "🐕‍🦺", "🐩", "🦮", "🐺"];
let activityCounter = 0;
let stats = {
    sniffs: 100247,
    confusion: 95,
    users: 1,
    barks: 42069
};

function generateActivity() {
    const name = dogNames[Math.floor(Math.random() * dogNames.length)];
    const action = activities[Math.floor(Math.random() * activities.length)];
    const emoji = dogEmojis[Math.floor(Math.random() * dogEmojis.length)];
    const timeAgo = Math.floor(Math.random() * 60) + 1;
    return {
        id: activityCounter++,
        name: name,
        action: action,
        emoji: emoji,
        time: `${timeAgo} seconds ago`
    };
}

function addActivity() {
    const feed = document.getElementById('activityFeed');
    const activity = generateActivity();
    const activityHTML = `
        <div class="activity-item">
            <div class="activity-avatar">${activity.emoji}</div>
            <div class="activity-content">
                <div>
                    <span class="activity-user">${activity.name}</span>
                    <span class="activity-action">${activity.action}</span>
                </div>
                <div class="activity-time">${activity.time}</div>
            </div>
        </div>
    `;
    feed.insertAdjacentHTML('afterbegin', activityHTML);
    const items = feed.querySelectorAll('.activity-item');
    if (items.length > 8) {
        items[items.length - 1].remove();
    }
}

function updateStats() {
    stats.sniffs += Math.floor(Math.random() * 10) + 1;
    stats.confusion = Math.min(99, stats.confusion + (Math.random() - 0.5));
    stats.barks += Math.floor(Math.random() * 5) + 1;
    if (Math.random() < 0.1) {
        stats.users = Math.floor(Math.random() * 4);
    }
    document.getElementById('sniffCount').textContent = stats.sniffs.toLocaleString();
    document.getElementById('confusionLevel').textContent = stats.confusion.toFixed(1) + '%';
    document.getElementById('userCount').textContent = stats.users;
    document.getElementById('barkCount').textContent = stats.barks.toLocaleString();
    const statElements = [
        document.getElementById('sniffCount'),
        document.getElementById('confusionLevel'),
        document.getElementById('userCount'),
        document.getElementById('barkCount')
    ];
    const randomStat = statElements[Math.floor(Math.random() * statElements.length)];
    randomStat.style.animation = 'pulse 0.5s ease-in-out';
    setTimeout(() => {
        randomStat.style.animation = '';
    }, 500);
}

function initializeData() {
    for (let i = 0; i < 5; i++) {
        addActivity();
    }
}

function startLiveUpdates() {
    setInterval(addActivity, Math.random() * 4000 + 3000);
    setInterval(updateStats, Math.random() * 3000 + 2000);
}

document.addEventListener('DOMContentLoaded', function() {
    initializeData();
    startLiveUpdates();
    initializeSwipeEvents();
});

function startSniffing() {
    const messages = [
        "Error: Please insert dog nose to continue",
        "Calibrating sniff sensitivity...",
        "Unable to locate nearby butts",
        "Your dog is not compatible with technology",
        "Please bark three times and try again",
        "Sniffing servers are down for maintenance",
        "Feature only works during full moon"
    ];
    alert(messages[Math.floor(Math.random() * messages.length)]);
}

function wobbleCard(card) {
    card.style.animation = 'wobble 0.5s ease-in-out';
    setTimeout(() => {
        card.style.animation = '';
    }, 500);
}

function fakeDownload(store) {
    alert(`${store} rejected our app for "not making any sense." We're appealing to the Supreme Court of Dogs.`);
}

function rickRoll() {
    window.open('http://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank');
}

function openSource() {
    alert('Our code is so revolutionary, even we don\'t understand it. Check back never.');
}

function reportCat() {
    const reports = [
        "Cat successfully reported to the Department of Canine Affairs",
        "Alert: Feline infiltration detected. Deploying emergency squeaky toys",
        "Cat report filed under 'Extremely Suspicious Behavior'",
        "Thank you. The cat has been sentenced to mandatory belly rubs"
    ];
    alert(reports[Math.floor(Math.random() * reports.length)]);
}

document.addEventListener('click', function() {
    if (Math.random() < 0.1) {
        console.log('WOOF! 🐕');
    }
});

let konamiCode = [];
const konamiSequence = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'KeyB', 'KeyA'];
document.addEventListener('keydown', function(e) {
    konamiCode.push(e.code);
    if (konamiCode.length > konamiSequence.length) {
        konamiCode.shift();
    }
    if (konamiCode.join('') === konamiSequence.join('')) {
        alert('🐕 ULTIMATE SNIFF MODE ACTIVATED! 🐕\nYou are now 500% more dog than before!');
        document.body.style.transform = 'rotate(1deg)';
        setTimeout(() => {
            document.body.style.transform = 'rotate(0deg)';
        }, 2000);
    }
});