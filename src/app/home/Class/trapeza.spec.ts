import {Trapeza} from "./trapeza";


describe('Trapeza Testing', () => {
    let trapeza: Trapeza;
  
    beforeEach(() => {
      trapeza = new Trapeza("yellow");
    })
    it('should create trapeza', () => {
        expect(trapeza).toBeTruthy();
      });
});

