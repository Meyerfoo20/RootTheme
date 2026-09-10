
    const BASE_LIGHT_BG = {
      '--bg-main': '#f8f6f0',
      '--bg-alt': '#eee8dc',
      '--bg-card': '#ffffff',
      '--bg-glass': 'rgba(248, 246, 240, 0.82)',
      '--text-main': '#181c19',
      '--text-muted': '#56615a',
      '--border-color': '#ded8cb',
      '--shadow-elevated': '0 12px 32px rgba(0, 0, 0, 0.05), 0 2px 6px rgba(0, 0, 0, 0.02)',
      '--btn-text': '#ffffff'
    };

    const BASE_DARK_BG = {
      '--bg-main': '#0a0c0b',
      '--bg-alt': '#141816',
      '--bg-card': '#1c221e',
      '--bg-glass': 'rgba(10, 12, 11, 0.82)',
      '--text-main': '#f2f5f3',
      '--text-muted': '#8a968e',
      '--border-color': '#2a332d',
      '--shadow-elevated': '0 16px 40px rgba(0, 0, 0, 0.4)',
      '--btn-text': '#ffffff'
    };

    let baseThemes = [
      {
        id: '01-forest-green',
        name: '01. Skogsgrön',
        desc: 'Djup skogsgrön i light mode. Blir ljus mint/smaragdgrön i glow mode.',
        keywords: ['skog', 'grön', 'natur', 'miljö', 'lugn', 'träd', 'eko', 'moss'],
        light: { '--bg-footer': '#152c20', '--accent-main': '#1b3b2b', '--accent-hover': '#29543e', '--accent-light': '#e3ebd9', '--accent-pop': '#34d399' },
        darkGlow: { '--bg-footer': '#07140e', '--accent-main': '#10b981', '--accent-hover': '#34d399', '--accent-light': '#10b98125', '--accent-pop': '#6ee7b7', '--btn-text': '#041d14' }
      },
      {
        id: '02-ocean-blue',
        name: '02. Marinblå & Cyan',
        desc: 'Mörk marinblå som transformeras till en ljus, lysande cyanblå.',
        keywords: ['blå', 'hav', 'vatten', 'ocean', 'marin', 'cyan', 'is', 'teknik'],
        light: { '--bg-footer': '#0f2338', '--accent-main': '#123250', '--accent-hover': '#1d4872', '--accent-light': '#dbe8f5', '--accent-pop': '#38bdf8' },
        darkGlow: { '--bg-footer': '#061321', '--accent-main': '#38bdf8', '--accent-hover': '#7dd3fc', '--accent-light': '#38bdf825', '--accent-pop': '#a5f3fc', '--btn-text': '#031726' }
      },
      {
        id: '03-terracotta',
        name: '03. Terracotta & Korall',
        desc: 'Mörkbrun/röd jordton som blir en varm och ljus korallorange.',
        keywords: ['orange', 'korall', 'varm', 'jord', 'terracotta', 'sol', 'sommar', 'röd'],
        light: { '--bg-footer': '#331610', '--accent-main': '#5c2217', '--accent-hover': '#823324', '--accent-light': '#f7e7e4', '--accent-pop': '#fb923c' },
        darkGlow: { '--bg-footer': '#170906', '--accent-main': '#fb923c', '--accent-hover': '#fdba74', '--accent-light': '#fb923c25', '--accent-pop': '#fed7aa', '--btn-text': '#1f0903' }
      },
      {
        id: '04-plum-purple',
        name: '04. Plommon & Magenta',
        desc: 'Mörklila plommonaccent som lyfts till en klar neon-lila/magenta.',
        keywords: ['lila', 'purple', 'magenta', 'plommon', 'neon', 'mysterium', 'kreativ', 'chatt'],
        light: { '--bg-footer': '#24122b', '--accent-main': '#421a4f', '--accent-hover': '#5e2770', '--accent-light': '#f1e4f5', '--accent-pop': '#c084fc' },
        darkGlow: { '--bg-footer': '#120717', '--accent-main': '#c084fc', '--accent-hover': '#e879f9', '--accent-light': '#c084fc25', '--accent-pop': '#f0abfc', '--btn-text': '#1a0526' }
      },
      {
        id: '05-amber-gold',
        name: '05. Bärnsten & Guld',
        desc: 'Mörk mässing som blir till ett varmt, strålande guldgult glow.',
        keywords: ['guld', 'gul', 'bärnsten', 'lyx', 'exklusiv', 'varm', 'sol', 'mässing'],
        light: { '--bg-footer': '#2b1f07', '--accent-main': '#523a0b', '--accent-hover': '#735212', '--accent-light': '#f5edd8', '--accent-pop': '#f59e0b' },
        darkGlow: { '--bg-footer': '#140e02', '--accent-main': '#f59e0b', '--accent-hover': '#fbbf24', '--accent-light': '#f59e0b25', '--accent-pop': '#fde047', '--btn-text': '#211300' }
      },
      {
        id: '06-deep-teal',
        name: '06. Djuphavs Teal',
        desc: 'Mörk turkosgrön som transformeras till en klar och ljus teal.',
        keywords: ['teal', 'turkos', 'vatten', 'djup', 'modern', 'ren', 'harmonisk'],
        light: { '--bg-footer': '#082623', '--accent-main': '#0d3d38', '--accent-hover': '#165750', '--accent-light': '#daf2f0', '--accent-pop': '#14b8a6' },
        darkGlow: { '--bg-footer': '#031210', '--accent-main': '#14b8a6', '--accent-hover': '#2dd4bf', '--accent-light': '#14b8a625', '--accent-pop': '#5eead4', '--btn-text': '#021a17' }
      },
      {
        id: '07-burgundy-wine',
        name: '07. Vinröd & Bordeaux',
        desc: 'Mörk bordeauxröd som blir till en klar och ljus rosa-röd ton.',
        keywords: ['röd', 'vinröd', 'rosa', 'bordeaux', 'passion', 'elegans', 'mörk'],
        light: { '--bg-footer': '#2b0910', '--accent-main': '#4a111c', '--accent-hover': '#691a29', '--accent-light': '#f5e4e7', '--accent-pop': '#f43f5e' },
        darkGlow: { '--bg-footer': '#140306', '--accent-main': '#f43f5e', '--accent-hover': '#fb7185', '--accent-light': '#f43f5e25', '--accent-pop': '#fda4af', '--btn-text': '#240208' }
      },
      {
        id: '08-sage-olive',
        name: '08. Salvia & Oliv',
        desc: 'Mörk olivgrön som blir till en mjuk och ljus salviagrön.',
        keywords: ['salvia', 'oliv', 'grön', 'soft', 'mjuk', 'harmonisk', 'lugn'],
        light: { '--bg-footer': '#1c2417', '--accent-main': '#2d3b25', '--accent-hover': '#415435', '--accent-light': '#e6ebd8', '--accent-pop': '#84cc16' },
        darkGlow: { '--bg-footer': '#0c120a', '--accent-main': '#a3e635', '--accent-hover': '#bef264', '--accent-light': '#a3e63525', '--accent-pop': '#d9f99d', '--btn-text': '#101f01' }
      },
      {
        id: '09-espresso-brown',
        name: '09. Kaffe & Kanel',
        desc: 'Mörk espressobrun som lyfts till en varm, ljus bärnstensbrun.',
        keywords: ['brun', 'kaffe', 'espresso', 'kanel', 'varm', 'mysig', 'trä'],
        light: { '--bg-footer': '#211612', '--accent-main': '#3b2720', '--accent-hover': '#54382e', '--accent-light': '#eee5e0', '--accent-pop': '#d97706' },
        darkGlow: { '--bg-footer': '#120b08', '--accent-main': '#fb923c', '--accent-hover': '#fdbA74', '--accent-light': '#fb923c25', '--accent-pop': '#fed7aa', '--btn-text': '#1f0a00' }
      },
      {
        id: '10-charcoal-ink',
        name: '10. Grafit & Kol',
        desc: 'Mörk grafitgrå som i glow mode får en ljus silver/isblå brytning.',
        keywords: ['grå', 'grafit', 'mono', 'minimalistisk', 'svart', 'kod', 'stilren', 'neutral', 'vit'],
        light: { '--bg-footer': '#111315', '--accent-main': '-1f2428', '--accent-main': '#1f2428', '--accent-hover': '#323a40', '--accent-light': '#e3e7ea', '--accent-pop': '#38bdf8' },
        darkGlow: { '--bg-footer': '#080a0b', '--accent-main': '#e2e8f0', '--accent-hover': '#f1f5f9', '--accent-light': '#e2e8f025', '--accent-pop': '#38bdf8', '--btn-text': '#0f172a' }
      },
      {
        id: '11-nordic-cobalt',
        name: '11. Kobolt & Isblå',
        desc: 'Mörk koboltblå som förvandlas till en ljus och intensiv isblå.',
        keywords: ['kobolt', 'blå', 'nordisk', 'is', 'kall', 'ljusblå', 'teknik'],
        light: { '--bg-footer': '#0b192e', '--accent-main': '#17335c', '--accent-hover': '#244b82', '--accent-light': '#e0e9f5', '--accent-pop': '#60a5fa' },
        darkGlow: { '--bg-footer': '#040d1a', '--accent-main': '#60a5fa', '--accent-hover': '#93c5fd', '--accent-light': '#60a5fa25', '--accent-pop': '#bfdbfe', '--btn-text': '#021329' }
      },
      {
        id: '12-emerald-gold',
        name: '12. Smaragd & Guld',
        desc: 'Djup smaragdgrön som i glow mode transformeras till en ljus guldgul.',
        keywords: ['smaragd', 'guld', 'ädelsten', 'grön', 'lyx', 'rik', 'stark', 'varm'],
        light: { '--bg-footer': '#092419', '--accent-main': '#0f402d', '--accent-hover': '#195e43', '--accent-light': '#dcf2e9', '--accent-pop': '#facc15' },
        darkGlow: { '--bg-footer': '#03120c', '--accent-main': '#facc15', '--accent-hover': '#fde047', '--accent-light': '#facc1525', '--accent-pop': '#fef08a', '--btn-text': '#1f1900' }
      }
    ];

    let isGlobalDarkMode = false;
    let isGlowActive = false;
    let currentTheme = null;
    let allThemesMap = new Map();
    let lastAIGeneratedThemes = [];

    function renderAllThemes() {
      const grid = document.getElementById('themes-grid');
      grid.innerHTML = '';
      // VIKTIGT: Rensa inte hela allThemesMap här om vi vill bevara de genererade AI-korten som ligger i griden, 
      // men vi fyller på med bas-teman först:
      baseThemes.forEach(item => {
        let themeObj;
        
        if (item.isCustomAI) {
          const bgBase = isGlobalDarkMode ? BASE_DARK_BG : BASE_LIGHT_BG;
          const vars = {
            ...bgBase,
            '--bg-footer': isGlobalDarkMode ? '#050706' : item.rawColors.bgFooter,
            '--accent-main': item.rawColors.accentMain,
            '--accent-hover': item.rawColors.accentHover,
            '--accent-light': isGlobalDarkMode ? item.rawColors.accentMain + '33' : item.rawColors.accentLight,
            '--accent-pop': item.rawColors.accentPop
          };
          themeObj = {
            id: item.id,
            name: item.name,
            mode: isGlobalDarkMode ? 'dark' : 'light',
            desc: item.desc,
            vars: vars
          };
        } else {
          const bgBase = isGlobalDarkMode ? BASE_DARK_BG : BASE_LIGHT_BG;
          let accents = { ...item.light };
          if (isGlobalDarkMode) {
            if (isGlowActive) {
              accents = { ...item.darkGlow };
            } else {
              accents['--bg-footer'] = '#050706';
              accents['--accent-light'] = accents['--accent-main'] + '44';
            }
          }

          const fullVars = { ...bgBase, ...accents };
          themeObj = {
            id: item.id,
            name: item.name,
            mode: isGlobalDarkMode ? (isGlowActive ? 'dark (Glow)' : 'dark') : 'light',
            desc: item.desc,
            vars: fullVars
          };
        }

        allThemesMap.set(themeObj.id, themeObj);
        grid.appendChild(createThemeCard(themeObj));
      });

      document.getElementById('section-title').innerText = isGlobalDarkMode ? `Mörka Teman (${baseThemes.length} st)` : `Ljusa Teman (${baseThemes.length} st)`;

      if (!currentTheme || !allThemesMap.has(currentTheme.id)) {
        applyTheme(baseThemes[0].id);
      } else {
        applyTheme(currentTheme.id);
      }
    }

    function createThemeCard(theme) {
      const card = document.createElement('div');
      card.className = 'theme-card';
      
      const colors = [
        theme.vars['--bg-main'], 
        theme.vars['--bg-alt'], 
        theme.vars['--accent-main'], 
        theme.vars['--accent-pop']
      ];
      
      const swatchesHTML = colors.map(c => 
        `<div class="swatch" style="background-color: ${c};" title="${c}"></div>`
      ).join('');

      const cssCode = `:root {\n${Object.entries(theme.vars).map(([k, v]) => `    ${k}: ${v};`).join('\n')}\n}`;

      card.innerHTML = `
        <div>
          <h3>${theme.name}</h3>
          <p>${theme.desc}</p>
          <div class="color-swatches">${swatchesHTML}</div>
        </div>
        <div>
          <div class="theme-actions">
            <button class="btn" onclick="applyTheme('${theme.id}')">Aktivera</button>
            <button class="btn btn-secondary" onclick="toggleCode('${theme.id}')">Kod</button>
          </div>
          <div class="code-box" id="code-${theme.id}">${cssCode}</div>
        </div>
      `;
      return card;
    }

    function applyTheme(themeId) {
      const theme = allThemesMap.get(themeId);
      if (!theme) return;

      currentTheme = theme;
      const root = document.documentElement;

      Object.entries(theme.vars).forEach(([prop, val]) => {
        root.style.setProperty(prop, val);
      });

      document.getElementById('current-theme-name').innerText = `${theme.name} (${theme.mode.toUpperCase()})`;
    }

    function toggleGlobalDarkMode(forceState = null) {
      if (forceState !== null) {
        isGlobalDarkMode = forceState;
      } else {
        isGlobalDarkMode = !isGlobalDarkMode;
      }

      document.getElementById('mode-toggle').checked = isGlobalDarkMode;

      renderAllThemes();
      
      // Uppdatera även de genererade AI-korten i den separata ytan så att de behålls och anpassas till mörkläge
      if (lastAIGeneratedThemes.length > 0) {
        renderAIResultsGrid(lastAIGeneratedThemes);
      }
    }

    function toggleGlowMode(forceState = null) {
      if (forceState !== null) {
        isGlowActive = forceState;
      } else {
        isGlowActive = !isGlowActive;
      }

      const glowBtn = document.getElementById('glow-btn');
      
      if (isGlowActive) {
        document.body.classList.add('glow-active');
        glowBtn.classList.add('active');
      } else {
        document.body.classList.remove('glow-active');
        glowBtn.classList.remove('active');
      }

      renderAllThemes();
    }

    function toggleCode(themeId) {
      const codeBox = document.getElementById(`code-${themeId}`);
      if (codeBox) codeBox.classList.toggle('active');
    }

    function copyActiveCSS() {
      const cssCode = `:root {\n${Object.entries(currentTheme.vars).map(([k, v]) => `    ${k}: ${v};`).join('\n')}\n}`;
      navigator.clipboard.writeText(cssCode).then(() => showToast());
    }

    function showToast(text = "CSS Root-variabler kopierade till urklipp!") {
      const toast = document.getElementById('toast');
      toast.innerText = text;
      toast.classList.add('show');
      setTimeout(() => toast.classList.remove('show'), 2200);
    }

    function saveAIThemeToGallery(index) {
      const aiThemeData = lastAIGeneratedThemes[index];
      if (!aiThemeData) return;

      const newThemeItem = {
        id: `saved-ai-${Date.now()}-${index}`,
        name: aiThemeData.name,
        desc: aiThemeData.desc,
        isCustomAI: true,
        rawColors: {
          bgMain: aiThemeData.bgMain,
          bgAlt: aiThemeData.bgAlt,
          bgCard: aiThemeData.bgCard,
          textMain: aiThemeData.textMain,
          textMuted: aiThemeData.textMuted,
          borderColor: aiThemeData.borderColor,
          bgFooter: aiThemeData.bgFooter,
          accentMain: aiThemeData.accentMain,
          accentHover: aiThemeData.accentHover,
          accentLight: aiThemeData.accentLight,
          accentPop: aiThemeData.accentPop
        }
      };

      baseThemes.push(newThemeItem);
      renderAllThemes();
      showToast(`Sparade "${aiThemeData.name}" till galleriet!`);
    }

    function renderAIResultsGrid(themesArray) {
      const resultsGrid = document.getElementById('ai-results-grid');
      resultsGrid.innerHTML = '';
      resultsGrid.style.display = 'grid';

      themesArray.forEach((item, index) => {
        const bgMain = isGlobalDarkMode ? '#0a0c0b' : item.bgMain;
        const bgAlt = isGlobalDarkMode ? '#141816' : item.bgAlt;
        const bgCard = isGlobalDarkMode ? '#1c221e' : item.bgCard;
        const textMain = isGlobalDarkMode ? '#f2f5f3' : item.textMain;
        const textMuted = isGlobalDarkMode ? '#8a968e' : item.textMuted;
        const borderColor = isGlobalDarkMode ? '#2a332d' : item.borderColor;

        const themeVars = {
          '--bg-main': bgMain,
          '--bg-alt': bgAlt,
          '--bg-card': bgCard,
          '--bg-glass': bgMain + 'CC',
          '--text-main': textMain,
          '--text-muted': textMuted,
          '--border-color': borderColor,
          '--shadow-elevated': isGlobalDarkMode ? '0 16px 40px rgba(0, 0, 0, 0.4)' : '0 12px 32px rgba(0, 0, 0, 0.08)',
          '--btn-text': '#ffffff',
          '--bg-footer': item.bgFooter,
          '--accent-main': item.accentMain,
          '--accent-hover': item.accentHover,
          '--accent-light': isGlobalDarkMode ? item.accentMain + '33' : item.accentLight,
          '--accent-pop': item.accentPop
        };

        const themeObj = {
          id: `ai-gen-${index}`,
          name: item.name,
          mode: isGlobalDarkMode ? 'AI-Genererad (Dark)' : 'AI-Genererad (Light)',
          desc: item.desc,
          vars: themeVars
        };

        // VIKTIGT: Registrera ALLTID i gemensamma mappen så att knappar fungerar oavsett vad användaren klickar på emellan
        allThemesMap.set(themeObj.id, themeObj);

        const card = document.createElement('div');
        card.className = 'theme-card';
        
        const colors = [bgMain, bgAlt, item.accentMain, item.accentPop];
        const swatchesHTML = colors.map(c => `<div class="swatch" style="background-color: ${c};" title="${c}"></div>`).join('');
        const cssCode = `:root {\n${Object.entries(themeVars).map(([k, v]) => `    ${k}: ${v};`).join('\n')}\n}`;

        card.innerHTML = `
          <div>
            <h3>${item.name}</h3>
            <p>${item.desc}</p>
            <div class="color-swatches">${swatchesHTML}</div>
          </div>
          <div>
            <div class="theme-actions" style="margin-bottom: 0.5rem;">
              <button class="btn" onclick="applyTheme('${themeObj.id}')">Aktivera</button>
              <button class="btn btn-secondary" onclick="toggleCode('${themeObj.id}')">Kod</button>
            </div>
            <button class="btn btn-secondary" style="width: 100%; font-size: 0.8rem;" onclick="saveAIThemeToGallery(${index})">Spara bland mallar</button>
            <div class="code-box" id="code-${themeObj.id}">${cssCode}</div>
          </div>
        `;
        resultsGrid.appendChild(card);
      });
    }

    // AI-generering via Groq API
    async function generateAIThemes() {
      const promptRaw = document.getElementById('ai-prompt').value.trim();
      if (!promptRaw) {
        alert("Vänligen beskriv önskad känsla eller färg först!");
        return;
      }

      const resultsGrid = document.getElementById('ai-results-grid');
      resultsGrid.style.display = 'grid';
      resultsGrid.innerHTML = '<p style="grid-column: 1/-1; text-align:center; padding: 2rem; color: var(--text-muted);">AI analyserar din prompt och skapar 3 nya färgpaletter...</p>';

      const systemPrompt = `Du är en expert på webbdesign och CSS-temakonstruktion. 
Användaren kommer att skriva en prompt om en känsla, stil eller färg. Analysera den noggrant och skapa EXAKT 3 stycken nya, unika färgpaletter anpassade för en modern webbsida.
Svara ENDAST med ett giltigt JSON-objekt som följer detta schema:
{
  "themes": [
    {
      "name": "01. [Kreativt namn]",
      "desc": "[Kort beskrivning på svenska]",
      "bgMain": "#HEX",
      "bgAlt": "#HEX",
      "bgCard": "#HEX",
      "textMain": "#HEX",
      "textMuted": "#HEX",
      "borderColor": "#HEX",
      "bgFooter": "#HEX",
      "accentMain": "#HEX",
      "accentHover": "#HEX",
      "accentLight": "#HEX",
      "accentPop": "#HEX"
    },
    {
      "name": "02. [Kreativt namn]",
      "desc": "[Kort beskrivning på svenska]",
      "bgMain": "#HEX",
      "bgAlt": "#HEX",
      "bgCard": "#HEX",
      "textMain": "#HEX",
      "textMuted": "#HEX",
      "borderColor": "#HEX",
      "bgFooter": "#HEX",
      "accentMain": "#HEX",
      "accentHover": "#HEX",
      "accentLight": "#HEX",
      "accentPop": "#HEX"
    },
    {
      "name": "03. [Kreativt namn]",
      "desc": "[Kort beskrivning på svenska]",
      "bgMain": "#HEX",
      "bgAlt": "#HEX",
      "bgCard": "#HEX",
      "textMain": "#HEX",
      "textMuted": "#HEX",
      "borderColor": "#HEX",
      "bgFooter": "#HEX",
      "accentMain": "#HEX",
      "accentHover": "#HEX",
      "accentLight": "#HEX",
      "accentPop": "#HEX"
    }
  ]
}`;

      try {
        const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${GROQ_API_KEY}`
          },
          body: JSON.stringify({
            model: "openai/gpt-oss-20b",
            messages: [
              { role: "system", content: systemPrompt },
              { role: "user", content: promptRaw + " (Kom ihåg: Skapa EXAKT 3 st unika färgpaletter)" }
            ],
            temperature: 0.7,
            response_format: { type: "json_object" }
          })
        });

        if (!response.ok) {
          const errData = await response.text();
          console.error("Groq API Error Details:", errData);
          throw new Error("Kunde inte nå Groq API (Felkod: " + response.status + ")");
        }

        const data = await response.json();
        const contentStr = data.choices[0].message.content;
        const parsedData = JSON.parse(contentStr);

        lastAIGeneratedThemes = parsedData.themes;
        renderAIResultsGrid(lastAIGeneratedThemes);

        applyTheme('ai-gen-0');

      } catch (error) {
        console.error("AI-generering misslyckades:", error);
        resultsGrid.innerHTML = `<p style="grid-column: 1/-1; text-align:center; color: #f43f5e; padding: 2rem;">Ett fel uppstod vid kontakt med Groq AI. Se konsolen för detaljer.</p>`;
      }
    }

    window.onload = () => {
      renderAllThemes();
    };
