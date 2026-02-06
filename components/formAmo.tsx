// components/AmoForm.tsx
"use client";

import { useEffect, useState } from "react";

export default function AmoForm() {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    // 1. Body va HTML background colorini set qilish
    const prepareStyles = () => {
      // Body
      document.body.style.backgroundColor = "#ffffff";

      // HTML
      if (document.documentElement) {
        document.documentElement.style.backgroundColor = "#ffffff";
      }

      // Container yaratish
      const container = document.getElementById("amo-form-container");
      if (container) {
        container.style.backgroundColor = "#ffffff";
        container.style.padding = "100px 0";
        container.style.minHeight = "300px";
        // container.style.width = "";
      }
    };

    prepareStyles();

    // 2. 1 soniya kutish - muhim!
    const timer = setTimeout(() => {
      try {
        const w = window as any;

        // Init
        w.amo_forms_params = w.amo_forms_params || {
          setMeta: function (p: any) {
            this.params = (this.params || []).concat([p]);
          },
        };

        w.amo_forms_load =
          w.amo_forms_load ||
          function (f: any) {
            w.amo_forms_load.f = (w.amo_forms_load.f || []).concat([f]);
          };

        w.amo_forms_load({
          id: "1665802",
          hash: "d396d77924a576e9b600aa06583cfde6",
          locale: "ru",
        });

        w.amo_forms_loaded =
          w.amo_forms_loaded ||
          function (f: any, k: any) {
            w.amo_forms_loaded.f = (w.amo_forms_loaded.f || []).concat([
              [f, k],
            ]);
          };

        // Script yuklash
        const script = document.createElement("script");
        script.id = "amoforms_script_1665802";
        script.async = true;
        script.charset = "utf-8";
        script.src =
          "https://forms.amocrm.ru/forms/assets/js/amoforms.js?" + Date.now();

        script.onload = () => {
          console.log("✅ Amo Forms yuklandi");
          setIsReady(true);
        };

        script.onerror = (e) => {
          console.error("❌ Xatolik:", e);
        };

        const contacts = document.getElementById("contact");
        if (contacts) {
          contacts.appendChild(script);
        } else {
          console.error("#contacts topilmadi");
        }
      } catch (error) {
        console.error("❌ Init xatolik:", error);
      }
    }, 1000); // 1 soniya kutish - juda muhim!

    return () => {
      clearTimeout(timer);
      const script = document.getElementById("amoforms_script_1665802");
      if (script) script.remove();
    };
  }, []);

  return (
    <div id="amo-form-container">
      {!isReady && (
        <div className="flex items-center justify-center py-20">
          <div className="text-gray-500">Forma yuklanmoqda...</div>
        </div>
      )}
    </div>
  );
}
