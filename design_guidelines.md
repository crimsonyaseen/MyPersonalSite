# Design Guidelines for yaseenmohamed.me

## Design Approach
**Reference-Based Approach**: Drawing inspiration from Apple's minimalist aesthetic, Flowly animations, and animations.dev principles. Focus on physics-based, delightful micro-interactions that feel premium and playful.

## Core Design Principles
- **Minimalist Elegance**: Clean, uncluttered single-screen experience
- **Playful Interaction**: Engaging hover states and character animation
- **Premium Feel**: Subtle textures and smooth transitions inspired by Apple

## Color Palette

**Light Mode (Primary)**
- Background: 248 50% 97% (Off-white with warmth)
- Primary Text: 0 0% 10% (Near-black)
- Glow/Accent: 210 100% 60% (Soft blue glow for hover)
- Subtle Texture Overlay: 0 0% 95% with noise/grain pattern

## Typography

**Primary Font**: SF Pro Display (with system fallback: -apple-system, BlinkMacSystemFont, "Segoe UI")
- "coming soon..." text: Ultra-light weight (100-200), 72-96px, tracking: -0.02em
- Letters should have generous spacing for individual bounce animations
- Lowercase styling for relaxed, approachable feel

## Layout System

**Fixed Viewport Layout** (100vh, no scroll)
- Vertical centering of main text
- Horizontal centering
- Spacing: Generous whitespace using tailwind units of 8, 16, 24
- Robot positioned at bottom: 16-24 units from bottom edge

## Component Specifications

### "Coming Soon..." Interactive Text
- Each letter is individually hoverable
- **Bounce Animation**: Spring physics with config { tension: 300, friction: 10 }
- **Hover States**:
  - Transform: translateY(-12px) on hover
  - Glow effect: text-shadow with blue hue, 8px blur radius
  - Smooth transition back to resting state
  - Stagger delay between letters: 0.03s
- Entrance: Fade in with gentle spring animation, letters cascade in from left to right

### Animated Robot Character
- **Positioning**: Bottom center of viewport, absolute positioned
- **Animation Sequence**:
  1. Glides in from left side (duration: 2-3s, ease-out)
  2. Pauses in center, "looks around" animation (1-2s)
  3. Glides out to right side (duration: 2-3s, ease-in)
- **Implementation**: Lottie animation file
- **Size**: 200-300px width, maintains aspect ratio
- Plays once on page load, subtle drop shadow for depth

### Background Treatment
- Base color: Light warm off-white
- **Texture Layer**: Subtle grain/noise overlay at 3-5% opacity
- Optional: Very gentle gradient from top (slightly cooler) to bottom (slightly warmer)
- Maintains Apple's characteristic soft, premium feel

## Animation Guidelines

**Physics-Based Interactions**:
- Use spring animations throughout (no linear easing)
- Bounce coefficient: 0.4-0.6 for playful feel
- All interactions should feel responsive and immediate

**Timing**:
- Hover responses: <100ms to start
- Letter bounces: 400-600ms total duration
- Robot animation: 6-8s total sequence
- Page entrance: 800ms fade + cascade

**Performance**:
- Use transform properties (translateY, scale) for GPU acceleration
- Avoid animating layout properties
- Preload Lottie animation asset

## Responsive Considerations

**Desktop (Primary)**:
- Text size: 72-96px
- Robot: 250-300px width
- Full viewport utilization

**Tablet**:
- Text size: 56-72px
- Robot: 200-250px width
- Maintain centered layout

**Mobile**:
- Text size: 36-48px, may stack to 2 lines if needed
- Robot: 150-180px width
- Ensure touch targets are adequate for letter interactions
- Reduce bounce intensity slightly

## Accessibility
- Ensure text has sufficient contrast (4.5:1 minimum)
- Provide reduced motion alternative for users with motion sensitivity preferences
- Robot animation should respect prefers-reduced-motion
- Keyboard navigation: Allow focus states on individual letters

## Technical Assets Required
- SF Pro font files (woff2 format)
- Lottie JSON file for robot animation (cute, friendly robot character)
- Noise/grain texture image (subtle, tileable pattern)

## No Hero Image
This design does not use a traditional hero image - the focus is on the animated typography and character interaction.