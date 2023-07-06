export default class AnimationController {

  private static input: HTMLInputElement | null = document.querySelector('.selector-input');

  public static addInputFlashingAnimation(): void {
    AnimationController.input?.addEventListener('input', () => {
      
      if (AnimationController.input!.value.length > 0) {
        AnimationController.input!.style.animation = 'none';
        AnimationController.input!.style.background = 'inherit';
      }
      if (AnimationController.input!.value.length === 0) {
        AnimationController.input!.style.animation = 'flashing 1s infinite';
        AnimationController.input!.style.background = 'rgba(45, 146, 183, 0.3)';
      }
      
      AnimationController.inputCodeHighlight();
    });
  }

  public static addShakeAnimation(): void {
    const textField = document.querySelector('.text-fields');
    textField!.classList.add('shake');
    textField?.addEventListener('animationend', () => textField!.classList.remove('shake'));
  }

  public static rightAnswerAnimation(callback: () => void): void {
    const tableChildren = document.querySelector('.table')?.children;
    if (tableChildren) {
      for (let i = 0; i < tableChildren.length; i++) {
        tableChildren[i].classList.add('vanished');
        tableChildren[i].addEventListener('animationend', () => callback());
      }
    }
  }

  public static inputCodeHighlight(): void {
    switch (AnimationController.input!.value.charAt(0)) {
      case ('.'):
        AnimationController.input!.style.color = '#00a';
        break;
      case ('#'):
        AnimationController.input!.style.color = '#707';
        break;
      default: 
        AnimationController.input!.style.color = '#535353';
    }
  }

  public static textAnimate(str: string): void {
    for (let i = 0; i < str.length; i++) {
      setTimeout(() => AnimationController.input!.value += str.charAt(i), 300 * i);
    }
  }
}