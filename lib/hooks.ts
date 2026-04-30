import { useActiveSectionContext } from '@/context/active-section-context';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import type { SectionId } from './types';

export function useSectionInView(sectionId: SectionId) {
  const { ref, inView } = useInView({
    threshold: 0,
    rootMargin: '-25% 0px -65% 0px',
  });
  const { setActiveSection, timeOfLastClick } = useActiveSectionContext();

  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1500) {
      setActiveSection(sectionId);
    }
  }, [inView, setActiveSection, timeOfLastClick, sectionId]);

  return {
    ref,
  };
}
