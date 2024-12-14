import mixpanel from 'mixpanel-browser';
import { MIXPANEL_PROJECT_TOKEN } from '$lib/environmentSecrets.js'

mixpanel.init(MIXPANEL_PROJECT_TOKEN, { debug: true, track_pageview: true, persistence: 'localStorage' });

export const mixpanelLibrary = mixpanel