import { useEffect } from 'react';

/**
 * Custom hook to update document title
 * Useful for SEO and better user experience
 */
export const useDocumentTitle = (title: string, defaultTitle = 'Pokédex - Pokemon Browser') => {
  useEffect(() => {
    document.title = title ? `${title} | ${defaultTitle}` : defaultTitle;
    
    // Reset to default title on unmount
    return () => {
      document.title = defaultTitle;
    };
  }, [title, defaultTitle]);
};

