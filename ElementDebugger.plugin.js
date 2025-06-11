/**
 * @name ElementDebugger
 * @description Показывает информацию об элементах при наведении
 * @version 1.0.4
 * @author Ekikak
 */

module.exports = class ElementDebugger {
  constructor() {
    this.tooltip = null;
    this.lastTarget = null;
  }

  start() {
    this.initialize();
    console.log("%c[ElementDebugger]", "color: #a77fff;", "Плагин запущен");
  }

  stop() {
    this.cleanup();
    console.log("%c[ElementDebugger]", "color: #a77fff;", "Плагин остановлен");
  }

  initialize() {
    // Создаем tooltip
    this.tooltip = document.createElement("div");
    this.tooltip.id = "bd-debug-tooltip";
    Object.assign(this.tooltip.style, {
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
      fontFamily: "'Fira Code', 'Courier New', monospace",
      fontSize: "13px",
      zIndex: "99999",
      pointerEvents: "none",
      padding: "12px",
      backdropFilter: "blur(5px)",
      boxShadow: "0 0 20px rgba(0,0,0,0.8)",
      display: "none",
      lineHeight: "1.5"
    });

    document.body.appendChild(this.tooltip);
    document.addEventListener("mousemove", this.handleMouseMove);
  }

  handleMouseMove = (e) => {
    try {
      const target = e.target;
      if (!target || target === this.lastTarget) return;

      // Убираем подсветку с предыдущего элемента
      if (this.lastTarget) {
        this.lastTarget.style.outline = "";
        this.lastTarget.style.outlineOffset = "";
      }

      // Подсвечиваем новый элемент
      this.lastTarget = target;
      target.style.outline = "2px dashed #a77fff";
      target.style.outlineOffset = "2px";

      // Получаем информацию
      const elementInfo = this.getElementInfo(target);
      this.updateTooltip(elementInfo);
    } catch (err) {
      console.error("%c[ElementDebugger]", "color: #ff4d6d;", "Ошибка:", err);
    }
  };

  getElementInfo(element) {
    const info = {
      tag: element.tagName.toLowerCase(),
      id: element.id || "нет",
      classes: element.className || "нет",
      styles: element.getAttribute("style") || "нет",
      bounds: element.getBoundingClientRect(),
      children: element.children.length
    };

    // Форматируем вывод
    return `
      🏷️ Тег: <${info.tag}>
      🆔 ID: ${info.id}
      🧩 Классы: ${info.classes}
      🎨 Стили: ${info.styles}
      📏 Размер: ${Math.round(info.bounds.width)}×${Math.round(info.bounds.height)}px
      👶 Дочерних: ${info.children}
    `;
  }

  updateTooltip(content) {
    if (!this.tooltip) return;
    this.tooltip.textContent = content;
    this.tooltip.style.display = "block";
  }

  cleanup() {
    document.removeEventListener("mousemove", this.handleMouseMove);
    
    if (this.lastTarget) {
      this.lastTarget.style.outline = "";
      this.lastTarget = null;
    }
    
    if (this.tooltip) {
      this.tooltip.remove();
      this.tooltip = null;
    }
  }
};
