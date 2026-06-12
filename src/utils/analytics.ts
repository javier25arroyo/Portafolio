export interface AnalyticsEvent {
  event: string;
  category?: string;
  label?: string;
  value?: number;
  timestamp: number;
}

const EVENTS_KEY = 'analytics_events';
const MAX_EVENTS = 100;

export function trackEvent(
  event: string,
  options?: {
    category?: string;
    label?: string;
    value?: number;
  }
) {
  const analyticsEvent: AnalyticsEvent = {
    event,
    category: options?.category,
    label: options?.label,
    value: options?.value,
    timestamp: Date.now(),
  };

  // Store locally (for development/demo)
  if (typeof window !== 'undefined' && typeof localStorage !== 'undefined') {
    try {
      const existing = JSON.parse(localStorage.getItem(EVENTS_KEY) || '[]') as AnalyticsEvent[];
      const updated = [analyticsEvent, ...existing].slice(0, MAX_EVENTS);
      localStorage.setItem(EVENTS_KEY, JSON.stringify(updated));
    } catch {
      console.warn('Failed to save analytics event');
    }
  }

  // Log in dev mode
  if (process.env.NODE_ENV === 'development') {
    console.log('📊', event, options);
  }
}

export function trackPageView(pathname: string) {
  trackEvent('page_view', {
    category: 'engagement',
    label: pathname,
  });
}

export function trackNavigation(target: string) {
  trackEvent('navigation', {
    category: 'engagement',
    label: target,
  });
}

export function trackExternalLink(href: string) {
  trackEvent('external_link', {
    category: 'engagement',
    label: href,
  });
}

export function getAnalyticsEvents(): AnalyticsEvent[] {
  if (typeof window === 'undefined' || typeof localStorage === 'undefined') {
    return [];
  }

  try {
    return JSON.parse(localStorage.getItem(EVENTS_KEY) || '[]');
  } catch {
    return [];
  }
}

export function clearAnalyticsEvents() {
  if (typeof localStorage !== 'undefined') {
    localStorage.removeItem(EVENTS_KEY);
  }
}
