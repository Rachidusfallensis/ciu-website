import { renderHook } from '@testing-library/react';
import { useReducedMotion } from 'framer-motion';
import useMotionVariants from '../useMotionVariants';

// Mock the useReducedMotion hook from framer-motion
jest.mock('framer-motion', () => ({
  useReducedMotion: jest.fn(),
}));

describe('useMotionVariants Hook', () => {
  it('returns correct variants when reduced motion is false', () => {
    // Set up the mock to return false (no reduced motion preference)
    useReducedMotion.mockReturnValue(false);
    
    // Render the hook
    const { result } = renderHook(() => useMotionVariants());
    
    // Check if the hook returns the expected values
    expect(result.current.prefersReducedMotion).toBe(false);
    expect(result.current.containerVariants).toBeDefined();
    expect(result.current.itemVariants).toBeDefined();
    expect(result.current.slideInLeftVariants).toBeDefined();
    expect(result.current.slideInRightVariants).toBeDefined();
    expect(result.current.fadeInVariants).toBeDefined();
    
    // Check specific animations are enabled
    expect(result.current.containerVariants.visible.transition.delayChildren).toBe(0.3);
    expect(result.current.itemVariants.hidden).toEqual({ y: 20, opacity: 0 });
  });
  
  it('returns simplified variants when reduced motion is true', () => {
    // Set up the mock to return true (reduced motion preference)
    useReducedMotion.mockReturnValue(true);
    
    // Render the hook
    const { result } = renderHook(() => useMotionVariants());
    
    // Check if the hook returns the expected values with reduced motion
    expect(result.current.prefersReducedMotion).toBe(true);
    
    // Check specific animations are simplified
    expect(result.current.containerVariants.visible.transition.delayChildren).toBe(0);
    expect(result.current.itemVariants.hidden).toEqual({ opacity: 0 });
    
    // Check transition durations are 0
    const transition = result.current.getTransition(0.6);
    expect(transition.duration).toBe(0);
  });
  
  it('getTransition returns correct values based on reduced motion preference', () => {
    // Test with reduced motion false
    useReducedMotion.mockReturnValue(false);
    let { result } = renderHook(() => useMotionVariants());
    
    // Check normal transition
    expect(result.current.getTransition(0.5, 0.2)).toEqual({
      duration: 0.5,
      delay: 0.2
    });
    
    // Test with reduced motion true
    useReducedMotion.mockReturnValue(true);
    ({ result } = renderHook(() => useMotionVariants()));
    
    // Check simplified transition
    expect(result.current.getTransition(0.5, 0.2)).toEqual({
      duration: 0,
      delay: 0
    });
  });
});
