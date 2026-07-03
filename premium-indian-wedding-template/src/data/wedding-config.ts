/**
 * WEDDING CONFIG LOADER
 * =====================
 * Reads all customer JSON files and merges them into a single typed config.
 * Customers only edit the JSON files under /customer — no code changes needed.
 *
 * Structure:
 *   customer/wedding.json   → names, dates, events, venues, images, SEO
 *   customer/theme.json     → colors, fonts, animation prefs
 *   customer/family.json    → family member lists
 *   customer/gallery.json   → gallery image metadata
 *   customer/settings.json  → section toggles, language, music
 */

import weddingData from '../../customer/wedding.json';
import themeData from '../../customer/theme.json';
import familyData from '../../customer/family.json';
import galleryData from '../../customer/gallery.json';
import settingsData from '../../customer/settings.json';

// ─── Type Definitions ───────────────────────────────────────────────

export interface WeddingEvent {
  id: string;
  title: string;
  date: string;
  time: string;
  venue: string;
  address: string;
  mapUrl: string;
  description: string;
  image: string;
  dressCode?: string;
}

export interface FamilyMember {
  relation: string;
  name: string;
}

export interface GalleryImage {
  src: string;
  alt: string;
  span?: 'tall' | 'wide' | 'normal';
}

export interface WeddingConfig {
  bride: {
    firstName: string;
    lastName: string;
    parentage: string;
    family: FamilyMember[];
    image: string;
    bio: string;
  };
  groom: {
    firstName: string;
    lastName: string;
    parentage: string;
    family: FamilyMember[];
    image: string;
    bio: string;
  };
  weddingDate: string;
  tagline: string;
  quote: string;
  quoteAuthor: string;
  events: WeddingEvent[];
  gallery: GalleryImage[];
  mainVenue: {
    name: string;
    address: string;
    city: string;
    mapEmbedUrl: string;
    mapUrl: string;
  };
  theme: {
    colors: {
      primary: string;
      primaryLight: string;
      accent: string;
      accentLight: string;
      background: string;
      backgroundDark: string;
      textPrimary: string;
      textSecondary: string;
    };
    fonts: {
      display: string;
      body: string;
      sans: string;
      googleFontsUrl: string;
    };
    animations: {
      floatingPetals: boolean;
      petalsCount: number;
      mandalaRotation: boolean;
      parallaxHero: boolean;
      goldShimmer: boolean;
      loadingScreenDuration: number;
    };
  };
  images: {
    heroBg: string;
    couplePhoto: string;
    venuePhoto: string;
  };
  hashtag: string;
  rsvpEnabled: boolean;
  rsvpDeadline: string;
  footerMessage: string;
  seo: {
    title: string;
    description: string;
    ogImage: string;
  };
  settings: {
    sections: {
      hero: boolean;
      countdown: boolean;
      couple: boolean;
      events: boolean;
      gallery: boolean;
      venue: boolean;
      rsvp: boolean;
      wishes: boolean;
      footer: boolean;
    };
    language: string;
    music: {
      enabled: boolean;
      autoplay: boolean;
      url: string;
      volume: number;
    };
    rsvpEnabled: boolean;
    floatingPetals: boolean;
    floatingPetalsCount: number;
  };
}

// ─── Build the config from JSON files ───────────────────────────────

const config: WeddingConfig = {
  bride: {
    firstName: weddingData.bride.firstName,
    lastName: weddingData.bride.lastName,
    parentage: weddingData.bride.parentage,
    bio: weddingData.bride.bio,
    image: weddingData.bride.image,
    family: familyData.bride.members,
  },
  groom: {
    firstName: weddingData.groom.firstName,
    lastName: weddingData.groom.lastName,
    parentage: weddingData.groom.parentage,
    bio: weddingData.groom.bio,
    image: weddingData.groom.image,
    family: familyData.groom.members,
  },
  weddingDate: weddingData.weddingDate,
  tagline: weddingData.tagline,
  quote: weddingData.quote,
  quoteAuthor: weddingData.quoteAuthor,
  hashtag: weddingData.hashtag,
  rsvpEnabled: settingsData.rsvpEnabled,
  rsvpDeadline: weddingData.rsvpDeadline,
  footerMessage: weddingData.footerMessage,
  events: weddingData.events as WeddingEvent[],
  gallery: galleryData.images as GalleryImage[],
  mainVenue: weddingData.mainVenue,
  images: weddingData.images,
  seo: weddingData.seo,
  theme: {
    colors: themeData.colors,
    fonts: themeData.fonts,
    animations: themeData.animations,
  },
  settings: {
    sections: settingsData.sections,
    language: settingsData.language,
    music: settingsData.music,
    rsvpEnabled: settingsData.rsvpEnabled,
    floatingPetals: settingsData.floatingPetals,
    floatingPetalsCount: settingsData.floatingPetalsCount,
  },
};

export default config;
