export interface Home {
  title: string;
  subtitle: string;
  description: string;
  projects: ProjectList[];
  seo: SEO;
  heroBannerProps: {
    title: string;
    description?: string;
    additionalDescription?: string;
  };
  bannerProps: {
    title: string;
    description: string;
    image: Image;
  };
  tileBoxes: TileBox[];
}

export interface TileBox {
  title: string;
  subtitle: string;
  links?: Link[];
  hubspotFormConfig?: HubspotFormConfig;
}
export interface ProjectList {
  title: string;
  subtitle?: string;
  description: string;
  primaryAction?: Link;
  secondaryAction?: Link;
  images: Image[];
}

export interface Project {
  title: string;
  subtitle?: string;
  description: string;
  titleBoxText: string;
  slug: string;
  tryItOut?: Link;
  bannerCta?: Link;
  seo: SEO;
  bannerImage: Image;
  bannerImageMobile: Image;
  mainImage: Image;
  mainImageMobile: Image;
  faqs: Faqs;
  articles: Articles;
  features: Features;
  pricing: TileBox[];
}

export interface Image {
  imagePath: string;
  alt: string;
  parallaxImagePath?: string;
  caption?: string;
  primaryAction?: Link;
}

export interface Articles {
  title: string;
  description: string;
  url: Link;
  items: ArticlesItem[];
}

export interface ArticlesItem {
  title: string;
  authors: string;
  url: string;
}

export interface Faqs {
  title: string;
  description: string;
  items: FaqsItem[];
  url?: Link;
}

export interface FaqsItem {
  title: string;
  description: string;
  image: Image;
  lottieUrl: string;
}

export interface Features {
  title: string;
  items: FeaturesItem[];
}

export interface FeaturesItem {
  title: string;
  description: string;
  pictogramName: string;
}

export interface HubspotFormConfig {
  region: string;
  portalId: string;
  formId: string;
  submitText?: string;
}

export interface SEO {
  title: string;
  description: string;
  keywords: string;
}

export interface Link {
  href: string;
  label: string;
}

export interface TalkToARapresentative {
  title: string;
  subtitle: string;
  description: string;
  bannerImage: Image;
  bannerImageMobile: Image;
  hubspotFormConfig: HubspotFormConfig;
}

export interface Privacy {
  title: string;
  subtitle: string;
  description: string;
  bannerImage: Image;
  bannerImageMobile: Image;
}
