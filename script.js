// =============================================
// CONFIGURATION
// =============================================
const WHATSAPP_NUMBER = '96171817081'; // ← CHANGE THIS
const WHATSAPP_MESSAGE_TEMPLATE = "Hi Shift Team! 👋 I'm interested in the *{product}* plan ({duration}) at *${price}*. I'd like to get started!";
const SOCIAL_LINKS = {
    instagram: 'https://instagram.com/0shiftagency',
    tiktok: 'https://tiktok.com/@0shiftagency',
    email: 'hello@shiftdigital.com'
};

// =============================================
// PRODUCT DATABASE
// durationType: 'selectable' = user picks 1m/3m/6m/12m
// durationType: 'fixed' = only one option
// durationType: 'none' = no duration (services)
// =============================================
const products = [
    // ===== AI TOOLS =====
    {
        id: 'chatgpt-plus',
        available: false,
        name: 'ChatGPT Plus',
        icon: '<img src="images/chatgpt_logo.png" style="width:40px;height:40px;" alt="ChatGPT">',
        category: 'AI Tools',
        tagline: 'Premium AI assistant with GPT-4',
        description: 'Full access to ChatGPT Plus with GPT-4, DALL-E 3, and advanced data analysis.',
        durationType: 'selectable',
        durations: [
            { label: '1 Month', months: 1, price: '4.99', oldPrice: '19.99', discount: '25%' },
            { label: '3 Months', months: 3, price: '12.99', oldPrice: '59.99', discount: '42%' },
            { label: '6 Months', months: 6, price: '19.99', oldPrice: '119.99', discount: '50%' },
            { label: '12 Months', months: 12, price: '34.99', oldPrice: '239.99', discount: '58%' }
        ],
        accountType: 'Private Account',
        delivery: 'Instant (under 5 min)',
        warranty: 'Full Warranty',
        support: '24/7 WhatsApp',
        features: ['GPT-4 Turbo access','DALL-E 3 image generation','Web browsing capability','Advanced Data Analysis','Priority access','Custom GPTs','Plugin support','Private account'],
        specs: {'👤 Account Type':'Private - Only You','⏱️ Delivery':'Instant (under 5 min)','🔄 Warranty':'Full term warranty','💬 Support':'24/7 WhatsApp'}
    },
    {
        id: 'gemini-advanced',
        name: 'Gemini Advanced',
        icon: '<img src="images/gemini.google_logo.png" style="width:40px;height:40px;" alt="Gemini">',
        category: 'AI Tools',
        tagline: "Google's most capable AI model",
        description: 'Google Gemini Advanced with 2TB Google One storage included.',
        durationType: 'selectable',
        durations: [

            { label: '12 Months', months: 12, price: '15', oldPrice: '120', discount: '88%' }
        ],
        accountType: 'Private Account',
        delivery: 'Instant (under 5 min)',
        warranty: 'Full Warranty',
        support: '24/7 WhatsApp',
        features: ['Gemini Ultra 1.0','2TB Google One storage','Workspace integration','Advanced reasoning','Code generation','Image understanding','Long context','Private account'],
        specs: {'👤 Account Type':'Private - Only You','⏱️ Delivery':'Instant','🔄 Warranty':'Full term','☁️ Storage':'2TB Included'}
    },
    {
        id: 'claude-pro',
        name: 'Claude Pro',
        icon: '<img src="images/claude_logo.png" style="width:40px;height:40px;" alt="Claude">',
        category: 'AI Tools',
        tagline: 'Anthropic\'s advanced AI assistant',
        description: 'Claude Pro with 200K context, file uploads, and priority access.',
        durationType: 'selectable',
        durations: [
            { label: '1 Month', months: 1, price: '12.99', oldPrice: '20.00', discount: '35%' },
            { label: '3 Months', months: 3, price: '29.99', oldPrice: '60.00', discount: '50%' },
            { label: '6 Months', months: 6, price: '49.99', oldPrice: '120.00', discount: '58%' },
            { label: '12 Months', months: 12, price: '89.99', oldPrice: '240.00', discount: '63%' }
        ],
        accountType: 'Shared Account',
        delivery: 'Under 15 min',
        warranty: '6 Month Warranty',
        support: '24/7 WhatsApp',
        features: ['200K context window','File & image upload','Priority bandwidth','Early features','Multiple workspaces','Code interpreter','Great for devs','Shared premium'],
        specs: {'👤 Account Type':'Shared (3 users)','⏱️ Delivery':'Under 15 min','🔄 Warranty':'6 Months','📊 Context':'200K tokens'}
    },
    {
        id: 'capcut-pro',
        name: 'CapCut Pro',
        icon: '<img src="images/capcut_logo.png" style="width:40px;height:40px;" alt="CapCut">',
        category: 'AI Tools',
        tagline: 'Professional video editing',
        description: 'CapCut Pro with premium effects, transitions, and no watermark. Shared team account.',
        durationType: 'fixed',
        durations: [
            { label: '1 Month', months: 1, price: '3.00', oldPrice: '5.00', discount: '40%' }
        ],
        accountType: 'Shared Account',
        delivery: 'Under 30 min',
        warranty: 'Full Warranty',
        support: '24/7 WhatsApp',
        features: ['Premium effects', 'No watermark', 'All transitions', 'Cloud storage', 'Team sharing', 'Given credentials'],
        specs: {'👤 Account Type':'Shared (Team)','⏱️ Delivery':'Under 30 min','🔄 Warranty':'Full term','📅 Duration':'1 Month'}
    },

    // ===== STREAMING =====
    
    {
        id: 'netflix-1u-1m',
        name: 'Netflix 1 Screen (1M)',
        icon: '<img src="images/netflix_logo.png" style="width:40px;height:40px;" alt="Netflix">',
        category: 'Streaming',
        tagline: 'Netflix shared - 1 month',
        description: 'Netflix shared account with 1 screen. TV Lebanon available. Custom days available.',
        durationType: 'fixed',
        durations: [
            { label: '1 Month', months: 1, price: '3.00', oldPrice: '5.00', discount: '40%' }
        ],
        accountType: 'Shared Account',
        delivery: 'Instant',
        warranty: 'Full Warranty',
        support: '24/7 WhatsApp',
        features: ['1 Screen', 'HD Quality', 'Full catalog', 'TV Lebanon', 'Custom days available'],
        specs: {'👤 Account Type':'Shared (Team)','⏱️ Delivery':'Instant','🔄 Warranty':'Full term','📺 Screens':'1 Screen'}
    },
    {
        id: 'netflix-1u-3m',
        name: 'Netflix 1 Screen (3M)',
        icon: '<img src="images/netflix_logo.png" style="width:40px;height:40px;" alt="Netflix">',
        category: 'Streaming',
        tagline: 'Netflix shared - 3 months',
        description: 'Netflix shared account with 1 screen for 3 months. TV Lebanon available.',
        durationType: 'fixed',
        durations: [
            { label: '3 Months', months: 3, price: '8.00', oldPrice: '12.00', discount: '33%' }
        ],
        accountType: 'Shared Account',
        delivery: 'Instant',
        warranty: 'Full Warranty',
        support: '24/7 WhatsApp',
        features: ['1 Screen', 'HD Quality', 'Full catalog', 'TV Lebanon', '3 Month Access'],
        specs: {'👤 Account Type':'Shared (Team)','⏱️ Delivery':'Instant','🔄 Warranty':'Full term','📅 Duration':'3 Months'}
    },
    {
        id: 'netflix-1u-6m',
        name: 'Netflix 1 Screen (6M)',
        icon: '<img src="images/netflix_logo.png" style="width:40px;height:40px;" alt="Netflix">',
        category: 'Streaming',
        tagline: 'Netflix shared - 6 months',
        description: 'Netflix shared account with 1 screen for 6 months. TV Lebanon available.',
        durationType: 'fixed',
        durations: [
            { label: '6 Months', months: 6, price: '15.00', oldPrice: '25.00', discount: '40%' }
        ],
        accountType: 'Shared Account',
        delivery: 'Instant',
        warranty: 'Full Warranty',
        support: '24/7 WhatsApp',
        features: ['1 Screen', 'HD Quality', 'Full catalog', 'TV Lebanon', '6 Month Access'],
        specs: {'👤 Account Type':'Shared','⏱️ Delivery':'Instant','🔄 Warranty':'Full term','📅 Duration':'6 Months'}
    },
    {
        id: 'netflix-1u-12m',
        name: 'Netflix 1 Screen (12M)',
        icon: '<img src="images/netflix_logo.png" style="width:40px;height:40px;" alt="Netflix">',
        category: 'Streaming',
        tagline: 'Netflix shared - 12 months',
        description: 'Netflix shared account with 1 screen for 12 months. TV Lebanon available.',
        durationType: 'fixed',
        durations: [
            { label: '12 Months', months: 12, price: '23.00', oldPrice: '35.00', discount: '34%' }
        ],
        accountType: 'Shared Account',
        delivery: 'Instant',
        warranty: 'Full Warranty',
        support: '24/7 WhatsApp',
        features: ['1 Screen', 'HD Quality', 'Full catalog', 'TV Lebanon', '12 Month Access'],
        specs: {'👤 Account Type':'Shared','⏱️ Delivery':'Instant','🔄 Warranty':'Full term','📅 Duration':'12 Months'}
    },
    {
        id: 'disney-plus',
        name: 'Disney+ Premium',
        icon: '<img src="images/disney_logo.png" style="width:40px;height:40px;" alt="Disney+">',
        category: 'Streaming',
        tagline: 'Disney, Marvel, Star Wars',
        description: 'Disney+ with Disney, Pixar, Marvel, Star Wars, and National Geographic.',
        durationType: 'selectable',
        durations: [
            { label: '1 Month', months: 1, price: '5.99', oldPrice: '13.99', discount: '57%' },
            { label: '3 Months', months: 3, price: '13.99', oldPrice: '41.99', discount: '67%' },
            { label: '6 Months', months: 6, price: '22.99', oldPrice: '83.99', discount: '73%' },
            { label: '12 Months', months: 12, price: '39.99', oldPrice: '167.99', discount: '76%' }
        ],
        accountType: 'Shared Account',
        delivery: 'Instant',
        warranty: 'Full Warranty',
        support: '24/7 WhatsApp',
        features: ['Full Disney catalog','Marvel universe','Star Wars saga','Pixar library','Nat Geo docs','4K quality','4 streams','Offline downloads'],
        specs: {'👤 Account Type':'Shared (Premium)','⏱️ Delivery':'Instant','🔄 Warranty':'Full term','🎥 Content':'Full library'}
    },
    {
        id: 'youtube-premium-1m',
        name: 'YouTube Premium (1M)',
        icon: '<img src="images/youtube_logo.png" style="width:40px;height:40px;" alt="YouTube">',
        category: 'Streaming',
        tagline: 'Ad-free YouTube - 1 Month',
        description: 'YouTube Premium family plan for 1 month. Ad-free, background play, Music included.',
        durationType: 'fixed',
        durations: [
            { label: '1 Month', months: 1, price: '3.00', oldPrice: '5.00', discount: '40%' }
        ],
        accountType: 'Shared Account',
        delivery: 'Instant',
        warranty: 'Full Warranty',
        support: '24/7 WhatsApp',
        features: ['Ad-free videos', 'Background play', 'YouTube Music', 'Offline downloads', 'Family plan'],
        specs: {'👤 Account Type':'Shared (Family)','⏱️ Delivery':'Instant','🔄 Warranty':'Full term','📅 Duration':'1 Month'}
    },
    {
        id: 'youtube-premium-6m',
        name: 'YouTube Premium (6M)',
        icon: '<img src="images/youtube_logo.png" style="width:40px;height:40px;" alt="YouTube">',
        category: 'Streaming',
        tagline: 'Ad-free YouTube - 6 Months',
        description: 'YouTube Premium family plan for 6 months.',
        durationType: 'fixed',
        durations: [
            { label: '6 Months', months: 6, price: '15.00', oldPrice: '30.00', discount: '50%' }
        ],
        accountType: 'Shared Account',
        delivery: 'Instant',
        warranty: 'Full Warranty',
        support: '24/7 WhatsApp',
        features: ['Ad-free videos', 'Background play', 'YouTube Music', 'Offline downloads', 'Family plan'],
        specs: {'👤 Account Type':'Shared (Family)','⏱️ Delivery':'Instant','🔄 Warranty':'Full term','📅 Duration':'6 Months'}
    },
    {
        id: 'youtube-premium-12m',
        name: 'YouTube Premium (12M)',
        icon: '<img src="images/youtube_logo.png" style="width:40px;height:40px;" alt="YouTube">',
        category: 'Streaming',
        tagline: 'Ad-free YouTube - 12 Months',
        description: 'YouTube Premium family plan for 12 months. Best value!',
        durationType: 'fixed',
        durations: [
            { label: '12 Months', months: 12, price: '25.00', oldPrice: '60.00', discount: '58%' }
        ],
        accountType: 'Shared Account',
        delivery: 'Instant',
        warranty: 'Full Warranty',
        support: '24/7 WhatsApp',
        features: ['Ad-free videos', 'Background play', 'YouTube Music', 'Offline downloads', 'Family plan'],
        specs: {'👤 Account Type':'Shared (Family)','⏱️ Delivery':'Instant','🔄 Warranty':'Full term','📅 Duration':'12 Months'}
    },
    {
        id: 'spotify-premium',
        name: 'Spotify Premium',
        icon: '<img src="images/spotify_logo.png" style="width:40px;height:40px;" alt="Spotify">',
        category: 'Streaming',
        tagline: 'Ad-free music streaming',
        description: 'Spotify Premium with ad-free listening, offline downloads, and HQ audio.',
        durationType: 'fixed',
        durations: [
            { label: '12 Months', months: 12, price: '2.99', oldPrice: '11.99', discount: '75%' }
        ],
        accountType: 'Shared Account',
        delivery: 'Instant',
        warranty: '6 Month Warranty',
        support: '24/7 WhatsApp',
        features: ['Ad-free streaming','Unlimited skips','Offline downloads','320kbps quality','Playlist creation','Discover Weekly','Podcasts access','Cross-device sync'],
        specs: {'👤 Account Type':'Shared (Family)','⏱️ Delivery':'Instant','🔄 Warranty':'6 Months','🎵 Quality':'320kbps'}
    },
    {
        id: 'watchit-1m',
        name: 'WatchIt (1 Month)',
        icon: '<img src="images/watchit_logo.png" style="width:40px;height:40px;" alt="WatchIt">',
        category: 'Streaming',
        tagline: 'Arabic streaming - 1 Month',
        description: 'WatchIt personal account for 1 month. Access to Arabic movies and series.',
        durationType: 'fixed',
        durations: [
            { label: '1 Month', months: 1, price: '5.00', oldPrice: '8.00', discount: '38%' }
        ],
        accountType: 'Private Account',
        delivery: 'Under 30 min',
        warranty: 'Full Warranty',
        support: '24/7 WhatsApp',
        features: ['Personal account', 'Arabic content', 'Full catalog', 'HD quality'],
        specs: {'👤 Account Type':'Personal - Only You','⏱️ Delivery':'Under 30 min','🔄 Warranty':'Full term','📅 Duration':'1 Month'}
    },
    {
        id: 'watchit-12m',
        name: 'WatchIt (12 Months)',
        icon: '<img src="images/watchit_logo.png" style="width:40px;height:40px;" alt="WatchIt">',
        category: 'Streaming',
        tagline: 'Arabic streaming - 12 Months',
        description: 'WatchIt personal account for 12 months. Best value for Arabic entertainment.',
        durationType: 'fixed',
        durations: [
            { label: '12 Months', months: 12, price: '34.00', oldPrice: '50.00', discount: '32%' }
        ],
        accountType: 'Private Account',
        delivery: 'Under 30 min',
        warranty: 'Full Warranty',
        support: '24/7 WhatsApp',
        features: ['Personal account', 'Arabic content', 'Full catalog', 'HD quality'],
        specs: {'👤 Account Type':'Personal - Only You','⏱️ Delivery':'Under 30 min','🔄 Warranty':'Full term','📅 Duration':'12 Months'}
    },
    {
        id: 'anghami-3m',
        name: 'Anghami Plus (3M)',
        icon: '<img src="images/anghami_logo.png" style="width:40px;height:40px;" alt="Anghami">',
        category: 'Streaming',
        tagline: 'Arabic music - 3 Months',
        description: 'Anghami Plus personal account for 3 months. Arabic and international music.',
        durationType: 'fixed',
        durations: [
            { label: '3 Months', months: 3, price: '6.00', oldPrice: '10.00', discount: '40%' }
        ],
        accountType: 'Private Account',
        delivery: 'Under 30 min',
        warranty: 'Full Warranty',
        support: '24/7 WhatsApp',
        features: ['Personal account', 'Arabic music', 'No ads', 'Offline downloads', 'HQ audio'],
        specs: {'👤 Account Type':'Personal - Only You','⏱️ Delivery':'Under 30 min','🔄 Warranty':'Full term','📅 Duration':'3 Months'}
    },
    {
        id: 'anghami-6m',
        name: 'Anghami Plus (6M)',
        icon: '<img src="images/anghami_logo.png" style="width:40px;height:40px;" alt="Anghami">',
        category: 'Streaming',
        tagline: 'Arabic music - 6 Months',
        description: 'Anghami Plus personal account for 6 months.',
        durationType: 'fixed',
        durations: [
            { label: '6 Months', months: 6, price: '11.00', oldPrice: '18.00', discount: '39%' }
        ],
        accountType: 'Private Account',
        delivery: 'Under 30 min',
        warranty: 'Full Warranty',
        support: '24/7 WhatsApp',
        features: ['Personal account', 'Arabic music', 'No ads', 'Offline downloads', 'HQ audio'],
        specs: {'👤 Account Type':'Personal - Only You','⏱️ Delivery':'Under 30 min','🔄 Warranty':'Full term','📅 Duration':'6 Months'}
    },
    {
        id: 'anghami-12m',
        name: 'Anghami Plus (12M)',
        icon: '<img src="images/anghami_logo.png" style="width:40px;height:40px;" alt="Anghami">',
        category: 'Streaming',
        tagline: 'Arabic music - 12 Months',
        description: 'Anghami Plus personal account for 12 months. Best value!',
        durationType: 'fixed',
        durations: [
            { label: '12 Months', months: 12, price: '20.00', oldPrice: '30.00', discount: '33%' }
        ],
        accountType: 'Private Account',
        delivery: 'Under 30 min',
        warranty: 'Full Warranty',
        support: '24/7 WhatsApp',
        features: ['Personal account', 'Arabic music', 'No ads', 'Offline downloads', 'HQ audio'],
        specs: {'👤 Account Type':'Personal - Only You','⏱️ Delivery':'Under 30 min','🔄 Warranty':'Full term','📅 Duration':'12 Months'}
    },
    {
        id: 'osn-1m-1u',
        name: 'OSN (1M 1 Screen)',
        icon: '<img src="images/osn_logo.png" style="width:40px;height:40px;" alt="OSN">',
        category: 'Streaming',
        tagline: 'OSN shared - 1 Month',
        description: 'OSN shared account with 1 screen for 1 month. TV Lebanon available.',
        durationType: 'fixed',
        durations: [
            { label: '1 Month', months: 1, price: '4.00', oldPrice: '6.00', discount: '33%' }
        ],
        accountType: 'Shared Account',
        delivery: 'Instant',
        warranty: 'Full Warranty',
        support: '24/7 WhatsApp',
        features: ['1 Screen', 'Full catalog', 'TV Lebanon', 'HD quality'],
        specs: {'👤 Account Type':'Shared','⏱️ Delivery':'Instant','🔄 Warranty':'Full term','📅 Duration':'1 Month'}
    },
    {
        id: 'osn-12m-1u',
        name: 'OSN (12M 1 Screen)',
        icon: '<img src="images/osn_logo.png" style="width:40px;height:40px;" alt="OSN">',
        category: 'Streaming',
        tagline: 'OSN shared - 12 Months',
        description: 'OSN shared account with 1 screen for 12 months. TV Lebanon available.',
        durationType: 'fixed',
        durations: [
            { label: '12 Months', months: 12, price: '30.00', oldPrice: '45.00', discount: '33%' }
        ],
        accountType: 'Shared Account',
        delivery: 'Instant',
        warranty: 'Full Warranty',
        support: '24/7 WhatsApp',
        features: ['1 Screen', 'Full catalog', 'TV Lebanon', 'HD quality'],
        specs: {'👤 Account Type':'Shared','⏱️ Delivery':'Instant','🔄 Warranty':'Full term','📅 Duration':'12 Months'}
    },
    {
        id: 'osn-personal-1m',
        name: 'OSN Personal (1M)',
        icon: '<img src="images/osn_logo.png" style="width:40px;height:40px;" alt="OSN">',
        category: 'Streaming',
        tagline: 'OSN personal - 1 Month',
        description: 'OSN personal account for 1 month. Your own account, TV Lebanon available.',
        durationType: 'fixed',
        durations: [
            { label: '1 Month', months: 1, price: '10.00', oldPrice: '15.00', discount: '33%' }
        ],
        accountType: 'Private Account',
        delivery: 'Under 1 hour',
        warranty: 'Full Warranty',
        support: '24/7 WhatsApp',
        features: ['Personal account', 'Full catalog', 'TV Lebanon', 'HD quality'],
        specs: {'👤 Account Type':'Personal - Only You','⏱️ Delivery':'Under 1 hour','🔄 Warranty':'Full term','📅 Duration':'1 Month'}
    },
    {
        id: 'osn-personal-12m',
        name: 'OSN Personal (12M)',
        icon: '<img src="images/osn_logo.png" style="width:40px;height:40px;" alt="OSN">',
        category: 'Streaming',
        tagline: 'OSN personal - 12 Months',
        description: 'OSN personal account for 12 months. Best value for your own OSN account.',
        durationType: 'fixed',
        durations: [
            { label: '12 Months', months: 12, price: '90.00', oldPrice: '130.00', discount: '31%' }
        ],
        accountType: 'Private Account',
        delivery: 'Under 1 hour',
        warranty: 'Full Warranty',
        support: '24/7 WhatsApp',
        features: ['Personal account', 'Full catalog', 'TV Lebanon', 'HD quality'],
        specs: {'👤 Account Type':'Personal - Only You','⏱️ Delivery':'Under 1 hour','🔄 Warranty':'Full term','📅 Duration':'12 Months'}
    },
    {
        id: 'amazon-prime-1m',
        name: 'Amazon Prime (1M)',
        icon: '<img src="images/primevideo_logo.png" style="width:40px;height:40px;" alt="Amazon Prime">',
        category: 'Streaming',
        tagline: 'Amazon Prime - 1 Month',
        description: 'Amazon Prime full account for 1 month. TV Lebanon available.',
        durationType: 'fixed',
        durations: [
            { label: '1 Month', months: 1, price: '5.00', oldPrice: '8.00', discount: '38%' }
        ],
        accountType: 'Private Account',
        delivery: 'Instant',
        warranty: 'Full Warranty',
        support: '24/7 WhatsApp',
        features: ['Full account', 'Prime Video', 'Prime Music', 'Free shipping', 'TV Lebanon'],
        specs: {'👤 Account Type':'Full Account','⏱️ Delivery':'Instant','🔄 Warranty':'Full term','📅 Duration':'1 Month'}
    },
    {
        id: 'amazon-prime-6m',
        name: 'Amazon Prime (6M)',
        icon: '<img src="images/primevideo_logo.png" style="width:40px;height:40px;" alt="Amazon Prime">',
        category: 'Streaming',
        tagline: 'Amazon Prime - 6 Months',
        description: 'Amazon Prime full account for 6 months. TV Lebanon available.',
        durationType: 'fixed',
        durations: [
            { label: '6 Months', months: 6, price: '15.00', oldPrice: '25.00', discount: '40%' }
        ],
        accountType: 'Private Account',
        delivery: 'Instant',
        warranty: 'Full Warranty',
        support: '24/7 WhatsApp',
        features: ['Full account', 'Prime Video', 'Prime Music', 'Free shipping', 'TV Lebanon'],
        specs: {'👤 Account Type':'Full Account','⏱️ Delivery':'Instant','🔄 Warranty':'Full term','📅 Duration':'6 Months'}
    },

    // ===== SOCIAL MEDIA =====
    {
        id: 'instagram-followers-refill',
        name: 'Instagram Followers (Refill)',
        icon: '<img src="images/instagram_logo.png" style="width:40px;height:40px;" alt="Instagram">',
        category: 'Social Media',
        tagline: '1,000 Followers - With Refill',
        description: 'Get 1,000 Instagram followers with refill warranty if dropped. Public account required.',
        durationType: 'none',
        durations: [
            { label: 'One-time', months: 0, price: '3.00', oldPrice: '5.00', discount: '40%' }
        ],
        accountType: 'Service',
        delivery: 'Starts within 24h',
        warranty: 'Refill Warranty',
        support: '24/7 WhatsApp',
        features: ['1,000 followers', 'Refill warranty', 'Fast delivery', 'Worldwide', 'Public account needed'],
        specs: {'👥 Followers':'1,000','⏱️ Delivery':'Within 24h','🔄 Refill':'Yes - Warranty','🔒 Account':'Public Only'}
    },
    {
        id: 'instagram-followers-norefill',
        name: 'Instagram Followers (No Refill)',
        icon: '<img src="images/instagram_logo.png" style="width:40px;height:40px;" alt="Instagram">',
        category: 'Social Media',
        tagline: '1,000 Followers - No Refill',
        description: 'Get 1,000 Instagram followers. No refill if dropped. Public account required.',
        durationType: 'none',
        durations: [
            { label: 'One-time', months: 0, price: '2.00', oldPrice: '4.00', discount: '50%' }
        ],
        accountType: 'Service',
        delivery: 'Starts within 24h',
        warranty: 'No Refill',
        support: '24/7 WhatsApp',
        features: ['1,000 followers', 'Fast delivery', 'Worldwide', 'Public account needed'],
        specs: {'👥 Followers':'1,000','⏱️ Delivery':'Within 24h','🔄 Refill':'No Refill','🔒 Account':'Public Only'}
    },
    {
        id: 'tiktok-followers',
        name: 'TikTok Followers',
        icon: '<img src="images/tiktok_logo.png" style="width:40px;height:40px;" alt="TikTok">',
        category: 'Social Media',
        tagline: '1,000 TikTok Followers',
        description: 'Get 1,000 real TikTok followers. Public account required.',
        durationType: 'none',
        durations: [
            { label: 'One-time', months: 0, price: '5.00', oldPrice: '8.00', discount: '38%' }
        ],
        accountType: 'Service',
        delivery: 'Starts within 24h',
        warranty: 'Refill Available',
        support: '24/7 WhatsApp',
        features: ['1,000 followers', 'Real accounts', 'Fast delivery', 'Public account needed'],
        specs: {'👥 Followers':'1,000','⏱️ Delivery':'Within 24h','🔄 Refill':'Available','🔒 Account':'Public Only'}
    },
    {
        id: 'instagram-likes',
        name: 'Instagram Likes',
        icon: '<img src="images/instagram_logo.png" style="width:40px;height:40px;" alt="Instagram">',
        category: 'Social Media',
        tagline: '1,000 Instagram Likes',
        description: 'Get 1,000 likes on your Instagram posts. Public account required.',
        durationType: 'none',
        durations: [
            { label: 'One-time', months: 0, price: '1.00', oldPrice: '2.00', discount: '50%' }
        ],
        accountType: 'Service',
        delivery: 'Starts within 24h',
        warranty: 'No Refill',
        support: '24/7 WhatsApp',
        features: ['1,000 likes', 'Fast delivery', 'Any post', 'Public account needed'],
        specs: {'❤️ Likes':'1,000','⏱️ Delivery':'Within 24h','🔄 Refill':'No','🔒 Account':'Public Only'}
    },
    {
        id: 'tiktok-likes',
        name: 'TikTok Likes',
        icon: '<img src="images/tiktok_logo.png" style="width:40px;height:40px;" alt="TikTok">',
        category: 'Social Media',
        tagline: '1,000 TikTok Likes',
        description: 'Get 1,000 likes on your TikTok videos. Public account required.',
        durationType: 'none',
        durations: [
            { label: 'One-time', months: 0, price: '1.00', oldPrice: '2.00', discount: '50%' }
        ],
        accountType: 'Service',
        delivery: 'Starts within 24h',
        warranty: 'No Refill',
        support: '24/7 WhatsApp',
        features: ['1,000 likes', 'Fast delivery', 'Any video', 'Public account needed'],
        specs: {'❤️ Likes':'1,000','⏱️ Delivery':'Within 24h','🔄 Refill':'No','🔒 Account':'Public Only'}
    },
    {
        id: 'instagram-comments',
        name: 'Instagram Comments',
        icon: '<img src="images/instagram_logo.png" style="width:40px;height:40px;" alt="Instagram">',
        category: 'Social Media',
        tagline: '1,000 Instagram Comments',
        description: 'Get 1,000 custom comments on your Instagram posts.',
        durationType: 'none',
        durations: [
            { label: 'One-time', months: 0, price: '4.00', oldPrice: '7.00', discount: '43%' }
        ],
        accountType: 'Service',
        delivery: 'Starts within 24h',
        warranty: 'No Refill',
        support: '24/7 WhatsApp',
        features: ['1,000 comments', 'Custom text', 'Fast delivery', 'Public account needed'],
        specs: {'💬 Comments':'1,000','⏱️ Delivery':'Within 24h','🔄 Refill':'No','🔒 Account':'Public Only'}
    },
    {
        id: 'tiktok-comments',
        name: 'TikTok Comments',
        icon: '<img src="images/tiktok_logo.png" style="width:40px;height:40px;" alt="TikTok">',
        category: 'Social Media',
        tagline: '1,000 TikTok Comments',
        description: 'Get 1,000 custom comments on your TikTok videos.',
        durationType: 'none',
        durations: [
            { label: 'One-time', months: 0, price: '4.00', oldPrice: '7.00', discount: '43%' }
        ],
        accountType: 'Service',
        delivery: 'Starts within 24h',
        warranty: 'No Refill',
        support: '24/7 WhatsApp',
        features: ['1,000 comments', 'Custom text', 'Fast delivery', 'Public account needed'],
        specs: {'💬 Comments':'1,000','⏱️ Delivery':'Within 24h','🔄 Refill':'No','🔒 Account':'Public Only'}
    },
    {
        id: 'instagram-views',
        name: 'Instagram Views',
        icon: '<img src="images/instagram_logo.png" style="width:40px;height:40px;" alt="Instagram">',
        category: 'Social Media',
        tagline: '100K Instagram Views',
        description: 'Get 100,000 views on your Instagram videos/reels.',
        durationType: 'none',
        durations: [
            { label: 'One-time', months: 0, price: '1.00', oldPrice: '2.00', discount: '50%' }
        ],
        accountType: 'Service',
        delivery: 'Starts within 24h',
        warranty: 'No Refill',
        support: '24/7 WhatsApp',
        features: ['100,000 views', 'Fast delivery', 'Reels & videos', 'Public account needed'],
        specs: {'👀 Views':'100,000','⏱️ Delivery':'Within 24h','🔄 Refill':'No','🔒 Account':'Public Only'}
    },
    {
        id: 'tiktok-views',
        name: 'TikTok Views',
        icon: '<img src="images/tiktok_logo.png" style="width:40px;height:40px;" alt="TikTok">',
        category: 'Social Media',
        tagline: '10K TikTok Views',
        description: 'Get 10,000 real TikTok views to boost your videos and reach the FYP.',
        durationType: 'none',
        durations: [
            { label: 'One-time', months: 0, price: '1.00', oldPrice: '2.00', discount: '50%' }
        ],
        accountType: 'Service',
        delivery: 'Starts within 1h',
        warranty: 'Refill if dropped',
        support: '24/7 WhatsApp',
        features: ['10,000 real views','Worldwide audience','Natural delivery','FYP boost','No bots','Safe method','Fast start','View retention'],
        specs: {'👀 Views':'10,000 real','⏱️ Delivery':'Within 1 hour','🔄 Refill':'If views drop','🌍 Audience':'Worldwide'}
    },
    {
        id: 'snapchat-plus',
        name: 'Snapchat Plus',
        icon: '<img src="images/snapchat_logo.png" style="width:40px;height:40px;" alt="Snapchat">',
        category: 'Social Media',
        tagline: 'Snapchat Plus - 6 Months',
        description: 'Snapchat Plus subscription for 6 months. Username only required.',
        durationType: 'fixed',
        durations: [
            { label: '6 Months', months: 6, price: '15.00', oldPrice: '25.00', discount: '40%' }
        ],
        accountType: 'Service',
        delivery: 'Under 24h',
        warranty: 'Full Warranty',
        support: '24/7 WhatsApp',
        features: ['Snapchat Plus features', '6 months access', 'Username only needed'],
        specs: {'👤 Requirement':'Username Only','⏱️ Delivery':'Under 24h','🔄 Warranty':'Full term','📅 Duration':'6 Months'}
    },

    // ===== PRODUCTIVITY =====
    {
        id: 'notion-plus',
        name: 'Notion Plus',
        icon: '<img src="images/notion_logo.png" style="width:40px;height:40px;" alt="Notion">',
        category: 'Productivity',
        tagline: 'All-in-one workspace',
        description: 'Notion Plus with unlimited blocks, uploads, and advanced collaboration.',
        durationType: 'selectable',
        durations: [
            { label: '1 Month', months: 1, price: '6.99', oldPrice: '10.00', discount: '30%' },
            { label: '3 Months', months: 3, price: '15.99', oldPrice: '30.00', discount: '47%' },
            { label: '6 Months', months: 6, price: '27.99', oldPrice: '60.00', discount: '53%' },
            { label: '12 Months', months: 12, price: '49.99', oldPrice: '120.00', discount: '58%' }
        ],
        accountType: 'Private Account',
        delivery: 'Under 30 min',
        warranty: '12 Month Warranty',
        support: '24/7 WhatsApp',
        features: ['Unlimited blocks','Unlimited uploads','30-day history','Custom automations','Advanced permissions','Guest access','API access','Private workspace'],
        specs: {'👤 Account Type':'Private - Only You','⏱️ Delivery':'Under 30 min','🔄 Warranty':'12 Months','📄 Storage':'Unlimited'}
    },
    {
        id: 'canva-pro',
        name: 'Canva Pro',
        icon: '<img src="images/canva_logo.png" style="width:40px;height:40px;" alt="Canva">',
        category: 'Productivity',
        tagline: 'Professional design tool - Lifetime',
        description: 'Canva Pro Lifetime with premium templates, AI tools, and 100M+ assets. Pay once, use forever.',
        durationType: 'fixed',
        durations: [
            { label: 'Lifetime Access', months: 999, price: '5.00', oldPrice: '120.00', discount: '75%' }
        ],
        accountType: 'Private Account',
        delivery: 'Under 1 hour',
        warranty: 'Lifetime Warranty',
        support: '24/7 WhatsApp',
        features: ['100M+ stock photos','Brand kit creation','AI Magic Design','Background remover','Resize & translate','Premium templates','Team features','1TB cloud storage','Lifetime access - no renewals','One-time payment'],
        specs: {'👤 Account Type':'Private - Only You','⏱️ Delivery':'Under 1 hour','🔄 Warranty':'Lifetime','📅 Duration':'Lifetime Access','🎨 Assets':'100M+ premium','💳 Payment':'One-time only'}
    },
    {
        id: 'microsoft-365',
        name: 'Microsoft 365',
        icon: '<img src="images/microsoft_logo.png" style="width:40px;height:40px;" alt="Microsoft 365">',  
        category: 'Productivity',
        tagline: 'Office suite + 1TB cloud',
        description: 'Microsoft 365 with Word, Excel, PowerPoint, Outlook, and 1TB OneDrive.',
        durationType: 'selectable',
        durations: [
            { label: '1 Month', months: 1, price: '8.99', oldPrice: '15.99', discount: '44%' },
            { label: '3 Months', months: 3, price: '21.99', oldPrice: '47.99', discount: '54%' },
            { label: '6 Months', months: 6, price: '37.99', oldPrice: '95.99', discount: '60%' },
            { label: '12 Months', months: 12, price: '69.99', oldPrice: '191.99', discount: '64%' }
        ],
        accountType: 'Private Account',
        delivery: 'Under 2 hours',
        warranty: '12 Month Warranty',
        support: '24/7 WhatsApp',
        features: ['Word, Excel, PowerPoint','Outlook premium','1TB OneDrive','Microsoft Teams','AI Copilot access','Advanced security','Cross-device sync','Latest version'],
        specs: {'👤 Account Type':'Private - Only You','⏱️ Delivery':'Under 2 hours','🔄 Warranty':'12 Months','☁️ Storage':'1TB OneDrive'}
    },
    {
        id: 'express-vpn-pc',
        name: 'ExpressVPN (PC)',
        icon: '<img src="images/expressvpn_logo.png" style="width:40px;height:40px;" alt="ExpressVPN">',
        category: 'Productivity',
        tagline: 'VPN for PC - 1 Month',
        description: 'ExpressVPN key for PC. Works in all countries. 1 month access.',
        durationType: 'fixed',
        durations: [
            { label: '1 Month', months: 1, price: '4.00', oldPrice: '7.00', discount: '43%' }
        ],
        accountType: 'Key',
        delivery: 'Instant',
        warranty: 'Full Warranty',
        support: '24/7 WhatsApp',
        features: ['PC only', 'All countries', 'Fast speeds', 'No logs', 'Key delivery'],
        specs: {'👤 Account Type':'Key - PC Only','⏱️ Delivery':'Instant','🔄 Warranty':'Full term','🌍 Countries':'All'}
    },

    // ===== GAMING =====
    {
        id: 'minecraft-pc',
        name: 'Minecraft (PC)',
        icon: '<img src="images/minecraft_logo.png" style="width:40px;height:40px;" alt="Minecraft">',
        category: 'Gaming',
        tagline: 'Minecraft PC Account',
        description: 'Minecraft PC account. Full game access.',
        durationType: 'fixed',
        durations: [
            { label: 'Lifetime', months: 999, price: '15.00', oldPrice: '25.00', discount: '40%' }
        ],
        accountType: 'Account',
        delivery: 'Under 1 hour',
        warranty: 'Lifetime Warranty',
        support: '24/7 WhatsApp',
        features: ['Full game', 'PC version', 'Online play', 'Lifetime access'],
        specs: {'👤 Account Type':'PC Account','⏱️ Delivery':'Under 1 hour','🔄 Warranty':'Lifetime','🎮 Platform':'PC'}
    },
    {
        id: '8ballpool',
        name: '8 Ball Pool Coins',
        icon: '<img src="images/8ballpool_logo.png" style="width:40px;height:40px;" alt="8 Ball Pool">',
        category: 'Gaming',
        tagline: '500 Million Coins',
        description: 'Get 500 million coins for 8 Ball Pool. Given via Gmail account.',
        durationType: 'none',
        durations: [
            { label: 'One-time', months: 0, price: '8.00', oldPrice: '15.00', discount: '47%' }
        ],
        accountType: 'Service',
        delivery: 'Under 1 hour',
        warranty: 'No Refill',
        support: '24/7 WhatsApp',
        features: ['500M coins', 'Gmail delivery', 'Fast delivery'],
        specs: {'🪙 Coins':'500 Million','⏱️ Delivery':'Under 1 hour','📧 Delivery':'Via Gmail'}
    }
];

// =============================================
// WHATSAPP FUNCTIONS
// =============================================
function openWhatsApp(productName, price, durationLabel) {
    const modalName = document.getElementById('modalProductName');
    const modalLink = document.getElementById('whatsappLink');
    if (modalName) modalName.textContent = productName;
    const message = WHATSAPP_MESSAGE_TEMPLATE
        .replace('{product}', productName)
        .replace('{duration}', durationLabel || '')
        .replace('{price}', price);
    const whatsappURL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    if (modalLink) modalLink.href = whatsappURL;
    const modal = document.getElementById('whatsappModal');
    if (modal) { modal.classList.add('active'); document.body.style.overflow = 'hidden'; }
}
function closeModal() {
    const modal = document.getElementById('whatsappModal');
    if (modal) { modal.classList.remove('active'); document.body.style.overflow = ''; }
}
document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('whatsappModal');
    if (modal) modal.addEventListener('click', function(e) { if (e.target === this) closeModal(); });
});
document.addEventListener('keydown', function(e) { if (e.key === 'Escape') closeModal(); });

// =============================================
// MOBILE MENU
// =============================================
function toggleMenu() {
    const navLinks = document.getElementById('navLinks');
    const hamburger = document.getElementById('hamburger');
    if (navLinks && hamburger) {
        navLinks.classList.toggle('active');
        hamburger.classList.toggle('active');
        document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : '';
    }
}
function closeMenu() {
    const navLinks = document.getElementById('navLinks');
    const hamburger = document.getElementById('hamburger');
    if (navLinks && hamburger) { navLinks.classList.remove('active'); hamburger.classList.remove('active'); document.body.style.overflow = ''; }
}

// =============================================
// FAQ
// =============================================
function toggleFAQ(element) {
    document.querySelectorAll('.faq-item').forEach(item => {
        if (item !== element && item.classList.contains('active')) item.classList.remove('active');
    });
    element.classList.toggle('active');
}

// =============================================
// SCROLL TO TOP
// =============================================
window.addEventListener('scroll', () => {
    const scrollTopBtn = document.getElementById('scrollTop');
    const navbar = document.getElementById('navbar');
    if (scrollTopBtn) scrollTopBtn.classList.toggle('visible', window.scrollY > 400);
    if (navbar) navbar.classList.toggle('scrolled', window.scrollY > 50);
});

// =============================================
// DURATION SELECTOR
// =============================================
function selectDuration(button, price, oldPrice, discount, durationLabel) {
    document.querySelectorAll('.duration-btn').forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
    const currentPriceEl = document.getElementById('dynamicCurrentPrice');
    const oldPriceEl = document.getElementById('dynamicOldPrice');
    const discountBadgeEl = document.getElementById('dynamicDiscount');
    if (currentPriceEl) currentPriceEl.textContent = '$' + price;
    if (oldPriceEl) oldPriceEl.textContent = '$' + oldPrice;
    if (discountBadgeEl) discountBadgeEl.textContent = 'SAVE ' + discount;
    const ctaBtn = document.getElementById('ctaButton');
    if (ctaBtn) {
        ctaBtn.setAttribute('data-price', price);
        ctaBtn.setAttribute('data-duration', durationLabel);
        ctaBtn.textContent = '💬 Get on WhatsApp - $' + price + ' (' + durationLabel + ')';
    }
}

// =============================================
// RENDER PRODUCT CARDS (Homepage)
// =============================================
function renderProductCards(filteredProducts = products) {
    const grid = document.getElementById('productsGrid');
    if (!grid) return;
    if (filteredProducts.length === 0) {
        grid.innerHTML = '<div class="no-results"><span class="icon">🔍</span><p>No products found</p><p style="font-size:0.85rem;">Try a different search term</p></div>';
        return;
    }
    grid.innerHTML = filteredProducts.map((product, index) => {
        const def = product.durations[0];
        let durationBadge = '';
        let unavailableBadge = '';
        let cardClass = '';
        
        // Check if product is unavailable
        if (product.available === false) {
            cardClass = ' unavailable';
            unavailableBadge = '<span class="unavailable-badge">🚫 Unavailable</span>';
        } else if (product.durationType === 'selectable') {
            durationBadge = '<span class="duration-badge">📅 1m • 3m • 6m • 12m</span>';
        } else if (product.durationType === 'none') {
            durationBadge = '<span class="no-duration-badge">⚡ No duration</span>';
        }
        
        return `
        <a href="${product.available === false ? '#' : 'product.html?id=' + product.id}" 
           class="product-card${cardClass}" 
           ${product.available !== false ? `onclick="saveProductData('${product.id}')"` : ''} 
           style="animation-delay:${index * 0.05}s">
            <span class="product-icon">${product.icon}</span>
            <span class="product-category-tag">${product.category}</span>
            <h3>${product.name}</h3>
            <p class="description">${product.description}</p>
            ${unavailableBadge}
            ${durationBadge}
            <div class="price-container">
                <span class="current-price">$${def.price}</span>
                <span class="old-price">$${def.oldPrice}</span>
                <span class="discount-badge">-${def.discount}</span>
            </div>
            <p class="price-period">${def.label}</p>
            <span class="hover-cta">${product.available === false ? '🔒 Unavailable' : 'View Details →'}</span>
        </a>`;
    }).join('');
}
function saveProductData(productId) {
    const product = products.find(p => p.id === productId);
    if (product) localStorage.setItem('currentProduct', JSON.stringify(product));
}

// =============================================
// SEARCH
// =============================================
document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('searchInput');
    const searchClear = document.getElementById('searchClear');
    if (searchInput) {
        searchInput.addEventListener('input', function() {
            const query = this.value.toLowerCase().trim();
            if (searchClear) searchClear.classList.toggle('visible', query.length > 0);
            if (query === '') { renderProductCards(products); return; }
            const filtered = products.filter(p =>
                p.name.toLowerCase().includes(query) ||
                p.category.toLowerCase().includes(query) ||
                p.description.toLowerCase().includes(query) ||
                p.features.some(f => f.toLowerCase().includes(query))
            );
            renderProductCards(filtered);
        });
        if (searchClear) {
            searchClear.addEventListener('click', () => {
                searchInput.value = '';
                searchClear.classList.remove('visible');
                renderProductCards(products);
                searchInput.focus();
            });
        }
    }
    if (document.getElementById('productsGrid')) renderProductCards();
});
function clearSearch() {
    const searchInput = document.getElementById('searchInput');
    const searchClear = document.getElementById('searchClear');
    if (searchInput) { searchInput.value = ''; searchInput.focus(); }
    if (searchClear) searchClear.classList.remove('visible');
    renderProductCards(products);
}

// =============================================
// PRODUCT DETAIL PAGE
// =============================================
function renderProductDetail() {
    const detailContainer = document.getElementById('productDetail');
    if (!detailContainer) return;

    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');
    
    let product = null;
    
    // Try localStorage
    const storedProduct = localStorage.getItem('currentProduct');
    if (storedProduct) {
        const parsed = JSON.parse(storedProduct);
        if (parsed.id === productId) {
            product = parsed;
        }
    }
    
    // Fallback
    if (!product && productId) {
        product = products.find(p => p.id === productId);
    }
    
    if (!product) {
        product = products[0];
    }

    document.title = `${product.name} - Shift`;

    // CHECK IF PRODUCT IS UNAVAILABLE
    if (product.available === false) {
        detailContainer.innerHTML = `
            <div style="text-align:center;padding:4rem 1rem;">
                <div style="font-size:5rem;margin-bottom:1rem;">🚫</div>
                <h1 style="font-size:2rem;color:var(--red);margin-bottom:1rem;">Currently Unavailable</h1>
                <p style="color:rgba(242,241,238,0.5);margin-bottom:2rem;">${product.name} is temporarily out of stock. Check back soon!</p>
                <a href="index.html" class="btn btn-primary">← Back to Products</a>
            </div>
        `;
        return;
    }

    const def = product.durations[0];

    // Build duration selector HTML
    let durationSelectorHTML = '';
    if (product.durationType === 'selectable') {
        durationSelectorHTML = `
        <div class="duration-selector">
            ${product.durations.map((d, i) => `
                <button class="duration-btn ${i === 0 ? 'active' : ''}" onclick="selectDuration(this, '${d.price}', '${d.oldPrice}', '${d.discount}', '${d.label}')">
                    ${d.label}
                    <span class="dur-price">$${d.price}</span>
                    <span class="dur-save">Save ${d.discount}</span>
                </button>
            `).join('')}
        </div>`;
    } else if (product.durationType === 'none') {
        durationSelectorHTML = '<p style="text-align:center;color:rgba(242,241,238,0.4);margin-bottom:1rem;">⚡ Service - No duration</p>';
    }

    const specsHTML = Object.entries(product.specs).map(([key, value]) => `
        <div class="spec-item"><div class="spec-icon">${key.split(' ')[0]}</div><div class="spec-text"><strong>${key.split(' ').slice(1).join(' ')}</strong><span>${value}</span></div></div>
    `).join('');
    const featuresHTML = product.features.map(f => `<li>${f}</li>`).join('');

    detailContainer.innerHTML = `
        <div class="breadcrumb">
            <a href="index.html">Home</a><span class="separator">›</span>
            <a href="index.html#products">Products</a><span class="separator">›</span>
            <span>${product.name}</span>
        </div>
        <div class="product-header">
            <div class="product-icon-large">${product.icon}</div>
            <div class="product-info">
                <span class="product-category-tag">${product.category}</span>
                <h1>${product.name}</h1>
                <p class="tagline">${product.tagline}</p>
                <p style="color:rgba(242,241,238,0.6);margin-bottom:1.2rem;font-size:0.9rem;">${product.description}</p>
                ${durationSelectorHTML}
                <div class="price-box">
                    <span class="discount-badge" id="dynamicDiscount">SAVE ${def.discount}</span>
                    <div class="old-price" id="dynamicOldPrice">$${def.oldPrice}</div>
                    <div class="current-price" id="dynamicCurrentPrice">$${def.price}</div>
                    <span class="period">${def.label}</span>
                </div>
            </div>
        </div>
        <h2 style="font-size:1.3rem;margin-bottom:1rem;">📋 Specifications</h2>
        <div class="specs-grid">${specsHTML}</div>
        <h2 style="font-size:1.3rem;margin-bottom:1rem;">✅ What's Included</h2>
        <ul class="features-list">${featuresHTML}</ul>
        <div class="cta-box">
            <h2>Get ${product.name} Now</h2>
            <p>Instant delivery via WhatsApp. ${product.warranty} included.</p>
            <button class="btn-get-now" id="ctaButton" data-price="${def.price}" data-duration="${def.label}" onclick="openWhatsApp('${product.name}', this.getAttribute('data-price'), this.getAttribute('data-duration'))">
                💬 Get on WhatsApp - $${def.price} (${def.label})
            </button>
            <p class="guarantee-text">🔒 ${product.warranty} • ${product.delivery} • ${product.support}</p>
        </div>
        <div style="text-align:center;margin-bottom:2rem;">
            <a href="index.html#products" class="btn-back">← Back to All Products</a>
        </div>
    `;
}
document.addEventListener('DOMContentLoaded', () => {
    if (window.location.pathname.includes('product.html')) renderProductDetail();
});

// =============================================
// SMOOTH SCROLL
// =============================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href === '#') return;
        const target = document.querySelector(href);
        if (target) {
            e.preventDefault();
            const position = target.getBoundingClientRect().top + window.pageYOffset - 70;
            window.scrollTo({ top: position, behavior: 'smooth' });
        }
    });
});

console.log('🚀 Shift Ready | 📱 WhatsApp:', WHATSAPP_NUMBER, '| 📦 Products:', products.length);