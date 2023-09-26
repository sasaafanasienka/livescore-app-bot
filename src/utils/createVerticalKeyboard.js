export function createVerticalKeyboard(buttons) {
  return {
    reply_markup: {
      keyboard: buttons.map((text) => [{ text }]), // Каждая кнопка в отдельной строке
      resize_keyboard: true, // Позволяет боту скроллировать клавиатуру, если кнопок много
    },
  };
}