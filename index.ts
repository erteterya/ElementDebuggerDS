import { Notices } from "@api/index";
import { definePluginSettings } from "@api/Settings";
import { makeRange } from "@components/PluginSettings/components";
import { Devs } from "@utils/constants";
import definePlugin, { OptionType } from "@utils/types";
import { FluxDispatcher } from "@webpack/common";

export default definePlugin({
  name: "ElementDebugger",
  description: "Показывает информацию об элементах при наведении",
  authors: [{ name: "Ekikak" }],
  version: "1.0.4",

  start() {
    const tooltip = document.createElement("div");
    Object.assign(tooltip.style, {
      position: "fixed",
      bottom: "20px",
      left: "20px",
      maxWidth: "450px",
      maxHeight: "60vh",
      overflowY: "auto",
      background: "rgba(30, 27, 46, 0.95)",
      color: "#e6dfff",
      border: "2px solid #a77fff",
      borderRadius: "8px",
      fontFamily: "'Fira Code', monospace",
      fontSize: "13px",
      zIndex: "99999",
      pointerEvents: "none",
      padding: "12px",
      backdropFilter: "blur(5px)",
      boxShadow: "0 0 20px rgba(0,0,0,0.8)",
      display: "none",
      lineHeight: "1.5"
    });
    document.body.appendChild(tooltip);

    let lastTarget: HTMLElement | null = null;
    
const onMove = (e: MouseEvent) => {
  const target = e.target as HTMLElement;
  if (!target || target === lastTarget) return;

  if (lastTarget) {
    lastTarget.style.outline = "";
    lastTarget.style.outlineOffset = "";
  }

  lastTarget = target;
  target.style.outline = "2px dashed #a77fff";
  target.style.outlineOffset = "2px";

  const rect = target.getBoundingClientRect();
  const info = [
    `🏷️ Тег: <${target.tagName.toLowerCase()}>`,
    `🆔 ID: ${target.id || "нет"}`,
    `🧩 Классы: ${target.className || "нет"}`,
    `🔠 Тип узла: ${target.nodeType}`,
    `📄 Внутренний текст: ${target.textContent?.trim().slice(0, 150) || "—"}`,
    `🎨 Стили: ${target.getAttribute("style") || "нет"}`,
    `📏 Размер: ${Math.round(rect.width)}×${Math.round(rect.height)}px`,
    `📐 Позиция: (${Math.round(rect.left)}, ${Math.round(rect.top)})`,
    `👶 Дочерних: ${target.children.length}`,
    `🧬 Display: ${getComputedStyle(target).display}`
  ].join("\n");

  const screenW = window.innerWidth;
  const screenH = window.innerHeight;
  const mouseX = e.clientX;
  const mouseY = e.clientY;

  const nearCenterX = mouseX > screenW * 0.4 && mouseX < screenW * 0.6;
  const nearCenterY = mouseY > screenH * 0.4 && mouseY < screenH * 0.6;

  let posTop = false;
  let posLeft = false;

  if (nearCenterX && nearCenterY) {
    posTop = true;
    posLeft = true;
  } else {
    posTop = mouseY > screenH / 2;
    posLeft = mouseX > screenW / 2;
  }

  tooltip.textContent = info;
  tooltip.style.top = "";
  tooltip.style.bottom = "";
  tooltip.style.left = "";
  tooltip.style.right = "";
  tooltip.style[posTop ? "top" : "bottom"] = "20px";
  tooltip.style[posLeft ? "left" : "right"] = "20px";
  tooltip.style.display = "block";
};



    document.addEventListener("mousemove", onMove);

    this.cleanup = () => {
      document.removeEventListener("mousemove", onMove);
      if (tooltip) tooltip.remove();
      if (lastTarget) {
        lastTarget.style.outline = "";
        lastTarget = null;
      }
    };

    console.log("%c[ElementDebugger]", "color: #a77fff;", "Плагин запущен");
  },

  stop() {
    this.cleanup?.();
    console.log("%c[ElementDebugger]", "color: #a77fff;", "Плагин остановлен");
  }
});
