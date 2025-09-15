import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { lazy, Suspense } from 'react';
import PropTypes from 'prop-types';

// Import the PageTransition component
import PageTransition from './PageTransition';

/**
 * Loading fallback component
 */
const LoadingFallback = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="animate-pulse flex flex-col items-center">
      <div className="h-16 w-16 bg-primary-200 rounded-full mb-4"></div>
      <div className="h-4 w-32 bg-primary-100 rounded"></div>
    </div>
  </div>
);

/**
 * Animated routes component that handles page transitions
 * @param {Object} props - Component props
 * @param {Array} props.routes - Array of route objects
 * @returns {JSX.Element} - Animated routes component
 */
const AnimatedRoutes = ({ routes }) => {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <Suspense fallback={<LoadingFallback />}>
        <Routes location={location} key={location.pathname}>
          {routes.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              element={
                <PageTransition transitionType={route.transitionType || 'fade'}>
                  <route.component />
                </PageTransition>
              }
            />
          ))}
        </Routes>
      </Suspense>
    </AnimatePresence>
  );
};

AnimatedRoutes.propTypes = {
  routes: PropTypes.arrayOf(
    PropTypes.shape({
      path: PropTypes.string.isRequired,
      component: PropTypes.elementType.isRequired,
      transitionType: PropTypes.oneOf(['fade', 'slide', 'scale', 'slideUp'])
    })
  ).isRequired
};

export default AnimatedRoutes;
