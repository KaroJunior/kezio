// ============================================================
// Kezio — Tool Catalogue Data
// All tool information lives here, separate from behaviour.
// ============================================================

const tools = [
    {
        id: 'cvdraft',
        name: 'CvDraft',
        type: 'telegram',
        platformLabel: 'Telegram Bot',
        url: 'https://t.me/cvdraft_bot',
        description: 'Build ATS-friendly Harvard-style CVs in minutes.',
        icon: 'assets/icons/cvdraft-bot.jpeg',
        renderStatusUrl: 'https://cvdraft-bot.onrender.com',
        keywords: [
            'CV', 'resume', 'CV builder', 'resume builder',
            'ATS CV', 'ATS resume', 'professional CV',
            'Harvard CV', 'Harvard style CV', 'create CV',
            'create resume', 'bot', 'telegram bot', 'telegram'
        ],
        troubleshooting: {
            title: 'Bot not responding?',
            explanation: 'This bot is hosted on a free server and may temporarily go to sleep after inactivity. If the bot doesn\'t respond, visit its server status page and wait for the page to fully load. Then return to Telegram and try again.',
            linkText: 'Check server status'
        }
    },
    {
        id: 'deslop',
        name: 'DeSlop',
        type: 'telegram',
        platformLabel: 'Telegram Bot',
        url: 'https://t.me/deslopbot',
        description: 'Humanize AI-written text and check AI-likeness with simple rule-based tools.',
        icon: 'assets/icons/deslop-bot.jpeg',
        renderStatusUrl: 'https://deslop-bot.onrender.com',
        keywords: [
            'AI text', 'AI writing', 'humanize text', 'humanizer',
            'AI humanizer', 'AI detector', 'AI likeness',
            'check AI text', 'make AI text natural',
            'remove AI writing patterns', 'AI generated text',
            'bot', 'telegram bot', 'telegram'
        ],
        troubleshooting: {
            title: 'Bot not responding?',
            explanation: 'This bot is hosted on a free server and may temporarily go to sleep after inactivity. If the bot doesn\'t respond, visit its server status page and wait for the page to fully load. Then return to Telegram and try again.',
            linkText: 'Check server status'
        }
    },
    {
        id: 'getvideofast',
        name: 'Get Video Fast Bot',
        type: 'telegram',
        platformLabel: 'Telegram Bot',
        url: 'https://t.me/getvideofastbot',
        description: 'Download public short-form videos from supported platforms. Send a link and receive the video.',
        icon: 'assets/icons/gvf-bot.jpeg',
        renderStatusUrl: 'https://getvideofastbot.onrender.com',
        keywords: [
            'video downloader', 'download video', 'TikTok downloader',
            'Instagram downloader', 'Facebook downloader',
            'X downloader', 'Twitter downloader',
            'social media downloader', 'video without watermark',
            'download TikTok', 'download Instagram video',
            'download Facebook video', 'download twitter video',  'download X video',
            'bot', 'telegram bot', 'telegram'
        ],
        troubleshooting: {
            title: 'Bot not responding?',
            explanation: 'This bot is hosted on a free server and may temporarily go to sleep after inactivity. If the bot doesn\'t respond, visit its server status page and wait for the page to fully load. Then return to Telegram and try again.',
            linkText: 'Check server status'
        }
    },
    {
        id: 'password-generator',
        name: 'Password Generator',
        type: 'web',
        platformLabel: 'Web',
        url: 'https://karojunior.github.io/dual-themes-password-generator/',
        description: 'Generate secure passwords and check password strength.',
        icon: 'icon-lock', // Will be rendered as SVG
        keywords: [
            'password', 'password generator', 'secure password',
            'strong password', 'random password', 'password strength',
            'password checker', 'security', 'generate password', 'web', 'website', 'web tool'
        ],
        troubleshooting: null
    },
    {
        id: 'qr-generator',
        name: 'QR Code Generator',
        type: 'web',
        platformLabel: 'Web',
        url: 'https://karojunior.github.io/qr-code-generator/',
        description: 'Generate QR codes for links, text, and more.',
        icon: 'icon-qr', // Will be rendered as SVG
        keywords: [
            'QR', 'QR code', 'QR code generator', 'generate QR code',
            'create QR code', 'custom QR code', 'link QR code',
            'URL QR code', 'web', 'website', 'web tool'
        ],
        troubleshooting: null
    },
    {
        id: 'quickbg',
        name: 'Quick BG Bot',
        type: 'telegram',
        platformLabel: 'Telegram Bot',
        url: 'https://t.me/quickbgbot',
        description: 'Remove image backgrounds instantly. Send your image as a document instead of a photo.',
        icon: 'assets/icons/quickbg-bot.jpeg',
        renderStatusUrl: 'https://quickbgbot.onrender.com',
        keywords: [
            'background remover', 'remove background',
            'image background remover', 'photo background remover',
            'remove image background', 'transparent background',
            'background removal', 'bot', 'telegram bot', 'telegram'
        ],
        troubleshooting: {
            title: 'Bot not responding?',
            explanation: 'This bot is hosted on a free server and may temporarily go to sleep after inactivity. If the bot doesn\'t respond, visit its server status page and wait for the page to fully load. Then return to Telegram and try again.',
            linkText: 'Check server status'
        }
    },
    {
        id: 'dailydose',
        name: 'Daily Dose',
        type: 'web',
        platformLabel: 'Web',
        url: 'https://yourdailydose.netlify.app',
        description: 'Daily advice, motivational quotes, and inspiration to start your day.',
        icon: 'icon-inspire', // Will be rendered as SVG
        keywords: [
            'advice', 'daily advice', 'motivation',
            'motivational quotes', 'daily motivation', 'quotes',
            'inspirational quotes', 'life advice', 'daily quotes', 'web', 'website', 'web tool'
        ],
        troubleshooting: null
    }
];
