"use client";

import { useEffect, useRef } from "react";

const AMO_FORM_INIT_SCRIPT =
  '!function(a,m,o,c,r,m){a[o+c]=a[o+c]||{setMeta:function(p){this.params=(this.params||[]).concat([p])}},a[o+r]=a[o+r]||function(f){a[o+r].f=(a[o+r].f||[]).concat([f])},a[o+r]({id:"1665802",hash:"d396d77924a576e9b600aa06583cfde6",locale:"ru"}),a[o+m]=a[o+m]||function(f,k){a[o+m].f=(a[o+m].f||[]).concat([[f,k]])}}(window,0,"amo_forms_","params","load","loaded");';

const AMO_SCRIPT_ID = "amoforms_script_1665802";
const AMO_INLINE_ID = "amoforms_inline_1665802";
const AMO_SCRIPT_SRC =
  "https://forms.amocrm.ru/forms/assets/js/amoforms.js?1770379982";

export default function AmoCrmForm() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const injectedOnceRef = useRef(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // StrictMode fake mount/unmountdan omon qolish uchun flag
    let alive = true;

    // 1) injectni kechiktiramiz (StrictMode 1-siklini o'tkazib yuboradi)
    const timeoutId = window.setTimeout(() => {
      if (!alive) return;
      if (!containerRef.current) return;

      // bir sahifada bir marta
      if (injectedOnceRef.current) return;
      injectedOnceRef.current = true;

      // agar oldin qo‘yilgan bo‘lsa (masalan HMR/fast refresh)
      if (document.getElementById(AMO_SCRIPT_ID)) return;

      // containerni tozalaymiz
      containerRef.current.innerHTML = "";

      // inline init
      const inlineScript = document.createElement("script");
      inlineScript.id = AMO_INLINE_ID;
      inlineScript.type = "text/javascript";
      inlineScript.text = AMO_FORM_INIT_SCRIPT;
      containerRef.current.appendChild(inlineScript);

      // external
      const externalScript = document.createElement("script");
      externalScript.id = AMO_SCRIPT_ID;
      externalScript.async = true;
      externalScript.charset = "utf-8";
      externalScript.src = AMO_SCRIPT_SRC;

      externalScript.onerror = () => {
        // xohlasangiz UI message qo‘shishingiz mumkin
        console.error("amoCRM script yuklanmadi:", AMO_SCRIPT_SRC);
      };

      containerRef.current.appendChild(externalScript);
    }, 250); // 200-300ms yetarli (StrictMode siklidan keyin)

    return () => {
      alive = false;
      window.clearTimeout(timeoutId);
    };
  }, []);

  return <div ref={containerRef} className="w-full min-h-[420px]" />;
}
