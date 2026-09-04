// ============================================================
// Kezio — Main Application
// Theme toggle, mobile navigation, tool rendering, search
// ============================================================

(function() {
    'use strict';

    // ---------- DOM refs ----------
    const toggleBtn = document.getElementById('themeToggle');
    const searchInput = document.getElementById('toolSearch');
    const clearBtn = document.getElementById('clearSearch');
    const toolsGrid = document.getElementById('toolsGrid');
    const resultCount = document.getElementById('resultCount');
    const header = document.querySelector('.site-header');

    // Mobile drawer refs
    const hamburgerBtn = document.getElementById('hamburgerBtn');
    const drawerOverlay = document.getElementById('mobileDrawerOverlay');
    const drawer = document.getElementById('mobileDrawer');
    const drawerClose = document.getElementById('drawerClose');
    const drawerLinks = document.querySelectorAll('.mobile-drawer-nav a');
    const mobileThemeToggle = document.getElementById('mobileThemeToggle');

    // ---------- Theme System ----------
    function getSystemTheme() {
        return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }

    function getStoredTheme() {
        return localStorage.getItem('kezio-theme');
    }

    function setTheme(theme) {
        if (theme !== 'dark' && theme !== 'light') return;
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('kezio-theme', theme);
        updateThemeIcons(theme);
        // Dispatch event for badge updates
        document.dispatchEvent(new CustomEvent('themeChanged'));
    }

    function toggleTheme() {
        const current = document.documentElement.getAttribute('data-theme') || 'light';
        const next = current === 'light' ? 'dark' : 'light';
        setTheme(next);
    }

    function updateThemeIcons(theme) {
        // Show the icon for the OPPOSITE theme (what you're switching TO)
        // Light mode active → show dark-mode icon (switch to dark)
        // Dark mode active → show light-mode icon (switch to light)
        const iconName = theme === 'light' 
            ? 'material-symbols-light:dark-mode-outline'
            : 'material-symbols-light:light-mode-outline';
        
        const label = theme === 'light' ? 'Dark' : 'Light';
        
        // Desktop toggle
        const desktopIcon = toggleBtn ? toggleBtn.querySelector('.theme-icon') : null;
        if (desktopIcon) {
            desktopIcon.setAttribute('icon', iconName);
        }
        
        // Mobile toggle
        const mobileIcon = mobileThemeToggle ? mobileThemeToggle.querySelector('.theme-icon') : null;
        if (mobileIcon) {
            mobileIcon.setAttribute('icon', iconName);
        }
        
        // Mobile label
        const mobileLabel = mobileThemeToggle ? mobileThemeToggle.querySelector('.theme-label') : null;
        if (mobileLabel) {
            mobileLabel.textContent = label;
        }
    }

    function initTheme() {
        const stored = getStoredTheme();
        let initial = stored || getSystemTheme();
        setTheme(initial);
        // Update badges after theme is set
        updateBadges();
    }

    // ---------- Featured Badges Theme Switching ----------
    function updateBadges() {
        const theme = document.documentElement.getAttribute('data-theme') || 'light';
        const isDark = theme === 'dark';
        
        document.querySelectorAll('.badge-img').forEach(img => {
            // For single-version badges, keep them visible
            if (img.classList.contains('badge-single')) {
                img.style.display = 'block';
                return;
            }
            
            // For light/dark badges, show/hide based on theme
            if (img.classList.contains('badge-light')) {
                img.style.display = isDark ? 'none' : 'block';
            } else if (img.classList.contains('badge-dark')) {
                img.style.display = isDark ? 'block' : 'none';
            }
        });
    }

    // ---------- Mobile Drawer ----------
    function openDrawer() {
        drawer.classList.add('open');
        drawerOverlay.classList.add('active');
        hamburgerBtn.classList.add('active');
        hamburgerBtn.setAttribute('aria-expanded', 'true');
        document.body.style.overflow = 'hidden';
        document.body.classList.add('drawer-open');
    }

    function closeDrawer() {
        drawer.classList.remove('open');
        drawerOverlay.classList.remove('active');
        hamburgerBtn.classList.remove('active');
        hamburgerBtn.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
        document.body.classList.remove('drawer-open');
    }

    function toggleDrawer() {
        if (drawer.classList.contains('open')) {
            closeDrawer();
        } else {
            openDrawer();
        }
    }

    // ---------- Header Auto-Hide on Scroll ----------
    let lastScrollY = window.scrollY;
    let ticking = false;
    let headerHidden = false;

    function handleScroll() {
        if (document.body.classList.contains('drawer-open')) {
            if (headerHidden) {
                showHeader();
            }
            return;
        }

        const currentScrollY = window.scrollY;
        const scrollThreshold = 10;

        if (currentScrollY < 10) {
            if (headerHidden) {
                showHeader();
            }
            lastScrollY = currentScrollY;
            return;
        }

        const scrollDiff = currentScrollY - lastScrollY;

        if (Math.abs(scrollDiff) < scrollThreshold) {
            return;
        }

        if (scrollDiff > 0 && currentScrollY > 100) {
            if (!headerHidden) {
                hideHeader();
            }
        } else if (scrollDiff < 0) {
            if (headerHidden) {
                showHeader();
            }
        }

        lastScrollY = currentScrollY;
    }

    function hideHeader() {
        if (!header) return;
        header.classList.add('header-hidden');
        headerHidden = true;
    }

    function showHeader() {
        if (!header) return;
        header.classList.remove('header-hidden');
        headerHidden = false;
    }

    function initScrollHandler() {
        window.addEventListener('scroll', function() {
            if (!ticking) {
                window.requestAnimationFrame(function() {
                    handleScroll();
                    ticking = false;
                });
                ticking = true;
            }
        });

        window.addEventListener('resize', function() {
            if (window.scrollY < 10) {
                showHeader();
            }
        });
    }

    // ---------- SVG Icons for Web Tools ----------
    function getWebIcon(iconType) {
        const icons = {
            'icon-lock': `<svg viewBox="0 0 24 24" width="48" height="48" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0110 0v4"/></svg>`,
            'icon-qr': `<svg viewBox="0 0 24 24" width="48" height="48" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="7" height="7" rx="1"/><rect x="15" y="2" width="7" height="7" rx="1"/><rect x="2" y="15" width="7" height="7" rx="1"/><path d="M15 15h1v4"/><path d="M15 19h4"/><path d="M19 15v4"/><path d="M11 2v3"/><path d="M11 19v3"/><path d="M2 11h3"/><path d="M19 11h3"/></svg>`,
            'icon-inspire': `<svg viewBox="0 0 24 24" width="48" height="48" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>`
        };
        return icons[iconType] || icons['icon-lock'];
    }

    // ---------- Tool Rendering ----------
    function renderTools(toolsToRender) {
        if (!toolsGrid) return;

        if (toolsToRender.length === 0) {
            toolsGrid.innerHTML = `
                <div class="empty-state">
                    <p class="empty-title">No tools found.</p>
                    <p class="empty-desc">We don't have a tool for that yet.</p>
                    <a href="contact.html?topic=tool-request" class="button button-primary">Suggest a tool</a>
                </div>
            `;
            return;
        }

        let html = '';
        toolsToRender.forEach(tool => {
            const isTelegram = tool.type === 'telegram';
            const iconHtml = tool.icon && tool.icon.startsWith('assets/') 
                ? `<img src="${tool.icon}" alt="${tool.name}" class="tool-icon-img" />`
                : `<div class="tool-icon-svg">${getWebIcon(tool.icon)}</div>`;

            let troubleshootingHtml = '';
            if (isTelegram && tool.troubleshooting) {
                troubleshootingHtml = `
                    <div class="troubleshooting">
                        <button class="troubleshooting-toggle" aria-expanded="false">
                            <span class="chevron">▸</span>
                            Troubleshooting
                        </button>
                        <div class="troubleshooting-content" hidden>
                            <p class="troubleshooting-title">${tool.troubleshooting.title}</p>
                            <p>${tool.troubleshooting.explanation}</p>
                            <a href="${tool.renderStatusUrl}" target="_blank" rel="noopener noreferrer" class="troubleshooting-link">${tool.troubleshooting.linkText} →</a>
                        </div>
                    </div>
                `;
            }

            html += `
                <div class="tool-card card" data-tool-id="${tool.id}">
                    <div class="tool-card-header">
                        <div class="tool-icon-wrapper">
                            ${iconHtml}
                        </div>
                        <div class="tool-meta">
                            <span class="tool-badge">${tool.platformLabel}</span>
                            <h3 class="tool-name">${tool.name}</h3>
                        </div>
                    </div>
                    <p class="tool-desc">${tool.description}</p>
                    <div class="tool-actions">
                        <a href="${tool.url}" target="_blank" rel="noopener noreferrer" class="button button-primary button-use-tool">Use Tool</a>
                        ${troubleshootingHtml}
                    </div>
                </div>
            `;
        });

        toolsGrid.innerHTML = html;

        document.querySelectorAll('.troubleshooting-toggle').forEach(btn => {
            btn.addEventListener('click', function(e) {
                e.stopPropagation();
                const content = this.nextElementSibling;
                const isOpen = content.hidden === false;
                content.hidden = isOpen;
                this.setAttribute('aria-expanded', !isOpen);
                const chevron = this.querySelector('.chevron');
                if (chevron) {
                    chevron.textContent = isOpen ? '▸' : '▾';
                }
            });
        });
    }

    // ---------- Search ----------
    function performSearch(query) {
        const searchTerm = query.trim().toLowerCase();
        
        if (!searchTerm) {
            renderTools(tools);
            if (resultCount) {
                resultCount.textContent = `${tools.length} tools`;
            }
            return;
        }

        const filtered = tools.filter(tool => {
            const nameMatch = tool.name.toLowerCase().includes(searchTerm);
            const descMatch = tool.description.toLowerCase().includes(searchTerm);
            const keywordMatch = tool.keywords.some(k => k.toLowerCase().includes(searchTerm));
            return nameMatch || descMatch || keywordMatch;
        });

        renderTools(filtered);

        if (resultCount) {
            const count = filtered.length;
            if (count === 0) {
                resultCount.textContent = 'No tools found';
            } else if (count === 1) {
                resultCount.textContent = '1 tool found';
            } else {
                resultCount.textContent = `${count} tools found`;
            }
        }
    }

    function clearSearch() {
        if (searchInput) {
            searchInput.value = '';
            performSearch('');
            if (clearBtn) {
                clearBtn.hidden = true;
            }
            searchInput.focus();
        }
    }

    function updateClearButton() {
        if (!clearBtn || !searchInput) return;
        const hasText = searchInput.value.trim().length > 0;
        clearBtn.hidden = !hasText;
    }

    // ---------- Contact Page Topic Preselect ----------
    function handleContactPreselect() {
        const urlParams = new URLSearchParams(window.location.search);
        const topic = urlParams.get('topic');
        const formTopic = document.getElementById('formTopic');
        if (topic && formTopic) {
            const options = formTopic.options;
            for (let i = 0; i < options.length; i++) {
                if (options[i].value === topic) {
                    options[i].selected = true;
                    break;
                }
            }
        }
    }

    // ---------- Thank You Page Countdown ----------
    function initCountdown() {
        const countdownElement = document.getElementById('countdownNumber');
        const barElement = document.getElementById('countdownBar');
        if (!countdownElement || !barElement) return;

        let seconds = 10;
        const totalSeconds = 10;
        barElement.style.width = '100%';

        const interval = setInterval(function() {
            seconds--;
            if (seconds > 0) {
                countdownElement.textContent = seconds;
                const percentage = (seconds / totalSeconds) * 100;
                barElement.style.width = percentage + '%';
            } else {
                clearInterval(interval);
                window.location.href = 'index.html';
            }
        }, 1000);
    }

    // ---------- Crypto Copy Functionality ----------
    function initCryptoCopy() {
        const copyButtons = document.querySelectorAll('.crypto-copy-btn');
        
        copyButtons.forEach(button => {
            button.addEventListener('click', async function() {
                const addressId = this.getAttribute('data-address-id');
                const currency = this.getAttribute('data-currency');
                const addressElement = document.getElementById(addressId);
                
                if (!addressElement) return;
                
                const address = addressElement.textContent.trim();
                
                try {
                    await navigator.clipboard.writeText(address);
                    
                    // Show success state
                    const originalText = this.querySelector('.copy-text');
                    if (originalText) {
                        const originalContent = originalText.textContent;
                        this.classList.add('copied');
                        originalText.textContent = 'Copied';
                        
                        // Reset after 2 seconds
                        setTimeout(() => {
                            this.classList.remove('copied');
                            originalText.textContent = originalContent;
                        }, 2000);
                    }
                } catch (error) {
                    // Fallback: prompt user to copy manually
                    const textArea = document.createElement('textarea');
                    textArea.value = address;
                    document.body.appendChild(textArea);
                    textArea.select();
                    try {
                        document.execCommand('copy');
                        // Show success state
                        const originalText = this.querySelector('.copy-text');
                        if (originalText) {
                            const originalContent = originalText.textContent;
                            this.classList.add('copied');
                            originalText.textContent = 'Copied';
                            
                            setTimeout(() => {
                                this.classList.remove('copied');
                                originalText.textContent = originalContent;
                            }, 2000);
                        }
                    } catch (fallbackError) {
                        // If both methods fail, alert the user
                        alert(`Please copy the ${currency} address manually:\n\n${address}`);
                    }
                    document.body.removeChild(textArea);
                }
            });
        });
    }

    // ---------- Init ----------
    function init() {
        // Theme
        initTheme();
        if (toggleBtn) {
            toggleBtn.addEventListener('click', toggleTheme);
        }
        if (mobileThemeToggle) {
            mobileThemeToggle.addEventListener('click', toggleTheme);
        }
        // Update badges when theme changes via custom event
        document.addEventListener('themeChanged', updateBadges);
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function(e) {
            if (!getStoredTheme()) {
                setTheme(e.matches ? 'dark' : 'light');
            }
        });

        // Mobile drawer
        if (hamburgerBtn) {
            hamburgerBtn.addEventListener('click', toggleDrawer);
        }
        if (drawerClose) {
            drawerClose.addEventListener('click', closeDrawer);
        }
        if (drawerOverlay) {
            drawerOverlay.addEventListener('click', closeDrawer);
        }
        drawerLinks.forEach(link => {
            link.addEventListener('click', closeDrawer);
        });

        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && drawer && drawer.classList.contains('open')) {
                closeDrawer();
            }
        });

        // Header scroll handler
        initScrollHandler();

        // Render tools (only on homepage)
        if (toolsGrid) {
            renderTools(tools);
            if (resultCount) {
                resultCount.textContent = `${tools.length} tools`;
            }
        }

        // Search (only on homepage)
        if (searchInput) {
            searchInput.addEventListener('input', function() {
                performSearch(this.value);
                updateClearButton();
            });
            
            if (clearBtn) {
                clearBtn.addEventListener('click', clearSearch);
            }
            
            updateClearButton();
        }

        // Contact page preselect
        handleContactPreselect();

        // Thank you page countdown
        initCountdown();

        // Crypto copy functionality (support page)
        initCryptoCopy();

        // Ensure header is visible at top of page after load
        if (window.scrollY < 10) {
            showHeader();
        }
    }

    // ---------- Start ----------
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

})();