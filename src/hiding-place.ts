import { EnhancedDOMPoint } from '@/engine/enhanced-dom-point';

export class HidingPlace {
  position: EnhancedDOMPoint;
  cameraRotation: EnhancedDOMPoint;

  constructor(position: EnhancedDOMPoint, cameraRotation: EnhancedDOMPoint) {
    this.position = position;
    this.cameraRotation = cameraRotation;
  }
}
//@alcore #one