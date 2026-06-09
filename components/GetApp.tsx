import React, { useEffect, useMemo, useState } from 'react';
import { Language } from '../types';

interface GetAppProps {
  lang: Language;
}

type Platform = 'android' | 'ios' | 'other';

const ANDROID_URL = 'https://play.google.com/store/apps/details?id=com.multibrains.taxi.passenger.samtaxisaudi';
const IOS_URL = 'https://apps.apple.com/us/app/%D8%B3%D9%85%D8%A7-%D8%AA%D8%A7%D9%83%D8%B3%D9%8A-%D9%88-%D8%AA%D9%88%D8%B5%D9%8A%D9%84/id1605081866?l=ar';

const detectPlatform = (): Platform => {
  const userAgent = navigator.userAgent || (navigator as any).vendor || (window as any).opera;

  const isAndroid = /android/i.test(userAgent);
  const isIOS = /iPad|iPhone|iPod/.test(userAgent) || (/(Macintosh)/.test(userAgent) && 'ontouchend' in document);

  if (isAndroid) return 'android';
  if (isIOS && !(window as any).MSStream) return 'ios';
  return 'other';
};

const GetApp: React.FC<GetAppProps> = ({ lang }) => {
  const [platform, setPlatform] = useState<Platform>('other');

  const appStoreIconUrl = useMemo(
    () => new URL('../assets/images/apple-store.png', import.meta.url).href,
    []
  );
  const playStoreIconUrl = useMemo(
    () => new URL('../assets/images/google-play .png', import.meta.url).href,
    []
  );

  useEffect(() => {
    setPlatform(detectPlatform());

    const params = new URLSearchParams(window.location.search);
    const auto = params.get('auto') === '1';

    if (!auto) return;

    const detected = detectPlatform();
    if (detected === 'android') {
      window.location.replace(ANDROID_URL);
    } else if (detected === 'ios') {
      window.location.replace(IOS_URL);
    }
  }, []);

  const title = lang === 'ar' ? 'تحميل التطبيق' : 'Get the App';
  const subtitle =
    platform === 'android'
      ? lang === 'ar'
        ? 'يبدو أنك تستخدم أندرويد. يمكنك تنزيل التطبيق من متجر Google Play.'
        : 'It looks like you’re on Android. You can download the app from Google Play.'
      : platform === 'ios'
        ? lang === 'ar'
          ? 'يبدو أنك تستخدم iPhone أو iPad. يمكنك تنزيل التطبيق من App Store.'
          : 'It looks like you’re on iPhone/iPad. You can download the app from the App Store.'
        : lang === 'ar'
          ? 'اختر المتجر المناسب لجهازك.'
          : 'Choose the store that matches your device.';

  const primaryHref = platform === 'android' ? ANDROID_URL : IOS_URL;
  const primaryLabel =
    platform === 'android'
      ? lang === 'ar'
        ? 'جوجل بلاي'
        : 'Google Play'
      : lang === 'ar'
        ? 'آب ستور'
        : 'App Store';
  const primaryIcon = platform === 'android' ? playStoreIconUrl : appStoreIconUrl;

  return (
    <div className="max-w-4xl mx-auto bg-white/40 border border-black/10 rounded-[3rem] p-12 shadow-2xl animate-in fade-in slide-in-from-bottom-4 duration-700 text-center">
      <h1 className="text-5xl font-black text-black mb-6">{title}</h1>
      <p className="text-black/70 mb-10 text-lg">{subtitle}</p>

      <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
        <a
          href={primaryHref}
          className="bg-black text-sama-yellow px-10 py-4 rounded-2xl font-black uppercase tracking-wider hover:bg-black/90 transition-all duration-300 inline-flex items-center justify-center gap-3 text-center"
        >
          <img src={primaryIcon} alt="" className="w-5 h-5 object-contain" />
          <span>{primaryLabel}</span>
        </a>

        <a
          href={IOS_URL}
          className="bg-sama-yellow text-black px-10 py-4 rounded-2xl font-black uppercase tracking-wider hover:scale-105 transition-transform inline-flex items-center justify-center gap-3 text-center"
        >
          <img src={appStoreIconUrl} alt="App Store" className="w-5 h-5 object-contain" />
          <span>{lang === 'ar' ? 'آب ستور' : 'App Store'}</span>
        </a>

        <a
          href={ANDROID_URL}
          className="bg-sama-yellow text-black px-10 py-4 rounded-2xl font-black uppercase tracking-wider hover:scale-105 transition-transform inline-flex items-center justify-center gap-3 text-center"
        >
          <img src={playStoreIconUrl} alt="Google Play" className="w-5 h-5 object-contain" />
          <span>{lang === 'ar' ? 'جوجل بلاي' : 'Google Play'}</span>
        </a>
      </div>

      <div className="mt-8 text-black/60 text-sm">
        <span>{lang === 'ar' ? 'للتحويل التلقائي من QR استخدم:' : 'For QR auto-redirect use:'}</span>
        <span className="font-mono"> /get-app?auto=1</span>
      </div>
    </div>
  );
};

export default GetApp;
