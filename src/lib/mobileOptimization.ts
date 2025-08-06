// Mobile Optimization Service
// Provides mobile-first responsive utilities and device detection

export interface DeviceInfo {
  type: 'mobile' | 'tablet' | 'desktop';
  os: 'ios' | 'android' | 'windows' | 'macos' | 'linux' | 'unknown';
  browser: string;
  screenWidth: number;
  screenHeight: number;
  pixelRatio: number;
  touchEnabled: boolean;
  orientation: 'portrait' | 'landscape';
  connection?: {
    type: string;
    effectiveType: string;
    downlink: number;
    rtt: number;
    saveData: boolean;
  };
}

export interface ViewportInfo {
  width: number;
  height: number;
  scale: number;
  isZoomed: boolean;
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
  breakpoint: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
}

export interface TouchGesture {
  type: 'swipe' | 'pinch' | 'tap' | 'doubletap' | 'longtap';
  direction?: 'up' | 'down' | 'left' | 'right';
  distance?: number;
  duration?: number;
  touches?: number;
}

class MobileOptimization {
  private deviceInfo: DeviceInfo | null = null;
  private viewportInfo: ViewportInfo | null = null;
  private touchStartX: number = 0;
  private touchStartY: number = 0;
  private touchStartTime: number = 0;
  private gestureHandlers: Map<string, Function[]> = new Map();
  private resizeObserver: ResizeObserver | null = null;
  private orientationHandler: ((e: Event) => void) | null = null;

  constructor() {
    if (typeof window !== 'undefined') {
      this.initialize();
    }
  }

  private initialize(): void {
    this.detectDevice();
    this.updateViewport();
    this.setupEventListeners();
    this.setupResizeObserver();
  }

  // Detect device information
  private detectDevice(): void {
    const ua = navigator.userAgent.toLowerCase();
    const screenWidth = window.screen.width;
    const screenHeight = window.screen.height;

    // Detect device type
    let type: DeviceInfo['type'] = 'desktop';
    if (/mobile|android|iphone|ipod/.test(ua)) {
      type = 'mobile';
    } else if (/ipad|tablet/.test(ua) || (screenWidth >= 768 && screenWidth <= 1024)) {
      type = 'tablet';
    }

    // Detect OS
    let os: DeviceInfo['os'] = 'unknown';
    if (/iphone|ipad|ipod/.test(ua)) {
      os = 'ios';
    } else if (/android/.test(ua)) {
      os = 'android';
    } else if (/windows/.test(ua)) {
      os = 'windows';
    } else if (/mac/.test(ua)) {
      os = 'macos';
    } else if (/linux/.test(ua)) {
      os = 'linux';
    }

    // Detect browser
    let browser = 'unknown';
    if (/chrome/.test(ua) && !/edge/.test(ua)) {
      browser = 'chrome';
    } else if (/safari/.test(ua) && !/chrome/.test(ua)) {
      browser = 'safari';
    } else if (/firefox/.test(ua)) {
      browser = 'firefox';
    } else if (/edge/.test(ua)) {
      browser = 'edge';
    }

    // Get connection info
    let connection;
    if ('connection' in navigator) {
      const conn = (navigator as any).connection;
      connection = {
        type: conn.type || 'unknown',
        effectiveType: conn.effectiveType || 'unknown',
        downlink: conn.downlink || 0,
        rtt: conn.rtt || 0,
        saveData: conn.saveData || false
      };
    }

    this.deviceInfo = {
      type,
      os,
      browser,
      screenWidth,
      screenHeight,
      pixelRatio: window.devicePixelRatio || 1,
      touchEnabled: 'ontouchstart' in window || navigator.maxTouchPoints > 0,
      orientation: screenWidth > screenHeight ? 'landscape' : 'portrait',
      connection
    };
  }

  // Update viewport information
  private updateViewport(): void {
    const width = window.innerWidth;
    const height = window.innerHeight;
    const scale = window.visualViewport?.scale || 1;

    // Determine breakpoint
    let breakpoint: ViewportInfo['breakpoint'];
    if (width < 640) {
      breakpoint = 'xs';
    } else if (width < 768) {
      breakpoint = 'sm';
    } else if (width < 1024) {
      breakpoint = 'md';
    } else if (width < 1280) {
      breakpoint = 'lg';
    } else if (width < 1536) {
      breakpoint = 'xl';
    } else {
      breakpoint = '2xl';
    }

    this.viewportInfo = {
      width,
      height,
      scale,
      isZoomed: scale !== 1,
      isMobile: width < 768,
      isTablet: width >= 768 && width < 1024,
      isDesktop: width >= 1024,
      breakpoint
    };
  }

  // Setup event listeners
  private setupEventListeners(): void {
    // Touch events
    if (this.deviceInfo?.touchEnabled) {
      document.addEventListener('touchstart', this.handleTouchStart.bind(this), { passive: true });
      document.addEventListener('touchend', this.handleTouchEnd.bind(this), { passive: true });
      document.addEventListener('touchmove', this.handleTouchMove.bind(this), { passive: false });
    }

    // Orientation change
    this.orientationHandler = this.handleOrientationChange.bind(this);
    window.addEventListener('orientationchange', this.orientationHandler);
    window.addEventListener('resize', this.orientationHandler);

    // Visual viewport changes
    if ('visualViewport' in window) {
      window.visualViewport?.addEventListener('resize', () => this.updateViewport());
      window.visualViewport?.addEventListener('scroll', () => this.updateViewport());
    }
  }

  // Setup resize observer for responsive elements
  private setupResizeObserver(): void {
    if ('ResizeObserver' in window) {
      this.resizeObserver = new ResizeObserver((entries) => {
        entries.forEach(entry => {
          const element = entry.target as HTMLElement;
          this.optimizeElementForViewport(element);
        });
      });
    }
  }

  // Handle touch start
  private handleTouchStart(e: TouchEvent): void {
    const touch = e.touches[0];
    this.touchStartX = touch.clientX;
    this.touchStartY = touch.clientY;
    this.touchStartTime = Date.now();
  }

  // Handle touch end
  private handleTouchEnd(e: TouchEvent): void {
    const touch = e.changedTouches[0];
    const deltaX = touch.clientX - this.touchStartX;
    const deltaY = touch.clientY - this.touchStartY;
    const deltaTime = Date.now() - this.touchStartTime;

    // Detect gesture type
    const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
    
    if (distance < 10 && deltaTime < 200) {
      // Tap gesture
      this.triggerGesture({
        type: 'tap',
        duration: deltaTime
      });
    } else if (distance > 50 && deltaTime < 500) {
      // Swipe gesture
      let direction: TouchGesture['direction'];
      if (Math.abs(deltaX) > Math.abs(deltaY)) {
        direction = deltaX > 0 ? 'right' : 'left';
      } else {
        direction = deltaY > 0 ? 'down' : 'up';
      }

      this.triggerGesture({
        type: 'swipe',
        direction,
        distance,
        duration: deltaTime
      });
    }
  }

  // Handle touch move
  private handleTouchMove(e: TouchEvent): void {
    // Prevent pull-to-refresh on mobile
    if (this.deviceInfo?.type === 'mobile' && window.scrollY === 0) {
      const touch = e.touches[0];
      const deltaY = touch.clientY - this.touchStartY;
      
      if (deltaY > 0) {
        e.preventDefault();
      }
    }
  }

  // Handle orientation change
  private handleOrientationChange(): void {
    this.detectDevice();
    this.updateViewport();
    
    // Trigger orientation change handlers
    const handlers = this.gestureHandlers.get('orientation') || [];
    handlers.forEach(handler => handler(this.deviceInfo?.orientation));
  }

  // Trigger gesture handlers
  private triggerGesture(gesture: TouchGesture): void {
    const handlers = this.gestureHandlers.get(gesture.type) || [];
    handlers.forEach(handler => handler(gesture));
  }

  // Public API

  // Get device information
  getDeviceInfo(): DeviceInfo | null {
    return this.deviceInfo;
  }

  // Get viewport information
  getViewportInfo(): ViewportInfo | null {
    this.updateViewport();
    return this.viewportInfo;
  }

  // Check if mobile device
  isMobile(): boolean {
    return this.deviceInfo?.type === 'mobile' || false;
  }

  // Check if tablet device
  isTablet(): boolean {
    return this.deviceInfo?.type === 'tablet' || false;
  }

  // Check if touch enabled
  isTouchDevice(): boolean {
    return this.deviceInfo?.touchEnabled || false;
  }

  // Check if slow connection
  isSlowConnection(): boolean {
    const conn = this.deviceInfo?.connection;
    if (!conn) return false;
    
    return conn.saveData || 
           conn.effectiveType === '2g' || 
           conn.effectiveType === 'slow-2g' ||
           conn.rtt > 400;
  }

  // Register gesture handler
  onGesture(type: string, handler: Function): void {
    if (!this.gestureHandlers.has(type)) {
      this.gestureHandlers.set(type, []);
    }
    this.gestureHandlers.get(type)!.push(handler);
  }

  // Remove gesture handler
  offGesture(type: string, handler: Function): void {
    const handlers = this.gestureHandlers.get(type);
    if (handlers) {
      const index = handlers.indexOf(handler);
      if (index > -1) {
        handlers.splice(index, 1);
      }
    }
  }

  // Optimize element for mobile viewport
  optimizeElementForViewport(element: HTMLElement): void {
    const viewport = this.getViewportInfo();
    if (!viewport) return;

    // Adjust font sizes for mobile
    if (viewport.isMobile) {
      const fontSize = window.getComputedStyle(element).fontSize;
      const size = parseFloat(fontSize);
      
      if (size > 18) {
        element.style.fontSize = `${size * 0.9}px`;
      }
    }

    // Adjust padding/margins for mobile
    if (viewport.isMobile) {
      const padding = window.getComputedStyle(element).padding;
      const paddingValues = padding.split(' ').map(p => parseFloat(p));
      
      if (paddingValues.some(p => p > 20)) {
        element.style.padding = paddingValues.map(p => `${p * 0.75}px`).join(' ');
      }
    }

    // Make tables responsive
    if (element.tagName === 'TABLE' && viewport.isMobile) {
      element.style.display = 'block';
      element.style.overflowX = 'auto';
      element.style.whiteSpace = 'nowrap';
    }

    // Optimize images for viewport
    if (element.tagName === 'IMG') {
      this.optimizeImage(element as HTMLImageElement, viewport);
    }
  }

  // Optimize image loading
  private optimizeImage(img: HTMLImageElement, viewport: ViewportInfo): void {
    // Use smaller images on mobile
    if (viewport.isMobile && img.dataset.mobileSrc) {
      img.src = img.dataset.mobileSrc;
    }

    // Lazy load images below the fold
    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const image = entry.target as HTMLImageElement;
            if (image.dataset.src) {
              image.src = image.dataset.src;
              observer.unobserve(image);
            }
          }
        });
      });

      observer.observe(img);
    }
  }

  // Watch element for responsive changes
  watchElement(element: HTMLElement): void {
    if (this.resizeObserver) {
      this.resizeObserver.observe(element);
    }
  }

  // Stop watching element
  unwatchElement(element: HTMLElement): void {
    if (this.resizeObserver) {
      this.resizeObserver.unobserve(element);
    }
  }

  // Enable pull to refresh
  enablePullToRefresh(callback: Function): void {
    let startY = 0;
    let currentY = 0;
    let pulling = false;

    const handleStart = (e: TouchEvent) => {
      if (window.scrollY === 0) {
        startY = e.touches[0].clientY;
        pulling = true;
      }
    };

    const handleMove = (e: TouchEvent) => {
      if (!pulling) return;
      
      currentY = e.touches[0].clientY;
      const distance = currentY - startY;
      
      if (distance > 100) {
        document.body.style.transform = `translateY(${Math.min(distance * 0.5, 75)}px)`;
      }
    };

    const handleEnd = () => {
      if (!pulling) return;
      
      const distance = currentY - startY;
      if (distance > 100) {
        callback();
      }
      
      document.body.style.transform = '';
      pulling = false;
    };

    document.addEventListener('touchstart', handleStart, { passive: true });
    document.addEventListener('touchmove', handleMove, { passive: false });
    document.addEventListener('touchend', handleEnd, { passive: true });
  }

  // Optimize for printing
  optimizeForPrint(): void {
    const style = document.createElement('style');
    style.innerHTML = `
      @media print {
        /* Hide navigation and non-essential elements */
        nav, .no-print, button, .btn { display: none !important; }
        
        /* Optimize layout for print */
        body { font-size: 12pt; line-height: 1.5; }
        h1 { font-size: 18pt; }
        h2 { font-size: 16pt; }
        h3 { font-size: 14pt; }
        
        /* Ensure content breaks properly */
        h1, h2, h3 { page-break-after: avoid; }
        img, table { page-break-inside: avoid; }
        
        /* Show link URLs */
        a[href]:after { content: " (" attr(href) ")"; }
        
        /* Optimize colors for print */
        * { 
          color: #000 !important;
          background: #fff !important;
        }
      }
    `;
    document.head.appendChild(style);
  }

  // Get responsive image srcset
  getResponsiveSrcset(baseUrl: string, sizes: number[] = [320, 640, 768, 1024, 1280]): string {
    return sizes.map(size => `${baseUrl}?w=${size} ${size}w`).join(', ');
  }

  // Get responsive sizes attribute
  getResponsiveSizes(): string {
    return `
      (max-width: 640px) 100vw,
      (max-width: 768px) 90vw,
      (max-width: 1024px) 80vw,
      (max-width: 1280px) 70vw,
      60vw
    `.trim();
  }

  // Cleanup
  destroy(): void {
    if (this.orientationHandler) {
      window.removeEventListener('orientationchange', this.orientationHandler);
      window.removeEventListener('resize', this.orientationHandler);
    }

    if (this.resizeObserver) {
      this.resizeObserver.disconnect();
    }

    this.gestureHandlers.clear();
  }
}

// Export singleton instance
export const mobileOptimization = new MobileOptimization();