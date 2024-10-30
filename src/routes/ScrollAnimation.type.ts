export interface ScrollAnimationProps {
  /**
   * Delay in milliseconds before the animation starts after the element becomes visible
   * @default 0
   */
  delay?: number;
}

export interface IntersectionObserverEntry {
  boundingClientRect: DOMRectReadOnly;
  intersectionRatio: number;
  intersectionRect: DOMRectReadOnly;
  isIntersecting: boolean;
  rootBounds: DOMRectReadOnly | null;
  target: Element;
  time: number;
}
