# Implementation Plan: Homepage UX Revamp

**Goal**: Maximize information accessibility, increase content density ("mieux fournie"), and improve user journeys with clear CTAs.

## User Goals & Issues
*   **Issue**: Homepage feels empty ("pas trop bien fournie").
*   **Goal**: Reduce clicks to access important info.
*   **Goal**: Maximize UX with premium feel.
*   **Goal**: Add clear CTAs for discovery.

## Proposed Changes

### 1. Hero Section Optimization
*   **Refinement**: Ensure the "Mission" carousel is readable and impactful.
*   **Action**: Verify `MissionMessages` timing and contrast.

### 2. [NEW] Quick Access Grid ("Accès Rapide")
*   **Purpose**: Immediate access to high-value tools without navigation.
*   **Components**: 
    *   Find my University
    *   Download Student Guide
    *   View Academic Calendar
    *   Contact Secretary
*   **Location**: Below Hero, replacing or augmenting the current simple "Mission" cards.

### 3. [NEW] Universities Network Showcase
*   **Purpose**: Show the "Inter-Universitaire" scale immediately.
*   **Component**: Infinite ticker or Grid of University Logos/Names.
*   **Location**: Between Mission and News.

### 4. Refactor "Notre Mission" -> "Piliers d'Excellence"
*   **Change**: Make cards richer. Add hover effects that reveal more info/sub-links.
*   **Visual**: Use "Bento Grid" style or interactive cards.

### 5. Review "Featured News"
*   **Current**: Seemingly limited.
*   **Change**: Ensure it shows a clear "Latest" vs "Pinned" distinction.

### 6. [NEW] Testimonials / Community Voices
*   **Purpose**: Social proof.
*   **Component**: "La Parole aux Étudiants".

## Detailed File Changes

### `src/pages/HomePage.jsx`
*   Import and add `QuickAccessGrid`.
*   Import and add `UniversityShowcase`.
*   Import and add `Testimonials`.
*   Reorder sections for flow: Hero -> Quick Access -> Mission -> Universities -> News -> Resources -> CTA.

### `src/components/sections/home/QuickAccessGrid.jsx` (NEW)
*   Grid of 4 prominent cards with icons and direct actions.

### `src/components/sections/home/UniversityShowcase.jsx` (NEW)
*   Marquee or Grid of university logos.

### `src/components/sections/home/Testimonials.jsx` (NEW)
*   Carousel of student quotes.

## Verification Plan
*   **Autonomous**: Use browser to check layout, spacing, and clickability.
*   **User Review**: Request feedback on the "density" and "feel".
