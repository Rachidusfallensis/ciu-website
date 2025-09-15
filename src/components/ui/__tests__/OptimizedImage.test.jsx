import { render, screen } from '@testing-library/react';
import OptimizedImage from '../OptimizedImage';

describe('OptimizedImage Component', () => {
  it('renders with placeholder initially', () => {
    render(
      <OptimizedImage 
        src="/test-image.jpg" 
        alt="Test image" 
        width={300}
        height={200}
      />
    );
    
    // Check if placeholder is shown
    expect(screen.getByText('Chargement...')).toBeInTheDocument();
  });
  
  it('renders with blur placeholder when specified', () => {
    render(
      <OptimizedImage 
        src="/test-image.jpg" 
        alt="Test image"
        placeholder="blur"
        width={300}
        height={200}
      />
    );
    
    // Check if blur placeholder is shown (it has no text content)
    expect(screen.queryByText('Chargement...')).not.toBeInTheDocument();
    // Instead, it should have a div with the animate-pulse class
    const placeholder = document.querySelector('.animate-pulse');
    expect(placeholder).toBeInTheDocument();
  });
  
  it('renders with priority when specified', () => {
    render(
      <OptimizedImage 
        src="/test-image.jpg" 
        alt="Test image"
        priority={true}
        width={300}
        height={200}
      />
    );
    
    // When priority is true, the image should be rendered immediately
    const img = document.querySelector('img');
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute('loading', 'eager');
  });
  
  it('applies additional className when provided', () => {
    render(
      <OptimizedImage 
        src="/test-image.jpg" 
        alt="Test image"
        className="custom-class"
        width={300}
        height={200}
      />
    );
    
    // Check if the custom class is applied
    const container = document.querySelector('.custom-class');
    expect(container).toBeInTheDocument();
  });
  
  it('renders with modern image formats', () => {
    render(
      <OptimizedImage 
        src="/test-image.jpg" 
        alt="Test image"
        priority={true}
        width={300}
        height={200}
      />
    );
    
    // Check if picture element with source elements for modern formats is rendered
    const picture = document.querySelector('picture');
    expect(picture).toBeInTheDocument();
    
    const sources = document.querySelectorAll('source');
    expect(sources.length).toBe(2); // One for AVIF, one for WebP
    
    // Check if the sources have the correct type attributes
    expect(sources[0]).toHaveAttribute('type', 'image/avif');
    expect(sources[1]).toHaveAttribute('type', 'image/webp');
  });
});
