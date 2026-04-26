# Nexus Dev - Futuristic Portfolio (GEMINI.md)

Yeh project Ahsan Zahoor ka ek futuristic personal portfolio hai, jo modern web technologies aur AI integration ke saath banaya gaya hai. Iska design "cyberpunk" aur "high-tech terminal" theme par mabni hai.

## Project Overview

*   **Purpose:** Personal branding aur professional projects ko showcase karna.
*   **Main Technologies:**
    *   **Frontend:** React 19 (TypeScript)
    *   **Build Tool:** Vite
    *   **Styling:** Custom CSS aur futuristic UI elements (Material Icons ka use bhi hai).
    *   **AI Assistant:** Google Gemini API (`gemini-3-flash-preview`) ka integration.
    *   **Contact System:** EmailJS ke zariye directly emails bhejne ki functionality.
*   **Key Components:**
    *   `Navbar`: Navigation links aur system status display.
    *   `Hero`: Main introduction aur call-to-action.
    *   `SkillsMatrix`: Technical skills ka visualization (Frontend aur Backend categories mein).
    *   `ProjectGallery`: Featured projects ki list (Cognify, Bookify, Gym Management, Fashion E-commerce, etc.).
    *   `ContactTerminal`: Terminal-style contact form.
    *   `AIChat`: Gemini powered floating chat assistant.

## Building and Running

Aap niche di gayi commands use kar sakte hain:

*   **Development Server:**
    ```bash
    npm run dev
    ```
*   **Production Build:**
    ```bash
    npm run build
    ```
*   **Preview Build:**
    ```bash
    npm run preview
    ```

**Note:** AI Assistant ke liye `API_KEY` environment variable mein hona zaroori hai.

## Development Conventions

*   **TypeScript:** Project mein sakhti se TypeScript follow ki gayi hai (`types.ts` mein shared interfaces maujood hain).
*   **Constants:** Projects aur Skills ka saara data `constants.tsx` mein rakha gaya hai taake maintenance asan ho.
*   **Naming:** Components `PascalCase` mein hain aur styling ke liye futuristic naming conventions (e.g., `FE_CORE`, `System_Parameters`) use ki gayi hain.
*   **Modular Services:** AI logic ko `services/geminiService.ts` mein separate rakha gaya hai.

## Key Files

*   `App.tsx`: Main application entry point aur layout provider.
*   `constants.tsx`: Projects, Skills aur main configuration data.
*   `services/geminiService.ts`: Gemini API integration logic.
*   `components/`: Saare UI components is directory mein maujood hain.
